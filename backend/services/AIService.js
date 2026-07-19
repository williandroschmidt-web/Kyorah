import { generateResponse } from "../providers/GeminiProvider.js";

export async function askAI(message) {
  return await generateResponse(message);
}