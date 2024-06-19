import { StaticImageData } from "next/image";

export interface NewProductCard {
  id: number;
  imageSrc: StaticImageData;
  alt: string;
}
