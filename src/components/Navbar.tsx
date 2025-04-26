
import { useState, useEffect, useCallback } from "react";
import { X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useMobileNav } from "@/hooks/use-mobile-nav";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { isOpen, toggle, close } = useMobileNav();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav when route changes
  useEffect(() => {
    close();
  }, [location.pathname, close]);

  const handleNavClick = useCallback((href: string, isHash: boolean) => {
    close();
    
    if (isHash) {
      // Use a brief timeout to ensure the menu is closed before scrolling
      setTimeout(() => {
        const element = document.getElementById(href.substring(1));
        if (element) {
          const navHeight = 80; // Approximate navbar height
          const offsetPosition = element.offsetTop - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [close]);

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
            <Link 
              to="/" 
              className="text-white font-display text-xl uppercase tracking-wider"
              onClick={close}
            >
              DREWVERSE
              <span className="text-xs font-mono tracking-widest block text-orange-400">DESIGN</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(link => 
              link.isHash ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="font-mono text-sm text-white/80 hover:text-white transition-colors hover-underline"
                >
                  {link.name.toUpperCase()}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="font-mono text-sm text-white/80 hover:text-white transition-colors hover-underline"
                >
                  {link.name.toUpperCase()}
                </Link>
              )
            )}
            <Link 
              to={isHomePage ? "#contact" : "/#contact"}
              className="bg-orange-500 text-white px-5 py-2 rounded-md font-mono text-sm transition-all hover:bg-orange-600"
            >
              START PROJECT
            </Link>
          </div>

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

      {/* Mobile Menu - Completely revamped */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-0 bg-black/95 z-60 transition-opacity duration-300 md:hidden",
          isOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
        style={{ height: "100dvh", top: 0 }}
      >
        <div className="relative h-full flex flex-col">
          <div className="flex justify-between items-center py-5 px-6 border-b border-white/10">
            <Link 
              to="/" 
              className="text-white font-display text-xl uppercase tracking-wider"
              onClick={close}
            >
              DREWVERSE
              <span className="text-xs font-mono tracking-widest block text-orange-400">DESIGN</span>
            </Link>
            
            <button
              onClick={close}
              className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex flex-col flex-1 overflow-y-auto py-8 px-6">
            <nav className="flex flex-col space-y-6 items-center">
              {navLinks.map(link => 
                link.isHash ? (
                  <a 
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href, link.isHash);
                    }}
                    className="text-2xl font-display text-white/80 hover:text-white transition-colors py-2"
                  >
                    {link.name.toUpperCase()}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={close}
                    className="text-2xl font-display text-white/80 hover:text-white transition-colors py-2"
                  >
                    {link.name.toUpperCase()}
                  </Link>
                )
              )}
            </nav>
          </div>
          
          <div className="p-6 border-t border-white/10 flex justify-center">
            <Link
              to={isHomePage ? "#contact" : "/#contact"}
              onClick={() => {
                close();
                if (isHomePage) {
                  handleNavClick("#contact", true);
                }
              }}
              className="bg-orange-500 text-white px-8 py-3 rounded-md font-mono text-lg transition-all hover:bg-orange-600 w-full text-center"
            >
              START PROJECT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
