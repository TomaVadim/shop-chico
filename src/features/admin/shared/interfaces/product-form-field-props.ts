import { FieldErrors, UseFormRegister } from "react-hook-form";

import { ProductFormData } from "@/features/admin/shared/types/product-form-data";

export interface ProductFormFieldProps {
  name: keyof ProductFormData;
  register: UseFormRegister<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
  errorMessage?: string;
}
