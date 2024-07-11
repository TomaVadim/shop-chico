import { CheckoutFormData } from "@/features/cart/schemas/checkout-form-schema";

export const sendOrder = async (data: CheckoutFormData) => {
  try {
    const response = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  } catch (error) {
    console.error("Error sending order:", error);
  }
};
