import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { productFormSchema } from "@/features/admin/schemas/product-form-schema";
import { ProductFormData } from "@/features/admin/shared/types/product-form-data";
import { INSERT } from "@/shared/enums/filter/insert.filter";
import { GENDER } from "@/shared/enums/filter/gender.filter";

export const useValidateProductFormData = (defaultData?: ProductFormData) =>
  useForm<ProductFormData>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      insert: defaultData?.insert || INSERT.WITHOUT,
      gender: defaultData?.gender || GENDER.UNISEX,
      imageUrl: defaultData?.imageUrl,
      description: defaultData?.description,
      price: defaultData?.price,
      quantity: defaultData?.quantity,
      fileKey: defaultData?.fileKey,
    },
  });
