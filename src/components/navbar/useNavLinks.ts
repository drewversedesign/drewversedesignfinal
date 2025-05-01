
import { META_TAGS } from "@/utils/meta-tags";

export const useNavLinks = () => {
  // Determine if we're on the home page based on window.location
  // This doesn't rely on React Router hooks
  let isHomePage = true;
  
  try {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      isHomePage = pathname === '/' || pathname === META_TAGS.home.url;
    }
  } catch (error) {
    console.warn("Error determining page location, defaulting to home page links");
    isHomePage = true;
  }

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
