import { useState } from "react";
import { 
  Clock, DollarSign, Users, AlertCircle, Calendar, 
  MapPin, FileText, Tag, Zap, Send 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const PostUrgentJob = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    urgencyLevel: "",
    deadline: "",
    category: "",
    skills: [] as string[],
    location: "",
    featured: false,
    priority: false
  });

  const urgencyLevels = [
    { value: "critical", label: "Critical (24 hours)", color: "text-red-600", bg: "bg-red-50" },
    { value: "high", label: "High Priority (48 hours)", color: "text-orange-600", bg: "bg-orange-50" },
    { value: "medium", label: "Medium (1 week)", color: "text-sage-green", bg: "bg-sage-green/10" }
  ];

  const categories = [
    "Web Development", "Mobile Development", "UI/UX Design", 
    "Digital Marketing", "Content Writing", "Data Science",
    "DevOps", "Cybersecurity", "AI/ML", "Blockchain"
  ];

  const skillSuggestions = [
    "React", "Node.js", "Python", "TypeScript", "AWS", "Docker",
    "Figma", "Adobe Creative Suite", "SEO", "Social Media"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Urgent job posted:", formData);
    onClose();
  };

  const addSkill = (skill: string) => {
    if (!formData.skills.includes(skill)) {
      setFormData({ ...formData, skills: [...formData.skills, skill] });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur border-0 shadow-2xl animate-scale-in">
        <CardHeader className="relative bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold">Post Urgent Job</CardTitle>
                <p className="text-red-100 mt-1">Fast-track your project with priority posting</p>
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
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Urgency Level Selection */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                Urgency Level
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {urgencyLevels.map((level) => (
                  <div
                    key={level.value}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                      formData.urgencyLevel === level.value 
                        ? `border-current ${level.color} ${level.bg}` 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setFormData({ ...formData, urgencyLevel: level.value })}
                  >
                    <div className={`font-semibold ${level.color}`}>
                      {level.label}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {level.value === 'critical' && 'Immediate attention required'}
                      {level.value === 'high' && 'Fast turnaround needed'}
                      {level.value === 'medium' && 'Standard urgent timeline'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium flex items-center mb-3">
                    <FileText className="h-4 w-4 mr-2" />
                    Job Title
                  </Label>
                  <Input
                    placeholder="e.g., Emergency Website Bug Fix"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div>
                  <Label className="text-base font-medium flex items-center mb-3">
                    <Tag className="h-4 w-4 mr-2" />
                    Category
                  </Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base font-medium flex items-center mb-3">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Budget Range
                  </Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-500">Under $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                      <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                      <SelectItem value="5000-plus">$5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base font-medium flex items-center mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    Deadline
                  </Label>
                  <Input
                    type="datetime-local"
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div>
                  <Label className="text-base font-medium flex items-center mb-3">
                    <MapPin className="h-4 w-4 mr-2" />
                    Location Preference
                  </Label>
                  <Select value={formData.location} onValueChange={(value) => setFormData({ ...formData, location: value })}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote Only</SelectItem>
                      <SelectItem value="local">Local Only</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="no-preference">No Preference</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium mb-3 block">
                    Project Description
                  </Label>
                  <Textarea
                    placeholder="Describe your urgent project requirements in detail..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="h-32 resize-none"
                  />
                </div>

                <div>
                  <Label className="text-base font-medium mb-3 block">
                    Required Skills
                  </Label>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          className="bg-blue-100 text-blue-800 hover:bg-blue-200 cursor-pointer"
                          onClick={() => setFormData({ 
                            ...formData, 
                            skills: formData.skills.filter(s => s !== skill) 
                          })}
                        >
                          {skill} ✕
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillSuggestions.filter(skill => !formData.skills.includes(skill)).map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline" 
                          className="cursor-pointer hover:bg-gray-50"
                          onClick={() => addSkill(skill)}
                        >
                          + {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                  <Label className="text-base font-medium">Priority Options</Label>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Featured Listing</Label>
                      <p className="text-sm text-gray-600">Get 3x more visibility</p>
                    </div>
                    <Switch
                      checked={formData.featured}
                      onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Priority Support</Label>
                      <p className="text-sm text-gray-600">24/7 dedicated support</p>
                    </div>
                    <Switch
                      checked={formData.priority}
                      onCheckedChange={(checked) => setFormData({ ...formData, priority: checked })}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
              >
                <Send className="h-4 w-4 mr-2" />
                Post Urgent Job
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostUrgentJob;