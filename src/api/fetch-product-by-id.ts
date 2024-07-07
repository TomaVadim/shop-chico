import { BASE_URL } from "@/api/base-url";

export const fetchProductById = async (id: string) => {
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
