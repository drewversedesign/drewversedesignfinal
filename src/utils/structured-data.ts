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
  "image": "https://drewversedesign.online/lovable-uploads/dff2717d-6759-4360-ae3a-c7d8f959446f.png",
  "description": "DrewVerse Design is a creative digital agency based in Kampala, Uganda specializing in custom web design, mobile apps, and branding solutions for businesses across East Africa and beyond.",
  "telephone": "+256700000000",
  "email": "info@drewversedesign.online",
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
  "priceRange": "$$",
  "areaServed": [
    {
      "@type": "Country",
      "name": "Uganda"
    },
    {
      "@type": "Country", 
      "name": "Kenya"
    },
    {
      "@type": "Country",
      "name": "Tanzania"
    }
  ],
  "serviceType": [
    "Web Design",
    "Mobile App Development", 
    "UI/UX Design",
    "Brand Identity",
    "SEO Services"
  ],
  "foundingDate": "2023",
  "numberOfEmployees": "5-10",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "25",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah M."
      },
      "reviewBody": "DrewVerse Design created an amazing website for our business. Professional, responsive, and exactly what we needed!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "John K."
      },
      "reviewBody": "Excellent web design services. The team is creative, professional, and delivered our project on time."
    }
  ]
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
  },
  "inLanguage": "en-US"
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
    },
    "offers": {
      "@type": "Offer",
      "price": "500",
      "priceCurrency": "USD",
      "description": "Professional web design starting from $500"
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
    },
    "offers": {
      "@type": "Offer",
      "price": "1000",
      "priceCurrency": "USD",
      "description": "Mobile app development starting from $1000"
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
    },
    "offers": {
      "@type": "Offer",
      "price": "300",
      "priceCurrency": "USD",
      "description": "UI/UX design services starting from $300"
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
    },
    "offers": {
      "@type": "Offer",
      "price": "400",
      "priceCurrency": "USD",
      "description": "Brand identity services starting from $400"
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
    },
    "offers": {
      "@type": "Offer",
      "price": "200",
      "priceCurrency": "USD",
      "description": "Design and animation services starting from $200"
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
    },
    "offers": {
      "@type": "Offer",
      "price": "250",
      "priceCurrency": "USD",
      "description": "SEO optimization services starting from $250"
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
  },
  "inLanguage": "en-US"
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
    },
    "inLanguage": "en-US",
    "wordCount": post.content?.length || 1000,
    "articleSection": "Web Design",
    "keywords": post.keywords || "web design, digital marketing, website development"
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
      "name": "How much does web design cost in Uganda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our web design services start from $500 USD, offering professional, responsive websites tailored to your business needs. We provide competitive pricing for the East African market."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide SEO services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer comprehensive SEO optimization services to improve your website's search engine rankings and online visibility. Our SEO packages start from $250 USD."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typical website development takes 2-4 weeks depending on complexity. We provide detailed timelines during project planning and keep you updated throughout the process."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide mobile app development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in both native and cross-platform mobile app development using React Native and Flutter. Our mobile app services start from $1000 USD."
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
    "uploadDate": "2024-01-01",
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

export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DrewVerse Design",
    "image": "https://drewversedesign.online/lovable-uploads/dff2717d-6759-4360-ae3a-c7d8f959446f.png",
    "description": "Professional web design and digital agency in Kampala, Uganda",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kampala",
      "addressLocality": "Kampala",
      "addressRegion": "Uganda",
      "postalCode": "10001",
      "addressCountry": "UG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "0.3476",
      "longitude": "32.5825"
    },
    "url": "https://drewversedesign.online",
    "telephone": "+256700000000",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "USD, UGX",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer"
  };
};
