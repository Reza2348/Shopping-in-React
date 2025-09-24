import Header from "../shared/Header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
