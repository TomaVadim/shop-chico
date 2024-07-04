import { TextField } from "@mui/material";

import { ProductFormFieldProps } from "@/features/admin/shared/interfaces/product-form-field-props";

export const FieldAddPrice = ({
  name,
  errors,
  errorMessage,
  register,
}: ProductFormFieldProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-xl" htmlFor="input-price">
        Вартість:
      </label>
      <TextField
        type="number"
        error={!!errors[name]}
        {...register(name)}
        helperText={errorMessage}
        placeholder="650"
        id="input-price"
      />
    </div>
  );
};
