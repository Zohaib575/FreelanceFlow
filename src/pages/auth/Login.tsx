
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'freelancer' | 'admin'>('freelancer');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { ...formData, userType });
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-earthy">
      <Header />
      <div className="flex items-center justify-center min-h-screen p-4 pt-24">
        <div className="w-full max-w-md" data-aos="fade-up">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2">
              <div className="bg-gradient-neo p-3 rounded-xl">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-soft-charcoal">FreelanceFlow</span>
            </Link>
          </div>

          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-4 pb-6">
              <CardTitle className="text-2xl font-bold text-center text-soft-charcoal">
                Welcome Back
              </CardTitle>
              
              {/* User Type Toggle */}
              <div className="flex bg-mist-blue/20 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => setUserType('freelancer')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    userType === 'freelancer'
                      ? 'bg-white text-terracotta shadow-sm'
                      : 'text-clay-grey hover:text-soft-charcoal'
                  }`}
                >
                  Freelancer
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('admin')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    userType === 'admin'
                      ? 'bg-white text-terracotta shadow-sm'
                      : 'text-clay-grey hover:text-soft-charcoal'
                  }`}
                >
                  Client
                </button>
              </div>
            </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-soft-charcoal">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-clay-grey h-5 w-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 h-12 bg-white border-clay-grey/30 focus:border-terracotta"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-soft-charcoal">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-clay-grey h-5 w-5" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 pr-10 h-12 bg-white border-clay-grey/30 focus:border-terracotta"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-clay-grey hover:text-soft-charcoal"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, rememberMe: checked as boolean })
                    }
                  />
                  <label htmlFor="remember" className="text-sm text-clay-grey">
                    Remember me
                  </label>
                </div>
                <Link 
                  to="/auth/forgot-password" 
                  className="text-sm text-terracotta hover:text-terracotta/80 font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-neo hover:shadow-xl transition-all duration-300 text-white font-medium"
              >
                Sign In
              </Button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-clay-grey/30" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-clay-grey">Or continue with</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-3">
                <Button variant="outline" className="w-full h-12 border-clay-grey/30 hover:border-terracotta hover:bg-terracotta/5" type="button">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                  Continue with Google
                </Button>
                <Button variant="outline" className="w-full h-12 border-clay-grey/30 hover:border-terracotta hover:bg-terracotta/5" type="button">
                  <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5 mr-2" />
                  Continue with Facebook
                </Button>
              </div>
            </form>

            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <span className="text-clay-grey">Don't have an account? </span>
              <Link 
                to="/auth/register" 
                className="text-terracotta hover:text-terracotta/80 font-medium"
              >
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
