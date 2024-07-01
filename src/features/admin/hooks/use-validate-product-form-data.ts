import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { productFormSchema } from "@/features/admin/schemas/product-form-schema";
import { ProductFormData } from "../shared/types/product-form-data";

export const useValidateProductFormData = () =>
  useForm<ProductFormData>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      image: null,
      description: "",
      price: "",
      quantity: "",
    },
  });
