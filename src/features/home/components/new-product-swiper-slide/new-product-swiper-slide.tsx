import Link from "next/link";
import Image from "next/image";

import { Box, Paper, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";

interface Props {
  imageSrc: string;
  alt: string;
  id: number;
}
export const NewProductSwiperSlide = ({
  imageSrc,
  alt,
  id,
}: Props): JSX.Element => {
  return (
    <Box className="w-full flex justify-center items-center">
      <Paper
        component={Link}
        href={`${PUBLIC_ROUTES.PRODUCTS}/${id}`}
        className="relative top-0 left-0 w-[250px] h-[360px]"
        sx={{ borderRadius: "6px" }}
        elevation={3}
      >
        <div className="relative w-full h-full overflow-hidden rounded-md">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="w-full h-full object-cover"
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
          />
        </div>
        <Typography
          variant="h2"
          className="absolute flex text-blue-400 items-center font-bold top-0 right-0 p-2"
        >
          <TaskAltIcon className="mr-1" />
          NEW
        </Typography>
      </Paper>
    </Box>
  );
};
