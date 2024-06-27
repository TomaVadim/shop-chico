import { Filters } from "@/components/products/filters/filters";
import { ProductsList } from "@/components/products/products-list/products-list";
import { SectionWrapper } from "@/features/components/section-wrapper/section-wrapper";
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";

export default function Products() {
  return (
    <>
      <SectionWrapper>
        <Suspense
          fallback={
            <div className="flex justify-center items-center">
              <CircularProgress />
            </div>
          }
        >
          <Filters />
        </Suspense>
      </SectionWrapper>
      <SectionWrapper>
        <ProductsList />
      </SectionWrapper>
    </>
  );
}
