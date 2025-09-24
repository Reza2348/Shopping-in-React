const ProtectedRoute = ({ children, requireAuth = true }) => {
  const isAuthenticated = Boolean(localStorage.getItem("user"));

  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
