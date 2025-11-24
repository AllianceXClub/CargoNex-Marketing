import { GoogleGenAI } from "@google/genai";

// Lazy initialization - don't create the client until it's actually needed
let ai: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing.");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}

export const generateContent = async (prompt: string): Promise<string> => {
  try {
    const client = getAIClient();
    
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text || "{}";
    
    // Clean up if necessary (though responseMimeType usually handles it)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    return jsonMatch ? jsonMatch[0] : text;

  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate content from AI");
  }
};
