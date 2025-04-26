import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  const contactInfo = [{
    icon: Mail,
    title: "Email",
    details: "drewversedesign@gmail.com",
    link: "mailto:drewversedesign@gmail.com"
  }, {
    icon: Phone,
    title: "Phone",
    details: "+256 772 653 789",
    link: "tel:+256772653789"
  }, {
    icon: MapPin,
    title: "Office",
    details: "Kampala, Uganda",
    link: "https://maps.google.com"
  }];
  return <section id="contact" className="bg-black py-0">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <span className="text-white/80 font-mono text-xs uppercase tracking-wider">
                Get In Touch
              </span>
            </div>

            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              LET'S BUILD SOMETHING EXTRAORDINARY
            </h2>

            <p className="text-white/70 font-mono text-sm leading-relaxed mb-8">
              Whether you're looking for a new website, mobile app, or complete digital 
              branding solution, we're ready to help bring your vision to life. Fill out 
              the form to start the conversation.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => <a key={index} href={item.link} className="flex items-start space-x-4 group" target="_blank" rel="noopener noreferrer">
                  <div className="bg-white/10 rounded-full p-3 group-hover:bg-white/20 transition-all">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white/80 font-mono text-xs uppercase tracking-wider mb-1">
                      {item.title}
                    </div>
                    <div className="text-white font-display font-bold group-hover:text-white/80 transition-colors">
                      {item.details}
                    </div>
                  </div>
                </a>)}
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              REQUEST A CONSULTATION
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-white/80 font-mono text-xs uppercase tracking-wider mb-2 block">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="text-white/80 font-mono text-xs uppercase tracking-wider mb-2 block">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all" placeholder="Your email" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="text-white/80 font-mono text-xs uppercase tracking-wider mb-2 block">
                    Phone
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all" placeholder="Your phone (optional)" />
                </div>
                <div>
                  <label htmlFor="service" className="text-white/80 font-mono text-xs uppercase tracking-wider mb-2 block">
                    Service
                  </label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all appearance-none">
                    <option value="" disabled className="bg-metal-800">Select a service</option>
                    <option value="Web Development" className="bg-metal-800">Web Development</option>
                    <option value="Mobile App Development" className="bg-metal-800">Mobile App Development</option>
                    <option value="UI/UX Design" className="bg-metal-800">UI/UX Design</option>
                    <option value="Brand Identity" className="bg-metal-800">Brand Identity</option>
                    <option value="SEO Services" className="bg-metal-800">SEO Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-white/80 font-mono text-xs uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none" placeholder="Tell us about your project"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-orange-500 text-white font-mono text-sm uppercase tracking-wider rounded-lg py-4 hover:bg-orange-600 transition-all flex items-center justify-center disabled:opacity-70">
                {isSubmitting ? <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span> : <span className="inline-flex items-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;