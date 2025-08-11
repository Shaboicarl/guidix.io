import React, { useState } from 'react';
import { Hash, Users, Settings, Mic, MicOff, Headphones, HeadphonesIcon, Phone, Video, Plus, Search, Bell, User, MessageCircle, Send, Smile, Paperclip, Gift } from 'lucide-react';

export default function StudentCampus() {
  const [selectedCourse, setSelectedCourse] = useState('web-development');
  const [selectedChannel, setSelectedChannel] = useState('general');
  const [messageInput, setMessageInput] = useState('');
  const [showDMs, setShowDMs] = useState(false);

  const courses = [
    {
      id: 'web-development',
      name: 'Web Development',
      color: 'bg-blue-500',
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
      color: 'bg-purple-500',
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
      color: 'bg-green-500',
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
      color: 'bg-pink-500',
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

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // In a real app, this would send the message to the server
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  return (
    <div className="h-screen bg-gray-800 flex">
      {/* Course Sidebar */}
      <div className="w-20 bg-gray-900 flex flex-col items-center py-4 space-y-3">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
          <span className="text-white font-bold text-lg">G</span>
        </div>
        
        {courses.map((course) => (
          <button
            key={course.id}
            onClick={() => {
              setSelectedCourse(course.id);
              setSelectedChannel('general');
              setShowDMs(false);
            }}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 ${
              selectedCourse === course.id 
                ? `${course.color} text-white` 
                : 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white hover:rounded-xl'
            }`}
            title={course.name}
          >
            <span className="font-bold text-sm">
              {course.name.split(' ').map(word => word[0]).join('')}
            </span>
          </button>
        ))}

        <div className="w-8 h-px bg-gray-700 my-2"></div>

        <button
          onClick={() => setShowDMs(!showDMs)}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 ${
            showDMs 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white hover:rounded-xl'
          }`}
          title="Direct Messages"
        >
          <MessageCircle size={20} />
        </button>

        <button className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-2xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:rounded-xl">
          <Plus size={20} />
        </button>
      </div>

      {/* Channels Sidebar */}
      <div className="w-60 bg-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-600">
          <h2 className="text-white font-bold text-lg">
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
        <div className="p-2 bg-gray-800 border-t border-gray-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-2">
                <User className="text-white" size={16} />
              </div>
              <div>
                <div className="text-white text-sm font-medium">Student User</div>
                <div className="text-gray-400 text-xs">#1234</div>
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
                {showDMs ? 'Direct Messages' : currentChannel?.name}
              </h3>
              {!showDMs && (
                <div className="ml-4 text-gray-400 text-sm">
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
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {!showDMs && messages.map((message) => (
            <div key={message.id} className="flex items-start space-x-3 hover:bg-gray-700 hover:bg-opacity-30 p-2 rounded">
              <img
                src={message.avatar}
                alt={message.user}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`font-semibold ${
                    message.role === 'instructor' ? 'text-yellow-400' : 'text-white'
                  }`}>
                    {message.user}
                  </span>
                  {message.role === 'instructor' && (
                    <span className="bg-yellow-500 text-black text-xs px-2 py-0.5 rounded font-bold">
                      INSTRUCTOR
                    </span>
                  )}
                  <span className="text-gray-400 text-xs">{message.time}</span>
                </div>
                <div className="text-gray-300 leading-relaxed">
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
            {showDMs ? 'Friends' : `${currentCourse?.name} Members`}
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="text-gray-400 text-xs font-semibold mb-2">INSTRUCTORS — 1</div>
              <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-600 cursor-pointer">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Sarah Johnson"
                    className="w-8 h-8 rounded-full"
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
                  <div key={index} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-600 cursor-pointer">
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
                    <span className="text-gray-300 text-sm">{student.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}