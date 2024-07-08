import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { checkoutFormSchema } from "@/features/cart/schemas/checkout-form-schema";

export const useValidateCheckoutFormData = () =>
  useForm({
    resolver: zodResolver(checkoutFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      address: "",
      payment: "",
      comment: "",
    },
  });
