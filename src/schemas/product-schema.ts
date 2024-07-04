import { Schema, model, models } from "mongoose";

import { getNextSequence } from "@/server/utils/get-next-sequence"; // Adjust the import path accordingly

export const ProductSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },

  insert: {
    type: String,
    enum: ["with", "without"],
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "unisex"],
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  reserved: {
    type: Boolean,
    default: false,
  },
});

ProductSchema.pre("save", async function (next) {
  if (this.isNew) {
    this.id = await getNextSequence("products");
  }
  next();
});

export const Product = models.Product || model("Product", ProductSchema);
