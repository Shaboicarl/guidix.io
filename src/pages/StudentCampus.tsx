import React, { useState } from 'react';
import { Hash, Users, Settings, Mic, MicOff, Headphones, HeadphonesIcon, Phone, Video, Plus, Search, Bell, User, MessageCircle, Send, Smile, Paperclip, Gift, X, Mail, Calendar, MapPin, Award, Edit, LogOut, Palette, Shield, HelpCircle, Download } from 'lucide-react';

export default function StudentCampus() {
  const [selectedCourse, setSelectedCourse] = useState('web-development');
  const [selectedChannel, setSelectedChannel] = useState('general');
  const [messageInput, setMessageInput] = useState('');
  const [showDMs, setShowDMs] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isInVoiceChannel, setIsInVoiceChannel] = useState(false);
  const [connectedVoiceChannel, setConnectedVoiceChannel] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Appearance settings state
  const [appearance, setAppearance] = useState(() => {
    // Load from localStorage or use defaults
    const saved = localStorage.getItem('guidix-appearance');
    return saved ? JSON.parse(saved) : {
      theme: 'dark',
      fontSize: 'medium',
      compactMode: false,
      showTimestamps: true,
      animatedEmojis: true
    };
  });

  // Save appearance settings to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem('guidix-appearance', JSON.stringify(appearance));
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', appearance.theme);
    document.documentElement.setAttribute('data-compact', appearance.compactMode.toString());
    document.documentElement.setAttribute('data-font-size', appearance.fontSize);
  }, [appearance]);

  // Apply theme on component mount
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', appearance.theme);
    document.documentElement.setAttribute('data-compact', appearance.compactMode.toString());
    document.documentElement.setAttribute('data-font-size', appearance.fontSize);
  }, []);

  const updateAppearance = (updates) => {
    setAppearance(prev => ({ ...prev, ...updates }));
  };

  const courses = [
    {
      id: 'web-development',
      name: 'Web Development',
      color: 'from-blue-400 to-blue-600',
      icon: '💻',
      channels: [
        { id: 'general', name: 'general', type: 'text' },
        { id: 'announcements', name: 'announcements', type: 'text' },
        { id: 'html-css', name: 'html-css', type: 'text' },
        { id: 'javascript', name: 'javascript', type: 'text' },
        { id: 'react', name: 'react', type: 'text' },
        { id: 'voice-study', name: 'Voice Study Hall', type: 'voice' },
        { id: 'office-hours', name: 'Office Hours', type: 'voice' }
      ]
    },
    {
      id: 'data-science',
      name: 'Data Science',
      color: 'from-purple-400 to-purple-600',
      icon: '📊',
      channels: [
        { id: 'general', name: 'general', type: 'text' },
        { id: 'python-basics', name: 'python-basics', type: 'text' },
        { id: 'machine-learning', name: 'machine-learning', type: 'text' },
        { id: 'data-viz', name: 'data-visualization', type: 'text' },
        { id: 'study-group', name: 'Study Group', type: 'voice' }
      ]
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      color: 'from-green-400 to-green-600',
      icon: '📈',
      channels: [
        { id: 'general', name: 'general', type: 'text' },
        { id: 'seo-tips', name: 'seo-tips', type: 'text' },
        { id: 'social-media', name: 'social-media', type: 'text' },
        { id: 'campaign-reviews', name: 'campaign-reviews', type: 'text' },
        { id: 'marketing-calls', name: 'Marketing Calls', type: 'voice' }
      ]
    },
    {
      id: 'ux-design',
      name: 'UX Design',
      color: 'from-pink-400 to-pink-600',
      icon: '🎨',
      channels: [
        { id: 'general', name: 'general', type: 'text' },
        { id: 'design-critique', name: 'design-critique', type: 'text' },
        { id: 'figma-help', name: 'figma-help', type: 'text' },
        { id: 'portfolio-review', name: 'portfolio-review', type: 'text' },
        { id: 'design-hangout', name: 'Design Hangout', type: 'voice' }
      ]
    }
  ];

  const directMessages = [
    { id: 1, name: 'Sarah Johnson', status: 'online', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100', lastMessage: 'Great question about React hooks!' },
    { id: 2, name: 'Mike Chen', status: 'away', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100', lastMessage: 'Check out this Python tutorial' },
    { id: 3, name: 'Emma Rodriguez', status: 'offline', avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100', lastMessage: 'Marketing strategy discussion tomorrow' },
    { id: 4, name: 'Alex Thompson', status: 'online', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100', lastMessage: 'Love your design portfolio!' }
  ];

  const messages = [
    {
      id: 1,
      user: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '2:30 PM',
      content: 'Welcome everyone to the Web Development course! 🎉 Feel free to introduce yourselves and ask any questions.',
      role: 'instructor'
    },
    {
      id: 2,
      user: 'Mike Student',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '2:32 PM',
      content: 'Hi everyone! Excited to learn React. I have some experience with HTML/CSS but new to JavaScript.',
      role: 'student'
    },
    {
      id: 3,
      user: 'Lisa Park',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '2:35 PM',
      content: 'Great to have you Mike! JavaScript can be tricky at first but you\'ll get the hang of it. Here\'s a helpful resource: https://javascript.info/',
      role: 'student'
    },
    {
      id: 4,
      user: 'David Wilson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '2:38 PM',
      content: 'Quick question - should I install Node.js before we start the React section?',
      role: 'student'
    },
    {
      id: 5,
      user: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '2:40 PM',
      content: '@David Wilson Yes! Node.js is essential for React development. I\'ll post the installation guide in the announcements channel.',
      role: 'instructor'
    }
  ];

  const currentCourse = courses.find(course => course.id === selectedCourse);
  const currentChannel = currentCourse?.channels.find(channel => channel.id === selectedChannel);

  const profileData = {
    'Sarah Johnson': {
      name: 'Sarah Johnson',
      role: 'instructor',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      email: 'sarah.johnson@guidix.io',
      location: 'San Francisco, CA',
      joinDate: 'January 2023',
      courses: ['Web Development', 'Advanced JavaScript'],
      bio: 'Passionate educator with 10+ years of experience in web development.',
      status: 'online'
    },
    'Mike Student': {
      name: 'Mike Student',
      role: 'student',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      email: 'mike.student@email.com',
      location: 'New York, NY',
      joinDate: 'September 2024',
      courses: ['Web Development', 'Data Science'],
      bio: 'Learning web development to transition into tech.',
      status: 'online'
    }
  };

  const handleChannelClick = (channel) => {
    if (channel.type === 'voice') {
      setIsInVoiceChannel(true);
      setConnectedVoiceChannel(channel.id);
    } else {
      setSelectedChannel(channel.id);
    }
  };

  const handleLeaveVoice = () => {
    setIsInVoiceChannel(false);
    setConnectedVoiceChannel(null);
  };

  const handleProfileClick = (userName) => {
    setSelectedProfile(profileData[userName] || null);
  };

  const ProfileModal = ({ profile, onClose }: { profile: any; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative animate-bounce-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-6">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <div className={`w-3 h-3 rounded-full ${
              profile.status === 'online' ? 'bg-green-400' : 
              profile.status === 'away' ? 'bg-yellow-400' : 'bg-gray-400'
            }`}></div>
            <span className="text-sm text-gray-600 capitalize">{profile.status}</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-3">
            <Mail size={16} className="text-gray-400" />
            <span className="text-gray-700">{profile.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin size={16} className="text-gray-400" />
            <span className="text-gray-700">{profile.location}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar size={16} className="text-gray-400" />
            <span className="text-gray-700">Joined {profile.joinDate}</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Bio</h3>
          <p className="text-gray-600 text-sm">{profile.bio}</p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Courses</h3>
          <div className="flex flex-wrap gap-2">
            {profile.courses.map((course: string, index: number) => (
              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                {course}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-3">
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Send Message
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );

  const UserProfileDropdown = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div 
        className="absolute top-16 right-4 bg-gray-800 rounded-lg shadow-xl border border-gray-700 w-80 animate-bounce-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Profile Header */}
        <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-lg">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <User className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Student User</h3>
              <p className="text-blue-100 text-sm">#1234</p>
              <div className="flex items-center mt-1">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span className="text-blue-100 text-sm">Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="p-4 border-b border-gray-700">
          <div className="mb-3">
            <h4 className="text-white font-semibold mb-2">About Me</h4>
            <p className="text-gray-300 text-sm">
              Passionate learner focused on web development and data science. Always eager to learn new technologies!
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-gray-400">Joined:</span>
              <p className="text-white">Jan 2024</p>
            </div>
            <div>
              <span className="text-gray-400">Courses:</span>
              <p className="text-white">8 enrolled</p>
            </div>
            <div>
              <span className="text-gray-400">Certificates:</span>
              <p className="text-white">3 earned</p>
            </div>
            <div>
              <span className="text-gray-400">Hours:</span>
              <p className="text-white">47 learned</p>
            </div>
          </div>
        </div>

        {/* Recent Certificates */}
        <div className="p-4 border-b border-gray-700">
          <h4 className="text-white font-semibold mb-3">Recent Certificates</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Award className="text-yellow-400" size={16} />
              <span className="text-gray-300 text-sm">Web Development Bootcamp</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="text-yellow-400" size={16} />
              <span className="text-gray-300 text-sm">Digital Marketing Mastery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="text-yellow-400" size={16} />
              <span className="text-gray-300 text-sm">UX/UI Design Fundamentals</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4">
          <div className="space-y-2">
            <button className="w-full flex items-center space-x-3 p-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
              <Edit size={16} />
              <span>Edit Profile</span>
            </button>
            <button 
              onClick={() => {
                onClose();
                setShowSettings(true);
              }}
              className="w-full flex items-center space-x-3 p-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Settings size={16} />
              <span>Settings</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors">
              <LogOut size={16} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const SettingsModal = ({ onClose }: { onClose: () => void }) => {
    const [activeTab, setActiveTab] = useState('profile');
    const [profileData, setProfileData] = useState({
      displayName: 'Student User',
      username: 'studentuser',
      email: 'student@example.com',
      bio: 'Passionate learner focused on web development and data science. Always eager to learn new technologies!',
      avatar: '',
      banner: ''
    });
    const [notifications, setNotifications] = useState({
      courseUpdates: true,
      directMessages: true,
      mentions: true,
      emailNotifications: false,
      pushNotifications: true
    });

    const tabs = [
      { id: 'profile', name: 'My Account', icon: User },
      { id: 'appearance', name: 'Appearance', icon: Palette },
      { id: 'notifications', name: 'Notifications', icon: Bell },
      { id: 'privacy', name: 'Privacy & Safety', icon: Shield },
      { id: 'help', name: 'Help & Support', icon: HelpCircle }
    ];

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-800 rounded-2xl w-full max-w-4xl h-[80vh] flex overflow-hidden animate-bounce-in">
          {/* Sidebar */}
          <div className="w-64 bg-gray-900 p-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-bold text-lg">Settings</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <tab.icon size={18} />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">My Account</h3>
                
                {/* Profile Picture */}
                <div className="bg-gray-700 rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-4">Profile Picture</h4>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="text-white" size={32} />
                    </div>
                    <div className="space-y-2">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Change Avatar
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                        Remove Avatar
                      </button>
                    </div>
                  </div>
                </div>

                {/* Profile Information */}
                <div className="bg-gray-700 rounded-lg p-6 space-y-4">
                  <h4 className="text-white font-semibold mb-4">Profile Information</h4>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Display Name</label>
                    <input
                      type="text"
                      value={profileData.displayName}
                      onChange={(e) => setProfileData({...profileData, displayName: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Username</label>
                    <input
                      type="text"
                      value={profileData.username}
                      onChange={(e) => setProfileData({...profileData, username: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">About Me</label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 bg-gray-600 text-white rounded-lg border border-gray-500 focus:border-blue-500 focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Appearance</h3>
                
                <div className="bg-gray-700 rounded-lg p-6 space-y-4">
                  <h4 className="text-white font-semibold mb-4">Theme</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {['dark', 'light', 'auto'].map((theme) => (
                      <button
                        key={theme}
                        onClick={() => setAppearance({...appearance, theme})}
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          appearance.theme === theme
                            ? 'border-blue-500 bg-blue-600/20'
                            : 'border-gray-600 hover:border-gray-500'
                        }`}
                      >
                        <div className={`w-full h-16 rounded mb-2 ${
                          theme === 'dark' ? 'bg-gray-900' :
                          theme === 'light' ? 'bg-white' :
                          'bg-gradient-to-r from-gray-900 to-white'
                        }`}></div>
                        <span className="text-white capitalize">{theme}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-6 space-y-4">
                  <h4 className="text-white font-semibold mb-4">Display Options</h4>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-300">Font Size</span>
                      <p className="text-gray-400 text-sm">Adjust text size throughout the app</p>
                    </div>
                    <select
                      value={appearance.fontSize}
                      onChange={(e) => updateAppearance({ fontSize: e.target.value })}
                      className="bg-gray-600 text-white rounded-lg px-3 py-2 border border-gray-500 focus:border-blue-500 focus:outline-none"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-300">Compact Mode</span>
                      <p className="text-gray-400 text-sm">Reduce spacing between messages</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={appearance.compactMode}
                        onChange={(e) => updateAppearance({ compactMode: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-300">Show Timestamps</span>
                      <p className="text-gray-400 text-sm">Display message timestamps</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={appearance.showTimestamps}
                        onChange={(e) => updateAppearance({ showTimestamps: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-300">Animated Emojis</span>
                      <p className="text-gray-400 text-sm">Enable emoji animations</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={appearance.animatedEmojis}
                        onChange={(e) => updateAppearance({ animatedEmojis: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>💡 Tip:</strong> Changes are saved automatically and will persist across sessions.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Notifications</h3>
                
                <div className="bg-gray-700 rounded-lg p-6 space-y-4">
                  <h4 className="text-white font-semibold mb-4">Campus Notifications</h4>
                  
                  {Object.entries(notifications).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={value}
                          onChange={(e) => setNotifications({...notifications, [key]: e.target.checked})}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Privacy & Safety</h3>
                
                <div className="bg-gray-700 rounded-lg p-6 space-y-4">
                  <h4 className="text-white font-semibold mb-4">Privacy Settings</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-300">Allow Direct Messages</span>
                        <p className="text-gray-400 text-sm">Let other students send you direct messages</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-300">Show Online Status</span>
                        <p className="text-gray-400 text-sm">Display when you're online to other users</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'help' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Help & Support</h3>
                
                <div className="bg-gray-700 rounded-lg p-6 space-y-4">
                  <h4 className="text-white font-semibold mb-4">Get Help</h4>
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 p-3 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors">
                      <HelpCircle size={20} className="text-blue-400" />
                      <span className="text-white">Help Center</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors">
                      <MessageCircle size={20} className="text-green-400" />
                      <span className="text-white">Contact Support</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors">
                      <Download size={20} className="text-purple-400" />
                      <span className="text-white">Download Data</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-gray-700">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // In a real app, this would send the message to the server
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  return (
    <div className={`h-screen flex flex-col transition-all duration-300 ${
      appearance.theme === 'light' 
        ? 'bg-gray-100' 
        : appearance.theme === 'auto'
        ? 'bg-gray-700'
        : 'bg-gray-800'
    } ${
      appearance.fontSize === 'small' ? 'text-sm' :
      appearance.fontSize === 'large' ? 'text-lg' : 'text-base'
    }`}>
      {/* Top Navigation Bar */}
      <div className={`border-b px-4 py-3 transition-colors duration-300 ${
        appearance.theme === 'light'
          ? 'bg-white border-gray-200'
          : 'bg-gray-900 border-gray-700'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className={`font-bold text-lg transition-colors duration-300 ${
                appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>Guidix Campus</span>
            </div>
            
            {/* Course Tabs */}
            <div className="flex items-center space-x-2">
              {courses.map((course) => (
                <button
                  key={course.id}
                  onClick={() => {
                    setSelectedCourse(course.id);
                    setSelectedChannel('general');
                    setShowDMs(false);
                  }}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                    selectedCourse === course.id 
                      ? `bg-gradient-to-r ${course.color} text-white shadow-lg` 
                      : appearance.theme === 'light'
                      ? 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900'
                      : 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{course.icon}</span>
                  <span className={`font-medium ${appearance.fontSize === 'small' ? 'text-xs' : appearance.fontSize === 'large' ? 'text-base' : 'text-sm'}`}>{course.name}</span>
                </button>
              ))}
              
              <button
                onClick={() => setShowDMs(!showDMs)}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                  showDMs 
                    ? 'bg-green-500 text-white shadow-lg' 
                    : appearance.theme === 'light'
                    ? 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white'
                }`}
              >
                <MessageCircle size={16} />
                <span className={`font-medium ${appearance.fontSize === 'small' ? 'text-xs' : appearance.fontSize === 'large' ? 'text-base' : 'text-sm'}`}>Direct Messages</span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className={`p-2 transition-colors ${
              appearance.theme === 'light' 
                ? 'text-gray-600 hover:text-gray-900' 
                : 'text-gray-400 hover:text-white'
            }`}>
              <Bell size={18} />
            </button>
            <button className={`p-2 transition-colors ${
              appearance.theme === 'light' 
                ? 'text-gray-600 hover:text-gray-900' 
                : 'text-gray-400 hover:text-white'
            }`}>
              <Search size={18} />
            </button>
            <div className="relative">
              <button
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className={`flex items-center space-x-2 rounded-lg p-2 transition-colors ${
                  appearance.theme === 'light'
                    ? 'hover:bg-gray-200'
                    : 'hover:bg-gray-700'
                }`}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="text-white" size={16} />
                </div>
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>Student User</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Channels Sidebar */}
        <div className={`w-60 flex flex-col transition-colors duration-300 ${
          appearance.theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'
        }`}>
          <div className={`p-4 border-b transition-colors duration-300 ${
            appearance.theme === 'light' ? 'border-gray-200' : 'border-gray-600'
          }`}>
            <h2 className={`font-bold text-lg transition-colors duration-300 ${
              appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              {showDMs ? 'Direct Messages' : currentCourse?.name}
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto">
            {showDMs ? (
              <div className="p-2">
                <div className="flex items-center justify-between px-2 py-1 mb-2">
                  <span className="text-gray-300 text-sm font-semibold">DIRECT MESSAGES</span>
                  <Plus className="text-gray-400 hover:text-white cursor-pointer" size={16} />
                </div>
                {directMessages.map((dm) => (
                  <div
                    key={dm.id}
                    className="flex items-center px-2 py-2 rounded hover:bg-gray-600 cursor-pointer group"
                  >
                    <div className="relative">
                      <img
                        src={dm.avatar}
                        alt={dm.name}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-700 ${
                        dm.status === 'online' ? 'bg-green-400' : 
                        dm.status === 'away' ? 'bg-yellow-400' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-gray-300 text-sm font-medium">{dm.name}</div>
                      <div className="text-gray-400 text-xs truncate">{dm.lastMessage}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-2">
                <div className="mb-4">
                  <div className="flex items-center px-2 py-1 mb-2">
                    <span className="text-gray-300 text-sm font-semibold">TEXT CHANNELS</span>
                  </div>
                  {currentCourse?.channels.filter(channel => channel.type === 'text').map((channel) => (
                    <button
                      key={channel.id}
                      onClick={() => setSelectedChannel(channel.id)}
                      className={`w-full flex items-center px-2 py-1 rounded text-left transition-colors ${
                        selectedChannel === channel.id 
                          ? 'bg-gray-600 text-white' 
                          : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                      }`}
                    >
                      <Hash size={16} className="mr-2" />
                      <span className="text-sm">{channel.name}</span>
                    </button>
                  ))}
                </div>

                <div>
                  <div className="flex items-center px-2 py-1 mb-2">
                    <span className="text-gray-300 text-sm font-semibold">VOICE CHANNELS</span>
                  </div>
                  {currentCourse?.channels.filter(channel => channel.type === 'voice').map((channel) => (
                    <button
                      key={channel.id}
                      className="w-full flex items-center px-2 py-1 rounded text-left text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
                    >
                      <Users size={16} className="mr-2" />
                      <span className="text-sm">{channel.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* User Panel */}
          <div className={`p-2 border-t transition-colors duration-300 ${
            appearance.theme === 'light' 
              ? 'bg-gray-100 border-gray-200' 
              : 'bg-gray-800 border-gray-600'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-2">
                  <User className="text-white" size={16} />
                </div>
                <div>
                  <div className={`text-sm font-medium transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>Student User</div>
                  <div className={`text-xs transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                  }`}>#1234</div>
                </div>
              </div>
              <div className="flex space-x-1">
                <button className={`p-1 transition-colors ${
                  appearance.theme === 'light' 
                    ? 'text-gray-600 hover:text-gray-900' 
                    : 'text-gray-400 hover:text-white'
                }`}>
                  <Mic size={16} />
                </button>
                <button className={`p-1 transition-colors ${
                  appearance.theme === 'light' 
                    ? 'text-gray-600 hover:text-gray-900' 
                    : 'text-gray-400 hover:text-white'
                }`}>
                  <Headphones size={16} />
                </button>
                <button 
                  onClick={() => setShowSettings(true)}
                  className={`p-1 transition-colors ${
                    appearance.theme === 'light' 
                      ? 'text-gray-600 hover:text-gray-900' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  title="Settings"
                >
                  <Settings size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className={`flex-1 flex flex-col transition-colors duration-300 ${
          appearance.theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'
        }`}>
          {/* Chat Header */}
          <div className={`p-4 border-b transition-colors duration-300 ${
            appearance.theme === 'light' 
              ? 'border-gray-300 bg-white' 
              : 'border-gray-500 bg-gray-700'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {showDMs ? (
                  <MessageCircle className={`mr-2 transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`} size={20} />
                ) : (
                  <Hash className={`mr-2 transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`} size={20} />
                )}
                <h3 className={`font-semibold transition-colors duration-300 ${
                  appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  {showDMs ? 'Direct Messages' : currentChannel?.name}
                </h3>
                {!showDMs && (
                  <div className={`ml-4 text-sm transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    Course discussion and help
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Phone size={18} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Video size={18} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Bell size={18} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Users size={18} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className={`flex-1 overflow-y-auto p-4 ${
            appearance.compactMode ? 'space-y-1' : 'space-y-4'
          }`}>
            {!showDMs && messages.map((message) => (
              <div key={message.id} className={`flex items-start space-x-3 p-2 rounded transition-colors ${
                appearance.theme === 'light' 
                  ? 'hover:bg-gray-100' 
                  : 'hover:bg-gray-700 hover:bg-opacity-30'
              } ${appearance.compactMode ? 'py-1' : 'py-2'}`}>
                <img
                  src={message.avatar}
                  alt={message.user}
                  className={`rounded-full ${
                    appearance.compactMode ? 'w-8 h-8' : 'w-10 h-10'
                  }`}
                />
                <div className="flex-1">
                  <div className={`flex items-center space-x-2 ${appearance.compactMode ? 'mb-0' : 'mb-1'}`}>
                    <span className={`font-semibold ${
                      message.role === 'instructor' ? 'text-yellow-400' : 
                      appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                      {message.user}
                    </span>
                    {message.role === 'instructor' && (
                      <span className="bg-yellow-500 text-black text-xs px-2 py-0.5 rounded font-bold">
                        INSTRUCTOR
                      </span>
                    )}
                    {appearance.showTimestamps && (
                      <span className={`text-xs transition-colors duration-300 ${
                        appearance.theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                      }`}>{message.time}</span>
                    )}
                  </div>
                  <div className={`leading-relaxed transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'text-gray-800' : 'text-gray-300'
                  }`}>
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
            
            {showDMs && (
              <div className="text-center text-gray-400 py-8">
                <MessageCircle size={48} className="mx-auto mb-4 opacity-50" />
                <p>Select a conversation to start messaging</p>
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="p-4 bg-gray-700">
            <div className="flex items-center bg-gray-600 rounded-lg px-4 py-3">
              <button className="text-gray-400 hover:text-white transition-colors mr-3">
                <Plus size={20} />
              </button>
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={`Message ${showDMs ? 'Direct Messages' : `#${currentChannel?.name}`}`}
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
              />
              <div className="flex items-center space-x-2 ml-3">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Gift size={20} />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Paperclip size={20} />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Smile size={20} />
                </button>
                <button
                  onClick={handleSendMessage}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Members List */}
        <div className="w-60 bg-gray-700 border-l border-gray-600">
          <div className="p-4">
            <h3 className="text-white font-semibold mb-4">
              {showDMs ? 'Friends' : \`${currentCourse?.name} Members`}
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-xs font-semibold mb-2">INSTRUCTORS — 1</div>
                <div 
                  onClick={() => handleProfileClick('Sarah Johnson')}
                  className="flex items-center space-x-2 p-2 rounded hover:bg-gray-600 cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Sarah Johnson"
                      className="w-8 h-8 rounded-full hover:ring-2 hover:ring-yellow-400 transition-all"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-700"></div>
                  </div>
                  <span className="text-yellow-400 text-sm font-medium">Sarah Johnson</span>
                </div>
              </div>

              <div>
                <div className="text-gray-400 text-xs font-semibold mb-2">STUDENTS — 24</div>
                <div className="space-y-1">
                  {[
                    { name: 'Mike Student', status: 'online' },
                    { name: 'Lisa Park', status: 'online' },
                    { name: 'David Wilson', status: 'away' },
                    { name: 'Emma Chen', status: 'online' },
                    { name: 'Alex Rodriguez', status: 'offline' }
                  ].map((student, index) => (
                    <div 
                      key={index} 
                      onClick={() => handleProfileClick(student.name)}
                      className="flex items-center space-x-2 p-2 rounded hover:bg-gray-600 cursor-pointer"
                    >
                      <div className="relative">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className={\`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-700 ${
                          student.status === 'online' ? 'bg-green-400' : 
                          student.status === 'away' ? 'bg-yellow-400' : 'bg-gray-400'
                        }`}></div>
                      </div>
                      <span className="text-gray-300 text-sm">{student.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Modal */}
      {selectedProfile && (
        <ProfileModal 
          profile={selectedProfile} 
          onClose={() => setSelectedProfile(null)} 
        />
      )}

      {/* User Profile Dropdown */}
      {showUserDropdown && (
        <UserProfileDropdown onClose={() => setShowUserDropdown(false)} />
      )}

      {/* Settings Modal */}
      {showSettings && (
        <SettingsModal onClose={() => setShowSettings(false)} />
      )}
    </div>
  );
}