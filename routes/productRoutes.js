import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

/**
 * 🟢 Public Routes (frontend users ke liye)
 */
router.get("/", getProducts);       // All products
router.get("/:id", getProductById); // Single product by ID

/**
 * 🔴 Admin Routes (sirf admin panel ke liye)
 * Note: future me yahan "authMiddleware" add karenge
 */
router.post("/", createProduct);    // Add new product
router.put("/:id", updateProduct);  // Update product
router.delete("/:id", deleteProduct); // Delete product

export default router;
