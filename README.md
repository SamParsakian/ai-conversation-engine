# Let's Use AI API

A hands-on Node.js project demonstrating practical usage of the OpenAI API — from a basic request to streaming responses in real time.

## Overview

This project walks through the OpenAI Responses API in incremental steps, showing how each parameter and feature changes the model's behavior.

## Features

- Setting up an authenticated OpenAI client
- Sending a basic request and inspecting the full response object
- Reading token usage and response metadata
- Controlling output with `temperature` and `max_output_tokens`
- Maintaining conversation context with `previous_response_id`
- Streaming responses token by token for a real-time experience

## Setup

```bash
npm install
```

Create a `.env` file in the project root (see `.env.example` for the expected format):

```
OPENAI_API_KEY=your_api_key_here
```

## Usage

```bash
node index.js
```

## Project Structure

```
.
├── index.js          # Main script, evolves through the project's commit history
├── package.json
├── .env.example       # Template for required environment variables
└── README.md
```

## Demo Video

A full video walkthrough of this project is available here: _(link coming soon)_
