import { useEffect } from "react";
import { CardHoverEffect } from "./ui/card-hover-effect";
import { ArrowRight } from "lucide-react";
const ShowcaseSection = () => {
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
  const showcaseItems = [{
    title: "InkMaster Tattoo Studio",
    description: "A dynamic website featuring an interactive portfolio and seamless booking functionality.",
    image: "https://github.com/drewversedesign/images-for-drewverse-website/blob/main/%20sample%20website%20designs%20by%20Drewverse%20Design.%20drewversedesign.online%20%20(7).png?raw=true"
  }, {
    title: "Alex Johnson Design Portfolio",
    description: "An interactive personal portfolio showcasing creative work with advanced animations.",
    image: "https://github.com/drewversedesign/images-for-drewverse-website/blob/main/%20sample%20website%20designs%20by%20Drewverse%20Design.%20drewversedesign.online%20%20(9).png?raw=true"
  }, {
    title: "ModernSpace Furniture Store",
    description: "A minimalist e-commerce platform with unique product visualization features.",
    image: "https://github.com/drewversedesign/images-for-drewverse-website/blob/main/%20sample%20website%20designs%20by%20Drewverse%20Design.%20drewversedesign.online%20%20(10).png?raw=true"
  }, {
    title: "Global Hope Foundation",
    description: "A non-profit website featuring donation campaigns and community programs.",
    image: "https://github.com/drewversedesign/images-for-drewverse-website/blob/main/%20sample%20website%20designs%20by%20Drewverse%20Design.%20drewversedesign.online%20%20(8).png?raw=true"
  }];
  return <section id="showcase" className="md:py-12 bg-gradient-to-b from-metal-900 to-black py-0">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full reveal fade-bottom">
            <span className="text-white/80 font-mono text-xs uppercase tracking-wider">
              Our Work
            </span>
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white reveal fade-bottom" style={{
          animationDelay: "100ms"
        }}>
            PORTFOLIO
          </h2>

          <p className="mt-6 text-white/70 font-mono text-sm leading-relaxed reveal fade-bottom" style={{
          animationDelay: "200ms"
        }}>
            Explore our portfolio of successful digital solutions that have helped businesses 
            achieve their goals and enhance their online presence.
          </p>
        </div>

        <div className="reveal fade-bottom" style={{
        animationDelay: "300ms"
      }}>
          <CardHoverEffect items={showcaseItems} />
        </div>

        <div className="mt-10 text-center reveal fade-bottom" style={{
        animationDelay: "400ms"
      }}>
          <a href="#contact" className="inline-flex items-center px-8 py-3 bg-orange-500 text-white font-mono text-sm uppercase tracking-wider rounded-md hover:bg-orange-600 transition-all group">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>;
};
export default ShowcaseSection;