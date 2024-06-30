import { Container, Paper, Typography } from "@mui/material";
import { LoginForm } from "./form";

export default function Login() {
  return (
    <Container className="h-screen flex justify-center items-center">
      <Paper className="px-8 py-10 w-[min(90%,400px)]" elevation={3}>
        <Typography className="mb-5" variant="h2" textAlign="center">
          Вхід
        </Typography>

        <LoginForm />
      </Paper>
    </Container>
  );
}
