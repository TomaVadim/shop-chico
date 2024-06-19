import type { Metadata } from "next";

import { AppProvider } from "@/providers/app-provider";
import { montserrat } from "@/assets/fonts/montserrat";
import { roboto } from "@/assets/fonts/roboto";
import { Header } from "@/components/header/header";

import "./globals.css";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Chico Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" id="__next">
      <AppProvider>
        <body
          className={`${montserrat.variable} ${roboto.variable} font-montserrat h-full pt-[72px]`}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </AppProvider>
    </html>
  );
}
