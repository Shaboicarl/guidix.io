import React, { useState, createContext, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, X, User, LogOut, Settings, BarChart3, Users, Crown } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

interface AuthContextType {
  showLoginModal: () => void;
  showSignupModal: () => void;
  currentRole: 'student' | 'creator' | null;
  setCurrentRole: (role: 'student' | 'creator' | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPortalSelect, setShowPortalSelect] = useState(false);
  const [showCampusSelect, setShowCampusSelect] = useState(false);
  const [currentRole, setCurrentRole] = useState<'student' | 'creator' | null>(null);

  // Check if we're in a portal
  const isInPortal = location.pathname.startsWith('/org/');
  const isStudentPortal = location.pathname.startsWith('/org/learn');
  const isCreatorPortal = location.pathname.startsWith('/org/admin');

  // Check if we're in campus
  const isInCampus = location.pathname.includes('-campus');

  // Scroll to top when route changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handlePortalSelect = (role: 'student' | 'creator') => {
    setCurrentRole(role);
    setShowPortalSelect(false);
    if (role === 'student') {
      navigate('/org/learn');
    } else {
      navigate('/org/admin');
    }
  };

  const handleLogout = () => {
    setCurrentRole(null);
    navigate('/');
  };

  const CampusSelectModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-4xl relative animate-bounce-in">
        <button
          onClick={() => setShowCampusSelect(false)}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        
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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Student Campus */}
          <button
            onClick={() => {
              setShowCampusSelect(false);
              navigate('/student-campus');
            }}
            className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 text-left"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Student Campus</h2>
            <p className="text-gray-600 text-lg mb-6">Join course channels, connect with peers, and collaborate in real-time.</p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-700">Course-based chat channels</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-700">Voice channels for study groups</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-700">Direct messaging with instructors</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-700">Real-time collaboration tools</span>
              </div>
            </div>
          </button>

          {/* Creator Campus */}
          <button
            onClick={() => {
              setShowCampusSelect(false);
              navigate('/creator-campus');
            }}
            className="group bg-gradient-to-br from-yellow-50 to-orange-100 rounded-3xl p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 text-left"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Crown className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Creator Campus</h2>
            <p className="text-gray-600 text-lg mb-6">Manage courses, moderate discussions, and engage with your students.</p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-700">Advanced moderation tools</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-700">Student progress monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-700">Course channel management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-700">Direct student communication</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const PortalSelectModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 w-full max-w-4xl relative animate-bounce-in">
        <button
          onClick={() => setShowPortalSelect(false)}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        
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
            Choose Your <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Portal</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your role to access the learning platform. Experience the power of our white-label solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Student Portal */}
          <button
            onClick={() => handlePortalSelect('student')}
            className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 text-left"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <User className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Student Portal</h2>
            <p className="text-gray-600 text-lg mb-6">Access courses, track progress, earn certificates, and engage with learning content.</p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-700">Course catalog and enrollment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-700">Interactive video player</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-700">Progress tracking & certificates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-700">Personal dashboard & profile</span>
              </div>
            </div>
          </button>

          {/* Creator Portal */}
          <button
            onClick={() => handlePortalSelect('creator')}
            className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-2 text-left"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Creator Portal</h2>
            <p className="text-gray-600 text-lg mb-6">Manage courses, students, analytics, and customize your branded learning platform.</p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-700">Course creation & management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-700">Student & user management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-700">Analytics & reporting</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-700">Branding & customization</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  // Portal Navigation
  const PortalNav = () => {
    if (!isInPortal && !isInCampus) return null;

    // Campus Navigation
    if (isInCampus) {
      return (
        <nav className="bg-gray-900 border-b border-gray-700 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold text-white">
                  guidix.io
                </span>
              </Link>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowCampusSelect(true)}
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-colors"
                >
                  Switch Campus
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Exit Campus"
                >
                  <LogOut size={18} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      );
    }

    const studentNavItems = [
      { path: '/org/learn', label: 'Dashboard' },
      { path: '/org/learn/catalog', label: 'Catalog' },
      { path: '/org/learn/certificates', label: 'Certificates' },
      { path: '/org/learn/profile', label: 'Profile' }
    ];

    const creatorNavItems = [
      { path: '/org/admin', label: 'Dashboard' },
      { path: '/org/admin/courses', label: 'Courses' },
      { path: '/org/admin/users', label: 'Users' },
      { path: '/org/admin/branding', label: 'Branding' },
      { path: '/org/admin/analytics', label: 'Analytics' },
      { path: '/org/admin/billing', label: 'Billing' }
    ];

    const navItems = isStudentPortal ? studentNavItems : creatorNavItems;
    const portalColor = isStudentPortal ? 'blue' : 'purple';

    return (
      <nav className={`bg-white/90 backdrop-blur-md border-b border-${portalColor}-100 sticky top-0 z-40`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className={`w-10 h-10 bg-gradient-to-r from-${portalColor}-400 to-${portalColor}-500 rounded-xl flex items-center justify-center`}>
                  <BookOpen className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  guidix.io
                </span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                  <User className="text-white" size={16} />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {isStudentPortal ? 'Alex Student' : 'Sarah Creator'}
                </span>
                <span className={`bg-${portalColor}-100 text-${portalColor}-700 text-xs px-2 py-1 rounded-full font-semibold`}>
                  {isStudentPortal ? 'STUDENT' : 'CREATOR'}
                </span>
              </div>
              
              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  const authContextValue: AuthContextType = {
    showLoginModal: () => setShowPortalSelect(true),
    showSignupModal: () => setShowPortalSelect(true),
    currentRole,
    setCurrentRole
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Navigation */}
        {isInPortal ? (
          <PortalNav />
        ) : (
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
                    onClick={() => navigate('/campus-select')}
                    className="px-6 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-200"
                  >
                    Open Guidix.io
                  </button>
                </div>
              </div>
            </div>
          </nav>
        )}

        {/* Main Content */}
        <main>{children}</main>

        {/* Campus Modal */}
        {showCampusSelect && <CampusSelectModal />}

        {/* Footer - Only show on marketing pages */}
        {!isInPortal && !isInCampus && (
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
                    Empowering organizations worldwide with white-label online learning platforms. 
                    Your brand, your content, our technology.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-4">Platform</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><button onClick={() => setShowPortalSelect(true)} className="hover:text-white transition-colors">Student Portal</button></li>
                    <li><button onClick={() => setShowPortalSelect(true)} className="hover:text-white transition-colors">Creator Portal</button></li>
                    <li><button onClick={() => setShowCampusSelect(true)} className="hover:text-white transition-colors">Campus</button></li>
                    <li><Link to="/demo" className="hover:text-white transition-colors">Demo</Link></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-4">Support</h4>
                  <ul className="space-y-2 text-gray-400">
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
        )}
      </div>
    </AuthContext.Provider>
  );
}