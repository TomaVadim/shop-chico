"use client";
import { useState } from "react";

import { Container, Grid, Typography } from "@mui/material";

import { ProductCard } from "@/components/products/product-card/product-card";
import { ProductData } from "@/features/products/schemas/product-data";
import { Pagination } from "@/components/products/pagination/pagination";

interface Props {
  listOfProducts: ProductData[];
}

export const ProductsList = ({ listOfProducts }: Props) => {
  const [page, setPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState(listOfProducts);
  const totalNumberOfPages = Math.ceil((listOfProducts.length + 1) / 10);

  const handlePageChange = async (value: number) => {
    setPage(value);
  };

  if (!currentPageData.length) {
    return (
      <Typography variant="h5" textAlign="center">
        Нічого не знайдено
      </Typography>
    );
  }

  return (
    <>
      <Grid container spacing={5}>
        {currentPageData.map((data) => (
          <ProductCard product={data} key={data.id} />
        ))}
      </Grid>
      <Container maxWidth="lg" className="py-10">
        <Pagination
          page={page}
          count={totalNumberOfPages}
          onChange={handlePageChange}
        />
      </Container>
    </>
  );
};
