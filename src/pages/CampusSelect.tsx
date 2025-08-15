import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Crown, Users, Zap, MessageCircle, Settings } from 'lucide-react';

export default function CampusSelect() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
              <BookOpen className="text-white" size={32} />
            </div>
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              guidix.io
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Campus</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your role to access the learning campus. Connect, learn, and grow with our community.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Student Card */}
          <Link
            to="/student-campus"
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={40} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Student</h2>
              <p className="text-gray-600 text-lg">Join courses, connect with peers, and learn from expert instructors</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-blue-600" size={16} />
                </div>
                <span className="text-gray-700">Access to all course channels</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="text-blue-600" size={16} />
                </div>
                <span className="text-gray-700">Direct messaging with peers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="text-blue-600" size={16} />
                </div>
                <span className="text-gray-700">Voice channels for study groups</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="text-blue-600" size={16} />
                </div>
                <span className="text-gray-700">Real-time collaboration tools</span>
              </div>
            </div>

            <div className="text-center">
              <div className="px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold rounded-2xl group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-200">
                Enter as Student
              </div>
            </div>
          </Link>

          {/* Creator Card */}
          <Link
            to="/creator-campus"
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 p-8 border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Crown className="text-white" size={40} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Creator</h2>
              <p className="text-gray-600 text-lg">Create courses, manage students, and build learning communities</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Crown className="text-yellow-600" size={16} />
                </div>
                <span className="text-gray-700">Full course management tools</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Settings className="text-yellow-600" size={16} />
                </div>
                <span className="text-gray-700">Advanced moderation controls</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Users className="text-yellow-600" size={16} />
                </div>
                <span className="text-gray-700">Student analytics & insights</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="text-yellow-600" size={16} />
                </div>
                <span className="text-gray-700">Direct communication with students</span>
              </div>
            </div>

            <div className="text-center">
              <div className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-2xl group-hover:from-yellow-500 group-hover:to-orange-600 transition-all duration-200">
                Enter as Creator
              </div>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            New to Guidix? <Link to="/" className="text-blue-600 hover:text-blue-700 font-semibold">Learn more about our platform</Link>
          </p>
        </div>
      </div>
    </div>
  );
}