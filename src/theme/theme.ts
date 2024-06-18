"use client";

import { createTheme } from "@mui/material";
import { typography } from "@/theme/typography/typography";
import { palette } from "@/theme/palette/palette";

export const getTheme = () =>
  createTheme({
    palette,
    typography,
  });
