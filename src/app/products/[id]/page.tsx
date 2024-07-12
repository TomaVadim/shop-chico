"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

import { Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { fetchProductById } from "@/api/fetch-product-by-id";
import { useCartStore } from "@/stores/zustand/use-cart-store";
import { useCartQuantity } from "@/stores/zustand/use-cart-quantity";
import { ProductData } from "@/features/products/schemas/product-data";

export default function Product({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<ProductData>();
  const { items, addItem } = useCartStore();
  const { increment } = useCartQuantity();

  useEffect(() => {
    fetchProductById(params.id).then((res) => setProduct(res.data));
  }, []);

  if (!product) return null;

  const handleAddToCart = (product: ProductData) => {
    if (product.quantity === 0) return;

    const productInCart = items.find(
      (item) => item.imageUrl === product.imageUrl
    );

    if (productInCart?.quantity === product.quantity) return;

    increment();
    addItem(product);
  };

  return (
    <article className="mx-auto py-10 flex flex-col justify-center min-h-full w-[min(600px,100%)]">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          priority
          src={product.imageUrl}
          fill
          alt="Фото чохла"
          className="w-full h-full object-contain"
          sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
        />
      </div>

      <Typography textAlign="center" className="mt-5">
        {product.description}
      </Typography>

      <div className="px-5 flex flex-col">
        <div className="mt-6 flex justify-between items-center">
          <Typography className="text-sm">
            Ціна: <span className="pl-1 font-bold">{product.price}</span>
          </Typography>

          <Typography className="text-sm">
            Кількість:
            <span
              className={`font-bold pl-1 ${
                product.quantity <= 0 ? "text-red-500" : ""
              }`}
            >
              {product.quantity}
            </span>
          </Typography>
        </div>

        <Typography className="text-sm mt-3">
          Стать: <span className="pl-1 font-bold">{product.gender}</span>
        </Typography>

        <Typography className="text-sm mt-3">
          Вставка: <span className="pl-1 font-bold">{product.insert}</span>
        </Typography>

        <Button
          endIcon={<ShoppingCartIcon />}
          variant="outlined"
          color="secondary"
          className="text-sm mt-10"
          onClick={() => handleAddToCart(product)}
        >
          В кошик
        </Button>
      </div>
    </article>
  );
}
