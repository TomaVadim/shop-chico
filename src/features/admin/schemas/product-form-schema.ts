import { z } from "zod";

export const productFormSchema = z.object({
  insert: z.enum(["З вставкою", "Без вставки"]),
  gender: z.enum(["Для хлопчика", "Для дівчинки", "Унісекс"]),
  imageUrl: z.string().url("Додайте фото"),
  fileKey: z.string().min(1, "Додайте фото"),
  description: z.string().min(1, "Поле не повинно бути порожнім"),
  price: z
    .string()
    .min(1, "Поле не повинно бути порожнім")
    .transform((value) => value.replaceAll(" ", ""))
    .refine((value) => !isNaN(Number(value)), "Поле повинно бути числом")
    .refine((value) => Number(value) >= 1, "Мінімальна вартість 1")
    .or(z.number()),
  quantity: z
    .string()
    .min(1, "Поле не повинно бути порожнім")
    .transform((value) => value.replaceAll(" ", ""))
    .refine((value) => !isNaN(Number(value)), "Поле повинно бути числом")
    .refine((value) => Number(value) >= 1, "Мінімальна кількість 1")
    .or(z.number()),
});
