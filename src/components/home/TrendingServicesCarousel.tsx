import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

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

// Helper to get cards per page based on window width
function useCardsPerPage() {
  const [cardsPerPage, setCardsPerPage] = useState(3);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setCardsPerPage(1);
      else if (window.innerWidth < 1024) setCardsPerPage(2);
      else setCardsPerPage(3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return cardsPerPage;
}

const cardVariants = {
  initial: { opacity: 0, scale: 0.95, y: 40 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, duration: 0.6, bounce: 0.18 } },
  exit: { opacity: 0, scale: 0.95, y: -40, transition: { duration: 0.4 } }
};

const TrendingServicesResponsiveSlider = () => {
  const cardsPerPage = useCardsPerPage();
  const [page, setPage] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  // Calculate total pages
  const totalPages = Math.ceil(trendingServices.length / cardsPerPage);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearTimeout(timer);
  }, [page, totalPages]);

  // Get cards for current page
  const startIdx = page * cardsPerPage;
  const cardsToShow = trendingServices.slice(startIdx, startIdx + cardsPerPage);

  return (
    <section className="py-24 bg-gradient-to-br from-mist-blue/30 to-sage-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-soft-charcoal mb-6 font-space-grotesk">
            <span className="text-electric-purple">Trending</span> Services
          </h2>
          <p className="text-xl text-clay-grey max-w-3xl mx-auto">
            Discover the most popular and highly-rated services on our platform
          </p>
        </div>
        <div className={`flex flex-col items-center`}>
          <div className={`w-full ${cardsPerPage === 1 ? 'max-w-md' : cardsPerPage === 2 ? 'max-w-3xl' : 'max-w-5xl'} mx-auto`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={page + '-' + cardsPerPage}
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={cardVariants}
              >
                {cardsToShow.map((service) => (
                  <Link key={service.id} to={`/services/${service.id}`} className="flex flex-col flex-1 h-full">
                    <Card key={service.id} className="group bg-white/80 backdrop-blur-lg border-0 shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                      <div className="relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <button
                          type="button"
                          className="absolute top-3 right-3 h-10 w-10 p-0 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                          onClick={() => setFavorites(prev => prev.includes(service.id) ? prev.filter(fav => fav !== service.id) : [...prev, service.id])}
                        >
                          <Heart
                            className={`h-5 w-5 transition-colors duration-200 ${
                              favorites.includes(service.id)
                                ? "fill-red-500 text-red-500 animate-ping"
                                : "text-gray-600"
                            }`}
                          />
                        </button>
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-terracotta text-white text-xs animate-pulse">
                            {service.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col flex-1">
                        <div className="flex items-center mb-3">
                          <img
                            src={service.avatar}
                            alt={service.freelancer}
                            className="w-10 h-10 rounded-full mr-3 shadow-md"
                          />
                          <div>
                            <p className="text-base font-medium text-soft-charcoal">
                              {service.freelancer}
                            </p>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-terracotta text-terracotta mr-1" />
                              <span className="text-xs text-clay-grey">
                                {service.rating} ({service.reviews})
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-soft-charcoal mb-2 line-clamp-2 font-space-grotesk">
                          {service.title}
                        </h3>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-clay-grey">
                            Delivery: {service.deliveryTime}
                          </span>
                          <span className="font-bold text-terracotta">
                            {service.price}
                          </span>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-terracotta to-olive hover:from-terracotta/90 hover:to-olive/90 group rounded-xl py-2 text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg mt-auto">
                          View Details
                          <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none border-2 border-transparent ${
                  idx === page ? "bg-terracotta scale-125 border-terracotta" : "bg-clay-grey hover:bg-terracotta/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingServicesResponsiveSlider;