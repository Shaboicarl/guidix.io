import React, { useState } from 'react';
import { Award, Download, Share2, Calendar, CheckCircle, X } from 'lucide-react';

export default function StudentCertificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  const certificates = [
    {
      id: 1,
      courseName: "Complete Web Development Bootcamp",
      completionDate: "December 15, 2024",
      instructor: "Sarah Johnson",
      grade: "A+",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
      certificateNumber: "GDX-WEB-2024-001",
      thumbnail: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      courseName: "Digital Marketing Mastery",
      completionDate: "November 28, 2024",
      instructor: "Emma Rodriguez",
      grade: "A",
      skills: ["SEO", "Social Media", "Content Marketing", "Analytics"],
      certificateNumber: "GDX-MKT-2024-002",
      thumbnail: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      courseName: "UX/UI Design Fundamentals",
      completionDate: "October 10, 2024",
      instructor: "Alex Thompson",
      grade: "A+",
      skills: ["User Research", "Wireframing", "Prototyping", "Figma"],
      certificateNumber: "GDX-UX-2024-003",
      thumbnail: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const CertificateModal = ({ certificate }: { certificate: typeof certificates[0] }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={() => setSelectedCertificate(null)}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
          
          {/* Certificate Preview */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8">
            <div className="bg-white rounded-xl shadow-lg p-12 border-8 border-gradient-to-r from-blue-400 to-purple-500">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-white" size={40} />
                </div>
                
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Certificate of Completion</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
                
                <p className="text-lg text-gray-600 mb-4">This is to certify that</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Alex Student</h2>
                
                <p className="text-lg text-gray-600 mb-2">has successfully completed the course</p>
                <h3 className="text-2xl font-bold text-blue-600 mb-8">{certificate.courseName}</h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Completion Date</p>
                    <p className="font-semibold text-gray-800">{certificate.completionDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Grade Achieved</p>
                    <p className="font-semibold text-gray-800">{certificate.grade}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Instructor</p>
                    <p className="font-semibold text-gray-800">{certificate.instructor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Certificate ID</p>
                    <p className="font-semibold text-gray-800">{certificate.certificateNumber}</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <p className="text-sm text-gray-500 mb-3">Skills Mastered</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {certificate.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <div className="w-32 h-1 bg-gray-300 mb-2"></div>
                    <p className="text-sm text-gray-600">Instructor Signature</p>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-1 bg-gray-300 mb-2"></div>
                    <p className="text-sm text-gray-600">Platform Director</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Verify this certificate at guidix.io/verify/{certificate.certificateNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="p-6 bg-gray-50 flex justify-center space-x-4">
            <button className="flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              <Download size={20} className="mr-2" />
              Download PDF
            </button>
            <button className="flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
              <Share2 size={20} className="mr-2" />
              Share on LinkedIn
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Certificates</h1>
          <p className="text-gray-600">Your earned certificates and achievements</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Award className="text-green-600" size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Certificates Earned</p>
                <p className="text-2xl font-bold text-gray-900">{certificates.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="text-blue-600" size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Courses Completed</p>
                <p className="text-2xl font-bold text-gray-900">{certificates.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="text-purple-600" size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Latest Certificate</p>
                <p className="text-sm font-bold text-gray-900">Dec 15, 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        {certificates.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img
                    src={certificate.thumbnail}
                    alt={certificate.courseName}
                    className="w-full h-32 object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-90"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="text-white" size={48} />
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                    <span className="text-xs font-bold text-gray-800">{certificate.grade}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {certificate.courseName}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={14} className="mr-2" />
                      <span>Completed {certificate.completionDate}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span>Instructor: {certificate.instructor}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      <span>ID: {certificate.certificateNumber}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {certificate.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {certificate.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded">
                          +{certificate.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedCertificate(certificate.id)}
                      className="flex-1 px-3 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      View Certificate
                    </button>
                    <button className="px-3 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                      <Download size={16} />
                    </button>
                    <button className="px-3 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Award size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No certificates yet</h3>
            <p className="text-gray-600 mb-6">Complete courses to earn your first certificate!</p>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Browse Courses
            </button>
          </div>
        )}

        {/* Certificate Modal */}
        {selectedCertificate && (
          <CertificateModal 
            certificate={certificates.find(cert => cert.id === selectedCertificate)!} 
          />
        )}
      </div>
    </div>
  );
}