import { useState } from "react";
import { Heart, Bookmark, UserPlus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import InviteJobProposal from '@/components/common/InviteJobProposal';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Favorites = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [inviteOpen, setInviteOpen] = useState(false);
  const [inviteFreelancer, setInviteFreelancer] = useState(null);

  const favoriteJobs = [
    {
      id: '1',
      title: 'Full-Stack Web Developer for E-commerce Platform',
      budget: '$5,000 - $8,000',
      duration: '2-3 months',
      client: 'TechStartup Inc.',
      skills: ['React', 'Node.js', 'PostgreSQL'],
      saved: true
    },
    {
      id: '2',
      title: 'Mobile App UI/UX Design',
      budget: '$2,000 - $3,500',
      duration: '3-4 weeks',
      client: 'DesignCorp',
      skills: ['UI/UX Design', 'Figma', 'Mobile Design'],
      saved: true
    }
  ];

  const likedFreelancers = [
    {
      id: '1',
      name: 'Sarah Johnson',
      title: 'Full-Stack Developer',
      rating: 4.9,
      hourlyRate: '$45/hr',
      skills: ['React', 'Node.js', 'Python'],
      completedJobs: 127,
      liked: true
    },
    {
      id: '2',
      name: 'Mike Chen',
      title: 'UI/UX Designer',
      rating: 4.8,
      hourlyRate: '$35/hr',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
      completedJobs: 89,
      liked: true
    }
  ];

  const followingFreelancers = [
    {
      id: '1',
      name: 'Emma Wilson',
      title: 'Content Writer',
      rating: 4.7,
      hourlyRate: '$25/hr',
      skills: ['Content Writing', 'SEO', 'Copywriting'],
      completedJobs: 156,
      following: true
    },
    {
      id: '2',
      name: 'David Rodriguez',
      title: 'Data Scientist',
      rating: 4.9,
      hourlyRate: '$60/hr',
      skills: ['Python', 'Machine Learning', 'Data Analysis'],
      completedJobs: 78,
      following: true
    }
  ];

  const toggleSave = (jobId: string) => {
    // Toggle save functionality
  };

  const toggleLike = (freelancerId: string) => {
    // Toggle like functionality
  };

  const toggleFollow = (freelancerId: string) => {
    // Toggle follow functionality
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
      
      <section className="pt-20 pb-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">My Favorites</h1>
            <p className="text-xl text-muted-foreground">Manage your saved jobs, liked freelancers, and following list</p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Search your favorites..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-card border-border"
                />
              </div>
              <Button variant="outline" className="h-12 px-6">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="jobs" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="jobs" className="flex items-center gap-2">
                <Bookmark className="h-4 w-4" />
                Saved Jobs ({favoriteJobs.length})
              </TabsTrigger>
              <TabsTrigger value="liked" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Liked Freelancers ({likedFreelancers.length})
              </TabsTrigger>
              <TabsTrigger value="following" className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Following ({followingFreelancers.length})
              </TabsTrigger>
            </TabsList>

            {/* Saved Jobs Tab */}
            <TabsContent value="jobs" className="space-y-6">
              {favoriteJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <Link to={`/jobs/${job.id}`}>
                          <h3 className="text-xl font-semibold text-foreground hover:text-primary cursor-pointer mb-2">
                            {job.title}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground mb-3">by {job.client}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <span>{job.budget}</span>
                          <span>•</span>
                          <span>{job.duration}</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleSave(job.id)}
                        className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Bookmark className="h-4 w-4 fill-current" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Link to={`/jobs/${job.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                      <Link to={`/jobs/${job.id}/apply`}>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {favoriteJobs.length === 0 && (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Bookmark className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">No saved jobs yet</h3>
                    <p className="text-muted-foreground mb-4">Start browsing jobs and save the ones you're interested in</p>
                    <Link to="/jobs">
                      <Button>Browse Jobs</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Liked Freelancers Tab */}
            <TabsContent value="liked" className="space-y-6">
              {likedFreelancers.map((freelancer) => (
                <Card key={freelancer.id} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="font-bold text-primary text-lg">{freelancer.name.charAt(0)}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-1">{freelancer.name}</h3>
                          <p className="text-muted-foreground mb-2">{freelancer.title}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                            <span>⭐ {freelancer.rating}</span>
                            <span>•</span>
                            <span>{freelancer.hourlyRate}</span>
                            <span>•</span>
                            <span>{freelancer.completedJobs} jobs completed</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleLike(freelancer.id)}
                        className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                      >
                        <Heart className="h-4 w-4 fill-current" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {freelancer.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button 
                        onClick={() => {
                          setInviteFreelancer(freelancer);
                          setInviteOpen(true);
                        }}
                        size="sm"
                        className="bg-primary hover:bg-primary/90"
                      >
                        Invite to Job
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {likedFreelancers.length === 0 && (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">No liked freelancers yet</h3>
                    <p className="text-muted-foreground mb-4">Like freelancers you're interested in working with</p>
                    <Link to="/search">
                      <Button>Find Freelancers</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Following Tab */}
            <TabsContent value="following" className="space-y-6">
              {followingFreelancers.map((freelancer) => (
                <Card key={freelancer.id} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="font-bold text-primary text-lg">{freelancer.name.charAt(0)}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-1">{freelancer.name}</h3>
                          <p className="text-muted-foreground mb-2">{freelancer.title}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                            <span>⭐ {freelancer.rating}</span>
                            <span>•</span>
                            <span>{freelancer.hourlyRate}</span>
                            <span>•</span>
                            <span>{freelancer.completedJobs} jobs completed</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleFollow(freelancer.id)}
                        className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <UserPlus className="h-4 w-4" />
                        Following
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {freelancer.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {followingFreelancers.length === 0 && (
                <Card>
                  <CardContent className="p-8 text-center">
                    <UserPlus className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">Not following anyone yet</h3>
                    <p className="text-muted-foreground mb-4">Follow freelancers to stay updated with their latest work</p>
                    <Link to="/search">
                      <Button>Discover Freelancers</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />

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

export default Favorites;