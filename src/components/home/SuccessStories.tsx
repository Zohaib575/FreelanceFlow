import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

const successStories = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b012c5db?w=80&h=80&fit=crop&crop=face",
    quote: "FreelanceFlow connected us with exceptional talent that delivered beyond expectations. The quality is unmatched.",
    project: "Brand Redesign",
    rating: 5,
    amount: "$15,000"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    quote: "This platform transformed my freelance career. Premium clients and fair pricing make it the best marketplace.",
    project: "E-commerce Platform",
    rating: 5,
    amount: "$8,500"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Startup Founder",
    company: "InnovateLab",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    quote: "Found the perfect designer for our mobile app. The collaboration was seamless and results were outstanding.",
    project: "Mobile App Design",
    rating: 5,
    amount: "$6,200"
  },
  {
    id: 4,
    name: "David Park",
    role: "Content Strategist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    quote: "Consistent high-quality projects with reliable clients. FreelanceFlow has become my primary income source.",
    project: "Content Strategy",
    rating: 5,
    amount: "$4,800"
  },
  {
    id: 5,
    name: "Lisa Chen",
    role: "Product Manager",
    company: "StartupXYZ",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
    quote: "The talent pool here is incredible. We've hired multiple freelancers and each one exceeded our expectations.",
    project: "Product Development",
    rating: 5,
    amount: "$12,300"
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "Video Producer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    quote: "Amazing platform for creative professionals. Great clients, timely payments, and excellent support.",
    project: "Video Production",
    rating: 5,
    amount: "$7,900"
  },
  {
    id: 7,
    name: "Rachel Kim",
    role: "CEO",
    company: "GrowthCorp",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
    quote: "FreelanceFlow's vetting process ensures we only work with top-tier professionals. Highly recommended!",
    project: "Digital Marketing",
    rating: 5,
    amount: "$9,600"
  },
  {
    id: 8,
    name: "Tom Wilson",
    role: "Web Developer",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
    quote: "Best decision I made was joining this platform. Quality clients and projects that match my expertise perfectly.",
    project: "Web Development",
    rating: 5,
    amount: "$11,200"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      type: "spring" as const,
      bounce: 0.25
    }
  })
};

const SuccessStories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section className="py-24 bg-gradient-to-br from-mist-blue/30 to-sage-green/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-soft-charcoal mb-6 font-space-grotesk">
            Success <span className="text-electric-purple">Stories</span>
          </h2>
          <p className="text-xl text-clay-grey max-w-3xl mx-auto">
            Real results from our thriving community of freelancers and clients
          </p>
        </div>
      </div>
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2 md:px-0">
        {successStories.map((story, i) => (
          <motion.div
            key={story.id}
            className="relative h-full flex"
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            custom={i}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(162,89,255,0.15)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl group transition-all duration-300 overflow-hidden flex flex-col h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-4 relative">
                  <motion.img
                    src={story.avatar}
                    alt={story.name}
                    className="w-14 h-14 rounded-full mr-4 ring-2 ring-terracotta/20 shadow-lg"
                    whileHover={{ y: -6, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-soft-charcoal font-space-grotesk text-lg">{story.name}</h4>
                    <p className="text-sm text-clay-grey">{story.role}</p>
                    {story.company && (
                      <p className="text-xs text-clay-grey">{story.company}</p>
                    )}
                  </div>
                  <motion.div
                    className="flex"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: -8 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-terracotta text-terracotta" />
                    ))}
                  </motion.div>
                </div>
                <div className="relative mb-4">
                  <motion.div
                    className="absolute -top-2 -left-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.3, y: 0 }}
                    transition={{ delay: 0.3 * i, duration: 0.6 }}
                  >
                    <Quote className="h-7 w-7 text-terracotta/30" />
                  </motion.div>
                  <p className="text-soft-charcoal italic pl-8 leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-clay-grey/20 mt-auto">
                  <Badge variant="secondary" className="bg-sage-green/10 text-sage-green animate-pulse">
                    {story.project}
                  </Badge>
                  <motion.span
                    className="font-bold text-terracotta text-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 * i, type: "spring" }}
                  >
                    {story.amount}
                  </motion.span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <motion.button
          whileHover={{ scale: 1.07, background: "linear-gradient(90deg,#A259FF,#D2691E)" }}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-electric-purple to-terracotta text-white font-bold text-lg shadow-xl transition-all duration-300"
        >
          View More Stories
        </motion.button>
      </div>
    </section>
  );
};

export default SuccessStories;