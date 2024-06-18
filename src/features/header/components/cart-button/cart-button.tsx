import Link from "next/link";

import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { StyledCartButton } from "@/features/header/components/cart-button/styled-cart-button";
import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";

export const CartButton = (): JSX.Element => {
  return (
    <IconButton
      component={Link}
      href={PUBLIC_ROUTES.CART}
      rel="noreferrer nofollow"
      aria-label="cart"
    >
      <StyledCartButton badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledCartButton>
    </IconButton>
  );
};
