import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { useLocation } from "react-router";
import { useCart } from "../context/CartContext"; // Context سبد خرید
import {
  Nav,
  NavContainer,
  Logo,
  NavLinks,
  NavLink,
  CartIconWrapper,
  MobileMenuButton,
  MobileMenu,
  MobileMenuContent,
  MobileNavLink,
  Badge,
} from "./index.Styled";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { items } = useCart(); // گرفتن آیتم‌های سبد خرید
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/signup", label: "Sign Up" },
  ];

  return (
    <Nav>
      <NavContainer>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Logo>
            Shope<span>dia</span>
          </Logo>
        </NavLink>

        <NavLinks>
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              $active={location.pathname === link.href}
            >
              {link.label}
            </NavLink>
          ))}
        </NavLinks>

        <NavLink to="/cart" style={{ position: "relative" }}>
          <CartIconWrapper>
            <FaCartShopping size={26} />
            {totalQuantity > 0 && <Badge>{totalQuantity}</Badge>}
          </CartIconWrapper>
        </NavLink>

        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </MobileMenuButton>
      </NavContainer>

      <MobileMenu open={isMenuOpen}>
        <MobileMenuContent>
          {navLinks.map((link) => (
            <MobileNavLink
              key={link.href}
              to={link.href}
              $active={location.pathname === link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </MobileNavLink>
          ))}
        </MobileMenuContent>
      </MobileMenu>
    </Nav>
  );
};

export default Header;
