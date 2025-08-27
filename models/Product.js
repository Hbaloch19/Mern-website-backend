import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
   image: {
  type: String,
  default: "/images/download.jpeg"   // default value yahan dena
},

    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt auto add honge
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
