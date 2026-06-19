import 'dotenv/config';
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const stream = await client.responses.create({
  model: "gpt-4.1-mini",
  input: "Describe Stockholm's Old Town in three points. Answer in under 50 words.",
  temperature: 0.7,
  max_output_tokens: 50,
  stream: true
});

for await (const event of stream) {
  console.log(event.delta);
}
