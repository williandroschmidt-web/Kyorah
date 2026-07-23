import "dotenv/config";
import express from "express";
import cors from "cors";
import pool from "./config/database.js";

import chatRoutes from "./routes/chat.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "online",
    name: "Kyorah API",
    version: "0.1.0",
  });
});

app.use("/api/chat", chatRoutes);

try {
  await pool.query("SELECT NOW()");
  console.log("✅ PostgreSQL conectado com sucesso!");
} catch (error) {
  console.error("❌ Erro ao conectar ao PostgreSQL:");
  console.error(error);
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Kyorah API rodando na porta ${PORT}`);
});