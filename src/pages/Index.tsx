
import { Link } from "react-router-dom";
import { Search, Users, Briefcase, Star, ArrowRight, CheckCircle, TrendingUp, Shield, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CategoryGrid from "@/components/home/CategoryGrid";
import TrendingServicesCarousel from "@/components/home/TrendingServicesCarousel";
import SuccessStories from "@/components/home/SuccessStories";
import EnhancedCTAs from "@/components/home/EnhancedCTAs";
import ContextualNavbar from "@/components/home/ContextualNavbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const stats = [
    { number: "50,000+", label: "Elite Freelancers", icon: <Users className="h-6 w-6" /> },
    { number: "25,000+", label: "Projects Completed", icon: <Briefcase className="h-6 w-6" /> },
    { number: "98.5%", label: "Client Satisfaction", icon: <Star className="h-6 w-6" /> },
    { number: "$50M+", label: "Paid to Freelancers", icon: <TrendingUp className="h-6 w-6" /> }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8d6c3] via-[#e2cfc3] to-[#e7d7c7]">
      <Header />
      <ContextualNavbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow font-medium text-base text-gray-700 border border-gray-200">
              <span className="text-yellow-500"><Award className="h-5 w-5" /></span>
              Trusted by 10,000+ businesses worldwide
            </span>
          </div>
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 font-space-grotesk leading-tight">
            <span className="block text-terracotta">Hire Top Freelancers</span>
            <span className="block text-[#6B8E23]">or Land Freelance Gigs</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-pink-400">Fast.</span>
          </h1>
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            The premium marketplace where exceptional talent meets extraordinary opportunities. Join the future of work today.
          </p>
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 p-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 max-w-2xl mx-auto mb-10">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-6 w-6" />
              <Input 
                placeholder="Search for services or talent..." 
                className="pl-12 border-0 focus:ring-0 h-14 text-lg bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit" size="lg" className="h-14 px-8 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow hover:from-purple-600 hover:to-pink-500">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </form>
          {/* Main Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-terracotta to-olive hover:from-terracotta/90 hover:to-olive/90 px-10 py-4 text-lg font-semibold rounded-xl text-white shadow-lg"
              onClick={() => navigate('/search')}
            >
              Find Freelancers <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 px-10 py-4 text-lg font-semibold rounded-xl text-gray-900 shadow-lg flex items-center gap-2"
              onClick={() => navigate('/auth/register?type=freelancer')}
            >
              Start Your Career <Briefcase className="h-5 w-5" />
            </Button>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-8">
            <div className="text-center">
              <Users className="mx-auto mb-2 h-7 w-7 text-terracotta" />
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1 font-space-grotesk">50,000+</div>
              <div className="text-gray-600 font-medium">Elite Freelancers</div>
            </div>
            <div className="text-center">
              <Briefcase className="mx-auto mb-2 h-7 w-7 text-terracotta" />
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1 font-space-grotesk">25,000+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <Star className="mx-auto mb-2 h-7 w-7 text-terracotta" />
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1 font-space-grotesk">98.5%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <TrendingUp className="mx-auto mb-2 h-7 w-7 text-terracotta" />
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1 font-space-grotesk">$50M+</div>
              <div className="text-gray-600 font-medium">Paid to Freelancers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <div id="categories">
        <CategoryGrid />
      </div>

      {/* Trending Services */}
      <div id="trending">
        <TrendingServicesCarousel />
      </div>

      {/* Success Stories */}
      <SuccessStories />

      {/* Features Section */}
      <section className="py-24 bg-white/80 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-soft-charcoal mb-6 font-space-grotesk">
              Why Choose <span className="text-terracotta">FreelanceFlow</span>?
            </h2>
            <p className="text-xl text-clay-grey max-w-3xl mx-auto">
              Everything you need to succeed in the premium freelance economy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Users className="h-10 w-10 text-terracotta" />,
                title: "Top-Tier Freelancers",
                description: "Access to carefully vetted professionals across all industries and skill levels"
              },
              {
                icon: <Shield className="h-10 w-10 text-sage-green" />,
                title: "Secure Payments",
                description: "Protected transactions with advanced escrow system and milestone-based payments"
              },
              {
                icon: <Zap className="h-10 w-10 text-electric-purple" />,
                title: "Lightning Fast Matching",
                description: "AI-powered job matching connects you with perfect opportunities in minutes"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-zen hover:scale-105">
                <CardContent className="pt-10 pb-8 px-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="group-hover:animate-pulse-glow transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-soft-charcoal font-space-grotesk">{feature.title}</h3>
                  <p className="text-clay-grey leading-relaxed text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-gold text-white relative overflow-hidden" data-aos="zoom-in-up" data-aos-delay="400">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-space-grotesk">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
            Join thousands of successful freelancers and businesses on our premium platform
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/auth/register?type=freelancer">
              <Button size="lg" className="bg-white text-soft-charcoal hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-4 text-lg font-semibold rounded-xl">
                I'm a Freelancer
                <Users className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/auth/register?type=client">
              <Button size="lg" variant="outline" className="border-2 border-white bg-gradient-to-r from-purple-500 to-orange-500 text-white hover:bg-terracotta hover:text-white hover:border-terracotta shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-4 text-lg font-semibold rounded-xl">
                I'm Hiring
                <Briefcase className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
