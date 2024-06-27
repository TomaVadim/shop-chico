"use client";

import { Button, FormControl } from "@mui/material";

import { InputField } from "@/components/login/input-field/input-field";
import { useIsValidLoginFormData } from "@/hooks/use-is-valid-login-form-data";
import { LoginFormData } from "@/shared/types/login-form-data";
import { PasswordField } from "@/components/login/password-field/password-field";

export const LoginForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useIsValidLoginFormData();

  const onSubmit = (data: LoginFormData) => {};

  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="flex flex-col gap-5"
    >
      <InputField
        placeholder="Email"
        register={register}
        errors={errors}
        name="email"
        variant="outlined"
      />
      <PasswordField
        placeholder="********"
        register={register}
        errors={errors}
        name="password"
        variant="outlined"
      />

      <Button
        fullWidth
        size="large"
        className="mt-5"
        type="submit"
        variant="contained"
      >
        Вхід
      </Button>
    </FormControl>
  );
};
