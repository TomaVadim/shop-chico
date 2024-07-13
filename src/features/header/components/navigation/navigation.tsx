import Link from "next/link";

import { Box, Button } from "@mui/material";

import { CartButton } from "@/features/header/components/cart-button/cart-button";
import { DEFAULT_REDIRECT_PATH_TO_PRODUCTS } from "@/constants/default-redirect-path-to-products";

export const Navigation = (): JSX.Element => {
  return (
    <Box component="nav" className="flex items-center md:gap-5">
      <Button
        component={Link}
        href={DEFAULT_REDIRECT_PATH_TO_PRODUCTS}
        rel="noreferrer nofollow"
        className="text-black"
      >
        Каталог товарів
      </Button>

      <CartButton />
    </Box>
  );
};
