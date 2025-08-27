// routes/contactRoutes.js
import express from "express";
const router = express.Router();

import ContactMessage from "../models/ContactMessage.js";

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
