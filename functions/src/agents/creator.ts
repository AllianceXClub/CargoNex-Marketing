import { GoogleGenAI } from "@google/genai";
import * as logger from "firebase-functions/logger";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenAI({ apiKey });

export async function creatorAgent(researchBrief: any): Promise<any> {
    logger.info(`[Creator] Starting content generation based on brief.`);

    const prompt = `
    You are the Lead Content Creator for CargoNex.
    
    OBJECTIVE:
    Create multi-modal marketing content based on the provided strategic brief.
    
    BRIEF:
    ${JSON.stringify(researchBrief, null, 2)}
    
    INSTRUCTIONS:
    1. Write a Blog Post (Title + Content) - Educational and professional tone.
    2. Write a LinkedIn Post - Engaging, professional, with emojis.
    3. Write a Twitter Thread (3-5 tweets) - Punchy and concise.
    4. ALL CONTENT MUST BE IN HEBREW (עברית).
    
    OUTPUT FORMAT:
    Return a JSON object:
    {
        "blog": {
            "title": "...",
            "content": "..."
        },
        "linkedin_post": "...",
        "twitter_thread": ["tweet1", "tweet2", "..."]
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

        const cleanText = text.replace(/```json|```/g, "").trim();
        const data = JSON.parse(cleanText);

        logger.info(`[Creator] Content drafts created.`);
        return data;

    } catch (error) {
        logger.error("[Creator] Error generating content:", error);
        throw error;
    }
}
