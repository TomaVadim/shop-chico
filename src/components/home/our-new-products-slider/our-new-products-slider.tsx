"use client";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { CircularProgress } from "@mui/material";

import { ArrowNextSlide } from "@/assets/icons/home/our-new-products/arrow-next-slide";
import { ArrowPrevSlide } from "@/assets/icons/home/our-new-products/arrow-prev-slide";
import { SliderNavigationButton } from "@/features/home/components/slider-navigation-button/slider-navigation-button";
import { OUR_NEW_PRODUCTS_BREAKPOINTS } from "@/features/home/configs/our-new-products-breakboints.config";
import { NewProductSwiperSlide } from "@/features/home/components/new-product-swiper-slide/new-product-swiper-slide";
import { ProductData } from "@/features/products/schemas/product-data";
import { fetchProducts } from "@/api/fetch-products";

import "swiper/css";
import "swiper/css/pagination";

export const OurNewProductsSlider = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  const fiveLastProducts = products.slice(0, 5);

  if (isLoading) {
    return (
      <div className="w-full py-2 h-[360px] flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }

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
        {fiveLastProducts.map(({ id, imageUrl, description }) => (
          <SwiperSlide key={id} className="py-2">
            <NewProductSwiperSlide
              id={id}
              imageSrc={imageUrl}
              alt={description}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pagination-our-team flex gap-2 justify-center md:hidden [&>.swiper-pagination-bullet-active]:bg-primary"></div>

      <SliderNavigationButton className="next">
        <ArrowNextSlide />
      </SliderNavigationButton>
    </div>
  );
};
