import { useState } from "react";
import { 
  Users, Search, Star, MapPin, Clock, Send, 
  Filter, Eye, MessageCircle, Award 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InviteFreelancer = ({ onClose }: { onClose: () => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFreelancers, setSelectedFreelancers] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const freelancers = [
    {
      id: "1",
      name: "Sarah Johnson",
      title: "Full-Stack Developer",
      avatar: "/api/placeholder/40/40",
      rating: 4.9,
      completedJobs: 156,
      hourlyRate: "$85",
      location: "San Francisco, CA",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      availability: "Available",
      successRate: "98%",
      responseTime: "1 hour",
      verified: true,
      topRated: true,
      lastActive: "2 hours ago"
    },
    {
      id: "2", 
      name: "Alex Thompson",
      title: "UI/UX Designer",
      avatar: "/api/placeholder/40/40",
      rating: 4.8,
      completedJobs: 89,
      hourlyRate: "$75",
      location: "New York, NY",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      availability: "Busy",
      successRate: "96%",
      responseTime: "3 hours",
      verified: true,
      topRated: false,
      lastActive: "1 day ago"
    },
    {
      id: "3",
      name: "Michael Chen",
      title: "DevOps Engineer", 
      avatar: "/api/placeholder/40/40",
      rating: 5.0,
      completedJobs: 67,
      hourlyRate: "$95",
      location: "Remote",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      availability: "Available",
      successRate: "100%",
      responseTime: "30 mins",
      verified: true,
      topRated: true,
      lastActive: "Online"
    }
  ];

  const handleInvite = () => {
    console.log("Inviting freelancers:", selectedFreelancers, "with message:", message);
    onClose();
  };

  const toggleFreelancer = (id: string) => {
    setSelectedFreelancers(prev => 
      prev.includes(id) 
        ? prev.filter(f => f !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur border-0 shadow-2xl animate-scale-in">
        <CardHeader className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold">Invite Freelancers</CardTitle>
                <p className="text-blue-100 mt-1">Send personalized invitations to top talent</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              ✕
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-8">
          <Tabs defaultValue="search" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="search">Search Talent</TabsTrigger>
              <TabsTrigger value="favorites">My Favorites</TabsTrigger>
              <TabsTrigger value="recent">Recent Workers</TabsTrigger>
            </TabsList>

            <TabsContent value="search" className="space-y-6">
              {/* Search and Filters */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by skills, name, or expertise..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-full md:w-48 h-12">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="writing">Writing</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="h-12 px-6">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>

              {/* Freelancer List */}
              <div className="space-y-4">
                {freelancers.map((freelancer) => (
                  <Card 
                    key={freelancer.id} 
                    className={`p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                      selectedFreelancers.includes(freelancer.id) 
                        ? 'ring-2 ring-blue-500 bg-blue-50' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => toggleFreelancer(freelancer.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={freelancer.avatar} />
                          <AvatarFallback>{freelancer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        {freelancer.lastActive === "Online" && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-semibold text-gray-900">{freelancer.name}</h3>
                              {freelancer.verified && (
                                <Badge className="bg-blue-100 text-blue-700 text-xs">Verified</Badge>
                              )}
                              {freelancer.topRated && (
                                <Badge className="bg-amber-100 text-amber-700 text-xs">
                                  <Award className="h-3 w-3 mr-1" />
                                  Top Rated
                                </Badge>
                              )}
                            </div>
                            <p className="text-gray-600 mb-1">{freelancer.title}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-amber-400 mr-1 fill-current" />
                                {freelancer.rating} ({freelancer.completedJobs} jobs)
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {freelancer.location}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {freelancer.responseTime} response
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-xl font-bold text-gray-900">{freelancer.hourlyRate}/hr</div>
                            <div className={`text-sm ${
                              freelancer.availability === 'Available' ? 'text-green-600' : 'text-orange-600'
                            }`}>
                              {freelancer.availability}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {freelancer.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex gap-6">
                            <span>Success Rate: {freelancer.successRate}</span>
                            <span>Last Active: {freelancer.lastActive}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View Profile
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              Message
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="favorites" className="space-y-4">
              <div className="text-center py-12 text-gray-500">
                <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No favorite freelancers yet</p>
                <p className="text-sm">Mark freelancers as favorites to quickly access them here</p>
              </div>
            </TabsContent>

            <TabsContent value="recent" className="space-y-4">
              <div className="text-center py-12 text-gray-500">
                <Clock className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No recent collaborations</p>
                <p className="text-sm">Freelancers you've worked with recently will appear here</p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Selected Freelancers Summary */}
          {selectedFreelancers.length > 0 && (
            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-blue-600" />
                <span className="font-medium text-blue-900">
                  {selectedFreelancers.length} freelancer(s) selected
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedFreelancers.map(id => {
                  const freelancer = freelancers.find(f => f.id === id);
                  return freelancer ? (
                    <Badge key={id} className="bg-blue-100 text-blue-800">
                      {freelancer.name}
                    </Badge>
                  ) : null;
                })}
              </div>
            </Card>
          )}

          {/* Invitation Message */}
          <div className="space-y-3">
            <label className="text-base font-medium block">Invitation Message</label>
            <Textarea
              placeholder="Write a personalized invitation message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-32 resize-none"
            />
            <p className="text-sm text-gray-500">
              Personalized messages get 3x better response rates
            </p>
          </div>

          <div className="flex gap-4 pt-6 border-t">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleInvite}
              disabled={selectedFreelancers.length === 0}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Invitations ({selectedFreelancers.length})
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InviteFreelancer;