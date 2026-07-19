import "dotenv/config";
import express from "express";
import cors from "cors";

import chatRoutes from "./routes/chat.routes.js";

console.log("Groq API carregada:", !!process.env.GROQ_API_KEY);

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "online",
    name: "Kyorah API",
    version: "0.1.0",
  });
});

app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Kyorah API rodando em http://localhost:${PORT}`);
});