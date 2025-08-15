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
  const [showCourseStudies, setShowCourseStudies] = useState(false);
  const [showCourseSidebar, setShowCourseSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
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

  const [profileData, setProfileData] = useState({
    bio: 'Passionate learner focused on web development and data science.',
    avatar: null as string | null
  });

  const [editProfileData, setEditProfileData] = useState(profileData);

  // Save appearance settings to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem('guidix-appearance', JSON.stringify(appearance));
    
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', appearance.theme);
    document.documentElement.setAttribute('data-compact', appearance.compactMode.toString());
    document.documentElement.setAttribute('data-font-size', appearance.fontSize);
  }, [appearance]);

  React.useEffect(() => {
    const savedProfileData = localStorage.getItem('campus-profile-data');

    // Apply theme on component mount
    document.documentElement.setAttribute('data-theme', appearance.theme);
    document.documentElement.setAttribute('data-compact', appearance.compactMode.toString());
    document.documentElement.setAttribute('data-font-size', appearance.fontSize);
    if (savedProfileData) {
      const parsed = JSON.parse(savedProfileData);
      setProfileData(parsed);
      setEditProfileData(parsed);
    }
  }, []);

  const updateAppearance = (updates: Partial<typeof appearance>) => {
    setAppearance((prev: typeof appearance) => ({ ...prev, ...updates }));
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

  // Detailed course data for sidebar
  const courseCategories = {
    'web-development': {
      name: 'Web Development',
      icon: '💻',
      color: 'from-blue-400 to-blue-600',
      progress: 45,
      courses: [
        { id: 'html-fundamentals', name: 'HTML Fundamentals', progress: 85, duration: '2 weeks', status: 'completed' },
        { id: 'css-styling', name: 'CSS Styling', progress: 60, duration: '3 weeks', status: 'in-progress' },
        { id: 'javascript-basics', name: 'JavaScript Basics', progress: 0, duration: '4 weeks', status: 'locked' },
        { id: 'dom-manipulation', name: 'DOM Manipulation', progress: 0, duration: '3 weeks', status: 'locked' },
        { id: 'react-intro', name: 'React Introduction', progress: 0, duration: '5 weeks', status: 'locked' },
        { id: 'advanced-react', name: 'Advanced React', progress: 0, duration: '4 weeks', status: 'locked' },
        { id: 'node-backend', name: 'Node.js Backend', progress: 0, duration: '6 weeks', status: 'locked' }
      ]
    },
    'data-science': {
      name: 'Data Science',
      icon: '📊',
      color: 'from-purple-400 to-purple-600',
      progress: 35,
      courses: [
        { id: 'python-intro', name: 'Python Introduction', progress: 90, duration: '3 weeks', status: 'completed' },
        { id: 'data-analysis', name: 'Data Analysis', progress: 45, duration: '4 weeks', status: 'in-progress' },
        { id: 'visualization', name: 'Data Visualization', progress: 0, duration: '3 weeks', status: 'locked' },
        { id: 'machine-learning', name: 'Machine Learning', progress: 0, duration: '6 weeks', status: 'locked' },
        { id: 'deep-learning', name: 'Deep Learning', progress: 0, duration: '8 weeks', status: 'locked' },
        { id: 'statistics', name: 'Statistics Fundamentals', progress: 0, duration: '4 weeks', status: 'locked' },
        { id: 'sql-database', name: 'SQL & Databases', progress: 0, duration: '3 weeks', status: 'locked' }
      ]
    },
    'digital-marketing': {
      name: 'Digital Marketing',
      icon: '📈',
      color: 'from-green-400 to-green-600',
      progress: 55,
      courses: [
        { id: 'marketing-basics', name: 'Marketing Fundamentals', progress: 100, duration: '2 weeks', status: 'completed' },
        { id: 'seo-basics', name: 'SEO Basics', progress: 75, duration: '3 weeks', status: 'in-progress' },
        { id: 'social-media', name: 'Social Media Marketing', progress: 0, duration: '4 weeks', status: 'locked' },
        { id: 'content-marketing', name: 'Content Marketing', progress: 0, duration: '3 weeks', status: 'locked' },
        { id: 'analytics', name: 'Marketing Analytics', progress: 0, duration: '4 weeks', status: 'locked' },
        { id: 'ppc-advertising', name: 'PPC Advertising', progress: 0, duration: '3 weeks', status: 'locked' },
        { id: 'email-marketing', name: 'Email Marketing', progress: 0, duration: '2 weeks', status: 'locked' }
      ]
    },
    'ux-design': {
      name: 'UX Design',
      icon: '🎨',
      color: 'from-pink-400 to-pink-600',
      progress: 25,
      courses: [
        { id: 'design-principles', name: 'Design Principles', progress: 95, duration: '2 weeks', status: 'completed' },
        { id: 'user-research', name: 'User Research', progress: 30, duration: '3 weeks', status: 'in-progress' },
        { id: 'wireframing', name: 'Wireframing & Prototyping', progress: 0, duration: '3 weeks', status: 'locked' },
        { id: 'ui-design', name: 'UI Design', progress: 0, duration: '4 weeks', status: 'locked' },
        { id: 'usability-testing', name: 'Usability Testing', progress: 0, duration: '3 weeks', status: 'locked' },
        { id: 'figma-sketch', name: 'Figma & Sketch', progress: 0, duration: '3 weeks', status: 'locked' },
        { id: 'design-systems', name: 'Design Systems', progress: 0, duration: '4 weeks', status: 'locked' }
      ]
    }
  };

  // Course Studies data with progression tracking
  const courseStudies = {
    'web-development': [
      {
        id: 'html-fundamentals',
        name: 'HTML Fundamentals',
        description: 'Learn the basics of HTML markup',
        progress: 85,
        status: 'completed',
        icon: '🌐',
        duration: '2 weeks',
        nextCourse: 'css-styling'
      },
      {
        id: 'css-styling',
        name: 'CSS Styling',
        description: 'Master CSS for beautiful web design',
        progress: 60,
        status: 'in-progress',
        icon: '🎨',
        duration: '3 weeks',
        nextCourse: 'javascript-basics'
      },
      {
        id: 'javascript-basics',
        name: 'JavaScript Basics',
        description: 'Learn programming fundamentals',
        progress: 0,
        status: 'locked',
        icon: '⚡',
        duration: '4 weeks',
        nextCourse: 'dom-manipulation'
      },
      {
        id: 'dom-manipulation',
        name: 'DOM Manipulation',
        description: 'Interactive web pages with JavaScript',
        progress: 0,
        status: 'locked',
        icon: '🔧',
        duration: '3 weeks',
        nextCourse: 'react-intro'
      },
      {
        id: 'react-intro',
        name: 'React Introduction',
        description: 'Modern UI development with React',
        progress: 0,
        status: 'locked',
        icon: '⚛️',
        duration: '5 weeks',
        nextCourse: 'advanced-react'
      },
      {
        id: 'advanced-react',
        name: 'Advanced React',
        description: 'State management and advanced patterns',
        progress: 0,
        status: 'locked',
        icon: '🚀',
        duration: '4 weeks',
        nextCourse: null
      }
    ],
    'data-science': [
      {
        id: 'python-intro',
        name: 'Python Introduction',
        description: 'Learn Python programming basics',
        progress: 90,
        status: 'completed',
        icon: '🐍',
        duration: '3 weeks',
        nextCourse: 'data-analysis'
      },
      {
        id: 'data-analysis',
        name: 'Data Analysis',
        description: 'Pandas and NumPy fundamentals',
        progress: 45,
        status: 'in-progress',
        icon: '📊',
        duration: '4 weeks',
        nextCourse: 'visualization'
      },
      {
        id: 'visualization',
        name: 'Data Visualization',
        description: 'Create compelling charts and graphs',
        progress: 0,
        status: 'locked',
        icon: '📈',
        duration: '3 weeks',
        nextCourse: 'machine-learning'
      },
      {
        id: 'machine-learning',
        name: 'Machine Learning',
        description: 'Introduction to ML algorithms',
        progress: 0,
        status: 'locked',
        icon: '🤖',
        duration: '6 weeks',
        nextCourse: 'deep-learning'
      },
      {
        id: 'deep-learning',
        name: 'Deep Learning',
        description: 'Neural networks and AI',
        progress: 0,
        status: 'locked',
        icon: '🧠',
        duration: '8 weeks',
        nextCourse: null
      }
    ],
    'digital-marketing': [
      {
        id: 'marketing-basics',
        name: 'Marketing Fundamentals',
        description: 'Core marketing principles',
        progress: 100,
        status: 'completed',
        icon: '📚',
        duration: '2 weeks',
        nextCourse: 'seo-basics'
      },
      {
        id: 'seo-basics',
        name: 'SEO Basics',
        description: 'Search engine optimization',
        progress: 75,
        status: 'in-progress',
        icon: '🔍',
        duration: '3 weeks',
        nextCourse: 'social-media'
      },
      {
        id: 'social-media',
        name: 'Social Media Marketing',
        description: 'Platform strategies and content',
        progress: 0,
        status: 'locked',
        icon: '📱',
        duration: '4 weeks',
        nextCourse: 'content-marketing'
      },
      {
        id: 'content-marketing',
        name: 'Content Marketing',
        description: 'Creating valuable content',
        progress: 0,
        status: 'locked',
        icon: '✍️',
        duration: '3 weeks',
        nextCourse: 'analytics'
      },
      {
        id: 'analytics',
        name: 'Marketing Analytics',
        description: 'Measure and optimize campaigns',
        progress: 0,
        status: 'locked',
        icon: '📊',
        duration: '4 weeks',
        nextCourse: null
      }
    ],
    'ux-design': [
      {
        id: 'design-principles',
        name: 'Design Principles',
        description: 'Fundamental design concepts',
        progress: 95,
        status: 'completed',
        icon: '✨',
        duration: '2 weeks',
        nextCourse: 'user-research'
      },
      {
        id: 'user-research',
        name: 'User Research',
        description: 'Understanding user needs',
        progress: 30,
        status: 'in-progress',
        icon: '🔍',
        duration: '3 weeks',
        nextCourse: 'wireframing'
      },
      {
        id: 'wireframing',
        name: 'Wireframing & Prototyping',
        description: 'Create design mockups',
        progress: 0,
        status: 'locked',
        icon: '📝',
        duration: '3 weeks',
        nextCourse: 'ui-design'
      },
      {
        id: 'ui-design',
        name: 'UI Design',
        description: 'Visual design and aesthetics',
        progress: 0,
        status: 'locked',
        icon: '🎨',
        duration: '4 weeks',
        nextCourse: 'usability-testing'
      },
      {
        id: 'usability-testing',
        name: 'Usability Testing',
        description: 'Test and iterate designs',
        progress: 0,
        status: 'locked',
        icon: '🧪',
        duration: '3 weeks',
        nextCourse: null
      }
    ]
  };

  const profileDataMap = {
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

  const handleChannelClick = (channel: { type: string; id: string }) => {
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

  const handleProfileClick = (userName: string) => {
    setSelectedProfile(profileDataMap[userName as keyof typeof profileDataMap] || null);
  };

  // Course sidebar helper functions
  const selectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const getCategoryProgress = (categoryId: string) => {
    const category = courseCategories[categoryId as keyof typeof courseCategories];
    if (!category) return 0;
    const totalProgress = category.courses.reduce((sum, course) => sum + course.progress, 0);
    return Math.round(totalProgress / category.courses.length);
  };

  const CourseSidebar = () => (
    <div className={`w-80 flex flex-col transition-colors duration-300 ${
      appearance.theme === 'light' ? 'bg-gray-50 border-r border-gray-200' : 'bg-gray-800 border-r border-gray-700'
    }`}>
      {/* Header */}
      <div className={`p-4 border-b transition-colors duration-300 ${
        appearance.theme === 'light' ? 'border-gray-200' : 'border-gray-700'
      }`}>
        <div className="flex items-center justify-between">
          <h2 className={`font-bold text-lg transition-colors duration-300 ${
            appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Course Categories
          </h2>
          <button
            onClick={() => setShowCourseSidebar(false)}
            className={`p-2 rounded-lg transition-colors ${
              appearance.theme === 'light' 
                ? 'hover:bg-gray-200 text-gray-600' 
                : 'hover:bg-gray-700 text-gray-300'
            }`}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Course Categories Navigation */}
      <div className="flex-1 overflow-y-auto p-2">
        {Object.entries(courseCategories).map(([categoryId, category]) => {
          const isSelected = selectedCategory === categoryId;
          const categoryProgress = getCategoryProgress(categoryId);
          
          return (
            <button
              key={categoryId}
              onClick={() => selectCategory(categoryId)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:shadow-md mb-3 ${
                isSelected
                  ? appearance.theme === 'light'
                    ? 'bg-blue-50 border border-blue-200 shadow-md'
                    : 'bg-blue-900/20 border border-blue-600 shadow-md'
                  : appearance.theme === 'light' 
                    ? 'bg-white border border-gray-200 hover:border-gray-300' 
                    : 'bg-gray-700 border border-gray-600 hover:border-gray-500'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl bg-gradient-to-r ${category.color}`}>
                  {category.icon}
                </div>
                <div className="text-left">
                  <h3 className={`font-semibold transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>
                    {category.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${categoryProgress}%` }}
                      ></div>
                    </div>
                    <span className={`text-xs transition-colors duration-300 ${
                      appearance.theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {categoryProgress}%
                    </span>
                  </div>
                </div>
              </div>
              <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                isSelected ? 'bg-blue-600' : 'bg-gray-300'
              }`}></div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const CourseCategoryView = () => {
    if (!selectedCategory) {
      return (
        <div className={`flex-1 flex flex-col items-center justify-center transition-colors duration-300 ${
          appearance.theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
        }`}>
          <div className={`text-center p-8 rounded-xl ${
            appearance.theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-700 shadow-lg'
          }`}>
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl ${
              appearance.theme === 'light' ? 'bg-blue-100' : 'bg-blue-900'
            }`}>
              📚
            </div>
            <h2 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
              appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              Select a Course Category
            </h2>
            <p className={`text-lg transition-colors duration-300 ${
              appearance.theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Choose a category from the sidebar to view available courses
            </p>
          </div>
        </div>
      );
    }

    const category = courseCategories[selectedCategory as keyof typeof courseCategories];
    const categoryProgress = getCategoryProgress(selectedCategory);

    return (
      <div className={`flex-1 flex flex-col transition-colors duration-300 ${
        appearance.theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
      }`}>
        {/* Header */}
        <div className={`p-6 border-b transition-colors duration-300 ${
          appearance.theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-700'
        }`}>
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl bg-gradient-to-r ${category.color}`}>
              {category.icon}
            </div>
            <div>
              <h1 className={`text-3xl font-bold transition-colors duration-300 ${
                appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                {category.name} Courses
              </h1>
              <p className={`text-lg transition-colors duration-300 ${
                appearance.theme === 'light' ? 'text-gray-600' : 'text-gray-400'
              }`}>
                Master the fundamentals and advance your skills
              </p>
            </div>
          </div>
          
          {/* Overall Progress */}
          <div className={`mt-6 p-4 rounded-lg ${
            appearance.theme === 'light' ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/20 border border-blue-700'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <h3 className={`font-semibold transition-colors duration-300 ${
                appearance.theme === 'light' ? 'text-blue-900' : 'text-blue-100'
              }`}>
                Overall Progress
              </h3>
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                appearance.theme === 'light' ? 'text-blue-700' : 'text-blue-300'
              }`}>
                {categoryProgress}%
              </span>
            </div>
            <div className={`w-full bg-blue-200 rounded-full h-3 ${
              appearance.theme === 'light' ? 'bg-blue-200' : 'bg-blue-700'
            }`}>
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${categoryProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Course List */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.courses.map((course) => (
              <div
                key={course.id}
                className={`p-6 rounded-xl border transition-all duration-200 hover:shadow-lg ${
                  appearance.theme === 'light' 
                    ? 'bg-white border-gray-200 hover:border-gray-300' 
                    : 'bg-gray-700 border-gray-600 hover:border-gray-500'
                }`}
              >
                {/* Course Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>
                    {course.name}
                  </h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    course.status === 'completed'
                      ? 'bg-green-100 text-green-700'
                      : course.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {course.status === 'completed' ? 'Completed' : 
                     course.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                  </span>
                </div>

                {/* Progress Section */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className={`text-sm transition-colors duration-300 ${
                      appearance.theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      Progress
                    </span>
                    <span className={`text-sm font-semibold transition-colors duration-300 ${
                      appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                      {course.progress}%
                    </span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    appearance.theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'
                  }`}>
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        course.status === 'completed' ? 'bg-green-500' : 
                        course.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-400'
                      }`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Course Details */}
                <div className={`text-sm transition-colors duration-300 ${
                  appearance.theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  Duration: {course.duration}
                </div>

                {/* Action Button */}
                <button
                  className={`w-full mt-4 py-2 px-4 rounded-lg font-medium transition-colors ${
                    course.status === 'completed'
                      ? appearance.theme === 'light'
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-green-800 text-green-300 hover:bg-green-700'
                      : course.status === 'in-progress'
                      ? appearance.theme === 'light'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                      : appearance.theme === 'light'
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={course.status === 'locked'}
                >
                  {course.status === 'completed' && 'Review Course'}
                  {course.status === 'in-progress' && 'Continue Learning'}
                  {course.status === 'locked' && 'Locked'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ProfileModal = ({ profile, onClose }: { profile: typeof profileDataMap[keyof typeof profileDataMap]; onClose: () => void }) => (
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

    const CourseStudiesModal = () => {
    const [activeView, setActiveView] = useState('overview');

    // Get studies for the currently selected course category
    const currentStudies = courseStudies[selectedCourse] || [];
    
    const renderOverview = () => (
      <>
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
            appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            {currentCourse?.name} Learning Journey
          </h1>
          <p className={`text-lg transition-colors duration-300 ${
            appearance.theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            Track your progress and discover new courses to advance your {currentCourse?.name.toLowerCase()} skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className={`p-6 rounded-xl transition-colors duration-300 ${
            appearance.theme === 'light' ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/20 border border-blue-700'
          }`}>
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              appearance.theme === 'light' ? 'text-blue-900' : 'text-blue-300'
            }`}>Review Course</h3>
            <p className={`mb-4 transition-colors duration-300 ${
              appearance.theme === 'light' ? 'text-blue-700' : 'text-blue-400'
            }`}>
              Revisit completed courses to reinforce your knowledge and skills
            </p>
            <button 
              onClick={() => setActiveView('review')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Review Courses
            </button>
          </div>
          
          <div className={`p-6 rounded-xl transition-colors duration-300 ${
            appearance.theme === 'light' ? 'bg-green-50 border border-green-200' : 'bg-green-900/20 border border-green-700'
          }`}>
            <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              appearance.theme === 'light' ? 'text-green-900' : 'text-green-300'
            }`}>Continue Learning</h3>
            <p className={`mb-4 transition-colors duration-300 ${
              appearance.theme === 'light' ? 'text-green-700' : 'text-green-400'
            }`}>
              Pick up where you left off and continue your learning journey
            </p>
            <button 
              onClick={() => setActiveView('continue')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue Learning
            </button>
          </div>
        </div>
        
        <div className={`p-6 rounded-xl transition-colors duration-300 ${
          appearance.theme === 'light' ? 'bg-gray-50 border border-gray-200' : 'bg-gray-700 border border-gray-600'
        }`}>
          <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
            appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>{currentCourse?.name} Progress Overview</h3>
          <div className="text-center">
            {(() => {
              const completed = currentStudies.filter(c => c.status === 'completed').length;
              const total = currentStudies.length;
              const percentage = Math.round((completed / total) * 100);
              
              return (
                <div>
                  <div className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>{percentage}%</div>
                  <div className={`text-lg transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {completed}/{total} courses completed
                  </div>
                  <div className={`w-full bg-gray-200 rounded-full h-3 mt-4 ${
                    appearance.theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'
                  }`}>
                    <div 
                      className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
        
        {/* Exit to Chat Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowCourseStudies(false)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              appearance.theme === 'light'
                ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                : 'bg-gray-600 hover:bg-gray-500 text-gray-300'
            }`}
          >
            ← Exit to Chat
          </button>
        </div>
      </>
    );

    const renderReviewCourses = () => (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className={`text-2xl font-bold transition-colors duration-300 ${
            appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>Review Completed Courses - {currentCourse?.name}</h2>
          <div className="flex space-x-3">
            <button 
              onClick={() => setActiveView('grid')}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                appearance.theme === 'light' ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            >
              ← Back to Course Grid
            </button>
            <button
              onClick={() => setShowCourseStudies(false)}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                appearance.theme === 'light' ? 'bg-red-100 hover:bg-red-200 text-red-700' : 'bg-red-800 hover:bg-red-700 text-red-300'
              }`}
            >
              Exit to Chat
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentStudies.filter(c => c.status === 'completed').map((course) => (
            <div key={course.id} className={`p-6 rounded-xl transition-colors duration-300 ${
              appearance.theme === 'light' ? 'bg-green-50 border border-green-200' : 'bg-green-900/20 border border-green-700'
            }`}>
              <div className="text-center mb-4">
                <span className="text-4xl">{course.icon}</span>
                <h3 className={`text-xl font-semibold mt-3 transition-colors duration-300 ${
                  appearance.theme === 'light' ? 'text-green-900' : 'text-green-300'
                }`}>{course.name}</h3>
                <p className={`text-sm mt-2 transition-colors duration-300 ${
                  appearance.theme === 'light' ? 'text-green-700' : 'text-green-400'
                }`}>{course.description}</p>
              </div>
              
              <div className="space-y-3">
                <div className={`p-3 rounded-lg transition-colors duration-300 ${
                  appearance.theme === 'light' ? 'bg-white border border-green-100' : 'bg-green-800/30 border border-green-600'
                }`}>
                  <h4 className={`font-medium mb-2 transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>Course Completion</h4>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600">✓ Completed</span>
                    <span className="text-gray-500">{course.duration}</span>
                  </div>
                </div>
                
                {/* Show progression to next courses in the same category */}
                <div className={`p-3 rounded-lg transition-colors duration-300 ${
                  appearance.theme === 'light' ? 'bg-blue-50 border border-blue-200' : 'bg-blue-800/30 border border-blue-600'
                }`}>
                  <h4 className={`font-medium mb-2 transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'text-blue-900' : 'text-blue-300'
                  }`}>Next Steps in {currentCourse?.name}</h4>
                  <div className="space-y-2">
                    {currentStudies
                      .filter(c => c.status !== 'completed' && c.id !== course.id)
                      .slice(0, 3)
                      .map((nextCourse) => (
                        <div key={nextCourse.id} className="flex items-center justify-between">
                          <span className="text-sm">{nextCourse.name}</span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            nextCourse.status === 'in-progress' 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {nextCourse.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    const renderContinueLearning = () => (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className={`text-2xl font-bold transition-colors duration-300 ${
            appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>Continue Your Learning - {currentCourse?.name}</h2>
          <div className="flex space-x-3">
            <button 
              onClick={() => setActiveView('grid')}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                appearance.theme === 'light' ? 'bg-gray-200 hover:bg-gray-300' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            >
              ← Back to Course Grid
            </button>
            <button
              onClick={() => setShowCourseStudies(false)}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                appearance.theme === 'light' ? 'bg-red-100 hover:bg-red-200 text-red-700' : 'bg-red-800 hover:bg-red-700 text-red-300'
              }`}
            >
              Exit to Chat
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentStudies
            .filter(c => c.status === 'in-progress' || c.status === 'not-started')
            .slice(0, 6)
            .map((course) => (
              <div key={course.id} className={`p-6 rounded-xl transition-colors duration-300 ${
                course.status === 'in-progress'
                  ? appearance.theme === 'light' ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/20 border border-blue-700'
                  : appearance.theme === 'light' ? 'bg-gray-50 border border-gray-200' : 'bg-gray-700 border border-gray-600'
              }`}>
                <div className="text-center mb-4">
                  <span className="text-4xl">{course.icon}</span>
                  <h3 className={`text-xl font-semibold mt-3 transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
                  }`}>{course.name}</h3>
                  <p className={`text-sm mt-2 transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                  }`}>{course.description}</p>
                </div>
                
                <div className="space-y-3">
                  {course.status === 'in-progress' && (
                    <div className={`p-3 rounded-lg transition-colors duration-300 ${
                      appearance.theme === 'light' ? 'bg-white border border-blue-100' : 'bg-blue-800/30 border border-blue-600'
                    }`}>
                      <h4 className={`font-medium mb-2 transition-colors duration-300 ${
                        appearance.theme === 'light' ? 'text-blue-900' : 'text-blue-300'
                      }`}>Current Progress</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="text-blue-600 font-medium">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Show progression to adjacent courses in the same category */}
                  <div className={`p-3 rounded-lg transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'bg-green-50 border border-green-200' : 'bg-green-800/30 border border-green-600'
                  }`}>
                    <h4 className={`font-medium mb-2 transition-colors duration-300 ${
                      appearance.theme === 'light' ? 'text-green-900' : 'text-green-300'
                    }`}>Learning Path in {currentCourse?.name}</h4>
                    <div className="space-y-2">
                      {currentStudies
                        .filter(c => c.id !== course.id)
                        .slice(0, 3)
                        .map((nextCourse) => (
                          <div key={nextCourse.id} className="flex items-center justify-between">
                            <span className="text-sm">{nextCourse.name}</span>
                            <span className={`text-xs px-2 py-1 rounded ${
                              nextCourse.status === 'completed' 
                                ? 'bg-green-100 text-green-700'
                                : nextCourse.status === 'in-progress'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              {nextCourse.status === 'completed' ? 'Completed' : 
                               nextCourse.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );

    const renderCourseGrid = () => (
      <>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
              appearance.theme === 'light' ? 'bg-blue-100' : 'bg-blue-900'
            }`}>
              {currentCourse?.icon}
            </div>
            <div>
              <h2 className={`text-2xl font-bold ${
                appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                {currentCourse?.name} Studies
              </h2>
              <p className={`text-sm ${
                appearance.theme === 'light' ? 'text-gray-600' : 'text-gray-400'
              }`}>
                Track your progress through the learning path
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowCourseStudies(false)}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
              appearance.theme === 'light' ? 'bg-red-100 hover:bg-red-200 text-red-700' : 'bg-red-800 hover:bg-red-700 text-red-300'
            }`}
          >
            Exit to Chat
          </button>
        </div>

        {/* Progress Overview */}
        <div className={`mb-8 p-4 rounded-xl border ${
          appearance.theme === 'light' 
            ? 'bg-blue-50 border-blue-200' 
            : 'bg-blue-900 border-blue-700'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <h3 className={`font-semibold ${
              appearance.theme === 'light' ? 'text-blue-900' : 'text-blue-100'
            }`}>
              Overall Progress
            </h3>
            <span className={`text-2xl font-bold ${
              appearance.theme === 'light' ? 'text-blue-700' : 'text-blue-300'
            }`}>
              {Math.round(currentStudies.reduce((acc, study) => acc + study.progress, 0) / currentStudies.length)}%
            </span>
          </div>
          <div className={`w-full bg-blue-200 rounded-full h-3 ${
            appearance.theme === 'light' ? 'bg-blue-200' : 'bg-blue-700'
          }`}>
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ 
                width: `${Math.round(currentStudies.reduce((acc, study) => acc + study.progress, 0) / currentStudies.length)}%` 
              }}
            ></div>
          </div>
        </div>

        {/* Course Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentStudies.map((study, index) => (
            <div
              key={study.id}
              className={`relative p-6 rounded-xl border transition-all duration-200 hover:shadow-lg ${
                study.status === 'completed'
                  ? appearance.theme === 'light'
                    ? 'bg-green-50 border-green-200'
                    : 'bg-green-900 border-green-700'
                  : study.status === 'in-progress'
                  ? appearance.theme === 'light'
                    ? 'bg-blue-50 border-blue-200'
                    : 'bg-blue-900 border-blue-700'
                  : appearance.theme === 'light'
                    ? 'bg-gray-50 border-gray-200'
                    : 'bg-gray-700 border-gray-600'
              }`}
            >
              {/* Status Badge */}
              <div className="absolute top-3 right-3">
                {study.status === 'completed' && (
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                )}
                {study.status === 'in-progress' && (
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">▶</span>
                  </div>
                )}
                {study.status === 'locked' && (
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🔒</span>
                  </div>
                )}
              </div>

              {/* Course Icon */}
              <div className="text-4xl mb-4">{study.icon}</div>

              {/* Course Info */}
              <h3 className={`text-lg font-semibold mb-2 ${
                appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                {study.name}
              </h3>
              
              <p className={`text-sm mb-4 ${
                appearance.theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                {study.description}
              </p>

              {/* Duration */}
              <div className={`text-xs mb-3 ${
                appearance.theme === 'light' ? 'text-gray-500' : 'text-gray-400'
              }`}>
                Duration: {study.duration}
              </div>

              {/* Progress Bar */}
              {study.status !== 'locked' && (
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-xs ${
                      appearance.theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      Progress
                    </span>
                    <span className={`text-xs font-medium ${
                      appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                      {study.progress}%
                    </span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${
                    appearance.theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'
                  }`}>
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        study.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${study.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <button
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  study.status === 'completed'
                    ? appearance.theme === 'light'
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-green-800 text-green-300 hover:bg-green-700'
                    : study.status === 'in-progress'
                    ? appearance.theme === 'light'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                    : appearance.theme === 'light'
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
                disabled={study.status === 'locked'}
                onClick={() => {
                  if (study.status === 'completed') {
                    // Show progression to adjacent courses within the same category
                    setActiveView('review');
                  } else if (study.status === 'in-progress') {
                    // Show progression to adjacent courses within the same category
                    setActiveView('continue');
                  }
                }}
              >
                {study.status === 'completed' && 'Review Course'}
                {study.status === 'in-progress' && 'Continue Learning'}
                {study.status === 'locked' && 'Locked'}
              </button>

              {/* Connection Line */}
              {index < currentStudies.length - 1 && (
                <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0.5 h-6 ${
                  appearance.theme === 'light' ? 'bg-gray-300' : 'bg-gray-500'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Learning Path Visualization */}
        <div className="mt-8">
          <h3 className={`text-lg font-semibold mb-4 ${
            appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Learning Path
          </h3>
          <div className="flex items-center justify-center space-x-4 overflow-x-auto p-4">
            {currentStudies.map((study, index) => (
              <div key={study.id} className="flex items-center">
                <div className={`flex flex-col items-center ${
                  study.status === 'completed'
                    ? 'text-green-600'
                    : study.status === 'in-progress'
                    ? 'text-blue-600'
                    : 'text-gray-400'
                }`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl mb-2 ${
                    study.status === 'completed'
                      ? 'bg-green-100'
                      : study.status === 'in-progress'
                      ? 'bg-blue-100'
                      : 'bg-gray-100'
                  }`}>
                    {study.icon}
                  </div>
                  <span className="text-xs text-center max-w-20">{study.name}</span>
                </div>
                {index < currentStudies.length - 1 && (
                  <div className={`w-8 h-1 mx-2 ${
                    study.status === 'completed'
                      ? 'bg-green-300'
                      : study.status === 'in-progress'
                      ? 'bg-blue-300'
                      : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </>
    );

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowCourseStudies(false)}>
        <div className={`rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden animate-bounce-in ${
          appearance.theme === 'light' ? 'bg-white' : 'bg-gray-800'
        }`} onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setShowCourseStudies(false)}
              className={`p-2 rounded-lg transition-colors ${
                appearance.theme === 'light' 
                  ? 'hover:bg-gray-100 text-gray-600' 
                  : 'hover:bg-gray-700 text-gray-300'
              }`}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="px-6 pb-6">
            {activeView === 'overview' && renderOverview()}
            {activeView === 'review' && renderReviewCourses()}
            {activeView === 'continue' && renderContinueLearning()}
            {activeView === 'grid' && renderCourseGrid()}
          </div>
        </div>
      </div>
    );
  };

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
         {/* Course Categories Sidebar */}
         {showCourseSidebar && <CourseSidebar />}
         
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
            
                         {/* Course Categories Button */}
             <button
               onClick={() => setShowCourseSidebar(!showCourseSidebar)}
               className={`mt-3 w-full flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 ${
                 appearance.theme === 'light'
                   ? 'bg-green-600 hover:bg-green-700 text-white'
                   : 'bg-green-500 hover:bg-green-600 text-white'
               }`}
             >
               <span className="mr-2">📖</span>
               <span className="font-medium">Course Categories</span>
             </button>
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

        {/* Main Content Area */}
        {showCourseSidebar ? (
          <CourseCategoryView />
        ) : (
          <div className="flex-1 flex">
            {/* Chat Area */}
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
                          message.role === 'instructor' ? 'text-yellow-400' : appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
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
                  <div className={`text-center py-8 transition-colors duration-300 ${
                    appearance.theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    <MessageCircle size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Select a conversation to start messaging</p>
                  </div>
                )}
              </div>

              {/* Message Input */}
              <div className={`p-4 transition-colors duration-300 ${
                appearance.theme === 'light' ? 'bg-white' : 'bg-gray-700'
              }`}>
                <div className={`flex items-center rounded-lg px-4 py-3 transition-colors duration-300 ${
                  appearance.theme === 'light' ? 'bg-gray-100' : 'bg-gray-600'
                }`}>
                  <button className={`mr-3 transition-colors ${
                    appearance.theme === 'light' 
                      ? 'text-gray-600 hover:text-gray-900' 
                      : 'text-gray-400 hover:text-white'
                  }`}>
                    <Plus size={20} />
                  </button>
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={`Message ${showDMs ? 'Direct Messages' : `#${currentChannel?.name}`}`}
                    className={`flex-1 bg-transparent outline-none transition-colors duration-300 ${
                      appearance.theme === 'light' 
                        ? 'text-gray-900 placeholder-gray-500' 
                        : 'text-white placeholder-gray-400'
                    }`}
                  />
                  <div className="flex items-center space-x-2 ml-3">
                    <button className={`transition-colors ${
                      appearance.theme === 'light' 
                        ? 'text-gray-600 hover:text-gray-900' 
                        : 'text-gray-400 hover:text-white'
                    }`}>
                      <Gift size={20} />
                    </button>
                    <button className={`transition-colors ${
                      appearance.theme === 'light' 
                        ? 'text-gray-600 hover:text-gray-900' 
                        : 'text-gray-400 hover:text-white'
                    }`}>
                      <Paperclip size={20} />
                    </button>
                    <button className={`transition-colors ${
                      appearance.theme === 'light' 
                        ? 'text-gray-600 hover:text-gray-900' 
                        : 'text-gray-400 hover:text-white'
                    }`}>
                      <Smile size={20} />
                    </button>
                    <button
                      onClick={handleSendMessage}
                      className={`transition-colors ${
                        appearance.theme === 'light' 
                          ? 'text-gray-600 hover:text-gray-900' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Members List */}
            <div className={`w-60 border-l transition-colors duration-300 ${
              appearance.theme === 'light' 
                ? 'bg-gray-50 border-gray-200' 
                : 'bg-gray-700 border-gray-600'
            }`}>
              <div className="p-4">
                <h3 className={`font-semibold mb-4 transition-colors duration-300 ${
                  appearance.theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  {showDMs ? 'Friends' : `${currentCourse?.name} Members`}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className={`text-xs font-semibold mb-2 transition-colors duration-300 ${
                      appearance.theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                    }`}>INSTRUCTORS — 1</div>
                    <div 
                      onClick={() => handleProfileClick('Sarah Johnson')}
                      className={`flex items-center space-x-2 p-2 rounded cursor-pointer transition-colors ${
                        appearance.theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-600'
                      }`}
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
                    <div className={`text-xs font-semibold mb-2 transition-colors duration-300 ${
                      appearance.theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                    }`}>STUDENTS — 24</div>
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
                          className={`flex items-center space-x-2 p-2 rounded cursor-pointer transition-colors ${
                            appearance.theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-600'
                          }`}
                        >
                          <div className="relative">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                {student.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-700 ${
                              student.status === 'online' ? 'bg-green-400' : 
                              student.status === 'away' ? 'bg-yellow-400' : 'bg-gray-400'
                            }`}></div>
                          </div>
                          <span className={`text-sm transition-colors duration-300 ${
                            appearance.theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                          }`}>{student.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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

      {/* Course Studies Modal */}
      {showCourseStudies && (
        <CourseStudiesModal />
      )}
    </div>
  );
}