import { z } from "zod";

import { loginFormSchema } from "@/schemas/login-form-schema";

export type LoginFormData = z.infer<typeof loginFormSchema>;
