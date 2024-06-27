import { BaseTextFieldProps, TextField } from "@mui/material";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import { LoginFormData } from "@/shared/types/login-form-data";

interface Props extends BaseTextFieldProps {
  name: keyof LoginFormData;
  register: UseFormRegister<LoginFormData>;
  errors: FieldErrors<LoginFormData>;
}

export const InputField = ({
  register,
  errors,
  name,
  ...props
}: Props): JSX.Element => {
  return (
    <TextField
      fullWidth
      {...props}
      error={!!errors[name]}
      helperText={errors[name]?.message}
      {...register(name)}
    />
  );
};
