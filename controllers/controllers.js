import { Badge } from "../models/User.model.js";
import dontenv from "dotenv";
dontenv.config();

export async function getBadge(req, res) {
  try {
    const badges = await Badge.find();
    res.json(badges);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
