import { Navigation } from "@/components/admin/navigation/navigation";
import { NAVIGATION_LIST } from "@/features/admin/constants/navigation-list";

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
