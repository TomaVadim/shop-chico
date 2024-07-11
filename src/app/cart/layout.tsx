import { Container, Typography } from "@mui/material";

import { ProductsCart } from "@/components/cart/products-cart/products-cart";
import { SectionWrapper } from "@/features/components/section-wrapper/section-wrapper";
import { ShowMoreButton } from "@/features/components/show-more-button/show-more-button";
import { ButtonMoveToCheckout } from "@/components/cart/button-move-to-checkout/button-move-to-checkout";

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SectionWrapper>
        <Typography component="h1" variant="h1">
          Ваш кошик
        </Typography>

        <ShowMoreButton>Продовжити покупки</ShowMoreButton>
      </SectionWrapper>

      <Container maxWidth="lg" className="pb-10">
        <ProductsCart />
      </Container>

      <ButtonMoveToCheckout />
      {children}
    </>
  );
}
