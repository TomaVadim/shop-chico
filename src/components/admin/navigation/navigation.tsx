"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { NavigationItem } from "@/features/admin/shared/interfaces/navigation-item";
import { BREAKPOINTS } from "@/components/admin/navigation/breakpoints.navigation";
import { ADMIN_TABS, DEFAULT_TAB } from "@/constants/admin-tabs";

import "swiper/css";

interface Props {
  list: NavigationItem[];
}

export const Navigation = ({ list }: Props): JSX.Element => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setActiveTab(ADMIN_TABS[pathname] || DEFAULT_TAB);
  }, [pathname]);

  const handleChangeTab = (id: number): void => {
    setActiveTab(id);
  };

  return (
    <Swiper
      breakpoints={BREAKPOINTS}
      className="admin-navigation-container py-5 bg-slate-200"
    >
      {list.map(({ href, page, id }) => (
        <SwiperSlide
          key={id}
          onClick={() => handleChangeTab(id)}
          className={`flex justify-center border-solid border-y-0 border-l-0 border-r-black last:border-r-0 ${
            activeTab === id ? "text-red-500" : ""
          }`}
        >
          <Link href={href} className="text-inherit no-underline">
            {page}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
