"use client";

import { createTheme } from "@mui/material";
import { typography } from "@/theme/typography/typography";

export const getTheme = () =>
  createTheme({
    typography,
    palette: {},
  });
