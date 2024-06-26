import { Button, Grid, Paper } from "@mui/material";
import Link from "next/link";
import image from "@/assets/images/home/our-new-products/image_1.jpeg";
import Image from "next/image";

export const ProductCard = (): JSX.Element => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper component="article" className="flex flex-col h-full" elevation={3}>
        <Image src={image} alt="image" className="w-full flex-[70%]" />

        <div className="px-5 py-6 flex justify-between items-center">
          <Button variant="outlined" color="secondary" className="text-sm">
            В корзину
          </Button>

          <Link href={""} className="text-sm text-black">
            Детальніше
          </Link>
        </div>
      </Paper>
    </Grid>
  );
};
