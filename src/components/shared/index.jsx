import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/signup", label: "Sign Up" },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#F97316]">
            Shope<span className="text-[#22C55E]">dia</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium relative transition-all after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#22C55E] after:transition-all ${
                location.pathname === link.href
                  ? "text-[#F06908]"
                  : "text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link to="/cart">
          <div className="flex justify-center text-gray-400 mt-2 cursor-pointer">
            <FaCartShopping
              size={26}
              className="cursor-pointer hover:text-black"
            />
          </div>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {isMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200 px-4 py-5 space-y-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-base font-medium ${
                location.pathname === link.href
                  ? "text-[#F06908]"
                  : "text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
