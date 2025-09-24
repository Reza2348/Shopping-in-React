import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      const response = await axios.post(
        "https://strapi-store-server.onrender.com/api/auth/local",
        {
          identifier: data.email,
          password: data.password,
        }
      );

      localStorage.setItem("token", response.data.jwt);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      toast.success("Login successful!");

      setTimeout(() => {
        navigate("/");
      }, 1500);
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
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full border border-gray-300 p-2 rounded
              focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full border border-gray-300 p-2 rounded
              focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-40 bg-[#F47458] text-white rounded-md mx-auto block px-4 py-2"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#F47458]">
            Sign Up
          </Link>
        </p>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;
