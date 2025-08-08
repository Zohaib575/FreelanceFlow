
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Office Address",
      content: "123 Business Street, Tech District, San Francisco, CA 94105"
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Phone Number",
      content: "+1 (555) 123-4567"
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: "Email Address",
      content: "contact@freelanceflow.com"
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM PST"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-xl border-0 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
                <h2 className="text-3xl font-bold text-white">Send us a Message</h2>
                <p className="text-blue-100 mt-2">We typically respond within 24 hours</p>
              </div>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <p className="text-lg text-slate-600 mb-8">
                  We're here to help and answer any questions you might have. We look forward to hearing from you.
                </p>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 p-3 bg-slate-50 rounded-lg">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 mb-1">{info.title}</h3>
                            <p className="text-slate-600">{info.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Map Placeholder */}
              <Card className="h-64 border-0 shadow-lg overflow-hidden">
                <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Find us at our San Francisco office</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Support Options */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Other Ways to Reach Us</h2>
            <p className="text-lg text-slate-600">Choose the method that works best for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">General Support</h3>
                <p className="text-slate-600 mb-4">For general questions and support</p>
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  support@freelanceflow.com
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Sales Inquiries</h3>
                <p className="text-slate-600 mb-4">Interested in our premium plans?</p>
                <Button variant="outline" className="border-green-200 text-green-600 hover:bg-green-50">
                  +1 (555) 123-SALES
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Live Chat</h3>
                <p className="text-slate-600 mb-4">Get instant help from our team</p>
                <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
