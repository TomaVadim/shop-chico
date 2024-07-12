import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center text-3xl">
      <Typography variant="h1">Сторінку не знайдено</Typography>

      <Button
        variant="contained"
        size="large"
        component={Link}
        href={PUBLIC_ROUTES.HOME}
      >
        Повернутися на головну
      </Button>
    </div>
  );
}
