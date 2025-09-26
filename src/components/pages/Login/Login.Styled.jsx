// src/components/Login/Login.Styled.jsx
import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 5rem auto;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0.25rem;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;

  &:focus {
    border-color: #000;
    box-shadow: 0 0 0 1px #000;
  }
`;

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const Button = styled.button`
  width: 10rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #f47458;
  color: #fff;
  font-weight: 500;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.3s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #e15e3f;
  }
`;

export const BottomText = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;

  a {
    color: #f47458;
    margin-left: 0.25rem;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;
