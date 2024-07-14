"use client";

import { useRouter } from "next/navigation";

import toast, { Toaster } from "react-hot-toast";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { sendOrder } from "@/api/send-order";
import { useValidateCheckoutFormData } from "@/features/cart/hooks/use-validate-checkout-form-data";
import { CheckoutFormData } from "@/features/cart/schemas/checkout-form-schema";
import { DELIVERY_METHOD } from "@/features/cart/shared/enums/delivery-method";
import { PAYMENT_METHOD } from "@/features/cart/shared/enums/payment-method";
import { useCartQuantity } from "@/stores/zustand/use-cart-quantity";
import { useCartStore } from "@/stores/zustand/use-cart-store";
import { PUBLIC_ROUTES } from "@/shared/enums/routes/public-routes";
import { useState } from "react";

export const CheckoutForm = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { clearCart } = useCartStore();

  const { clearQuantity } = useCartQuantity();

  const handleClose = () => {
    setOpen(false);

    router.push(PUBLIC_ROUTES.HOME);
  };

  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useValidateCheckoutFormData();

  const handleOnSubmit = async (data: CheckoutFormData) => {
    const res = await sendOrder(data);

    if (res.status !== 201) {
      return toast.error("Щось пішло не так", {
        position: "top-center",
        id: "make-order",
      });
    }

    toast.success("Замовлення відправлено", {
      position: "top-center",
      id: "make-order",
    });

    clearCart();

    clearQuantity();

    reset();

    setOpen(true);
  };

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="flex flex-col gap-5"
    >
      <Dialog open={open}>
        <DialogTitle>Ваше замовлення було відправлено</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Найближчим часом ми з Вами зв'яжемося
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Закрити
          </Button>
        </DialogActions>
      </Dialog>

      <Toaster toastOptions={{ id: "make-order" }} />

      <TextField
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
        placeholder="Введіть ваше ім'я"
      />

      <TextField
        {...register("surname")}
        error={!!errors.surname}
        helperText={errors.surname?.message}
        placeholder="Введіть ваше прізвище"
      />

      <TextField
        type="number"
        {...register("phone")}
        error={!!errors.phone}
        helperText={errors.phone?.message}
        placeholder="Введіть ваш телефон"
      />

      <TextField
        {...register("address")}
        error={!!errors.address}
        helperText={errors.address?.message}
        placeholder="Введіть адресу, або номер відділення"
      />

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          error={!!errors.delivery}
          {...register("delivery")}
          defaultValue={DELIVERY_METHOD.NOVA_POSHTA}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={DELIVERY_METHOD.NOVA_POSHTA}>
            <em>{DELIVERY_METHOD.NOVA_POSHTA}</em>
          </MenuItem>
          <MenuItem value={DELIVERY_METHOD.UKR_POSHTA}>
            {DELIVERY_METHOD.UKR_POSHTA}
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          error={!!errors.payment}
          {...register("payment")}
          defaultValue={PAYMENT_METHOD.BEFORE_DELIVERY}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={PAYMENT_METHOD.BEFORE_DELIVERY}>
            <em>{PAYMENT_METHOD.BEFORE_DELIVERY}</em>
          </MenuItem>
          <MenuItem value={PAYMENT_METHOD.AFTER_DELIVERY}>
            {PAYMENT_METHOD.AFTER_DELIVERY}
          </MenuItem>
        </Select>
      </FormControl>

      <TextField
        {...register("comment")}
        error={!!errors.comment}
        multiline
        rows={4}
        helperText={errors.comment?.message}
        placeholder="Додатковий коментар до замовлення"
      />

      <Button type="submit" size="large" variant="contained" className="mt-5">
        Оформити замовлення
      </Button>
    </form>
  );
};
