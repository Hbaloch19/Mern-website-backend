import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// Place new order
router.post("/", async (req, res) => {
  try {
    const { items, shippingInfo, paymentMethod, totalPrice, transactionId } = req.body;

    // 🔹 COD ke ilawa agar transactionId missing hai to error
    if (paymentMethod !== "COD" && !transactionId) {
      return res.status(400).json({ message: "Transaction ID is required for online payments" });
    }

    const order = await Order.create({
      items,
      shippingInfo,
      paymentMethod,
      totalPrice,
      transactionId, // save bhi karenge
    });

    res.json({ message: "Order placed successfully ✅", order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all orders (admin use)
router.get("/", async (req, res) => {
  const orders = await Order.find().populate("items.productId");
  res.json(orders);
});

export default router;
