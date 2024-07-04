import { Suspense } from "react";

import { CircularProgress } from "@mui/material";

import { Filters } from "@/components/products/filters/filters";
import { ProductsList } from "@/components/products/products-list/products-list";
import { SectionWrapper } from "@/features/components/section-wrapper/section-wrapper";
import { fetchProducts } from "@/api/fetch-products";

export default async function Products() {
  const products = await fetchProducts();

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
        <ProductsList list={products} />
      </SectionWrapper>
    </>
  );
}
