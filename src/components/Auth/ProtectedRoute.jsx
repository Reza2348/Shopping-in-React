// ProtectedRoute.jsx
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  // بررسی ورود کاربر در localStorage
  const isAuthenticated = Boolean(localStorage.getItem("user"));

  // اگر وارد نشده، هدایت به صفحه Login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // اگر وارد شده، نمایش children
  return children;
};

export default ProtectedRoute;
