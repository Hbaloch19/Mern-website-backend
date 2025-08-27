import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";
import connectDB from "../config/db.js";

dotenv.config();

const products = [

  {
    "name": "Business Card Pack (100 pcs)",
    "description": "Professional business card printing (standard size).",
    "price": 1200,
    "image": "/images/Business card.webp",
    "category": "Printing"
  },
  {
    "name": "A4 Color Photocopy",
    "description": "High-quality color photocopy (per page).",
    "price": 25,
    "image": "/images/color photocopy.jpg",
    "category": "Photocopy & Lamination"
  },
  {
    "name": "Photo Print (4x6)",
    "description": "High-quality glossy photo print.",
    "price": 30,
    "image": "/images/Photo printing.jpeg",
    "category": "Printing"
  },
  {
    "name": "Poster Printing",
    "description": "Large size poster printing with vivid colors.",
    "price": 250,
    "image": "/images/poster.avif",
    "category": "Printing"
  },
  {
    "name": "Custom ID Card Printing",
    "description": "Plastic ID card printing with custom design.",
    "price": 350,
    "image": "/images/id card.jpeg",
    "category": "Printing"
  },
  {
    "name": "Form Filling Service",
    "description": "We fill your official forms (college, job, NADRA, etc).",
    "price": 200,
    "image": "/images/form fillingf.jpeg",
    "category": "Digital Services"
  },
  {
    "name": "PDF Editing Service",
    "description": "Modify, merge or edit your PDF documents.",
    "price": 150,
    "image": "/images/pdf edit.jpeg",
    "category": "Editing"
  },
  {
    "name": "Lamination (A4 Sheet)",
    "description": "Protect your documents with premium lamination.",
    "price": 50,
    "image": "/images/laamination.jpeg",
    "category": "Photocopy & Lamination"
  },
  {
    "name": "Notebook (200 pages)",
    "description": "Durable and high-quality notebook for students.",
    "price": 150,
    "image": "/images/notebooks.jpg",
    "category": "Stationery"
  },
  {
    "name": "Sticky Notes Pack",
    "description": "Colorful sticky notes for reminders & office use.",
    "price": 100,
    "image": "/images/stickynotes.jpeg",
    "category": "Stationery"
  },
  {
    "name": "Pencils (Pack of 12)",
    "description": "High-quality wooden pencils.",
    "price": 80,
    "image": "/images/pencils.webp",
    "category": "Stationery"
  },
  {
    "name": "General Printing Service",
    "description": "Standard A4/A3 document & design printing.",
    "price": 15,
    "image": "/images/printingg.jpg",
    "category": "Printing"
  }
]



const importData = async () => {
  try {
    await connectDB();
    await Product.deleteMany(); // purane products clear kar do
    await Product.insertMany(products); // naye dummy products insert kar do
    console.log("Dummy Products Inserted!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
