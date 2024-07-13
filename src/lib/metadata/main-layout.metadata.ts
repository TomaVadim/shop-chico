import { Metadata } from "next";

export const MAIN_LAYOUT_METADATA: Metadata = {
  title: "Головна",
  description: "Інтернет магазин чохлів для годування дітей",
  authors: [
    {
      name: "V.T",
    },
  ],
  publisher: "V.T",
  alternates: {
    canonical: "/",
    languages: {
      uk: "/",
    },
  },
  openGraph: {
    title: "Інтернет магазин чохлів для годування дітей",
    description: "Інтернет магазин чохлів для годування дітей",
    url: "https://chehlidetkam.vercel.app",
    type: "website",
    locale: "uk_UA",
    siteName: "chehlidetkam",
    images: [
      {
        url: "https://chehlidetkam.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbaby.bfabbf0f.png&w=64&q=75",
        width: 150,
        height: 150,
        alt: "brand logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
