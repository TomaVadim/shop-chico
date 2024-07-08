"use client";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const COOKIE_NAME = "allow-cookies";

export const ModalCookieUsage = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const modalShown = Cookies.get(COOKIE_NAME);
    if (!modalShown) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    Cookies.set(COOKIE_NAME, "true", { expires: 365 });
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Використання cookie</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Ця сторінка використовує cookie для збереження ваших налаштувань.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          Ок
        </Button>
      </DialogActions>
    </Dialog>
  );
};
