import { Grid } from "@mui/material";

import { ProductCard } from "../product-card/product-card";

export const ProductsList = () => {
  const mockList = [1, 2, 3, 4, 5];
  return (
    <Grid container spacing={5}>
      {mockList.map((_, index) => (
        <ProductCard key={index} />
      ))}
    </Grid>
  );
};
