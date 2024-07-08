"use client";

import { useValidateCheckoutFormData } from "@/features/cart/hooks/use-validate-checkout-form-data";
import { CheckoutFormData } from "@/features/cart/schemas/checkout-form-schema";

export const CheckoutForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useValidateCheckoutFormData();

  const handleOnSubmit = (data: CheckoutFormData) => {};

  return <form onSubmit={handleSubmit(handleOnSubmit)}></form>;
};
