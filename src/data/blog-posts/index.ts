
import { whyChoosePost } from './why-choose-drewverse';
import { responsiveDesignPost } from './responsive-design';
import { webDesignUgandaPost } from './web-design-uganda';
import { choosingAgencyPost } from './choosing-agency';
import { seoFriendlyPost } from './seo-friendly';
import { expertWebDesignPost } from './expert-web-design';
import { webDevTrendsPost } from './web-dev-trends';
import { ecommerceWebsitesPost } from './ecommerce-websites';
import { futureWebDesignPost } from './future-web-design';

// Optimization: Export metadata separately to avoid loading all post content on the blog list page.
export const blogPostMetadata = [
  futureWebDesignPost,
  whyChoosePost,
  responsiveDesignPost,
  webDesignUgandaPost,
  choosingAgencyPost,
  seoFriendlyPost,
  expertWebDesignPost,
  webDevTrendsPost,
  ecommerceWebsitesPost
].map(({ content: _, ...meta }) => meta);


// Optimization: Create a map for dynamic imports to load post content on demand.
export const blogPostsMap: { [id: string]: () => Promise<{ default: BlogPost }> } = {
  'future-web-design': () => import('./future-web-design').then(m => ({ default: m.futureWebDesignPost })),
  'why-choose-drewverse-design': () => import('./why-choose-drewverse').then(m => ({ default: m.whyChoosePost })),
  'responsive-web-design-benefits': () => import('./responsive-design').then(m => ({ default: m.responsiveDesignPost })),
  'professional-web-design-uganda': () => import('./web-design-uganda').then(m => ({ default: m.webDesignUgandaPost })),
  'choosing-the-right-web-design-agency': () => import('./choosing-agency').then(m => ({ default: m.choosingAgencyPost })),
  'seo-friendly-website-design': () => import('./seo-friendly').then(m => ({ default: m.seoFriendlyPost })),
  'expert-web-design-company': () => import('./expert-web-design').then(m => ({ default: m.expertWebDesignPost })),
  'latest-web-development-trends': () => import('./web-dev-trends').then(m => ({ default: m.webDevTrendsPost })),
  'ecommerce-website-features': () => import('./ecommerce-websites').then(m => ({ default: m.ecommerceWebsitesPost })),
};

export type BlogPost = {
  id: string;
  title:string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
};

export type BlogPostMeta = Omit<BlogPost, 'content'>;
