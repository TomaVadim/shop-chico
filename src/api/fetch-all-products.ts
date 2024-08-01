import { ExtendedProductData } from "@/features/products/shared/interfaces/extended-product-data";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchAllProducts = async (): Promise<
  ExtendedProductData[] | []
> => {
  try {
    const response = await fetch(`${BASE_URL}/api/product/all`, {
      cache: "no-store",
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
