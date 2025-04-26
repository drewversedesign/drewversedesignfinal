
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import { META_TAGS } from "./utils/meta-tags";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    document.title = META_TAGS.home.title;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path={META_TAGS.home.url} element={<Index />} />
            <Route path={META_TAGS.blog.url} element={<Blog />} />
            <Route path={`${META_TAGS.blog.url}/:id`} element={<BlogPost />} />
            {/* Note: Other routes like /about, /services etc will be implemented when their components are ready */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
