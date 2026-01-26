
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from "./hooks/useAuth";
import { META_TAGS } from "./utils/meta-tags";
import Loader from "./components/Loader";
import CookieConsent from "./components/CookieConsent";

// Lazily import page components for code-splitting to reduce the initial bundle size.
// This improves performance by only loading the code for a specific page when it's navigated to.
const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const StartProject = lazy(() => import("./pages/StartProject"));
const Auth = lazy(() => import("./pages/Auth"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));


const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    document.title = META_TAGS.home.title;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <HelmetProvider>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {/* Using Suspense allows components to wait for some code to load
                  and declaratively specify a loading state (like a spinner)
                  while we’re waiting. */}
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path={META_TAGS.home.url} element={<Index />} />
                  <Route path={META_TAGS.about.url} element={<About />} />
                  <Route path={META_TAGS.portfolio.url} element={<Portfolio />} />
                  <Route path={META_TAGS.services.url} element={<Services />} />
                  <Route path={META_TAGS.contact.url} element={<Contact />} />
                  <Route path={META_TAGS.startProject.url} element={<StartProject />} />
                  <Route path={META_TAGS.blog.url} element={<Blog />} />
                  <Route path={`${META_TAGS.blog.url}/:id`} element={<BlogPost />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <CookieConsent />
            </TooltipProvider>
          </AuthProvider>
        </HelmetProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
