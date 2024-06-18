"use client";
import { ReactNode } from "react";

import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

import { getTheme } from "@/theme/theme";

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={getTheme()}>{children}</MuiThemeProvider>
    </StyledEngineProvider>
  );
};
