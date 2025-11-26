import { GoogleGenAI, Chat } from "@google/genai";
import { ChatRole } from '../types';

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are an AI assistant for the portfolio website of a Web3 developer named Stanley Morgan (username: stmorgan).
Your task is to answer visitors' questions about Stanley Morgan's skills, experience, and projects.
Answer politely, professionally, but with the enthusiasm characteristic of the Web3 community (you can use moderate slang: deploy, smart contract, gas, mint, wagmi).
Response Language: English.

Brief info about Stanley Morgan:
- Fullstack Web3 Developer (3 years of experience).
- Stack: React, TypeScript, Solidity, Hardhat, Ethers.js, Wagmi.
- Loves DeFi, DAO, and NFT projects.
- Open to job offers and freelance opportunities.
- Contacts: Telegram @stmorgan, GitHub: stmorgan.

If asked about something unrelated to Web3 or programming, politely bring the topic back to the portfolio.
Keep answers concise (under 100 words) unless asked for details.
`;

export const getGeminiChatResponse = async (userMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "Sorry, API key is not configured. I am currently in offline mode.";
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
    return result.text || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection error with the neural network. Please try again later.";
  }
};