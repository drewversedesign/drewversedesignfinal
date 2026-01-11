import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { META_TAGS } from "@/utils/meta-tags";
import { blogPostMetadata } from "@/data/blog-posts";
import SEO from "@/components/SEO";
import { blogListingSchema, getBreadcrumbSchema } from "@/utils/structured-data";
const Blog = () => {
  useEffect(() => {
    document.title = META_TAGS.blog.title;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  const breadcrumbItems = [{
    name: "Home",
    item: "https://drewversedesign.online/"
  }, {
    name: "Blog",
    item: "https://drewversedesign.online/blog"
  }];
  const structuredData = [blogListingSchema, getBreadcrumbSchema(breadcrumbItems)];
  return <div className="bg-black min-h-screen flex flex-col">
      <SEO title="Web Design Insights & Tips | DrewVerse Design Blog" description="Stay updated with the latest trends, tips, and strategies in web design and digital marketing at the DrewVerse Design Blog. Learn how to grow your online presence." canonicalUrl="https://drewversedesign.online/blog" structuredData={structuredData} />
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 my-[50px] bg-zinc-50">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 text-zinc-950">
            {META_TAGS.blog.h1}
          </h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="font-mono text-lg text-zinc-950">
              Explore our latest insights on web design, digital marketing, and online business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostMetadata.map((post, index) => <article key={post.id} className="glass-card overflow-hidden group hover:-translate-y-1 transition-transform">
                <Link to={`/blog/${post.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" loading={index < 3 ? "eager" : "lazy"} width="400" height="225" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-orange-500 font-mono text-xs">{post.date}</span>
                      <span className="text-white/60 font-mono text-xs">{post.readTime}</span>
                    </div>
                    
                    <h2 className="font-display text-xl mb-3 line-clamp-2 text-zinc-950">
                      {post.title}
                    </h2>
                    
                    <p className="font-mono text-sm mb-4 line-clamp-3 text-zinc-950">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center text-orange-500 font-mono text-xs group-hover:text-white transition-colors">
                      Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </article>)}
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Blog;