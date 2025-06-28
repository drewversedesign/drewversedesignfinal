import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string;
  author?: string;
  structuredData?: object | object[];
  noindex?: boolean;
  nofollow?: boolean;
  children?: React.ReactNode;
}

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords,
  author = "DrewVerse Design",
  structuredData,
  noindex = false,
  nofollow = false,
  children
}: SEOProps) => {
  const site = "DrewVerse Design";
  const siteUrl = "https://drewversedesign.online";
  
  const metaTitle = title ? `${title} | ${site}` : site;
  const metaDescription = description || "DrewVerse Design is Uganda's premier digital agency specializing in custom web design, mobile apps, and branding solutions. Get affordable, professional web design services in Kampala, Uganda.";
  const metaImage = ogImage ? (ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`) : `${siteUrl}/lovable-uploads/dff2717d-6759-4360-ae3a-c7d8f959446f.png`;
  const url = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`) : siteUrl;
  const metaKeywords = keywords || "web design uganda, digital agency kampala, mobile app development, UI/UX design, brand identity, web development east africa, DrewVerse Design, responsive websites, custom web solutions, digital marketing uganda, website development, SEO services, ecommerce websites, local business web design, affordable web design, web designer kampala, website company uganda, professional web design, modern website design, business website uganda";

  // Robots meta tag
  const robotsContent = noindex 
    ? (nofollow ? "noindex, nofollow" : "noindex") 
    : (nofollow ? "index, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

  // Format structured data for JSON-LD
  const getStructuredDataScripts = () => {
    if (!structuredData) return null;
    
    if (Array.isArray(structuredData)) {
      return structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ));
    }
    
    return (
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    );
  };

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={ogTitle || metaTitle} />
      <meta property="og:description" content={ogDescription || metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:alt" content={ogTitle || metaTitle} />
      <meta property="og:site_name" content={site} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_UG" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@drewverse_design" />
      <meta name="twitter:creator" content="@drewverse_design" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={ogTitle || metaTitle} />
      <meta name="twitter:description" content={ogDescription || metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:image:alt" content={ogTitle || metaTitle} />

      {/* Additional SEO meta tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="UG" />
      <meta name="geo.placename" content="Kampala" />
      <meta name="geo.position" content="0.3476;32.5825" />
      <meta name="ICBM" content="0.3476, 32.5825" />
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* Structured Data / JSON-LD */}
      {getStructuredDataScripts()}
      
      {children}
    </Helmet>
  );
};

export default SEO;
