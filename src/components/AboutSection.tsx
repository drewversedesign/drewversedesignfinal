
import { useEffect, useRef } from "react";
import { Wrench, Settings, Award, Users } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const stats = [
    { icon: Wrench, value: "15+", label: "Years Experience" },
    { icon: Settings, value: "200+", label: "Custom Parts" },
    { icon: Users, value: "500+", label: "Satisfied Clients" },
    { icon: Award, value: "12", label: "Industry Awards" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-metal-900" ref={sectionRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-ratio-4/3 overflow-hidden rounded-lg reveal fade-right">
                <img
                  src="https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Sebastian in his workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-lg overflow-hidden reveal fade-left" style={{ animationDelay: "200ms" }}>
                <img
                  src="https://images.unsplash.com/photo-1547549082-6bc09f2049ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Close-up of custom motorcycle part"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-8 -left-8 glass p-6 rounded-lg reveal fade-bottom" style={{ animationDelay: "400ms" }}>
                <div className="flex flex-col">
                  <div className="text-white/80 font-mono text-sm uppercase tracking-wider">Experience</div>
                  <div className="text-white font-display text-4xl font-bold">15+</div>
                  <div className="text-white/60 font-mono text-xs">Years in custom motorcycles</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full reveal fade-bottom">
                <span className="text-white/80 font-mono text-xs uppercase tracking-wider">About Sebastian</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white reveal fade-bottom" style={{ animationDelay: "100ms" }}>
                CRAFTING MOTORCYCLE <span className="text-balance">EXCELLENCE SINCE 2008</span>
              </h2>
              
              <p className="text-white/70 font-mono text-sm leading-relaxed max-w-xl reveal fade-bottom" style={{ animationDelay: "200ms" }}>
                With over 15 years of experience in custom motorcycle design and fabrication, Sebastian has established himself as a premier consultant in the industry. What began as a passion project in a small garage has evolved into a renowned consultancy trusted by riders and builders worldwide.
              </p>
              
              <p className="text-white/70 font-mono text-sm leading-relaxed max-w-xl reveal fade-bottom" style={{ animationDelay: "300ms" }}>
                Sebastian's approach combines mechanical precision with artistic vision, creating parts that not only perform exceptionally but also enhance the aesthetic appeal of each motorcycle. Every consultation and custom piece reflects his commitment to excellence and innovation.
              </p>
              
              <div className="pt-6 reveal fade-bottom" style={{ animationDelay: "400ms" }}>
                <a 
                  href="#services" 
                  className="px-8 py-3 bg-white text-black font-mono text-sm uppercase tracking-wider rounded-md hover:bg-white/90 transition-all inline-block"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="glass-card p-6 reveal fade-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/10 rounded-full p-3 inline-block mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-white font-display text-4xl font-bold">{stat.value}</div>
              <div className="text-white/60 font-mono text-xs uppercase tracking-wide mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
