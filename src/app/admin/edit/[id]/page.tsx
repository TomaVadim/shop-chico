import { fetchProductById } from "@/api/fetch-product-by-id";

import { SectionWrapper } from "@/features/components/section-wrapper/section-wrapper";
import { EditForm } from "./edit-form";

export default async function Edit({ params }: { params: { id: string } }) {
  const product = await fetchProductById(params.id);

  const data = product.data;

  return (
    <SectionWrapper>
      <EditForm data={data} />
    </SectionWrapper>
  );
}
