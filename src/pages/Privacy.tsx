import React from 'react';
import { Shield, Eye, Lock, Users, Globe, FileText } from 'lucide-react';

export default function Privacy() {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: FileText,
      content: [
        'Personal information you provide when creating an account (name, email, profile information)',
        'Course progress and learning data to track your educational journey',
        'Payment information processed securely through our payment partners',
        'Technical information like IP address, browser type, and device information',
        'Usage data to improve our platform and user experience'
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Users,
      content: [
        'Provide and maintain our educational services',
        'Process payments and manage your account',
        'Send course updates, certificates, and important notifications',
        'Improve our platform based on usage patterns and feedback',
        'Provide customer support and respond to your inquiries',
        'Ensure platform security and prevent fraudulent activities'
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: Globe,
      content: [
        'We do not sell your personal information to third parties',
        'Course instructors may see your progress in their courses',
        'Anonymous, aggregated data may be shared for research purposes',
        'We may share information with service providers who help operate our platform',
        'Legal requirements may necessitate information disclosure in certain circumstances'
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: [
        'Industry-standard encryption for data transmission and storage',
        'Regular security audits and vulnerability assessments',
        'Secure payment processing through PCI-compliant providers',
        'Access controls and authentication measures for our systems',
        'Employee training on data protection and privacy practices'
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      icon: Shield,
      content: [
        'Access and review your personal information',
        'Request corrections to inaccurate information',
        'Delete your account and associated data',
        'Export your data in a portable format',
        'Opt-out of non-essential communications',
        'Request information about how your data is processed'
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      icon: Eye,
      content: [
        'Essential cookies for platform functionality and security',
        'Analytics cookies to understand how you use our platform',
        'Preference cookies to remember your settings and choices',
        'You can control cookie settings through your browser',
        'Some features may not work properly if cookies are disabled'
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
            Privacy <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                At Guidix, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our 
                educational platform. We believe in transparency and want you to understand exactly how your data is handled.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{section.title}</h2>
                </div>
              </div>
              
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Data Retention */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Data Retention</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Data</h3>
              <p className="text-gray-700 mb-4">
                We retain your account information for as long as your account is active or as needed to provide services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Learning Data</h3>
              <p className="text-gray-700 mb-4">
                Course progress and certificates are retained to maintain your learning history and achievements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Communication Data</h3>
              <p className="text-gray-700 mb-4">
                Support communications are retained for quality assurance and to resolve any ongoing issues.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Deleted Accounts</h3>
              <p className="text-gray-700 mb-4">
                When you delete your account, we remove personal data within 30 days, except where legally required to retain it.
              </p>
            </div>
          </div>
        </div>

        {/* International Transfers */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">International Data Transfers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your information may be transferred to and processed in countries other than your own. We ensure that such 
            transfers comply with applicable data protection laws and that appropriate safeguards are in place to protect 
            your personal information.
          </p>
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-blue-800 text-sm">
              <strong>Note:</strong> We use standard contractual clauses and other legal mechanisms to ensure your data 
              receives adequate protection regardless of where it is processed.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions About Privacy?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or how we handle your personal information, 
            please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-600 transition-all duration-200">
              Contact Privacy Team
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200">
              Download PDF
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Email: privacy@guidix.io | Phone: +1 (555) 123-4567
          </p>
        </div>
      </div>
    </div>
  );
}