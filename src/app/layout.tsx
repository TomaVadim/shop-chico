import type { Metadata } from "next";

import { AppProvider } from "@/providers/app-provider";
import { montserrat } from "@/assets/fonts/montserrat";
import { roboto } from "@/assets/fonts/roboto";
import { Header } from "@/components/header/header";

import "./globals.css";
import { Footer } from "@/components/footer/footer";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { ModalCookieUsage } from "@/features/components/modal-cookie-usage/modal-cookie-usage";

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
          className={`${montserrat.variable} ${roboto.variable} font-montserrat h-full pt-[72px] flex flex-col`}
        >
          <Header />
          <main className="grow">
            <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
            {children}
          </main>
          <Footer />

          <ModalCookieUsage />
        </body>
      </AppProvider>
    </html>
  );
}
