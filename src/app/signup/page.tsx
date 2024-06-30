export default function Signin() {
  async function handleSubmit(data: FormData) {
    "use server";

    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email: data.get("email"),
          password: data.get("password"),
        }),
      });

      const resData = await response.json();

      console.log(resData);
    } catch (error) {
      console.log(error);
    }

    console.log(data.get("email"));
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />

      <button type="submit">SignIn</button>
    </form>
  );
}
