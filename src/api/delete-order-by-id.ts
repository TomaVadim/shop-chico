import toast from "react-hot-toast";

import { CheckoutFormData } from "@/features/cart/schemas/checkout-form-schema";

interface ReturnedData {
  data: CheckoutFormData;
  status: number;
}

export const deleteOrderById = async (id: number): Promise<ReturnedData> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/order/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to delete product");
    }

    const data = await res.json();

    toast.success("Замовлення видалено", {
      id: "delete-order",
    });

    return data;
  } catch (error) {
    toast.error("Щось пішло не так", {
      id: "delete-order",
    });
    if (error instanceof Error) {
      console.error(`Error fetching product: ${error.message}`);
    } else {
      console.error("Unknown error fetching product");
    }
    throw error;
  }
};
