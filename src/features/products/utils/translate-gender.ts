import { GENDER } from "@/shared/enums/filter/gender.filter";

export const translateGender = (gender: string) => {
  switch (gender) {
    case GENDER.MALE:
      return "male";
    case GENDER.FEMALE:
      return "female";
    case GENDER.UNISEX:
      return "unisex";
    default:
      return "all";
  }
};
