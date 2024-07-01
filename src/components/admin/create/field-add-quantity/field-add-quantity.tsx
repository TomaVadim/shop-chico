import { TextField } from "@mui/material";

import { ProductFormFieldProps } from "@/features/admin/shared/interfaces/product-form-field-props";

export const FieldAddQuantity = ({
  name,
  errors,
  errorMessage,
  register,
}: ProductFormFieldProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-xl" htmlFor="input-quantity">
        Кількість:
      </label>
      <TextField
        error={!!errors[name]}
        {...register(name)}
        helperText={errorMessage}
        placeholder="1"
        id="input-quantity"
      />
    </div>
  );
};
