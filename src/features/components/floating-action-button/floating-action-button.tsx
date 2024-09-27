import Link from "next/link";

import { Fab } from "@mui/material";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

import { DEFAULT_REDIRECT_PATH_TO_PRODUCTS } from "@/constants/default-redirect-path-to-products";

import "./floating-action-button.css";

export const FloatingActionButton = (): JSX.Element => {
  return (
    <Fab
      LinkComponent={Link}
      size="medium"
      href={DEFAULT_REDIRECT_PATH_TO_PRODUCTS}
      color="secondary"
      aria-label="move-to-products-page"
      className="fixed bottom-5 left-5 opacity-95 pulse-animation"
    >
      <NotificationsActiveOutlinedIcon />
    </Fab>
  );
};
