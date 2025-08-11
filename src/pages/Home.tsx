import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Zap, Shield, Star, ChevronRight, Play, CheckCircle, BarChart3, Palette, Globe2 } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Palette,
      title: "White-Label Branding",
      description: "Complete customization with your logo, colors, domain, and email templates. Make it truly yours."
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics",
      description: "Track student progress, course performance, and engagement with detailed insights and reports."
    },
    {
      icon: Zap,
      title: "Multi-Role Access",
      description: "Students learn, creators build courses, and admins manage everything with role-based permissions."
    },
    {
      icon: Globe2,
      title: "Multi-Tenant Architecture",
      description: "One platform, multiple organizations. Isolated data and branding for each tenant."
    }
  ];

  const testimonials = [
    {
      name: "TechCorp University",
      role: "Corporate Training",
      content: "Guidix helped us launch our employee training academy in just 2 weeks. The white-label features are perfect.",
      rating: 5
    },
    {
      name: "EduMaster Institute",
      role: "Online Education",
      content: "Our students love the seamless learning experience. The analytics help us improve course completion rates.",
      rating: 5
    },
    {
      name: "Coach Sarah",
      role: "Course Creator",
      content: "Finally, a platform that lets me focus on creating content while handling all the technical aspects beautifully.",
      rating: 5
    }
  ];

  const handleWatchDemo = () => {
    navigate('/demo');
  };

  const handleTryDemo = () => {
    navigate('/demo-login');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Your Branded <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Online Academy</span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">in Minutes</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Host your courses, engage your students, track progress — all under your own brand. 
              The complete white-label solution for organizations of any size.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={handleTryDemo}
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold rounded-2xl text-lg hover:from-blue-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Try the Demo</span>
                <ChevronRight size={20} />
              </button>
              
              <button 
                onClick={() => window.open('mailto:hello@guidix.io', '_blank')}
                className="px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl text-lg border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 flex items-center space-x-2"
              >
                <Users size={20} />
                <span>Book a Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300 rounded-full opacity-10 animate-pulse delay-500"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-semibold">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600 font-semibold">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-semibold">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 font-semibold">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Everything You Need for <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Launch your branded online academy with all the features you need to engage students and grow your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Organizations</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ready to Launch Your <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Academy?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            See how easy it is to create your own branded online learning platform. Try our demo today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleTryDemo}
              className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold rounded-2xl text-lg hover:from-blue-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Try the Demo</span>
              <CheckCircle size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}