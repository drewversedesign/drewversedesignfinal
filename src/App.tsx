
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { HelmetProvider } from 'react-helmet-async';
import CookieConsent from "./components/CookieConsent";
import Loader from "./components/Loader";
import { AuthProvider } from "./hooks/useAuth";
import { META_TAGS } from "./utils/meta-tags";

// ⚡ Bolt: Lazily load page components to reduce initial bundle size.
// This improves initial page load time by only loading the code for the current page.
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
              {/* ⚡ Bolt: Use Suspense to show a fallback while lazy-loaded components are fetched. */}
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
