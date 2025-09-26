import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router";
import { client } from "../../lib/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  ErrorMessage,
  Button,
  BottomText,
} from "./Login.Styled";

const loginSchema = z.object({
  email: z.string().email("Email Invalid"),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await client.post("/api/auth/local", {
        identifier: data.email,
        password: data.password,
      });

      localStorage.setItem("token", response.data.jwt);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      toast.success("Login successful!");
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      const message =
        error?.response?.data?.error?.message ||
        error?.message ||
        "خطا در ورود";
      toast.error(message);
      console.error("Login error:", message);
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Email:</Label>
          <Input type="email" placeholder="Email" {...register("email")} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <div>
          <Label>Password:</Label>
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>

        <BottomText>
          Don't have an account?
          <Link to="/signup">Sign Up</Link>
        </BottomText>
      </Form>

      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
};

export default Login;
