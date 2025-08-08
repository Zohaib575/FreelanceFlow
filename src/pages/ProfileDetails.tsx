
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Calendar, Award, MessageCircle, Heart, Share2, ChevronLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import InviteJobProposal from '@/components/common/InviteJobProposal';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';

const ProfileDetails = () => {
  const { id } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);
  const [inviteOpen, setInviteOpen] = useState(false);

  // Mock data - in real app this would come from API
  const freelancer = {
    id: parseInt(id || "1"),
    name: "Sarah Johnson",
    title: "Senior Full-Stack Developer",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 124,
    hourlyRate: 85,
    responseTime: "Within 1 hour",
    completedJobs: 89,
    totalEarnings: "$127,000",
    memberSince: "2020",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b012c5db?w=200&h=200&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=400&fit=crop",
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "GraphQL", "Docker", "Kubernetes"],
    languages: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Conversational" },
      { name: "French", level: "Basic" }
    ],
    description: `I'm a passionate full-stack developer with 8+ years of experience building scalable web applications. I specialize in modern JavaScript frameworks and cloud technologies.

I've worked with startups and Fortune 500 companies, helping them build robust, user-friendly applications that drive business growth. My expertise includes:

• Frontend development with React, Vue.js, and Angular
• Backend development with Node.js, Python, and Java
• Cloud deployment and DevOps with AWS, Azure, and Docker
• Database design and optimization (SQL and NoSQL)

I'm committed to delivering high-quality code and maintaining excellent communication throughout the project lifecycle.`,
    
    portfolio: [
      {
        id: 1,
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution with React and Node.js",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        projectUrl: "https://example.com"
      },
      {
        id: 2,
        title: "Task Management App",
        description: "Collaborative project management tool with real-time updates",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
        technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
        projectUrl: "https://example.com"
      },
      {
        id: 3,
        title: "Analytics Dashboard",
        description: "Data visualization dashboard for business intelligence",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        technologies: ["React", "D3.js", "Python", "AWS"],
        projectUrl: "https://example.com"
      }
    ],

    clientReviews: [
      {
        id: 1,
        client: "John Smith",
        rating: 5,
        date: "March 2024",
        comment: "Sarah delivered exceptional work on our e-commerce platform. Her attention to detail and technical expertise exceeded our expectations. Highly recommended!",
        project: "E-commerce Platform Development"
      },
      {
        id: 2,
        client: "Tech Startup Inc.",
        rating: 5,
        date: "February 2024",
        comment: "Outstanding developer! Sarah built our MVP from scratch and helped us scale to thousands of users. Great communication and problem-solving skills.",
        project: "MVP Development"
      },
      {
        id: 3,
        client: "Marketing Agency",
        rating: 4,
        date: "January 2024",
        comment: "Very professional and delivered on time. Sarah's code quality is excellent and she provided great documentation.",
        project: "Custom Dashboard"
      }
    ],

    certifications: [
      { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
      { name: "React Advanced Patterns", issuer: "Meta", year: "2022" },
      { name: "Node.js Certification", issuer: "Node.js Foundation", year: "2021" }
    ]
  };

  const similarFreelancers = [
    {
      id: 2,
      name: "Mike Chen",
      title: "Full-Stack Developer",
      rating: 4.8,
      hourlyRate: 75,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Frontend Developer",
      rating: 4.9,
      hourlyRate: 70,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-white via-cloud-grey to-ash-grey">
      <Header />
      
      {/* Cover Image */}
      <div className="relative h-64 md:h-80">
        <img 
          src={freelancer.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Back Button */}
        <Link to="/search" className="absolute top-4 left-4 z-10">
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Search
          </Button>
        </Link>
      </div>

      {/* Profile Header */}
      <div className="relative px-4 sm:px-6 lg:px-8 -mt-20 z-10">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <img 
                  src={freelancer.avatar}
                  alt={freelancer.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-3xl font-bold text-charcoal-black">{freelancer.name}</h1>
                    <CheckCircle className="h-6 w-6 text-primary-blue" />
                  </div>
                  <p className="text-xl text-soft-slate mb-2">{freelancer.title}</p>
                  <div className="flex items-center text-stone-grey mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{freelancer.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-terracotta fill-current mr-1" />
                      <span className="font-semibold">{freelancer.rating}</span>
                      <span className="text-stone-grey ml-1">({freelancer.clientReviews.length} reviews)</span>
                    </div>
                    <span>{freelancer.completedJobs} jobs completed</span>
                    <span>Member since {freelancer.memberSince}</span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-charcoal-black">${freelancer.hourlyRate}</div>
                    <div className="text-sm text-soft-slate">per hour</div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setIsFollowing(!isFollowing)}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${isFollowing ? 'fill-current text-error-red' : ''}`} />
                      {isFollowing ? 'Following' : 'Follow'}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                  
                  <Button className="bg-primary-blue hover:bg-steel-blue text-white px-8">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full mt-2" onClick={() => setInviteOpen(true)}>
                        Invite to Job
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <InviteJobProposal 
                        freelancer={{
                          id: freelancer.id,
                          name: freelancer.name,
                          title: freelancer.title,
                          avatar: freelancer.avatar,
                          hourlyRate: freelancer.hourlyRate,
                          rating: freelancer.rating,
                          skills: freelancer.skills,
                        }}
                        isOpen={inviteOpen}
                        onClose={() => setInviteOpen(false)}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="certifications">Certs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="whitespace-pre-line text-soft-slate leading-relaxed">
                      {freelancer.description}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {freelancer.portfolio.map((project) => (
                    <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                        <p className="text-soft-slate text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          View Project
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  {freelancer.clientReviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-semibold">{review.client}</h4>
                            <p className="text-sm text-stone-grey">{review.project}</p>
                          </div>
                          <div className="flex items-center">
                            <div className="flex mr-2">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < review.rating ? 'text-terracotta fill-current' : 'text-ash-grey'}`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-stone-grey">{review.date}</span>
                          </div>
                        </div>
                        <p className="text-soft-slate">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="certifications" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {freelancer.certifications.map((cert, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <Award className="h-5 w-5 text-terracotta mr-2" />
                          <h4 className="font-semibold">{cert.name}</h4>
                        </div>
                        <p className="text-sm text-soft-slate">{cert.issuer}</p>
                        <p className="text-sm text-stone-grey">{cert.year}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-soft-slate">Response Time</span>
                  <span className="font-semibold">{freelancer.responseTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-soft-slate">Total Earnings</span>
                  <span className="font-semibold">{freelancer.totalEarnings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-soft-slate">Success Rate</span>
                  <span className="font-semibold">98%</span>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {freelancer.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {freelancer.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{lang.name}</span>
                    <span className="text-soft-slate text-sm">{lang.level}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Similar Freelancers */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Freelancers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {similarFreelancers.map((freelancer) => (
                  <Link key={freelancer.id} to={`/profile/${freelancer.id}`} className="block">
                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cloud-grey transition-colors">
                      <img 
                        src={freelancer.avatar}
                        alt={freelancer.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{freelancer.name}</h4>
                        <p className="text-xs text-soft-slate">{freelancer.title}</p>
                        <div className="flex items-center mt-1">
                          <Star className="h-3 w-3 text-terracotta fill-current mr-1" />
                          <span className="text-xs">{freelancer.rating}</span>
                          <span className="text-xs text-stone-grey ml-2">${freelancer.hourlyRate}/hr</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfileDetails;
