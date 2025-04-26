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

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#showcase" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="text-white font-display text-xl uppercase tracking-wider"
            >
              DREWVERSE
              <span className="text-xs font-mono tracking-widest block text-metal-400">
                DESIGN AGENCY
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-sm text-white/80 hover:text-white transition-colors hover-underline"
              >
                {link.name.toUpperCase()}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-md font-mono text-sm transition-all hover:bg-white/20"
            >
              START PROJECT
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col z-40 transition-transform duration-300 ease-in-out pt-24",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 items-center pt-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-display text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name.toUpperCase()}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-md font-mono text-lg transition-all hover:bg-white/20"
            onClick={() => setIsOpen(false)}
          >
            CONSULT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
