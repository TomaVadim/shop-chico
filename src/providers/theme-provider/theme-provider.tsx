"use client";
import { ReactNode } from "react";

import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import { getTheme } from "@/theme/theme";

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <MuiThemeProvider theme={getTheme()}>{children}</MuiThemeProvider>
    </StyledEngineProvider>
  );
};
