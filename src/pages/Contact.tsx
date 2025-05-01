import { useEffect } from "react";
import { META_TAGS } from "@/utils/meta-tags";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
const Contact = () => {
  useEffect(() => {
    document.title = META_TAGS.contact.title;
  }, []);
  return <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 my-[50px]">
            {META_TAGS.contact.h1}
          </h1>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>;
};
export default Contact;