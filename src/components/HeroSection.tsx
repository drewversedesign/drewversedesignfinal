
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = 1 - scrollPosition / 700;
      const translateY = scrollPosition * 0.5;
      
      heroRef.current.style.opacity = Math.max(opacity, 0).toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source 
            src="https://cdn.dribbble.com/userupload/8132900/file/original-ce7edc7add78c536e3eec214b04ca26c.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div 
        ref={heroRef}
        className="section-container relative z-10 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-white uppercase tracking-wider leading-tight animate-fade-in">
            CREATIVE <br />
            <span className="text-balance">DIGITAL SOLUTIONS</span>
          </h1>
          
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-white/80 font-mono max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "200ms"}}>
            We craft modern, responsive digital experiences for startups and small businesses in Kampala and beyond.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: "400ms"}}>
            <a 
              href="#services" 
              className="group px-8 py-3 bg-orange-500 text-white font-mono text-sm uppercase tracking-wider rounded-md transition-all hover:bg-orange-600 flex items-center"
            >
              Our Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="#about" 
              className="px-8 py-3 bg-transparent border border-white/30 text-white font-mono text-sm uppercase tracking-wider rounded-md hover:bg-white/10 transition-all"
            >
              About DrewVerse
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <a href="#about" className="inline-block">
          <div className="w-px h-16 bg-white/30 mx-auto"></div>
          <div className="w-5 h-5 border-b border-r border-white/30 transform rotate-45 mt-2"></div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
