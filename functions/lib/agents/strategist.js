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
exports.strategistAgent = strategistAgent;
const genai_1 = require("@google/genai");
const logger = __importStar(require("firebase-functions/logger"));
const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new genai_1.GoogleGenAI({ apiKey });
async function strategistAgent(topic) {
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
        if (!text)
            throw new Error("Empty response from Gemini");
        // Parse JSON (handling potential markdown wrapping)
        const cleanText = text.replace(/```json|```/g, "").trim();
        const data = JSON.parse(cleanText);
        logger.info(`[Strategist] Research complete.`);
        return data;
    }
    catch (error) {
        logger.error("[Strategist] Error generating brief:", error);
        throw error;
    }
}
//# sourceMappingURL=strategist.js.map