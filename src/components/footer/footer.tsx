import { Box } from "@mui/material";

export const Footer = (): JSX.Element => {
  return (
    <Box sx={{ bgcolor: "primary.main" }} className="w-full text-center py-5">
      <p className="text-gray-300">
        © {new Date().getFullYear()} Chico Shop. Всі права захищені.
      </p>
    </Box>
  );
};
