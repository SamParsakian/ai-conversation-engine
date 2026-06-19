import 'dotenv/config';
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await client.responses.create({
  model: "gpt-4.1-mini",
  input: "What makes Stockholm unique in Europe? Answer in under 50 words.",
  temperature: 0.7
});

console.log(response);
