import { Instagram, Linkedin, ChevronUp } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <footer className="bg-black border-t border-white/10 py-0">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-white font-display text-xl uppercase tracking-wider">
              DREWVERSE
              <span className="text-xs font-mono tracking-widest block text-orange-500">DESIGN </span>
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://instagram.com/drewverse_design" className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-all" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 text-white bg-transparent" />
            </a>
            <a href="https://linkedin.com/in/drew-verse" className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-all" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-6 border-t border-white/10">
          <div>
            <h4 className="text-white font-display font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">Our Story</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">Web Development</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">Mobile Apps</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">UI/UX Design</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">Branding</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-bold mb-4">Portfolio</h4>
            <ul className="space-y-2">
              <li><a href="#showcase" className="text-white/70 hover:text-white transition-colors text-sm">Latest Work</a></li>
              <li><a href="#showcase" className="text-white/70 hover:text-white transition-colors text-sm">Case Studies</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Testimonials</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Clients</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:drewversedesign@gmail.com" className="text-white/70 hover:text-white transition-colors text-sm">drewversedesign@gmail.com</a></li>
              <li><a href="tel:+256772653789" className="text-white/70 hover:text-white transition-colors text-sm">+256 772 653 789</a></li>
              <li><span className="text-white/70 text-sm">Kampala, Uganda</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DrewVerse Design. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
        
        <button onClick={scrollToTop} className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-all fixed bottom-8 right-8 z-40" aria-label="Scroll to top">
          <ChevronUp className="h-5 w-5 text-white" />
        </button>
      </div>
    </footer>;
};
export default Footer;
