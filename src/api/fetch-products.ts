import {
  ProductData,
  productSchema,
} from "@/features/products/schemas/product-data";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchProducts = async (
  page: number = 1,
  limit: number = 10
): Promise<ProductData[] | []> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/product?page=${page}&limit=${limit}`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();

    const parsedData = productSchema.array().safeParse(data);

    if (!parsedData.success) {
      console.error("Data validation failed", parsedData.error);
      return [];
    }

    return parsedData.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
