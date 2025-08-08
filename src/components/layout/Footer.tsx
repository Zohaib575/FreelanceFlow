
import { Link } from "react-router-dom";
import { Users, Mail, Phone, MapPin, FacebookIcon, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-soft-charcoal to-jet-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-clay-grey/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 font-space-grotesk">
              Get <span className="text-metallic-gold">Market Insights</span>
            </h3>
            <p className="text-xl text-white/80 mb-8">
              Weekly freelance trends, success stories, and premium opportunities delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-metallic-gold h-12"
              />
              <Button className="bg-gradient-to-r from-terracotta to-olive hover:from-terracotta/90 hover:to-olive/90 shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-8">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="bg-gradient-to-br from-terracotta to-olive p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-metallic-gold rounded-full border-2 border-white"></div>
              </div>
              <div>
                <span className="text-2xl font-bold font-space-grotesk">
                  <span className="text-terracotta">Freelance</span>
                  <span className="text-olive">Flow</span>
                </span>
                <div className="text-xs text-white/70 font-medium tracking-wide">Premium Marketplace</div>
              </div>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              The world's premium freelance marketplace connecting exceptional talent with extraordinary opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/zohaibahmaddev" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-terracotta transition-colors duration-300">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/zohaibahmaddev" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-terracotta transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/zohaibahmaddev" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-terracotta transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/zohaibahmaddev" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-terracotta transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* For Freelancers */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-metallic-gold font-space-grotesk">For Freelancers</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/jobs" className="text-white/80 hover:text-terracotta transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-terracotta rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Find Premium Work
                </Link>
              </li>
              <li>
                <Link to="/dashboard/freelancer" className="text-white/80 hover:text-terracotta transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-terracotta rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Freelancer Dashboard
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-white/80 hover:text-terracotta transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-terracotta rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Build Your Profile
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/80 hover:text-terracotta transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-terracotta rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Success Resources
                </Link>
              </li>
            </ul>
          </div>
          
          {/* For Clients */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-metallic-gold font-space-grotesk">For Clients</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/search" className="text-white/80 hover:text-terracotta transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-terracotta rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Find Top Talent
                </Link>
              </li>
              <li>
                <Link to="/jobs/create" className="text-white/80 hover:text-terracotta transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-terracotta rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Post Premium Jobs
                </Link>
              </li>
              <li>
                <Link to="/dashboard/admin" className="text-white/80 hover:text-terracotta transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-terracotta rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Client Dashboard
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-white/80 hover:text-terracotta transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-terracotta rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company & Contact */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-metallic-gold font-space-grotesk">Company</h3>
            <ul className="space-y-4 mb-8">
              <li>
                <Link to="/about" className="text-white/80 hover:text-terracotta transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-terracotta rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-terracotta transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-terracotta rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-terracotta transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-terracotta rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-terracotta transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-terracotta rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/80 hover:text-terracotta transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-terracotta rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Terms of Service
                </Link>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <Mail className="h-4 w-4 mr-3 text-terracotta" />
                <span className="text-sm">zohaib...@gmail.com</span>
              </div>
              <div className="flex items-center text-white/80">
                <Phone className="h-4 w-4 mr-3 text-terracotta" />
                <span className="text-sm">+9232....445</span>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="h-4 w-4 mr-3 text-terracotta" />
                <span className="text-sm">Lahore , Punjab , Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-clay-grey/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 mb-4 md:mb-0">
              &copy; 2024 FreelanceFlow. All rights reserved. | Premium Marketplace for Exceptional Talent
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-sm text-white/60">Trusted by 10,000+ businesses worldwide</div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-sage-green rounded-full animate-pulse"></div>
                <span className="text-sm text-sage-green font-medium">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
