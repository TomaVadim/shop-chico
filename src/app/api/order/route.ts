import { NextRequest, NextResponse } from "next/server";

import { checkoutFormSchema } from "@/features/cart/schemas/checkout-form-schema";
import Order from "@/server/schemas/order-schema";
import { connectToDB } from "@/server/utils/connect-to-db";
import { Product } from "@/server/schemas/product-schema";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await connectToDB();

    const orders = await Order.find();

    return NextResponse.json({ data: orders, status: 200 });
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return NextResponse.json({ error: "Failed to fetch orders", status: 500 });
  }
};

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const body = await req.json();

    const parsedBody = checkoutFormSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json({
        error: "Failed to create order",
        status: 400,
      });
    }

    await connectToDB();

    const orderedProducts = parsedBody.data.cart;

    if (orderedProducts && orderedProducts.length > 0) {
      await Promise.all(
        orderedProducts.map(async (product) => {
          await Product.findOneAndUpdate(
            { id: product.id },
            { $inc: { quantity: -product.quantity } }
          );
        })
      );
    }

    const newOrder = new Order(parsedBody.data);

    if (!newOrder) {
      return NextResponse.json({
        error: "Failed to create order",
        status: 500,
      });
    }

    await newOrder.save();

    return NextResponse.json({
      message: "Order created successfully",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create order", status: 500 });
  }
};
