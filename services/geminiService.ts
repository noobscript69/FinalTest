
import { GoogleGenAI, Type } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateDesignConcept = async (prompt: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `You are a world-class architectural and interior design consultant. 
    Analyze the following concept and provide a professional, poetic, and technical summary (max 100 words).
    Concept: ${prompt}`,
    config: {
      temperature: 0.7,
      topP: 0.9,
    },
  });
  return response.text;
};

export const generateVisual = async (prompt: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: `A high-end, hyper-realistic architectural visualization or luxury product design of: ${prompt}. 
          Cinematic lighting, 8k resolution, minimalist aesthetic, professional photography style.`,
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
      },
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("No image generated");
};
