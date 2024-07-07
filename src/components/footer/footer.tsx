"use client";
import Link from "next/link";

import { Box, Button } from "@mui/material";

import { PRIVATE_ROUTES } from "@/shared/enums/routes/private-routes";
import { signOut, useSession } from "next-auth/react";

export const Footer = (): JSX.Element => {
  const { data: session } = useSession();

  return (
    <Box
      sx={{ bgcolor: "primary.main" }}
      className="relative w-full text-center py-4"
    >
      <p className="text-black">
        © {new Date().getFullYear()} Chico Shop. Всі права захищені.
      </p>

      {session?.user.role === "admin" && (
        <Button variant="contained" color="warning" onClick={() => signOut()}>
          Вийти
        </Button>
      )}

      <Button
        component={Link}
        href={PRIVATE_ROUTES.ADMIN}
        className="absolute right-0 bottom-0 opacity-0 h-1/2 w-10"
      >
        b
      </Button>
    </Box>
  );
};
