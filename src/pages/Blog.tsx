
import { useState } from "react";
import { Calendar, User, ArrowRight, Search as SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredPost = {
    id: 1,
    title: "The Future of Remote Work: Trends and Predictions for 2024",
    excerpt: "Explore the latest trends shaping the future of remote work and freelancing. From AI integration to new collaboration tools, discover what's coming next.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop",
    category: "Industry Insights"
  };

  const blogPosts = [
    {
      id: 2,
      title: "10 Tips for Building a Successful Freelance Career",
      excerpt: "Learn the essential strategies for establishing and growing your freelance business.",
      author: "Mike Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=400&h=300&fit=crop",
      category: "Career Tips"
    },
    {
      id: 3,
      title: "How to Write Winning Project Proposals",
      excerpt: "Master the art of proposal writing to win more projects and clients.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
      category: "Business Tips"
    },
    {
      id: 4,
      title: "Understanding Platform Fees and Pricing Strategies",
      excerpt: "Navigate the complex world of freelance pricing and platform economics.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      category: "Finance"
    },
    {
      id: 5,
      title: "Client Communication Best Practices",
      excerpt: "Build stronger relationships with clients through effective communication.",
      author: "Lisa Park",
      date: "March 6, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      category: "Communication"
    },
    {
      id: 6,
      title: "Managing Multiple Projects Like a Pro",
      excerpt: "Time management and organization tips for handling multiple freelance projects.",
      author: "Alex Thompson",
      date: "March 4, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      category: "Productivity"
    },
    {
      id: 7,
      title: "Building Your Personal Brand as a Freelancer",
      excerpt: "Strategies for creating a strong personal brand that attracts premium clients.",
      author: "Sarah Johnson",
      date: "March 2, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      category: "Career Tips"
    },
    {
      id: 8,
      title: "The Rise of AI in Freelancing: Opportunities and Challenges",
      excerpt: "How artificial intelligence is transforming the freelance landscape.",
      author: "Mike Chen",
      date: "February 28, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      category: "Industry Insights"
    }
  ];

  const categories = ["All", "Industry Insights", "Career Tips", "Business Tips", "Finance", "Communication", "Productivity"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by the filter effect
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            FreelanceFlow Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Insights, tips, and stories from the world of freelancing and remote work.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSearch} className="flex">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="rounded-r-none pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                type="submit"
                className="rounded-l-none bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Search
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link to={`/blog/${featuredPost.id}`}>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={selectedCategory === category ? "default" : "outline"}
                className={`mb-2 ${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" 
                    : "hover:bg-blue-50"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results Info */}
      {(searchQuery || selectedCategory !== "All") && (
        <section className="pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {searchQuery || selectedCategory !== "All" ? "Search Results" : "Latest Articles"}
          </h2>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <User className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" className="w-full">
                        Read Article
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }} 
                  className="mt-4"
                >
                  Clear Search
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest articles and insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="rounded-r-none"
            />
            <Button className="rounded-l-none bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
