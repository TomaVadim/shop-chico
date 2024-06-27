import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";
import { Box, Button } from "@mui/material";
import Link from "next/link";

export const Footer = (): JSX.Element => {
  return (
    <Box
      sx={{ bgcolor: "primary.main" }}
      className="relative w-full text-center py-4"
    >
      <p className="text-black">
        © {new Date().getFullYear()} Chico Shop. Всі права захищені.
      </p>

      <Button
        component={Link}
        href={PUBLIC_ROUTES.LOGIN}
        className="absolute right-0 bottom-0 opacity-0 h-1/2 w-10"
      >
        b
      </Button>
    </Box>
  );
};
