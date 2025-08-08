
import { useState, useEffect } from "react";
import { Search as SearchIcon, MapPin, Star, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InviteJobProposal from "@/components/common/InviteJobProposal";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Link, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || "");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredFreelancers, setFilteredFreelancers] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    hourlyRate: [],
    rating: [],
    experience: []
  });
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteFreelancer, setInviteFreelancer] = useState(null);

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

  const freelancers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Full-Stack Developer",
      location: "San Francisco, CA",
      rating: 4.9,
      reviews: 124,
      hourlyRate: 85,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b012c5db?w=150&h=150&fit=crop&crop=face",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      completedJobs: 89,
      description: "Experienced full-stack developer specializing in modern web applications with React and Node.js. 8+ years of experience building scalable solutions.",
      category: "Web Development"
    },
    {
      id: 2,
      name: "Mike Chen",
      title: "Mobile App Developer",
      location: "New York, NY",
      rating: 4.8,
      reviews: 98,
      hourlyRate: 75,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      completedJobs: 67,
      description: "Mobile app specialist with expertise in cross-platform development. Created 50+ apps for startups and enterprises.",
      category: "Mobile Development"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "UI/UX Designer",
      location: "Austin, TX",
      rating: 5.0,
      reviews: 156,
      hourlyRate: 65,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      completedJobs: 112,
      description: "Passionate UI/UX designer focused on creating intuitive and beautiful user experiences. 6+ years in product design.",
      category: "UI/UX Design"
    },
    {
      id: 4,
      name: "Alex Thompson",
      title: "Digital Marketing Specialist",
      location: "Los Angeles, CA",
      rating: 4.7,
      reviews: 82,
      hourlyRate: 55,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
      completedJobs: 145,
      description: "Growth-focused digital marketer helping businesses increase their online presence and ROI through data-driven strategies.",
      category: "Digital Marketing"
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "Content Writer & Copywriter",
      location: "Chicago, IL",
      rating: 4.9,
      reviews: 167,
      hourlyRate: 45,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      skills: ["Content Strategy", "SEO Writing", "Copywriting", "Blog Writing"],
      completedJobs: 203,
      description: "Professional writer with expertise in creating engaging content that drives conversions. 7+ years in content marketing.",
      category: "Content Writing"
    },
    {
      id: 6,
      name: "David Kim",
      title: "Data Scientist",
      location: "Seattle, WA",
      rating: 4.8,
      reviews: 73,
      hourlyRate: 95,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      skills: ["Python", "Machine Learning", "SQL", "Tableau"],
      completedJobs: 54,
      description: "Data scientist with PhD in Statistics. Specializing in machine learning models and predictive analytics for business insights.",
      category: "Data Science"
    }
  ];

  useEffect(() => {
    applyFilters();
  }, [searchQuery, selectedCategory, selectedFilters]);

  const applyFilters = () => {
    let filtered = freelancers;

    // Search query filter
    if (searchQuery) {
      filtered = filtered.filter(freelancer =>
        freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        freelancer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        freelancer.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
        freelancer.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(freelancer => freelancer.category === selectedCategory);
    }

    // Hourly rate filter
    if (selectedFilters.hourlyRate.length > 0) {
      filtered = filtered.filter(freelancer => {
        return selectedFilters.hourlyRate.some(range => {
          if (range === "$0 - $25") return freelancer.hourlyRate <= 25;
          if (range === "$25 - $50") return freelancer.hourlyRate > 25 && freelancer.hourlyRate <= 50;
          if (range === "$50 - $75") return freelancer.hourlyRate > 50 && freelancer.hourlyRate <= 75;
          if (range === "$75+") return freelancer.hourlyRate > 75;
          return false;
        });
      });
    }

    // Rating filter
    if (selectedFilters.rating.length > 0) {
      filtered = filtered.filter(freelancer => {
        return selectedFilters.rating.some(rating => {
          if (rating === "4.5+") return freelancer.rating >= 4.5;
          if (rating === "4.0+") return freelancer.rating >= 4.0;
          if (rating === "3.5+") return freelancer.rating >= 3.5;
          return false;
        });
      });
    }

    setFilteredFreelancers(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
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
      hourlyRate: [],
      rating: [],
      experience: []
    });
    setSelectedCategory("");
    setSearchQuery("");
  };

  const handleInviteFreelancer = (freelancer: any) => {
    setInviteFreelancer(freelancer);
    setInviteOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Search Header */}
      <section className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Find Top Talent
          </h1>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search by skills, title, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Search
              </Button>
            </div>
          </form>

          {/* Filters Toggle */}
          <div className="flex justify-between items-center">
            <p className="text-gray-600">{filteredFreelancers.length} freelancers found</p>
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Filters Sidebar */}
            <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
              <Card className="bg-white/80 backdrop-blur-sm sticky top-4">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-900">Filters</h3>
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear All
                    </Button>
                  </div>
                  
                  {/* Hourly Rate */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-3">Hourly Rate</h4>
                    <div className="space-y-2">
                      {["$0 - $25", "$25 - $50", "$50 - $75", "$75+"].map((range) => (
                        <label key={range} className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="mr-2" 
                            checked={selectedFilters.hourlyRate.includes(range)}
                            onChange={() => handleFilterChange('hourlyRate', range)}
                          />
                          <span className="text-sm">{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-3">Rating</h4>
                    <div className="space-y-2">
                      {["4.5+ ⭐", "4.0+ ⭐", "3.5+ ⭐"].map((rating) => (
                        <label key={rating} className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="mr-2" 
                            checked={selectedFilters.rating.includes(rating)}
                            onChange={() => handleFilterChange('rating', rating)}
                          />
                          <span className="text-sm">{rating}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Active Filters */}
                  {(selectedFilters.hourlyRate.length > 0 || selectedFilters.rating.length > 0 || selectedCategory) && (
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">Active Filters</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCategory && (
                          <Badge variant="secondary" className="flex items-center gap-1">
                            {selectedCategory}
                            <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("")} />
                          </Badge>
                        )}
                        {selectedFilters.hourlyRate.map(rate => (
                          <Badge key={rate} variant="secondary" className="flex items-center gap-1">
                            {rate}
                            <X className="h-3 w-3 cursor-pointer" onClick={() => handleFilterChange('hourlyRate', rate)} />
                          </Badge>
                        ))}
                        {selectedFilters.rating.map(rating => (
                          <Badge key={rating} variant="secondary" className="flex items-center gap-1">
                            {rating}
                            <X className="h-3 w-3 cursor-pointer" onClick={() => handleFilterChange('rating', rating)} />
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Freelancer Cards */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {filteredFreelancers.map((freelancer) => (
                  <Card key={freelancer.id} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        
                        {/* Avatar & Basic Info */}
                        <div className="flex items-start space-x-4">
                          <img 
                            src={freelancer.avatar} 
                            alt={freelancer.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{freelancer.name}</h3>
                            <p className="text-gray-600">{freelancer.title}</p>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{freelancer.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1">
                          <p className="text-gray-700 mb-3">{freelancer.description}</p>
                          
                          {/* Skills */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {freelancer.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          {/* Stats */}
                          <div className="flex items-center space-x-6 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-terracotta fill-current mr-1" />
                              <span>{freelancer.rating} ({freelancer.reviews} reviews)</span>
                            </div>
                            <span>{freelancer.completedJobs} jobs completed</span>
                          </div>
                        </div>

                        {/* Actions & Rate */}
                        <div className="flex flex-col items-end space-y-3">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">${freelancer.hourlyRate}</div>
                            <div className="text-sm text-gray-600">per hour</div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Link to={`/profile/${freelancer.id}`}>
                              <Button variant="outline">View Profile</Button>
                            </Link>
                            <Button 
                              onClick={() => {
                                setInviteFreelancer(freelancer);
                                setInviteOpen(true);
                              }}
                              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                            >
                              Invite to Job
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {filteredFreelancers.length === 0 && (
                  <Card className="bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <p className="text-gray-500 text-lg">No freelancers found matching your criteria.</p>
                      <Button variant="outline" onClick={clearFilters} className="mt-4">
                        Clear Filters
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Pagination */}
              {filteredFreelancers.length > 0 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex space-x-2">
                    <Button variant="outline">Previous</Button>
                    <Button variant="outline">1</Button>
                    <Button>2</Button>
                    <Button variant="outline">3</Button>
                    <Button variant="outline">Next</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Invite Job Proposal Modal */}
      <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
        <DialogContent className="max-w-2xl">
          {inviteFreelancer && (
            <InviteJobProposal
              freelancer={{
                id: inviteFreelancer.id,
                name: inviteFreelancer.name,
                title: inviteFreelancer.title,
                avatar: inviteFreelancer.avatar,
                hourlyRate: inviteFreelancer.hourlyRate,
                rating: inviteFreelancer.rating,
                skills: inviteFreelancer.skills,
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

export default Search;
