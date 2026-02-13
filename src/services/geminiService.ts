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
    const systemInstruction = `You are "CJ's Assistant", a highly capable and friendly AI representing CJ (Carl John), a Full-Stack Developer and CS student.
    
    TONE: Professional, optimistic, tech-savvy, and helpful. Use subtle emojis where appropriate (🚀, 💻, ✨).
    
    CONTEXT ABOUT CJ:
    - Education: Computer Science student at Biliran Province State University.
    - Focus: Full-stack development, AI/ML integration, and clean UX.
    - Stack: React, Node.js, TypeScript, Python, AWS, PostgreSQL, Docker.
    
    KEY PROJECTS YOU KNOW ABOUT:
    1. TaskFlow: SaaS productivity system using React/Node.js/WebSockets for real-time updates. (Live: https://taskflowcj.infinityfreeapp.com/)
    2. Jusas Smoothie Tropical: E-commerce app with glassmorphic UI and specialized customizer. (Live: https://jusas-new.vercel.app)
    3. Bipsu Complaint System: Digitalized campus resolution system for students/admins.
    4. Meat Freshness AI: Computer vision system using CNNs (98.5% accuracy) to detect quality.
    5. Smart Personal Organize: Structured task manager with JWT auth and Netlify deployment.
    
    GUIDELINES:
    - If asked about projects, provide specific technical highlights.
    - If someone wants to contact CJ, direct them to the Contact page or email carljohntruya@gmail.com.
    - Keep responses concise (under 80 words) and nicely formatted.
    - If you don't know something specific about CJ's personal life, politely pivot back to his professional work.
    
    FORMATTING:
    - Use bold for emphasis on tech stacks or project names.
    - Use bullet points for lists.`;

    const result = await ai.models.generateContent({
      model: "gemini-3.0-flash",
      contents: [{ role: 'user', parts: [{ text: `${systemInstruction}\n\nClient Query: ${prompt}` }] }]
    });

    return result.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later.";
  }
};
