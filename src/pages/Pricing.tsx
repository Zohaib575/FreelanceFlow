
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const plans = [
    {
      name: "Basic",
      price: billing === 'monthly' ? 0 : 0,
      priceDisplay: billing === 'monthly' ? 'Free' : 'Free',
      description: "Perfect for getting started",
      features: [
        "Post up to 3 jobs per month",
        "Basic job management",
        "Standard support",
        "5% platform fee",
        "Basic messaging"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      price: billing === 'monthly' ? 29 : 290,
      priceDisplay: billing === 'monthly' ? '$29' : '$290',
      description: "For growing businesses",
      features: [
        "Unlimited job postings",
        "Advanced job management",
        "Priority support",
        "3% platform fee",
        "Advanced messaging",
        "Analytics dashboard",
        "Featured job listings"
      ],
      buttonText: billing === 'monthly' ? 'Start Professional' : 'Start Professional (Yearly)',
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: billing === 'monthly' ? 99 : 990,
      priceDisplay: billing === 'monthly' ? '$99' : '$990',
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Custom branding",
        "Dedicated account manager",
        "1% platform fee",
        "API access",
        "Advanced analytics",
        "White-label solution",
        "SLA guarantee"
      ],
      buttonText: billing === 'monthly' ? 'Contact Sales' : 'Contact Sales (Yearly)',
      buttonVariant: "outline" as const,
      popular: false
    }
  ];
  const allFeatures = [
    "Post up to 3 jobs per month",
    "Unlimited job postings",
    "Basic job management",
    "Advanced job management",
    "Standard support",
    "Priority support",
    "5% platform fee",
    "3% platform fee",
    "1% platform fee",
    "Basic messaging",
    "Advanced messaging",
    "Analytics dashboard",
    "Featured job listings",
    "Custom branding",
    "Dedicated account manager",
    "API access",
    "Advanced analytics",
    "White-label solution",
    "SLA guarantee"
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include access to our global talent network.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="flex justify-center items-center gap-4 mb-10" data-aos="fade-up">
        <span className={`font-semibold ${billing === 'monthly' ? 'text-blue-600' : 'text-gray-400'}`}>Monthly</span>
        <button
          className={`relative w-14 h-8 bg-gray-200 rounded-full flex items-center transition-colors duration-300 ${billing === 'yearly' ? 'bg-blue-600' : 'bg-gray-200'}`}
          onClick={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}
          aria-label="Toggle billing period"
        >
          <span
            className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow transition-transform duration-300 ${billing === 'yearly' ? 'translate-x-6' : ''}`}
          />
          <span className="absolute left-2 text-xs font-bold text-blue-600">M</span>
          <span className="absolute right-2 text-xs font-bold text-blue-600">Y</span>
        </button>
        <span className={`font-semibold ${billing === 'yearly' ? 'text-blue-600' : 'text-gray-400'}`}>Yearly <span className="text-xs font-normal">(2 months free)</span></span>
      </section>
      {/* Pricing Comparison Table */}
      <section className="overflow-x-auto" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-6xl mx-auto px-2">
          <table className="w-full border-separate border-spacing-y-4">
            <thead>
              <tr>
                <th className="text-left text-lg font-bold text-gray-700 py-4">Features</th>
                {plans.map((plan, idx) => (
                  <th key={plan.name} className={`text-center text-2xl font-bold py-4 ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-xl shadow-lg' : 'text-gray-700'}`}>{plan.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature, i) => (
                <tr key={feature} className="bg-white/80 hover:bg-blue-50 transition-colors">
                  <td className="py-3 px-4 text-gray-700 text-base border-l-4 border-transparent font-medium">{feature}</td>
                  {plans.map((plan, idx) => (
                    <td key={plan.name} className="text-center py-3 px-4">
                      {plan.features.includes(feature) ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600 font-bold shadow-sm">
                          <Check className="h-5 w-5" />
                        </span>
                      ) : (
                        <span className="inline-block w-7 h-7 rounded-full bg-gray-100 text-gray-300 font-bold">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              {/* Pricing Row */}
              <tr className="bg-gradient-to-r from-blue-50 to-purple-50">
                <td className="py-6 px-4 text-lg font-bold text-gray-900 border-l-4 border-blue-500">Price</td>
                {plans.map((plan, idx) => (
                  <td key={plan.name} className={`text-center py-6 px-4 text-3xl font-extrabold ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg' : 'text-gray-900'}`}>
                    {plan.priceDisplay}
                    {plan.price !== 0 && <span className="text-base font-normal ml-1">/mo</span>}
                  </td>
                ))}
              </tr>
              {/* CTA Row */}
              <tr>
                <td></td>
                <td colSpan={plans.length} className="py-4">
                  <div className="flex flex-col md:flex-row justify-center items-center">
                    {plans.map((plan, idx) => (
                      <Link key={plan.name} to="/auth/register" className="w-full md:w-full mx-2">
                        <Button 
                          variant={plan.buttonVariant} 
                          className={`w-full py-3 text-lg font-bold rounded-xl mt-2 ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg scale-105' : ''}`}
                        >
                          {plan.buttonText}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Can I change my plan anytime?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Is there a setup fee?</h3>
              <p className="text-gray-600">No, there are no setup fees. You only pay the monthly subscription fee for your chosen plan.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
