
import { useState, useEffect } from "react";

const CustomLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-terracotta/10 via-sage-green/10 to-electric-purple/10 backdrop-blur-sm">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-terracotta/30 rounded-full animate-spin"></div>
            {/* Inner Ring */}
            <div className="absolute inset-2 border-4 border-sage-green/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-terracotta to-electric-purple rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Brand Name */}
          <h1 className="text-3xl font-bold text-soft-charcoal font-space-grotesk mb-2">
            Freelance<span className="text-terracotta">Flow</span>
          </h1>
          
          {/* Loading Text */}
          <div className="flex items-center justify-center space-x-1">
            <span className="text-clay-grey">Loading</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-terracotta rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-sage-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-electric-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-terracotta via-sage-green to-electric-purple rounded-full animate-[loading_2s_ease-in-out_forwards]"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomLoader;
