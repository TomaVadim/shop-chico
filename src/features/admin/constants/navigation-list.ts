import { NavigationItem } from "@/features/admin/shared/interfaces/navigation-item";
import { PRIVATE_ROUTES } from "@/shared/enums/routes/private-routes";

export const NAVIGATION_LIST: NavigationItem[] = [
  { id: 1, href: PRIVATE_ROUTES.CREATE, page: "+ Додати" },
  { id: 2, href: PRIVATE_ROUTES.ORDERS, page: "Замовлення" },
  { id: 3, href: "/admin", page: "пусто" },
  { id: 4, href: "/admin", page: "пусто" },
  { id: 5, href: "/admin", page: "пусто" },
];
