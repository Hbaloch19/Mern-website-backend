import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// ✅ Import DB connection function
import connectDB from "./config/db.js";

// ✅ Import Routes
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import contactRoutes from "./routes/contactRoutes.js"
// ✅ Load environment variables
dotenv.config();
console.log("MONGO_URI is:", process.env.MONGO_URI);


// ✅ Create express app
const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Handle __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Middlewares
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://mern-website-frontend-6xbg.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


// ✅ Serve images folder statically
app.use("/images", express.static(path.join(__dirname, "images")));

// ✅ API Routes
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoutes);

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
