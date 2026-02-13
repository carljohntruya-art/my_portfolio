import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || (import.meta as any).env.VITE_GEMINI_API_KEY || '';
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateAIResponse = async (prompt: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, I haven't been configured with an API key yet. Please contact the developer.";
  }

  try {
    const systemInstruction = `You are an AI assistant for CJ, a Full-Stack Developer. 
    You are integrated into his portfolio website.
    Your goal is to answer questions about CJ's skills, experience, and projects in a professional yet friendly manner.
    
    Here is some context about CJ:
    - Role: Computer Science Student & Full-Stack Developer.
    - Core Stack: React, Node.js, AWS, TypeScript, Python, PostgreSQL, Docker, Next.js.
    - Philosophy: Focuses on clean UI, scalable backends, and bridging theory with product.
    
    Keep responses concise (under 100 words).`;

    const result = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [{ role: 'user', parts: [{ text: `${systemInstruction}\n\nUser Question: ${prompt}` }] }]
    });

    return result.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later.";
  }
};
