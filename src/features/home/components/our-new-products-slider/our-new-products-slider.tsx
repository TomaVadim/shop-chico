"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Box, Paper, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import { ArrowNextSlide } from "@/assets/icons/home/our-new-products/arrow-next-slide";
import { ArrowPrevSlide } from "@/assets/icons/home/our-new-products/arrow-prev-slide";
import { SliderNavigationButton } from "@/features/home/components/slider-navigation-button/slider-navigation-button";
import { OUR_NEW_PRODUCTS_BREAKPOINTS } from "@/features/home/configs/our-new-products-breakboints.config";
import { NewProductCard } from "@/shared/enums/routes/interfaces/new-product-card";

import "swiper/css";
import "swiper/css/pagination";

interface Props {
  list: NewProductCard[];
}

export const OurNewProductsSlider = ({ list }: Props): JSX.Element => {
  return (
    <div className="mt-10 md:mt-20 container flex flex-col gap-5 md:flex-row items-center">
      <SliderNavigationButton className="prev">
        <ArrowPrevSlide />
      </SliderNavigationButton>

      <Swiper
        className="w-[88%]"
        pagination={{
          clickable: true,
          el: ".pagination-our-team",
          type: "bullets",
        }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        breakpoints={OUR_NEW_PRODUCTS_BREAKPOINTS}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
      >
        {list.map(({ id, imageSrc, alt }) => (
          <SwiperSlide key={id} className="py-2">
            <Box className="w-full flex justify-center items-center">
              <Paper
                className="relative top-0 left-0 h-[240px] md:w-[360px] md:h-[360px] w-[240px]"
                sx={{ borderRadius: "6px" }}
                elevation={3}
              >
                <Image
                  className="w-full h-full rounded-md object-cover"
                  src={imageSrc}
                  alt={alt}
                />

                <Typography
                  variant="h2"
                  color={"warning.main"}
                  className="absolute flex items-center font-bold top-0 right-0 p-2"
                >
                  <TaskAltIcon className="mr-1" />
                  NEW
                </Typography>
              </Paper>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`pagination-our-team flex gap-2 justify-center [&>.swiper-pagination-bullet-active]:bg-primary md:hidden`}
      ></div>

      <SliderNavigationButton className="next">
        <ArrowNextSlide />
      </SliderNavigationButton>
    </div>
  );
};
