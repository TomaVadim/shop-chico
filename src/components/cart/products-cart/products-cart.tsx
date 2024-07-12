"use client";
import { Box, Paper, Typography } from "@mui/material";
import { CartCard } from "@/components/cart/cart-card/cart-card";
import {
  useCartStore,
  useInitializeCart,
} from "@/stores/zustand/use-cart-store";
import { useEffect } from "react";
import { fetchProducts } from "@/api/fetch-products";
import { useCartQuantity } from "@/stores/zustand/use-cart-quantity";

export const ProductsCart = (): JSX.Element => {
  useInitializeCart();

  const { items: products, removeItem } = useCartStore();
  const { decrement } = useCartQuantity();

  useEffect(() => {
    fetchProducts().then((data) => {
      const currentProductIds = new Set(data.map((product) => product.id));

      const productsToRemove = products.filter(
        (product) => !currentProductIds.has(product.id)
      );

      productsToRemove.forEach((product) => {
        removeItem(product.id);
        decrement();
      });
    });
  }, [products, removeItem, decrement]);

  const fullPrice = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  if (!products.length) {
    return (
      <Typography variant="h5" textAlign="center">
        Ваш кошик порожній
      </Typography>
    );
  }

  return (
    <Box className="flex flex-col gap-5 w-full min-h-20">
      <Paper elevation={3} className="px-4 py-3 flex justify-between">
        <Typography className="text-sm lg:text-lg">
          Загальна вартість:
        </Typography>
        <Typography className="font-bold text-sm lg:text-lg">
          {fullPrice} <span className="text-sm lg:text-lg">грн.</span>
        </Typography>
      </Paper>
      {products.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}
    </Box>
  );
};
