import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // agar user system add karna ho future me
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        qty: Number,
      },
    ],
    shippingInfo: {
      name: String,
      address: String,
      city: String,
      phone: String,
    },
    paymentMethod: {
      type: String,
      enum: ["COD", "Card", "JazzCash", "Easypaisa"],
      default: "COD",
    },
    transactionId: {
      type: String,
      required: function () {
        // COD ke ilawa baki methods ke liye required hoga
        return this.paymentMethod !== "COD";
      },
    },
    totalPrice: Number,
    status: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
