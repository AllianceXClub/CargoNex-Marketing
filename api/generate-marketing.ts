import { GoogleGenerativeAI } from "@google/generative-ai";



export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { topic } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
        "audio_script": "Host: ...\\nExpert: ...",
        "video_script": "Scene 1: [Visual description] - Voiceover: ..."
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Attempt to parse JSON from the response (Gemini might return markdown code blocks)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const data = jsonMatch ? JSON.parse(jsonMatch[0]) : { raw_text: text };

    return res.status(200).json(data);
  } catch (error: any) {
    console.error("Error generating content:", error);
    return res.status(500).json({ error: error.message || "Failed to generate content" });
  }
}
