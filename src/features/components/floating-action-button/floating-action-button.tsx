import Link from "next/link";

import { Fab } from "@mui/material";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

import { DEFAULT_REDIRECT_PATH_TO_PRODUCTS } from "@/constants/default-redirect-path-to-products";

export const FloatingActionButton = (): JSX.Element => {
  return (
    <Fab
      LinkComponent={Link}
      size="medium"
      href={DEFAULT_REDIRECT_PATH_TO_PRODUCTS}
      color="secondary"
      aria-label="move-to-products-page"
      className="fixed bottom-5 left-5 animate-bounce opacity-95"
    >
      <NotificationsActiveOutlinedIcon />
    </Fab>
  );
};
