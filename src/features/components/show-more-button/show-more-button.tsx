import Link from "next/link";

import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { DEFAULT_REDIRECT_PATH_TO_PRODUCTS } from "@/constants/default-redirect-path-to-products";

export const ShowMoreButton = ({ children }: { children: string }) => {
  return (
    <Button
      size="large"
      endIcon={<ArrowRightAltIcon />}
      variant="contained"
      className="mt-10 mx-auto"
      component={Link}
      href={DEFAULT_REDIRECT_PATH_TO_PRODUCTS}
    >
      {children}
    </Button>
  );
};
