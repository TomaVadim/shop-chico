"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Button, Paper, Typography } from "@mui/material";

import { ProductData } from "@/features/products/schemas/product-data";
import { useCartQuantity } from "@/stores/zustand/use-cart-quantity";
import { useCartStore } from "@/stores/zustand/use-cart-store";
import { fetchProductById } from "@/api/fetch-product-by-id";

interface Props {
  product: ProductData;
}

export const CartCard = ({ product }: Props): JSX.Element => {
  const [dbproductQuantity, setDbproductQuantity] = useState<number>(1);

  useEffect(() => {
    fetchProductById(product.id).then((res) => {
      if (res.data.quantity) {
        setDbproductQuantity(res.data.quantity);
      }
    });
  }, []);

  const { increment, decrement } = useCartQuantity();
  const { addItem, decrementQuantity } = useCartStore();

  const handleIncrement = (product: ProductData) => {
    if (product.quantity === dbproductQuantity) return;

    increment();
    addItem(product);
  };

  const handleDecrement = (id: number) => {
    decrement();
    decrementQuantity(id);
  };

  return (
    <Paper
      elevation={3}
      key={product.id}
      className="p-4 flex flex-col lg:flex-row lg:gap-5 justify-between w-full"
    >
      <Image
        src={product.imageUrl}
        alt={product.description}
        width={100}
        height={100}
        className="mx-auto lg:mx-0 border border-solid border-yellow-400 rounded-md"
      />
      <div className="mt-4 lg:mt-0 w-full flex flex-col justify-around items-start">
        <Typography
          component="h3"
          variant="h4"
          className="text-center lg:text-left mb-4"
        >
          {product.description}
        </Typography>
        <div className="mt-4 lg:mt-0 flex flex-col gap-2">
          <Typography component="h3" variant="h4">
            Стать:
            <b className="ml-2">{product.gender}</b>
          </Typography>

          <Typography component="h3" variant="h4">
            Вставка:
            <b className="ml-2">{product.insert}</b>
          </Typography>

          <Typography component="h3" variant="h4">
            Ціна за одиницю:
            <b className="ml-2">{product.price}</b>
          </Typography>
        </div>
      </div>

      <div className="mt-4 lg:mt-0 flex flex-col justify-around items-center">
        <div className="mt-4 lg:mt-0 flex gap-2 items-center">
          <Button
            variant="contained"
            color="error"
            size="small"
            className="text-lg p-0"
            onClick={() => handleDecrement(product.id)}
          >
            -
          </Button>
          <b className="border border-solid border-yellow-400 rounded-md px-4 text-lg">
            {product.quantity || 0}
          </b>

          <Button
            variant="contained"
            color="success"
            size="small"
            className="text-lg p-0"
            onClick={() => handleIncrement(product)}
          >
            +
          </Button>
        </div>
      </div>
    </Paper>
  );
};
