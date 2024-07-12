"use client";
import Image from "next/image";

import { Button, Paper, Typography } from "@mui/material";

import { deleteOrderById } from "@/api/delete-order-by-id";
import { ExtendedCheckoutFormData } from "@/features/admin/shared/interfaces/extended-checkout-form-data";

interface Props {
  data: ExtendedCheckoutFormData;
}

export const Order = ({ data: order }: Props): JSX.Element => {
  const handleDeleteOrder = (id: number) => {
    deleteOrderById(id);
  };

  return (
    <Paper
      elevation={3}
      component="article"
      className="p-5 flex flex-col gap-3 w-[min(100%,600px)]"
    >
      <Typography>
        <b className="mr-2">фіо:</b>
        {order.name} {order.surname}
      </Typography>

      <Typography>
        <b className="mr-2">тел:</b> {order.phone}
      </Typography>

      <Typography>
        <b className="mr-2">доставка:</b>
        {order.delivery}
      </Typography>

      <Typography>
        <b className="mr-2">адреса:</b> {order.address}
      </Typography>

      <Typography>
        <b className="mr-2">оплата:</b>
        {order.payment}
      </Typography>

      <Typography>
        <b className="mr-2">коментар:</b>
        {order.comment}
      </Typography>
      <div className="mt-5 flex flex-col gap-3">
        {order.cart.map((product) => (
          <div
            key={product.id}
            className="pt-5 border-t border-x-0 border-b-0 border-solid border-black"
          >
            <Image
              priority
              src={product.imageUrl}
              alt={product.description}
              width={200}
              height={200}
            />
            <Typography>
              <b className="mr-2">опис:</b> {product.description}
            </Typography>

            <Typography>
              <b className="mr-2">ціна:</b> {product.price}
            </Typography>

            <Typography>
              <b className="mr-2">кільлькість:</b> {product.quantity}
            </Typography>

            <Typography>
              <b className="mr-2">вкладиш:</b> {product.insert}
            </Typography>

            <Typography>
              <b className="mr-2">стать:</b>
              {product.gender}
            </Typography>
          </div>
        ))}
      </div>

      <Button
        onClick={() => handleDeleteOrder(order.id)}
        fullWidth
        variant="contained"
        color="error"
        size="large"
      >
        Видалити
      </Button>
    </Paper>
  );
};
