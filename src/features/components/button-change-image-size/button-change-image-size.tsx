import Link from "next/link";

import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  children: string;
}

export const ButtonChangeImageSize = ({ children, ...props }: Props) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      LinkComponent={Link}
      href="https://imagecompressor.com/uk/"
      rel="noreferrer nofollow"
      {...props}
    >
      {children}
    </Button>
  );
};
