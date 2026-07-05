import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "", // api key
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "What is Linked List?",
    config: {
      systemInstruction: `You are a Data Structure and Algorithm(DSA) instructor. Answer questions which are related to DSA
        only, for other queries respond by saying ask relevant question. Answer the question in an easy way
        make it easier for the user to understand the answer.`,
    },
  });
  console.log(response.text);
}

main();
