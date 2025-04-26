
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Import the blog posts data
import { blogPosts } from "@/data/blogPosts";

interface BlogPostParams {
  id: string;
}

const BlogPost = () => {
  const { id } = useParams<keyof BlogPostParams>() as BlogPostParams;
  const [post, setPost] = useState<any>(null);
  
  useEffect(() => {
    // Find the blog post with the matching ID
    const foundPost = blogPosts.find(post => post.id === id);
    setPost(foundPost);
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl font-display text-white mb-4">Blog post not found</h1>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
            </Link>
            
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
            />
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-white/70 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="w-16 h-1 bg-orange-500 mb-8"></div>
          </div>
          
          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-display text-white mb-2">Ready to transform your digital presence?</h3>
                <p className="text-white/70">Let DrewVerse Design elevate your brand with professional web solutions</p>
              </div>
              <Link to="/#contact">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
