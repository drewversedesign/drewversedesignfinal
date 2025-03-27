
import { useEffect } from "react";
import { Wrench, Gauge, HardDrive, Users, ArrowRight } from "lucide-react";

const ServicesSection = () => {
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

  const services = [
    {
      icon: Wrench,
      title: "Custom Part Design",
      description:
        "Bespoke design and fabrication of premium motorcycle parts tailored to your specific requirements and aesthetic vision.",
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description:
        "Expert analysis and enhancement of your motorcycle's performance characteristics for improved power, handling, and efficiency.",
    },
    {
      icon: HardDrive,
      title: "Technical Consultations",
      description:
        "In-depth technical consultations to solve complex mechanical challenges and guide your custom build projects.",
    },
    {
      icon: Users,
      title: "Workshop Collaborations",
      description:
        "Collaborate with your existing team to elevate builds with Sebastian's expertise in design, materials, and fabrication techniques.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-metal-900">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full reveal fade-bottom">
            <span className="text-white/80 font-mono text-xs uppercase tracking-wider">
              Services
            </span>
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white reveal fade-bottom" style={{ animationDelay: "100ms" }}>
            EXPERT MOTORCYCLE CONSULTING
          </h2>

          <p className="mt-6 text-white/70 font-mono text-sm leading-relaxed reveal fade-bottom" style={{ animationDelay: "200ms" }}>
            From concept to creation, Sebastian provides comprehensive consulting services
            to bring your custom motorcycle vision to life with precision and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
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
                href="#contact"
                className="inline-flex items-center text-white/80 font-mono text-xs uppercase tracking-wider group-hover:text-white transition-colors"
              >
                Learn More{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 glass p-10 rounded-2xl reveal fade-bottom" style={{ animationDelay: "400ms" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                CUSTOM CONSULTATION PROCESS
              </h3>
              <p className="text-white/70 font-mono text-sm leading-relaxed">
                Sebastian's consultation process is tailored to your specific needs and goals. 
                Whether you're looking to enhance a single component or undertake a comprehensive 
                build, the approach is methodical and collaborative, ensuring exceptional results.
              </p>
              <a
                href="#contact"
                className="mt-6 px-8 py-3 bg-white text-black font-mono text-sm uppercase tracking-wider rounded-md hover:bg-white/90 transition-all inline-flex items-center"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full p-3 mr-4 mt-1">
                  <span className="font-mono text-white font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-white font-display font-bold">Initial Assessment</h4>
                  <p className="text-white/70 font-mono text-sm">Evaluation of current setup and discussion of goals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full p-3 mr-4 mt-1">
                  <span className="font-mono text-white font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-white font-display font-bold">Design & Planning</h4>
                  <p className="text-white/70 font-mono text-sm">Detailed proposals with technical specifications</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full p-3 mr-4 mt-1">
                  <span className="font-mono text-white font-bold">03</span>
                </div>
                <div>
                  <h4 className="text-white font-display font-bold">Implementation</h4>
                  <p className="text-white/70 font-mono text-sm">Precision fabrication and expert installation</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full p-3 mr-4 mt-1">
                  <span className="font-mono text-white font-bold">04</span>
                </div>
                <div>
                  <h4 className="text-white font-display font-bold">Fine-Tuning</h4>
                  <p className="text-white/70 font-mono text-sm">Optimization and adjustments for peak performance</p>
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
