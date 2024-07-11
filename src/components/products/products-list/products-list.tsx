import { Grid } from "@mui/material";

import { ProductCard } from "../product-card/product-card";
import { ProductData } from "@/features/products/schemas/product-data";

interface Props {
  list: ProductData[];
}

export const ProductsList = ({ list }: Props) => {
  return (
    <Grid container spacing={5}>
      {list.map((data) => (
        <ProductCard product={data} key={data.id} />
      ))}
    </Grid>
  );
};
