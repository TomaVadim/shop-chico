import { Container, Typography } from "@mui/material";

import { fetchAllOrders } from "@/api/fetch-all-orders";
import { Order } from "@/components/admin/order/order";
import { Toaster } from "react-hot-toast";

export default async function Orders() {
  const { data, status } = await fetchAllOrders();

  if (!data || status !== 200)
    return (
      <Container maxWidth="lg" className="my-10">
        <Typography component="h1" variant="h1">
          Немає замовлень
        </Typography>
      </Container>
    );

  return (
    <Container
      component="section"
      maxWidth="lg"
      className="flex flex-col items-center gap-10 my-10"
    >
      <Toaster toastOptions={{ id: "delete-order" }} />
      {data.map((order) => (
        <Order key={order.id} data={order} />
      ))}
    </Container>
  );
}
