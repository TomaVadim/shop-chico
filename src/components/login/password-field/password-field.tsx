"use client";
import { useState } from "react";

import { BaseTextFieldProps, TextField } from "@mui/material";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { LoginFormData } from "@/shared/types/login-form-data";

interface Props extends BaseTextFieldProps {
  name: keyof LoginFormData;
  register: UseFormRegister<LoginFormData>;
  errors: FieldErrors<LoginFormData>;
}

export const PasswordField = ({
  register,
  errors,
  name,
  ...props
}: Props): JSX.Element => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsVisiblePassword((prev) => !prev);
  };
  return (
    <TextField
      fullWidth
      {...props}
      {...register(name)}
      type={isVisiblePassword ? "text" : "password"}
      error={!!errors[name]}
      helperText={errors[name]?.message}
      InputProps={{
        endAdornment: isVisiblePassword ? (
          <VisibilityOff onClick={handleTogglePasswordVisibility} />
        ) : (
          <Visibility onClick={handleTogglePasswordVisibility} />
        ),
      }}
    />
  );
};
