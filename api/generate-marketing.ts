import { GoogleGenerativeAI } from "@google/generative-ai";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Only allow POST requests
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { topic } = req.body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ error: "GEMINI_API_KEY not configured" });
        }

        if (!topic) {
            return res.status(400).json({ error: "Topic is required" });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

        const prompt = `
      You are an expert marketing strategist for Cargonex.io, a leading logistics and freight forwarding platform.
      
      Task: Conduct a deep research simulation on the topic: "${topic}" and generate high-quality multi-modal marketing assets.
      
      IMPORTANT: ALL OUTPUT MUST BE IN HEBREW (עברית).
      
      Step 1: Research
      - Analyze the current trends related to "${topic}" in the logistics industry.
      - Identify key pain points for importers/exporters.
      - Consider how Cargonex.io's AI-powered platform addresses these challenges.
      
      Step 2: Content Generation
      Based on the research, create the following content in Hebrew:
      
      1. **Research Summary**: A brief overview of your findings (2-3 paragraphs).
      2. **Blog Post**: 
         - Title (compelling and SEO-friendly)
         - Content (500-700 words, structured with H2/H3 headings)
      3. **LinkedIn Post**: Professional tone, 150-200 words, with relevant hashtags.
      4. **Twitter Thread**: 3 tweets, each under 280 characters, engaging and informative.
      5. **Audio Script (Podcast Style)**: 
         - A dialogue between a "Host" and an "Expert"
         - 3-5 minute conversation
         - Natural, conversational tone
         - Discuss the topic and how Cargonex.io helps
      6. **Video Script**: 
         - 30-second promotional video
         - Scene-by-scene breakdown
         - Include visual descriptions and voiceover text
      
      Output Format (JSON):
      {
        "research_summary": "...",
        "blog_title": "...",
        "blog_content": "...",
        "linkedin_post": "...",
        "twitter_thread": ["tweet 1", "tweet 2", "tweet 3"],
        "audio_script": "Host: ...\\nExpert: ...\\nHost: ...",
        "video_script": "Scene 1: [Visual description] - Voiceover: ...\\nScene 2: ..."
      }
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Extract JSON from the response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        const data = jsonMatch ? JSON.parse(jsonMatch[0]) : { raw_text: text };

        return res.status(200).json(data);
    } catch (error: any) {
        console.error("Error generating content:", error);
        return res.status(500).json({
            error: error.message || "Failed to generate content",
            details: error.toString()
        });
    }
}
