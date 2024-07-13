import { ProductData } from "@/features/products/schemas/product-data";

export interface ExtendedProductData extends ProductData {
  createdAt: Date;
}
