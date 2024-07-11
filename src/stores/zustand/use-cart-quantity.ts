import { create } from "zustand";

const saveQuantityToLocalStorage = (quantity: number) => {
  localStorage.setItem("cartQuantity", JSON.stringify(quantity));
};

export const loadQuantityFromLocalStorage = (): number => {
  if (typeof window !== "undefined") {
    const storedQuantity = localStorage.getItem("cartQuantity");
    return storedQuantity ? JSON.parse(storedQuantity) : 0;
  }
  return 0;
};

interface CartQuantityState {
  quantity: number;
  increment: () => void;
  decrement: () => void;
  setQuantity: (quantity: number) => void;
  clearQuantity: () => void;
}

export const useCartQuantity = create<CartQuantityState>((set) => ({
  quantity: 0,
  increment: () =>
    set((state) => {
      const newQuantity = state.quantity + 1;
      saveQuantityToLocalStorage(newQuantity);
      return { quantity: newQuantity };
    }),
  decrement: () =>
    set((state) => {
      const newQuantity = state.quantity - 1;
      saveQuantityToLocalStorage(newQuantity);
      return { quantity: newQuantity };
    }),
  setQuantity: (quantity) => set({ quantity }),
  clearQuantity: () =>
    set((state) => {
      saveQuantityToLocalStorage(0);
      return { quantity: 0 };
    }),
}));
