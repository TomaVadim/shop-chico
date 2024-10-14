import { event } from "../event";

export const addToCart = (id?: number) => {
  event({
    action: "add_to_cart",
    category: "ecommerce",
    label: "Item added to cart",
    value: `Чохол на стільці для годування. Id: ${id}`,
  });
};
