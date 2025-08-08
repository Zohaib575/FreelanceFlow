
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, Zap, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

const EnhancedCTAs = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const features = [
    {
      icon: <Shield className="h-5 w-5" />,
      text: "Low fees & secure payments"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      text: "Fast client-freelancer matching"
    },
    {
      icon: <Star className="h-5 w-5" />,
      text: "24/7 expert support"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta/5 via-transparent to-electric-purple/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-terracotta/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-sage-green/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold font-space-grotesk mb-8 leading-tight">
            <span className="text-terracotta">Premium</span>
            <br />
            <span className="text-olive">Freelance</span>
            <br />
            <span className="bg-gradient-to-r from-electric-purple to-bubblegum-pink bg-clip-text text-transparent">
              Marketplace
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-xl md:text-2xl text-soft-charcoal leading-relaxed">
            <p>
              Connect with <strong>elite freelancers</strong> and <strong>premium clients</strong> in the world's most trusted marketplace. 
              Experience the future of work with our curated community of professionals.
            </p>
            
            <p>
              Join thousands of successful freelancers and businesses who trust FreelanceFlow for 
              <strong> exceptional quality</strong>, <strong>secure transactions</strong>, and <strong>unmatched support</strong>.
            </p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-clay-grey/20 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-terracotta">
                {feature.icon}
              </div>
              <span className="text-soft-charcoal font-medium">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Link to="/auth/register?type=client">
            <Button 
              size="lg" 
              className={`group bg-gradient-to-r from-terracotta to-olive hover:from-terracotta/90 hover:to-olive/90 text-white shadow-2xl px-10 py-6 text-xl font-bold rounded-2xl transition-all duration-300 ${
                hoveredButton === 'hire' ? 'scale-105 shadow-3xl' : ''
              }`}
              onMouseEnter={() => setHoveredButton('hire')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Users className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Hire Top Talent
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
          
          <Link to="/auth/register?type=freelancer">
            <Button 
              size="lg" 
              variant="outline"
              className={`group border-3 border-terracotta text-terracotta hover:bg-terracotta hover:text-white shadow-xl px-10 py-6 text-xl font-bold rounded-2xl transition-all duration-300 ${
                hoveredButton === 'earn' ? 'scale-105 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredButton('earn')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Briefcase className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              Start Earning
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>

        {/* Secondary CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/search">
            <Button 
              variant="ghost" 
              className="text-soft-charcoal hover:text-terracotta hover:bg-terracotta/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Browse Freelancers
            </Button>
          </Link>
          
          <Link to="/jobs">
            <Button 
              variant="ghost" 
              className="text-soft-charcoal hover:text-terracotta hover:bg-terracotta/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Explore Jobs
            </Button>
          </Link>
          
          <Link to="/how-it-works">
            <Button 
              variant="ghost" 
              className="text-soft-charcoal hover:text-terracotta hover:bg-terracotta/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              How It Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnhancedCTAs;
