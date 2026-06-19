import 'dotenv/config';
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await client.responses.create({
  model: "gpt-4.1-mini",
  input: "Give three interesting facts about Stockholm. Answer in under 50 words."
});

console.log(response);
