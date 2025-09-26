// src/components/Products/Products.Styled.jsx
import styled from "styled-components";

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  padding: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ProductCard = styled.div`
  border: 1px solid #e5e7eb;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ProductTitle = styled.h3`
  font-weight: 600;
  font-size: 1.125rem;
`;

export const ProductInfo = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.color || "#4b5563"};
  margin-bottom: 0.25rem;
`;

export const ColorsWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`;

export const ColorCircle = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 1px solid #e5e7eb;
  background-color: ${(props) => props.color};
`;

export const AddButton = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  width: 100%;
  margin-top: 0.5rem;
  border: none;
  font-weight: 500;

  &:hover {
    background-color: #1e40af;
  }
`;
