
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomLoader from "@/components/common/CustomLoader";
import Index from "./pages/Index";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Jobs from "./pages/Jobs";
import CreateJob from "./pages/jobs/CreateJob";
import FreelancerDashboard from "./pages/dashboard/FreelancerDashboard";
import ClientDashboard from "./pages/dashboard/ClientDashboard";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ProfileDetails from "./pages/ProfileDetails";
import Search from "./pages/Search";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import JobDetails from "./pages/JobDetails";
import ApplyJob from "./pages/ApplyJob";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import ServiceDetails from './pages/ServiceDetails';

const queryClient = new QueryClient();

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading && <CustomLoader />}
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/create" element={<CreateJob />} />
            <Route path="/dashboard/freelancer" element={<FreelancerDashboard />} />
            <Route path="/dashboard/admin" element={<ClientDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/profile/:id" element={<ProfileDetails />} />
            <Route path="/search" element={<Search />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/jobs/:id/apply" element={<ApplyJob />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
