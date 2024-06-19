"use client";
import { Feedback } from "@/shared/enums/routes/interfaces/feedback";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { OUR_NEW_PRODUCTS_BREAKPOINTS } from "@/features/home/configs/our-new-products-breakboints.config";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Box, Paper, Typography } from "@mui/material";

interface Props {
  list: Feedback[];
}

export const Feedbacks = ({ list }: Props): JSX.Element => {
  return (
    <div className="container flex flex-col gap-5 md:flex-row items-center">
      <Swiper
        className="w-[88%] grid py-10"
        pagination={{
          clickable: true,
          el: ".pagination-feedbacks",
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
        {list.map(({ id, name, feedback }) => (
          <SwiperSlide key={id} className="py-2 h-full">
            <Paper
              component="article"
              sx={{ border: "1px solid #E0E0E0" }}
              className="p-3 h-full flex flex-col gap-4"
            >
              <Box className="flex justify-between">
                <Typography className="font-bold">{name}</Typography>

                <div>
                  <StarIcon className="text-yellow-500 text-sm" />
                  <StarIcon className="text-yellow-500 text-sm" />
                  <StarIcon className="text-yellow-500 text-sm" />
                  <StarIcon className="text-yellow-500 text-sm" />
                  <StarIcon className="text-yellow-500 text-sm" />
                </div>
              </Box>

              <Typography className="grow shrink-0">{feedback}</Typography>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`pagination-feedbacks flex gap-2 justify-center [&>.swiper-pagination-bullet-active]:bg-primary md:hidden`}
      ></div>
    </div>
  );
};
