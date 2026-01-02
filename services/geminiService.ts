import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getDailyAiQuote = async (category: string): Promise<string> => {
  if (!apiKey) {
    return `Create the life you can't wait to wake up to. (API Key missing)`;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short, powerful, unique motivational quote about ${category}. Do not include quotes or author names, just the text.`,
    });
    return response.text?.trim() || "Shine your light.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The stars are always shining, even behind the clouds.";
  }
};

export const getAiRecommendation = async (userLevel: number, mood: string): Promise<string> => {
  if (!apiKey) return "Focus on consistency today.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The user is at level ${userLevel} in a self-improvement app. They are feeling ${mood}. Give a 1 sentence actionable tip to gain momentum.`,
    });
    return response.text?.trim() || "Keep pushing forward.";
  } catch (error) {
    return "Every step counts towards the summit.";
  }
};
