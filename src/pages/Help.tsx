import React, { useState } from 'react';
import { Search, HelpCircle, BookOpen, MessageCircle, Mail, Phone, Clock, ChevronDown, ChevronRight, X } from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics of using Guidix",
      articles: 12
    },
    {
      icon: MessageCircle,
      title: "Courses & Learning",
      description: "Everything about taking courses",
      articles: 18
    },
    {
      icon: HelpCircle,
      title: "Account & Billing",
      description: "Manage your account and payments",
      articles: 8
    },
    {
      icon: Mail,
      title: "Technical Support",
      description: "Troubleshooting and technical issues",
      articles: 15
    }
  ];

  const popularArticles = [
    "How to enroll in a course",
    "Downloading certificates",
    "Resetting your password",
    "Refund policy and process",
    "System requirements",
    "Mobile app features",
    "Community guidelines",
    "Progress tracking"
  ];

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "To enroll in a course, simply browse our course catalog, click on the course you're interested in, and click the 'Enroll Now' button. You'll need to create an account and complete the payment process."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with a course, you can request a full refund within 30 days of purchase. Contact our support team to process your refund."
    },
    {
      question: "How long do I have access to a course?",
      answer: "Once you enroll in a course, you have lifetime access to all course materials. You can learn at your own pace and revisit the content whenever you need to."
    },
    {
      question: "Do I get a certificate when I complete a course?",
      answer: "Yes! Upon successful completion of a course, you'll receive a digital certificate that you can download and share on LinkedIn or include in your resume."
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Absolutely! Our platform is fully responsive and works great on all devices. We also have mobile apps for iOS and Android for the best mobile learning experience."
    },
    {
      question: "What if I need help during a course?",
      answer: "We have multiple support channels available. You can ask questions in the course discussion forums, contact the instructor directly, or reach out to our support team via email or live chat."
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24 hours",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      availability: "Mon-Fri, 9AM-6PM EST",
      action: "Call Now"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How Can We <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Help You?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Find answers to your questions or get in touch with our support team.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all text-lg"
            />
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 cursor-pointer border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <category.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-600 font-semibold">{category.articles} articles</span>
                <ChevronRight className="text-gray-400" size={16} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Popular Articles */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {popularArticles.map((article, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                  >
                    <BookOpen className="text-blue-500 mr-3" size={20} />
                    <span className="text-gray-700 hover:text-blue-600 transition-colors">{article}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronDown className="text-gray-400" size={20} />
                      ) : (
                        <ChevronRight className="text-gray-400" size={20} />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Support</h3>
              <div className="space-y-4">
                {contactOptions.map((option, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-all duration-200"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                        <option.icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">{option.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                        <div className="flex items-center text-xs text-gray-500 mb-3">
                          <Clock size={12} className="mr-1" />
                          {option.availability}
                        </div>
                        <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-200">
                          {option.action}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Tips</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Check your spam folder if you don't receive emails from us
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Clear your browser cache if you experience loading issues
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Use the search function to quickly find specific topics
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Join our community forum for peer-to-peer help
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}