import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";

import { ProductFormFieldProps } from "@/features/admin/shared/interfaces/product-form-field-props";
import { GENDER } from "@/shared/enums/filter/gender.filter";

export const SelectChoseGender = ({
  name,
  errors,
  errorMessage,
  register,
}: ProductFormFieldProps): JSX.Element => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <label className="mb-1 text-xl">Стать:</label>
      <Select
        error={!!errors[name]}
        {...register(name)}
        defaultValue={GENDER.UNISEX}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value={GENDER.UNISEX}>
          <em>Унісекс</em>
        </MenuItem>
        <MenuItem value={GENDER.MALE}>Для хлопчика</MenuItem>
        <MenuItem value={GENDER.FEMALE}>Для дівчинки</MenuItem>
      </Select>
      {errors[name] && <FormHelperText error>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};
