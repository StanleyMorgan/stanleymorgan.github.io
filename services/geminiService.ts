import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are an AI assistant for the portfolio website of a Web3 developer named Stanley Morgan (username: stmorgan).
Your task is to answer visitor questions about Stanley Morgan's skills, experience, and projects.
Answer politely, professionally, but with the enthusiasm characteristic of the Web3 community (moderate slang is allowed: deploy, smart contract, gas, mint, wagmi, diamond hands).
Response Language: English.

Brief information about Stanley Morgan:
- Fullstack Web3 Developer (3 years of experience).
- Stack: React, TypeScript, Solidity, Hardhat, Ethers.js, Wagmi.
- Interests: DeFi, DAO, and NFT projects.
- Open to job offers and freelance work.
- Contact: Telegram @stmorgan, GitHub: stmorgan.

If asked about something unrelated to Web3 or programming, politely steer the topic back to the portfolio.
Answers should be concise (under 100 words) unless details are requested.
`;

export const getGeminiChatResponse = async (userMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("GeminiService: No API Key found");
      return "Sorry, the API key is not configured. I am currently offline.";
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
    return result.text || "Sorry, I could not generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection error with the neural network. Please try again later.";
  }
};