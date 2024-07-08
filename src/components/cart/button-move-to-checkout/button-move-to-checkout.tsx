"use client";
import Link from "next/link";

import { Button, Container } from "@mui/material";

import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";
import { useCartStore } from "@/stores/zustand/use-cart-store";

export const ButtonMoveToCheckout = (): JSX.Element => {
  const { items } = useCartStore();

  if (!items.length) {
    return <></>;
  }

  return (
    <Container className="pb-10 flex justify-center" maxWidth="lg">
      <Button
        component={Link}
        href={`${PUBLIC_ROUTES.CART}${PUBLIC_ROUTES.CHECKOUT}`}
        color="warning"
        size="large"
        variant="contained"
      >
        Замовити
      </Button>
    </Container>
  );
};
