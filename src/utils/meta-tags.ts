
export const META_TAGS = {
  home: {
    url: '/',
    title: 'Creative Website Design Agency | DrewVerse Design | Build Your Online Presence',
    description: 'DrewVerse Design (https://drewversedesign.online) builds stunning websites, tech blogs, e-commerce stores, and creative portfolios. Transform your ideas into a digital success story with our expert web design services.',
    h1: 'Creative Web Design Solutions to Build Your Online Success'
  },
  about: {
    url: '/about',
    title: 'About DrewVerse Design | Expert Web Design & Development Services',
    description: 'Learn about DrewVerse Design (https://drewversedesign.online/about) — a creative agency passionate about crafting unique, professional websites. Discover our mission, values, and how we bring your digital vision to life.',
    h1: 'About DrewVerse Design: Creativity, Passion, and Innovation'
  },
  portfolio: {
    url: '/portfolio',
    title: 'Web Design Portfolio | DrewVerse Design | Stunning Website Projects',
    description: 'Browse the DrewVerse Design portfolio (https://drewversedesign.online/portfolio) featuring foundation websites, tech blog platforms, corporate websites, tattoo studios, personal portfolios, and e-commerce stores crafted with creativity and precision.',
    h1: 'Our Portfolio: Creative Website Projects That Inspire'
  },
  services: {
    url: '/services',
    title: 'Web Design Services | Website Development | DrewVerse Design',
    description: 'Explore all the web design and development services at DrewVerse Design (https://drewversedesign.online/services). From website creation to SEO, branding, and e-commerce solutions, we create websites that drive business results.',
    h1: 'Expert Web Design and Development Services'
  },
  blog: {
    url: '/blog',
    title: 'Web Design Insights & Tips | DrewVerse Design Blog',
    description: 'Stay updated with the latest trends, tips, and strategies in web design and digital marketing at the DrewVerse Design Blog (https://drewversedesign.online/blog). Learn how to grow your online presence.',
    h1: 'Web Design Blog: Insights, Tips, and Trends'
  },
  contact: {
    url: '/contact',
    title: 'Contact DrewVerse Design | Start Your Website Project Today',
    description: 'Contact DrewVerse Design (https://drewversedesign.online/contact) and let\'s create a professional website tailored to your goals. We are ready to help you design, develop, and launch your next digital project.',
    h1: 'Contact DrewVerse Design and Let\'s Build Your Dream Website'
  },
  startProject: {
    url: '/start-project',
    title: 'Start Your Project | Work with DrewVerse Design | Get a Free Quote',
    description: 'Start your web design project today with DrewVerse Design (https://drewversedesign.online/start-project). Request a free quote and turn your ideas into a stunning online experience.',
    h1: 'Start Your Project with DrewVerse Design Today'
  }
};

export const updateMetaTags = (page: keyof typeof META_TAGS) => {
  const tags = META_TAGS[page];
  if (!tags) return;

  // Update title
  document.title = tags.title;

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', tags.description);

  // Update Open Graph tags
  let ogTitle = document.querySelector('meta[property="og:title"]');
  let ogDescription = document.querySelector('meta[property="og:description"]');
  let ogUrl = document.querySelector('meta[property="og:url"]');

  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  if (!ogDescription) {
    ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescription);
  }
  if (!ogUrl) {
    ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    document.head.appendChild(ogUrl);
  }

  ogTitle.setAttribute('content', tags.title);
  ogDescription.setAttribute('content', tags.description);
  ogUrl.setAttribute('content', `https://drewversedesign.online${tags.url}`);
};
