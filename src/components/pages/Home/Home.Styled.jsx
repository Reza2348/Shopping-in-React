import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  text-align: center;
  margin-top: 2rem;

  @media (min-width: 1024px) {
    text-align: left;
    margin-top: 0;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #111;
  font-family: "Roboto", sans-serif;

  span {
    color: #3b82f6;
    padding: 0 0.5rem;
  }

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  margin-top: 1rem;
  color: #333;
  font-size: 0.875rem;
  font-family: "Roboto", sans-serif;
  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

export const BuyButton = styled.button`
  margin-top: 1.5rem;
  background-color: #3b82f6;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: #2563eb;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 400px;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }
`;
