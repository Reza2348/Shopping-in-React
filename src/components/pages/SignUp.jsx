import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const signUpSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters."),
  email: z.string().email("Email is invalid."),
  password: z.string().min(6, "Password must be at least 6 characters."),
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

      const response = await axios.post(
        "https://strapi-store-server.onrender.com/api/auth/local/register",
        payload
      );

      localStorage.setItem("token", response.data.jwt);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      toast.success("SignUp successful!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
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
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            {...register("username")}
            className="w-full border border-gray-300 p-2 rounded
              focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full border border-gray-300 p-2 rounded
              focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full border border-gray-300 p-2 rounded
              focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-40 bg-[#F47458] rounded-md mx-auto block text-white px-4 py-2 transition cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </button>

        <div className="text-center mt-4">
          <p>
            Already have an account?
            <Link to="/login" className="text-[#F47458]">
              Login
            </Link>
          </p>
        </div>
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
      </form>
    </div>
  );
};

export default SignUp;
