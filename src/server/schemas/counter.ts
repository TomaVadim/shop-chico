import { Schema, model, models } from "mongoose";

const CounterSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  sequence_value: {
    type: Number,
    required: true,
  },
});

export const Counter = models.Counter || model("Counter", CounterSchema);
