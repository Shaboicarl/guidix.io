import React, { useState } from 'react';
import { Hash, Users, Crown, Settings, MessageCircle, Bell, Search, Plus, Smile, Paperclip, Send, Mic, Video, Phone, UserPlus, Shield, BarChart3, BookOpen, Mail, Calendar, FileText, Download, TrendingUp, Award, Eye, Edit, Trash2, X, LogOut, User, ChevronDown, Save, Upload, Moon, Sun, Monitor, Type, Clock, MessageSquare, Zap } from 'lucide-react';

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
  const [showCourseSettings, setShowCourseSettings] = useState(false);
  
  // Profile and Settings States
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState('account');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  
  // Appearance Settings
  const [theme, setTheme] = useState('dark');
  const [fontSize, setFontSize] = useState('medium');
  const [compactMode, setCompactMode] = useState(false);
  const [showTimestamps, setShowTimestamps] = useState(true);
  const [animatedEmojis, setAnimatedEmojis] = useState(true);
  
  // Profile Data
  const [profileData, setProfileData] = useState({
    name: 'Sarah Creator',
    username: 'sarahcreator',
    email: 'sarah.creator@example.com',
    bio: 'Passionate educator and course creator. I love helping students achieve their learning goals through engaging content.',
    joinDate: 'September 2023',
    coursesCreated: 8,
    totalStudents: 1247,
    certificatesIssued: 456,
    avatar: null as string | null
  });
  
  const [editProfileData, setEditProfileData] = useState(profileData);
  const [showCertificateManager, setShowCertificateManager] = useState(false);
  const [showAnnouncementPanel, setShowAnnouncementPanel] = useState(false);
  const [showEmailPanel, setShowEmailPanel] = useState(false);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const [showChannelCreator, setShowChannelCreator] = useState(false);
  const [showAssignmentManager, setShowAssignmentManager] = useState(false);
  const [showEventScheduler, setShowEventScheduler] = useState(false);
  const [showDataExporter, setShowDataExporter] = useState(false);
  const [showPerformanceAnalytics, setShowPerformanceAnalytics] = useState(false);
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

  const CourseSettingsModal = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Course Settings</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Name</label>
                <input type="text" defaultValue="Web Development" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300" defaultValue="Complete web development course"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Status</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300">
                  <option>Active</option>
                  <option>Draft</option>
                  <option>Archived</option>
                </select>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Access Control</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Allow Guest Access</span>
                <input type="checkbox" className="rounded" />
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Require Approval</span>
                <input type="checkbox" className="rounded" />
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Enable Discussions</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4 mt-8">
          <button onClick={onClose} className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Cancel</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Changes</button>
        </div>
      </div>
    </div>
  );

  const CertificateManagerModal = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Certificate Manager</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mr-4">Create Certificate Template</button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Bulk Issue Certificates</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-900">Student</th>
                <th className="text-left p-4 font-semibold text-gray-900">Progress</th>
                <th className="text-left p-4 font-semibold text-gray-900">Certificate Status</th>
                <th className="text-left p-4 font-semibold text-gray-900">Issue Date</th>
                <th className="text-left p-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { name: 'Mike Student', progress: 100, status: 'Issued', date: '2024-01-15' },
                { name: 'Lisa Park', progress: 95, status: 'Eligible', date: '-' },
                { name: 'David Wilson', progress: 78, status: 'Not Eligible', date: '-' },
                { name: 'Emma Chen', progress: 100, status: 'Issued', date: '2024-01-10' }
              ].map((student, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">{student.name}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${student.progress}%` }}></div>
                      </div>
                      <span className="text-sm">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      student.status === 'Issued' ? 'bg-green-100 text-green-700' :
                      student.status === 'Eligible' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{student.date}</td>
                  <td className="p-4">
                    {student.status === 'Eligible' && (
                      <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">Issue Certificate</button>
                    )}
                    {student.status === 'Issued' && (
                      <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200">View Certificate</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const AnnouncementPanelModal = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Announcements</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Create Announcement</button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Announcement</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input type="text" placeholder="Announcement title..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} placeholder="Write your announcement..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300"></textarea>
            </div>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" />
                <span className="text-sm text-gray-700">Pin to top</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded mr-2" />
                <span className="text-sm text-gray-700">Send email notification</span>
              </label>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Post Announcement</button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Announcements</h3>
          {[
            { title: '