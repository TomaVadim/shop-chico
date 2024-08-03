"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Container, Grid, Typography } from "@mui/material";

import { ProductCard } from "@/components/products/product-card/product-card";
import { Pagination } from "@/components/products/pagination/pagination";
import { translateInsert } from "@/features/products/utils/translate-insert";
import { translateGender } from "@/features/products/utils/translate-gender";
import { ExtendedProductData } from "@/features/products/shared/interfaces/extended-product-data";
import { fetchAllProducts } from "@/api/fetch-all-products";

export const ProductsList = () => {
  const [allProducts, setAllProducts] = useState<ExtendedProductData[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<
    ExtendedProductData[]
  >([]);
  const [currentPageData, setCurrentPageData] = useState<ExtendedProductData[]>(
    []
  );
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const searchParams = useSearchParams();
  const insert = searchParams.get("insert") || "";
  const gender = searchParams.get("gender") || "";

  // Fetch all products on mount
  useEffect(() => {
    const getAllProducts = async () => {
      const products = await fetchAllProducts();
      setAllProducts(products);
    };
    getAllProducts();
  }, []);

  // Update filtered products when insert or gender changes
  useEffect(() => {
    const filteredData = allProducts
      .filter((product) => {
        const translatedInsert = translateInsert(product.insert);
        const translatedGender = translateGender(product.gender);
        const insertMatch = insert === "all" || translatedInsert === insert;
        const genderMatch = gender === "all" || translatedGender === gender;
        return insertMatch && genderMatch;
      })
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    setFilteredProducts(filteredData);
    setTotalPages(Math.ceil(filteredData.length / 10));
    setPage(1); // Reset to first page on filter change
  }, [insert, gender, allProducts]);

  // Update current page data when page or filtered products change
  useEffect(() => {
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    setCurrentPageData(filteredProducts.slice(startIndex, endIndex));
  }, [page, filteredProducts]);

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  if (!currentPageData.length) {
    return (
      <Typography variant="h5" textAlign="center">
        Нічого не знайдено
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
