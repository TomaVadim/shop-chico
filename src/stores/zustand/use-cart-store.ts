import { useEffect } from "react";

import { create } from "zustand";

import { ProductData } from "@/features/products/schemas/product-data";

const saveToLocalStorage = (items: ProductData[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const loadFromLocalStorage = (): ProductData[] => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

interface CartState {
  items: ProductData[];
  initialized: boolean;
  addItem: (item: ProductData) => void;
  removeItem: (id: number) => void;
  decrementQuantity: (id: number) => void;
  clearCart: () => void;
  setItems: (items: ProductData[]) => void;
  setInitialized: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  initialized: false,
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      const newItems = existingItem
        ? state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...state.items, { ...item, quantity: 1 }];

      saveToLocalStorage(newItems);
      return { items: newItems };
    }),
  removeItem: (id) =>
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      saveToLocalStorage(newItems);
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
        saveToLocalStorage(newItems);
      }
      return { items: newItems };
    }),
  clearCart: () => {
    saveToLocalStorage([]);
    return { items: [] };
  },
  setItems: (items) => set({ items }),
  setInitialized: () => set({ initialized: true }),
}));

export const useInitializeCart = () => {
  const setItems = useCartStore((state) => state.setItems);
  const setInitialized = useCartStore((state) => state.setInitialized);
  const initialized = useCartStore((state) => state.initialized);

  useEffect(() => {
    if (!initialized) {
      const items = loadFromLocalStorage();
      setItems(items);
      setInitialized();
    }
  }, [initialized, setItems, setInitialized]);
};
