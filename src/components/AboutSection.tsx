import { useEffect, useRef } from "react";
import { Briefcase, Users, Award, Globe } from "lucide-react";
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    value: "1+",
    label: "Years Experience"
  }];
  return <section id="about" className="py-24 bg-gradient-to-b from-black to-metal-900" ref={sectionRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-ratio-4/3 overflow-hidden rounded-lg reveal fade-right">
                <img alt="Creative workspace with digital design tools" className="w-full h-full object-cover" src="https://github.com/drewversedesign/images-for-drewverse-website/blob/main/%20sample%20website%20designs%20by%20Drewverse%20Design.%20drewversedesign.online%20%20(6).png?raw=true" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-lg overflow-hidden reveal fade-left" style={{
              animationDelay: "200ms"
            }}>
                <img alt="Web development process" className="w-full h-full object-cover" src="https://github.com/drewversedesign/images-for-drewverse-website/blob/main/photo_5794068069973345766_x-removebg-preview.png?raw=true" />
              </div>
              <div className="absolute -top-8 -left-8 glass p-6 rounded-lg reveal fade-bottom" style={{
              animationDelay: "400ms"
            }}>
                <div className="flex flex-col">
                  <div className="text-white/80 font-mono text-sm uppercase tracking-wider">Since</div>
                  <div className="text-white font-display text-4xl font-bold">2023</div>
                  <div className="text-white/60 font-mono text-xs">Established in Kampala</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full reveal fade-bottom">
                <span className="text-white/80 font-mono text-xs uppercase tracking-wider">About DrewVerse</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white reveal fade-bottom" style={{
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
              
              <div className="pt-6 reveal fade-bottom" style={{
              animationDelay: "400ms"
            }}>
                <a href="#services" className="px-8 py-3 bg-white text-black font-mono text-sm uppercase tracking-wider rounded-md hover:bg-white/90 transition-all inline-block">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, index) => <div key={stat.label} className="glass-card p-6 reveal fade-bottom" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="bg-white/10 rounded-full p-3 inline-block mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-white font-display text-4xl font-bold">{stat.value}</div>
              <div className="text-white/60 font-mono text-xs uppercase tracking-wide mt-1">{stat.label}</div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default AboutSection;