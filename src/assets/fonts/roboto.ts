import { Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["cyrillic"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});
