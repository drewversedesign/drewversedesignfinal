
import { useEffect } from "react";
import { META_TAGS } from "@/utils/meta-tags";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

const About = () => {
  useEffect(() => {
    document.title = META_TAGS.about.title;
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            {META_TAGS.about.h1}
          </h1>
          <AboutSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
