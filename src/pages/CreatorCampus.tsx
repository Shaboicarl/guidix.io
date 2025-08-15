import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  MessageCircle,
  Hash,
  Volume2,
  Mic,
  MicOff,
  Headphones,
  UserPlus,
  Shield,
  Pin,
  MoreHorizontal,
  TrendingUp,
  DollarSign
} from 'lucide-react';

export default function CreatorCampus() {
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showCreatorToolsModal, setShowCreatorToolsModal] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState('account');
  const [activeCreatorToolsTab, setActiveCreatorToolsTab] = useState('dashboard');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isDeafened, setIsDeafened] = useState(false);
  const [showCourseCategories, setShowCourseCategories] = useState(false);
  const [showCourseCreation, setShowCourseCreation] = useState(false);
  
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
    // Only apply theme within the Creator Campus component
    // No global document changes
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
    // Settings change handled by state update only
  };

  const handleSignOut = () => {
    navigate('/');
  };

  const channels = [
    { id: 1, name: 'general', type: 'text', unread: 3 },
    { id: 2, name: 'announcements', type: 'text', unread: 0 },
    { id: 3, name: 'course-discussions', type: 'text', unread: 7 },
    { id: 4, name: 'feedback', type: 'text', unread: 2 },
    { id: 5, name: 'General Voice', type: 'voice', users: ['Alex', 'Maria'] },
    { id: 6, name: 'Study Group', type: 'voice', users: [] },
    { id: 7, name: 'Office Hours', type: 'voice', users: ['Dr. Chen', 'Sarah'] }
  ];

  const onlineUsers = [
    { id: 1, name: 'Alex Student', status: 'online', role: 'student' },
    { id: 2, name: 'Maria Garcia', status: 'online', role: 'student' },
    { id: 3, name: 'Dr. Michael Chen', status: 'online', role: 'instructor' },
    { id: 4, name: 'Emma Rodriguez', status: 'away', role: 'instructor' },
    { id: 5, name: 'John Wilson', status: 'dnd', role: 'student' },
    { id: 6, name: 'Lisa Park', status: 'offline', role: 'instructor' }
  ];

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
                        {settings.theme === theme.id && (
                          <div className="mt-1 text-xs text-yellow-600 font-semibold">✓ Active</div>
                        )}
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
                        {settings.fontSize === size.id && (
                          <span className="ml-2 text-xs text-yellow-600 font-semibold">✓ Active</span>
                        )}
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

  const CourseCreationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-bounce-in ${
        settings.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-2xl font-bold ${
              settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Create New Course</h2>
            <button
              onClick={() => setShowCourseCreation(false)}
              className={`p-2 rounded-lg transition-colors ${
                settings.theme === 'dark' ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-200 text-gray-600'
              }`}
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Course Title</label>
              <input
                type="text"
                placeholder="Enter course title"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent ${
                  settings.theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Category</label>
              <select className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent ${
                settings.theme === 'dark' 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}>
                <option>Web Development</option>
                <option>Data Science</option>
                <option>Digital Marketing</option>
                <option>Design</option>
                <option>Mobile Development</option>
              </select>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Description</label>
              <textarea
                rows={4}
                placeholder="Describe your course"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent resize-none ${
                  settings.theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
            
            <div className="flex space-x-3 pt-4">
              <button
                onClick={() => setShowCourseCreation(false)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  settings.theme === 'dark'
                    ? 'bg-gray-600 hover:bg-gray-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle course creation
                  alert('Course created successfully!');
                  setShowCourseCreation(false);
                }}
                className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg transition-colors"
              >
                Create Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CreatorToolsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-bounce-in ${
        settings.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="flex h-[600px]">
          {/* Creator Tools Sidebar */}
          <div className={`w-64 p-4 border-r ${
            settings.theme === 'dark' 
              ? 'bg-gray-700 border-gray-600' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Crown className="text-white" size={20} />
                </div>
                <h2 className={`text-lg font-bold ${
                  settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Creator Tools</h2>
              </div>
              <button
                onClick={() => setShowCreatorToolsModal(false)}
                className={`p-2 rounded-lg transition-colors ${
                  settings.theme === 'dark' 
                    ? 'hover:bg-gray-600 text-gray-300' 
                    : 'hover:bg-gray-200 text-gray-600'
                }`}
              >
                <X size={20} />
              </button>
            </div>
            
            <nav className="space-y-2">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: BarChart3, color: 'yellow' },
                { id: 'courses', label: 'Course Management', icon: BookOpen, color: 'blue' },
                { id: 'students', label: 'Student Analytics', icon: Users, color: 'green' },
                { id: 'content', label: 'Content Creation', icon: Edit2, color: 'purple' },
                { id: 'marketing', label: 'Marketing Tools', icon: TrendingUp, color: 'red' },
                { id: 'monetization', label: 'Monetization', icon: DollarSign, color: 'emerald' }
              ].map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setActiveCreatorToolsTab(tool.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-3 text-left rounded-lg transition-colors group ${
                    activeCreatorToolsTab === tool.id
                      ? settings.theme === 'dark'
                        ? 'bg-gray-600 text-white'
                        : 'bg-yellow-100 text-yellow-700'
                      : settings.theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-600'
                        : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    activeCreatorToolsTab === tool.id
                      ? settings.theme === 'dark'
                        ? 'bg-gray-500'
                        : 'bg-yellow-200'
                      : `bg-${tool.color}-100 group-hover:bg-${tool.color}-200`
                  }`}>
                    <tool.icon size={20} className={`${
                      activeCreatorToolsTab === tool.id
                        ? settings.theme === 'dark'
                          ? 'text-white'
                          : 'text-yellow-600'
                        : `text-${tool.color}-600`
                    }`} />
                  </div>
                  <span className="font-medium">{tool.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Creator Tools Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {activeCreatorToolsTab === 'dashboard' && (
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="text-white" size={32} />
                  </div>
                  <h1 className={`text-3xl font-bold mb-2 ${
                    settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Creator Tools Hub</h1>
                  <p className={`text-lg ${
                    settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>Access all your course creation and management tools in one place</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Quick Stats */}
                  <div className={`p-6 rounded-xl border ${
                    settings.theme === 'dark'
                      ? 'bg-gray-700 border-gray-600'
                      : 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200'
                  }`}>
                    <h3 className={`text-lg font-semibold mb-4 ${
                      settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Quick Stats</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Active Courses</span>
                        <span className={`font-semibold ${
                          settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>8</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Total Students</span>
                        <span className={`font-semibold ${
                          settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>1,247</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Monthly Revenue</span>
                        <span className={`font-semibold ${
                          settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>$12,450</span>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className={`p-6 rounded-xl border ${
                    settings.theme === 'dark'
                      ? 'bg-gray-700 border-gray-600'
                      : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200'
                  }`}>
                    <h3 className={`text-lg font-semibold mb-4 ${
                      settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className={`text-sm ${
                          settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>New student enrolled in Web Development</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className={`text-sm ${
                          settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>Course review submitted</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className={`text-sm ${
                          settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>Payment received</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className={`md:col-span-2 p-6 rounded-xl border ${
                    settings.theme === 'dark'
                      ? 'bg-gray-700 border-gray-600'
                      : 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200'
                  }`}>
                    <h3 className={`text-lg font-semibold mb-4 ${
                      settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Quick Actions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <button 
                        onClick={() => {
                          setActiveCreatorToolsTab('courses');
                        }}
                        className={`flex flex-col items-center p-4 rounded-lg transition-colors border ${
                          settings.theme === 'dark'
                            ? 'bg-gray-600 border-gray-500 hover:bg-gray-500'
                            : 'bg-white border-green-200 hover:bg-green-100'
                        }`}
                      >
                        <BookOpen className={`mb-2 ${
                          settings.theme === 'dark' ? 'text-green-400' : 'text-green-600'
                        }`} size={24} />
                        <span className={`text-sm font-medium ${
                          settings.theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                        }`}>Create Course</span>
                      </button>
                      <button 
                        onClick={() => {
                          setActiveCreatorToolsTab('students');
                        }}
                        className={`flex flex-col items-center p-4 rounded-lg transition-colors border ${
                          settings.theme === 'dark'
                            ? 'bg-gray-600 border-gray-500 hover:bg-gray-500'
                            : 'bg-white border-green-200 hover:bg-green-100'
                        }`}
                      >
                        <Users className={`mb-2 ${
                          settings.theme === 'dark' ? 'text-green-400' : 'text-green-600'
                        }`} size={24} />
                        <span className={`text-sm font-medium ${
                          settings.theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                        }`}>View Students</span>
                      </button>
                      <button 
                        onClick={() => {
                          setActiveCreatorToolsTab('students');
                        }}
                        className={`flex flex-col items-center p-4 rounded-lg transition-colors border ${
                          settings.theme === 'dark'
                            ? 'bg-gray-600 border-gray-500 hover:bg-gray-500'
                            : 'bg-white border-green-200 hover:bg-green-100'
                        }`}
                      >
                        <BarChart3 className={`mb-2 ${
                          settings.theme === 'dark' ? 'text-green-400' : 'text-green-600'
                        }`} size={24} />
                        <span className={`text-sm font-medium ${
                          settings.theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                        }`}>Analytics</span>
                      </button>
                      <button 
                        onClick={() => {
                          setActiveCreatorToolsTab('monetization');
                        }}
                        className={`flex flex-col items-center p-4 rounded-lg transition-colors border ${
                          settings.theme === 'dark'
                            ? 'bg-gray-600 border-gray-500 hover:bg-gray-500'
                            : 'bg-white border-green-200 hover:bg-green-100'
                        }`}
                      >
                        <DollarSign className={`mb-2 ${
                          settings.theme === 'dark' ? 'text-green-400' : 'text-green-600'
                        }`} size={24} />
                        <span className={`text-sm font-medium ${
                          settings.theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                        }`}>Earnings</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeCreatorToolsTab === 'courses' && (
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h1 className={`text-3xl font-bold mb-2 ${
                    settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Course Management</h1>
                  <p className={`text-lg ${
                    settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>Create, edit, and manage your courses</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className={`p-6 rounded-xl border ${
                    settings.theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                  }`}>
                    <div className="text-center">
                      <BookOpen className={`mx-auto mb-4 ${
                        settings.theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`} size={48} />
                      <h3 className={`text-xl font-semibold mb-2 ${
                        settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Create New Course</h3>
                      <p className={`mb-4 ${
                        settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>Start building your next successful course</p>
                                             <button 
                         onClick={() => {
                           setShowCourseCreation(true);
                         }}
                         className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                           settings.theme === 'dark'
                             ? 'bg-blue-600 hover:bg-blue-700 text-white'
                             : 'bg-blue-600 hover:bg-blue-700 text-white'
                         }`}
                       >
                         Get Started
                       </button>
                    </div>
                  </div>

                  <div className={`p-6 rounded-xl border ${
                    settings.theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                  }`}>
                    <div className="text-center">
                      <Edit2 className={`mx-auto mb-4 ${
                        settings.theme === 'dark' ? 'text-green-400' : 'text-green-600'
                      }`} size={48} />
                      <h3 className={`text-xl font-semibold mb-2 ${
                        settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Edit Existing</h3>
                      <p className={`mb-4 ${
                        settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>Update and improve your courses</p>
                                             <button 
                         onClick={() => {
                           // Open course management interface
                           setActiveCreatorToolsTab('courses');
                         }}
                         className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                           settings.theme === 'dark'
                             ? 'bg-green-600 hover:bg-green-700 text-white'
                             : 'bg-green-600 hover:bg-green-700 text-white'
                         }`}
                       >
                         Manage Courses
                       </button>
                    </div>
                  </div>

                  <div className={`p-6 rounded-xl border ${
                    settings.theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                  }`}>
                    <div className="text-center">
                      <BarChart3 className={`mx-auto mb-4 ${
                        settings.theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                      }`} size={48} />
                      <h3 className={`text-xl font-semibold mb-2 ${
                        settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Course Analytics</h3>
                      <p className={`mb-4 ${
                        settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>Track performance and engagement</p>
                                             <button 
                         onClick={() => {
                           // Open analytics dashboard
                           setActiveCreatorToolsTab('students');
                         }}
                         className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                           settings.theme === 'dark'
                             ? 'bg-purple-600 hover:bg-purple-700 text-white'
                             : 'bg-purple-600 hover:bg-purple-700 text-white'
                         }`}
                       >
                         View Analytics
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeCreatorToolsTab === 'students' && (
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h1 className={`text-3xl font-bold mb-2 ${
                    settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Student Analytics</h1>
                  <p className={`text-lg ${
                    settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>Monitor student progress and engagement</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-6 rounded-xl border ${
                    settings.theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Enrollment Trends</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>This Month</span>
                        <span className={`font-semibold ${
                          settings.theme === 'dark' ? 'text-green-400' : 'text-green-600'
                        }`}>+23%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Last Month</span>
                        <span className={`font-semibold ${
                          settings.theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}>+15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Total Students</span>
                        <span className={`font-semibold ${
                          settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>1,247</span>
                      </div>
                    </div>
                  </div>

                  <div className={`p-6 rounded-xl border ${
                    settings.theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Completion Rates</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Web Development</span>
                        <span className={`font-semibold ${
                          settings.theme === 'dark' ? 'text-green-400' : 'text-green-600'
                        }`}>87%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Data Science</span>
                        <span className={`font-semibold ${
                          settings.theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}>92%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Marketing</span>
                        <span className={`font-semibold ${
                          settings.theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                        }`}>78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeCreatorToolsTab === 'content' && (
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h1 className={`text-3xl font-bold mb-2 ${
                    settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Content Creation</h1>
                  <p className={`text-lg ${
                    settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>Tools to help you create amazing content</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-6 rounded-xl border ${
                    settings.theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Video Editor</h3>
                    <p className={`mb-4 ${
                      settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>Professional video editing tools with templates</p>
                                         <button 
                       onClick={() => {
                         // Open video editor
                         setActiveCreatorToolsTab('content');
                       }}
                       className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                         settings.theme === 'dark'
                           ? 'bg-purple-600 hover:bg-purple-700 text-white'
                           : 'bg-purple-600 hover:bg-purple-700 text-white'
                       }`}
                     >
                       Open Editor
                     </button>
                  </div>

                  <div className={`p-6 rounded-xl border ${
                    settings.theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Quiz Builder</h3>
                    <p className={`mb-4 ${
                      settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>Create interactive quizzes and assessments</p>
                                         <button 
                       onClick={() => {
                         // Open quiz builder
                         setActiveCreatorToolsTab('content');
                       }}
                       className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                         settings.theme === 'dark'
                           ? 'bg-green-600 hover:bg-green-700 text-white'
                           : 'bg-green-600 hover:bg-green-700 text-white'
                       }`}
                     >
                       Build Quiz
                     </button>
                  </div>
                </div>
              </div>
            )}

            {activeCreatorToolsTab === 'marketing' && (
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h1 className={`text-3xl font-bold mb-2 ${
                    settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Marketing Tools</h1>
                  <p className={`text-lg ${
                    settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>Promote your courses and grow your audience</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-6 rounded-xl border ${
                    settings.theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Email Campaigns</h3>
                    <p className={`mb-4 ${
                      settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>Create and send email marketing campaigns</p>
                                         <button 
                       onClick={() => {
                         // Open email campaign creator
                         setActiveCreatorToolsTab('marketing');
                       }}
                       className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                         settings.theme === 'dark'
                           ? 'bg-red-600 hover:bg-red-700 text-white'
                           : 'bg-red-600 hover:bg-red-700 text-white'
                       }`}
                     >
                       Create Campaign
                     </button>
                  </div>

                  <div className={`p-6 rounded-xl border ${
                    settings.theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Social Media</h3>
                    <p className={`mb-4 ${
                      settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>Schedule and manage social media posts</p>
                                         <button 
                       onClick={() => {
                         // Open social media manager
                         setActiveCreatorToolsTab('marketing');
                       }}
                       className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                         settings.theme === 'dark'
                           ? 'bg-blue-600 hover:bg-blue-700 text-white'
                           : 'bg-blue-600 hover:bg-blue-700 text-white'
                       }`}
                     >
                       Manage Posts
                     </button>
                  </div>
                </div>
              </div>
            )}

            {activeCreatorToolsTab === 'monetization' && (
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h1 className={`text-3xl font-bold mb-2 ${
                    settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Monetization</h1>
                  <p className={`text-lg ${
                    settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>Track earnings and optimize revenue</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-6 rounded-xl border ${
                    settings.theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Revenue Overview</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>This Month</span>
                        <span className={`font-semibold ${
                          settings.theme === 'dark' ? 'text-green-400' : 'text-green-600'
                        }`}>$12,450</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Last Month</span>
                        <span className={`font-semibold ${
                          settings.theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}>$10,200</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>Growth</span>
                        <span className={`font-semibold ${
                          settings.theme === 'dark' ? 'text-green-400' : 'text-green-600'
                        }`}>+22%</span>
                      </div>
                    </div>
                  </div>

                  <div className={`p-6 rounded-xl border ${
                    settings.theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Pricing Strategy</h3>
                    <p className={`mb-4 ${
                      settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>Optimize your course pricing for maximum revenue</p>
                                         <button 
                       onClick={() => {
                         // Open pricing optimization tool
                         setActiveCreatorToolsTab('monetization');
                       }}
                       className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                         settings.theme === 'dark'
                           ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                           : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                       }`}
                     >
                       Optimize Pricing
                     </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`h-screen flex ${
      settings.theme === 'dark' ? 'bg-gray-900 text-white' : 
      settings.theme === 'light' ? 'bg-gray-100 text-gray-900' : 
      'bg-gray-600 text-gray-100'
    }`}>
      {/* Main Sidebar */}
      <div className={`w-64 flex flex-col ${
        settings.theme === 'dark' ? 'bg-gray-800 text-white' : 
        settings.theme === 'light' ? 'bg-white text-gray-900 border-r border-gray-200' : 
        'bg-gray-700 text-gray-100'
      }`}>
        {/* Server Header */}
        <div className={`p-4 border-b ${
          settings.theme === 'dark' ? 'border-gray-700' : 
          settings.theme === 'light' ? 'border-gray-200' : 
          'border-gray-600'
        }`}>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Crown className="text-white" size={20} />
            </div>
            <div>
              <h1 className="font-bold text-lg">Creator Campus</h1>
              <p className="text-xs text-gray-400">guidix.io</p>
            </div>
          </div>
        </div>

        {/* Creator Tools Button */}
        <div className="p-4 border-b border-gray-600">
          <button
            onClick={() => setShowCreatorToolsModal(true)}
            className="group relative flex items-center justify-center w-full h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 mx-auto"
          >
            <Crown className="text-white" size={20} />
            <span className="text-white font-semibold ml-2">Creator Tools</span>
          </button>
        </div>

        {/* Course Categories Toggle */}
        <div className="p-4 border-b border-gray-600">
          <button
            onClick={() => setShowCourseCategories(!showCourseCategories)}
            className={`w-full flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 ${
              showCourseCategories
                ? 'bg-blue-600 text-white'
                : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
            }`}
          >
            <BookOpen size={18} className="mr-2" />
            <span>Course Categories</span>
          </button>
        </div>

        {/* Channels */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Text Channels</h3>
            <div className="space-y-1">
              {channels.filter(c => c.type === 'text').map((channel) => (
                <div key={channel.id} className={`flex items-center justify-between p-2 rounded cursor-pointer group ${
                  settings.theme === 'dark' ? 'hover:bg-gray-700' : 
                  settings.theme === 'light' ? 'hover:bg-gray-100' : 
                  'hover:bg-gray-600'
                }`}>
                  <div className="flex items-center space-x-2">
                    <Hash size={16} className="text-gray-400" />
                    <span className="text-sm">{channel.name}</span>
                  </div>
                  {channel.unread > 0 && (
                    <span className="bg-red-500 text-xs px-2 py-1 rounded-full">{channel.unread}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Voice Channels</h3>
            <div className="space-y-1">
              {channels.filter(c => c.type === 'voice').map((channel) => (
                <div key={channel.id} className={`p-2 rounded cursor-pointer ${
                  settings.theme === 'dark' ? 'hover:bg-gray-700' : 
                  settings.theme === 'light' ? 'hover:bg-gray-100' : 
                  'hover:bg-gray-600'
                }`}>
                  <div className="flex items-center space-x-2 mb-1">
                    <Volume2 size={16} className="text-gray-400" />
                    <span className="text-sm">{channel.name}</span>
                  </div>
                  {channel.users && channel.users.length > 0 && (
                    <div className="ml-6 space-y-1">
                      {channel.users.map((user, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>{user}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>


        </div>

        {/* User Panel */}
        <div className={`p-4 border-t ${
          settings.theme === 'dark' ? 'border-gray-700' : 
          settings.theme === 'light' ? 'border-gray-200' : 
          'border-gray-600'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {profileData.avatar ? (
                <img
                  src={profileData.avatar}
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Crown className="text-white" size={16} />
                </div>
              )}
              <div>
                <div className="text-sm font-medium">{profileData.name}</div>
                <div className="text-xs text-gray-400">@{profileData.username}</div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-2 rounded transition-colors ${isMuted ? 'text-red-400' : 'text-gray-400'} ${
                  settings.theme === 'dark' ? 'hover:bg-gray-700' : 
                  settings.theme === 'light' ? 'hover:bg-gray-200' : 
                  'hover:bg-gray-600'
                }`}
              >
                {isMuted ? <MicOff size={16} /> : <Mic size={16} />}
              </button>
              <button
                onClick={() => setIsDeafened(!isDeafened)}
                className={`p-2 rounded transition-colors ${isDeafened ? 'text-red-400' : 'text-gray-400'} ${
                  settings.theme === 'dark' ? 'hover:bg-gray-700' : 
                  settings.theme === 'light' ? 'hover:bg-gray-200' : 
                  'hover:bg-gray-600'
                }`}
              >
                <Headphones size={16} />
              </button>
              <button
                onClick={() => setShowSettingsModal(true)}
                className={`p-2 rounded transition-colors text-gray-400 ${
                  settings.theme === 'dark' ? 'hover:bg-gray-700' : 
                  settings.theme === 'light' ? 'hover:bg-gray-200' : 
                  'hover:bg-gray-600'
                }`}
              >
                <Settings size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Categories Sidebar */}
      {showCourseCategories && (
        <div className={`w-64 flex flex-col ${
          settings.theme === 'dark' ? 'bg-gray-700 text-white' : 
          settings.theme === 'light' ? 'bg-gray-50 text-gray-900 border-r border-gray-200' : 
          'bg-gray-600 text-gray-100'
        }`}>
          {/* Course Categories Header */}
          <div className={`p-4 border-b ${
            settings.theme === 'dark' ? 'border-gray-600' : 
            settings.theme === 'light' ? 'border-gray-200' : 
            'border-gray-500'
          }`}>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Course Categories</h3>
              <button
                onClick={() => setShowCourseCategories(false)}
                className={`p-2 rounded transition-colors ${
                  settings.theme === 'dark' ? 'hover:bg-gray-600 text-gray-300' : 
                  settings.theme === 'light' ? 'hover:bg-gray-200 text-gray-600' : 
                  'hover:bg-gray-500 text-gray-300'
                }`}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Course Categories List */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {[
                'All Courses',
                'Web Development',
                'Data Science',
                'Digital Marketing',
                'Design',
                'Mobile Development',
                'Cloud Computing',
                'Business',
                'Photography'
              ].map((category) => (
                <div
                  key={category}
                  className={`flex items-center p-3 rounded cursor-pointer transition-colors ${
                    settings.theme === 'dark' ? 'hover:bg-gray-600' : 
                    settings.theme === 'light' ? 'hover:bg-gray-100' : 
                    'hover:bg-gray-500'
                  }`}
                >
                  <BookOpen size={16} className="text-gray-400 mr-3" />
                  <span className="text-sm">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className={`border-b p-4 ${
          settings.theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 
          settings.theme === 'light' ? 'bg-white border-gray-200 text-gray-900' : 
          'bg-gray-700 border-gray-600 text-gray-100'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Hash size={20} className={settings.theme === 'dark' ? 'text-gray-400' : 'text-gray-400'} />
              <h2 className="text-lg font-semibold">general</h2>
              <span className="text-sm opacity-75">Welcome to the Creator Campus!</span>
            </div>
            
            {/* Profile Dropdown */}
            <div className="relative" ref={profileDropdownRef}>
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-300 ${
                  settings.theme === 'dark' ? 'hover:bg-gray-700' : 
                  settings.theme === 'light' ? 'hover:bg-gray-100' : 
                  'hover:bg-gray-600'
                }`}
              >
                {profileData.avatar ? (
                  <img
                    src={profileData.avatar}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Crown className="text-white" size={16} />
                  </div>
                )}
                <span className="font-medium text-gray-900">{profileData.name}</span>
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
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                          <Crown className="text-white" size={24} />
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
                      <Link
                        to="/org/admin"
                        className="w-full flex items-center px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <BarChart3 size={16} className="mr-3" />
                        <span>Creator Dashboard</span>
                      </Link>
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


        {/* Chat Area */}
        <div className="flex-1 flex">
          {/* Messages */}
          <div className="flex-1 flex flex-col">
            <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${
              settings.theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              {/* Welcome Message */}
              <div className={`border rounded-lg p-4 ${
                settings.theme === 'dark' 
                  ? 'bg-yellow-900 border-yellow-700' 
                  : 'bg-yellow-50 border-yellow-200'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  <Crown className="text-yellow-600" size={20} />
                  <span className={`font-semibold ${
                    settings.theme === 'dark' ? 'text-yellow-400' : 'text-yellow-800'
                  }`}>Welcome to Creator Campus!</span>
                </div>
                <p className={`text-sm ${
                  settings.theme === 'dark' ? 'text-yellow-300' : 'text-yellow-700'
                }`}>
                  Connect with fellow educators, share teaching strategies, and collaborate on course development. 
                  This is your space to grow as a creator and build amazing learning experiences.
                </p>
              </div>

              {/* Sample Messages */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="text-white" size={16} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`font-semibold ${
                        settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Dr. Michael Chen</span>
                      <span className={`text-xs ${
                        settings.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>Today at 2:30 PM</span>
                    </div>
                    <p className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Just finished updating my Data Science course with new Python exercises. The interactive coding challenges are really engaging students!</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="text-white" size={16} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`font-semibold ${
                        settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>Emma Rodriguez</span>
                      <span className={`text-xs ${
                        settings.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>Today at 2:45 PM</span>
                    </div>
                    <p className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>That's awesome! I've been working on gamifying my marketing course. Adding progress badges has increased completion rates by 30% 🎯</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Crown className="text-white" size={16} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`font-semibold ${
                        settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{profileData.name}</span>
                      <span className={`text-xs ${
                        settings.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>Today at 3:00 PM</span>
                    </div>
                    <p className={settings.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>Love hearing about everyone's innovations! I'm experimenting with live Q&A sessions. The real-time interaction really helps clarify complex topics.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className={`p-4 border-t ${
              settings.theme === 'dark' 
                ? 'border-gray-700 bg-gray-800' 
                : 'border-gray-200 bg-white'
            }`}>
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Message #general"
                  className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-300 focus:border-transparent ${
                    settings.theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
                <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Online Users */}
          <div className={`w-64 border-l p-4 ${
            settings.theme === 'dark' 
              ? 'bg-gray-700 border-gray-600' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <h3 className={`font-semibold mb-4 ${
              settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Online — {onlineUsers.filter(u => u.status === 'online').length}</h3>
            <div className="space-y-2">
              {onlineUsers.map((user) => (
                <div key={user.id} className={`flex items-center space-x-3 p-2 rounded cursor-pointer ${
                  settings.theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
                }`}>
                  <div className="relative">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      user.role === 'instructor' 
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500' 
                        : 'bg-gradient-to-r from-blue-400 to-purple-500'
                    }`}>
                      {user.role === 'instructor' ? (
                        <Crown className="text-white" size={16} />
                      ) : (
                        <User className="text-white" size={16} />
                      )}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                      user.status === 'online' ? 'bg-green-400' :
                      user.status === 'away' ? 'bg-yellow-400' :
                      user.status === 'dnd' ? 'bg-red-400' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  <div>
                    <div className={`text-sm font-medium ${
                      settings.theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{user.name}</div>
                    <div className={`text-xs capitalize ${
                      settings.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>{user.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettingsModal && <SettingsModal />}
      
      {/* Creator Tools Modal */}
      {showCreatorToolsModal && <CreatorToolsModal />}
      
      {/* Course Creation Modal */}
      {showCourseCreation && <CourseCreationModal />}
    </div>
  );
}