
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const BlogPostNotFound = () => {
  const handleBackClick = () => {
    window.location.href = '/blog';
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-display text-white mb-4">Blog post not found</h1>
          <Button 
            variant="outline" 
            className="text-white"
            onClick={handleBackClick}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
