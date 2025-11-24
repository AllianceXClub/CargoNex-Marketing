"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatorAgent = creatorAgent;
const genai_1 = require("@google/genai");
const logger = __importStar(require("firebase-functions/logger"));
const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new genai_1.GoogleGenAI({ apiKey });
async function creatorAgent(researchBrief) {
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
        if (!text)
            throw new Error("Empty response from Gemini");
        const cleanText = text.replace(/```json|```/g, "").trim();
        const data = JSON.parse(cleanText);
        logger.info(`[Creator] Content drafts created.`);
        return data;
    }
    catch (error) {
        logger.error("[Creator] Error generating content:", error);
        throw error;
    }
}
//# sourceMappingURL=creator.js.map