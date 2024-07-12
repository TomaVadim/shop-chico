import { Fab } from "@mui/material";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import Link from "next/link";
import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";

export const FloatingActionButton = (): JSX.Element => {
  return (
    <Fab
      LinkComponent={Link}
      size="medium"
      href={PUBLIC_ROUTES.PRODUCTS}
      color="secondary"
      aria-label="move-to-products-page"
      className="fixed bottom-5 left-5 animate-bounce opacity-95"
    >
      <NotificationsActiveOutlinedIcon />
    </Fab>
  );
};
