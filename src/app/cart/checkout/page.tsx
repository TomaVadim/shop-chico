import { Typography } from "@mui/material";
import { CheckoutForm } from "./form";

export default function Checkout() {
  return (
    <>
      <Typography component="h1" variant="h1">
        Оформлення замовлення
      </Typography>
      <CheckoutForm />
    </>
  );
}
