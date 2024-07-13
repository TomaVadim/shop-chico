"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Container, Grid, Typography } from "@mui/material";

import { ProductCard } from "@/components/products/product-card/product-card";
import { ProductData } from "@/features/products/schemas/product-data";
import { Pagination } from "@/components/products/pagination/pagination";
import { translateInsert } from "@/features/products/utils/translate-insert";
import { translateGender } from "@/features/products/utils/translate-gender";
import { fetchProducts } from "@/api/fetch-products";

interface Props {
  listOfProducts: ProductData[];
}

export const ProductsList = ({ listOfProducts }: Props) => {
  const [page, setPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState(listOfProducts);
  const [totalPages, setTotalPages] = useState(
    (currentPageData.length + 1) / 10
  );

  const searchParams = useSearchParams();
  const [insert, setInsert] = useState<string>(
    searchParams.get("insert") || ""
  );
  const [gender, setGender] = useState<string>(
    searchParams.get("gender") || ""
  );

  useEffect(() => {
    setInsert(searchParams.get("insert") || "");
    setGender(searchParams.get("gender") || "");
  }, [searchParams]);

  useEffect(() => {
    const filteredData = listOfProducts.filter((product) => {
      const translatedInsert = translateInsert(product.insert);
      const translatedGender = translateGender(product.gender);

      const insertMatch = insert === "all" || translatedInsert === insert;
      const genderMatch = gender === "all" || translatedGender === gender;

      return insertMatch && genderMatch;
    });

    setTotalPages(Math.ceil((filteredData.length + 1) / 10));
    setCurrentPageData(filteredData);
  }, [insert, gender, listOfProducts]);

  const handlePageChange = async (value: number) => {
    const products = await fetchProducts(value);
    setCurrentPageData(products);
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
          count={totalPages}
          onChange={handlePageChange}
        />
      </Container>
    </>
  );
};
