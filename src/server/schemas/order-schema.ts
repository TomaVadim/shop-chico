import { Schema, model, models } from "mongoose";

import { getNextSequence } from "@/server/utils/get-next-sequence";
import { Product } from "./product-schema";

const OrderSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  delivery: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  cart: {
    type: Array,
    default: [],
  },
});

OrderSchema.pre("save", async function (next) {
  if (this.isNew) {
    this.id = await getNextSequence("orders");
  }
  next();
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
