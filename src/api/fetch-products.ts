import { ExtendedProductData } from "@/features/products/shared/interfaces/extended-product-data";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchProducts = async (
  page: number = 1,
  limit: number = 10
): Promise<ExtendedProductData[] | []> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/product?page=${page}&limit=${limit}`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
