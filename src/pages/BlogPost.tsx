
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogPostHeader } from "@/components/blog/BlogPostHeader";
import { BlogPostCTA } from "@/components/blog/BlogPostCTA";
import { BlogPostNotFound } from "@/components/blog/BlogPostNotFound";
import { blogPosts } from "@/data/blog-posts";
import SEO from "@/components/SEO";
import { getBlogPostSchema, getBreadcrumbSchema } from "@/utils/structured-data";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);
  
  useEffect(() => {
    if (!post) return;
    
    document.title = post.metaTitle || `${post.title} | DrewVerse Design Blog`;
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [post]);

  if (!post) {
    return <BlogPostNotFound />;
  }

  // Create breadcrumb items for structured data
  const breadcrumbItems = [
    { name: "Home", item: "https://drewversedesign.online/" },
    { name: "Blog", item: "https://drewversedesign.online/blog" },
    { name: post.title, item: `https://drewversedesign.online/blog/${post.id}` }
  ];
  
  // Get the structured data for this blog post
  const structuredData = [
    getBlogPostSchema(post),
    getBreadcrumbSchema(breadcrumbItems)
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <SEO
        title={post.title}
        description={post.description}
        canonicalUrl={`https://drewversedesign.online/blog/${post.id}`}
        ogTitle={post.metaTitle || post.title}
        ogDescription={post.metaDescription || post.description}
        ogImage={post.image}
        structuredData={structuredData}
      />
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <article className="max-w-3xl mx-auto">
            <BlogPostHeader
              title={post.title}
              date={post.date}
              readTime={post.readTime}
              image={post.image}
            />
            
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <BlogPostCTA />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
