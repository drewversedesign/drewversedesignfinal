
import { BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24">
        <div className="section-container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-display text-white mb-4">DrewVerse Design Blog</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Expert insights on web design, development, and digital solutions in Uganda and East Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {blogPosts.map((post, index) => (
              <Link to={`/blog/${post.id}`} key={index} className="block transition-transform hover:scale-[1.02]">
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all h-full">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <CardTitle className="text-white">{post.title}</CardTitle>
                    <CardDescription className="text-white/70">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-white/50">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        {post.readTime}
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
