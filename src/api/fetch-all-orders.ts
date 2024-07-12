import { BASE_URL } from "./base-url";
import { ExtendedCheckoutFormData } from "@/features/admin/shared/interfaces/extended-checkout-form-data";

interface ReturnedData {
  data: ExtendedCheckoutFormData[];
  status: number;
}

export const fetchAllOrders = async (): Promise<ReturnedData> => {
  try {
    const response = await fetch(`${BASE_URL}/api/order`, {
      cache: "no-store",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
