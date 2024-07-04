import Link from "next/link";

import { Box, Button } from "@mui/material";

import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";
import { CartButton } from "@/features/header/components/cart-button/cart-button";
import { GENDER } from "@/shared/enums/filter/gender.filter";
import { INSERT } from "@/shared/enums/filter/insert.filter";

export const Navigation = (): JSX.Element => {
  return (
    <Box component="nav" className="flex items-center md:gap-5">
      <Button
        component={Link}
        href={`${PUBLIC_ROUTES.PRODUCTS}?gender=${GENDER.UNISEX}&insert=${INSERT.WITHOUT}`}
        rel="noreferrer nofollow"
        className="text-black"
      >
        Каталог товарів
      </Button>

      <CartButton />
    </Box>
  );
};
