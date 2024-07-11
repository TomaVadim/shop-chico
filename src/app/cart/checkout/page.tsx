import { Container, Typography } from "@mui/material";
import { CheckoutForm } from "./form";

export default function Checkout() {
  return (
    <>
      <Container maxWidth="lg" className="pb-10">
        <Typography component="h1" variant="h1" textAlign="center">
          Оформлення замовлення
        </Typography>

        <Container maxWidth="sm" className="mt-10">
          <CheckoutForm />
        </Container>
      </Container>
    </>
  );
}
