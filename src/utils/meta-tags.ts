
export const META_TAGS = {
  home: {
    url: '/',
    title: 'Top Web Design Agency in Uganda | DrewVerse Design',
    description: 'DrewVerse Design is a leading web design agency in Kampala, Uganda, offering professional, affordable websites, e-commerce stores, and tech blogs. Get a free quote today and boost your online presence!',
    h1: 'Creative Web Design Solutions for Ugandan Businesses'
  },
  about: {
    url: '/about',
    title: 'About DrewVerse Design | Digital Agency in Kampala',
    description: 'Learn about DrewVerse Design, a creative digital agency in Kampala, Uganda. Discover our mission, values, and the expert team dedicated to bringing your digital vision to life with passion and innovation.',
    h1: 'About DrewVerse Design: Creativity, Passion, and Innovation'
  },
  portfolio: {
    url: '/portfolio',
    title: 'Web Design Portfolio | Projects in Uganda | DrewVerse Design',
    description: 'Explore the portfolio of DrewVerse Design, showcasing stunning websites for businesses in Uganda. See our work in e-commerce, corporate sites, tech blogs, and personal portfolios, all crafted with precision.',
    h1: 'Our Portfolio: Inspiring Website Projects in Uganda'
  },
  services: {
    url: '/services',
    title: 'Web Design Services in Uganda | SEO & Development | DrewVerse Design',
    description: 'Discover expert web design, SEO, and development services in Kampala, Uganda. We offer affordable solutions for e-commerce, branding, and mobile app development to help your business succeed online.',
    h1: 'Expert Web Design and Development Services in Uganda'
  },
  blog: {
    url: '/blog',
    title: 'Web Design & SEO Tips | DrewVerse Design Blog Uganda',
    description: 'Get the latest web design trends, SEO strategies, and digital marketing tips from the DrewVerse Design blog. Grow your online presence with expert advice tailored for businesses in Uganda.',
    h1: 'Web Design Blog: Insights, Tips, and Trends'
  },
  contact: {
    url: '/contact',
    title: 'Contact Us | Web Design in Kampala | DrewVerse Design',
    description: 'Ready to start your project? Contact DrewVerse Design in Kampala, Uganda, for a free consultation on web design, SEO, or mobile app development. Let\'s build your dream website today!',
    h1: 'Contact DrewVerse Design and Let\'s Build Your Dream Website'
  },
  startProject: {
    url: '/start-project',
    title: 'Start Your Project | Free Quote | Web Design Uganda',
    description: 'Get a free quote for your web design project from DrewVerse Design, the top web design agency in Uganda. Let\'s turn your ideas into a stunning, professional website. Start today!',
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
