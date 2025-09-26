// src/components/Cart/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import {
  Container,
  Title,
  ItemWrapper,
  ItemInfo,
  ItemText,
  ColorList,
  ColorCircle,
  QuantityControls,
  RemoveButton,
  TotalWrapper,
  ClearButton,
  EmptyMessage,
  LoadingMessage,
} from "./Cart.Styled";

const Cart = ({ isLoading, isError }) => {
  const { items, removeItem, increaseQty, decreaseQty, clearCart } = useCart();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (isLoading) return <LoadingMessage>در حال بارگذاری...</LoadingMessage>;

  if (isError)
    return (
      <EmptyMessage style={{ color: "red" }}>
        خطا در دریافت اطلاعات!
      </EmptyMessage>
    );

  if (items.length === 0)
    return <EmptyMessage>سبد خرید خالی است.</EmptyMessage>;

  return (
    <Container>
      <Title>سبد خرید شما</Title>

      {items.map((item) => (
        <ItemWrapper key={item.id}>
          <ItemInfo>
            {item.image && <img src={item.image} alt={item.title} />}
            <ItemText>
              <p>{item.title}</p>
              <p>${item.price}</p>
              {item.colors?.length > 0 && (
                <ColorList>
                  {item.colors.map((color, idx) => (
                    <ColorCircle key={idx} color={color} />
                  ))}
                </ColorList>
              )}
            </ItemText>
          </ItemInfo>

          <QuantityControls>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </QuantityControls>

          <RemoveButton onClick={() => removeItem(item.id)}>حذف</RemoveButton>
        </ItemWrapper>
      ))}

      <TotalWrapper>
        <span>جمع کل:</span>
        <span>${totalPrice}</span>
      </TotalWrapper>

      <ClearButton onClick={clearCart}>خالی کردن سبد خرید</ClearButton>
    </Container>
  );
};

export default Cart;
