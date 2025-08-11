import React, { useState, createContext, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, X, User, LogOut, Settings, BarChart3, Users, Crown, ChevronDown, Calendar, Award, Clock, Edit2, Save, Upload, Palette, Bell, Shield, HelpCircle, MessageCircle } from 'lucide-react';

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
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState('account');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // Profile and settings state
  const [profileData, setProfileData] = useState(() => {
    const saved = localStorage.getItem('creator-profile');
    return saved ? JSON.parse(saved) : {
      name: 'Sarah Johnson',
      username: 'sarah.creator',
      email: 'sarah@example.com',
      bio: 'Passionate educator and course creator with 10+ years of experience in web development. Love helping students achieve their goals!',
      avatar: null,
      joinDate: 'September 2023',
      coursesCreated: 8,
      totalStudents: 1247,
      certificatesIssued: 456
    };
  });

  const [editProfileData, setEditProfileData] = useState(profileData);

  // Appearance settings
  const [appearanceSettings, setAppearanceSettings] = useState(() => {
    const saved = localStorage.getItem('creator-appearance-settings');
    return saved ? JSON.parse(saved) : {
      theme: 'dark',
      fontSize: 'medium',
      compactMode: false,
      showTimestamps: true,
      animatedEmojis: true
    };
  });

  // Apply appearance settings
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', appearanceSettings.theme);
    document.documentElement.setAttribute('data-font-size', appearanceSettings.fontSize);
    document.documentElement.setAttribute('data-compact', appearanceSettings.compactMode.toString());
  }, [appearanceSettings]);

  // Save settings to localStorage
  React.useEffect(() => {
    localStorage.setItem('creator-profile', JSON.stringify(profileData));
  }, [profileData]);

  React.useEffect(() => {
    localStorage.setItem('creator-appearance-settings', JSON.stringify(appearanceSettings));
  }, [appearanceSettings]);

  const handleEditProfile = () => {
    setIsEditingProfile(true);
    setActiveSettingsTab('account');
    setShowSettings(true);
    setShowProfileDropdown(false);
  };

  const handleSaveProfile = () => {
    setProfileData(editProfileData);
    setIsEditingProfile(false);
  };

  const handleCancelEdit = () => {
    setEditProfileData(profileData);
    setIsEditingProfile(false);
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditProfileData(prev => ({ ...prev, avatar: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAppearanceChange = (key: string, value: any) => {
    setAppearanceSettings(prev => ({ ...prev, [key]: value }));
  };

  // Check if we're in a portal
  const isInPortal = location.pathname.startsWith('/org/');
  const isStudentPortal = location.pathname.startsWith('/org/learn');
  const isCreatorPortal = location.pathname.startsWith('/org/admin');

  // Check if we're in campus
  const isInCampus = location.pathname.includes('-campus');

  // Scroll to top when route changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
    // Close dropdowns when route changes
    setShowProfileDropdown(false);
    setShowSettings(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showProfileDropdown && !(event.target as Element).closest('.profile-dropdown')) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showProfileDropdown]);

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
                
                {/* Profile Dropdown */}
                {showProfileDropdown && (
                  <div className="absolute top-16 right-4 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 animate-bounce-in">
                    <div className="p-6">
                      {/* Profile Header */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          {profileData.avatar ? (
                            <img src={profileData.avatar} alt="Profile" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                              <Crown className="text-white" size={24} />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{profileData.name}</h3>
                          <p className="text-sm text-gray-600">@{profileData.username}</p>
                          <div className="flex items-center mt-1">
                            <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                            <span className="text-sm text-green-600">Online</span>
                          </div>
                        </div>
                      </div>

                      {/* About */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">About Me</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{profileData.bio}</p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">{profileData.coursesCreated}</div>
                          <div className="text-xs text-gray-600">Courses Created</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">{profileData.totalStudents.toLocaleString()}</div>
                          <div className="text-xs text-gray-600">Total Students</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">{profileData.certificatesIssued}</div>
                          <div className="text-xs text-gray-600">Certificates Issued</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-center">
                            <Calendar size={14} className="mr-1 text-gray-600" />
                            <div className="text-xs text-gray-600">Since {profileData.joinDate}</div>
                          </div>
                        </div>
                      </div>

                      {/* Recent Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Achievements</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <Award className="text-yellow-500" size={16} />
                            <span className="text-gray-700">Top Rated Instructor (2024)</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Award className="text-blue-500" size={16} />
                            <span className="text-gray-700">1000+ Students Milestone</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Award className="text-green-500" size={16} />
                            <span className="text-gray-700">Course Excellence Award</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2">
                        <button
                          onClick={handleEditProfile}
                          className="w-full flex items-center justify-center px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
                        >
                          <Edit2 size={16} className="mr-2" />
                          Edit Profile
                        </button>
                        <button
                          onClick={() => {
                            setShowSettings(true);
                            setShowProfileDropdown(false);
                          }}
                          className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <Settings size={16} className="mr-2" />
                          Settings
                        </button>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center justify-center px-4 py-2 bg-red-100 text-red-700 font-semibold rounded-lg hover:bg-red-200 transition-colors"
                        >
                          <LogOut size={16} className="mr-2" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
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
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  guidix.io
                </span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 relative">
                <button
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors profile-dropdown"
                >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="text-white" size={16} />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {isStudentPortal ? 'Alex Student' : 'Sarah Creator'}
                </span>
                <span className={`bg-${portalColor}-100 text-${portalColor}-700 text-xs px-2 py-1 rounded-full font-semibold`}>
                  {isStudentPortal ? 'STUDENT' : 'CREATOR'}
                </span>
                
                {/* Profile Dropdown */}
                {showProfileDropdown && (
                  <div className="absolute top-12 right-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 animate-bounce-in">
                    <div className="p-6">
                      {/* Profile Header */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          {profileData.avatar ? (
                            <img src={profileData.avatar} alt="Profile" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                              <Crown className="text-white" size={24} />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{profileData.name}</h3>
                          <p className="text-sm text-gray-600">@{profileData.username}</p>
                          <div className="flex items-center mt-1">
                            <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                            <span className="text-sm text-green-600">Online</span>
                          </div>
                        </div>
                      </div>

                      {/* About */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">About Me</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{profileData.bio}</p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">{profileData.coursesCreated}</div>
                          <div className="text-xs text-gray-600">Courses Created</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">{profileData.totalStudents.toLocaleString()}</div>
                          <div className="text-xs text-gray-600">Total Students</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-900">{profileData.certificatesIssued}</div>
                          <div className="text-xs text-gray-600">Certificates Issued</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-center">
                            <Calendar size={14} className="mr-1 text-gray-600" />
                            <div className="text-xs text-gray-600">Since {profileData.joinDate}</div>
                          </div>
                        </div>
                      </div>

                      {/* Recent Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Achievements</h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <Award className="text-yellow-500" size={16} />
                            <span className="text-gray-700">Top Rated Instructor (2024)</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Award className="text-blue-500" size={16} />
                            <span className="text-gray-700">1000+ Students Milestone</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Award className="text-green-500" size={16} />
                            <span className="text-gray-700">Course Excellence Award</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2">
                        <button
                          onClick={handleEditProfile}
                          className="w-full flex items-center justify-center px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
                        >
                          <Edit2 size={16} className="mr-2" />
                          Edit Profile
                        </button>
                        <button
                          onClick={() => {
                            setShowSettings(true);
                            setShowProfileDropdown(false);
                          }}
                          className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <Settings size={16} className="mr-2" />
                          Settings
                        </button>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center justify-center px-4 py-2 bg-red-100 text-red-700 font-semibold rounded-lg hover:bg-red-200 transition-colors"
                        >
                          <LogOut size={16} className="mr-2" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Settings Button (Bottom Left Style) */}
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                title="Settings"
              >
                <Settings size={18} />
                <span className="text-sm font-medium">Settings</span>
              </button>
              
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
        {isInPortal || isInCampus ? (
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
                  <ChevronDown size={16} className="text-gray-400" />
                </button>
                </Link>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowCampusSelect(true)}
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

        {/* Portal Modal */}
        {showPortalSelect && <PortalSelectModal />}

        {/* Settings Modal */}
        {showSettings && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-4xl h-[80vh] flex overflow-hidden animate-bounce-in">
              {/* Settings Sidebar */}
              <div className="w-64 bg-gray-50 p-6 border-r border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-gray-900">Settings</h2>
                  <button
                    onClick={() => {
                      setShowSettings(false);
                      setIsEditingProfile(false);
                      setEditProfileData(profileData);
                    }}
                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <X size={20} className="text-gray-600" />
                  </button>
                </div>
                
                <nav className="space-y-2">
                  {[
                    { id: 'account', name: 'My Account', icon: User },
                    { id: 'appearance', name: 'Appearance', icon: Palette },
                    { id: 'notifications', name: 'Notifications', icon: Bell },
                    { id: 'privacy', name: 'Privacy & Safety', icon: Shield },
                    { id: 'help', name: 'Help & Support', icon: HelpCircle }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveSettingsTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                        activeSettingsTab === tab.id
                          ? 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <tab.icon size={20} />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Settings Content */}
              <div className="flex-1 p-8 overflow-y-auto">
                {activeSettingsTab === 'account' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">My Account</h3>
                      <p className="text-gray-600">Manage your profile information and account settings</p>
                    </div>

                    {/* Profile Picture */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Profile Picture</h4>
                      <div className="flex items-center space-x-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden">
                          {editProfileData.avatar ? (
                            <img src={editProfileData.avatar} alt="Profile" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                              <Crown className="text-white" size={32} />
                            </div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label className="block">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleAvatarUpload}
                              className="hidden"
                            />
                            <span className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors cursor-pointer inline-flex items-center">
                              <Upload size={16} className="mr-2" />
                              Change Avatar
                            </span>
                          </label>
                          {editProfileData.avatar && (
                            <button
                              onClick={() => setEditProfileData(prev => ({ ...prev, avatar: null }))}
                              className="block px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                            >
                              Remove Avatar
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Profile Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
                        <input
                          type="text"
                          value={editProfileData.name}
                          onChange={(e) => setEditProfileData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                        <input
                          type="text"
                          value={editProfileData.username}
                          onChange={(e) => setEditProfileData(prev => ({ ...prev, username: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          value={editProfileData.email}
                          onChange={(e) => setEditProfileData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                        <textarea
                          value={editProfileData.bio}
                          onChange={(e) => setEditProfileData(prev => ({ ...prev, bio: e.target.value }))}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent resize-none"
                          placeholder="Tell others about yourself..."
                        />
                      </div>
                    </div>

                    {/* Save/Cancel Buttons */}
                    {isEditingProfile && (
                      <div className="flex space-x-4 pt-6 border-t border-gray-200">
                        <button
                          onClick={handleSaveProfile}
                          className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
                        >
                          Save Changes
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {activeSettingsTab === 'appearance' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Appearance</h3>
                      <p className="text-gray-600">Customize how the interface looks and feels</p>
                    </div>

                    {/* Theme Selection */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Theme</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { id: 'dark', name: 'Dark', preview: 'bg-gray-800' },
                          { id: 'light', name: 'Light', preview: 'bg-white border-2 border-gray-200' },
                          { id: 'auto', name: 'Auto', preview: 'bg-gray-600' }
                        ].map((theme) => (
                          <button
                            key={theme.id}
                            onClick={() => handleAppearanceChange('theme', theme.id)}
                            className={`p-4 rounded-xl border-2 transition-all ${
                              appearanceSettings.theme === theme.id
                                ? 'border-yellow-500 bg-yellow-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className={`w-full h-16 rounded-lg mb-3 ${theme.preview}`}></div>
                            <div className="font-medium text-gray-900">{theme.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Font Size */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Font Size</h4>
                      <div className="space-y-3">
                        {[
                          { id: 'small', name: 'Small', size: 'text-sm' },
                          { id: 'medium', name: 'Medium', size: 'text-base' },
                          { id: 'large', name: 'Large', size: 'text-lg' }
                        ].map((size) => (
                          <label key={size.id} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="fontSize"
                              checked={appearanceSettings.fontSize === size.id}
                              onChange={() => handleAppearanceChange('fontSize', size.id)}
                              className="text-yellow-500 focus:ring-yellow-300"
                            />
                            <span className={`font-medium ${size.size}`}>{size.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Display Options */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Display</h4>
                      <div className="space-y-4">
                        {[
                          { key: 'compactMode', label: 'Compact Mode', desc: 'Reduce spacing between elements' },
                          { key: 'showTimestamps', label: 'Show Timestamps', desc: 'Display message timestamps' },
                          { key: 'animatedEmojis', label: 'Animated Emojis', desc: 'Enable emoji animations' }
                        ].map((option) => (
                          <div key={option.key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div>
                              <div className="font-medium text-gray-900">{option.label}</div>
                              <div className="text-sm text-gray-600">{option.desc}</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={appearanceSettings[option.key as keyof typeof appearanceSettings] as boolean}
                                onChange={(e) => handleAppearanceChange(option.key, e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Other settings tabs would go here */}
                {activeSettingsTab === 'notifications' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Notifications</h3>
                      <p className="text-gray-600">Manage your notification preferences</p>
                    </div>
                    <div className="text-center py-12 text-gray-500">
                      Notification settings coming soon...
                    </div>
                  </div>
                )}

                {activeSettingsTab === 'privacy' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Privacy & Safety</h3>
                      <p className="text-gray-600">Control your privacy and safety settings</p>
                    </div>
                    <div className="text-center py-12 text-gray-500">
                      Privacy settings coming soon...
                    </div>
                  </div>
                )}

                {activeSettingsTab === 'help' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Help & Support</h3>
                      <p className="text-gray-600">Get help and support resources</p>
                    </div>
                    <div className="text-center py-12 text-gray-500">
                      Help resources coming soon...
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

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