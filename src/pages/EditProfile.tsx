import React, { useState } from "react";
import { 
  ArrowLeft, Plus, X, Edit2, Save, Eye, MapPin, Calendar, 
  Star, Upload, Trash2, GripVertical, Camera, Globe,
  User, Briefcase, Award, MessageSquare, BookOpen, Languages,
  Phone, Mail, Link2, Github, Linkedin, Twitter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const EditProfile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  
  // Profile state
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    title: "Full-Stack Developer & UI/UX Designer",
    location: "San Francisco, CA",
    phone: "+1 (555) 123-4567",
    email: "alex.johnson@email.com",
    website: "alexjohnson.dev",
    bio: "Passionate full-stack developer with 7+ years of experience creating beautiful, functional web applications. I specialize in React, Node.js, and modern design systems. I love turning complex problems into simple, elegant solutions.",
    hourlyRate: "75",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=400&fit=crop"
  });

  const [skills, setSkills] = useState([
    { id: 1, name: "React", level: "Expert" },
    { id: 2, name: "Node.js", level: "Expert" },
    { id: 3, name: "TypeScript", level: "Advanced" },
    { id: 4, name: "Python", level: "Intermediate" },
    { id: 5, name: "UI/UX Design", level: "Advanced" },
    { id: 6, name: "PostgreSQL", level: "Advanced" },
    { id: 7, name: "AWS", level: "Intermediate" },
    { id: 8, name: "Docker", level: "Intermediate" }
  ]);

  const [languages, setLanguages] = useState([
    { id: 1, name: "English", level: "Native" },
    { id: 2, name: "Spanish", level: "Fluent" },
    { id: 3, name: "French", level: "Conversational" }
  ]);

  const [portfolio, setPortfolio] = useState([
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern e-commerce solution built with React and Node.js",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      url: "https://example.com",
      technologies: ["React", "Node.js", "MongoDB"],
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      url: "https://example.com",
      technologies: ["Vue.js", "Express", "Socket.io"],
      featured: false
    }
  ]);

  const [certifications, setCertifications] = useState([
    { id: 1, name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
    { id: 2, name: "React Professional Certification", issuer: "Meta", year: "2022" }
  ]);

  const [socialLinks, setSocialLinks] = useState([
    { id: 1, platform: "GitHub", url: "https://github.com/alexjohnson", icon: Github },
    { id: 2, platform: "LinkedIn", url: "https://linkedin.com/in/alexjohnson", icon: Linkedin },
    { id: 3, platform: "Twitter", url: "https://twitter.com/alexjohnson", icon: Twitter }
  ]);

  const [newSkill, setNewSkill] = useState({ name: "", level: "Beginner" });
  const [newLanguage, setNewLanguage] = useState({ name: "", level: "Beginner" });
  const [newCertification, setNewCertification] = useState({ name: "", issuer: "", year: "" });
  const [newSocialLink, setNewSocialLink] = useState({ platform: "", url: "" });

  // Add/Edit/Delete functions
  const addSkill = () => {
    if (newSkill.name.trim()) {
      setSkills([...skills, { 
        id: Date.now(), 
        name: newSkill.name.trim(), 
        level: newSkill.level 
      }]);
      setNewSkill({ name: "", level: "Beginner" });
    }
  };

  const deleteSkill = (id: number) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const addLanguage = () => {
    if (newLanguage.name.trim()) {
      setLanguages([...languages, { 
        id: Date.now(), 
        name: newLanguage.name.trim(), 
        level: newLanguage.level 
      }]);
      setNewLanguage({ name: "", level: "Beginner" });
    }
  };

  const deleteLanguage = (id: number) => {
    setLanguages(languages.filter(lang => lang.id !== id));
  };

  const addCertification = () => {
    if (newCertification.name.trim()) {
      setCertifications([...certifications, { 
        id: Date.now(), 
        name: newCertification.name.trim(),
        issuer: newCertification.issuer.trim(),
        year: newCertification.year 
      }]);
      setNewCertification({ name: "", issuer: "", year: "" });
    }
  };

  const deleteCertification = (id: number) => {
    setCertifications(certifications.filter(cert => cert.id !== id));
  };

  const addSocialLink = () => {
    if (newSocialLink.platform.trim() && newSocialLink.url.trim()) {
      const getIcon = (platform: string) => {
        switch (platform.toLowerCase()) {
          case 'github': return Github;
          case 'linkedin': return Linkedin;
          case 'twitter': return Twitter;
          default: return Link2;
        }
      };

      setSocialLinks([...socialLinks, { 
        id: Date.now(), 
        platform: newSocialLink.platform.trim(),
        url: newSocialLink.url.trim(),
        icon: getIcon(newSocialLink.platform)
      }]);
      setNewSocialLink({ platform: "", url: "" });
    }
  };

  const deleteSocialLink = (id: number) => {
    setSocialLinks(socialLinks.filter(link => link.id !== id));
  };

  const deletePortfolioItem = (id: number) => {
    setPortfolio(portfolio.filter(item => item.id !== id));
  };

  const togglePortfolioFeatured = (id: number) => {
    setPortfolio(portfolio.map(item => 
      item.id === id ? { ...item, featured: !item.featured } : item
    ));
  };

  const PublicProfilePreview = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Cover Image */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${profile.coverImage})` }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-end space-x-4">
            <img 
              src={profile.avatar} 
              alt={profile.name}
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
            <div className="text-white flex-1">
              <h1 className="text-3xl font-bold">{profile.name}</h1>
              <p className="text-xl opacity-90">{profile.title}</p>
              <div className="flex items-center mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{profile.bio}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Portfolio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {portfolio.map((item) => (
                    <div key={item.id} className="border rounded-lg overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                      <div className="p-3">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill.id} variant="secondary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">{profile.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">{profile.phone}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">{profile.website}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/profile">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Profile
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Edit Profile</h1>
              <p className="text-gray-600">Manage your professional profile</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="hover:scale-105 transition-transform">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview Public Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl h-[80vh] overflow-auto">
                <DialogHeader>
                  <DialogTitle>Public Profile Preview</DialogTitle>
                </DialogHeader>
                <PublicProfilePreview />
              </DialogContent>
            </Dialog>
            
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 hover:scale-105 transition-all">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="personal" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Personal</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center space-x-2">
              <Briefcase className="h-4 w-4" />
              <span>Skills</span>
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Portfolio</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span>Certifications</span>
            </TabsTrigger>
            <TabsTrigger value="languages" className="flex items-center space-x-2">
              <Languages className="h-4 w-4" />
              <span>Languages</span>
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center space-x-2">
              <Link2 className="h-4 w-4" />
              <span>Social</span>
            </TabsTrigger>
          </TabsList>

          {/* Personal Information */}
          <TabsContent value="personal" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-blue-600" />
                  <span>Personal Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar and Cover */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-6">
                    <div className="relative group">
                      <img 
                        src={profile.avatar} 
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover group-hover:opacity-75 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Profile Photo</Label>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Change Photo
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Cover Image</Label>
                    <div className="relative h-32 bg-cover bg-center rounded-lg overflow-hidden group" 
                         style={{ backgroundImage: `url(${profile.coverImage})` }}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="secondary" size="sm">
                          <Camera className="h-4 w-4 mr-2" />
                          Change Cover
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                      className="hover:border-blue-400 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input 
                      id="title"
                      value={profile.title}
                      onChange={(e) => setProfile({...profile, title: e.target.value})}
                      className="hover:border-blue-400 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location"
                      value={profile.location}
                      onChange={(e) => setProfile({...profile, location: e.target.value})}
                      className="hover:border-blue-400 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                    <Input 
                      id="hourlyRate"
                      type="number"
                      value={profile.hourlyRate}
                      onChange={(e) => setProfile({...profile, hourlyRate: e.target.value})}
                      className="hover:border-blue-400 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                      className="hover:border-blue-400 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone"
                      value={profile.phone}
                      onChange={(e) => setProfile({...profile, phone: e.target.value})}
                      className="hover:border-blue-400 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input 
                    id="website"
                    value={profile.website}
                    onChange={(e) => setProfile({...profile, website: e.target.value})}
                    placeholder="your-website.com"
                    className="hover:border-blue-400 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio / About</Label>
                  <Textarea 
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    rows={4}
                    className="hover:border-blue-400 focus:border-blue-500 transition-colors"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills */}
          <TabsContent value="skills" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5 text-purple-600" />
                  <span>Skills & Expertise</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add New Skill */}
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <h3 className="font-medium text-gray-900">Add New Skill</h3>
                  <div className="flex space-x-3">
                    <Input 
                      placeholder="Skill name (e.g., React)"
                      value={newSkill.name}
                      onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
                      className="flex-1"
                    />
                    <Select value={newSkill.level} onValueChange={(value) => setNewSkill({...newSkill, level: value})}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                        <SelectItem value="Expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button onClick={addSkill} className="hover:scale-105 transition-transform">
                      <Plus className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {skills.map((skill) => (
                    <div key={skill.id} className="flex items-center justify-between p-3 border rounded-lg hover:shadow-md transition-shadow group">
                      <div className="flex items-center space-x-3">
                        <GripVertical className="h-4 w-4 text-gray-400" />
                        <div>
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant="secondary" className="ml-2 text-xs">{skill.level}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="sm">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => deleteSkill(skill.id)}>
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Portfolio */}
          <TabsContent value="portfolio" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-green-600" />
                    <span>Portfolio & Projects</span>
                  </CardTitle>
                  <Button className="hover:scale-105 transition-transform">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Project
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portfolio.map((item) => (
                    <div key={item.id} className="border rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="sm" variant="secondary" onClick={() => togglePortfolioFeatured(item.id)}>
                            <Star className={`h-4 w-4 ${item.featured ? 'text-yellow-500' : ''}`} />
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="secondary" onClick={() => deletePortfolioItem(item.id)}>
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                        {item.featured && (
                          <Badge className="absolute top-2 left-2 bg-yellow-500">Featured</Badge>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center text-sm text-blue-600">
                          <Link2 className="h-4 w-4 mr-1" />
                          <span>{item.url}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certifications */}
          <TabsContent value="certifications" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-orange-600" />
                  <span>Certifications & Awards</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add New Certification */}
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <h3 className="font-medium text-gray-900">Add New Certification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Input 
                      placeholder="Certification name"
                      value={newCertification.name}
                      onChange={(e) => setNewCertification({...newCertification, name: e.target.value})}
                    />
                    <Input 
                      placeholder="Issuing organization"
                      value={newCertification.issuer}
                      onChange={(e) => setNewCertification({...newCertification, issuer: e.target.value})}
                    />
                    <div className="flex space-x-2">
                      <Input 
                        placeholder="Year"
                        value={newCertification.year}
                        onChange={(e) => setNewCertification({...newCertification, year: e.target.value})}
                        className="flex-1"
                      />
                      <Button onClick={addCertification} className="hover:scale-105 transition-transform">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Certifications List */}
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="flex items-center justify-between p-3 border rounded-lg hover:shadow-md transition-shadow group">
                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-orange-500" />
                        <div>
                          <h3 className="font-medium">{cert.name}</h3>
                          <p className="text-sm text-gray-600">{cert.issuer} • {cert.year}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="sm">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => deleteCertification(cert.id)}>
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Languages */}
          <TabsContent value="languages" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Languages className="h-5 w-5 text-teal-600" />
                  <span>Languages</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add New Language */}
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <h3 className="font-medium text-gray-900">Add New Language</h3>
                  <div className="flex space-x-3">
                    <Input 
                      placeholder="Language name"
                      value={newLanguage.name}
                      onChange={(e) => setNewLanguage({...newLanguage, name: e.target.value})}
                      className="flex-1"
                    />
                    <Select value={newLanguage.level} onValueChange={(value) => setNewLanguage({...newLanguage, level: value})}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Conversational">Conversational</SelectItem>
                        <SelectItem value="Fluent">Fluent</SelectItem>
                        <SelectItem value="Native">Native</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button onClick={addLanguage} className="hover:scale-105 transition-transform">
                      <Plus className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </div>

                {/* Languages List */}
                <div className="space-y-3">
                  {languages.map((language) => (
                    <div key={language.id} className="flex items-center justify-between p-3 border rounded-lg hover:shadow-md transition-shadow group">
                      <div className="flex items-center space-x-3">
                        <Languages className="h-5 w-5 text-teal-500" />
                        <div>
                          <span className="font-medium">{language.name}</span>
                          <Badge variant="outline" className="ml-2 text-xs">{language.level}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="sm">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => deleteLanguage(language.id)}>
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Social Links */}
          <TabsContent value="social" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Link2 className="h-5 w-5 text-indigo-600" />
                  <span>Social Links</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add New Social Link */}
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <h3 className="font-medium text-gray-900">Add New Social Link</h3>
                  <div className="flex space-x-3">
                    <Input 
                      placeholder="Platform (e.g., GitHub, LinkedIn)"
                      value={newSocialLink.platform}
                      onChange={(e) => setNewSocialLink({...newSocialLink, platform: e.target.value})}
                      className="flex-1"
                    />
                    <Input 
                      placeholder="URL"
                      value={newSocialLink.url}
                      onChange={(e) => setNewSocialLink({...newSocialLink, url: e.target.value})}
                      className="flex-1"
                    />
                    <Button onClick={addSocialLink} className="hover:scale-105 transition-transform">
                      <Plus className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </div>

                {/* Social Links List */}
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <div key={link.id} className="flex items-center justify-between p-3 border rounded-lg hover:shadow-md transition-shadow group">
                      <div className="flex items-center space-x-3">
                        <link.icon className="h-5 w-5 text-indigo-500" />
                        <div>
                          <span className="font-medium">{link.platform}</span>
                          <p className="text-sm text-gray-600">{link.url}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="sm">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => deleteSocialLink(link.id)}>
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default EditProfile;