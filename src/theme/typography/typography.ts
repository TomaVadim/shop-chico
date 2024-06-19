import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography: TypographyOptions = {
  fontFamily: ["Montserrat", "sans-serif"].join(","),
  h1: {
    fontSize: "clamp(2rem, 3vw, 2.5rem)",
  },
  h2: {
    fontSize: "clamp(1.5rem, 2vw, 2rem)",
  },
  h3: {
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
  },
  h4: {
    fontSize: "clamp(0.875rem, 2vw, 1rem)",
  },
};
