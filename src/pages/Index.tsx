
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { updateMetaTags } from "@/utils/meta-tags";
import { 
  organizationSchema,
  websiteSchema,
  servicesSchema,
  faqSchema
} from "@/utils/structured-data";

const Index = () => {
  useEffect(() => {
    // Update meta tags for home page
    updateMetaTags('home');
    
    // Set viewport meta tag to ensure proper mobile scaling
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
    
    // Intersection Observer for scroll animations
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

    // Clean up
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Combine all structured data for the homepage
  const structuredData = [
    organizationSchema,
    websiteSchema,
    ...servicesSchema,
    faqSchema
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <SEO 
        title="Creative Website Design Agency | Build Your Online Presence"
        description="DrewVerse Design builds stunning websites, tech blogs, e-commerce stores, and creative portfolios. Transform your ideas into a digital success story with our expert web design services."
        canonicalUrl="https://drewversedesign.online/"
        ogTitle="Transform Your Digital Presence with DrewVerse Design"
        ogDescription="Professional web design, mobile app development, and branding solutions in Uganda and East Africa. Create stunning, responsive websites with DrewVerse Design."
        structuredData={structuredData}
      />
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <ShowcaseSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
