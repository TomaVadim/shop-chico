import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { productFormSchema } from "@/features/admin/schemas/product-form-schema";
import { ProductFormData } from "@/features/admin/shared/types/product-form-data";

export const useValidateProductFormData = () =>
  useForm<ProductFormData>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      insert: "without",
      gender: "unisex",
      imageUrl: "",
      description: "",
      price: "",
      quantity: "",
    },
  });
