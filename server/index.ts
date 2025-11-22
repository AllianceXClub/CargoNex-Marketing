import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // API Route for Marketing Generation
  app.post("/api/generate-marketing", async (req, res) => {
    try {
      const { topic } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "GEMINI_API_KEY not configured" });
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
        
        Step 2: Content Generation
        Based on the research, create the following in Hebrew:
        1. **Blog Post**: Title and Summary.
        2. **Social Media**: LinkedIn Post and Twitter Thread.
        3. **Audio Script (Podcast)**: A dialogue script between a "Host" and an "Expert" discussing this topic (similar to NotebookLM's Audio Overview).
        4. **Video Script**: A scene-by-scene description for a 30-second promotional video, including visual cues and voiceover text.
        
        Output Format (JSON):
        {
          "research_summary": "...",
          "blog_title": "...",
          "blog_content": "...",
          "linkedin_post": "...",
          "twitter_thread": ["...", "...", "..."],
          "audio_script": "Host: ...\nExpert: ...",
          "video_script": "Scene 1: [Visual description] - Voiceover: ..."
        }
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Attempt to parse JSON from the response (Gemini might return markdown code blocks)
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      const data = jsonMatch ? JSON.parse(jsonMatch[0]) : { raw_text: text };

      res.json(data);
    } catch (error: any) {
      console.error("Error generating content:", error);
      res.status(500).json({ error: error.message || "Failed to generate content" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = parseInt(process.env.PORT || "4001", 10);

  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${port}/`);
  });
}

startServer().catch(console.error);
