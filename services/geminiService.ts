import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Ensure this is set in your environment
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateAIResponse = async (prompt: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, I haven't been configured with an API key yet. Please contact the developer.";
  }

  try {
    const modelId = 'gemini-3-flash-preview';
    const systemInstruction = `You are an AI assistant for CJ, a Full-Stack Developer. 
    You are integrated into his portfolio website.
    Your goal is to answer questions about CJ's skills, experience, and projects in a professional yet friendly manner.
    
    Here is some context about CJ:
    - Role: Computer Science Student & Full-Stack Developer.
    - Core Stack: React, Node.js, AWS, TypeScript, Python, PostgreSQL, Docker, Next.js.
    - Key Projects:
      1. Jusas Tropical Smoothie: A full-stack POS and E-commerce system (React, Node, MySQL). Features real-time inventory, secure payments simulation.
      2. Meat Freshness Detection: AI/ML project using Python, TensorFlow, CNNs for food safety.
      3. TaskFlow: SaaS productivity tool with real-time WebSockets (React, Socket.io, Postgres).
    - Philosophy: Focuses on clean UI, scalable backends, and bridging theory with product.
    - Security knowledge: RBAC, JWT Auth, Stateless sessions.
    
    Keep responses concise (under 100 words unless detailed explanation is asked). 
    If asked about contact, direct them to the contact form or email.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || "I'm thinking...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later.";
  }
};
