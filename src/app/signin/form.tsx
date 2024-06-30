"use client";
import { useRouter } from "next/navigation";

import { Button, FormControl } from "@mui/material";
import { signIn } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

import { InputField } from "@/components/login/input-field/input-field";
import { useIsValidLoginFormData } from "@/hooks/use-is-valid-login-form-data";
import { LoginFormData } from "@/shared/types/login-form-data";
import { PasswordField } from "@/components/login/password-field/password-field";
import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";
import { PRIVATE_ROUTES } from "@/shared/enums/routes/private-routes";

export const LoginForm = (): JSX.Element => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useIsValidLoginFormData();

  const onSubmit = async (data: LoginFormData) => {
    const response = await signIn("credentials", { ...data, redirect: false });

    if (response?.ok) {
      router.push(PRIVATE_ROUTES.ADMIN);
    } else {
      toast.error("Невірний логін або пароль", {
        position: "top-center",
        icon: "😱",
        id: "login-error",
        style: { background: "red", color: "white" },
      });
      router.push(PUBLIC_ROUTES.SIGNIN);
    }
  };

  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
    >
      <Toaster toastOptions={{ id: "login-error" }} />
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
