import 'dotenv/config';
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await client.responses.create({
  model: "gpt-4.1-mini",
  input: "What is KTH Royal Institute of Technology in Stockholm? Answer in under 50 words."
});

console.log(response.output_text);
console.log(response.id);
