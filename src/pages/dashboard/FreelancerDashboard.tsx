
import { TrendingUp, Briefcase, DollarSign, Star, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FreelancerDashboard = () => {
  const stats = [
    {
      title: "Active Projects",
      value: "5",
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      change: "+2 this month"
    },
    {
      title: "Total Earnings",
      value: "$12,450",
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      change: "+15% this month"
    },
    {
      title: "Success Rate",
      value: "94%",
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      change: "+2% this month"
    },
    {
      title: "Client Rating",
      value: "4.9",
      icon: <Star className="h-6 w-6 text-terracotta" />,
      change: "Excellent"
    }
  ];

  const activeProjects = [
    {
      id: 1,
      title: "E-commerce Website Design",
      client: "TechCorp Inc.",
      deadline: "March 25, 2024",
      progress: 75,
      budget: "$2,500"
    },
    {
      id: 2,
      title: "Mobile App Development",
      client: "StartupXYZ",
      deadline: "April 10, 2024",
      progress: 45,
      budget: "$5,000"
    },
    {
      id: 3,
      title: "Brand Identity Package",
      client: "Creative Agency",
      deadline: "March 30, 2024",
      progress: 90,
      budget: "$1,800"
    }
  ];

  const recentBids = [
    {
      id: 1,
      jobTitle: "WordPress Plugin Development",
      bidAmount: "$800",
      status: "Pending",
      submittedDate: "2 days ago"
    },
    {
      id: 2,
      jobTitle: "Social Media Graphics Design",
      bidAmount: "$450",
      status: "Accepted",
      submittedDate: "5 days ago"
    },
    {
      id: 3,
      jobTitle: "Data Entry Project",
      bidAmount: "$200",
      status: "Rejected",
      submittedDate: "1 week ago"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Dashboard Header Section */}
      <section className="pt-20 pb-8" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Freelancer Dashboard</h1>
              <p className="text-xl text-gray-600 mt-2">Welcome back! Here's your performance overview.</p>
            </div>
            <Link to="/jobs">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Browse Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600">{stat.change}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-full">
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Active Projects */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Active Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeProjects.map((project) => (
                  <div key={project.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{project.title}</h3>
                      <span className="text-sm font-medium text-green-600">{project.budget}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Client: {project.client}</p>
                    <div className="flex items-center mb-2">
                      <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-sm text-gray-600">Due: {project.deadline}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{project.progress}% Complete</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Bids */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Recent Bids
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentBids.map((bid) => (
                  <div key={bid.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{bid.jobTitle}</h3>
                      <span className="text-sm font-medium text-blue-600">{bid.bidAmount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{bid.submittedDate}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        bid.status === 'Accepted' ? 'bg-green-100 text-green-800' :
                        bid.status === 'Pending' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {bid.status}
                      </span>
                    </div>
                  </div>
                ))}
                <Link to="/bids/my-bids">
                  <Button variant="outline" className="w-full">
                    View All Bids
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreelancerDashboard;
