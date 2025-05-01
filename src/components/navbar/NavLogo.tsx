
export const NavLogo = ({ close }: { close: () => void }) => {
  return (
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
  );
};
