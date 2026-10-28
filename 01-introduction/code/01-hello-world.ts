/**
 * Run: npx tsx 01-introduction/code/01-hello-world.ts
 *
 * 🤖 Try asking GitHub Copilot Chat (https://github.com/features/copilot):
 * - "What does the invoke() method return and how do I access different properties?"
 * - "How does the configuration baseURL work with different AI providers?"
 */

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import "dotenv/config";

async function main() {
  console.log("🚀 Hello LangChain.js!\n");

  const model = new ChatGoogleGenerativeAI({
    model: process.env.AI_MODEL || "gemini-3.8-flash",
    apiKey: process.env.AI_API_KEY,
    temperature: 0.7,
  });

  const response = await model.invoke("What is LangChain in one sentence?");

  console.log("🤖 AI Response:", response.content);
  console.log("\n✅ Success! You just made your first LangChain.js call!");
}

main().catch(console.error);
