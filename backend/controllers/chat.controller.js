import { Router } from "express";
import { chat } from "./chat.controller.js";

const router = Router();
const conversation = [];

router.post("/", chat);

export default router;