
import { useState } from "react";
import { 
  Briefcase, Users, DollarSign, TrendingUp, Clock, MessageSquare, 
  Calendar, Star, Filter, Search, MoreHorizontal, Eye, 
  Award, CheckCircle, AlertCircle, Activity, Target,
  BarChart3, PieChart, LineChart, ArrowUpRight, ArrowDownRight,
  Bell, Settings, ChevronDown, Plus, Zap, Globe, Send,
  FileText, Download, UserPlus, CreditCard
} from "lucide-react";
import PostUrgentJob from "@/components/common/PostUrgentJob";
import InviteFreelancer from "@/components/common/InviteFreelancer";
import InviteJobProposal from '@/components/common/InviteJobProposal';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ClientDashboard = () => {
  const [showPostUrgentJob, setShowPostUrgentJob] = useState(false);
  const [showInviteFreelancer, setShowInviteFreelancer] = useState(false);
  const [showGenerateReport, setShowGenerateReport] = useState(false);
  const [showAccountSettings, setShowAccountSettings] = useState(false);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteFreelancer, setInviteFreelancer] = useState(null);
  const stats = [
    {
      title: "Active Projects",
      value: "12",
      icon: <Briefcase className="h-8 w-8" />,
      change: "+3 this month",
      changeType: "positive",
      description: "Currently in progress",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Total Freelancers",
      value: "47",
      icon: <Users className="h-8 w-8" />,
      change: "+8 this week",
      changeType: "positive", 
      description: "In your network",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Total Investment",
      value: "$127,450",
      icon: <DollarSign className="h-8 w-8" />,
      change: "+22% this month",
      changeType: "positive",
      description: "Lifetime spending",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Success Rate",
      value: "98.2%",
      icon: <Target className="h-8 w-8" />,
      change: "+2.1% this quarter",
      changeType: "positive",
      description: "Project completion",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Average Rating",
      value: "4.9",
      icon: <Star className="h-8 w-8" />,
      change: "+0.2 this month",
      changeType: "positive",
      description: "From freelancers",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Response Time",
      value: "2.3h",
      icon: <Clock className="h-8 w-8" />,
      change: "-1.2h improved",
      changeType: "positive",
      description: "Average response",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const activeJobs = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      freelancer: "Sarah Johnson",
      freelancerAvatar: "/api/placeholder/40/40",
      budget: "$8,500",
      spent: "$5,500",
      deadline: "April 25, 2024",
      progress: 72,
      status: "In Progress",
      priority: "High",
      proposals: 24,
      category: "Mobile Development",
      rating: 4.9,
      milestones: { completed: 3, total: 5 },
      lastUpdate: "2 hours ago"
    },
    {
      id: 2,
      title: "Corporate Website Redesign",
      freelancer: "Alex Thompson",
      freelancerAvatar: "/api/placeholder/40/40",
      budget: "$4,200",
      spent: "$3,800",
      deadline: "March 30, 2024",
      progress: 95,
      status: "Review",
      priority: "Medium",
      proposals: 18,
      category: "Web Design",
      rating: 4.8,
      milestones: { completed: 4, total: 4 },
      lastUpdate: "1 day ago"
    },
    {
      id: 3,
      title: "Content Marketing Campaign",
      freelancer: "Emily Rodriguez",
      freelancerAvatar: "/api/placeholder/40/40",
      budget: "$2,800",
      spent: "$1,200",
      deadline: "April 15, 2024",
      progress: 45,
      status: "In Progress",
      priority: "Low",
      proposals: 32,
      category: "Content Writing",
      rating: 4.7,
      milestones: { completed: 2, total: 6 },
      lastUpdate: "5 hours ago"
    },
    {
      id: 4,
      title: "AI Chatbot Integration",
      freelancer: "David Kim",
      freelancerAvatar: "/api/placeholder/40/40",
      budget: "$6,000",
      spent: "$2,400",
      deadline: "May 10, 2024",
      progress: 28,
      status: "In Progress",
      priority: "High",
      proposals: 15,
      category: "AI Development",
      rating: 5.0,
      milestones: { completed: 1, total: 4 },
      lastUpdate: "3 hours ago"
    }
  ];

  const recentProposals = [
    {
      id: 1,
      jobTitle: "Blockchain DApp Development",
      freelancer: "Michael Chen",
      freelancerAvatar: "/api/placeholder/40/40",
      bidAmount: "$12,500",
      originalBudget: "$15,000",
      rating: 4.9,
      completedJobs: 67,
      timeAgo: "30 minutes ago",
      deliveryTime: "6 weeks",
      specialization: "Blockchain Expert",
      verified: true,
      topRated: true,
      hourlyRate: "$85/hr"
    },
    {
      id: 2,
      jobTitle: "Marketing Automation Setup",
      freelancer: "Lisa Park",
      freelancerAvatar: "/api/placeholder/40/40",
      bidAmount: "$2,850",
      originalBudget: "$3,500",
      rating: 4.8,
      completedJobs: 43,
      timeAgo: "2 hours ago",
      deliveryTime: "3 weeks",
      specialization: "Marketing Specialist",
      verified: true,
      topRated: false,
      hourlyRate: "$65/hr"
    },
    {
      id: 3,
      jobTitle: "Cloud Infrastructure Migration",
      freelancer: "Robert Singh",
      freelancerAvatar: "/api/placeholder/40/40",
      bidAmount: "$8,200",
      originalBudget: "$10,000",
      rating: 5.0,
      completedJobs: 89,
      timeAgo: "4 hours ago",
      deliveryTime: "4 weeks",
      specialization: "DevOps Engineer",
      verified: true,
      topRated: true,
      hourlyRate: "$95/hr"
    },
    {
      id: 4,
      jobTitle: "UX/UI Design Overhaul",
      freelancer: "Sophie Williams",
      freelancerAvatar: "/api/placeholder/40/40",
      bidAmount: "$4,750",
      originalBudget: "$6,000",
      rating: 4.9,
      completedJobs: 52,
      timeAgo: "1 day ago",
      deliveryTime: "5 weeks",
      specialization: "UX Designer",
      verified: true,
      topRated: true,
      hourlyRate: "$75/hr"
    }
  ];

  const chartData = [
    { month: "Jan", spent: 8500, projects: 4 },
    { month: "Feb", spent: 12200, projects: 6 },
    { month: "Mar", spent: 15800, projects: 8 },
    { month: "Apr", spent: 18400, projects: 7 },
    { month: "May", spent: 22100, projects: 9 },
    { month: "Jun", spent: 19800, projects: 8 }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "project_completed",
      message: "Website Redesign project completed by Alex Thompson",
      time: "2 hours ago",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />
    },
    {
      id: 2,
      type: "proposal_received",
      message: "New proposal received for Blockchain DApp project",
      time: "4 hours ago",
      icon: <MessageSquare className="h-4 w-4 text-blue-500" />
    },
    {
      id: 3,
      type: "milestone_reached",
      message: "Mobile App Development reached 75% completion",
      time: "1 day ago",
      icon: <Target className="h-4 w-4 text-purple-500" />
    },
    {
      id: 4,
      type: "payment_processed",
      message: "Payment of $3,800 processed to Alex Thompson",
      time: "2 days ago",
      icon: <DollarSign className="h-4 w-4 text-emerald-500" />
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Advanced Dashboard Header */}
      <section className="pt-20 pb-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Dashboard Control Center
                  </h1>
                  <p className="text-xl text-gray-600 mt-1">Advanced project management & talent acquisition hub</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-6">
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  <Globe className="h-4 w-4 mr-1" />
                  47 Active Freelancers
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  <Zap className="h-4 w-4 mr-1" />
                  98.2% Success Rate
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  <Award className="h-4 w-4 mr-1" />
                  Top 5% Client
                </Badge>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <Button 
                  variant="outline" 
                  className="h-12 flex flex-col items-center justify-center space-y-1 hover:shadow-md transition-all duration-200 group"
                  onClick={() => setShowPostUrgentJob(true)}
                >
                  <Zap className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">Urgent Job</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-12 flex flex-col items-center justify-center space-y-1 hover:shadow-md transition-all duration-200 group"
                  onClick={() => setShowInviteFreelancer(true)}
                >
                  <UserPlus className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">Invite Talent</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-12 flex flex-col items-center justify-center space-y-1 hover:shadow-md transition-all duration-200 group"
                  onClick={() => setShowGenerateReport(true)}
                >
                  <Download className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">Reports</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-12 flex flex-col items-center justify-center space-y-1 hover:shadow-md transition-all duration-200 group"
                  onClick={() => setShowAccountSettings(true)}
                >
                  <Settings className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">Settings</span>
                </Button>
              </div>
              
              <Link to="/search">
                <Button variant="outline" className="w-full sm:w-auto">
                  <Search className="h-4 w-4 mr-2" />
                  Find Talent
                </Button>
              </Link>
              
              <Link to="/jobs/create">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Plus className="h-4 w-4 mr-2 relative z-10" />
                  <span className="relative z-10">Post New Job</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Stats Cards */}
      <section className="pb-12" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="relative group overflow-hidden bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <CardContent className="p-6 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} p-3 text-white shadow-lg`}>
                      {stat.icon}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      {stat.changeType === 'positive' ? (
                        <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.description}</p>
                  </div>
                  
                  <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${stat.color} w-3/4 rounded-full`}></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Dashboard Content */}
      <section className="pb-20" data-aos="fade-up" data-aos-delay="400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="proposals">Proposals</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Active Projects */}
                <div className="lg:col-span-2">
                  <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="flex items-center text-xl">
                        <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                        Active Projects
                      </CardTitle>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {activeJobs.slice(0, 3).map((job) => (
                        <div key={job.id} className="group p-4 rounded-xl border bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-md">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={job.freelancerAvatar} />
                                <AvatarFallback>{job.freelancer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {job.title}
                                </h3>
                                <p className="text-sm text-gray-600">by {job.freelancer}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={
                                job.priority === 'High' ? 'destructive' :
                                job.priority === 'Medium' ? 'default' : 'secondary'
                              } className="text-xs">
                                {job.priority}
                              </Badge>
                              <Badge variant="outline" className={`text-xs ${
                                job.status === 'In Progress' ? 'border-blue-200 text-blue-700' :
                                job.status === 'Review' ? 'border-orange-200 text-orange-700' :
                                'border-green-200 text-green-700'
                              }`}>
                                {job.status}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                            <div>
                              <span className="text-gray-600">Budget:</span>
                              <span className="font-medium ml-1">{job.budget}</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Spent:</span>
                              <span className="font-medium ml-1">{job.spent}</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Deadline:</span>
                              <span className="font-medium ml-1">{job.deadline}</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Rating:</span>
                              <span className="font-medium ml-1 flex items-center">
                                <Star className="h-3 w-3 text-amber-400 mr-1 fill-current" />
                                {job.rating}
                              </span>
                            </div>
                          </div>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-medium">{job.progress}%</span>
                            </div>
                            <Progress value={job.progress} className="h-2" />
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>Milestones: {job.milestones.completed}/{job.milestones.total}</span>
                              <span>Updated {job.lastUpdate}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="text-xs">
                              {job.category}
                            </Badge>
                            <div className="flex gap-2">
                              <Button size="sm" variant="ghost" className="h-8 px-3">
                                <MessageSquare className="h-3 w-3 mr-1" />
                                Message
                              </Button>
                              <Button size="sm" variant="ghost" className="h-8 px-3">
                                <Eye className="h-3 w-3 mr-1" />
                                View
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <div>
                  <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl">
                        <Activity className="h-5 w-5 mr-2 text-emerald-600" />
                        Recent Activity
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors">
                          <div className="mt-0.5">
                            {activity.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900 leading-relaxed">
                              {activity.message}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">All Projects</CardTitle>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                      <Link to="/jobs/create">
                        <Button size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          New Project
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {activeJobs.map((job) => (
                      <div key={job.id} className="group p-6 rounded-xl border bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={job.freelancerAvatar} />
                              <AvatarFallback>{job.freelancer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {job.title}
                              </h3>
                              <p className="text-gray-600">by {job.freelancer}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant={job.priority === 'High' ? 'destructive' : job.priority === 'Medium' ? 'default' : 'secondary'}>
                              {job.priority} Priority
                            </Badge>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Message Freelancer</DropdownMenuItem>
                                <DropdownMenuItem>Download Files</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Cancel Project</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <p className="text-xs text-gray-600 mb-1">Budget</p>
                            <p className="font-semibold text-blue-600">{job.budget}</p>
                          </div>
                          <div className="text-center p-3 bg-emerald-50 rounded-lg">
                            <p className="text-xs text-gray-600 mb-1">Spent</p>
                            <p className="font-semibold text-emerald-600">{job.spent}</p>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <p className="text-xs text-gray-600 mb-1">Progress</p>
                            <p className="font-semibold text-purple-600">{job.progress}%</p>
                          </div>
                          <div className="text-center p-3 bg-amber-50 rounded-lg">
                            <p className="text-xs text-gray-600 mb-1">Rating</p>
                            <p className="font-semibold text-amber-600 flex items-center justify-center">
                              <Star className="h-3 w-3 mr-1 fill-current" />
                              {job.rating}
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span>Project Progress</span>
                            <span className="font-medium">{job.progress}%</span>
                          </div>
                          <Progress value={job.progress} className="h-3" />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{job.category}</Badge>
                            <Badge variant="outline">{job.status}</Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Message
                            </Button>
                            <Button size="sm">
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="proposals" className="space-y-6">
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Recent Proposals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {recentProposals.map((proposal) => (
                      <div key={proposal.id} className="group p-6 rounded-xl border bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-14 w-14">
                              <AvatarImage src={proposal.freelancerAvatar} />
                              <AvatarFallback>{proposal.freelancer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {proposal.jobTitle}
                              </h3>
                              <p className="text-gray-600 mb-1">by {proposal.freelancer}</p>
                              <div className="flex items-center gap-2">
                                {proposal.verified && (
                                  <Badge variant="secondary" className="text-xs">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Verified
                                  </Badge>
                                )}
                                {proposal.topRated && (
                                  <Badge variant="default" className="text-xs bg-amber-100 text-amber-800">
                                    <Star className="h-3 w-3 mr-1 fill-current" />
                                    Top Rated
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900 mb-1">{proposal.bidAmount}</div>
                            <div className="text-sm text-gray-500 line-through">{proposal.originalBudget}</div>
                            <div className="text-xs text-green-600 font-medium">
                              {Math.round((1 - parseInt(proposal.bidAmount.replace(/[^\d]/g, '')) / parseInt(proposal.originalBudget.replace(/[^\d]/g, ''))) * 100)}% savings
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-amber-400 fill-current" />
                            <span className="font-medium">{proposal.rating}</span>
                            <span className="text-gray-500">rating</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                            <span className="font-medium">{proposal.completedJobs}</span>
                            <span className="text-gray-500">jobs</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-blue-500" />
                            <span className="font-medium">{proposal.deliveryTime}</span>
                            <span className="text-gray-500">delivery</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-green-500" />
                            <span className="font-medium">{proposal.hourlyRate}</span>
                            <span className="text-gray-500">rate</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{proposal.specialization}</Badge>
                            <span className="text-sm text-gray-500">{proposal.timeAgo}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Message
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-2" />
                              View Profile
                            </Button>
                            <Button 
                              onClick={() => {
                                setInviteFreelancer(proposal);
                                setInviteOpen(true);
                              }}
                              size="sm"
                              className="bg-emerald-600 hover:bg-emerald-700"
                            >
                              Invite to Job
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                      Spending Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                      <p className="text-gray-500">Spending chart visualization would go here</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PieChart className="h-5 w-5 mr-2 text-emerald-600" />
                      Project Categories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg">
                      <p className="text-gray-500">Category breakdown chart would go here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      {showPostUrgentJob && (
        <PostUrgentJob onClose={() => setShowPostUrgentJob(false)} />
      )}
      
      {showInviteFreelancer && (
        <InviteFreelancer onClose={() => setShowInviteFreelancer(false)} />
      )}

      {showGenerateReport && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl animate-scale-in">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Generate Report</h3>
              <p className="text-gray-600">Choose report type to generate</p>
              <div className="space-y-2">
                <Button className="w-full" variant="outline">Project Summary</Button>
                <Button className="w-full" variant="outline">Financial Report</Button>
                <Button className="w-full" variant="outline">Performance Analytics</Button>
              </div>
              <Button variant="outline" onClick={() => setShowGenerateReport(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {showAccountSettings && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl animate-scale-in">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Account Settings</h3>
              <p className="text-gray-600">Manage your account preferences</p>
              <div className="space-y-2">
                <Button className="w-full" variant="outline">Profile Settings</Button>
                <Button className="w-full" variant="outline">Payment Methods</Button>
                <Button className="w-full" variant="outline">Notification Preferences</Button>
                <Button className="w-full" variant="outline">Security Settings</Button>
              </div>
              <Button variant="outline" onClick={() => setShowAccountSettings(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
        <DialogContent className="max-w-2xl">
          {inviteFreelancer && (
            <InviteJobProposal
              freelancer={{
                id: inviteFreelancer.id,
                name: inviteFreelancer.freelancer,
                title: inviteFreelancer.jobTitle,
                avatar: inviteFreelancer.freelancerAvatar,
                hourlyRate: inviteFreelancer.hourlyRate,
                rating: inviteFreelancer.rating,
                skills: inviteFreelancer.specialization,
              }}
              isOpen={inviteOpen}
              onClose={() => setInviteOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClientDashboard;
