import React, { useState } from 'react';
import { Save, Shield, Bell, Users, Globe, Key, Trash2, AlertTriangle, X } from 'lucide-react';

export default function CreatorSettings() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    // General Settings
    platformName: 'My Learning Academy',
    description: 'A comprehensive online learning platform',
    timezone: 'America/New_York',
    language: 'en',
    
    // Notifications
    emailNotifications: true,
    studentEnrollments: true,
    courseCompletions: true,
    newReviews: true,
    systemUpdates: false,
    
    // Permissions
    allowStudentDiscussions: true,
    requireApprovalForReviews: false,
    allowGuestAccess: false,
    enableCertificates: true,
    
    // Integrations
    googleAnalytics: '',
    facebookPixel: '',
    zoomIntegration: false,
    stripeConnected: true
  });

  const tabs = [
    { id: 'general', name: 'General', icon: Globe },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'permissions', name: 'Permissions', icon: Shield },
    { id: 'integrations', name: 'Integrations', icon: Key },
    { id: 'danger', name: 'Danger Zone', icon: AlertTriangle }
  ];

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // In a real app, this would save to the backend
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
        <input
          type="text"
          value={settings.platformName}
          onChange={(e) => handleSettingChange('platformName', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
        <textarea
          value={settings.description}
          onChange={(e) => handleSettingChange('description', e.target.value)}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent resize-none"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
          <select
            value={settings.timezone}
            onChange={(e) => handleSettingChange('timezone', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
          >
            <option value="America/New_York">Eastern Time (ET)</option>
            <option value="America/Chicago">Central Time (CT)</option>
            <option value="America/Denver">Mountain Time (MT)</option>
            <option value="America/Los_Angeles">Pacific Time (PT)</option>
            <option value="UTC">UTC</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
          <select
            value={settings.language}
            onChange={(e) => handleSettingChange('language', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="pt">Portuguese</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
        <div>
          <h4 className="font-medium text-gray-900">Email Notifications</h4>
          <p className="text-sm text-gray-600">Receive notifications via email</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.emailNotifications}
            onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
        </label>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Email Types</h4>
        
        {[
          { key: 'studentEnrollments', label: 'Student Enrollments', desc: 'When a student enrolls in your course' },
          { key: 'courseCompletions', label: 'Course Completions', desc: 'When a student completes a course' },
          { key: 'newReviews', label: 'New Reviews', desc: 'When students leave reviews' },
          { key: 'systemUpdates', label: 'System Updates', desc: 'Platform updates and maintenance notices' }
        ].map((item) => (
          <div key={item.key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h5 className="font-medium text-gray-900">{item.label}</h5>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings[item.key as keyof typeof settings] as boolean}
                onChange={(e) => handleSettingChange(item.key, e.target.checked)}
                className="sr-only peer"
                disabled={!settings.emailNotifications}
              />
              <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600 ${!settings.emailNotifications ? 'opacity-50' : ''}`}></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPermissionSettings = () => (
    <div className="space-y-6">
      {[
        { 
          key: 'allowStudentDiscussions', 
          label: 'Student Discussions', 
          desc: 'Allow students to post in course discussions' 
        },
        { 
          key: 'requireApprovalForReviews', 
          label: 'Review Approval', 
          desc: 'Require approval before reviews are published' 
        },
        { 
          key: 'allowGuestAccess', 
          label: 'Guest Access', 
          desc: 'Allow non-registered users to preview courses' 
        },
        { 
          key: 'enableCertificates', 
          label: 'Certificates', 
          desc: 'Enable certificate generation for completed courses' 
        }
      ].map((item) => (
        <div key={item.key} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">{item.label}</h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings[item.key as keyof typeof settings] as boolean}
              onChange={(e) => handleSettingChange(item.key, e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
        </div>
      ))}
    </div>
  );

  const renderIntegrationSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Google Analytics ID</label>
        <input
          type="text"
          value={settings.googleAnalytics}
          onChange={(e) => handleSettingChange('googleAnalytics', e.target.value)}
          placeholder="GA-XXXXXXXXX-X"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
        />
        <p className="text-sm text-gray-500 mt-1">Track student behavior and course performance</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Facebook Pixel ID</label>
        <input
          type="text"
          value={settings.facebookPixel}
          onChange={(e) => handleSettingChange('facebookPixel', e.target.value)}
          placeholder="XXXXXXXXXXXXXXX"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
        />
        <p className="text-sm text-gray-500 mt-1">Track conversions and optimize ads</p>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Connected Services</h4>
        
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Globe size={20} className="text-blue-600" />
            </div>
            <div>
              <h5 className="font-medium text-gray-900">Zoom Integration</h5>
              <p className="text-sm text-gray-600">Host live classes and webinars</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className={`text-sm ${settings.zoomIntegration ? 'text-green-600' : 'text-gray-500'}`}>
              {settings.zoomIntegration ? 'Connected' : 'Not Connected'}
            </span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              {settings.zoomIntegration ? 'Disconnect' : 'Connect'}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Key size={20} className="text-purple-600" />
            </div>
            <div>
              <h5 className="font-medium text-gray-900">Stripe Payments</h5>
              <p className="text-sm text-gray-600">Process course payments</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className={`text-sm ${settings.stripeConnected ? 'text-green-600' : 'text-gray-500'}`}>
              {settings.stripeConnected ? 'Connected' : 'Not Connected'}
            </span>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              {settings.stripeConnected ? 'Manage' : 'Connect'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDangerZone = () => (
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="text-red-500 mt-1" size={20} />
          <div>
            <h4 className="font-semibold text-red-900 mb-2">Danger Zone</h4>
            <p className="text-sm text-red-700 mb-4">
              These actions are irreversible. Please proceed with caution.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
          <div>
            <h5 className="font-medium text-red-900">Export All Data</h5>
            <p className="text-sm text-red-700">Download all your platform data</p>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Export Data
          </button>
        </div>

        <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
          <div>
            <h5 className="font-medium text-red-900">Delete All Student Data</h5>
            <p className="text-sm text-red-700">Permanently delete all student information</p>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Delete Data
          </button>
        </div>

        <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
          <div>
            <h5 className="font-medium text-red-900">Delete Platform</h5>
            <p className="text-sm text-red-700">Permanently delete your entire platform</p>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center">
            <Trash2 size={16} className="mr-2" />
            Delete Platform
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Platform Settings</h1>
          <p className="text-gray-600">Configure your platform preferences and integrations</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-purple-100 text-purple-700 border border-purple-200'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon size={20} />
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {tabs.find(tab => tab.id === activeTab)?.name}
                </h2>
                {activeTab !== 'danger' && (
                  <button
                    onClick={handleSave}
                    className="flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </button>
                )}
              </div>

              {activeTab === 'general' && renderGeneralSettings()}
              {activeTab === 'notifications' && renderNotificationSettings()}
              {activeTab === 'permissions' && renderPermissionSettings()}
              {activeTab === 'integrations' && renderIntegrationSettings()}
              {activeTab === 'danger' && renderDangerZone()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}