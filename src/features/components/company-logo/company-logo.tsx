import Link from "next/link";
import Image from "next/image";

import { Typography } from "@mui/material";

import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";
import babyImage from "@/assets/images/home/baby.png";

export const CompanyLogo = (): JSX.Element => {
  return (
    <Typography
      component={Link}
      variant="h3"
      rel="noreferrer nofollow"
      className="text-black flex items-center gap-1 underline font-bold decoration-purple-500"
      href={PUBLIC_ROUTES.HOME}
    >
      <Image src={babyImage} alt="chehlidetkam" width={25} height={25} />
      <span className="mt-auto">chehlidetkam</span>
    </Typography>
  );
};
