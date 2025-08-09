import React from 'react';
import { Award, CheckCircle, Download, Share2, Star, Users } from 'lucide-react';
import { useAuth } from '../components/Layout';

export default function Certificates() {
  const { showSignupModal } = useAuth();

  const certificateTypes = [
    {
      id: 1,
      title: "Personal Achievement Badge",
      description: "Mark your progress with completion badges for every course you finish",
      icon: Award,
      color: "from-blue-400 to-blue-600",
      features: ["Personal milestone tracking", "Digital download", "Portfolio showcase", "Growth documentation"]
    },
    {
      id: 2,
      title: "Skill Mastery Recognition",
      description: "Celebrate your expertise development in specific skill areas",
      icon: Star,
      color: "from-purple-400 to-purple-600",
      features: ["Skill documentation", "Personal branding", "Learning validation", "Entrepreneurial toolkit"]
    },
    {
      id: 3,
      title: "Learning Path Completion",
      description: "Complete comprehensive learning paths to master entire subject areas",
      icon: CheckCircle,
      color: "from-green-400 to-green-600",
      features: ["Holistic learning", "Comprehensive knowledge", "Personal expertise", "Business-ready skills"]
    }
  ];

  const sampleCertificates = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      student: "John Smith",
      date: "December 2024",
      instructor: "Sarah Johnson",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Data Science Professional",
      student: "Maria Garcia",
      date: "November 2024",
      instructor: "Dr. Michael Chen",
      skills: ["Python", "Machine Learning", "Data Analysis", "Statistics"],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      student: "David Wilson",
      date: "October 2024",
      instructor: "Emma Rodriguez",
      skills: ["SEO", "Social Media", "Content Marketing", "Analytics"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Document Your Growth",
      description: "Keep track of your learning journey and personal skill development"
    },
    {
      icon: Users,
      title: "Personal Branding",
      description: "Build your personal brand and showcase your commitment to continuous learning"
    },
    {
      icon: Share2,
      title: "Portfolio Building",
      description: "Create a comprehensive portfolio of your learning achievements and skills"
    },
    {
      icon: Download,
      title: "Personal Records",
      description: "Keep digital records of your learning milestones and achievements"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Track Your <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Learning Journey</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Document your personal growth and learning achievements as you build valuable skills for your entrepreneurial journey.
          </p>
        </div>

        {/* Certificate Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {certificateTypes.map((type) => (
            <div
              key={type.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${type.color}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <type.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Sample Certificates */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Learning <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-lg text-gray-600">Track your personal learning milestones and showcase your growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sampleCertificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-32 object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-90"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="text-white" size={48} />
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h3>
                    <p className="text-2xl font-bold text-purple-600 mb-1">{cert.student}</p>
                    <p className="text-sm text-gray-500">Completed {cert.date}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Instructor: {cert.instructor}</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-600 transition-all duration-200 flex items-center justify-center">
                      <Download size={16} className="mr-1" />
                      Download
                    </button>
                    <button className="px-3 py-2 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Certificates Matter</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Begin documenting your personal growth and skill development with our comprehensive courses.
          </p>
          <button 
            onClick={showSignupModal}
            className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold rounded-2xl text-lg hover:from-blue-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-200"
          >
            Browse Courses
          </button>
        </div>
      </div>
    </div>
  );
}