import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import React from 'react';

// Copy of trendingServices data (should be shared in real app)
const trendingServices = [
  {
    id: 1,
    title: "Modern React Web App Development",
    freelancer: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b012c5db?w=60&h=60&fit=crop&crop=face",
    rating: 4.9,
    reviews: 127,
    price: "Starting at $899",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    category: "Web Development",
    deliveryTime: "7 days"
  },
  {
    id: 2,
    title: "Professional Logo & Brand Identity",
    freelancer: "Marcus Rodriguez",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    rating: 4.8,
    reviews: 89,
    price: "Starting at $299",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop",
    category: "Graphic Design",
    deliveryTime: "3 days"
  },
  {
    id: 3,
    title: "SEO-Optimized Content Writing",
    freelancer: "Emily Johnson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    rating: 5.0,
    reviews: 156,
    price: "Starting at $149",
    image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b81d?w=400&h=250&fit=crop",
    category: "Content Writing",
    deliveryTime: "2 days"
  },
  {
    id: 4,
    title: "Mobile App UI/UX Design",
    freelancer: "David Kim",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    rating: 4.9,
    reviews: 203,
    price: "Starting at $599",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    category: "UI/UX Design",
    deliveryTime: "5 days"
  },
  {
    id: 5,
    title: "Digital Marketing Strategy",
    freelancer: "Lisa Park",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
    rating: 4.7,
    reviews: 94,
    price: "Starting at $399",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    category: "Digital Marketing",
    deliveryTime: "4 days"
  },
  {
    id: 6,
    title: "Video Editing & Motion Graphics",
    freelancer: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
    rating: 4.8,
    reviews: 178,
    price: "Starting at $249",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop",
    category: "Video Production",
    deliveryTime: "6 days"
  }
];

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = trendingServices.find(s => s.id === Number(id));

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Service not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-mist-blue/30 to-sage-green/20">
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back
        </Button>
        <Card className="overflow-hidden shadow-2xl">
          <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
          <CardContent className="p-8">
            <div className="flex items-center mb-4">
              <img src={service.avatar} alt={service.freelancer} className="w-14 h-14 rounded-full mr-4 shadow" />
              <div>
                <h2 className="text-2xl font-bold mb-1">{service.title}</h2>
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-terracotta text-white text-xs">{service.category}</Badge>
                  <span className="text-sm text-gray-500">by {service.freelancer}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-4 w-4 fill-terracotta text-terracotta" />
                  <span className="font-semibold">{service.rating}</span>
                  <span className="text-gray-500">({service.reviews} reviews)</span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-terracotta text-lg">{service.price}</span>
              <span className="ml-4 text-gray-600">Delivery: {service.deliveryTime}</span>
            </div>
            <p className="text-gray-700 mb-6">This is a sample description for the trending service. In a real app, this would be a detailed description of what the service includes, the process, and what makes it stand out.</p>
            <Button className="w-full bg-gradient-to-r from-terracotta to-olive hover:from-terracotta/90 hover:to-olive/90 text-white font-bold text-lg py-3 rounded-xl mt-4">
              Contact Freelancer
            </Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetails; 