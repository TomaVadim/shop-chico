import { event } from "../event";

export const placeOrder = (totalAmount: number) => {
  event({
    action: "place_order",
    category: "ecommerce",
    label: "Order placed",
    value: `Замовлення на суму: ${totalAmount} грн.`,
  });
};
