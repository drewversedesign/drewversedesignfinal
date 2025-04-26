
import { useLocation } from "react-router-dom";

export const useNavLinks = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    {
      name: "Home",
      href: isHomePage ? "#hero" : "/",
      isHash: isHomePage
    },
    {
      name: "About",
      href: isHomePage ? "#about" : "/#about",
      isHash: isHomePage
    },
    {
      name: "Portfolio",
      href: isHomePage ? "#showcase" : "/#showcase",
      isHash: isHomePage
    },
    {
      name: "Services",
      href: isHomePage ? "#services" : "/#services",
      isHash: isHomePage
    },
    {
      name: "Blog",
      href: "/blog",
      isHash: false
    },
    {
      name: "Contact",
      href: isHomePage ? "#contact" : "/#contact",
      isHash: isHomePage
    }
  ];

  return { navLinks, isHomePage };
};
