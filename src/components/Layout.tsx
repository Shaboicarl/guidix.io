import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Settings, 
  Palette, 
  CreditCard, 
  User, 
  Bell, 
  LogOut,
  Crown,
  Award,
  Calendar,
  Edit2,
  Save,
  X,
  Upload,
  ChevronDown,
  Menu,
  Globe,
  Mail,
  Phone
} from 'lucide-react';

// Main Website Header Component
const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
              <BookOpen className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              guidix.io
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Courses
            </Link>
            <Link to="/campus-select" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Demo
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
            <Link 
              to="/campus-select" 
              className="px-6 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-600 transition-all duration-200"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link to="/courses" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Courses
              </Link>
              <Link to="/campus-select" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Demo
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
              <Link 
                to="/campus-select" 
                className="px-6 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-600 transition-all duration-200 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Main Website Footer Component
const MainFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold">guidix.io</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering learners worldwide with interactive online courses, expert instructors, 
              and a supportive community. Start your learning journey today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/campus-select" className="text-gray-300 hover:text-white transition-colors">Demo</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/campus-select" className="text-gray-300 hover:text-white transition-colors">Get Started</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Guidix.io. All rights reserved. Built with ❤️ for learners everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState('account');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  // Profile data with localStorage persistence
  const [profileData, setProfileData] = useState(() => {
    const saved = localStorage.getItem('creator-profile');
    return saved ? JSON.parse(saved) : {
      name: 'Sarah Creator',
      username: 'sarah_creator',
      email: 'sarah@example.com',
      bio: 'Passionate educator creating engaging courses for thousands of students worldwide.',
      avatar: null,
      coursesCreated: 8,
      totalStudents: 1247,
      certificatesIssued: 456,
      joinDate: 'September 2023'
    };
  });

  const [editProfileData, setEditProfileData] = useState(profileData);

  // Settings with localStorage persistence
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('creator-settings');
    return saved ? JSON.parse(saved) : {
      theme: 'light',
      fontSize: 'medium',
      compactMode: false,
      showTimestamps: true,
      animatedEmojis: true
    };
  });

  // Save profile data to localStorage
  useEffect(() => {
    localStorage.setItem('creator-profile', JSON.stringify(profileData));
  }, [profileData]);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('creator-settings', JSON.stringify(settings));
  }, [settings]);

  // Apply theme and font size
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme);
    document.documentElement.setAttribute('data-font-size', settings.fontSize);
    document.documentElement.setAttribute('data-compact', settings.compactMode.toString());
  }, [settings]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setShowProfileDropdown(false);
   setShowSettingsModal(false);
  }, [location]);

  const handleEditProfile = () => {
    setEditProfileData(profileData);
    setIsEditingProfile(true);
    setActiveSettingsTab('account');
    setShowSettingsModal(true);
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
        setEditProfileData(prev => ({
          ...prev,
          avatar: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSignOut = () => {
    navigate('/');
  };

  // Render marketing site chrome for main website pages only (exclude campus routes)
  if (location.pathname === '/' || 
      location.pathname === '/demo' || 
      location.pathname === '/contact' || 
      location.pathname === '/privacy' || 
      location.pathname === '/terms' || 
      location.pathname === '/courses' || 
      location.pathname === '/campus-select') {
    return (
      <>
        <MainHeader />
        <main>{children}</main>
        <MainFooter />
      </>
    );
  }

  const isCreatorPortal = location.pathname.startsWith('/org/admin');
  const isStudentPortal = location.pathname.startsWith('/org/learn');

  const creatorNavItems = [
    { path: '/org/admin', label: 'Dashboard', icon: BarChart3 },
    { path: '/org/admin/courses', label: 'Courses', icon: BookOpen },
    { path: '/org/admin/users', label: 'Users', icon: Users },
    { path: '/org/admin/branding', label: 'Branding', icon: Palette },
    { path: '/org/admin/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/org/admin/billing', label: 'Billing', icon: CreditCard },
    { path: '/org/admin/settings', label: 'Settings', icon: Settings }
  ];

  const studentNavItems = [
    { path: '/org/learn', label: 'Dashboard', icon: BarChart3 },
    { path: '/org/learn/catalog', label: 'Catalog', icon: BookOpen },
    { path: '/org/learn/certificates', label: 'Certificates', icon: Award },
    { path: '/org/learn/profile', label: 'Profile', icon: User }
  ];

  const navItems = isCreatorPortal ? creatorNavItems : studentNavItems;

  const SettingsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-bounce-in">
        <div className="flex h-[600px]">
          {/* Settings Sidebar */}
          <div className="w-64 bg-gray-50 p-4 border-r border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Settings</h2>
              <button
                onClick={() => {
                  setShowSettingsModal(false);
                  setIsEditingProfile(false);
                }}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>
            
            <nav className="space-y-2">
              {[
                { id: 'account', label: 'My Account', icon: User },
                { id: 'appearance', label: 'Appearance', icon: Palette },
                { id: 'notifications', label: 'Notifications', icon: Bell },
                { id: 'privacy', label: 'Privacy & Safety', icon: Settings },
                { id: 'support', label: 'Help & Support', icon: BookOpen }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSettingsTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg transition-colors ${
                    activeSettingsTab === tab.id
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon size={18} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Settings Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {activeSettingsTab === 'account' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">My Account</h3>
                  {!isEditingProfile && (
                    <button
                      onClick={() => setIsEditingProfile(true)}
                      className="flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                    >
                      <Edit2 size={16} className="mr-2" />
                      Edit Profile
                    </button>
                  )}
                </div>

                <div className="flex items-center space-x-6">
                  <div className="relative">
                    {(isEditingProfile ? editProfileData.avatar : profileData.avatar) ? (
                      <img
                        src={isEditingProfile ? editProfileData.avatar : profileData.avatar}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <Crown className="text-white" size={32} />
                      </div>
                    )}
                    {isEditingProfile && (
                      <div className="mt-2">
                        <label className="cursor-pointer">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarUpload}
                            className="hidden"
                          />
                          <div className="flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                            <Upload size={14} className="mr-1" />
                            <span className="text-sm">Upload</span>
                          </div>
                        </label>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        {isEditingProfile ? (
                          <input
                            type="text"
                            value={editProfileData.name}
                            onChange={(e) => setEditProfileData(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                          />
                        ) : (
                          <p className="text-gray-900 font-medium">{profileData.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        {isEditingProfile ? (
                          <input
                            type="text"
                            value={editProfileData.username}
                            onChange={(e) => setEditProfileData(prev => ({ ...prev, username: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                          />
                        ) : (
                          <p className="text-gray-600">@{profileData.username}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  {isEditingProfile ? (
                    <input
                      type="email"
                      value={editProfileData.email}
                      onChange={(e) => setEditProfileData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  {isEditingProfile ? (
                    <textarea
                      value={editProfileData.bio}
                      onChange={(e) => setEditProfileData(prev => ({ ...prev, bio: e.target.value }))}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent resize-none"
                    />
                  ) : (
                    <p className="text-gray-600">{profileData.bio}</p>
                  )}
                </div>

                {isEditingProfile && (
                  <div className="flex space-x-3 pt-4 border-t border-gray-200">
                    <button
                      onClick={handleSaveProfile}
                      className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Save size={16} className="mr-2" />
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <X size={16} className="mr-2" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeSettingsTab === 'appearance' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Appearance</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Theme</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'light', name: 'Light', preview: 'bg-white border-gray-200' },
                      { id: 'dark', name: 'Dark', preview: 'bg-gray-800 border-gray-600' },
                      { id: 'auto', name: 'Auto', preview: 'bg-gradient-to-r from-white to-gray-800 border-gray-400' }
                    ].map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => handleSettingChange('theme', theme.id)}
                        className={`p-4 border-2 rounded-lg transition-all ${
                          settings.theme === theme.id
                            ? 'border-yellow-500 bg-yellow-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-full h-12 rounded ${theme.preview} mb-2`}></div>
                        <span className="text-sm font-medium">{theme.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Font Size</label>
                  <div className="space-y-2">
                    {[
                      { id: 'small', name: 'Small', size: 'text-sm' },
                      { id: 'medium', name: 'Medium', size: 'text-base' },
                      { id: 'large', name: 'Large', size: 'text-lg' }
                    ].map((size) => (
                      <button
                        key={size.id}
                        onClick={() => handleSettingChange('fontSize', size.id)}
                        className={`w-full p-3 text-left border rounded-lg transition-colors ${
                          settings.fontSize === size.id
                            ? 'border-yellow-500 bg-yellow-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className={`${size.size} font-medium`}>{size.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Display Options</h4>
                  
                  {[
                    { key: 'compactMode', label: 'Compact Mode', desc: 'Reduce spacing between elements' },
                    { key: 'showTimestamps', label: 'Show Timestamps', desc: 'Display message timestamps' },
                    { key: 'animatedEmojis', label: 'Animated Emojis', desc: 'Enable emoji animations' }
                  ].map((option) => (
                    <div key={option.key} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.desc}</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings[option.key as keyof typeof settings] as boolean}
                          onChange={(e) => handleSettingChange(option.key, e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSettingsTab === 'notifications' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Notifications</h3>
                <p className="text-gray-600">Notification settings will be available soon.</p>
              </div>
            )}

            {activeSettingsTab === 'privacy' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Privacy & Safety</h3>
                <p className="text-gray-600">Privacy settings will be available soon.</p>
              </div>
            )}

            {activeSettingsTab === 'support' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Help & Support</h3>
                <p className="text-gray-600">Support options will be available soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (location.pathname === '/' || location.pathname === '/demo' || location.pathname === '/contact' || 
      location.pathname === '/privacy' || location.pathname === '/terms' || location.pathname === '/campus-select' ||
      location.pathname === '/courses' ||
      location.pathname === '/student-campus' || location.pathname === '/creator-campus') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Logo and Portal Badge */}
            <div className="flex items-center space-x-4 mr-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold text-gray-900">guidix.io</span>
              </Link>
              
              {isCreatorPortal && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full">
                  Creator Portal
                </span>
              )}
              
              {isStudentPortal && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                  Student Portal
                </span>
              )}
            </div>

            {/* Navigation Items - Now on the left side */}
            <div className="hidden md:flex items-center space-x-6 flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? isCreatorPortal
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                 onClick={item.label === 'Settings' ? (e) => {
                   e.preventDefault();
                   setShowSettingsModal(true);
                 } : undefined}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* User Menu - Now on the right side */}
            <div className="flex items-center space-x-4 ml-auto">
              {/* Profile Dropdown */}
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                 className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  {profileData.avatar ? (
                    <img
                      src={profileData.avatar}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isCreatorPortal 
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                        : 'bg-gradient-to-r from-blue-400 to-purple-500'
                    }`}>
                      {isCreatorPortal ? (
                        <Crown className="text-white" size={16} />
                      ) : (
                        <User className="text-white" size={16} />
                      )}
                    </div>
                  )}
                  <span className="font-medium text-gray-900">{profileData.name}</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </button>

                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50 animate-bounce-in">
                    <div className="p-4">
                      {/* Profile Header */}
                      <div className="flex items-center space-x-3 mb-4">
                        {profileData.avatar ? (
                          <img
                            src={profileData.avatar}
                            alt="Profile"
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            isCreatorPortal 
                              ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                              : 'bg-gradient-to-r from-blue-400 to-purple-500'
                          }`}>
                            {isCreatorPortal ? (
                              <Crown className="text-white" size={24} />
                            ) : (
                              <User className="text-white" size={24} />
                            )}
                          </div>
                        )}
                        <div>
                          <h3 className="font-bold text-gray-900">{profileData.name}</h3>
                          <p className="text-sm text-gray-600">@{profileData.username}</p>
                          <div className="flex items-center mt-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                            <span className="text-xs text-gray-500">Online</span>
                          </div>
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-sm text-gray-600 mb-4">{profileData.bio}</p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                        <div className="text-center">
                          <div className="font-bold text-gray-900">{profileData.coursesCreated}</div>
                          <div className="text-xs text-gray-600">Courses</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-900">{profileData.totalStudents.toLocaleString()}</div>
                          <div className="text-xs text-gray-600">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-900">{profileData.certificatesIssued}</div>
                          <div className="text-xs text-gray-600">Certificates</div>
                        </div>
                      </div>

                      {/* Join Date & Achievements */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar size={14} className="mr-2" />
                          <span>Creator since {profileData.joinDate}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Award size={14} className="mr-2" />
                          <span>Top Educator Badge</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="space-y-2 pt-4 border-t border-gray-200">
                        <button
                          onClick={handleEditProfile}
                          className="w-full flex items-center px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Edit2 size={16} className="mr-3" />
                          <span>Edit Profile</span>
                        </button>
                        <button
                          onClick={() => {
                            setShowSettingsModal(true);
                            setShowProfileDropdown(false);
                          }}
                          className="w-full flex items-center px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Settings size={16} className="mr-3" />
                          <span>Settings</span>
                        </button>
                        <button
                          onClick={handleSignOut}
                          className="w-full flex items-center px-3 py-2 text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <LogOut size={16} className="mr-3" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Settings Modal */}
      {showSettingsModal && <SettingsModal />}
    </div>
  );
}