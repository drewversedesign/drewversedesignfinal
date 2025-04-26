
import { whyChoosePost } from './why-choose-drewverse';
import { responsiveDesignPost } from './responsive-design';
import { webDesignUgandaPost } from './web-design-uganda';
import { choosingAgencyPost } from './choosing-agency';
import { seoFriendlyPost } from './seo-friendly';
import { expertWebDesignPost } from './expert-web-design';
import { webDevTrendsPost } from './web-dev-trends';
import { ecommerceWebsitesPost } from './ecommerce-websites';
import { futureWebDesignPost } from './future-web-design';

export const blogPosts = [
  futureWebDesignPost, // Add new post at the start to feature it
  whyChoosePost,
  responsiveDesignPost,
  webDesignUgandaPost,
  choosingAgencyPost,
  seoFriendlyPost,
  expertWebDesignPost,
  webDevTrendsPost,
  ecommerceWebsitesPost
];

export type BlogPost = typeof blogPosts[0];
