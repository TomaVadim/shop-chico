import { Metadata } from "next";

import { Navigation } from "@/components/admin/navigation/navigation";
import { NAVIGATION_LIST } from "@/features/admin/constants/navigation-list";

export const metadata: Metadata = {
  title: "Адмін панель",
  description: "Адмін панель",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation list={NAVIGATION_LIST} />
      {children}
    </>
  );
}
