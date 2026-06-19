import 'dotenv/config';
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await client.responses.create({
  model: "gpt-4.1-mini",
  previous_response_id: "PASTE_YOUR_RESPONSE_ID_HERE",
  input: "Explain it simpler."
});

console.log(response.output_text);
