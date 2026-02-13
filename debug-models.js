
import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyBhBBRQWBXdYgrCQkjVUaj4EOrMQAlOLjs"; 

if (!apiKey) {
  console.error("API Key is missing!");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

(async () => {
  try {
    const response = await ai.models.list();
    console.log("Available models:");
    response.models.forEach(m => console.log(m.name));
  } catch (error) {
    if (error.response && error.response.data) {
       console.error("Error details:", JSON.stringify(error.response.data, null, 2));
    }
    console.error("Error listing models:", error.message || error);
  }
})();
