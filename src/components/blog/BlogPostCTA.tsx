
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const BlogPostCTA = () => {
  return (
    <div className="border-t border-white/10 mt-12 pt-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-display text-white mb-2">Ready to transform your digital presence?</h3>
          <p className="text-white/70">Let DrewVerse Design elevate your brand with professional web solutions</p>
        </div>
        <Link to="/#contact">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};
