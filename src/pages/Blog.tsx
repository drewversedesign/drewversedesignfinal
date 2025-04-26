
import { BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Web Development",
      description: "Exploring emerging trends and technologies shaping the web development landscape",
      date: "April 20, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Designing for Accessibility",
      description: "Best practices for creating inclusive digital experiences",
      date: "April 18, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "The Rise of AI in Design",
      description: "How artificial intelligence is transforming the design industry",
      date: "April 15, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4">Our Blog</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Insights, updates, and stories from the DrewVerse team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
};

export default Blog;
