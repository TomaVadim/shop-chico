import { Button } from "@mui/material";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const SliderNavigationButton = ({
  children,
  className,
}: Props): JSX.Element => {
  return (
    <Button
      sx={{
        bgcolor: "primary.main",
        color: "black",
        borderRadius: "50%",

        width: "40px",
        height: "40px",

        "&:hover": {
          bgcolor: "primary.main",
        },
      }}
      className={`${className} hidden md:flex items-center justify-center border border-gray-400 rounded-full hover:cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200`}
      type="button"
      aria-label={className}
    >
      {children}
    </Button>
  );
};
