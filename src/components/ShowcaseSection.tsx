import { useEffect, useState } from "react";
import { CardHoverEffect } from "./ui/card-hover-effect";
import { ArrowRight } from "lucide-react";
import PortfolioModal from "./PortfolioModal";

const showcaseItems = [{
  title: "Tattoo Studio Website",
  description: "A dynamic website featuring an interactive portfolio and seamless booking functionality.",
  fullDescription: "A comprehensive website solution for a modern tattoo studio, featuring an interactive portfolio gallery, online booking system, artist profiles, and integrated payment processing. The design emphasizes the studio's artistic style while maintaining excellent usability.",
  metaTitle: "Tattoo Studio Website Design | Creative Portfolios | DrewVerse Design",
  metaDescription: "View our dynamic tattoo studio website featuring interactive portfolios and seamless booking. DrewVerse Design delivers edgy, stylish online experiences.",
  technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
  image: "https://github.com/drewversedesign/images-for-drewverse-website/blob/main/%20sample%20website%20designs%20by%20Drewverse%20Design.%20drewversedesign.online%20%20(7).png?raw=true",
  link: "#"
}, {
  title: "Portfolio Website",
  description: "An interactive personal portfolio showcasing creative work with advanced animations.",
  fullDescription: "A highly interactive portfolio website utilizing cutting-edge animation techniques and smooth transitions. The site features a dynamic project showcase, integrated blog system, and contact forms with email integration.",
  metaTitle: "Portfolio Website Design | Personal Branding Websites | DrewVerse Design",
  metaDescription: "Explore our personal portfolio website, showcasing creative work with advanced animations. Built by DrewVerse Design for artists, designers, and creatives.",
  technologies: ["React", "Framer Motion", "Three.js", "Tailwind CSS", "EmailJS"],
  image: "https://github.com/drewversedesign/images-for-drewverse-website/blob/main/%20sample%20website%20designs%20by%20Drewverse%20Design.%20drewversedesign.online%20%20(9).png?raw=true",
  link: "#"
}, {
  title: "Furniture Store",
  description: "A minimalist e-commerce platform with unique product visualization features.",
  fullDescription: "A modern e-commerce platform for a furniture retailer, featuring 3D product visualization, augmented reality preview, and a streamlined checkout process. The site includes inventory management and real-time shipping calculations.",
  metaTitle: "Furniture Store Website Design | E-commerce Solutions | DrewVerse Design",
  metaDescription: "See our minimalist furniture e-commerce platform with innovative product visualization features. Designed by DrewVerse Design to maximize online sales.",
  technologies: ["React", "Next.js", "Shopify", "Three.js", "Stripe"],
  image: "https://github.com/drewversedesign/images-for-drewverse-website/blob/main/%20sample%20website%20designs%20by%20Drewverse%20Design.%20drewversedesign.online%20%20(10).png?raw=true",
  link: "#"
}, {
  title: "Foundation Website",
  description: "A non-profit website featuring donation campaigns and community programs.",
  fullDescription: "A comprehensive website for a non-profit organization, showcasing their mission, ongoing projects, and donation campaigns. Features include event management, volunteer registration, and secure donation processing.",
  metaTitle: "Non-Profit Website Design | Foundation Website Portfolio | DrewVerse Design",
  metaDescription: "Explore our non-profit foundation website featuring donation campaigns and community programs. Created by DrewVerse Design to inspire action and support.",
  technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "SendGrid"],
  image: "https://github.com/drewversedesign/images-for-drewverse-website/blob/main/%20sample%20website%20designs%20by%20Drewverse%20Design.%20drewversedesign.online%20%20(8).png?raw=true",
  link: "#"
}, {
  title: "Tech Blog Platform",
  description: "A modern blog platform featuring dynamic content and responsive design.",
  fullDescription: "A feature-rich blogging platform with advanced content management, SEO optimization, and social media integration. The platform includes a custom markdown editor, tag system, and automated newsletter distribution.",
  metaTitle: "Tech Blog Platform Design | Modern Web Solutions | DrewVerse Design",
  metaDescription: "Discover a dynamic, responsive tech blog platform designed by DrewVerse Design, perfect for technology updates, product reviews, and dynamic content management.",
  technologies: ["React", "GraphQL", "MongoDB", "AWS", "Tailwind CSS"],
  image: "https://github.com/drewversedesign/images-for-drewverse-website/blob/main/photo_5794068069973345986_y.jpg?raw=true",
  link: "#"
}, {
  title: "Corporate Website",
  description: "A professional corporate website with sleek design and intuitive navigation.",
  fullDescription: "A sophisticated corporate website showcasing company services, team profiles, and case studies. Features include a dynamic careers portal, investor relations section, and multi-language support.",
  metaTitle: "Corporate Website Design | Professional Web Solutions | DrewVerse Design",
  metaDescription: "Check out our sleek and intuitive corporate website design at DrewVerse Design. Build credibility and boost your brand image with our professional solutions.",
  technologies: ["React", "TypeScript", "i18next", "Contentful", "Analytics"],
  image: "https://github.com/drewversedesign/images-for-drewverse-website/blob/main/photo_5794068069973345987_y.jpg?raw=true",
  link: "#"
}];

const ShowcaseSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLElement;
    const projectCard = element.closest('[data-project-index]');
    
    if (projectCard instanceof HTMLElement) {
      const index = projectCard.dataset.projectIndex;
      if (index !== undefined) {
        setSelectedProject(showcaseItems[parseInt(index)]);
      }
    }
  };

  return (
    <section id="showcase" className="bg-gradient-to-b from-metal-900 to-black py-0 md:py-0">
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

        <div 
          className="reveal fade-bottom" 
          style={{ animationDelay: "300ms" }}
          onClick={handleCardClick}
        >
          <CardHoverEffect items={showcaseItems.map((item, index) => ({
            ...item,
            onClick: () => setSelectedProject(item)
          }))} />
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

      <PortfolioModal 
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || showcaseItems[0]}
      />
    </section>
  );
};

export default ShowcaseSection;
