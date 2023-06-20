import { Badge } from "../models/User.model.js";
import dontenv from "dotenv";
dontenv.config();

export async function getBadge(req, res) {
  try {
    const badges = req.body;

    const createdBadges = [];

    for (const key in badges) {
      if (badges.hasOwnProperty(key)) {
        const { name, url, state } = badges[key];
        // Check if a badge with the same name and URL already exists
        const existingBadge = await Badge.findOne({ name, url });
        if (existingBadge) {
          // Update the state if the badge already exists
          existingBadge.state = state;
          // Save the changes to the existing badge
          await existingBadge.save();
          createdBadges.push(existingBadge);
        } else {
          // Create a new badge if it doesn't already exist
          const newBadge = await Badge.create({ name, url, state });
          createdBadges.push(newBadge);
        }
      }
    }

    res.json(createdBadges);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
