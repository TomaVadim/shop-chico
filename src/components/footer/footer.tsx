import { Box } from "@mui/material";

export const Footer = (): JSX.Element => {
  return (
    <Box sx={{ bgcolor: "primary.main" }} className="w-full text-center py-4">
      <p className="text-black">
        © {new Date().getFullYear()} Chico Shop. Всі права захищені.
      </p>
    </Box>
  );
};
