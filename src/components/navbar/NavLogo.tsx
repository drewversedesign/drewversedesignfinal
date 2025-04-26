
import { Link } from "react-router-dom";

export const NavLogo = ({ close }: { close: () => void }) => {
  return (
    <Link 
      to="/" 
      className="text-white font-display text-xl uppercase tracking-wider"
      onClick={close}
    >
      DREWVERSE
      <span className="text-xs font-mono tracking-widest block text-orange-400">DESIGN</span>
    </Link>
  );
};
