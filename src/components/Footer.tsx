
import { Instagram, Facebook, Linkedin, Youtube, ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <a href="#hero" className="text-white font-display text-xl uppercase tracking-wider">
              SEBASTIAN
              <span className="text-xs font-mono tracking-widest block text-metal-400">
                CUSTOM MOTORCYCLES
              </span>
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
            <a 
              href="#" 
              className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-all"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 text-white" />
            </a>
            <a 
              href="#" 
              className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
            <a 
              href="#" 
              className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-all"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-white/10">
          <div>
            <h4 className="text-white font-display font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">Sebastian's Story</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Workshop</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Team</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">Custom Parts</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">Performance</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">Consultations</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">Collaborations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Gallery</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:consultant@sebastian-moto.com" className="text-white/70 hover:text-white transition-colors text-sm">consultant@sebastian-moto.com</a></li>
              <li><a href="tel:+15551234567" className="text-white/70 hover:text-white transition-colors text-sm">+1 (555) 123-4567</a></li>
              <li><span className="text-white/70 text-sm">123 Custom Lane, Motorcycle District, CA 90210</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Sebastian Custom Motorcycles. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-all fixed bottom-8 right-8 z-40"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5 text-white" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
