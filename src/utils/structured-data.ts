
/**
 * This file contains structured data implementations using JSON-LD
 * for improving SEO and rich content recognition
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://drewversedesign.online/#organization",
  "name": "DrewVerse Design",
  "url": "https://drewversedesign.online",
  "logo": "https://drewversedesign.online/lovable-uploads/9cdb49e9-d93a-4cea-bf17-a6252e912f14.png",
  "description": "DrewVerse Design is a creative digital agency based in Kampala, Uganda specializing in custom web design, mobile apps, and branding solutions for businesses across East Africa and beyond.",
  "telephone": "+256700000000", // Replace with actual phone number
  "email": "info@drewversedesign.online", // Replace with actual email
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kampala",
    "addressLocality": "Kampala",
    "addressRegion": "Uganda",
    "postalCode": "10001",
    "addressCountry": "UG"
  },
  "sameAs": [
    "https://twitter.com/drewversedesign",
    "https://www.instagram.com/drewverse_design/",
    "https://ug.linkedin.com/in/drew-verse-98818a357",
    "https://bsky.app/profile/drewversedesign.bsky.social"
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "0.3476",
    "longitude": "32.5825"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$"
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://drewversedesign.online/#website",
  "url": "https://drewversedesign.online",
  "name": "DrewVerse Design",
  "description": "Leading Web Design & Digital Agency in Uganda",
  "publisher": {
    "@id": "https://drewversedesign.online/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://drewversedesign.online/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const servicesSchema = [
  {
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
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development",
    "serviceType": "Mobile App Development",
    "description": "Native and cross-platform applications using technologies like React Native and Flutter.",
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
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "UI/UX Design",
    "serviceType": "UI/UX Design",
    "description": "User-centric designs that enhance engagement and usability, creating seamless digital experiences.",
    "provider": {
      "@id": "https://drewversedesign.online/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Brand Identity & Strategy",
    "serviceType": "Brand Identity & Strategy",
    "description": "Comprehensive branding services, including logo design and market positioning strategies.",
    "provider": {
      "@id": "https://drewversedesign.online/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Design & Animation",
    "serviceType": "Design & Animation",
    "description": "Custom animations and visual designs to elevate your brand storytelling and engagement.",
    "provider": {
      "@id": "https://drewversedesign.online/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Optimization",
    "serviceType": "SEO Optimization",
    "description": "Strategic optimization to improve search engine rankings and enhance your online visibility.",
    "provider": {
      "@id": "https://drewversedesign.online/#organization"
    }
  }
];

export const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "DrewVerse Design Blog",
  "description": "Web Design Insights & Tips from DrewVerse Design",
  "url": "https://drewversedesign.online/blog",
  "publisher": {
    "@id": "https://drewversedesign.online/#organization"
  }
};

export const getBlogPostSchema = (post: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "dateModified": post.date,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": "DrewVerse Design"
    },
    "publisher": {
      "@id": "https://drewversedesign.online/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://drewversedesign.online/blog/${post.id}`
    }
  };
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does DrewVerse Design offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DrewVerse Design offers comprehensive digital services including Web Design & Development, Mobile App Development, UI/UX Design, Brand Identity & Strategy, Design & Animation, and SEO Optimization."
      }
    },
    {
      "@type": "Question",
      "name": "Where is DrewVerse Design located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DrewVerse Design is a creative digital agency based in Kampala, Uganda, serving clients across East Africa and internationally."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to complete a website project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project timelines vary depending on complexity and requirements. A typical website project takes between 3-8 weeks from discovery to launch. We provide detailed timelines during our initial consultation."
      }
    },
    {
      "@type": "Question",
      "name": "Does DrewVerse Design provide website maintenance services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer ongoing website maintenance and support services to ensure your website remains secure, up-to-date, and functioning optimally."
      }
    }
  ]
};

export const getVideoSchema = (videoUrl: string, thumbnailUrl: string, name: string, description: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": "2023-01-15T08:00:00+08:00",
    "duration": "PT1M33S",
    "contentUrl": videoUrl,
    "embedUrl": videoUrl,
    "publisher": {
      "@id": "https://drewversedesign.online/#organization"
    }
  };
};

export const getBreadcrumbSchema = (items: {name: string, item: string}[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    }))
  };
};
