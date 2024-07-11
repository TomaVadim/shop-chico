import { NextRequest, NextResponse } from "next/server";

import { connectToDB } from "@/server/utils/connect-to-db";
import { Product } from "@/server/schemas/product-schema";
import { productFormSchema } from "@/features/admin/schemas/product-form-schema";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();

  const parsedBody = productFormSchema.safeParse(body);

  if (!parsedBody.success) {
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 400 }
    );
  }

  try {
    await connectToDB();

    const newProduct = new Product(parsedBody.data);
    await newProduct.save();

    return NextResponse.json(
      { message: "Product created successfully", data: parsedBody.data },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Failed to create product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}

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
