import { Typography, TypographyProps } from "@mui/material";

export const SectionTitle = ({ children }: { children: string }) => {
  return (
    <Typography variant="h1" component="h2" className="font-bold text-center">
      {children}
    </Typography>
  );
};
