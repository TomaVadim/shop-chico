import Link from "next/link";

import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";

export const ShowMoreButton = ({ children }: { children: string }) => {
  return (
    <Button
      size="large"
      endIcon={<ArrowRightAltIcon />}
      variant="contained"
      className="mt-10 mx-auto"
      component={Link}
      href={`${PUBLIC_ROUTES.PRODUCTS}?gender=all&insert=without`}
    >
      {children}
    </Button>
  );
};
