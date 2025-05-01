
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: any;
  children?: React.ReactNode;
}

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  structuredData,
  children
}: SEOProps) => {
  const site = "DrewVerse Design";
  
  const metaTitle = title ? `${title} | ${site}` : site;
  const metaDescription = description || "DrewVerse Design is Uganda's premier digital agency specializing in custom web design, mobile apps, and branding solutions.";
  const metaImage = ogImage || "/lovable-uploads/dff2717d-6759-4360-ae3a-c7d8f959446f.png";
  const url = canonicalUrl || "https://drewversedesign.online";

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={ogTitle || metaTitle} />
      <meta property="og:description" content={ogDescription || metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={ogTitle || metaTitle} />
      <meta name="twitter:description" content={ogDescription || metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      
      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {children}
    </Helmet>
  );
};

export default SEO;
