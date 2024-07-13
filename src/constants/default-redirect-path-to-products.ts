import { SEARCH_PARAMS_GENDER } from "@/shared/enums/filter/search-params-gender.filter";
import { SEARCH_PARAMS_INSERT } from "@/shared/enums/filter/search-params-insert.filter";
import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";

export const DEFAULT_REDIRECT_PATH_TO_PRODUCTS = `${PUBLIC_ROUTES.PRODUCTS}?gender=${SEARCH_PARAMS_GENDER.ALL}&insert=${SEARCH_PARAMS_INSERT.ALL}`;
