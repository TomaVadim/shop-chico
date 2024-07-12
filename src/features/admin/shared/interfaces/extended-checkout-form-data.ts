import { CheckoutFormData } from "@/features/cart/schemas/checkout-form-schema";

export interface ExtendedCheckoutFormData extends CheckoutFormData {
  id: number;
}
