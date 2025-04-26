
interface MetaTag {
  title: string;
  description: string;
  keywords?: string;
}

export const META_TAGS: Record<string, MetaTag> = {
  home: {
    title: "Creative Website Design Agency | DrewVerse Design | Build Your Online Presence",
    description: "DrewVerse Design builds stunning websites, tech blogs, e-commerce stores, and portfolios. Transform your ideas into a digital success story with our expert web design services.",
    keywords: "creative web design, website development, web design agency, professional websites, DrewVerse Design, digital agency, website builders"
  },
  about: {
    title: "About DrewVerse Design | Expert Web Design & Development Services",
    description: "Learn about DrewVerse Design — a creative agency passionate about building unique, professional websites. Discover our mission, values, and how we bring your vision to life.",
    keywords: "web design services, about us, web development company, professional web designers, DrewVerse Design team, creative agency"
  },
  portfolio: {
    title: "Web Design Portfolio | DrewVerse Design | Stunning Website Projects",
    description: "Browse our portfolio of foundation websites, tech blog platforms, corporate sites, tattoo studio websites, portfolios, and e-commerce solutions crafted with creativity and precision.",
    keywords: "web design portfolio, website projects, design showcase, UI/UX portfolio, DrewVerse Design work"
  },
  services: {
    title: "Web Design Services | Website Development | DrewVerse Design",
    description: "Explore our full range of services: website design, web development, branding, e-commerce solutions, portfolio sites, SEO, and more. DrewVerse Design creates websites that drive results.",
    keywords: "web design services, website development, branding, e-commerce solutions, SEO services, digital marketing"
  },
  blog: {
    title: "Web Design Insights & Tips | DrewVerse Design Blog",
    description: "Stay updated with the latest trends, tips, and strategies in web design and digital marketing. Read the DrewVerse Design Blog to grow your online presence.",
    keywords: "web design blog, digital marketing tips, website development insights, design trends, DrewVerse Design articles"
  },
  contact: {
    title: "Contact DrewVerse Design | Start Your Website Project Today",
    description: "Get in touch with DrewVerse Design! We're ready to help you design, develop, and launch a powerful online presence. Let's create something extraordinary together.",
    keywords: "contact us, web design quote, start project, DrewVerse Design contact, website consultation"
  },
  startProject: {
    title: "Start Your Project | Work with DrewVerse Design | Get a Free Quote",
    description: "Ready to bring your vision to life? Start your website project with DrewVerse Design today. Request a free quote and let's build something exceptional.",
    keywords: "start project, web design quote, website development, free consultation, DrewVerse Design services"
  }
};

export const updateMetaTags = (page: keyof typeof META_TAGS) => {
  const metaData = META_TAGS[page];
  if (!metaData) return;

  document.title = metaData.title;

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', metaData.description);

  // Update or create meta keywords
  if (metaData.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', metaData.keywords);
  }
};
