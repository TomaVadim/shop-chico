"use client";
import { Box, Typography } from "@mui/material";

import { CartCard } from "@/components/cart/cart-card/cart-card";
import {
  useCartStore,
  useInitializeCart,
} from "@/stores/zustand/use-cart-store";

export const ProductsCart = (): JSX.Element => {
  useInitializeCart();

  const { items: products } = useCartStore();

  if (!products.length) {
    return (
      <Typography variant="h5" textAlign="center">
        Ваш кошик порожній
      </Typography>
    );
  }

  return (
    <Box className="flex flex-col gap-5 w-full min-h-20">
      {products.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}
    </Box>
  );
};
