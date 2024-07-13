import { Product } from "@/components/products/product/product";

export const generateMetadata = ({ params }: { params: { id: string } }) => {
  return {
    title: `Каталог товарів | ${params.id}`,
  };
};

export default function ProductPage({ params }: { params: { id: string } }) {
  return <Product params={params} />;
}
