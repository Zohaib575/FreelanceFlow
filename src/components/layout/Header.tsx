
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-clay-grey/20 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="bg-gradient-to-br from-terracotta to-olive p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Users className="h-7 w-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-metallic-gold rounded-full border-2 border-white"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold font-space-grotesk">
                <span className="text-terracotta">Freelance</span>
                <span className="text-olive">Flow</span>
              </span>
              <div className="text-xs text-soft-charcoal font-medium tracking-wide">Premium Marketplace</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/jobs" className="text-soft-charcoal hover:text-terracotta transition-colors font-medium">
              Find Work
            </Link>
            <Link to="/search" className="text-soft-charcoal hover:text-terracotta transition-colors font-medium">
              Find Talent
            </Link>
            <Link to="/how-it-works" className="text-soft-charcoal hover:text-terracotta transition-colors font-medium">
              How It Works
            </Link>
            <Link to="/pricing" className="text-soft-charcoal hover:text-terracotta transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/about" className="text-soft-charcoal hover:text-terracotta transition-colors font-medium">
              About
            </Link>
            <Link to="/blog" className="text-soft-charcoal hover:text-terracotta transition-colors font-medium">
              Blog
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/auth/login">
              <Button 
                variant="ghost" 
                className="text-soft-charcoal hover:text-terracotta hover:bg-warm-sand/50"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/auth/register">
              <Button className="bg-gradient-to-r from-terracotta to-olive hover:from-terracotta/90 hover:to-olive/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-soft-charcoal hover:text-terracotta transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-clay-grey/20 bg-gradient-to-br from-pale-sand to-warm-sand">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/jobs" 
                className="text-soft-charcoal hover:text-terracotta transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Work
              </Link>
              <Link 
                to="/search" 
                className="text-soft-charcoal hover:text-terracotta transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Talent
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-soft-charcoal hover:text-terracotta transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/50"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/pricing" 
                className="text-soft-charcoal hover:text-terracotta transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/about" 
                className="text-soft-charcoal hover:text-terracotta transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="text-soft-charcoal hover:text-terracotta transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="pt-3 border-t border-clay-grey/20 space-y-2">
                <Link to="/auth/login" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-soft-charcoal hover:text-terracotta hover:bg-white/50"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-terracotta to-olive hover:from-terracotta/90 hover:to-olive/90 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
