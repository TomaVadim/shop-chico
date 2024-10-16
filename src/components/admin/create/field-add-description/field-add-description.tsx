import { FormControl, TextField } from "@mui/material";

import { ProductFormFieldProps } from "@/features/admin/shared/interfaces/product-form-field-props";

export const FieldAddDescription = ({
  name,
  errors,
  errorMessage,
  register,
}: ProductFormFieldProps): JSX.Element => {
  return (
    <FormControl className="flex flex-col items-center w-full">
      <label htmlFor="textarea-description" className="text-xl mb-1">
        Опис:
      </label>
      <TextField
        multiline
        className="w-[min(400px,100%)]"
        id="textarea-description"
        minRows={5}
        placeholder="Додати опис..."
        error={!!errors[name]}
        {...register(name)}
        helperText={errorMessage}
      />
    </FormControl>
  );
};
