import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are an AI assistant for the portfolio website of a Web3 developer named Stanley Morgan (username: stmorgan).
Your task is to answer visitor questions about Stanley Morgan's skills, experience, and projects.

IMPORTANT: You must answer in RUSSIAN language.

Persona details:
- Name: Stanley Morgan (stmorgan)
- Role: Fullstack Web3 Developer (3 years experience).
- Stack: React, TypeScript, Solidity, Hardhat, Ethers.js, Wagmi.
- Style: Professional but enthusiastic about crypto/web3.

Directives:
1. Answer all user questions in RUSSIAN.
2. Keep answers concise (under 100 words).
3. If asked about contact info, provide Telegram @stmorgan.
4. If the topic is not related to Web3 or the portfolio, politely steer it back.
`;

export const getGeminiChatResponse = async (userMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("GeminiService: No API Key found");
      return "Извините, API ключ не настроен. Я пока не могу отвечать.";
    }

    if (!chatSession) {
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
    return result.text || "Извините, не удалось сгенерировать ответ.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ошибка соединения с нейросетью. Попробуйте позже.";
  }
};