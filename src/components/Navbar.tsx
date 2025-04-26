import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      href: "#hero"
    },
    {
      name: "About",
      href: "#about"
    },
    {
      name: "Portfolio",
      href: "#showcase"
    },
    {
      name: "Services",
      href: "#services"
    },
    {
      name: "Blog",
      href: "/blog"
    },
    {
      name: "Contact",
      href: "#contact"
    }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth"
      });
    }, 100);
  };

  return <nav className={cn("fixed top-0 w-full z-50 transition-all duration-300", scrolled ? "bg-black border-b border-white/10 py-3" : "bg-black py-5")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#hero" className="text-white font-display text-xl uppercase tracking-wider">
              DREWVERSE
              <span className="text-xs font-mono tracking-widest block text-orange-400">DESIGN </span>
            </a>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(link => <a key={link.name} href={link.href} className="font-mono text-sm text-white/80 hover:text-white transition-colors hover-underline">
                {link.name.toUpperCase()}
              </a>)}
            <a href="#contact" className="bg-orange-500 text-white px-5 py-2 rounded-md font-mono text-sm transition-all hover:bg-orange-600">
              START PROJECT
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none z-50" aria-label={isOpen ? "Close menu" : "Open menu"}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={cn("fixed inset-0 bg-black flex flex-col z-40 transition-transform duration-300 ease-in-out", isOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="relative w-full">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white focus:outline-none z-50" aria-label="Close menu">
            <X className="h-8 w-8" />
          </button>
        </div>
        <div className="flex flex-col space-y-6 items-center pt-24">
          {navLinks.map(link => <button key={link.name} onClick={() => handleNavClick(link.href)} className="text-2xl font-display text-white/80 hover:text-white transition-colors py-2 w-full text-center">
              {link.name.toUpperCase()}
            </button>)}
          <button onClick={() => handleNavClick("#contact")} className="mt-6 bg-orange-500 text-white px-8 py-3 rounded-md font-mono text-lg transition-all hover:bg-orange-600 w-64 text-center">
            CONSULT
          </button>
        </div>
      </div>
    </nav>;
};

export default Navbar;
