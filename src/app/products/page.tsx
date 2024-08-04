import { Metadata } from "next";

import { Suspense } from "react";

import { CircularProgress } from "@mui/material";

import { Filters } from "@/components/products/filters/filters";
import { ProductsList } from "@/components/products/products-list/products-list";
import { SectionWrapper } from "@/features/components/section-wrapper/section-wrapper";

export const metadata: Metadata = {
  title: "Каталог товарів",
};

export default function Products() {
  return (
    <>
      <SectionWrapper className="py-5">
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
      <SectionWrapper className="py-5">
        <ProductsList />
      </SectionWrapper>
    </>
  );
}
