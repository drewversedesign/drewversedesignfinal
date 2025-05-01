
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
        <a 
          key={link.name} 
          href={link.href}
          className="font-mono text-sm text-white/80 hover:text-white transition-colors hover-underline"
          onClick={(e) => {
            if (link.isHash) {
              e.preventDefault();
              handleNavClick && handleNavClick(link.href, link.isHash);
            }
          }}
        >
          {link.name.toUpperCase()}
        </a>
      )}
      <StartProjectButton isHomePage={links[0].isHash} />
    </div>
  );
};

const StartProjectButton = ({ isHomePage }: { isHomePage: boolean }) => (
  <a 
    href={isHomePage ? "#contact" : "/#contact"}
    className="bg-orange-500 text-white px-5 py-2 rounded-md font-mono text-sm transition-all hover:bg-orange-600"
    onClick={(e) => {
      if (isHomePage) {
        e.preventDefault();
        const element = document.getElementById("contact");
        if (element) {
          const navHeight = 80;
          const offsetPosition = element.offsetTop - navHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }}
  >
    START PROJECT
  </a>
);
