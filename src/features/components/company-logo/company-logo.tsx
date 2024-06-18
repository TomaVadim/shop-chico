import Link from "next/link";

import { Typography } from "@mui/material";

import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";

export const CompanyLogo = (): JSX.Element => {
  return (
    <Typography
      component={Link}
      variant="h1"
      className="text-2xl font-bold text-white no-underline"
      href={PUBLIC_ROUTES.HOME}
    >
      Chico Shop
    </Typography>
  );
};
