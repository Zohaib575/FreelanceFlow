
import { Shield, Eye, Lock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Privacy = () => {
  const sections = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, update your profile, post jobs, submit proposals, or contact us for support."
    },
    {
      icon: <Eye className="h-6 w-6 text-green-600" />,
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send communications, and protect the security of our platform."
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Information Sharing",
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy."
    },
    {
      icon: <Lock className="h-6 w-6 text-orange-600" />,
      title: "Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    }
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Last updated: March 1, 2024
          </p>
          <p className="text-lg text-gray-600">
            Your privacy is important to us. This Privacy Policy explains how FreelanceFlow collects, uses, and protects your information.
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Privacy at a Glance</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-center mb-4">{section.icon}</div>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Privacy Policy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information Collection</h2>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  <p>We collect personal information that you voluntarily provide to us when you:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Register for an account</li>
                    <li>Create or update your profile</li>
                    <li>Post jobs or submit proposals</li>
                    <li>Communicate with other users</li>
                    <li>Contact our support team</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mt-6">Automatically Collected Information</h3>
                  <p>We automatically collect certain information when you visit our platform, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Usage patterns and preferences</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <div className="text-gray-700 space-y-4">
                  <p>We use your information for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and maintain our services</li>
                    <li>Process transactions and payments</li>
                    <li>Communicate with you about your account</li>
                    <li>Send important updates and notifications</li>
                    <li>Improve our platform and user experience</li>
                    <li>Prevent fraud and ensure security</li>
                    <li>Comply with legal obligations</li>
                    <li>Provide customer support</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
                <div className="text-gray-700 space-y-4">
                  <p>We may share your information in the following circumstances:</p>
                  
                  <h3 className="text-lg font-semibold">With Other Users</h3>
                  <p>Your profile information, work history, and reviews may be visible to other users to facilitate connections and collaborations.</p>
                  
                  <h3 className="text-lg font-semibold">Service Providers</h3>
                  <p>We may share information with third-party service providers who help us operate our platform, such as payment processors and cloud hosting services.</p>
                  
                  <h3 className="text-lg font-semibold">Legal Requirements</h3>
                  <p>We may disclose information if required by law, regulation, or legal process, or to protect the rights and safety of our users and platform.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <div className="text-gray-700 space-y-4">
                  <p>We implement industry-standard security measures to protect your information, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and monitoring</li>
                    <li>Access controls and authentication</li>
                    <li>Secure payment processing</li>
                    <li>Employee training on data protection</li>
                  </ul>
                  <p>However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights and Choices</h2>
                <div className="text-gray-700 space-y-4">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Update or correct inaccurate information</li>
                    <li>Delete your account and associated data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Control cookie preferences</li>
                    <li>Request data portability</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
                <div className="text-gray-700 space-y-4">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze platform usage and performance</li>
                    <li>Provide personalized content and features</li>
                    <li>Measure advertising effectiveness</li>
                  </ul>
                  <p>You can control cookie settings through your browser preferences.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
                <div className="text-gray-700">
                  <p>Our platform is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                <div className="text-gray-700">
                  <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
                <div className="text-gray-700">
                  <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our platform and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                <div className="text-gray-700">
                  <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p><strong>Email:</strong> privacy@freelanceflow.com</p>
                    <p><strong>Address:</strong> 123 Business Street, Tech District, San Francisco, CA 94105</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
