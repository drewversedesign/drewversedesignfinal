
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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

  const handleNavClick = (href: string, isHash: boolean) => {
    setIsOpen(false);
    
    if (isHash) {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }
      }, 100);
    }
  };

  return <nav className={cn(
    "fixed top-0 w-full z-50 transition-all duration-300",
    scrolled 
      ? "bg-black/70 backdrop-blur-md border-b border-white/10 py-3" 
      : "bg-transparent backdrop-blur-sm py-5"
  )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-display text-xl uppercase tracking-wider">
              DREWVERSE
              <span className="text-xs font-mono tracking-widest block text-orange-400">DESIGN </span>
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
            <Link to={isHomePage ? "#contact" : "/#contact"} className="bg-orange-500 text-white px-5 py-2 rounded-md font-mono text-sm transition-all hover:bg-orange-600">
              START PROJECT
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none z-50" aria-label={isOpen ? "Close menu" : "Open menu"}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={cn(
        "fixed inset-0 bg-black/60 backdrop-blur-md flex flex-col z-40 transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="relative w-full">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white focus:outline-none z-50" aria-label="Close menu">
            <X className="h-8 w-8" />
          </button>
        </div>
        <div className="flex flex-col space-y-6 items-center pt-24">
          {navLinks.map(link => 
            link.isHash ? (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => handleNavClick(link.href, link.isHash)} 
                className="text-2xl font-display text-white/90 hover:text-white transition-colors py-2 w-full text-center"
              >
                {link.name.toUpperCase()}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display text-white/90 hover:text-white transition-colors py-2 w-full text-center"
              >
                {link.name.toUpperCase()}
              </Link>
            )
          )}
          <Link 
            to={isHomePage ? "#contact" : "/#contact"} 
            className="mt-6 bg-orange-500 text-white px-8 py-3 rounded-md font-mono text-lg transition-all hover:bg-orange-600 w-64 text-center" 
            onClick={() => setIsOpen(false)}
          >
            CONSULT
          </Link>
        </div>
      </div>
    </nav>;
};

export default Navbar;
