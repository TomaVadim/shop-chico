import { GENDER } from "@/shared/enums/filter/gender.filter";

export const translateGender = (gender: string) => {
  switch (gender) {
    case GENDER.MALE:
      return "Для хлопчика";
    case GENDER.FEMALE:
      return "Для дівчинки";
    case GENDER.UNISEX:
      return "Унісекс";
    default:
      return "Унісекс";
  }
};
