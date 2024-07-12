import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { checkoutFormSchema } from "@/features/cart/schemas/checkout-form-schema";
import { DELIVERY_METHOD } from "../shared/enums/delivery-method";
import { PAYMENT_METHOD } from "../shared/enums/payment-method";
import { useCartStore } from "@/stores/zustand/use-cart-store";

export const useValidateCheckoutFormData = () => {
  const { items } = useCartStore();

  return useForm({
    resolver: zodResolver(checkoutFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      address: "",
      payment: PAYMENT_METHOD.BEFORE_DELIVERY,
      delivery: DELIVERY_METHOD.NOVA_POSHTA,
      comment: "",
      cart: items,
    },
  });
};
