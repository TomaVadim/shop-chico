"use client";
import Link from "next/link";

import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { StyledCartButton } from "@/features/header/components/cart-button/styled-cart-button";
import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";
import {
  loadQuantityFromLocalStorage,
  useCartQuantity,
} from "@/stores/zustand/use-cart-quantity";
import { useEffect } from "react";

export const CartButton = (): JSX.Element => {
  const { quantity, setQuantity } = useCartQuantity();

  useEffect(() => {
    const initialQuantity = loadQuantityFromLocalStorage();
    setQuantity(initialQuantity);
  }, [setQuantity]);

  return (
    <IconButton
      component={Link}
      href={PUBLIC_ROUTES.CART}
      rel="noreferrer nofollow"
      aria-label="cart"
    >
      <StyledCartButton badgeContent={quantity} color="secondary">
        <ShoppingCartIcon />
      </StyledCartButton>
    </IconButton>
  );
};
