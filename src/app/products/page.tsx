import { Filters } from "@/components/products/filters/filters";
import { ProductsList } from "@/components/products/products-list/products-list";
import { SectionWrapper } from "@/features/components/section-wrapper/section-wrapper";

export default function Products() {
  return (
    <>
      <SectionWrapper>
        <Filters />
      </SectionWrapper>
      <SectionWrapper>
        <ProductsList />
      </SectionWrapper>
    </>
  );
}
