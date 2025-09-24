import { createBrowserRouter, Outlet } from "react-router";
import Products from "./components/pages/Products";
import Header from "./components/shared/index";
import Home from "./components/pages/Home";
import Cart from "./components/Cart/Cart";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
// import ProtectedRoute from "./components/Auth/ProtectedRoute";

const MainLayout = () => (
  <>
    <Header />
    <div className="pt-20">
      <Outlet />
    </div>
  </>
);

const NoHeaderLayout = () => (
  <div>
    <Outlet />
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        element: (
          <Products />
        ),
      },
    ],
  },
  {
    path: "/cart",
    element: <NoHeaderLayout />,
    children: [{ index: true, element: <Cart /> }],
  },
  {
    path: "/signup",
    element: <NoHeaderLayout />,
    children: [{ index: true, element: <SignUp /> }],
  },
  {
    path: "/login",
    element: <NoHeaderLayout />,
    children: [{ index: true, element: <Login /> }],
  },
]);
