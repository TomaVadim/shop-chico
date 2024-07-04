import { z } from "zod";

const GenderEnum = z.enum(["male", "female", "unisex"]);
const InsertEnum = z.enum(["with", "without", "all"]);

export const productFormSchema = z.object({
  insert: InsertEnum,
  gender: GenderEnum,
  imageUrl: z.string().url("Додайте фото"),
  description: z.string().min(1, "Поле не повинно бути порожнім"),
  price: z
    .string()
    .min(1, "Поле не повинно бути порожнім")
    .transform((value) => value.replaceAll(" ", ""))
    .refine((value) => !isNaN(Number(value)), "Поле повинно бути числом")
    .refine((value) => Number(value) >= 1, "Мінімальна вартість 1"),
  quantity: z
    .string()
    .min(1, "Поле не повинно бути порожнім")
    .transform((value) => value.replaceAll(" ", ""))
    .refine((value) => !isNaN(Number(value)), "Поле повинно бути числом")
    .refine((value) => Number(value) >= 1, "Мінімальна кількість 1"),
});
