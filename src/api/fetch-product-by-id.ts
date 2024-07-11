import { BASE_URL } from "@/api/base-url";
import { ProductData } from "@/features/products/schemas/product-data";

interface ReturnedData {
  data: ProductData;
  status: number;
}

export const fetchProductById = async (
  id: number | string
): Promise<ReturnedData> => {
  try {
    const res = await fetch(`${BASE_URL}/api/product/${id}`, {
      cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error fetching product: ${error.message}`);
    } else {
      console.error("Unknown error fetching product");
    }
    throw error;
  }
};
