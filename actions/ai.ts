'use server';
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Keep the function structure intact
export async function runAi(text: string) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    // Ensure `text` is a proper string passed to `sendMessage`
    const result = await chatSession.sendMessage(text);  // Minimal change here

    return result.response.text();  // Return result properly
  } catch (err) {
    console.error("Error:", err);  // Log the error without interrupting
    throw new Error("An error occurred while processing your AI request.");  // Same error message
  }
}
