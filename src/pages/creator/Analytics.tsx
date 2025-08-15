import React, { useState } from 'react';
import { TrendingUp, Users, BookOpen, DollarSign, Eye, Download, Calendar, Filter, X } from 'lucide-react';

export default function CreatorAnalytics() {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('users');

  const overviewStats = [
    { label: 'Monthly Active Users', value: '2,847', change: '+12.5%', icon: Users, color: 'blue' },
    { label: 'Course Completions', value: '1,234', change: '+8.3%', icon: BookOpen, color: 'green' },
    { label: 'Total Revenue', value: '$45,670', change: '+15.2%', icon: DollarSign, color: 'purple' },
    { label: 'Avg. Completion Rate', value: '87%', change: '+3.1%', icon: TrendingUp, color: 'orange' }
  ];

  const coursePerformance = [
    { id: 1, title: 'Complete Web Development Bootcamp', enrollments: 456, completions: 398, revenue: 4560, rating: 4.9 },
    { id: 2, title: 'Data Science with Python', enrollments: 324, completions: 267, revenue: 3240, rating: 4.8 },
    { id: 3, title: 'Digital Marketing Mastery', enrollments: 289, completions: 251, revenue: 2890, rating: 4.7 },
    { id: 4, title: 'UX/UI Design Fundamentals', enrollments: 178, completions: 156, revenue: 1780, rating: 4.9 }
  ];

  const studentEngagement = [
    { metric: 'Average Session Duration', value: '24 minutes', trend: '+5%' },
    { metric: 'Lessons per Session', value: '3.2', trend: '+12%' },
    { metric: 'Return Rate (7 days)', value: '68%', trend: '+8%' },
    { metric: 'Discussion Participation', value: '42%', trend: '+15%' }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 12450, students: 234 },
    { month: 'Feb', revenue: 15670, students: 289 },
    { month: 'Mar', revenue: 18920, students: 345 },
    { month: 'Apr', revenue: 22340, students: 398 },
    { month: 'May', revenue: 25680, students: 456 },
    { month: 'Jun', revenue: 28950, students: 512 }
  ];

  const getCompletionRate = (enrollments: number, completions: number) => {
    return Math.round((completions / enrollments) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics & Reports</h1>
            <p className="text-gray-600">Track your platform's performance and student engagement</p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <button className="flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              <Download size={16} className="mr-2" />
              Export Report
            </button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm font-medium mt-1 ${
                    stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} vs last period
                  </p>
                </div>
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`text-${stat.color}-600`} size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Charts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Revenue Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Revenue & Student Growth</h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedMetric('revenue')}
                    className={`px-3 py-1 text-sm font-medium rounded-lg transition-colors ${
                      selectedMetric === 'revenue' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Revenue
                  </button>
                  <button
                    onClick={() => setSelectedMetric('users')}
                    className={`px-3 py-1 text-sm font-medium rounded-lg transition-colors ${
                      selectedMetric === 'users' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Students
                  </button>
                </div>
              </div>
              
              <div className="h-64 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <TrendingUp size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold">Revenue & Growth Chart</p>
                  <p className="text-sm">Mock chart showing {selectedMetric} trends over time</p>
                </div>
              </div>

              <div className="grid grid-cols-6 gap-4 mt-4">
                {revenueData.map((data, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs text-gray-500 mb-1">{data.month}</div>
                    <div className="text-sm font-semibold text-gray-900">
                      {selectedMetric === 'revenue' ? `$${data.revenue.toLocaleString()}` : data.students}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Performance */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Course Performance</h3>
              <div className="space-y-4">
                {coursePerformance.map((course) => (
                  <div key={course.id} className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{course.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>⭐ {course.rating}</span>
                        <span>${course.revenue.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-3">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Enrollments</div>
                        <div className="text-lg font-semibold text-blue-600">{course.enrollments}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Completions</div>
                        <div className="text-lg font-semibold text-green-600">{course.completions}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Completion Rate</div>
                        <div className="text-lg font-semibold text-purple-600">
                          {getCompletionRate(course.enrollments, course.completions)}%
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${getCompletionRate(course.enrollments, course.completions)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Student Engagement */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Engagement</h3>
              <div className="space-y-4">
                {studentEngagement.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{item.metric}</div>
                      <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                    </div>
                    <div className={`text-sm font-semibold ${
                      item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {item.trend}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Performing Content */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Lessons</h3>
              <div className="space-y-3">
                {[
                  { title: 'Introduction to React', views: 1234, completion: 92 },
                  { title: 'JavaScript Fundamentals', views: 1156, completion: 89 },
                  { title: 'CSS Grid & Flexbox', views: 1089, completion: 94 },
                  { title: 'Python Data Types', views: 987, completion: 87 }
                ].map((lesson, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{lesson.title}</div>
                      <div className="text-xs text-gray-600">{lesson.views} views</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600">{lesson.completion}%</div>
                      <div className="text-xs text-gray-500">completion</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Reports</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 text-left border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                  <span className="text-sm font-medium text-gray-700">Student Progress Report</span>
                  <Download size={16} className="text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 text-left border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                  <span className="text-sm font-medium text-gray-700">Revenue Summary</span>
                  <Download size={16} className="text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 text-left border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                  <span className="text-sm font-medium text-gray-700">Course Analytics</span>
                  <Download size={16} className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}