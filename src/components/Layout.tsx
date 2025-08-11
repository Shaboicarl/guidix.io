import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, X, Mail, Lock, User, Users } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

interface AuthContextType {
  showLoginModal: () => void;
  showSignupModal: () => void;
}

const AuthContext = React.createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [showCampusModal, setShowCampusModal] = useState(false);

  // Scroll to top when route changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const authContextValue = {
    showLoginModal: () => setShowCampusModal(true),
    showSignupModal: () => setShowCampusModal(true)
  };

  const CampusModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-lg relative animate-bounce-in">
        <button
          onClick={() => setShowCampusModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Guidix Campus</h2>
          <p className="text-gray-600">Choose your role to access the platform</p>
        </div>

        <div className="space-y-4">
          <Link
            to="/campus/student"
            onClick={() => setShowCampusModal(false)}
            className="w-full p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl hover:from-blue-100 hover:to-blue-200 hover:border-blue-300 transition-all duration-200 block"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-800">Student</h3>
                <p className="text-gray-600">Access courses, join discussions, and learn from experts</p>
              </div>
            </div>
          </Link>
          
          <Link
            to="/campus/creator"
            onClick={() => setShowCampusModal(false)}
            className="w-full p-6 bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl hover:from-purple-100 hover:to-purple-200 hover:border-purple-300 transition-all duration-200 block"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-800">Creator</h3>
                <p className="text-gray-600">Create courses, manage students, and build your educational business</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  guidix.io
                </span>
              </Link>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowCampusModal(true)}
                  className="px-6 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-200"
                >
                  Open Guidix.io
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <Link to="/" className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <span className="text-2xl font-bold">guidix.io</span>
                </Link>
                <p className="text-gray-400 mb-4 max-w-md">
                  Empowering learners worldwide with accessible, high-quality online education. 
                  Your success is our mission.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Platform</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                  <li><Link to="/instructors" className="hover:text-white transition-colors">Instructors</Link></li>
                  <li><Link to="/certificates" className="hover:text-white transition-colors">Certificates</Link></li>
                  <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                  <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Guidix.io. All rights reserved. Empowering education worldwide.</p>
            </div>
          </div>
        </footer>

        {/* Modals */}
        {showCampusModal && <CampusModal />}
      </div>
    </AuthContext.Provider>
  );
}