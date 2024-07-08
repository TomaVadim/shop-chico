"use client";

import Link from "next/link";
import Image from "next/image";

import { useSession } from "next-auth/react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { translateInsert } from "@/features/products/utils/translate-insert";
import { translateGender } from "@/features/products/utils/translate-gender";
import { PRIVATE_ROUTES } from "@/shared/enums/routes/private-routes";
import { useCartStore } from "@/stores/zustand/use-cart-store";
import { useCartQuantity } from "@/stores/zustand/use-cart-quantity";
import { ProductData } from "@/features/products/schemas/product-data";

interface Props {
  id: number;
  description: string;
  gender: "male" | "female" | "unisex";
  imageUrl: string;
  insert: "with" | "without";
  price: number;
  quantity: number;
}

export const ProductCard = ({
  id,
  gender,
  imageUrl,
  insert,
  price,
  description,
  quantity,
}: Props): JSX.Element => {
  const { data: session } = useSession();
  const { addItem } = useCartStore();
  const { increment } = useCartQuantity();

  const PRODUCT = {
    id,
    quantity,
    gender,
    insert,
    imageUrl,
    price,
    description,
  };

  const handleAddToCart = (product: ProductData) => {
    increment();
    addItem(product);
  };

  const translatedGender = translateGender(gender);
  const translatedInsert = translateInsert(insert);

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper component="article" className="flex flex-col h-full" elevation={3}>
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            priority
            src={imageUrl}
            fill
            alt="Фото чохла"
            className="w-full h-full object-contain"
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
          />
        </div>

        <div className="px-5 flex flex-col">
          <div className="mt-6 flex justify-between items-center">
            <Typography className="text-sm">
              Ціна: <span className="pl-1 font-bold">{price}</span>
            </Typography>

            <Typography className="text-sm">
              Кількість:
              <span
                className={`font-bold pl-1 ${
                  quantity <= 0 ? "text-red-500" : ""
                }`}
              >
                {quantity}
              </span>
            </Typography>
          </div>

          <Typography className="text-sm mt-3">
            Стать: <span className="pl-1 font-bold">{translatedGender}</span>
          </Typography>

          <Typography className="text-sm mt-3">
            Вставка: <span className="pl-1 font-bold">{translatedInsert}</span>
          </Typography>

          {session?.user.role === "admin" && (
            <Button
              component={Link}
              href={`${PRIVATE_ROUTES.EDIT}/${id}`}
              variant="contained"
              color="warning"
              className="mt-6 text-sm"
            >
              Змінити
            </Button>
          )}

          <div className="py-6 flex justify-between items-center">
            <Button
              endIcon={<ShoppingCartIcon />}
              variant="outlined"
              color="secondary"
              className="text-sm"
              onClick={() => handleAddToCart(PRODUCT)}
            >
              В кошик
            </Button>

            <Link href={""} className="text-sm text-black">
              Детальніше
            </Link>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};
