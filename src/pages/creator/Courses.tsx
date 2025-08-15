import React, { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Eye, Users, DollarSign, MoreHorizontal, X } from 'lucide-react';

export default function CreatorCourses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      status: 'published',
      students: 456,
      revenue: 4560,
      lastUpdated: '2024-01-10',
      category: 'Development',
      price: 89,
      rating: 4.9,
      lessons: 45
    },
    {
      id: 2,
      title: 'Data Science with Python',
      status: 'published',
      students: 324,
      revenue: 3240,
      lastUpdated: '2024-01-08',
      category: 'Data Science',
      price: 79,
      rating: 4.8,
      lessons: 38
    },
    {
      id: 3,
      title: 'Advanced React Patterns',
      status: 'draft',
      students: 0,
      revenue: 0,
      lastUpdated: '2024-01-15',
      category: 'Development',
      price: 95,
      rating: 0,
      lessons: 12
    },
    {
      id: 4,
      title: 'Digital Marketing Mastery',
      status: 'published',
      students: 289,
      revenue: 2890,
      lastUpdated: '2024-01-05',
      category: 'Marketing',
      price: 69,
      rating: 4.7,
      lessons: 32
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || course.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Published</span>;
      case 'draft':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">Draft</span>;
      default:
        return <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">Unknown</span>;
    }
  };

  const CreateCourseModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Course</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course Title</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              placeholder="Enter course title..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent">
                <option>Development</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>Business</option>
                <option>Data Science</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
              <input
                type="number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
                placeholder="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent resize-none"
              placeholder="Describe your course..."
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setShowCreateModal(false)}
              className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Create Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Course Management</h1>
            <p className="text-gray-600">Create, edit, and manage your courses</p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Plus size={20} className="mr-2" />
            New Course
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>

            <div className="flex items-center text-gray-600">
              <Filter size={20} className="mr-2" />
              <span>{filteredCourses.length} courses found</span>
            </div>
          </div>
        </div>

        {/* Courses Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Course</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Students</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Revenue</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Last Updated</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div>
                        <h3 className="font-semibold text-gray-900">{course.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span>{course.category}</span>
                          <span>${course.price}</span>
                          <span>{course.lessons} lessons</span>
                          {course.rating > 0 && (
                            <span className="flex items-center">
                              ⭐ {course.rating}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {getStatusBadge(course.status)}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center text-gray-900">
                        <Users size={16} className="mr-2 text-gray-400" />
                        {course.students.toLocaleString()}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center text-gray-900">
                        <DollarSign size={16} className="mr-2 text-gray-400" />
                        ${course.revenue.toLocaleString()}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {new Date(course.lastUpdated).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View">
                          <Eye size={16} />
                        </button>
                        <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors" title="Edit">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                          <Trash2 size={16} />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors" title="More">
                          <MoreHorizontal size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-6">Get started by creating your first course.</p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Create Your First Course
            </button>
          </div>
        )}

        {/* Create Course Modal */}
        {showCreateModal && <CreateCourseModal />}
      </div>
    </div>
  );
}