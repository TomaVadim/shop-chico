import toast from "react-hot-toast";

import { ProductFormData } from "@/features/admin/shared/types/product-form-data";
import { BASE_URL } from "@/api/base-url";

interface Props {
  id: number;
  formData: ProductFormData;
  fileUrl: string;
}

export const fetchUpdateProductById = async ({
  id,
  formData,
  fileUrl,
}: Props) => {
  try {
    const response = await fetch(`${BASE_URL}/api/product/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, imageUrl: fileUrl }),
      method: "PUT",
    });

    if (response.status !== 200) return;

    toast.success("Товар оновлено", {
      position: "top-center",
      id: "edit-product",
    });

    return response;
  } catch (error) {
    toast.error("Щось пішло не так", {
      position: "top-center",
      id: "edit-product",
    });
  }
};
