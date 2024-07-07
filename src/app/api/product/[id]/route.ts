import { NextRequest, NextResponse } from "next/server";

import { Product } from "@/schemas/product-schema";
import { connectToDB } from "@/server/utils/connect-to-db";
import { Counter } from "@/server/schemas/counter";

export const GET = async (
  _: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    const product = await Product.findOne({ id: Number(params.id) });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get product" },
      { status: 500 }
    );
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const body = await req.json();

  try {
    await connectToDB();

    const updatedProduct = await Product.findOneAndUpdate(
      { id: Number(params.id) },
      body,
      { new: true }
    );

    return NextResponse.json({ data: updatedProduct }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
};

export const DELETE = async (
  _: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();

    const deletedProduct = await Product.findOneAndDelete({
      id: Number(params.id),
    });

    if (!deletedProduct) {
      return NextResponse.json(
        { error: "Failed to delete product" },
        { status: 400 }
      );
    }

    await Counter.findByIdAndUpdate(
      { _id: "products" },
      { $inc: { sequence_value: -1 } }
    );

    return NextResponse.json({ data: deletedProduct }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
};
