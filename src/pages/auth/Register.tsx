
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Briefcase, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'freelancer' | 'admin'>('freelancer');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    skills: [] as string[],
    bio: ''
  });

  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration attempt:', { ...formData, userType });
    // Handle registration logic here
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-soft-charcoal">Choose Your Role</h3>
              <p className="text-clay-grey">How do you plan to use FreelanceFlow?</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <button
                type="button"
                onClick={() => setUserType('freelancer')}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  userType === 'freelancer'
                    ? 'border-terracotta bg-terracotta/5'
                    : 'border-clay-grey/30 hover:border-clay-grey/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    userType === 'freelancer' ? 'bg-terracotta' : 'bg-clay-grey'
                  }`}>
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-charcoal">I'm a Freelancer</h4>
                    <p className="text-clay-grey text-sm">Looking for work opportunities</p>
                  </div>
                </div>
              </button>
              
              <button
                type="button"
                onClick={() => setUserType('admin')}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  userType === 'admin'
                    ? 'border-terracotta bg-terracotta/5'
                    : 'border-clay-grey/30 hover:border-clay-grey/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    userType === 'admin' ? 'bg-terracotta' : 'bg-clay-grey'
                  }`}>
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-charcoal">I'm a Client</h4>
                    <p className="text-clay-grey text-sm">Looking to hire talent</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-soft-charcoal">Account Information</h3>
              <p className="text-clay-grey">Create your account credentials</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-soft-charcoal">
                  First Name
                </label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="h-12 bg-white border-clay-grey/30 focus:border-terracotta"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-soft-charcoal">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="h-12 bg-white border-clay-grey/30 focus:border-terracotta"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-soft-charcoal">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-clay-grey h-5 w-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 h-12 bg-white border-clay-grey/30 focus:border-terracotta"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-soft-charcoal">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-clay-grey h-5 w-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
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

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-soft-charcoal">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-clay-grey h-5 w-5" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="pl-10 h-12 bg-white border-clay-grey/30 focus:border-terracotta"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-soft-charcoal">Complete Your Profile</h3>
              <p className="text-clay-grey">Tell us more about yourself</p>
            </div>

            {userType === 'freelancer' && (
              <div className="space-y-2">
                <label htmlFor="skills" className="text-sm font-medium text-soft-charcoal">
                  Skills (comma separated)
                </label>
                <Input
                  id="skills"
                  type="text"
                  placeholder="React, Node.js, Design, Writing..."
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    skills: e.target.value.split(',').map(skill => skill.trim()) 
                  })}
                  className="h-12 bg-white border-clay-grey/30 focus:border-terracotta"
                />
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="bio" className="text-sm font-medium text-soft-charcoal">
                Bio
              </label>
              <textarea
                id="bio"
                rows={4}
                placeholder={`Tell us about yourself${userType === 'freelancer' ? ' and your experience' : ' and your business'}`}
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full px-3 py-2 border border-clay-grey/30 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta bg-white"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, acceptTerms: checked as boolean })
                }
                required
              />
              <label htmlFor="terms" className="text-sm text-clay-grey">
                I agree to the{' '}
                <Link to="/terms" className="text-terracotta hover:text-terracotta/80">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-terracotta hover:text-terracotta/80">
                  Privacy Policy
                </Link>
              </label>
            </div>
          </div>
        );
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
                Create Account
              </CardTitle>
            
            {/* Progress Indicator */}
            <div className="flex items-center justify-center space-x-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep 
                      ? 'bg-terracotta text-white' 
                      : 'bg-mist-blue/30 text-clay-grey'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-12 h-1 mx-2 ${
                      step < currentStep ? 'bg-terracotta' : 'bg-mist-blue/30'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit}>
              {renderStep()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrev}
                    className="flex items-center"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="bg-gradient-neo hover:shadow-xl transition-all duration-300 flex items-center"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-gradient-neo hover:shadow-xl transition-all duration-300"
                    disabled={!formData.acceptTerms}
                  >
                    Create Account
                  </Button>
                )}
              </div>
            </form>

            {/* Sign In Link */}
            <div className="text-center mt-6">
              <span className="text-clay-grey">Already have an account? </span>
              <Link 
                to="/auth/login" 
                className="text-terracotta hover:text-terracotta/80 font-medium"
              >
                Sign in
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

export default Register;
