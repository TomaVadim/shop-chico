import { ProductFormData } from "@/features/admin/shared/types/product-form-data";
import { BASE_URL } from "@/api/base-url";

interface Props {
  id: number;
  formData: ProductFormData;
  fileUrl: string;
}

export const updateProductById = async ({ id, formData, fileUrl }: Props) => {
  try {
    const response = await fetch(`${BASE_URL}/api/product/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, imageUrl: fileUrl }),
      method: "PUT",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw new Error("Failed to update product", { cause: error });
  }
};
