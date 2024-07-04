"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import { NavigationItem } from "@/features/admin/shared/interfaces/navigation-item";
import { BREAKPOINTS } from "@/components/admin/navigation/breakpoints.navigation";

import "swiper/css";

interface Props {
  list: NavigationItem[];
}

export const Navigation = ({ list }: Props): JSX.Element => {
  return (
    <Swiper
      breakpoints={BREAKPOINTS}
      className="admin-navigation-container py-5 bg-slate-200"
    >
      {list.map(({ href, page, id }) => (
        <SwiperSlide
          key={id}
          className="flex justify-center border-solid border-y-0 border-l-0 border-r-black last:border-r-0"
        >
          <Link href={href} className="text-inherit no-underline">
            {page}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
