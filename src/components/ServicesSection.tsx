import { useEffect, useState } from "react";
import { Monitor, Smartphone, Pencil, Briefcase, Layers, Search, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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

  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
    details: string;
  } | null>(null);

  const services = [{
    icon: Monitor,
    title: "Web Design & Development",
    description: "Custom, responsive websites optimized for performance and user experience, tailored for your business needs.",
    details: "Our web design and development service goes beyond aesthetics. We create fully responsive, SEO-optimized websites that not only look stunning but also drive user engagement. Using the latest technologies like React and Tailwind CSS, we build custom solutions that scale with your business, ensuring fast loading times, intuitive navigation, and a seamless user experience across all devices."
  }, {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform applications using technologies like React Native and Flutter.",
    details: "Transform your business idea into a powerful mobile application. Whether you need a native iOS/Android app or a cross-platform solution, our team leverages cutting-edge technologies like React Native and Flutter to create high-performance, user-friendly mobile experiences that connect you with your audience."
  }, {
    icon: Pencil,
    title: "UI/UX Design",
    description: "User-centric designs that enhance engagement and usability, creating seamless digital experiences.",
    details: "Great design is about more than just looks—it's about creating intuitive, delightful user experiences. Our UI/UX design process involves deep user research, wireframing, prototyping, and iterative testing to ensure your digital product is not just beautiful, but also highly functional and user-friendly."
  }, {
    icon: Briefcase,
    title: "Brand Identity & Strategy",
    description: "Comprehensive branding services, including logo design and market positioning strategies.",
    details: "Your brand is your story. We help you craft a compelling narrative through strategic brand design, logo creation, color psychology, and comprehensive brand guidelines. Our approach ensures your visual identity resonates with your target audience and stands out in a competitive market."
  }, {
    icon: Layers,
    title: "Design & Animation",
    description: "Custom animations and visual designs to elevate your brand storytelling and engagement.",
    details: "Static designs are a thing of the past. We create dynamic, engaging visual experiences through custom animations, motion graphics, and interactive design elements. Our team uses the latest animation technologies to bring your brand's story to life, capturing user attention and enhancing digital storytelling."
  }, {
    icon: Search,
    title: "SEO Optimization",
    description: "Strategic optimization to improve search engine rankings and enhance your online visibility.",
    details: "Visibility is key in the digital landscape. Our SEO optimization service goes beyond keywords. We provide comprehensive strategies including technical SEO, content optimization, link building, and performance analysis to improve your website's search engine rankings and drive organic traffic."
  }];

  const handleLearnMore = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  return (
    <>
      <section id="services" className="bg-metal-900 py-0 md:py-0">
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
              <div 
                key={service.title} 
                className="glass-card p-8 group hover:bg-white/15 hover:-translate-y-1 reveal fade-bottom" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/10 rounded-full p-3 inline-block mb-6 group-hover:bg-white/20 transition-all">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/70 font-mono text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <a 
                  onClick={() => handleLearnMore(service)}
                  href="#" 
                  className="inline-flex items-center text-orange-500 font-mono text-xs uppercase tracking-wider group-hover:text-white transition-colors"
                >
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

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl bg-black text-white border-white/10">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-display text-white">{selectedService.title}</DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-white/70">
                <div className="space-y-4">
                  <p className="text-base">{selectedService.description}</p>
                  <p className="text-base">{selectedService.details}</p>
                </div>
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServicesSection;
