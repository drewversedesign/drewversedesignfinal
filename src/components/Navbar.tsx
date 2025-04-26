
import { useState, useEffect, useCallback } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMobileNav } from "@/hooks/use-mobile-nav";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavLogo } from "./navbar/NavLogo";
import { NavLinks } from "./navbar/NavLinks";
import { MobileMenu } from "./navbar/MobileMenu";
import { useNavLinks } from "./navbar/useNavLinks";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, toggle, close } = useMobileNav();
  const isMobile = useIsMobile();
  const { navLinks } = useNavLinks();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    close();
  }, [close]);

  const handleNavClick = useCallback((href: string, isHash: boolean) => {
    close();
    
    if (isHash) {
      setTimeout(() => {
        const element = document.getElementById(href.substring(1));
        if (element) {
          const navHeight = 80;
          const offsetPosition = element.offsetTop - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [close]);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-black/70 backdrop-blur-md border-b border-white/10 py-3" 
          : "bg-transparent backdrop-blur-sm py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <NavLogo close={close} />
          </div>

          <NavLinks links={navLinks} handleNavClick={handleNavClick} />

          <button
            onClick={toggle}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isOpen}
        close={close}
        links={navLinks}
        handleNavClick={handleNavClick}
      />
    </nav>
  );
};

export default Navbar;
