import "dotenv/config";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import pool from "../config/database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initializeDatabase() {
  try {
    const schema = fs.readFileSync(
      path.join(__dirname, "schema.sql"),
      "utf8"
    );

    await pool.query(schema);

    console.log("✅ Banco de dados inicializado com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao inicializar o banco:");
    console.error(error);
  } finally {
    await pool.end();
  }
}

initializeDatabase();