import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Upload, DollarSign, Clock, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ApplyJob = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    coverLetter: "",
    bidAmount: "",
    deliveryTime: "",
    milestones: "",
    attachments: [] as File[]
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Your proposal has been sent to the client.",
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  // Mock job data
  const job = {
    title: "Full-Stack Web Developer for E-commerce Platform",
    budget: "$5,000 - $8,000",
    client: "TechStartup Inc."
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link to={`/jobs/${id}`}>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Job Details
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card data-aos="fade-up">
                <CardHeader>
                  <CardTitle className="text-2xl">Submit Your Proposal</CardTitle>
                  <p className="text-muted-foreground">Apply for: {job.title}</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Cover Letter */}
                    <div className="space-y-2">
                      <Label htmlFor="coverLetter" className="text-base font-medium">
                        Cover Letter *
                      </Label>
                      <Textarea
                        id="coverLetter"
                        placeholder="Introduce yourself and explain why you're the perfect fit for this project..."
                        className="min-h-[150px] resize-none bg-background border-border"
                        value={formData.coverLetter}
                        onChange={(e) => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        Tip: Personalize your proposal and highlight relevant experience
                      </p>
                    </div>

                    {/* Bid Amount */}
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
                            className="pl-10 bg-background border-border"
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
                            className="pl-10 bg-background border-border"
                            value={formData.deliveryTime}
                            onChange={(e) => setFormData(prev => ({ ...prev, deliveryTime: e.target.value }))}
                            required
                          />
                        </div>
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

                    {/* Project Milestones */}
                    <div className="space-y-2">
                      <Label htmlFor="milestones" className="text-base font-medium">
                        Project Milestones (Optional)
                      </Label>
                      <Textarea
                        id="milestones"
                        placeholder="Break down your project into key milestones..."
                        className="min-h-[100px] resize-none bg-background border-border"
                        value={formData.milestones}
                        onChange={(e) => setFormData(prev => ({ ...prev, milestones: e.target.value }))}
                      />
                    </div>

                    {/* File Attachments */}
                    <div className="space-y-3">
                      <Label className="text-base font-medium">Attachments (Optional)</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Upload portfolio samples, resume, or relevant documents
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

                    {/* Terms Agreement */}
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the terms of service and understand that this proposal is binding
                      </Label>
                    </div>

                    {/* Submit Button */}
                    <div className="flex space-x-4 pt-4">
                      <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                        Submit Proposal
                      </Button>
                      <Button type="button" variant="outline" className="flex-1">
                        Save as Draft
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Job Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Job Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-sm">{job.title}</p>
                    <p className="text-sm text-muted-foreground">by {job.client}</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Budget:</span>
                    <span className="font-medium">{job.budget}</span>
                  </div>
                  <div className="pt-3 border-t">
                    <Button variant="outline" size="sm" className="w-full">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message Client
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Proposal Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="space-y-2">
                    <p className="font-medium">✓ Be specific</p>
                    <p className="text-muted-foreground">Clearly explain your approach and timeline</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">✓ Show relevant work</p>
                    <p className="text-muted-foreground">Include portfolio samples similar to this project</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">✓ Competitive pricing</p>
                    <p className="text-muted-foreground">Price competitively while valuing your skills</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">✓ Ask questions</p>
                    <p className="text-muted-foreground">Show you understand the project requirements</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApplyJob;