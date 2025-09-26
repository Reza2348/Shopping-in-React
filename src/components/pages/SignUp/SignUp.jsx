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
} from "./SignUp.Styled";

const signUpSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        username: data.username.trim(),
        email: data.email.trim(),
        password: data.password,
      };
      const response = await client.post("/api/auth/local/register", payload);
      localStorage.setItem("token", response.data.jwt);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success("SignUp successful!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      const message =
        error?.response?.data?.error?.message?.[0]?.messages?.[0]?.message ||
        error?.response?.data?.error?.message ||
        error?.message ||
        "خطا در اتصال به سرور یا خطای ناشناخته.";
      toast.error(message);
    }
  };

  return (
    <Container>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="username">Username:</Label>
          <Input
            id="username"
            type="text"
            placeholder="Username"
            {...register("username")}
          />
          {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>

        <div>
          <Label htmlFor="password">Password:</Label>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </Button>

        <BottomText>
          Already have an account?
          <Link to="/login">Login</Link>
        </BottomText>
      </Form>
      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
};

export default SignUp;
