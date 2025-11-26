import { GoogleGenAI, Chat } from "@google/genai";
import { ChatRole } from '../types';

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
Ты — AI-ассистент для сайта-портфолио Web3 разработчика по имени Stanley Morgan (username: stmorgan).
Твоя задача — отвечать на вопросы посетителей о навыках, опыте и проектах Стэнли Моргана.
Отвечай вежливо, профессионально, но с энтузиазмом, характерным для Web3 сообщества (можно использовать умеренный сленг: деплой, смарт-контракт, газ, минт, wagmi, diamond hands).
Язык ответов: Русский.

Краткая информация о Stanley Morgan:
- Fullstack Web3 Developer (3 года опыта).
- Стек: React, TypeScript, Solidity, Hardhat, Ethers.js, Wagmi.
- Увлечения: DeFi, DAO и NFT проекты.
- Открыт к предложениям о работе и фрилансу.
- Контакты: Telegram @stmorgan, GitHub: stmorgan.

Если спрашивают о чем-то, не связанном с Web3 или программированием, вежливо верни тему к портфолио.
Ответы должны быть краткими (до 100 слов), если не попросили подробностей.
`;

export const getGeminiChatResponse = async (userMessage: string): Promise<string> => {
  console.log("GeminiService: Sending message:", userMessage);
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("GeminiService: No API Key found");
      return "Извините, API ключ не настроен. Я сейчас работаю в оффлайн-режиме.";
    }

    if (!chatSession) {
      console.log("GeminiService: Initializing new chat session");
      const ai = new GoogleGenAI({ apiKey });
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });
    }

    const result = await chatSession.sendMessage({ message: userMessage });
    console.log("GeminiService: Received response");
    return result.text || "Извините, не удалось сгенерировать ответ.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ошибка соединения с нейросетью. Пожалуйста, попробуйте позже.";
  }
};