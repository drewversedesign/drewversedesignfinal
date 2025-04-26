
import { useLocation } from "react-router-dom";
import { META_TAGS } from "@/utils/meta-tags";

export const useNavLinks = () => {
  const location = useLocation();
  const isHomePage = location.pathname === META_TAGS.home.url;

  const navLinks = [
    {
      name: "Home",
      href: isHomePage ? "#hero" : META_TAGS.home.url,
      isHash: isHomePage
    },
    {
      name: "About",
      href: isHomePage ? "#about" : META_TAGS.about.url,
      isHash: isHomePage
    },
    {
      name: "Portfolio",
      href: isHomePage ? "#showcase" : META_TAGS.portfolio.url,
      isHash: isHomePage
    },
    {
      name: "Services",
      href: isHomePage ? "#services" : META_TAGS.services.url,
      isHash: isHomePage
    },
    {
      name: "Blog",
      href: META_TAGS.blog.url,
      isHash: false
    },
    {
      name: "Contact",
      href: isHomePage ? "#contact" : META_TAGS.contact.url,
      isHash: isHomePage
    }
  ];

  return { navLinks, isHomePage };
};
