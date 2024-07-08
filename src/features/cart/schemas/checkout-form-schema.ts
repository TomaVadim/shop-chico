import { z } from "zod";

export const checkoutFormSchema = z.object({
  name: z.string().min(1, "Поле не повинно бути порожнім"),
  surname: z.string().min(1, "Поле не повинно бути порожнім"),
  phone: z
    .string()
    .min(1, "Поле не повинно бути порожнім")
    .min(10, "Номер повинен містити 10 цифр"),
  address: z.string().min(1, "Поле не повинно бути порожнім"),
  payment: z.string().min(1, "Поле не повинно бути порожнім"),
  comment: z.string().optional(),
});

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>;
