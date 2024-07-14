import { z } from "zod";

const GenderEnum = z.enum(["Для хлопчика", "Для дівчинки", "Унісекс"]);
const InsertEnum = z.enum(["З вкладишем", "Без вкладишу"]);

export const productSchema = z.object({
  id: z.number(),
  insert: InsertEnum,
  gender: GenderEnum,
  imageUrl: z.string().url("Додайте фото"),
  fileKey: z.string(),
  description: z.string().min(1, "Поле не повинно бути порожнім"),
  price: z
    .number()
    .min(1, "Поле не повинно бути порожнім")
    .refine((value) => Number(value) >= 1, "Мінімальна вартість 1"),
  quantity: z.number().nonnegative("Мінімальна кількість 0"),
});

export type ProductData = z.infer<typeof productSchema>;
