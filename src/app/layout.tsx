import type { Metadata } from "next";

import { AppProvider } from "@/providers/app-provider";
import { montserrat } from "@/assets/fonts/montserrat";
import { roboto } from "@/assets/fonts/roboto";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { ModalCookieUsage } from "@/features/components/modal-cookie-usage/modal-cookie-usage";
import { MAIN_LAYOUT_METADATA } from "@/lib/metadata/main-layout.metadata";

import "./globals.css";

export const metadata: Metadata = MAIN_LAYOUT_METADATA;

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
