import { GoogleGenAI } from "@google/genai";
import * as logger from "firebase-functions/logger";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenAI({ apiKey });

export async function strategistAgent(topic: string): Promise<any> {
    logger.info(`[Strategist] Starting research on: ${topic}`);

    const prompt = `
    You are the Chief Strategist for CargoNex, a logistics technology company.
    
    OBJECTIVE:
    Analyze the following topic and create a strategic content brief for our marketing team.
    Topic: "${topic}"
    
    INSTRUCTIONS:
    1. Identify 3 key trends or angles related to this topic in the current logistics market.
    2. Define the target audience (e.g., Freight Forwarders, Shippers, Supply Chain Managers).
    3. Suggest a "Hook" or main angle that is contrarian or highly engaging.
    4. Provide a list of 5 SEO keywords.
    
    OUTPUT FORMAT:
    Return a JSON object with the following structure:
    {
        "trends": ["trend1", "trend2", "trend3"],
        "target_audience": "description",
        "main_angle": "description",
        "seo_keywords": ["kw1", "kw2", "kw3", "kw4", "kw5"],
        "brief_summary": "A short paragraph summarizing the direction."
    }
    `;

    try {
        const response = await genAI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json"
            }
        });

        const text = response.text;
        if (!text) throw new Error("Empty response from Gemini");

        // Parse JSON (handling potential markdown wrapping)
        const cleanText = text.replace(/```json|```/g, "").trim();
        const data = JSON.parse(cleanText);

        logger.info(`[Strategist] Research complete.`);
        return data;

    } catch (error) {
        logger.error("[Strategist] Error generating brief:", error);
        throw error;
    }
}
