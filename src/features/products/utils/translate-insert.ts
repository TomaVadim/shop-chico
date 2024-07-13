import { INSERT } from "@/shared/enums/filter/insert.filter";

export const translateInsert = (insert: string) => {
  switch (insert) {
    case INSERT.WITHOUT:
      return "without";
    case INSERT.WITH:
      return "with";
    default:
      return "all";
  }
};
