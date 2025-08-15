import React, { useState } from 'react';
import { Plus, Search, Filter, Mail, MoreHorizontal, UserPlus, Upload, Download, X } from 'lucide-react';

export default function CreatorUsers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [showInviteModal, setShowInviteModal] = useState(false);

  const users = [
    {
      id: 1,
      name: 'Alex Student',
      email: 'alex.student@example.com',
      role: 'student',
      lastActive: '2024-01-15',
      coursesEnrolled: 3,
      status: 'active'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      email: 'maria.garcia@example.com',
      role: 'student',
      lastActive: '2024-01-14',
      coursesEnrolled: 5,
      status: 'active'
    },
    {
      id: 3,
      name: 'John Instructor',
      email: 'john.instructor@example.com',
      role: 'instructor',
      lastActive: '2024-01-15',
      coursesEnrolled: 0,
      status: 'active'
    },
    {
      id: 4,
      name: 'Emma Chen',
      email: 'emma.chen@example.com',
      role: 'student',
      lastActive: '2024-01-10',
      coursesEnrolled: 2,
      status: 'inactive'
    },
    {
      id: 5,
      name: 'David Wilson',
      email: 'david.wilson@example.com',
      role: 'student',
      lastActive: '2024-01-13',
      coursesEnrolled: 4,
      status: 'active'
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'student':
        return <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Student</span>;
      case 'instructor':
        return <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">Instructor</span>;
      case 'admin':
        return <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">Admin</span>;
      default:
        return <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">Unknown</span>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="w-2 h-2 bg-green-400 rounded-full"></span>;
      case 'inactive':
        return <span className="w-2 h-2 bg-gray-400 rounded-full"></span>;
      default:
        return <span className="w-2 h-2 bg-red-400 rounded-full"></span>;
    }
  };

  const InviteUserModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Invite Users</h2>
        
        <div className="space-y-6">
          {/* Single Email Invite */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Invite by Email</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
                  placeholder="user@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent">
                  <option value="student">Student</option>
                  <option value="instructor">Instructor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <button className="w-full flex items-center justify-center px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                <Mail size={16} className="mr-2" />
                Send Invitation
              </button>
            </div>
          </div>

          {/* Bulk Upload */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bulk Upload</h3>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                <p className="text-gray-600 mb-2">Upload CSV file with user data</p>
                <p className="text-sm text-gray-500 mb-4">Format: name, email, role</p>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                  Choose File
                </button>
              </div>
              <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                <Download size={16} className="mr-2" />
                Download CSV Template
              </button>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              onClick={() => setShowInviteModal(false)}
              className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">User Management</h1>
            <p className="text-gray-600">Manage students, instructors, and administrators</p>
          </div>
          <button
            onClick={() => setShowInviteModal(true)}
            className="flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            <UserPlus size={20} className="mr-2" />
            Invite Users
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{users.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <UserPlus className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Students</p>
                <p className="text-2xl font-bold text-gray-900">{users.filter(u => u.role === 'student').length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <UserPlus className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Instructors</p>
                <p className="text-2xl font-bold text-gray-900">{users.filter(u => u.role === 'instructor').length}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <UserPlus className="text-purple-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Today</p>
                <p className="text-2xl font-bold text-gray-900">{users.filter(u => u.status === 'active').length}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <UserPlus className="text-orange-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              />
            </div>

            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            >
              <option value="all">All Roles</option>
              <option value="student">Students</option>
              <option value="instructor">Instructors</option>
              <option value="admin">Admins</option>
            </select>

            <div className="flex items-center text-gray-600">
              <Filter size={20} className="mr-2" />
              <span>{filteredUsers.length} users found</span>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">User</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Role</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Courses</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Last Active</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{user.name}</h3>
                          <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {getRoleBadge(user.role)}
                    </td>
                    <td className="py-4 px-6 text-gray-900">
                      {user.role === 'student' ? `${user.coursesEnrolled} enrolled` : 'N/A'}
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {new Date(user.lastActive).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(user.status)}
                        <span className="text-sm text-gray-600 capitalize">{user.status}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Send Message">
                          <Mail size={16} />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors" title="More Options">
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
        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserPlus size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No users found</h3>
            <p className="text-gray-600 mb-6">Start by inviting your first users to the platform.</p>
            <button
              onClick={() => setShowInviteModal(true)}
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Invite Your First Users
            </button>
          </div>
        )}

        {/* Invite Modal */}
        {showInviteModal && <InviteUserModal />}
      </div>
    </div>
  );
}