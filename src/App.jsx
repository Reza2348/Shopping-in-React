import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./components/lib/reactQuery";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { CartProvider } from "./components/context/CartContext";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
