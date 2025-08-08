
import { useState } from "react";
import { DollarSign, Calendar, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CreateJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    budget: '',
    budgetType: 'fixed',
    deadline: '',
    skills: '',
    experience: 'intermediate'
  });

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const categories = [
    "Web Development",
    "Mobile Development", 
    "UI/UX Design",
    "Graphic Design",
    "Digital Marketing",
    "Content Writing",
    "Data Science",
    "DevOps"
  ];

  const skillSuggestions = [
    "React", "Node.js", "Python", "JavaScript", "TypeScript", "Vue.js", 
    "Angular", "PHP", "Laravel", "WordPress", "Shopify", "Figma", 
    "Adobe Photoshop", "Illustrator", "SEO", "Google Ads", "Facebook Ads"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job created:', { ...formData, skills: selectedSkills });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addSkill = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Header */}
      <section className="pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Post a New Job
          </h1>
          <p className="text-xl text-gray-600">
            Find the perfect freelancer for your project by creating a detailed job posting.
          </p>
        </div>
      </section>

      {/* Job Form */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Basic Information */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., Build a responsive e-commerce website"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={6}
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your project in detail. Include requirements, goals, and any specific preferences..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Budget & Timeline */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Budget & Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Type *
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="budgetType"
                        value="fixed"
                        checked={formData.budgetType === 'fixed'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Fixed Price
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="budgetType"
                        value="hourly"
                        checked={formData.budgetType === 'hourly'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Hourly Rate
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget {formData.budgetType === 'hourly' ? '(per hour)' : '(total)'} *
                  </label>
                  <Input
                    id="budget"
                    name="budget"
                    type="number"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder={formData.budgetType === 'hourly' ? '25' : '1000'}
                  />
                </div>

                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Deadline
                  </label>
                  <Input
                    id="deadline"
                    name="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Skills & Experience */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Skills & Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Required Skills
                  </label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedSkills.map((skill) => (
                      <Badge 
                        key={skill} 
                        className="bg-blue-100 text-blue-800 cursor-pointer hover:bg-blue-200"
                        onClick={() => removeSkill(skill)}
                      >
                        {skill} ×
                      </Badge>
                    ))}
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Click to add skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {skillSuggestions.map((skill) => (
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

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level Required
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="entry">Entry Level</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="flex justify-end space-x-4">
              <Button variant="outline" type="button">
                Save as Draft
              </Button>
              <Button 
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Post Job
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreateJob;
