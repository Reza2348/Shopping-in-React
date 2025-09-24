import React from "react";
import { Navigate } from "react-router"; // <- حتماً باید این را اضافه کنید

const ProtectedRoute = ({ children, requireAuth = true }) => {
  const isAuthenticated = Boolean(localStorage.getItem("user"));

  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
