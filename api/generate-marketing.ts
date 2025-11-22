import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  console.log("API Handler started");

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log("Parsing request body...");
    const { topic } = req.body;
    console.log(`Topic received: ${topic}`);

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing in environment variables");
      return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });
    }
    console.log("API Key found (length: " + apiKey.length + ")");

    console.log("Initializing GoogleGenAI with v1 endpoint...");
    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
      You are an expert marketing strategist for Cargonex.io.
      Task: Conduct a deep research simulation on the topic: "${topic}" and generate high-quality multi-modal marketing assets.
      IMPORTANT: ALL OUTPUT MUST BE IN HEBREW (עברית).
      
      Return ONLY valid JSON with the following structure:
      {
        "research_summary": "...",
        "blog_title": "...",
        "blog_content": "...",
        "linkedin_post": "...",
        "twitter_thread": ["...", "..."],
        "audio_script": "...",
        "video_script": "..."
      }
    `;

    console.log("Sending request to Gemini 2.5 Flash...");
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    console.log("Gemini response received");

    const text = response.text;
    console.log("Raw text response length: " + text.length);

    // Attempt to parse JSON
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      const data = jsonMatch ? JSON.parse(jsonMatch[0]) : { raw_text: text };
      console.log("JSON parsing successful");
      return res.status(200).json(data);
    } catch (parseError) {
      console.error("JSON Parsing failed:", parseError);
      console.log("Raw text was:", text);
      return res.status(200).json({ raw_text: text, warning: "Failed to parse JSON" });
    }

  } catch (error: any) {
    console.error("Detailed Error in API Handler:", error);
    return res.status(500).json({
      error: error.message || "Failed to generate content",
      details: error.toString()
    });
  }
}
