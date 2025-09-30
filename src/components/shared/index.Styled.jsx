import styled from "styled-components";
import { Link } from "react-router";

export const Nav = styled.nav`
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f97316;

  span {
    color: #22c55e;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => (props.$active ? "#F06908" : "#000")};
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  font-family: "Roboto", sans-serif;

  &:hover {
    color: #f97316;
  }
`;

export const CartIconWrapper = styled.div`
  cursor: pointer;
  color: gray;
  display: flex;
  align-items: center;
  transition: color 0.3s;

  &:hover {
    color: black;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.75rem;
  font-weight: bold;
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: #4b5563;
  }
`;

export const MobileMenu = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: ${(props) => (props.open ? "500px" : "0")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  background-color: #fff;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenuContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`;

export const MobileNavLink = styled(NavLink)`
  display: block;
  padding: 0.75rem 0;
  text-align: center;
  text-decoration: none;
`;
