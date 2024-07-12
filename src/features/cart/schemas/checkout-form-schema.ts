import { productSchema } from "@/features/products/schemas/product-data";
import { z } from "zod";

const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

export const checkoutFormSchema = z.object({
  name: z
    .string()
    .min(1, "Поле не повинно бути порожнім")
    .refine((value) => !value.includes(" "), "Поле не повинно містити пробіли"),
  surname: z
    .string()
    .min(1, "Поле не повинно бути порожнім")
    .refine((value) => !value.includes(" "), "Поле не повинно містити пробіли"),
  phone: z
    .string()
    .regex(PHONE_REGEX, "Введіть коректний номер телефону")
    .min(1, "Поле не повинно бути порожнім")
    .min(10, "Номер повинен містити не менше 10 цифр"),
  address: z.string().min(1, "Поле не повинно бути порожнім"),
  payment: z.string().min(1, "Поле не повинно бути порожнім"),
  delivery: z.string().min(1, "Поле не повинно бути порожнім"),
  comment: z.string().optional(),
  cart: z.array(productSchema),
});

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>;
