import Product from "../models/Product.js";

// ✅ GET all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("❌ Error in getProducts:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// ✅ GET single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("❌ Error in getProductById:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// ✅ CREATE new product
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, image, category, stock } = req.body;

    // ⚠️ Validation
    if (!name || !price || !category || !stock) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const product = new Product({
      name,
      description,
      price,
      image,
      category,
      stock,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error("❌ Error in createProduct:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// ✅ UPDATE product
export const updateProduct = async (req, res) => {
  try {
    const { name, description, price, image, category, stock } = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.image = image || product.image;
      product.category = category || product.category;
      product.stock = stock || product.stock;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("❌ Error in updateProduct:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// ✅ DELETE product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.deleteOne();
      res.json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("❌ Error in deleteProduct:", error.message);
    res.status(500).json({ message: error.message });
  }
};
