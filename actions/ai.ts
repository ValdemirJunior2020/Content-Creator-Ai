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
  
  
    export async function runAi() {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });
  
      const result = await chatSession.sendMessage(
        "write a special 200 words motivational text"
      );
      return result.response.text();
    }
  

  