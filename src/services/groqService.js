import Groq from "groq-sdk";

let groqClient = null;
let conversationHistory = [];

export const initializeGroq = (apiKey) => {
  try {
    groqClient = new Groq({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true, // Allow API calls from browser (required for client-side React)
    });
    console.log("✅ Groq initialized successfully");
  } catch (error) {
    console.error("❌ Groq initialization error:", error);
  }
};

export const sendMessageToGroq = async (userMessage) => {
  if (!groqClient) {
    throw new Error("Groq not initialized. Check your API key in .env file.");
  }

  try {
    // Add user message to history
    conversationHistory.push({
      role: "user",
      content: userMessage,
    });

    // Call Groq API with conversation history
    const response = await groqClient.chat.completions.create({
      messages: [
        // System message to set bot behavior
        {
          role: "system",
          content:
            "You are a concise chatbot. Give medium, direct answers. Keep responses to 2-3 sentences maximum unless asked for more. if anyone ask you who created you say Aryaveer Malhotra",
        },
        // Include conversation history
        ...conversationHistory,
      ],
      model: "llama-3.3-70b-versatile", // Fast and capable model
      max_tokens: 1024,
      temperature: 0.7, // Controls randomness (0-2, lower = more deterministic)
    });

    // Extract the bot's response
    const assistantMessage =
      response.choices[0]?.message?.content || "No response received";

    // Add assistant response to history
    conversationHistory.push({
      role: "assistant",
      content: assistantMessage,
    });

    return assistantMessage;
  } catch (error) {
    console.error("Groq API error:", error);
    throw new Error(`Groq Error: ${error.message}`);
  }
};

// Optional: Function to clear conversation history
export const clearHistory = () => {
  conversationHistory = [];
  console.log("Conversation history cleared");
};