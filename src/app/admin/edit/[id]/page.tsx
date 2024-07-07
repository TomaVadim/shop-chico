import { fetchProductById } from "@/api/fetch-product-by-id";

import { SectionWrapper } from "@/features/components/section-wrapper/section-wrapper";
import { EditForm } from "./form";

export default async function Edit({ params }: { params: { id: string } }) {
  const product = await fetchProductById(params.id);

  return (
    <SectionWrapper>
      <EditForm data={product} />
    </SectionWrapper>
  );
}
