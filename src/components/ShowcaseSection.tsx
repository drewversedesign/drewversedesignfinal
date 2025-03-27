
import { useEffect } from "react";
import { CardHoverEffect } from "./ui/card-hover-effect";
import { ArrowRight } from "lucide-react";

const ShowcaseSection = () => {
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

  const showcaseItems = [
    {
      title: "Custom Exhaust Systems",
      description:
        "Precision-engineered exhaust systems that enhance performance while delivering a distinctive sound profile.",
      image:
        "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
    {
      title: "Bespoke Handlebars",
      description:
        "Ergonomically designed handlebars tailored to your riding style and aesthetic preferences.",
      image:
        "https://images.unsplash.com/photo-1574280363402-2f672940b871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      title: "Performance Fuel Systems",
      description:
        "Advanced fuel delivery systems for optimized power, efficiency, and throttle response.",
      image:
        "https://images.unsplash.com/photo-1508816216118-2a24dd5d464f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      title: "Custom Seating",
      description:
        "Luxurious, ergonomic seating solutions that balance comfort with striking visual appeal.",
      image:
        "https://images.unsplash.com/photo-1579544757872-ce8f6af30e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
    },
    {
      title: "Suspension Upgrades",
      description:
        "Tailored suspension systems for superior handling, stability, and ride comfort.",
      image:
        "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      title: "Precision CNC Components",
      description:
        "High-tolerance machined parts for exceptional durability and performance.",
      image:
        "https://images.unsplash.com/photo-1636789198815-98ac35f83145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
  ];

  return (
    <section id="showcase" className="py-24 bg-gradient-to-b from-metal-900 to-black">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full reveal fade-bottom">
            <span className="text-white/80 font-mono text-xs uppercase tracking-wider">
              Showcase
            </span>
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white reveal fade-bottom" style={{ animationDelay: "100ms" }}>
            CUSTOM PART EXCELLENCE
          </h2>

          <p className="mt-6 text-white/70 font-mono text-sm leading-relaxed reveal fade-bottom" style={{ animationDelay: "200ms" }}>
            Browse a selection of Sebastian's custom motorcycle parts, each meticulously 
            crafted to deliver exceptional performance and distinctive style.
          </p>
        </div>

        <div className="reveal fade-bottom" style={{ animationDelay: "300ms" }}>
          <CardHoverEffect items={showcaseItems} />
        </div>

        <div className="mt-16 text-center reveal fade-bottom" style={{ animationDelay: "400ms" }}>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-white text-black font-mono text-sm uppercase tracking-wider rounded-md hover:bg-white/90 transition-all group"
          >
            Request Custom Part
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
