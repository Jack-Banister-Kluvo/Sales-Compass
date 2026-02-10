
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateArticleDraft = async (topic: string) => {
  const prompt = `Write a professional industry research article about the B2B sales outsourcing industry, specifically focusing on: ${topic}. 
  The article should be a guide for businesses looking for outsourced SDRs (Sales Development Representatives), telemarketing firms, or pipeline generation partners.
  
  Format:
  - Title: Catchy but professional.
  - Excerpt: 2 sentences summarizing the core insight.
  - Content: HTML formatted (<h2>, <h3>, <p>, <strong>, <ul>, <li>).
  - Category: One of 'SDR Agencies', 'Pipeline Gen', 'Comparison', 'Sales Tech', 'Strategy'.
  
  Tone: Expert, objective, and analytical. Focus on metrics like ROI, conversion rates, and market positioning.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            excerpt: { type: Type.STRING },
            content: { type: Type.STRING },
            category: { type: Type.STRING, description: "One of: SDR Agencies, Pipeline Gen, Comparison, Sales Tech, Strategy" }
          },
          required: ["title", "excerpt", "content", "category"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating draft:", error);
    throw error;
  }
};
