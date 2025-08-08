
import { useState, useEffect } from "react";
import { Search, Filter, MapPin, Clock, DollarSign, Star, Bookmark, BookmarkCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    budget: [],
    duration: [],
    location: [],
    jobType: []
  });

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const jobs = [
    {
      id: '1',
      title: 'Full-Stack Web Developer for E-commerce Platform',
      description: 'Looking for an experienced full-stack developer to build a modern e-commerce platform with React, Node.js, and PostgreSQL. The project involves creating a scalable marketplace with user authentication, payment processing, and admin dashboard.',
      budget: '$5,000 - $8,000',
      budgetRange: 'high',
      duration: '2-3 months',
      durationCategory: 'medium',
      location: 'Remote',
      postedTime: '2 hours ago',
      skills: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
      clientRating: 4.8,
      clientJobs: 23,
      proposals: 12,
      verified: true,
      jobType: 'Fixed Price',
      category: 'Web Development'
    },
    {
      id: '2',
      title: 'Mobile App UI/UX Design',
      description: 'Need a talented designer to create modern, user-friendly interfaces for our fitness tracking mobile application. The design should be clean, intuitive, and follow current mobile design trends.',
      budget: '$2,000 - $3,500',
      budgetRange: 'medium',
      duration: '3-4 weeks',
      durationCategory: 'short',
      location: 'Remote',
      postedTime: '5 hours ago',
      skills: ['UI/UX Design', 'Figma', 'Mobile Design', 'Prototyping'],
      clientRating: 4.9,
      clientJobs: 15,
      proposals: 8,
      verified: true,
      jobType: 'Fixed Price',
      category: 'Design'
    },
    {
      id: '3',
      title: 'Content Writer for SaaS Blog',
      description: 'Seeking an experienced content writer to create engaging blog posts about software development and business trends. Must have experience writing technical content for B2B audiences.',
      budget: '$500 - $1,000',
      budgetRange: 'low',
      duration: '1-2 months',
      durationCategory: 'medium',
      location: 'Remote',
      postedTime: '1 day ago',
      skills: ['Content Writing', 'SEO', 'Technical Writing', 'SaaS'],
      clientRating: 4.6,
      clientJobs: 8,
      proposals: 15,
      verified: false,
      jobType: 'Hourly',
      category: 'Writing'
    },
    {
      id: '4',
      title: 'Python Data Analysis & Visualization',
      description: 'Looking for a data scientist to analyze customer behavior data and create insightful visualizations and reports. Experience with pandas, matplotlib, and statistical analysis required.',
      budget: '$1,500 - $2,500',
      budgetRange: 'medium',
      duration: '2-3 weeks',
      durationCategory: 'short',
      location: 'Remote',
      postedTime: '2 days ago',
      skills: ['Python', 'Data Analysis', 'Pandas', 'Matplotlib', 'Jupyter'],
      clientRating: 4.7,
      clientJobs: 31,
      proposals: 9,
      verified: true,
      jobType: 'Fixed Price',
      category: 'Data Science'
    },
    {
      id: '5',
      title: 'WordPress Website Development',
      description: 'Need a WordPress developer to create a business website with custom theme, contact forms, and SEO optimization. Must be responsive and fast-loading.',
      budget: '$800 - $1,500',
      budgetRange: 'low',
      duration: '2-4 weeks',
      durationCategory: 'short',
      location: 'Remote',
      postedTime: '3 days ago',
      skills: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
      clientRating: 4.5,
      clientJobs: 12,
      proposals: 18,
      verified: true,
      jobType: 'Fixed Price',
      category: 'Web Development'
    }
  ];

  useEffect(() => {
    applyFilters();
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, [searchQuery, selectedFilters]);

  const applyFilters = () => {
    let filtered = jobs;

    // Search query filter
    if (searchQuery) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
        job.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Budget filter
    if (selectedFilters.budget.length > 0) {
      filtered = filtered.filter(job => selectedFilters.budget.includes(job.budgetRange));
    }

    // Duration filter
    if (selectedFilters.duration.length > 0) {
      filtered = filtered.filter(job => selectedFilters.duration.includes(job.durationCategory));
    }

    // Job type filter
    if (selectedFilters.jobType.length > 0) {
      filtered = filtered.filter(job => selectedFilters.jobType.includes(job.jobType));
    }

    setFilteredJobs(filtered);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      budget: [],
      duration: [],
      location: [],
      jobType: []
    });
    setSearchQuery("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Search & Filter Section */}
      <section className="pt-20 pb-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Next Project</h1>
            <p className="text-xl text-gray-600">Browse thousands of opportunities from verified clients</p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search jobs, skills, or keywords..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-white border-gray-200 focus:border-blue-500"
              />
            </div>
            <Button 
              type="button"
              variant="outline" 
              className="h-12 px-6 bg-white"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters {Object.values(selectedFilters).flat().length > 0 && `(${Object.values(selectedFilters).flat().length})`}
            </Button>
            <Button type="submit" className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Search Jobs
            </Button>
          </form>

          {/* Filter Panel */}
          {showFilters && (
            <Card className="mb-8 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Budget Filter */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Budget Range</h4>
                    <div className="space-y-2">
                      {[
                        { label: "Under $1,000", value: "low" },
                        { label: "$1,000 - $5,000", value: "medium" },
                        { label: "$5,000+", value: "high" }
                      ].map((range) => (
                        <label key={range.value} className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="mr-2" 
                            checked={selectedFilters.budget.includes(range.value)}
                            onChange={() => handleFilterChange('budget', range.value)}
                          />
                          <span className="text-sm">{range.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Duration Filter */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Duration</h4>
                    <div className="space-y-2">
                      {[
                        { label: "Less than 1 month", value: "short" },
                        { label: "1-3 months", value: "medium" },
                        { label: "3+ months", value: "long" }
                      ].map((duration) => (
                        <label key={duration.value} className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="mr-2" 
                            checked={selectedFilters.duration.includes(duration.value)}
                            onChange={() => handleFilterChange('duration', duration.value)}
                          />
                          <span className="text-sm">{duration.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Job Type Filter */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Job Type</h4>
                    <div className="space-y-2">
                      {["Fixed Price", "Hourly"].map((type) => (
                        <label key={type} className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="mr-2" 
                            checked={selectedFilters.jobType.includes(type)}
                            onChange={() => handleFilterChange('jobType', type)}
                          />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Clear Filters */}
                  <div className="flex items-end">
                    <Button variant="outline" onClick={clearFilters} className="w-full">
                      Clear All Filters
                    </Button>
                  </div>
                </div>

                {/* Active Filters */}
                {Object.values(selectedFilters).flat().length > 0 && (
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-medium text-gray-700 mb-2">Active Filters</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFilters.budget.map(budget => (
                        <Badge key={budget} variant="secondary" className="flex items-center gap-1">
                          Budget: {budget}
                          <X className="h-3 w-3 cursor-pointer" onClick={() => handleFilterChange('budget', budget)} />
                        </Badge>
                      ))}
                      {selectedFilters.duration.map(duration => (
                        <Badge key={duration} variant="secondary" className="flex items-center gap-1">
                          Duration: {duration}
                          <X className="h-3 w-3 cursor-pointer" onClick={() => handleFilterChange('duration', duration)} />
                        </Badge>
                      ))}
                      {selectedFilters.jobType.map(type => (
                        <Badge key={type} variant="secondary" className="flex items-center gap-1">
                          {type}
                          <X className="h-3 w-3 cursor-pointer" onClick={() => handleFilterChange('jobType', type)} />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['Web Development', 'Design', 'Writing', 'Marketing', 'Data Science'].map((category) => (
              <Badge 
                key={category} 
                variant="secondary" 
                className="cursor-pointer hover:bg-blue-100 hover:text-blue-700"
                onClick={() => setSearchQuery(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="pb-20" data-aos="fade-up" data-aos-delay="300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              {filteredJobs.length} Jobs Found {searchQuery && `for "${searchQuery}"`}
            </h2>
            <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sort by: Newest</option>
              <option>Sort by: Budget (High to Low)</option>
              <option>Sort by: Budget (Low to High)</option>
              <option>Sort by: Proposals</option>
            </select>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Link to={`/jobs/${job.id}`}>
                          <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                            {job.title}
                          </h3>
                        </Link>
                        {job.verified && (
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            Verified Client
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-blue-600 border-blue-200">
                          {job.jobType}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>
                    </div>
                    
                    <button
                      onClick={() => toggleSaveJob(job.id)}
                      className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {savedJobs.includes(job.id) ? (
                        <BookmarkCheck className="h-5 w-5 text-blue-600" />
                      ) : (
                        <Bookmark className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-blue-600 border-blue-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Job Details */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.budget}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="text-gray-500">
                      Posted {job.postedTime}
                    </div>
                  </div>

                  {/* Client Info & Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-terracotta fill-current mr-1" />
                        <span className="font-medium">{job.clientRating}</span>
                      </div>
                      <span className="text-gray-600">{job.clientJobs} jobs posted</span>
                      <span className="text-gray-600">{job.proposals} proposals</span>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Link to={`/jobs/${job.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                      <Dialog open={showApplyModal} onOpenChange={setShowApplyModal}>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            onClick={() => setSelectedJob(job)}
                          >
                            Apply Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Apply for: {selectedJob?.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6 mt-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Cover Letter
                              </label>
                              <textarea
                                rows={6}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write a compelling cover letter explaining why you're the perfect fit for this project..."
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Your Proposal
                              </label>
                              <textarea
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Describe your approach to this project and timeline..."
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Your Rate
                                </label>
                                <Input placeholder="$50/hour or $2000 fixed" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Delivery Time
                                </label>
                                <Input placeholder="e.g., 2 weeks" />
                              </div>
                            </div>
                            <div className="flex justify-end space-x-3 pt-4">
                              <Button variant="outline" onClick={() => setShowApplyModal(false)}>
                                Cancel
                              </Button>
                              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                Submit Application
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredJobs.length === 0 && (
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
                  <Button variant="outline" onClick={clearFilters} className="mt-4">
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Load More */}
          {filteredJobs.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="px-8">
                Load More Jobs
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;
