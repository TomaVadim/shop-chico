import { z } from "zod";

import {
  ACCEPTED_IMAGE_TYPES,
  MAX_IMAGE_SIZE,
} from "@/features/admin/constants/image-limitation";

export const productFormSchema = z.object({
  image: z
    .any()
    .nullable()
    .refine((files) => {
      if (!files) return true;
      if (typeof FileList === "undefined") return true;
      return files instanceof FileList;
    }, "Формат файлу не підтримується")
    .refine(
      (files) =>
        !files || files.length === 0 || files[0].size <= MAX_IMAGE_SIZE,
      "Максимальний розмір фото 200КБ"
    )
    .refine(
      (files) =>
        !files ||
        files.length === 0 ||
        ACCEPTED_IMAGE_TYPES.includes(files[0].type),
      "Допустимі формати: png, jpg, jpeg"
    ),
  description: z.string().min(1, "Поле не повинно бути порожнім"),
  price: z
    .string()
    .min(1, "Поле не повинно бути порожнім")
    .refine((value) => !isNaN(Number(value)), "Поле повинно бути числом"),
  quantity: z
    .string()
    .min(1, "Поле не повинно бути порожнім")
    .refine((value) => !isNaN(Number(value)), "Поле повинно бути числом"),
});
