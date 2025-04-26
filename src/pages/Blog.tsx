
import { BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const posts = [
    {
      title: "Web Design Services in Uganda: A Complete Guide 2025",
      description: "Discover how DrewVerse Design is revolutionizing web design services in Uganda with modern, responsive, and affordable solutions for businesses.",
      date: "April 26, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "How to Choose the Right Web Design Agency for Your Business",
      description: "Learn the key factors to consider when selecting a web design agency in East Africa, and why DrewVerse Design stands out in the market.",
      date: "April 24, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "The Impact of SEO-Friendly Web Design on Business Growth",
      description: "Explore how DrewVerse Design integrates SEO best practices into web design to help Ugandan businesses reach wider audiences.",
      date: "April 22, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Expert Web Design Services for Small Businesses",
      description: "Discover our affordable and professional web design solutions tailored specifically for small businesses in Uganda and East Africa.",
      date: "April 20, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Web Development Trends in Uganda: 2025 Edition",
      description: "Stay ahead with the latest web development trends and technologies that DrewVerse Design is implementing for Ugandan businesses.",
      date: "April 18, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Creating Professional E-commerce Websites in Uganda",
      description: "Learn how DrewVerse Design helps businesses in Uganda establish their online presence with custom e-commerce solutions.",
      date: "April 16, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
    }
  ];

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
            {posts.map((post, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all">
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
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
