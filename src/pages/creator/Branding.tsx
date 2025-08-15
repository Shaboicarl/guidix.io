import React, { useState } from 'react';
import { Upload, Palette, Globe, Mail, Eye, Save, RefreshCw, X } from 'lucide-react';

export default function CreatorBranding() {
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');
  const [secondaryColor, setSecondaryColor] = useState('#8B5CF6');
  const [customDomain, setCustomDomain] = useState('myacademy.com');
  const [isVerified, setIsVerified] = useState(false);

  const colorPresets = [
    { name: 'Blue & Purple', primary: '#3B82F6', secondary: '#8B5CF6' },
    { name: 'Green & Teal', primary: '#10B981', secondary: '#14B8A6' },
    { name: 'Orange & Red', primary: '#F59E0B', secondary: '#EF4444' },
    { name: 'Pink & Purple', primary: '#EC4899', secondary: '#A855F7' },
    { name: 'Indigo & Blue', primary: '#6366F1', secondary: '#3B82F6' }
  ];

  const emailTemplates = [
    { id: 'welcome', name: 'Welcome Email', description: 'Sent when a student enrolls' },
    { id: 'certificate', name: 'Certificate Award', description: 'Sent when a certificate is earned' },
    { id: 'reminder', name: 'Course Reminder', description: 'Sent for inactive students' },
    { id: 'completion', name: 'Course Completion', description: 'Sent when a course is completed' }
  ];

  const handleColorPreset = (preset: typeof colorPresets[0]) => {
    setPrimaryColor(preset.primary);
    setSecondaryColor(preset.secondary);
  };

  const handleVerifyDomain = () => {
    // Mock verification process
    setTimeout(() => {
      setIsVerified(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Branding & Customization</h1>
          <p className="text-gray-600">Customize your learning platform's appearance and branding</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Customization Panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Logo Upload */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Logo & Brand Assets</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Main Logo</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
                    <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 mb-1">Upload your logo</p>
                    <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Favicon</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
                    <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 mb-1">Upload favicon</p>
                    <p className="text-xs text-gray-500">ICO, PNG 32x32px</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Scheme */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Color Scheme</h3>
              
              {/* Color Pickers */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="w-12 h-12 rounded-lg border border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Color Presets */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Quick Presets</label>
                <div className="grid grid-cols-5 gap-3">
                  {colorPresets.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorPreset(preset)}
                      className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
                      title={preset.name}
                    >
                      <div className="flex space-x-1 mb-2">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: preset.primary }}
                        ></div>
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: preset.secondary }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600">{preset.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Domain */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Custom Domain</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Domain Name</label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="text"
                      value={customDomain}
                      onChange={(e) => setCustomDomain(e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
                      placeholder="yourdomain.com"
                    />
                    <button
                      onClick={handleVerifyDomain}
                      disabled={isVerified}
                      className={`px-6 py-3 font-semibold rounded-lg transition-colors ${
                        isVerified
                          ? 'bg-green-100 text-green-700 cursor-default'
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                    >
                      {isVerified ? (
                        <>
                          <RefreshCw size={16} className="inline mr-2" />
                          Verified
                        </>
                      ) : (
                        'Verify'
                      )}
                    </button>
                  </div>
                  {isVerified && (
                    <p className="text-sm text-green-600 mt-2">✅ Domain verified and active</p>
                  )}
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">DNS Configuration</h4>
                  <p className="text-sm text-blue-800 mb-3">Add these DNS records to your domain:</p>
                  <div className="bg-white rounded border p-3 font-mono text-sm">
                    <div>Type: CNAME</div>
                    <div>Name: @</div>
                    <div>Value: platform.guidix.io</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Templates */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Templates</h3>
              <div className="space-y-4">
                {emailTemplates.map((template) => (
                  <div key={template.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Mail size={20} className="text-gray-400" />
                      <div>
                        <h4 className="font-medium text-gray-900">{template.name}</h4>
                        <p className="text-sm text-gray-600">{template.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="px-3 py-1 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Live Preview */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Preview</h3>
              
              {/* Mock Login Page Preview */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div 
                  className="h-2"
                  style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }}
                ></div>
                <div className="p-6 bg-gray-50">
                  <div className="text-center mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                      style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }}
                    >
                      <span className="text-white font-bold">L</span>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">My Academy</h2>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-10 bg-white rounded border"></div>
                    <div className="h-10 bg-white rounded border"></div>
                    <button 
                      className="w-full h-10 text-white font-semibold rounded"
                      style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 mb-3">Preview URL:</p>
                <p className="text-sm font-mono bg-gray-100 px-3 py-2 rounded">
                  https://{customDomain}
                </p>
              </div>
            </div>

            {/* Save Changes */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Save Changes</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-center px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                  <Save size={16} className="mr-2" />
                  Save All Changes
                </button>
                <button className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                  <Eye size={16} className="mr-2" />
                  Preview Live Site
                </button>
              </div>
              
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  💡 Changes may take up to 5 minutes to appear on your live site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}