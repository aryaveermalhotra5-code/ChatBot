import { GoogleGenerativeAI } from "@google/generative-ai";

let chat = null;

export const initializeGemini = (apiKey) => {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });
    
    chat = model.startChat({
      
        history: [
    {
      role: "user",
      parts: [{ text: "You are a concise chatbot. Give medium, direct answers. Keep responses to 2-3 sentences maximum unless asked for more." }],
    },
    {
      role: "model",
      parts: [{ text: "I'll keep my answers brief and to the point - 2-6 sentences max." }],
    },
  ],
      
      generationConfig: {
        maxOutputTokens: 1024,
      },
    });
    console.log("✅ Gemini initialized successfully");
  } catch (error) {
    console.error("❌ Gemini initialization error:", error);
  }
};

export const sendMessageToGemini = async (message) => {
  if (!chat) {
    throw new Error("Gemini not initialized. Check your API key in .env file.");
  }
  
  try {
    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error(`Gemini Error: ${error.message}`);
  }
};