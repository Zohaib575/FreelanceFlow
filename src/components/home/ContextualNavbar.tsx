
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Search, Star, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const ContextualNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling down past 400px
      // Hide when scrolling back up near the top
      if (currentScrollY > 400 && currentScrollY > lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY < 200) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="bg-white/95 backdrop-blur-lg border-b border-clay-grey/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Side - Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('categories')}
                className="text-soft-charcoal hover:text-terracotta transition-colors font-medium"
              >
                Categories
              </button>
              <button
                onClick={() => scrollToSection('filters')}
                className="text-soft-charcoal hover:text-terracotta transition-colors font-medium flex items-center"
              >
                <Filter className="h-4 w-4 mr-1" />
                Filters
              </button>
              <button
                onClick={() => scrollToSection('trending')}
                className="text-soft-charcoal hover:text-terracotta transition-colors font-medium flex items-center"
              >
                <Star className="h-4 w-4 mr-1" />
                Top Services
              </button>
            </nav>

            {/* Center - Quick Stats */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-terracotta/10 text-terracotta">
                  50,000+ Freelancers
                </Badge>
                <Badge variant="secondary" className="bg-sage-green/10 text-sage-green">
                  25,000+ Projects
                </Badge>
                <Badge variant="secondary" className="bg-electric-purple/10 text-electric-purple">
                  98.5% Success Rate
                </Badge>
              </div>
            </div>

            {/* Right Side - Action Buttons */}
            <div className="flex items-center space-x-4">
              <Link to="/search">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-soft-charcoal hover:text-terracotta hover:bg-terracotta/10"
                >
                  <Search className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Browse</span>
                </Button>
              </Link>
              
              <Link to="/jobs/create">
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-terracotta to-olive hover:from-terracotta/90 hover:to-olive/90 text-white shadow-lg"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Post Job</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextualNavbar;
