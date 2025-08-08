import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, DollarSign, Star, Bookmark, BookmarkCheck, MessageSquare, Share2, Flag, Upload, FileText, Phone, Mail, ExternalLink, Send, Paperclip, Smile, MoreVertical, Calendar, Globe, Github, Linkedin, Video, Award, Languages, User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const JobDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isSaved, setIsSaved] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [formData, setFormData] = useState({
    coverLetter: "",
    bidAmount: "",
    deliveryTime: "",
    milestones: "",
    attachments: [] as File[],
    portfolioLinks: "",
    availability: "",
    timezone: "",
    experience: "",
    languages: [] as string[],
    certifications: "",
    questionnaire: {} as Record<string, string>
  });
  const [contactData, setContactData] = useState({
    subject: "",
    message: "",
    contactMethod: "email"
  });
  const [chatMessage, setChatMessage] = useState("");

  // Mock job data - in real app, fetch based on ID
  const job = {
    id: id || '1',
    title: 'Full-Stack Web Developer for E-commerce Platform',
    description: 'Looking for an experienced full-stack developer to build a modern e-commerce platform with React, Node.js, and PostgreSQL. The project involves creating a scalable marketplace with user authentication, payment processing, and admin dashboard.',
    longDescription: `We are seeking a talented full-stack developer to join our team for an exciting e-commerce project. This is a comprehensive platform that will serve as a marketplace connecting buyers and sellers.

    Key Requirements:
    • 5+ years of experience in full-stack development
    • Proficiency in React.js and modern JavaScript frameworks
    • Strong backend skills with Node.js and Express
    • Database design experience with PostgreSQL
    • Experience with payment gateway integrations (Stripe, PayPal)
    • Knowledge of AWS or similar cloud platforms
    • Understanding of responsive design principles
    • Experience with version control (Git)

    Project Scope:
    • User registration and authentication system
    • Product catalog with search and filtering
    • Shopping cart and checkout process
    • Payment processing integration
    • Order management system
    • Admin dashboard for inventory management
    • Mobile-responsive design
    • Performance optimization

    What We Offer:
    • Competitive compensation
    • Flexible working hours
    • Opportunity to work with cutting-edge technologies
    • Long-term collaboration potential
    • Professional growth opportunities`,
    budget: '$5,000 - $8,000',
    duration: '2-3 months',
    location: 'Remote',
    postedTime: '2 hours ago',
    skills: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'AWS', 'Stripe'],
    client: {
      name: 'TechStartup Inc.',
      rating: 4.8,
      jobsPosted: 23,
      totalSpent: '$45,000',
      memberSince: 'March 2020',
      verified: true,
      location: 'San Francisco, CA',
      avatar: '/placeholder.svg'
    },
    proposals: 12,
    interviews: 3,
    hired: 0,
    category: 'Web Development',
    urgency: 'Medium',
    experience: 'Expert',
    paymentVerified: true
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Your proposal has been sent to the client.",
    });
    setShowApplyModal(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Your message has been sent to the client.",
    });
    setShowContactModal(false);
    setContactData({ subject: "", message: "", contactMethod: "email" });
  };

  const handleChatSend = () => {
    if (chatMessage.trim()) {
      toast({
        title: "Message Sent",
        description: "Your message has been delivered.",
      });
      setChatMessage("");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-20 pb-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link to="/jobs">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Jobs
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Job Header */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h1 className="text-3xl font-bold text-foreground mb-2">{job.title}</h1>
                      <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                        <span>Posted {job.postedTime}</span>
                        <span>•</span>
                        <span>{job.proposals} proposals</span>
                        <span>•</span>
                        <span className="text-primary">{job.category}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={toggleSave}>
                        {isSaved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Flag className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Budget</p>
                        <p className="font-semibold">{job.budget}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-semibold">{job.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-semibold">{job.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Experience</p>
                        <p className="font-semibold">{job.experience}</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Required Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job Description Tabs */}
              <Card>
                <CardContent className="p-6">
                  <Tabs defaultValue="description" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="description">Description</TabsTrigger>
                      <TabsTrigger value="activity">Activity</TabsTrigger>
                      <TabsTrigger value="proposals">Proposals ({job.proposals})</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="description" className="mt-6">
                      <div className="prose max-w-none">
                        <h3 className="text-lg font-semibold mb-4">Project Description</h3>
                        <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                          {job.longDescription}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="activity" className="mt-6">
                      <div className="space-y-4">
                        <div className="border-l-2 border-primary pl-4">
                          <p className="font-medium">Job posted</p>
                          <p className="text-sm text-muted-foreground">{job.postedTime}</p>
                        </div>
                        <div className="border-l-2 border-muted pl-4">
                          <p className="font-medium">{job.proposals} proposals received</p>
                          <p className="text-sm text-muted-foreground">2 hours ago</p>
                        </div>
                        <div className="border-l-2 border-muted pl-4">
                          <p className="font-medium">{job.interviews} interviews scheduled</p>
                          <p className="text-sm text-muted-foreground">1 hour ago</p>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="proposals" className="mt-6">
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">Proposal details are visible to the client only</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Section */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Dialog open={showApplyModal} onOpenChange={setShowApplyModal}>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                          Apply for this Job
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl flex items-center gap-2">
                            <Award className="h-6 w-6 text-primary" />
                            Submit Your Advanced Proposal
                          </DialogTitle>
                          <p className="text-muted-foreground">Apply for: {job.title}</p>
                        </DialogHeader>
                        
                        <Tabs defaultValue="basic" className="mt-6">
                          <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="basic">Basic Info</TabsTrigger>
                            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="questions">Questions</TabsTrigger>
                          </TabsList>
                          
                          <form onSubmit={handleApplySubmit} className="mt-6">
                            <TabsContent value="basic" className="space-y-6">
                              {/* Cover Letter */}
                              <div className="space-y-2">
                                <Label htmlFor="coverLetter" className="text-base font-medium">
                                  Cover Letter *
                                </Label>
                                <Textarea
                                  id="coverLetter"
                                  placeholder="Introduce yourself and explain why you're the perfect fit for this project..."
                                  className="min-h-[120px] resize-none"
                                  value={formData.coverLetter}
                                  onChange={(e) => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
                                  required
                                />
                              </div>

                              {/* Bid Amount and Delivery Time */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="bidAmount" className="text-base font-medium">
                                    Your Bid Amount *
                                  </Label>
                                  <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                      id="bidAmount"
                                      type="number"
                                      placeholder="5000"
                                      className="pl-10"
                                      value={formData.bidAmount}
                                      onChange={(e) => setFormData(prev => ({ ...prev, bidAmount: e.target.value }))}
                                      required
                                    />
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="deliveryTime" className="text-base font-medium">
                                    Delivery Time *
                                  </Label>
                                  <div className="relative">
                                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                      id="deliveryTime"
                                      placeholder="e.g., 30 days"
                                      className="pl-10"
                                      value={formData.deliveryTime}
                                      onChange={(e) => setFormData(prev => ({ ...prev, deliveryTime: e.target.value }))}
                                      required
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Availability and Timezone */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="availability" className="text-base font-medium">
                                    Availability
                                  </Label>
                                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, availability: value }))}>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select availability" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="full-time">Full Time (40+ hrs/week)</SelectItem>
                                      <SelectItem value="part-time">Part Time (20-30 hrs/week)</SelectItem>
                                      <SelectItem value="limited">Limited (10-20 hrs/week)</SelectItem>
                                      <SelectItem value="weekends">Weekends Only</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="timezone" className="text-base font-medium">
                                    Timezone
                                  </Label>
                                  <Input
                                    id="timezone"
                                    placeholder="e.g., PST, EST, UTC+5"
                                    value={formData.timezone}
                                    onChange={(e) => setFormData(prev => ({ ...prev, timezone: e.target.value }))}
                                  />
                                </div>
                              </div>

                              {/* Payment Structure */}
                              <div className="space-y-3">
                                <Label className="text-base font-medium">Preferred Payment Structure</Label>
                                <RadioGroup defaultValue="milestone">
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="milestone" id="milestone" />
                                    <Label htmlFor="milestone">Milestone-based payments</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="completion" id="completion" />
                                    <Label htmlFor="completion">Payment on completion</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="hourly" id="hourly" />
                                    <Label htmlFor="hourly">Hourly rate</Label>
                                  </div>
                                </RadioGroup>
                              </div>
                            </TabsContent>

                            <TabsContent value="portfolio" className="space-y-6">
                              {/* Portfolio Links */}
                              <div className="space-y-2">
                                <Label htmlFor="portfolioLinks" className="text-base font-medium">
                                  Portfolio Links
                                </Label>
                                <Textarea
                                  id="portfolioLinks"
                                  placeholder="Add links to your portfolio, GitHub, LinkedIn, or relevant work samples (one per line)"
                                  className="min-h-[100px] resize-none"
                                  value={formData.portfolioLinks}
                                  onChange={(e) => setFormData(prev => ({ ...prev, portfolioLinks: e.target.value }))}
                                />
                              </div>

                              {/* File Attachments */}
                              <div className="space-y-3">
                                <Label className="text-base font-medium">Attachments & Samples</Label>
                                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                                  <Upload className="h-8 w-8 mx-auto mb-3 text-muted-foreground" />
                                  <p className="text-sm text-muted-foreground mb-3">
                                    Upload portfolio samples, resume, or relevant documents
                                  </p>
                                  <p className="text-xs text-muted-foreground mb-3">
                                    Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB each)
                                  </p>
                                  <Input
                                    type="file"
                                    multiple
                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                    onChange={handleFileUpload}
                                    className="max-w-xs mx-auto"
                                  />
                                </div>
                                {formData.attachments.length > 0 && (
                                  <div className="space-y-2">
                                    {formData.attachments.map((file, index) => (
                                      <div key={index} className="flex items-center space-x-2 text-sm">
                                        <FileText className="h-4 w-4 text-primary" />
                                        <span>{file.name}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </TabsContent>

                            <TabsContent value="experience" className="space-y-6">
                              {/* Years of Experience */}
                              <div className="space-y-2">
                                <Label htmlFor="experience" className="text-base font-medium">
                                  Years of Experience in {job.category}
                                </Label>
                                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select experience level" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                                    <SelectItem value="intermediate">Intermediate (3-5 years)</SelectItem>
                                    <SelectItem value="expert">Expert (5+ years)</SelectItem>
                                    <SelectItem value="lead">Senior/Lead (8+ years)</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              {/* Languages */}
                              <div className="space-y-2">
                                <Label className="text-base font-medium">Languages</Label>
                                <div className="grid grid-cols-2 gap-4">
                                  {['English', 'Spanish', 'French', 'German', 'Mandarin', 'Japanese'].map((lang) => (
                                    <div key={lang} className="flex items-center space-x-2">
                                      <Checkbox 
                                        id={lang}
                                        onCheckedChange={(checked) => {
                                          if (checked) {
                                            setFormData(prev => ({ 
                                              ...prev, 
                                              languages: [...prev.languages, lang] 
                                            }));
                                          } else {
                                            setFormData(prev => ({ 
                                              ...prev, 
                                              languages: prev.languages.filter(l => l !== lang) 
                                            }));
                                          }
                                        }}
                                      />
                                      <Label htmlFor={lang} className="text-sm">{lang}</Label>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Certifications */}
                              <div className="space-y-2">
                                <Label htmlFor="certifications" className="text-base font-medium">
                                  Relevant Certifications
                                </Label>
                                <Textarea
                                  id="certifications"
                                  placeholder="List any relevant certifications, courses, or qualifications..."
                                  className="min-h-[80px] resize-none"
                                  value={formData.certifications}
                                  onChange={(e) => setFormData(prev => ({ ...prev, certifications: e.target.value }))}
                                />
                              </div>

                              {/* Project Approach */}
                              <div className="space-y-2">
                                <Label htmlFor="milestones" className="text-base font-medium">
                                  Project Approach & Milestones
                                </Label>
                                <Textarea
                                  id="milestones"
                                  placeholder="Describe your approach, methodology, and key project milestones..."
                                  className="min-h-[120px] resize-none"
                                  value={formData.milestones}
                                  onChange={(e) => setFormData(prev => ({ ...prev, milestones: e.target.value }))}
                                />
                              </div>
                            </TabsContent>

                            <TabsContent value="questions" className="space-y-6">
                              {/* Custom Questions */}
                              <div className="space-y-4">
                                <h3 className="text-lg font-medium">Client Questions</h3>
                                
                                <div className="space-y-2">
                                  <Label className="text-base font-medium">
                                    How would you handle version control for this project?
                                  </Label>
                                  <Textarea
                                    placeholder="Explain your version control strategy..."
                                    className="min-h-[80px] resize-none"
                                    onChange={(e) => setFormData(prev => ({ 
                                      ...prev, 
                                      questionnaire: { ...prev.questionnaire, versionControl: e.target.value }
                                    }))}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label className="text-base font-medium">
                                    What testing approach would you recommend?
                                  </Label>
                                  <Textarea
                                    placeholder="Describe your testing methodology..."
                                    className="min-h-[80px] resize-none"
                                    onChange={(e) => setFormData(prev => ({ 
                                      ...prev, 
                                      questionnaire: { ...prev.questionnaire, testing: e.target.value }
                                    }))}
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label className="text-base font-medium">
                                    How would you ensure the project stays on schedule?
                                  </Label>
                                  <Textarea
                                    placeholder="Explain your project management approach..."
                                    className="min-h-[80px] resize-none"
                                    onChange={(e) => setFormData(prev => ({ 
                                      ...prev, 
                                      questionnaire: { ...prev.questionnaire, schedule: e.target.value }
                                    }))}
                                  />
                                </div>
                              </div>
                            </TabsContent>

                            {/* Terms Agreement */}
                            <div className="flex items-center space-x-2 mt-6">
                              <Checkbox id="terms" required />
                              <Label htmlFor="terms" className="text-sm">
                                I agree to the terms of service and understand that this proposal is binding
                              </Label>
                            </div>

                            {/* Submit Buttons */}
                            <div className="flex justify-end space-x-3 pt-4 border-t">
                              <Button type="button" variant="outline" onClick={() => setShowApplyModal(false)}>
                                Cancel
                              </Button>
                              <Button type="submit" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700">
                                Submit Proposal
                              </Button>
                            </div>
                          </form>
                        </Tabs>
                      </DialogContent>
                    </Dialog>
                    
                    {/* Contact Modal */}
                    <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Contact Client
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <Mail className="h-5 w-5 text-primary" />
                            Contact Client
                          </DialogTitle>
                          <p className="text-muted-foreground">Send a message to {job.client.name}</p>
                        </DialogHeader>
                        <form onSubmit={handleContactSubmit} className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <Label>Contact Method</Label>
                            <RadioGroup value={contactData.contactMethod} onValueChange={(value) => setContactData(prev => ({ ...prev, contactMethod: value }))}>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="email" id="email" />
                                <Label htmlFor="email" className="flex items-center gap-2">
                                  <Mail className="h-4 w-4" />
                                  Email
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="phone" id="phone" />
                                <Label htmlFor="phone" className="flex items-center gap-2">
                                  <Phone className="h-4 w-4" />
                                  Phone Call
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="video" id="video" />
                                <Label htmlFor="video" className="flex items-center gap-2">
                                  <Video className="h-4 w-4" />
                                  Video Call
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                              id="subject"
                              placeholder="Enter subject..."
                              value={contactData.subject}
                              onChange={(e) => setContactData(prev => ({ ...prev, subject: e.target.value }))}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                              id="message"
                              placeholder="Enter your message..."
                              className="min-h-[120px] resize-none"
                              value={contactData.message}
                              onChange={(e) => setContactData(prev => ({ ...prev, message: e.target.value }))}
                              required
                            />
                          </div>

                          <div className="flex justify-end space-x-3 pt-4">
                            <Button type="button" variant="outline" onClick={() => setShowContactModal(false)}>
                              Cancel
                            </Button>
                            <Button type="submit">
                              Send Message
                            </Button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>

                    {/* Chat Modal */}
                    <Dialog open={showChatModal} onOpenChange={setShowChatModal}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full mt-2">
                          <Users className="h-4 w-4 mr-2" />
                          Live Chat
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[80vh]">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <MessageSquare className="h-5 w-5 text-primary" />
                            Chat with {job.client.name}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="flex flex-col h-[60vh]">
                          {/* Chat Header */}
                          <div className="flex items-center justify-between p-3 border-b">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={job.client.avatar} />
                                <AvatarFallback>{job.client.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium text-sm">{job.client.name}</p>
                                <p className="text-xs text-green-600">Online</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Chat Messages */}
                          <ScrollArea className="flex-1 p-4">
                            <div className="space-y-4">
                              <div className="flex items-start gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={job.client.avatar} />
                                  <AvatarFallback>{job.client.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="bg-muted p-3 rounded-lg">
                                    <p className="text-sm">Hi! Thanks for your interest in this project. I'd love to discuss the requirements with you.</p>
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 justify-end">
                                <div className="flex-1 text-right">
                                  <div className="bg-primary text-primary-foreground p-3 rounded-lg inline-block">
                                    <p className="text-sm">Hello! I'm very interested in working on your e-commerce platform. I have 5+ years of experience with React and Node.js.</p>
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-1">1 minute ago</p>
                                </div>
                                <Avatar className="h-8 w-8">
                                  <AvatarFallback>Me</AvatarFallback>
                                </Avatar>
                              </div>

                              <div className="flex items-start gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={job.client.avatar} />
                                  <AvatarFallback>{job.client.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="bg-muted p-3 rounded-lg">
                                    <p className="text-sm">That's great! Could you share some examples of similar projects you've worked on?</p>
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-1">Just now</p>
                                </div>
                              </div>
                            </div>
                          </ScrollArea>

                          {/* Chat Input */}
                          <div className="border-t p-4">
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                <Paperclip className="h-4 w-4" />
                              </Button>
                              <Input
                                placeholder="Type a message..."
                                value={chatMessage}
                                onChange={(e) => setChatMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                                className="flex-1"
                              />
                              <Button variant="outline" size="sm">
                                <Smile className="h-4 w-4" />
                              </Button>
                              <Button onClick={handleChatSend} size="sm">
                                <Send className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <section className="py-8" data-aos="fade-up" data-aos-delay="200">
                    <div className="mt-6 pt-6 border-t space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Proposals</span>
                        <span className="font-medium">{job.proposals}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Interviews</span>
                        <span className="font-medium">{job.interviews}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Hired</span>
                        <span className="font-medium">{job.hired}</span>
                      </div>
                    </div>
                  </section>
                </CardContent>
              </Card>

              {/* Client Information */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">About the Client</h3>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary">{job.client.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{job.client.name}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-3 w-3 mr-1 text-terracotta fill-current" />
                        {job.client.rating} • {job.client.location}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Jobs Posted</span>
                      <span className="font-medium">{job.client.jobsPosted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Spent</span>
                      <span className="font-medium">{job.client.totalSpent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Member Since</span>
                      <span className="font-medium">{job.client.memberSince}</span>
                    </div>
                  </div>

                  {job.client.verified && (
                    <Badge className="mt-4 bg-green-100 text-green-800 border-green-200">
                      Verified Client
                    </Badge>
                  )}
                </CardContent>
              </Card>

              {/* Similar Jobs */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Similar Jobs</h3>
                  <div className="space-y-3">
                    {[
                      { title: "React Developer Needed", budget: "$3,000" },
                      { title: "E-commerce Website", budget: "$4,500" },
                      { title: "Full Stack Development", budget: "$6,000" }
                    ].map((similarJob, index) => (
                      <div key={index} className="border-b pb-3 last:border-b-0">
                        <h4 className="font-medium text-sm hover:text-primary cursor-pointer">
                          {similarJob.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{similarJob.budget}</p>
                      </div>
                    ))}
                  </div>
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

export default JobDetails;