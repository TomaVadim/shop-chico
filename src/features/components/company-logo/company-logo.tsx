import Link from "next/link";

import { Typography } from "@mui/material";

import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";

export const CompanyLogo = (): JSX.Element => {
  return (
    <Typography
      component={Link}
      variant="h3"
      rel="noreferrer nofollow"
      className="text-black underline font-bold decoration-purple-500"
      href={PUBLIC_ROUTES.HOME}
    >
      @chehlidetkam
    </Typography>
  );
};
