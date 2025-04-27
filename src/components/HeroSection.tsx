import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={handleVideoLoaded}
          preload="auto"
          poster="https://github.com/drewversedesign/images-for-drewverse-website/blob/main/%20sample%20website%20designs%20by%20Drewverse%20Design.%20drewversedesign.online%20%20(6).png?raw=true"
          loading="eager"
        >
          <source src="https://github.com/drewversedesign/images-for-drewverse-website/raw/refs/heads/main/DREWVERSE%20DESIGN%20UGANDA%20(2).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div ref={heroRef} className={`section-container relative z-10 text-center transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-wider leading-tight animate-fade-in lg:text-3xl">
            CREATIVE <br />
            <span className="text-balance">DIGITAL SOLUTIONS</span>
          </h1>
          
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-white/80 font-mono max-w-2xl mx-auto animate-fade-in" style={{
          animationDelay: "200ms"
        }}>
            We craft modern, responsive digital experiences for startups and small businesses in Kampala and beyond.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in" style={{
          animationDelay: "400ms"
        }}>
            <a href="#services" className="w-full sm:w-auto group px-8 py-4 bg-orange-500 text-white font-mono text-sm uppercase tracking-wider rounded-md transition-all hover:bg-orange-600 flex items-center justify-center">
              Our Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-mono text-sm uppercase tracking-wider rounded-md hover:bg-white/10 transition-all text-center">
              About DrewVerse
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
