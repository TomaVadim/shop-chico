import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Введіть коректну електронну пошту" }),
  password: z.string().min(1, { message: "Введіть пароль" }),
});
