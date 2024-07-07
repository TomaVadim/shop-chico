"use client";

import { ReactNode } from "react";

import { ThemeProvider } from "@/providers/theme-provider/theme-provider";
import { SessionProvider } from "next-auth/react";

export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <SessionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  );
};
