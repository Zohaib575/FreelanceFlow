
import { CheckCircle, UserPlus, Search, MessageSquare, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const freelancerSteps = [
    {
      icon: <UserPlus className="h-8 w-8 text-blue-600" />,
      title: "Sign Up & Create Profile",
      description: "Create your account and build a compelling profile showcasing your skills and experience."
    },
    {
      icon: <Search className="h-8 w-8 text-purple-600" />,
      title: "Browse & Apply to Jobs",
      description: "Search through thousands of projects and submit proposals for jobs that match your expertise."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: "Collaborate & Deliver",
      description: "Work closely with clients through our platform and deliver high-quality results."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Get Paid & Build Reputation",
      description: "Receive secure payments and build your reputation with positive reviews."
    }
  ];

  const clientSteps = [
    {
      icon: <UserPlus className="h-8 w-8 text-blue-600" />,
      title: "Create Your Account",
      description: "Sign up and tell us about your business and project requirements."
    },
    {
      icon: <Search className="h-8 w-8 text-purple-600" />,
      title: "Post Jobs & Find Talent",
      description: "Post your project details and browse through qualified freelancers."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: "Manage Your Project",
      description: "Communicate with freelancers and track project progress in real-time."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Review & Pay",
      description: "Review completed work and make secure payments through our platform."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            How FreelanceFlow Works
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Simple, secure, and efficient. Connect with talent or find your next opportunity in just a few steps.
          </p>
        </div>
      </section>

      {/* For Freelancers */}
      <section className="py-20 bg-white/50" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">For Freelancers</h2>
            <p className="text-xl text-gray-600">Start earning with your skills in 4 simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {freelancerSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">{step.icon}</div>
                  <div className="text-2xl font-bold text-blue-600 mb-3">{index + 1}</div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/auth/register">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3">
                Start as Freelancer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* For Clients */}
      <section className="py-20" data-aos="fade-up" data-aos-delay="400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">For Clients</h2>
            <p className="text-xl text-gray-600">Get your projects done by top talent</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">{step.icon}</div>
                  <div className="text-2xl font-bold text-purple-600 mb-3">{index + 1}</div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/jobs/create">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3">
                Post Your First Job
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
