import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { items, removeItem, increaseQty, decreaseQty, clearCart } = useCart();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0)
    return (
      <p className="p-8 text-center text-gray-500 text-xl">
        سبد خرید خالی است.
      </p>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">سبد خرید شما</h1>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row justify-between items-center border rounded-lg p-4 mb-4 shadow hover:shadow-md transition"
        >
          <div className="flex items-center gap-4 w-full sm:w-2/3">
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
            )}
            <div>
              <p className="font-semibold text-lg">{item.title}</p>
              <p className="text-gray-600">${item.price}</p>
              {item.colors?.length > 0 && (
                <div className="flex gap-1 mt-1">
                  {item.colors.map((color, idx) => (
                    <span
                      key={idx}
                      style={{ backgroundColor: color }}
                      className="w-4 h-4 rounded-full border"
                    ></span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            <button
              onClick={() => decreaseQty(item.id)}
              className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              -
            </button>
            <span className="text-lg font-medium">{item.quantity}</span>
            <button
              onClick={() => increaseQty(item.id)}
              className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="mt-4 sm:mt-0 sm:ml-4 text-red-600 font-semibold hover:text-red-800 transition"
          >
            حذف
          </button>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg">
        <span className="text-xl font-bold">جمع کل:</span>
        <span className="text-xl font-semibold">${totalPrice}</span>
      </div>

      <button
        onClick={clearCart}
        className="mt-4 w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
      >
        خالی کردن سبد خرید
      </button>
    </div>
  );
};

export default Cart;
