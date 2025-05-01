
import { useEffect } from "react";
import { Monitor, Smartphone, Pencil, Briefcase, Layers, Search, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ServicesSection = () => {
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
  
  const services = [{
    icon: Monitor,
    title: "Web Design & Development",
    description: "Custom, responsive websites optimized for performance and user experience, tailored for your business needs.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Design & Development",
      "serviceType": "Web Design & Development",
      "description": "Custom, responsive websites optimized for performance and user experience, tailored for your business needs.",
      "provider": {
        "@id": "https://drewversedesign.online/#organization"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "0.3476",
          "longitude": "32.5825"
        },
        "geoRadius": "10000"
      }
    }
  }, {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform applications using technologies like React Native and Flutter.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mobile App Development",
      "serviceType": "Mobile App Development",
      "description": "Native and cross-platform applications using technologies like React Native and Flutter.",
      "provider": {
        "@id": "https://drewversedesign.online/#organization"
      }
    }
  }, {
    icon: Pencil,
    title: "UI/UX Design",
    description: "User-centric designs that enhance engagement and usability, creating seamless digital experiences.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "UI/UX Design",
      "serviceType": "UI/UX Design",
      "description": "User-centric designs that enhance engagement and usability, creating seamless digital experiences.",
      "provider": {
        "@id": "https://drewversedesign.online/#organization"
      }
    }
  }, {
    icon: Briefcase,
    title: "Brand Identity & Strategy",
    description: "Comprehensive branding services, including logo design and market positioning strategies.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Brand Identity & Strategy",
      "serviceType": "Brand Identity & Strategy",
      "description": "Comprehensive branding services, including logo design and market positioning strategies.",
      "provider": {
        "@id": "https://drewversedesign.online/#organization"
      }
    }
  }, {
    icon: Layers,
    title: "Design & Animation",
    description: "Custom animations and visual designs to elevate your brand storytelling and engagement.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Design & Animation",
      "serviceType": "Design & Animation",
      "description": "Custom animations and visual designs to elevate your brand storytelling and engagement.",
      "provider": {
        "@id": "https://drewversedesign.online/#organization"
      }
    }
  }, {
    icon: Search,
    title: "SEO Optimization",
    description: "Strategic optimization to improve search engine rankings and enhance your online visibility.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "SEO Optimization",
      "serviceType": "SEO Optimization",
      "description": "Strategic optimization to improve search engine rankings and enhance your online visibility.",
      "provider": {
        "@id": "https://drewversedesign.online/#organization"
      }
    }
  }];
  
  const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://drewversedesign.online/services",
    "name": "Digital Services Offered by DrewVerse Design",
    "description": "From web design to mobile app development, DrewVerse Design provides comprehensive digital services to bring your vision to life.",
    "publisher": {
      "@id": "https://drewversedesign.online/#organization"
    }
  };

  return (
    <section id="services" className="bg-metal-900 py-0 md:py-0">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(servicesPageSchema)}
        </script>
        {services.map((service, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(service.schema)}
          </script>
        ))}
      </Helmet>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full reveal fade-bottom">
            <span className="text-white/80 font-mono text-xs uppercase tracking-wider">
              Our Services
            </span>
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white reveal fade-bottom" style={{
          animationDelay: "100ms"
        }}>
            DIGITAL SOLUTIONS
          </h2>

          <p className="mt-6 text-white/70 font-mono text-sm leading-relaxed reveal fade-bottom" style={{
          animationDelay: "200ms"
        }}>
            From concept to creation, DrewVerse Design provides comprehensive digital services
            to bring your vision to life with creativity and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <div key={service.title} className="glass-card p-8 group hover:bg-white/15 hover:-translate-y-1 reveal fade-bottom" style={{
              animationDelay: `${index * 100}ms`
            }}>
              <div className="bg-white/10 rounded-full p-3 inline-block mb-6 group-hover:bg-white/20 transition-all">
                <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white/70 font-mono text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-orange-500 font-mono text-xs uppercase tracking-wider group-hover:text-white transition-colors">
                Learn More{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 glass p-8 rounded-2xl reveal fade-bottom" style={{
        animationDelay: "400ms"
      }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                OUR DESIGN PROCESS
              </h3>
              <p className="text-white/70 font-mono text-sm leading-relaxed">
                Our approach is collaborative and iterative, ensuring your digital solution 
                perfectly aligns with your business goals and user needs.
              </p>
              <a href="#contact" className="mt-4 px-8 py-3 bg-orange-500 text-white font-mono text-sm uppercase tracking-wider rounded-md hover:bg-orange-600 transition-all inline-flex items-center">
                Start Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full p-3 mr-4 mt-1">
                  <span className="font-mono text-white font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-white font-display font-bold">Discovery</h4>
                  <p className="text-white/70 font-mono text-sm">Understanding your goals and requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full p-3 mr-4 mt-1">
                  <span className="font-mono text-white font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-white font-display font-bold">Design</h4>
                  <p className="text-white/70 font-mono text-sm">Creating the perfect user experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full p-3 mr-4 mt-1">
                  <span className="font-mono text-white font-bold">03</span>
                </div>
                <div>
                  <h4 className="text-white font-display font-bold">Development</h4>
                  <p className="text-white/70 font-mono text-sm">Building with modern technologies</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full p-3 mr-4 mt-1">
                  <span className="font-mono text-white font-bold">04</span>
                </div>
                <div>
                  <h4 className="text-white font-display font-bold">Deployment</h4>
                  <p className="text-white/70 font-mono text-sm">Launch and continuous support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
