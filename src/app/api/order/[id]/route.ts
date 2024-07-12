import Order from "@/server/schemas/order-schema";
import { connectToDB } from "@/server/utils/connect-to-db";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  _: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> => {
  try {
    await connectToDB();

    const deletedOrder = await Order.findOneAndDelete({
      id: Number(params.id),
    });

    return NextResponse.json({ data: deletedOrder, status: 200 });
  } catch (error) {
    console.error("Failed to delete order:", error);
    return NextResponse.json({ error: "Failed to delete order", status: 500 });
  }
};
