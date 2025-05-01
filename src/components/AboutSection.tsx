
import { useEffect, useRef, useState } from "react";
import { Briefcase, Users, Award, Globe } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import type { CarouselApi } from "@/components/ui/carousel";
import { Helmet } from "react-helmet-async";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!api) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, {
      threshold: 0.1
    });

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const stats = [{
    icon: Globe,
    value: "20+",
    label: "Projects Completed"
  }, {
    icon: Users,
    value: "50+",
    label: "Happy Clients"
  }, {
    icon: Briefcase,
    value: "6+",
    label: "Services Offered"
  }, {
    icon: Award,
    value: "3+",
    label: "Years Experience"
  }];

  // About Page Schema
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About DrewVerse Design",
    "description": "DrewVerse Design is a creative digital agency based in Kampala, Uganda. Since 2023, we've been dedicated to delivering high-quality, affordable digital solutions.",
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://drewversedesign.online/#organization"
    }
  };

  return (
    <section id="about" ref={sectionRef} className="bg-gradient-to-b from-black to-metal-900 py-0 md:py-0">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
          <div className="order-2 md:order-1">
            <div className="relative mx-auto md:mx-0" style={{
              maxWidth: isMobile ? "300px" : "auto"
            }}>
              <div className="aspect-ratio-4/3 overflow-hidden rounded-lg reveal fade-right">
                <img 
                  alt="Creative workspace with digital design tools at DrewVerse Design studio" 
                  className="w-full h-full object-cover"
                  src="https://github.com/drewversedesign/images-for-drewverse-website/blob/main/%20sample%20website%20designs%20by%20Drewverse%20Design.%20drewversedesign.online%20%20(6).png?raw=true"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
              {!isMobile && (
                <div className="absolute -bottom-8 -right-8 w-36 md:w-48 h-36 md:h-48 rounded-lg overflow-hidden reveal fade-left hidden md:block" style={{
                  animationDelay: "200ms"
                }}>
                  <img 
                    alt="DrewVerse Design logo" 
                    src="https://github.com/drewversedesign/images-for-drewverse-website/blob/main/photo_5794068069973345766_x-removebg-preview.png?raw=true" 
                    className="w-full h-full object-scale-down transform translate-y-8"
                    loading="lazy"
                    width="192"
                    height="192"
                  />
                </div>
              )}
              <div className="absolute -top-8 -left-8 glass p-4 md:p-6 rounded-lg reveal fade-bottom" style={{
                animationDelay: "400ms"
              }}>
                <div className="flex flex-col">
                  <div className="text-white/80 font-mono text-xs md:text-sm uppercase tracking-wider">Since</div>
                  <div className="text-white font-display text-3xl md:text-4xl font-bold">2023</div>
                  <div className="text-white/60 font-mono text-xs">Established in Kampala</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="space-y-4 md:space-y-6 text-left">
              <div className="inline-block px-3 md:px-4 py-1 md:py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full reveal fade-bottom">
                <span className="text-white/80 font-mono text-xs uppercase tracking-wider">About DrewVerse</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-white reveal fade-bottom" style={{
                animationDelay: "100ms"
              }}>
                EMPOWERING DIGITAL <span className="text-balance">GROWTH</span>
              </h2>
              
              <p className="text-white/70 font-mono text-sm leading-relaxed max-w-xl reveal fade-bottom" style={{
                animationDelay: "200ms"
              }}>
                DrewVerse Design is a creative digital agency based in Kampala, Uganda. Since 2023, we've been dedicated to delivering high-quality, affordable digital solutions for startups and small businesses looking to enhance their online presence.
              </p>
              
              <p className="text-white/70 font-mono text-sm leading-relaxed max-w-xl reveal fade-bottom" style={{
                animationDelay: "300ms"
              }}>
                Our approach combines modern design principles with cutting-edge technology to create responsive, user-friendly digital experiences that drive growth and engagement for our clients.
              </p>
              
              <div className="pt-4 md:pt-6 reveal fade-bottom" style={{
                animationDelay: "400ms"
              }}>
                <a href="#services" className="px-6 md:px-8 py-2 md:py-3 bg-white text-black font-mono text-sm uppercase tracking-wider rounded-md hover:bg-white/90 transition-all inline-block">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 relative px-0 md:px-12">
          <Carousel opts={{
            align: "start",
            loop: true
          }} setApi={setApi} className="w-full max-w-full md:max-w-xl mx-auto reveal fade-bottom">
            <CarouselContent>
              {stats.map((stat, index) => <CarouselItem key={stat.label} className="basis-1/2 md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="glass-card p-4 md:p-6 h-full" style={{
                    animationDelay: `${index * 100}ms`
                  }}>
                    <div className="bg-white/10 rounded-full p-2 md:p-3 inline-block mb-2 md:mb-4">
                      <stat.icon className="h-4 w-4 md:h-6 md:w-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="text-white font-display text-2xl md:text-4xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-white/60 font-mono text-xs uppercase tracking-wide mt-1">
                      {stat.label}
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 bg-white/10 hover:bg-white/20 border-white/20 hidden md:flex" />
            <CarouselNext className="absolute -right-4 bg-white/10 hover:bg-white/20 border-white/20 hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
