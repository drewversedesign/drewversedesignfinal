
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const BlogPostNotFound = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-display text-white mb-4">Blog post not found</h1>
          <Link to="/blog">
            <Button variant="outline" className="text-white">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
