
import { Link } from "react-router-dom";

interface NavLink {
  name: string;
  href: string;
  isHash: boolean;
}

interface NavLinksProps {
  links: NavLink[];
  handleNavClick?: (href: string, isHash: boolean) => void;
}

export const NavLinks = ({ links, handleNavClick }: NavLinksProps) => {
  return (
    <div className="hidden md:flex space-x-8 items-center">
      {links.map(link => 
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
      <StartProjectButton isHomePage={links[0].isHash} />
    </div>
  );
};

const StartProjectButton = ({ isHomePage }: { isHomePage: boolean }) => (
  <Link 
    to={isHomePage ? "#contact" : "/#contact"}
    className="bg-orange-500 text-white px-5 py-2 rounded-md font-mono text-sm transition-all hover:bg-orange-600"
  >
    START PROJECT
  </Link>
);
