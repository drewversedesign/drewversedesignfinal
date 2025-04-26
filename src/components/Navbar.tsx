import { useState, useEffect, useCallback } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useMobileNav } from "@/hooks/use-mobile-nav";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { isOpen, setIsOpen } = useMobileNav();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((href: string, isHash: boolean) => {
    setIsOpen(false);
    
    if (isHash) {
      requestAnimationFrame(() => {
        const element = document.querySelector(href);
        if (element) {
          const navHeight = 80; // Approximate navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      });
    }
  }, [setIsOpen]);

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
        "fixed top-0 w-full z-40 transition-all duration-300",
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
              onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-sm z-50 transition-all duration-300 md:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col space-y-6 items-center pt-24 px-6">
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
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display text-white/80 hover:text-white transition-colors py-2"
                >
                  {link.name.toUpperCase()}
                </Link>
              )
            )}
            <Link
              to={isHomePage ? "#contact" : "/#contact"}
              onClick={() => {
                setIsOpen(false);
                if (isHomePage) {
                  handleNavClick("#contact", true);
                }
              }}
              className="mt-6 bg-orange-500 text-white px-8 py-3 rounded-md font-mono text-lg transition-all hover:bg-orange-600 w-64 text-center"
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
