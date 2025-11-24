"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateContent = void 0;
const genai_1 = require("@google/genai");
// Lazy initialization - don't create the client until it's actually needed
let ai = null;
function getAIClient() {
    if (!ai) {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error("GEMINI_API_KEY is missing.");
        }
        ai = new genai_1.GoogleGenAI({ apiKey });
    }
    return ai;
}
const generateContent = async (prompt) => {
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
    }
    catch (error) {
        console.error("Error generating content:", error);
        throw new Error("Failed to generate content from AI");
    }
};
exports.generateContent = generateContent;
//# sourceMappingURL=ai.js.map