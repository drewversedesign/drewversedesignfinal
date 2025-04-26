
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { META_TAGS } from "@/utils/meta-tags";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | DrewVerse Design";
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="animate-float mb-8">
          <div className="text-9xl font-display font-bold text-white mb-4">404</div>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Page Not Found
        </h1>
        
        <p className="text-white/70 mb-8 font-mono">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={META_TAGS.home.url}
            className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-mono text-sm uppercase tracking-wider rounded-md hover:bg-orange-600 transition-all"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-mono text-sm uppercase tracking-wider rounded-md hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
