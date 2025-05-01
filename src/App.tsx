
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import StartProject from "./pages/StartProject";
import CookieConsent from "./components/CookieConsent";
import { META_TAGS } from "./utils/meta-tags";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    document.title = META_TAGS.home.title;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path={META_TAGS.home.url} element={<Index />} />
              <Route path={META_TAGS.about.url} element={<About />} />
              <Route path={META_TAGS.portfolio.url} element={<Portfolio />} />
              <Route path={META_TAGS.services.url} element={<Services />} />
              <Route path={META_TAGS.contact.url} element={<Contact />} />
              <Route path={META_TAGS.startProject.url} element={<StartProject />} />
              <Route path={META_TAGS.blog.url} element={<Blog />} />
              <Route path={`${META_TAGS.blog.url}/:id`} element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsent />
          </TooltipProvider>
        </HelmetProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
