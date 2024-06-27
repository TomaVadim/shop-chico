import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginFormSchema } from "@/schemas/login-form-schema";

export const useIsValidLoginFormData = () =>
  useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
