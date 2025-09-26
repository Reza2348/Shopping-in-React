// src/components/Cart/Cart.Styled.jsx
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  font-family: "Roboto", sans-serif;

  @media (max-width: 639px) {
    padding: 0.5rem 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: 639px) {
    font-size: 1.5rem;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    border-radius: 0.5rem;

    @media (max-width: 639px) {
      width: 4.5rem;
      height: 4.5rem;
    }
  }
`;

export const ItemText = styled.div`
  p {
    margin: 0.25rem 0;
    font-size: 1.125rem;

    @media (max-width: 639px) {
      font-size: 1rem;
    }
  }
`;

export const ColorList = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.25rem;
`;

export const ColorCircle = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid #e5e7eb;
  background-color: ${(props) => props.color || "transparent"};
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  @media (min-width: 640px) {
    margin-top: 0;
  }

  button {
    padding: 0.25rem 0.75rem;
    background-color: #e5e7eb;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    font-size: 1.1rem;

    &:hover {
      background-color: #d1d5db;
    }

    @media (max-width: 639px) {
      padding: 0.2rem 0.5rem;
      font-size: 1rem;
    }
  }

  span {
    font-weight: 500;
    font-size: 1.25rem;

    @media (max-width: 639px) {
      font-size: 1.1rem;
    }
  }
`;

export const RemoveButton = styled.button`
  margin-top: 1rem;
  color: #dc2626;
  font-weight: 700;
  font-size: 1.25rem;
  border: none;
  background: none;
  cursor: pointer;
  transition: color 0.2s;

  @media (min-width: 640px) {
    margin-top: 0;
    margin-left: 1rem;
  }

  &:hover {
    color: #b91c1c;
  }

  @media (max-width: 639px) {
    font-size: 1.1rem;
  }
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;

  span {
    font-size: 1.25rem;
    font-weight: 600;

    @media (max-width: 639px) {
      font-size: 1.1rem;
    }
  }
`;

export const ClearButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  background-color: #dc2626;
  color: #fff;
  padding: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #b91c1c;
  }

  @media (max-width: 639px) {
    font-size: 1.1rem;
    padding: 0.6rem;
  }
`;

export const EmptyMessage = styled.p`
  padding: 2rem;
  text-align: center;
  color: #6b7280;
  font-size: 1.5rem;

  @media (max-width: 639px) {
    font-size: 1.2rem;
    padding: 1.5rem;
  }
`;

export const LoadingMessage = styled.p`
  padding: 2rem;
  text-align: center;
  color: #9ca3af;
  font-size: 1.5rem;

  @media (max-width: 639px) {
    font-size: 1.2rem;
    padding: 1.5rem;
  }
`;
