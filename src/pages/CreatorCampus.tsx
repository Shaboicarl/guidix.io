import React, { useState } from 'react';
import { Hash, Users, Settings, Mic, MicOff, Headphones, Phone, Video, Plus, Search, Bell, User, MessageCircle, Send, Smile, Paperclip, Gift, Crown, Shield, Edit, Trash2, Pin, MoreHorizontal, X, Mail, Calendar, MapPin, Award, BarChart3, Clock, TrendingUp, AlertTriangle, Ban, UserX, Volume2, VolumeX, BookOpen, FileText, Download } from 'lucide-react';

export default function CreatorCampus() {
  const [selectedCourse, setSelectedCourse] = useState('web-development');
  const [selectedChannel, setSelectedChannel] = useState('general');
  const [selectedCreatorTool, setSelectedCreatorTool] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [showDMs, setShowDMs] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showModerationPanel, setShowModerationPanel] = useState(false);
  const [showStudentAnalytics, setShowStudentAnalytics] = useState(false);
  const [showCreatorTools, setShowCreatorTools] = useState(false);
  const [isInVoiceChannel, setIsInVoiceChannel] = useState(false);
  const [connectedVoiceChannel, setConnectedVoiceChannel] = useState(null);

  const courses = [
    {
      id: 'web-development',
      name: 'Web Development',
      color: 'from-blue-400 to-blue-600',
      icon: '💻',
      students: 156,
      channels: [
        { id: 'general', name: 'general', type: 'text' },
        { id: 'announcements', name: 'announcements', type: 'text' },
        { id: 'html-css', name: 'html-css', type: 'text' },
        { id: 'javascript', name: 'javascript', type: 'text' },
        { id: 'react', name: 'react', type: 'text' },
        { id: 'assignments', name: 'assignments', type: 'text' },
        { id: 'voice-study', name: 'Voice Study Hall', type: 'voice' },
        { id: 'office-hours', name: 'Office Hours', type: 'voice' }
      ]
    },
    {
      id: 'data-science',
      name: 'Data Science',
      color: 'from-purple-400 to-purple-600',
      icon: '📊',
      students: 89,
      channels: [
        { id: 'general', name: 'general', type: 'text' },
        { id: 'python-basics', name: 'python-basics', type: 'text' },
        { id: 'machine-learning', name: 'machine-learning', type: 'text' },
        { id: 'data-viz', name: 'data-visualization', type: 'text' },
        { id: 'projects', name: 'projects', type: 'text' },
        { id: 'study-group', name: 'Study Group', type: 'voice' }
      ]
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      color: 'from-green-400 to-green-600',
      icon: '📈',
      students: 203,
      channels: [
        { id: 'general', name: 'general', type: 'text' },
        { id: 'seo-tips', name: 'seo-tips', type: 'text' },
        { id: 'social-media', name: 'social-media', type: 'text' },
        { id: 'campaign-reviews', name: 'campaign-reviews', type: 'text' },
        { id: 'marketing-calls', name: 'Marketing Calls', type: 'voice' }
      ]
    }
  ];

  const directMessages = [
    { id: 1, name: 'Mike Student', status: 'online', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100', lastMessage: 'Question about the React assignment' },
    { id: 2, name: 'Lisa Park', status: 'away', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100', lastMessage: 'Thank you for the feedback!' },
    { id: 3, name: 'David Wilson', status: 'offline', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100', lastMessage: 'Can we schedule office hours?' },
    { id: 4, name: 'Emma Chen', status: 'online', avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100', lastMessage: 'Loved today\'s lesson!' }
  ];

  const messages = [
    {
      id: 1,
      user: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '2:30 PM',
      content: '📢 Welcome to Week 3 of Web Development! Today we\'ll be diving into React components. Make sure you\'ve completed the JavaScript fundamentals before proceeding.',
      role: 'creator',
      pinned: true
    },
    {
      id: 2,
      user: 'Mike Student',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '2:32 PM',
      content: 'Hi Sarah! I\'m having trouble with the useState hook. Could you explain when to use it vs regular variables?',
      role: 'student'
    },
    {
      id: 3,
      user: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '2:35 PM',
      content: '@Mike Student Great question! useState is for data that changes and needs to trigger re-renders. Regular variables won\'t cause the component to update when changed. I\'ll create a quick demo for everyone.',
      role: 'creator'
    },
    {
      id: 4,
      user: 'Lisa Park',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '2:38 PM',
      content: 'That would be super helpful! Also, should we be using functional or class components for the final project?',
      role: 'student'
    },
    {
      id: 5,
      user: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
      time: '2:40 PM',
      content: '@Lisa Park Definitely functional components with hooks! They\'re the modern standard. I\'ll post the project requirements in the assignments channel shortly.',
      role: 'creator'
    }
  ];

  const currentCourse = courses.find(course => course.id === selectedCourse);
  const currentChannel = currentCourse?.channels.find(channel => channel.id === selectedChannel);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  const handleProfileClick = (studentName) => {
    const profile = {
      name: studentName,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      status: 'online',
      email: 'student@example.com',
      location: 'New York, NY',
      joinDate: 'January 2024',
      bio: 'Passionate about web development and learning new technologies.',
      courses: ['Web Development', 'JavaScript Fundamentals']
    };
    setSelectedProfile(profile);
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
          <button className="px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors">
            Moderate
          </button>
        </div>
      </div>
    </div>
  );

  const ModerationPanel = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Moderation Tools</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Channel Management</h3>
            <div className="space-y-3">
              <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="font-medium text-gray-900">Create Channel</div>
                <div className="text-sm text-gray-600">Add new text or voice channels</div>
              </button>
              <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="font-medium text-gray-900">Edit Permissions</div>
                <div className="text-sm text-gray-600">Manage channel access and roles</div>
              </button>
              <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="font-medium text-gray-900">Slow Mode</div>
                <div className="text-sm text-gray-600">Limit message frequency</div>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Management</h3>
            <div className="space-y-3">
              <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-red-300 transition-colors">
                <div className="font-medium text-red-700">Mute User</div>
                <div className="text-sm text-gray-600">Temporarily silence a user</div>
              </button>
              <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-red-300 transition-colors">
                <div className="font-medium text-red-700">Kick User</div>
                <div className="text-sm text-gray-600">Remove user from course</div>
              </button>
              <button className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-red-300 transition-colors">
                <div className="font-medium text-red-700">Ban User</div>
                <div className="text-sm text-gray-600">Permanently ban from course</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const StudentAnalyticsPanel = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Student Analytics</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="text-2xl font-bold text-blue-600">156</div>
            <div className="text-sm text-blue-700">Total Students</div>
          </div>
          <div className="bg-green-50 rounded-xl p-4">
            <div className="text-2xl font-bold text-green-600">73%</div>
            <div className="text-sm text-green-700">Avg Progress</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-4">
            <div className="text-2xl font-bold text-purple-600">89</div>
            <div className="text-sm text-purple-700">Premium Plans</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-4">
            <div className="text-2xl font-bold text-orange-600">67</div>
            <div className="text-sm text-orange-700">Basic Plans</div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-900">Student</th>
                <th className="text-left p-4 font-semibold text-gray-900">Progress</th>
                <th className="text-left p-4 font-semibold text-gray-900">Plan</th>
                <th className="text-left p-4 font-semibold text-gray-900">Time Spent</th>
                <th className="text-left p-4 font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { name: 'Mike Student', progress: 85, plan: 'Premium', time: '47h', status: 'online' },
                { name: 'Lisa Park', progress: 92, plan: 'Premium', time: '52h', status: 'online' },
                { name: 'David Wilson', progress: 78, plan: 'Basic', time: '34h', status: 'away' },
                { name: 'Emma Chen', progress: 95, plan: 'Premium', time: '61h', status: 'online' },
                { name: 'Alex Rodriguez', progress: 67, plan: 'Basic', time: '28h', status: 'offline' }
              ].map((student, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">{student.name}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      student.plan === 'Premium' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {student.plan}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{student.time}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        student.status === 'online' ? 'bg-green-400' : 
                        student.status === 'away' ? 'bg-yellow-400' : 'bg-gray-400'
                      }`}></div>
                      <span className="text-sm text-gray-600 capitalize">{student.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-gray-800 flex flex-col">
      {/* Top Navigation Bar */}
      <div className="bg-gray-900 border-b border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Crown className="text-white" size={16} />
              </div>
              <span className="text-white font-bold text-lg">Creator Studio</span>
            </div>
            
            {/* Course Tabs */}
            <div className="flex items-center space-x-2">
              {courses.map((course) => (
                <div key={course.id} className="relative">
                  <button
                    onClick={() => {
                      setSelectedCourse(course.id);
                      setSelectedChannel('general');
                      setShowDMs(false);
                    }}
                    className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                      selectedCourse === course.id 
                        ? `bg-gradient-to-r ${course.color} text-white shadow-lg` 
                        : 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="text-lg">{course.icon}</span>
                    <span className="font-medium text-sm">{course.name}</span>
                  </button>
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {course.students > 99 ? '99+' : course.students}
                  </div>
                </div>
              ))}
              
              <button
                onClick={() => setShowDMs(!showDMs)}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                  showDMs 
                    ? 'bg-green-500 text-white shadow-lg' 
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white'
                }`}
              >
                <MessageCircle size={16} />
                <span className="font-medium text-sm">Student Messages</span>
              </button>
              
              <button
                onClick={() => setShowCreatorTools(!showCreatorTools)}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                  showCreatorTools 
                    ? 'bg-yellow-500 text-white shadow-lg' 
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white'
                }`}
              >
                <Shield size={16} />
                <span className="font-medium text-sm">Creator Tools</span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Bell size={18} />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Search size={18} />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Crown className="text-white" size={16} />
              </div>
              <span className="text-white text-sm font-medium">Sarah Johnson</span>
              <span className="bg-yellow-500 text-black text-xs px-2 py-0.5 rounded font-bold">CREATOR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Channels Sidebar */}
        <div className="w-60 bg-gray-700 flex flex-col">
          <div className="p-4 border-b border-gray-600">
            <div className="flex items-center justify-between">
              <h2 className="text-white font-bold text-lg">
                {showDMs ? 'Direct Messages' : showCreatorTools ? 'Creator Tools' : currentCourse?.name}
              </h2>
              {!showDMs && !showCreatorTools && (
                <div className="flex items-center space-x-1">
                  <Crown className="text-yellow-400" size={16} />
                  <span className="text-yellow-400 text-xs font-bold">CREATOR</span>
                </div>
              )}
            </div>
            {!showDMs && !showCreatorTools && (
              <div className="text-gray-400 text-sm mt-1">
                {currentCourse?.students} students enrolled
              </div>
            )}
          </div>

          <div className="flex-1 overflow-y-auto">
              <div className="p-2">
                <div className="flex items-center justify-between px-2 py-1 mb-2">
                  <span className="text-gray-300 text-sm font-semibold">STUDENT MESSAGES</span>
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
                  <div className="flex items-center justify-between px-2 py-1 mb-2">
                    <span className="text-gray-300 text-sm font-semibold">TEXT CHANNELS</span>
                    <Plus className="text-gray-400 hover:text-white cursor-pointer" size={16} title="Create Channel" />
                  </div>
                  {currentCourse?.channels.filter(channel => channel.type === 'text').map((channel) => (
                    <button
                      key={channel.id}
                      onClick={() => setSelectedChannel(channel.id)}
                      className={`w-full flex items-center justify-between px-2 py-1 rounded text-left transition-colors group ${
                        selectedChannel === channel.id 
                          ? 'bg-gray-600 text-white' 
                          : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center">
                        <Hash size={16} className="mr-2" />
                        <span className="text-sm">{channel.name}</span>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 flex items-center space-x-1">
                        <Edit size={12} className="text-gray-400 hover:text-white cursor-pointer" />
                        <Settings size={12} className="text-gray-400 hover:text-white cursor-pointer" />
                      </div>
                    </button>
                  ))}
                </div>

                <div>
                  <div className="flex items-center justify-between px-2 py-1 mb-2">
                    <span className="text-gray-300 text-sm font-semibold">VOICE CHANNELS</span>
                    <Plus className="text-gray-400 hover:text-white cursor-pointer" size={16} title="Create Voice Channel" />
                  </div>
                  {currentCourse?.channels.filter(channel => channel.type === 'voice').map((channel) => (
                    <button
                      key={channel.id}
                      className="w-full flex items-center justify-between px-2 py-1 rounded text-left text-gray-300 hover:bg-gray-600 hover:text-white transition-colors group"
                    >
                      <div className="flex items-center">
                        <Users size={16} className="mr-2" />
                        <span className="text-sm">{channel.name}</span>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 flex items-center space-x-1">
                        <Edit size={12} className="text-gray-400 hover:text-white cursor-pointer" />
                        <Settings size={12} className="text-gray-400 hover:text-white cursor-pointer" />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-600">
                  <div className="px-2 py-1 mb-2">
                    <span className="text-gray-300 text-sm font-semibold">CREATOR TOOLS</span>
                  </div>
                  <button className="w-full flex items-center px-2 py-1 rounded text-left text-gray-300 hover:bg-gray-600 hover:text-white transition-colors">
                    <Shield size={16} className="mr-2" />
                    <span className="text-sm">Moderation</span>
                  </button>
                  <button className="w-full flex items-center px-2 py-1 rounded text-left text-gray-300 hover:bg-gray-600 hover:text-white transition-colors">
                    <Users size={16} className="mr-2" />
                    <span className="text-sm">Student Analytics</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Creator Panel */}
          <div className="p-2 bg-gray-800 border-t border-gray-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-2">
                  <Crown className="text-white" size={16} />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Sarah Johnson</div>
                  <div className="text-yellow-400 text-xs font-bold">CREATOR</div>
                </div>
              </div>
              <div className="flex space-x-1">
                <button className="p-1 text-gray-400 hover:text-white transition-colors">
                  <Mic size={16} />
                </button>
                <button className="p-1 text-gray-400 hover:text-white transition-colors">
                  <Headphones size={16} />
                </button>
                <button className="p-1 text-gray-400 hover:text-white transition-colors">
                  <Settings size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-gray-600">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-500 bg-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {showDMs ? (
                  <MessageCircle className="text-gray-300 mr-2" size={20} />
                ) : (
                  <Hash className="text-gray-300 mr-2" size={20} />
                )}
                <h3 className="text-white font-semibold">
                  {showDMs ? 'Student Messages' : currentChannel?.name}
                </h3>
                {!showDMs && (
                  <div className="ml-4 text-gray-400 text-sm">
                    Course discussion and announcements
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
                <button 
                  onClick={() => setShowModTools(!showModTools)}
                  className={`p-2 transition-colors ${showModTools ? 'text-yellow-400' : 'text-gray-400 hover:text-white'}`}
                >
                  <Shield size={18} />
                </button>
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {!showDMs && messages.map((message) => (
              <div key={message.id} className={`flex items-start space-x-3 hover:bg-gray-700 hover:bg-opacity-30 p-2 rounded group ${message.pinned ? 'bg-yellow-900 bg-opacity-20 border-l-4 border-yellow-400' : ''}`}>
                <img
                  src={message.avatar}
                  alt={message.user}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`font-semibold ${
                      message.role === 'creator' ? 'text-yellow-400' : 'text-white'
                    }`}>
                      {message.user}
                    </span>
                    {message.role === 'creator' && (
                      <div className="flex items-center space-x-1">
                        <Crown size={12} className="text-yellow-400" />
                        <span className="bg-yellow-500 text-black text-xs px-2 py-0.5 rounded font-bold">
                          CREATOR
                        </span>
                      </div>
                    )}
                    {message.pinned && (
                      <Pin size={12} className="text-yellow-400" />
                    )}
                    <span className="text-gray-400 text-xs">{message.time}</span>
                  </div>
                  <div className="text-gray-300 leading-relaxed">
                    {message.content}
                  </div>
                </div>
                {showModTools && (
                  <div className="opacity-0 group-hover:opacity-100 flex items-center space-x-1">
                    <button className="p-1 text-gray-400 hover:text-yellow-400 transition-colors" title="Pin Message">
                      <Pin size={14} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-400 transition-colors" title="Delete Message">
                      <Trash2 size={14} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-white transition-colors" title="More Options">
                      <MoreHorizontal size={14} />
                    </button>
                  </div>
                )}
              </div>
            ))}
            
            {showDMs && (
              <div className="text-center text-gray-400 py-8">
                <MessageCircle size={48} className="mx-auto mb-4 opacity-50" />
                <p>Select a student conversation to start messaging</p>
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
                placeholder={`Message ${showDMs ? 'students' : `#${currentChannel?.name}`}`}
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
              />
              <div className="flex items-center space-x-2 ml-3">
                <button className="text-gray-400 hover:text-white transition-colors" title="Upload File">
                  <Paperclip size={20} />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors" title="Add Emoji">
                  <Smile size={20} />
                </button>
                <button className="text-yellow-400 hover:text-yellow-300 transition-colors" title="Creator Tools">
                  <Crown size={20} />
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
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">
                {showDMs ? 'All Students' : `${currentCourse?.name} Members`}
              </h3>
              <Crown className="text-yellow-400" size={16} />
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-xs font-semibold mb-2">CREATOR — 1</div>
                <div className="flex items-center justify-between p-2 rounded hover:bg-gray-600 cursor-pointer">
                  <div className="flex items-center space-x-2">
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
                  <Crown className="text-yellow-400" size={14} />
                </div>
              </div>

              <div>
                <div className="text-gray-400 text-xs font-semibold mb-2">
                  STUDENTS — {currentCourse?.students || 0}
                </div>
                <div className="space-y-1 max-h-96 overflow-y-auto">
                  {[
                    { name: 'Mike Student', status: 'online', progress: '85%' },
                    { name: 'Lisa Park', status: 'online', progress: '92%' },
                    { name: 'David Wilson', status: 'away', progress: '78%' },
                    { name: 'Emma Chen', status: 'online', progress: '95%' },
                    { name: 'Alex Rodriguez', status: 'offline', progress: '67%' },
                    { name: 'James Kim', status: 'online', progress: '88%' },
                    { name: 'Maria Garcia', status: 'away', progress: '73%' }
                  ].map((student, index) => (
                    <div 
                      key={index} 
                      onClick={() => handleProfileClick(student.name)}
                      className="flex items-center justify-between p-2 rounded hover:bg-gray-600 cursor-pointer group"
                    >
                      <div className="flex items-center space-x-2">
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
                        <div>
                          <div className="text-gray-300 text-sm">{student.name}</div>
                          <div className="text-gray-500 text-xs">{student.progress} complete</div>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100">
                        <MoreHorizontal className="text-gray-400 hover:text-white" size={14} />
                      </div>
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
      
      {/* Moderation Panel */}
      {showModerationPanel && (
        <ModerationPanel onClose={() => setShowModerationPanel(false)} />
      )}
      
      {/* Student Analytics Panel */}
      {showStudentAnalytics && (
        <StudentAnalyticsPanel onClose={() => setShowStudentAnalytics(false)} />
      )}
    </div>
  );
}