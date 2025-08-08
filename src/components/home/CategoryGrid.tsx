import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, PenTool, Camera, Megaphone, BarChart, Users, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Web Development",
    icon: Code,
    description: "Full-stack web solutions",
    accentColor: "#2E8DEF",
    bgColor: "rgba(46, 141, 239, 0.08)",
    searchQuery: "web development"
  },
  {
    id: 2,
    name: "Graphic Design",
    icon: Palette,
    description: "Visual branding & design",
    accentColor: "#9C27B0",
    bgColor: "rgba(156, 39, 176, 0.08)",
    searchQuery: "graphic design"
  },
  {
    id: 3,
    name: "Content Writing",
    icon: PenTool,
    description: "Compelling copy & articles",
    accentColor: "#4CAF50",
    bgColor: "rgba(76, 175, 80, 0.08)",
    searchQuery: "content writing"
  },
  {
    id: 4,
    name: "Photography",
    icon: Camera,
    description: "Professional photo services",
    accentColor: "#FF5722",
    bgColor: "rgba(255, 87, 34, 0.08)",
    searchQuery: "photography"
  },
  {
    id: 5,
    name: "Digital Marketing",
    icon: Megaphone,
    description: "Growth & marketing strategies",
    accentColor: "#673AB7",
    bgColor: "rgba(103, 58, 183, 0.08)",
    searchQuery: "digital marketing"
  },
  {
    id: 6,
    name: "Data Analysis",
    icon: BarChart,
    description: "Insights & analytics",
    accentColor: "#009688",
    bgColor: "rgba(0, 150, 136, 0.08)",
    searchQuery: "data analysis"
  },
  {
    id: 7,
    name: "Consulting",
    icon: Users,
    description: "Expert business advice",
    accentColor: "#6B8E23", // olive
    bgColor: "rgba(107, 142, 35, 0.08)", // olive with opacity
    searchQuery: "consulting"
  },
  {
    id: 8,
    name: "Translation",
    icon: Globe,
    description: "Multi-language services",
    accentColor: "#E91E63",
    bgColor: "rgba(233, 30, 99, 0.08)",
    searchQuery: "translation"
  }
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (searchQuery: string) => {
    navigate(`/jobs?category=${encodeURIComponent(searchQuery)}`);
  };

  const darkenColor = (color: string, percentage: number) => {
    const hex = color.replace('#', '');
    const r = Math.max(0, parseInt(hex.substr(0, 2), 16) * (1 - percentage / 100));
    const g = Math.max(0, parseInt(hex.substr(2, 2), 16) * (1 - percentage / 100));
    const b = Math.max(0, parseInt(hex.substr(4, 2), 16) * (1 - percentage / 100));
    return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#F5F0EB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6 font-space-grotesk">
            Explore <span className="text-terracotta">Top Categories</span>
          </h2>
          <p className="text-xl text-[#777777] max-w-3xl mx-auto">
            Discover opportunities across diverse fields with our premium freelance community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="group relative overflow-hidden border-0 cursor-pointer transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                style={{ 
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  backgroundImage: `linear-gradient(135deg, white 0%, ${category.bgColor} 100%)`
                }}
                onClick={() => handleCategoryClick(category.searchQuery)}
              >
                <CardContent className="p-4 h-56 flex flex-col items-center justify-center text-center">
                  {/* Icon Container */}
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: category.accentColor }}
                  >
                    <IconComponent className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-medium mb-2 font-space-grotesk" style={{ color: '#333333' }}>
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#777777' }}>
                    {category.description}
                  </p>

                  {/* Button */}
                  <Button
                    size="sm"
                    className="rounded-full px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:shadow-lg"
                    style={{ 
                      backgroundColor: category.accentColor,
                      border: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = darkenColor(category.accentColor, 15);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = category.accentColor;
                    }}
                  >
                    Explore Jobs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;