import { useState } from "react";
import { X, Calendar, DollarSign, FileText, Clock, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

interface InviteJobProposalProps {
  freelancer: {
    id: number;
    name: string;
    title: string;
    avatar: string;
    hourlyRate: number;
    rating: number;
    skills: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

const InviteJobProposal = ({ freelancer, isOpen, onClose }: InviteJobProposalProps) => {
  const [activeTab, setActiveTab] = useState("project");
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectDescription: "",
    budget: "",
    timeline: "",
    projectType: "",
    priority: "medium",
    communicationFreq: "",
    skills: [],
    projectScope: "",
    deliverables: "",
    additionalNotes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending invitation to", freelancer.name, formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden bg-card">
        <CardHeader className="pb-4 border-b bg-muted/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src={freelancer.avatar} 
                alt={freelancer.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <CardTitle className="text-xl font-semibold">Invite {freelancer.name}</CardTitle>
                <p className="text-muted-foreground">{freelancer.title} • ${freelancer.hourlyRate}/hr</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>

        <div className="max-h-[calc(90vh-120px)] overflow-y-auto">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit}>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="project" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Project Details
                  </TabsTrigger>
                  <TabsTrigger value="budget" className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Budget & Timeline
                  </TabsTrigger>
                  <TabsTrigger value="requirements" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Requirements
                  </TabsTrigger>
                  <TabsTrigger value="review" className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Review & Send
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="project" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="projectTitle">Project Title *</Label>
                        <Input 
                          id="projectTitle"
                          placeholder="Enter your project title"
                          value={formData.projectTitle}
                          onChange={(e) => setFormData({...formData, projectTitle: e.target.value})}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select value={formData.projectType} onValueChange={(value) => setFormData({...formData, projectType: value})}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="mobile-app">Mobile App</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="writing">Writing</SelectItem>
                            <SelectItem value="consulting">Consulting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="priority">Priority Level</Label>
                        <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                          <SelectTrigger className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - Flexible timeline</SelectItem>
                            <SelectItem value="medium">Medium - Standard timeline</SelectItem>
                            <SelectItem value="high">High - Urgent project</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="projectDescription">Project Description *</Label>
                        <Textarea 
                          id="projectDescription"
                          placeholder="Describe your project in detail..."
                          rows={6}
                          value={formData.projectDescription}
                          onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
                          className="mt-1 resize-none"
                        />
                      </div>

                      <div>
                        <Label>Freelancer Skills Match</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {freelancer.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="budget" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-primary/20">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-primary" />
                          Budget Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor="budget">Project Budget (USD) *</Label>
                          <Input 
                            id="budget"
                            type="number"
                            placeholder="Enter your budget"
                            value={formData.budget}
                            onChange={(e) => setFormData({...formData, budget: e.target.value})}
                            className="mt-1"
                          />
                        </div>

                        <div className="bg-muted/50 p-3 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            Freelancer Rate: <span className="font-medium text-foreground">${freelancer.hourlyRate}/hour</span>
                          </p>
                          {formData.budget && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Estimated Hours: <span className="font-medium text-foreground">
                                {Math.round(Number(formData.budget) / freelancer.hourlyRate)} hours
                              </span>
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-primary/20">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          Timeline & Schedule
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor="timeline">Project Timeline *</Label>
                          <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-week">Less than 1 week</SelectItem>
                              <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                              <SelectItem value="2-4-weeks">2-4 weeks</SelectItem>
                              <SelectItem value="1-2-months">1-2 months</SelectItem>
                              <SelectItem value="2-3-months">2-3 months</SelectItem>
                              <SelectItem value="3-months-plus">3+ months</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="communicationFreq">Communication Frequency</Label>
                          <Select value={formData.communicationFreq} onValueChange={(value) => setFormData({...formData, communicationFreq: value})}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="How often should we communicate?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="daily">Daily updates</SelectItem>
                              <SelectItem value="weekly">Weekly check-ins</SelectItem>
                              <SelectItem value="bi-weekly">Bi-weekly meetings</SelectItem>
                              <SelectItem value="milestone">Milestone-based</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="requirements" className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="projectScope">Project Scope & Objectives</Label>
                      <Textarea 
                        id="projectScope"
                        placeholder="Define the scope and main objectives of this project..."
                        rows={4}
                        value={formData.projectScope}
                        onChange={(e) => setFormData({...formData, projectScope: e.target.value})}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="deliverables">Expected Deliverables</Label>
                      <Textarea 
                        id="deliverables"
                        placeholder="List what you expect to receive upon completion..."
                        rows={4}
                        value={formData.deliverables}
                        onChange={(e) => setFormData({...formData, deliverables: e.target.value})}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="additionalNotes">Additional Notes & Requirements</Label>
                      <Textarea 
                        id="additionalNotes"
                        placeholder="Any additional information, preferences, or special requirements..."
                        rows={3}
                        value={formData.additionalNotes}
                        onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="review" className="space-y-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Invitation Summary
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Project Title</p>
                          <p className="font-medium">{formData.projectTitle || "Not specified"}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Budget</p>
                          <p className="font-medium">${formData.budget || "Not specified"}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Timeline</p>
                          <p className="font-medium">{formData.timeline || "Not specified"}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Project Type</p>
                          <p className="font-medium">{formData.projectType || "Not specified"}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Priority</p>
                          <Badge variant={formData.priority === 'high' ? 'destructive' : formData.priority === 'medium' ? 'default' : 'secondary'}>
                            {formData.priority}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Communication</p>
                          <p className="font-medium">{formData.communicationFreq || "Not specified"}</p>
                        </div>
                      </div>
                    </div>

                    <Separator className="my-4" />
                    
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Project Description</p>
                      <p className="text-sm bg-background p-3 rounded border">{formData.projectDescription || "No description provided"}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <p className="text-sm text-muted-foreground">
                      This invitation will be sent to {freelancer.name}
                    </p>
                    <div className="flex gap-3">
                      <Button type="button" variant="outline" onClick={onClose}>
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-primary hover:bg-primary/90">
                        <Send className="h-4 w-4 mr-2" />
                        Send Invitation
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default InviteJobProposal;