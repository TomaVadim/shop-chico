import { Container, Typography } from "@mui/material";

import { OurNewProductsSlider } from "@/components/home/our-new-products-slider/our-new-products-slider";
import { SectionTitle } from "@/features/components/section-title/section-title";
import { SectionWrapper } from "@/features/components/section-wrapper/section-wrapper";
import { Benefits } from "@/components/home/benefits/benefits";
import { BENEFITS_LIST } from "@/features/home/constants/benefits-list";
import { Questions } from "@/components/home/questions/questions";
import { QUESTIONS_LIST } from "@/features/home/constants/questions-list";
import { ShowMoreButton } from "@/features/components/show-more-button/show-more-button";
import { Feedbacks } from "@/components/home/feedbacks/feedbacks";
import { FEEDBACKS_LIST } from "@/features/home/constants/feedbacks-list";
import { FloatingActionButton } from "@/features/components/floating-action-button/floating-action-button";

export default function Home() {
  return (
    <>
      <SectionWrapper>
        <Container maxWidth="md" className="flex px-0 flex-col items-center">
          <SectionTitle>
            Ласкаво просимо до нашого магазину чохлів на стільці для годування!
          </SectionTitle>
          <Typography
            variant="body1"
            component="p"
            className="mt-10 text-center font-light"
          >
            Запрошуємо до нашого інтернет-магазину! Тут ви знайдете широкий
            асортимент чохлів на стільці для годування, які забезпечать комфорт
            вашому малюкові та додадуть стиль вашому інтер'єру. Перегляньте наші
            колекції та виберіть ідеальний чохол для вашого стільчика!
          </Typography>

          <ShowMoreButton>Переглянути всі чохли</ShowMoreButton>
        </Container>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle>Новинки</SectionTitle>

        <OurNewProductsSlider />
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Чому обирають нас?</SectionTitle>

        <Container className="mt-10 px-0">
          <Benefits list={BENEFITS_LIST} />
        </Container>

        <div className="flex justify-center">
          <ShowMoreButton>Переглянути всі чохли</ShowMoreButton>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Часті запитання</SectionTitle>

        <Container className="mt-10 px-0">
          <Questions list={QUESTIONS_LIST} />
        </Container>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Відгуки</SectionTitle>

        <Feedbacks list={FEEDBACKS_LIST} />
      </SectionWrapper>

      <FloatingActionButton />
    </>
  );
}
