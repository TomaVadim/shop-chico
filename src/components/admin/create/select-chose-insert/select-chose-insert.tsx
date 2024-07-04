import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";

import { ProductFormFieldProps } from "@/features/admin/shared/interfaces/product-form-field-props";
import { INSERT } from "@/shared/enums/filter/insert.filter";

export const SelectChoseInsert = ({
  name,
  errors,
  errorMessage,
  register,
}: ProductFormFieldProps): JSX.Element => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <label className="mb-1 text-xl">Вкладиш:</label>
      <Select
        error={!!errors[name]}
        {...register(name)}
        defaultValue={INSERT.WITHOUT}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value={INSERT.WITHOUT}>
          <em>Без вкладишу</em>
        </MenuItem>
        <MenuItem value={INSERT.WITH}>З вкладишем</MenuItem>
      </Select>
      {errors[name] && <FormHelperText error>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};
