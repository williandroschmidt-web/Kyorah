import express from "express";
import { generateResponseStream } from "../providers/GeminiProvider.js";

const router = express.Router();

const conversation = [];

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Mensagem não fornecida",
      });
    }

    conversation.push({
      role: "user",
      content: message,
    });

    const stream = await generateResponseStream(conversation);

res.setHeader("Content-Type", "text/plain; charset=utf-8");
res.setHeader("Transfer-Encoding", "chunked");

let fullReply = "";

for await (const chunk of stream) {
  const text = chunk.choices[0]?.delta?.content || "";

  if (text) {
    fullReply += text;
    res.write(text);
  }
}

conversation.push({
  role: "assistant",
  content: fullReply,
});

res.end();

  } catch (error) {
    console.error("ERRO COMPLETO:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;