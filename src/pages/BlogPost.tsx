
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogPostHeader } from "@/components/blog/BlogPostHeader";
import { BlogPostCTA } from "@/components/blog/BlogPostCTA";
import { BlogPostNotFound } from "@/components/blog/BlogPostNotFound";
import type { BlogPost } from "@/data/blog-posts"; // Type-only import for BlogPost interface
import { blogPosts } from "@/data/blog-posts"; // Adding import for blogPosts array

interface BlogPostParams {
  id: string;
}

const BlogPost = () => {
  const { id } = useParams<keyof BlogPostParams>() as BlogPostParams;
  const [post, setPost] = useState<BlogPost | null>(null);
  
  useEffect(() => {
    const foundPost = blogPosts.find(post => post.id === id);
    setPost(foundPost);
    window.scrollTo(0, 0);

    // Update meta tags when post changes
    if (foundPost) {
      document.title = foundPost.metaTitle || foundPost.title;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', foundPost.metaDescription || foundPost.description);

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', foundPost.metaKeywords || '');
    }
  }, [id]);
  
  if (!post) {
    return <BlogPostNotFound />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <BlogPostHeader 
            title={post.title}
            date={post.date}
            readTime={post.readTime}
            image={post.image}
          />
          
          <div 
            className="prose prose-invert prose-lg max-w-none prose-a:text-white prose-a:underline prose-a:hover:text-white/80"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <BlogPostCTA />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
