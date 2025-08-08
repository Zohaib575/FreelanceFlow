
import { Edit, MapPin, Calendar, Star, Briefcase, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Profile = () => {
  const userProfile = {
    name: "Alex Johnson",
    title: "Full-Stack Developer & UI/UX Designer",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    rating: 4.9,
    completedProjects: 45,
    totalEarnings: "$85,000",
    hourlyRate: "$75",
    bio: "Passionate full-stack developer with 7+ years of experience creating beautiful, functional web applications. I specialize in React, Node.js, and modern design systems. I love turning complex problems into simple, elegant solutions.",
    skills: ["React", "Node.js", "TypeScript", "Python", "UI/UX Design", "PostgreSQL", "AWS", "Docker"],
    languages: ["English (Native)", "Spanish (Fluent)", "French (Conversational)"]
  };

  const portfolio = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern e-commerce solution built with React and Node.js",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      technologies: ["Vue.js", "Express", "Socket.io"]
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Data visualization dashboard for business intelligence",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["React", "D3.js", "Python"]
    }
  ];

  const reviews = [
    {
      id: 1,
      client: "Sarah Wilson",
      project: "Corporate Website Redesign",
      rating: 5,
      comment: "Alex delivered exceptional work on our website redesign. Professional, timely, and exceeded our expectations.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      client: "Mike Chen",
      project: "Mobile App Development",
      rating: 5,
      comment: "Outstanding developer! Great communication throughout the project and delivered exactly what we needed.",
      date: "1 month ago"
    },
    {
      id: 3,
      client: "Emily Rodriguez",
      project: "API Integration",
      rating: 4,
      comment: "Solid work on the API integration. Would definitely work with Alex again on future projects.",
      date: "2 months ago"
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
      
      {/* Profile Header */}
      <section className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <img 
                  src={userProfile.avatar} 
                  alt={userProfile.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">{userProfile.name}</h1>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-terracotta fill-current" />
                      <span className="ml-1 font-medium">{userProfile.rating}</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 mb-2">{userProfile.title}</p>
                  <div className="flex items-center text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{userProfile.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Member since {userProfile.joinDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Link to="/profile/edit">
                    <Button variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </Link>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    View Public Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Profile Stats */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{userProfile.completedProjects}</div>
                <div className="text-gray-600">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{userProfile.totalEarnings}</div>
                <div className="text-gray-600">Total Earnings</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">{userProfile.hourlyRate}</div>
                <div className="text-gray-600">Hourly Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* About */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{userProfile.bio}</p>
                </CardContent>
              </Card>

              {/* Portfolio */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {portfolio.map((item) => (
                      <div key={item.id} className="border rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {item.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Client Reviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b last:border-b-0 pb-6 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{review.client}</h3>
                          <p className="text-sm text-gray-600">{review.project}</p>
                        </div>
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-terracotta fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2">{review.comment}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              
              {/* Skills */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.skills.map((skill) => (
                      <Badge key={skill} className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {userProfile.languages.map((language) => (
                      <div key={language} className="text-gray-700">{language}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* View Public Profile */}
              <Card className="bg-white/80 backdrop-blur-sm overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative">
                  <CardTitle className="flex items-center text-lg">
                    <Eye className="h-5 w-5 mr-2 text-blue-600" />
                    Public Profile Preview
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                    <div className="flex items-center space-x-3 mb-3">
                      <img 
                        src={userProfile.avatar} 
                        alt={userProfile.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-200"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{userProfile.name}</h3>
                        <p className="text-sm text-gray-600">{userProfile.title}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Star className="h-3 w-3 text-amber-400 mr-1 fill-current" />
                          {userProfile.rating} • {userProfile.completedProjects} projects
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {userProfile.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {userProfile.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{userProfile.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-700 line-clamp-2">
                      {userProfile.bio}
                    </p>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200">
                    <Eye className="h-4 w-4 mr-2" />
                    View Full Public Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link to="/jobs">
                    <Button variant="outline" className="w-full justify-start">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Browse Jobs
                    </Button>
                  </Link>
                  <Link to="/bids/my-bids">
                    <Button variant="outline" className="w-full justify-start">
                      <Star className="h-4 w-4 mr-2" />
                      My Proposals
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
