
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Terms = () => {
  const highlights = [
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Service Agreement",
      description: "These terms govern your use of the FreelanceFlow platform and services."
    },
    {
      icon: <Scale className="h-6 w-6 text-green-600" />,
      title: "User Rights & Responsibilities",
      description: "Both freelancers and clients have specific rights and obligations on our platform."
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "Platform Protection",
      description: "We maintain policies to ensure a safe and fair marketplace for all users."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-orange-600" />,
      title: "Important Limitations",
      description: "Please review our liability limitations and dispute resolution procedures."
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
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Last updated: March 1, 2024
          </p>
          <p className="text-lg text-gray-600">
            Please read these Terms of Service carefully before using FreelanceFlow.
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Terms Overview</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <div className="text-gray-700 space-y-4">
                  <p>By accessing and using FreelanceFlow ("the Platform", "our Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                  <p>These Terms of Service ("Terms") apply to all users of the platform, including freelancers, clients, and visitors.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Platform Description</h2>
                <div className="text-gray-700 space-y-4">
                  <p>FreelanceFlow is an online marketplace that connects businesses and individuals ("Clients") with skilled professionals ("Freelancers") for various projects and services.</p>
                  <p>Our platform facilitates:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Job posting and project management</li>
                    <li>Freelancer discovery and hiring</li>
                    <li>Communication between clients and freelancers</li>
                    <li>Payment processing and escrow services</li>
                    <li>Review and rating systems</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
                <div className="text-gray-700 space-y-4">
                  <h3 className="text-lg font-semibold">Account Creation</h3>
                  <p>To use our services, you must create an account and provide accurate, complete information. You are responsible for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Maintaining the confidentiality of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use</li>
                    <li>Ensuring your information remains current and accurate</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold">Eligibility</h3>
                  <p>You must be at least 18 years old and legally capable of entering into contracts to use our platform.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct and Responsibilities</h2>
                <div className="text-gray-700 space-y-4">
                  <h3 className="text-lg font-semibold">Acceptable Use</h3>
                  <p>You agree to use the platform only for lawful purposes and in accordance with these Terms. You will not:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violate any laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Post false, misleading, or deceptive content</li>
                    <li>Engage in fraudulent activities</li>
                    <li>Harass, threaten, or harm other users</li>
                    <li>Attempt to circumvent platform fees</li>
                    <li>Use automated systems to access the platform</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold">Professional Standards</h3>
                  <p>All users are expected to maintain professional standards in their interactions and work quality.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Freelancer Terms</h2>
                <div className="text-gray-700 space-y-4">
                  <h3 className="text-lg font-semibold">Service Delivery</h3>
                  <p>Freelancers agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide services as described in project proposals</li>
                    <li>Meet agreed-upon deadlines and milestones</li>
                    <li>Communicate professionally with clients</li>
                    <li>Deliver work that meets professional standards</li>
                    <li>Respect client confidentiality and intellectual property</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold">Profile Accuracy</h3>
                  <p>Freelancers must maintain accurate profiles, including skills, experience, and portfolio items.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Client Terms</h2>
                <div className="text-gray-700 space-y-4">
                  <h3 className="text-lg font-semibold">Job Postings</h3>
                  <p>Clients agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide clear, accurate project descriptions</li>
                    <li>Set realistic budgets and timelines</li>
                    <li>Communicate requirements clearly</li>
                    <li>Pay freelancers as agreed upon completion</li>
                    <li>Provide timely feedback and approval</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold">Payment Obligations</h3>
                  <p>Clients are responsible for payment of agreed-upon fees upon satisfactory completion of work.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Fees and Payments</h2>
                <div className="text-gray-700 space-y-4">
                  <h3 className="text-lg font-semibold">Platform Fees</h3>
                  <p>FreelanceFlow charges service fees as follows:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Freelancers: 5% of total project value</li>
                    <li>Clients: 3% payment processing fee</li>
                    <li>Additional fees may apply for premium features</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold">Payment Processing</h3>
                  <p>All payments are processed through our secure payment system. We use third-party payment processors and escrow services to protect both parties.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
                <div className="text-gray-700 space-y-4">
                  <h3 className="text-lg font-semibold">Platform Content</h3>
                  <p>The FreelanceFlow platform, including its design, functionality, and content, is owned by us and protected by intellectual property laws.</p>
                  
                  <h3 className="text-lg font-semibold">User Content</h3>
                  <p>You retain ownership of content you create, but grant us a license to use, display, and distribute it as necessary to provide our services.</p>
                  
                  <h3 className="text-lg font-semibold">Work Product</h3>
                  <p>Ownership of work products created through the platform is governed by agreements between clients and freelancers.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Dispute Resolution</h2>
                <div className="text-gray-700 space-y-4">
                  <h3 className="text-lg font-semibold">Platform Resolution</h3>
                  <p>We provide dispute resolution services for conflicts between users. Our resolution process includes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mediation services</li>
                    <li>Evidence review</li>
                    <li>Binding arbitration when necessary</li>
                    <li>Refund and payment protection</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold">Legal Action</h3>
                  <p>Any legal disputes will be resolved through binding arbitration in accordance with applicable laws.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
                <div className="text-gray-700 space-y-4">
                  <p>FreelanceFlow provides a platform for connecting users but is not responsible for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The quality, safety, or legality of services provided</li>
                    <li>The truth or accuracy of user profiles or job postings</li>
                    <li>The ability of users to complete transactions</li>
                    <li>Any disputes between users</li>
                  </ul>
                  <p>Our total liability is limited to the fees paid to us in the twelve months preceding the claim.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
                <div className="text-gray-700 space-y-4">
                  <p>We may terminate or suspend accounts for violations of these terms. Users may close their accounts at any time, subject to completion of ongoing projects and payment obligations.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                <div className="text-gray-700 space-y-4">
                  <p>We reserve the right to modify these terms at any time. Significant changes will be communicated to users with 30 days notice. Continued use of the platform constitutes acceptance of updated terms.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                <div className="text-gray-700">
                  <p>For questions about these Terms of Service, please contact us at:</p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p><strong>Email:</strong> legal@freelanceflow.com</p>
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

export default Terms;
