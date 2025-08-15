import React from 'react';
import { Users, BookOpen, DollarSign, TrendingUp, Eye, Award, MessageCircle, Calendar } from 'lucide-react';

export default function CreatorDashboard() {
  const kpiData = [
    { label: 'Total Students', value: '1,247', change: '+12%', icon: Users, color: 'blue' },
    { label: 'Active Courses', value: '8', change: '+2', icon: BookOpen, color: 'green' },
    { label: 'Monthly Revenue', value: '$12,450', change: '+18%', icon: DollarSign, color: 'purple' },
    { label: 'Completion Rate', value: '87%', change: '+5%', icon: TrendingUp, color: 'orange' }
  ];

  const topCourses = [
    { id: 1, title: 'Complete Web Development Bootcamp', students: 456, revenue: '$4,560', rating: 4.9 },
    { id: 2, title: 'Data Science with Python', students: 324, revenue: '$3,240', rating: 4.8 },
    { id: 3, title: 'Digital Marketing Mastery', students: 289, revenue: '$2,890', rating: 4.7 },
    { id: 4, title: 'UX/UI Design Fundamentals', students: 178, revenue: '$1,780', rating: 4.9 }
  ];

  const recentActivity = [
    { id: 1, type: 'enrollment', message: 'Sarah Johnson enrolled in Web Development Bootcamp', time: '2 minutes ago' },
    { id: 2, type: 'completion', message: 'Mike Chen completed Data Science with Python', time: '15 minutes ago' },
    { id: 3, type: 'review', message: 'Emma Rodriguez left a 5-star review', time: '1 hour ago' },
    { id: 4, type: 'enrollment', message: 'Alex Thompson enrolled in UX/UI Design', time: '2 hours ago' },
    { id: 5, type: 'completion', message: 'Lisa Park earned a certificate', time: '3 hours ago' }
  ];

  const upcomingEvents = [
    { id: 1, title: 'Live Q&A Session - Web Development', date: 'Today, 3:00 PM', attendees: 45 },
    { id: 2, title: 'Course Review Meeting', date: 'Tomorrow, 10:00 AM', attendees: 8 },
    { id: 3, title: 'New Course Planning', date: 'Jan 20, 2:00 PM', attendees: 12 }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'enrollment':
        return '👋';
      case 'completion':
        return '🎉';
      case 'review':
        return '⭐';
      default:
        return '📝';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Creator Dashboard</h1>
          <p className="text-gray-600">Welcome back, Sarah! Here's what's happening with your courses.</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{kpi.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
                  <p className={`text-sm font-medium mt-1 ${
                    kpi.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {kpi.change} from last month
                  </p>
                </div>
                <div className={`w-12 h-12 bg-${kpi.color}-100 rounded-lg flex items-center justify-center`}>
                  <kpi.icon className={`text-${kpi.color}-600`} size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Charts Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enrollment Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Student Enrollments</h3>
              <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <TrendingUp size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold">Enrollment Chart</p>
                  <p className="text-sm">Mock chart showing growth over time</p>
                </div>
              </div>
            </div>

            {/* Top Courses */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Courses</h3>
              <div className="space-y-4">
                {topCourses.map((course, index) => (
                  <div key={course.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{course.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Users size={14} className="mr-1" />
                            {course.students} students
                          </span>
                          <span className="flex items-center">
                            <DollarSign size={14} className="mr-1" />
                            {course.revenue}
                          </span>
                          <span className="flex items-center">
                            <Award size={14} className="mr-1" />
                            {course.rating} rating
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                      <Eye size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="text-xl">{getActivityIcon(activity.type)}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                    <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center text-xs text-gray-600">
                        <Calendar size={12} className="mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-xs text-gray-600">
                        <Users size={12} className="mr-1" />
                        {event.attendees}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                  <BookOpen size={16} className="mr-2" />
                  Create New Course
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  <MessageCircle size={16} className="mr-2" />
                  Message Students
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                  <TrendingUp size={16} className="mr-2" />
                  View Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}