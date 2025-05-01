
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  close: () => void;
  links: Array<{
    name: string;
    href: string;
    isHash: boolean;
  }>;
  handleNavClick: (href: string, isHash: boolean) => void;
}

export const MobileMenu = ({ isOpen, close, links, handleNavClick }: MobileMenuProps) => {
  return (
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
          <a 
            href="/" 
            className="text-white font-display text-xl uppercase tracking-wider"
            onClick={(e) => {
              e.preventDefault();
              close();
              window.location.href = '/';
            }}
          >
            DREWVERSE
            <span className="text-xs font-mono tracking-widest block text-orange-400">DESIGN</span>
          </a>
          
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
            {links.map(link => 
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (link.isHash) {
                    handleNavClick(link.href, link.isHash);
                  } else {
                    close();
                    window.location.href = link.href;
                  }
                }}
                className="text-2xl font-display text-white/80 hover:text-white transition-colors py-2"
              >
                {link.name.toUpperCase()}
              </a>
            )}
          </nav>
        </div>
        
        <div className="p-6 border-t border-white/10 flex justify-center">
          <a
            href={links[0].isHash ? "#contact" : "/#contact"}
            onClick={(e) => {
              e.preventDefault();
              close();
              if (links[0].isHash) {
                handleNavClick("#contact", true);
              } else {
                window.location.href = "/#contact";
              }
            }}
            className="bg-orange-500 text-white px-8 py-3 rounded-md font-mono text-lg transition-all hover:bg-orange-600 w-full text-center"
          >
            START PROJECT
          </a>
        </div>
      </div>
    </div>
  );
};
