import React from 'react';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: [
        'By accessing and using Guidix, you accept and agree to be bound by these Terms of Service',
        'If you do not agree to these terms, you may not use our services',
        'We may update these terms from time to time, and continued use constitutes acceptance',
        'You must be at least 13 years old to use our services'
      ]
    },
    {
      id: 'account',
      title: 'Account Registration',
      icon: Shield,
      content: [
        'You must provide accurate and complete information when creating an account',
        'You are responsible for maintaining the security of your account credentials',
        'You must notify us immediately of any unauthorized use of your account',
        'One person may not maintain multiple accounts',
        'We reserve the right to suspend or terminate accounts that violate our terms'
      ]
    },
    {
      id: 'course-access',
      title: 'Course Access and Usage',
      icon: FileText,
      content: [
        'Course access is granted for personal, non-commercial educational use only',
        'You may not share, distribute, or resell course content',
        'Course materials are protected by intellectual property laws',
        'We grant you a limited, non-exclusive license to access purchased courses',
        'Course availability and content may change without notice'
      ]
    },
    {
      id: 'payments',
      title: 'Payments and Refunds',
      icon: Scale,
      content: [
        'All course prices are listed in USD and include applicable taxes',
        'Payment is required before accessing premium course content',
        'We offer a 30-day money-back guarantee for most courses',
        'Refund requests must be submitted through our support system',
        'Some promotional courses may have different refund policies'
      ]
    },
    {
      id: 'prohibited',
      title: 'Prohibited Activities',
      icon: XCircle,
      content: [
        'Attempting to hack, reverse engineer, or compromise our platform',
        'Sharing account credentials or course content with others',
        'Using our services for any illegal or unauthorized purpose',
        'Harassing, threatening, or abusing other users or staff',
        'Creating fake accounts or impersonating others',
        'Attempting to circumvent payment or access controls'
      ]
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: [
        'Our services are provided "as is" without warranties of any kind',
        'We are not liable for any indirect, incidental, or consequential damages',
        'Our total liability is limited to the amount you paid for our services',
        'We do not guarantee specific learning outcomes or career results',
        'You use our services at your own risk'
      ]
    }
  ];

  const lastUpdated = "January 1, 2025";

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Terms of <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Please read these terms carefully before using our educational platform and services.
          </p>
          <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Scale className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Guidix</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") govern your use of the Guidix educational platform and services. 
                By using our platform, you agree to these terms and our Privacy Policy. We strive to provide a 
                safe, effective, and enjoyable learning environment for all our users.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  section.id === 'prohibited' || section.id === 'liability' 
                    ? 'bg-gradient-to-r from-red-400 to-red-600' 
                    : 'bg-gradient-to-r from-blue-400 to-purple-500'
                }`}>
                  <section.icon className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{section.title}</h2>
                </div>
              </div>
              
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className={`w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 ${
                      section.id === 'prohibited' || section.id === 'liability' 
                        ? 'bg-red-400' 
                        : 'bg-blue-400'
                    }`}></div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Intellectual Property Rights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Content</h3>
              <p className="text-gray-700 mb-4">
                All course materials, videos, text, graphics, and other content are owned by Guidix or our content partners 
                and are protected by copyright and other intellectual property laws.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Content</h3>
              <p className="text-gray-700 mb-4">
                You retain ownership of any content you submit to our platform, but grant us a license to use it 
                for providing and improving our services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Trademarks</h3>
              <p className="text-gray-700 mb-4">
                Guidix, our logo, and other marks are trademarks of our company. You may not use them without 
                our written permission.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">DMCA Policy</h3>
              <p className="text-gray-700 mb-4">
                We respect intellectual property rights and will respond to valid DMCA takedown notices in 
                accordance with applicable law.
              </p>
            </div>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Termination</h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Termination by You</h3>
              <p className="text-yellow-700">
                You may terminate your account at any time by contacting our support team. Upon termination, 
                you will lose access to all courses and content.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Termination by Us</h3>
              <p className="text-red-700">
                We may suspend or terminate your account if you violate these terms, engage in prohibited activities, 
                or for any other reason at our discretion.
              </p>
            </div>
          </div>
        </div>

        {/* Governing Law */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Governing Law and Disputes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms are governed by the laws of the State of California, United States, without regard to 
            conflict of law principles. Any disputes arising from these Terms or your use of our services will 
            be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
          </p>
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-blue-800 text-sm">
              <strong>Note:</strong> Before initiating any legal proceedings, we encourage you to contact our 
              support team to resolve any issues amicably.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions About These Terms?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            If you have any questions about these Terms of Service or need clarification on any provisions, 
            please contact our legal team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-600 transition-all duration-200">
              Contact Legal Team
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200">
              Download PDF
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Email: legal@guidix.io | Phone: +1 (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
}