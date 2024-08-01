import { Product } from "@/server/schemas/product-schema";
import { connectToDB } from "@/server/utils/connect-to-db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await connectToDB();

    const products = await Product.find();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get products" },
      { status: 500 }
    );
  }
};
