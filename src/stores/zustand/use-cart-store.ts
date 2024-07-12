import { create } from "zustand";

import { ProductData } from "@/features/products/schemas/product-data";

interface CartState {
  items: ProductData[];
  addItem: (item: ProductData) => void;
  removeItem: (id: number) => void;
  decrementQuantity: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      if (item.quantity === 0) return { items: state.items };

      const existingItem = state.items.find((i) => i.id === item.id);
      const newItems = existingItem
        ? state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...state.items, { ...item, quantity: 1 }];

      return { items: newItems };
    }),
  removeItem: (id) =>
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      return { items: newItems };
    }),
  decrementQuantity: (id) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === id);
      let newItems = state.items;
      if (existingItem) {
        if (existingItem.quantity > 1) {
          newItems = state.items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity - 1 } : i
          );
        } else {
          newItems = state.items.filter((item) => item.id !== id);
        }
      }
      return { items: newItems };
    }),
  clearCart: () => {
    return { items: [] };
  },
}));
