import { create } from "zustand";

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
      return { quantity: newQuantity };
    }),
  decrement: () =>
    set((state) => {
      const newQuantity = state.quantity - 1;
      return { quantity: newQuantity };
    }),
  setQuantity: (quantity) => set({ quantity }),
  clearQuantity: () =>
    set((state) => {
      return { quantity: 0 };
    }),
}));
