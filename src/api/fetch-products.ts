import axios from "axios";

import {
  ProductData,
  productSchema,
} from "@/features/products/schemas/product-data";

export const fetchProducts = async (): Promise<ProductData[] | []> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/product`
    );
    const data = response.data;

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
