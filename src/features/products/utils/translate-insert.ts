import { INSERT } from "@/shared/enums/filter/insert.filter";

export const translateInsert = (insert: string) => {
  switch (insert) {
    case INSERT.WITHOUT:
      return "Без вставки";
    case INSERT.WITH:
      return "З вставкою";
    default:
      return "Без вставки";
  }
};
