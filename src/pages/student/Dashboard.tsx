import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, TrendingUp, Play, ChevronRight, Star } from 'lucide-react';

export default function StudentDashboard() {
  const inProgressCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      progress: 65,
      thumbnail: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400",
      nextLesson: "React Components",
      timeLeft: "2h 30m"
    },
    {
      id: 2,
      title: "Data Science with Python",
      instructor: "Dr. Michael Chen",
      progress: 40,
      thumbnail: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400",
      nextLesson: "Pandas DataFrames",
      timeLeft: "1h 45m"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      instructor: "Emma Rodriguez",
      progress: 85,
      thumbnail: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
      nextLesson: "Analytics & Reporting",
      timeLeft: "45m"
    }
  ];

  const recommendedCourses = [
    {
      id: 4,
      title: "UX/UI Design Fundamentals",
      instructor: "Alex Thompson",
      rating: 4.9,
      students: 7800,
      thumbnail: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Design"
    },
    {
      id: 5,
      title: "Mobile App Development",
      instructor: "James Wilson",
      rating: 4.6,
      students: 5600,
      thumbnail: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Development"
    },
    {
      id: 6,
      title: "Cloud Computing with AWS",
      instructor: "Lisa Park",
      rating: 4.8,
      students: 6700,
      thumbnail: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Cloud"
    }
  ];

  const achievements = [
    { id: 1, title: "First Course", icon: "🎯", earned: true },
    { id: 2, title: "Week Streak", icon: "🔥", earned: true },
    { id: 3, title: "Quiz Master", icon: "🧠", earned: true },
    { id: 4, title: "Fast Learner", icon: "⚡", earned: false },
    { id: 5, title: "Course Complete", icon: "🏆", earned: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-gray-600">Ready to continue your learning journey?</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Courses Enrolled</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Award className="text-green-600" size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Certificates</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="text-purple-600" size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Hours Learned</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-yellow-600" size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg. Progress</p>
                <p className="text-2xl font-bold text-gray-900">73%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Continue Learning</h2>
                <Link to="/org/learn/catalog" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                {inProgressCourses.map((course) => (
                  <div key={course.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <p className="text-sm text-gray-600 mb-1">Next: {course.nextLesson}</p>
                      <p className="text-xs text-gray-500 mb-3">{course.timeLeft} left</p>
                      <Link
                        to={`/org/learn/course/${course.id}`}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Play size={16} className="mr-2" />
                        Resume
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Courses */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recommended for You</h2>
                <Link to="/org/learn/catalog" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Browse All
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {recommendedCourses.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                          {course.category}
                        </span>
                        <div className="flex items-center">
                          <Star className="text-yellow-400 fill-current" size={14} />
                          <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">{course.title}</h3>
                      <p className="text-xs text-gray-600 mb-3">by {course.instructor}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{course.students.toLocaleString()} students</span>
                        <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors">
                          Enroll
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Achievements</h3>
              <div className="grid grid-cols-5 gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`text-center p-3 rounded-lg border-2 transition-colors ${
                      achievement.earned
                        ? 'border-yellow-300 bg-yellow-50'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className={`text-2xl mb-1 ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                      {achievement.icon}
                    </div>
                    <p className={`text-xs font-medium ${
                      achievement.earned ? 'text-yellow-700' : 'text-gray-500'
                    }`}>
                      {achievement.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/org/learn/catalog"
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-700">Browse Catalog</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </Link>
                <Link
                  to="/org/learn/certificates"
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-700">View Certificates</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </Link>
                <Link
                  to="/org/learn/profile"
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-700">Update Profile</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </Link>
              </div>
            </div>

            {/* Learning Streak */}
            <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">🔥 Learning Streak</h3>
              <p className="text-3xl font-bold mb-1">7 Days</p>
              <p className="text-orange-100 text-sm">Keep it up! You're on fire!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}