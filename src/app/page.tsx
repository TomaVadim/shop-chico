import { Box, Button, Container, Typography } from "@mui/material";

import { OurNewProductsSlider } from "@/features/home/components/our-new-products-slider/our-new-products-slider";
import { OUR_NEW_PRODUCTS_LIST } from "@/features/home/constants/our-new-products-list";
import { SectionTitle } from "@/features/components/company-logo/section-title/section-title";
import { SectionWrapper } from "@/features/components/section-wrapper/section-wrapper";
import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Benefits } from "@/components/home/benefits/benefits";
import { BENEFITS_LIST } from "@/features/home/constants/benefits-list";
import { Questions } from "@/components/home/questions/questions";
import { QUESTIONS_LIST } from "@/features/home/constants/questions-list";

export default function Home() {
  return (
    <>
      <SectionWrapper>
        <Container maxWidth="md" className="flex flex-col items-center">
          <SectionTitle>
            Ласкаво просимо до нашого магазину чохлів для стільчиків для
            годування!
          </SectionTitle>
          <Typography
            variant="body1"
            component="p"
            className="mt-10 text-center font-light"
          >
            Ласкаво просимо до нашого інтернет-магазину! Тут ви знайдете широкий
            асортимент чохлів для стільчиків для годування, які забезпечать
            комфорт вашому малюкові та додадуть стиль вашому інтер'єру.
            Перегляньте наші колекції та виберіть ідеальний чохол для вашого
            стільчика!
          </Typography>

          <Button
            size="large"
            endIcon={<ArrowRightAltIcon />}
            variant="contained"
            className="mt-10"
            component={Link}
            href={PUBLIC_ROUTES.PRODUCTS}
          >
            Переглянути всі чохли
          </Button>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle>Новинки</SectionTitle>

        <OurNewProductsSlider list={OUR_NEW_PRODUCTS_LIST} />
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Чому обирають нас?</SectionTitle>

        <Container className="mt-10">
          <Benefits list={BENEFITS_LIST} />
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Часті запитання</SectionTitle>

        <Container className="mt-10">
          <Questions list={QUESTIONS_LIST} />
        </Container>
      </SectionWrapper>
    </>
  );
}
