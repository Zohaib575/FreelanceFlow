
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-terracotta/10 via-sage-green/10 to-electric-purple/10 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated 404 */}
        <div className="mb-12">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-terracotta via-electric-purple to-sage-green bg-clip-text font-space-grotesk leading-none animate-pulse">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-soft-charcoal mb-6 font-space-grotesk">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-clay-grey max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best freelancers sometimes take a wrong turn!
          </p>
        </div>

        {/* Floating Elements Animation */}
        <div className="relative mb-12">
          <div className="flex justify-center items-center space-x-8">
            <div className="w-16 h-16 bg-terracotta/20 rounded-full animate-float"></div>
            <div className="w-12 h-12 bg-sage-green/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-20 h-20 bg-electric-purple/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-terracotta to-electric-purple hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          
          <Link to="/jobs">
            <Button size="lg" variant="outline" className="border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl">
              <Search className="mr-2 h-5 w-5" />
              Browse Jobs
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-16">
          <p className="text-clay-grey mb-4">Or try one of these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="text-terracotta hover:text-electric-purple transition-colors underline">
              About Us
            </Link>
            <Link to="/how-it-works" className="text-terracotta hover:text-electric-purple transition-colors underline">
              How It Works
            </Link>
            <Link to="/contact" className="text-terracotta hover:text-electric-purple transition-colors underline">
              Contact Support
            </Link>
            <Link to="/blog" className="text-terracotta hover:text-electric-purple transition-colors underline">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
