import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

// Get all cart items
router.get("/", async (req, res) => {
  try {
    const cart = await Cart.find().populate("productId");
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add item to cart (⚡ duplicate allowed)
router.post("/", async (req, res) => {
  try {
    const { _id, qty } = req.body;

    // Har dafa new row create hoga
    await Cart.create({ productId: _id, qty });

    const cart = await Cart.find().populate("productId");
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Remove from cart
router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    const cart = await Cart.find().populate("productId");
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
