import { z } from "zod";

import { productFormSchema } from "@/features/admin/schemas/product-form-schema";

export type ProductFormData = z.infer<typeof productFormSchema>;
