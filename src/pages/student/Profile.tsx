import React, { useState } from 'react';
import { User, Mail, Calendar, MapPin, Edit2, Save, X, BookOpen, Award, Clock, TrendingUp } from 'lucide-react';

export default function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Alex Student',
    email: 'alex.student@example.com',
    bio: 'Passionate learner focused on web development and data science. Always eager to learn new technologies and apply them to real-world projects.',
    location: 'San Francisco, CA',
    joinDate: 'January 2024',
    website: 'https://alexstudent.dev',
    linkedin: 'https://linkedin.com/in/alexstudent',
    github: 'https://github.com/alexstudent'
  });

  const [editData, setEditData] = useState(profileData);

  const stats = [
    { label: 'Courses Enrolled', value: '8', icon: BookOpen, color: 'blue' },
    { label: 'Certificates Earned', value: '3', icon: Award, color: 'green' },
    { label: 'Hours Learned', value: '47', icon: Clock, color: 'purple' },
    { label: 'Current Streak', value: '7 days', icon: TrendingUp, color: 'orange' }
  ];

  const recentActivity = [
    { id: 1, type: 'completed', title: 'Completed "CSS Flexbox & Grid"', date: '2 hours ago' },
    { id: 2, type: 'enrolled', title: 'Enrolled in "Mobile App Development"', date: '1 day ago' },
    { id: 3, type: 'certificate', title: 'Earned Web Development Certificate', date: '3 days ago' },
    { id: 4, type: 'completed', title: 'Completed "JavaScript Fundamentals"', date: '5 days ago' },
    { id: 5, type: 'enrolled', title: 'Enrolled in "Data Science with Python"', date: '1 week ago' }
  ];

  const learningGoals = [
    { id: 1, title: 'Complete Web Development Bootcamp', progress: 65, target: 'End of January' },
    { id: 2, title: 'Master React Development', progress: 40, target: 'End of February' },
    { id: 3, title: 'Learn Data Science Fundamentals', progress: 25, target: 'End of March' }
  ];

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'completed':
        return '✅';
      case 'enrolled':
        return '📚';
      case 'certificate':
        return '🏆';
      default:
        return '📝';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="text-white" size={40} />
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    className="text-2xl font-bold text-gray-900 text-center bg-transparent border-b-2 border-blue-300 focus:outline-none focus:border-blue-500"
                  />
                ) : (
                  <h2 className="text-2xl font-bold text-gray-900">{profileData.name}</h2>
                )}
                <p className="text-gray-600 mt-1">Student</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Mail size={16} className="mr-3" />
                  {isEditing ? (
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                      className="flex-1 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                  ) : (
                    <span>{profileData.email}</span>
                  )}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-3" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.location}
                      onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                      className="flex-1 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                  ) : (
                    <span>{profileData.location}</span>
                  )}
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-3" />
                  <span>Joined {profileData.joinDate}</span>
                </div>
              </div>

              {isEditing ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <textarea
                    value={editData.bio}
                    onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent resize-none"
                  />
                  
                  <div className="mt-4 space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                      <input
                        type="url"
                        value={editData.website}
                        onChange={(e) => setEditData({ ...editData, website: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                      <input
                        type="url"
                        value={editData.linkedin}
                        onChange={(e) => setEditData({ ...editData, linkedin: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">GitHub</label>
                      <input
                        type="url"
                        value={editData.github}
                        onChange={(e) => setEditData({ ...editData, github: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-3 mt-6">
                    <button
                      onClick={handleSave}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Save size={16} className="mr-2" />
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <X size={16} className="mr-2" />
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-gray-600 text-sm mb-4">{profileData.bio}</p>
                  
                  {(profileData.website || profileData.linkedin || profileData.github) && (
                    <div className="space-y-2 mb-6">
                      {profileData.website && (
                        <a href={profileData.website} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm">
                          🌐 Website
                        </a>
                      )}
                      {profileData.linkedin && (
                        <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm">
                          💼 LinkedIn
                        </a>
                      )}
                      {profileData.github && (
                        <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-700 text-sm">
                          💻 GitHub
                        </a>
                      )}
                    </div>
                  )}

                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Edit2 size={16} className="mr-2" />
                    Edit Profile
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`text-${stat.color}-600`} size={24} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Goals */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Learning Goals</h3>
              <div className="space-y-6">
                {learningGoals.map((goal) => (
                  <div key={goal.id}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{goal.title}</h4>
                      <span className="text-sm text-gray-500">{goal.target}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{goal.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
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