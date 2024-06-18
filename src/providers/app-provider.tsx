"use client";

import { ReactNode } from "react";

import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
