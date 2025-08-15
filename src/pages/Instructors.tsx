import React from 'react';
import { Star, Users, BookOpen, Award, X } from 'lucide-react';

export default function Instructors() {
  const instructors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Full-Stack Developer",
      company: "Google",
      rating: 4.9,
      students: 25000,
      courses: 8,
      experience: "10+ years",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Sarah is a passionate educator with over 10 years of experience in web development. She has worked at top tech companies and loves sharing her knowledge with aspiring developers.",
      specialties: ["JavaScript", "React", "Node.js", "Python"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Data Science Lead",
      company: "Microsoft",
      rating: 4.8,
      students: 18500,
      courses: 6,
      experience: "12+ years",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Chen holds a PhD in Computer Science and has been leading data science teams for over a decade. His courses make complex topics accessible to everyone.",
      specialties: ["Python", "Machine Learning", "Data Analysis", "Statistics"]
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      title: "Digital Marketing Director",
      company: "HubSpot",
      rating: 4.7,
      students: 32000,
      courses: 12,
      experience: "8+ years",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Emma has helped hundreds of companies grow their online presence. She brings real-world marketing strategies directly to her students.",
      specialties: ["SEO", "Social Media", "Content Marketing", "PPC"]
    },
    {
      id: 4,
      name: "Alex Thompson",
      title: "Senior UX Designer",
      company: "Apple",
      rating: 4.9,
      students: 15800,
      courses: 5,
      experience: "9+ years",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Alex has designed user experiences for millions of users at Apple. He teaches design thinking and practical UX skills that get results.",
      specialties: ["UX Design", "UI Design", "Figma", "Design Systems"]
    },
    {
      id: 5,
      name: "James Wilson",
      title: "Mobile Development Expert",
      company: "Uber",
      rating: 4.6,
      students: 12200,
      courses: 7,
      experience: "11+ years",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "James has built mobile apps used by millions. He specializes in React Native and native iOS/Android development.",
      specialties: ["React Native", "iOS", "Android", "Flutter"]
    },
    {
      id: 6,
      name: "Lisa Park",
      title: "Cloud Solutions Architect",
      company: "Amazon Web Services",
      rating: 4.8,
      students: 14500,
      courses: 9,
      experience: "13+ years",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Lisa is a certified AWS Solutions Architect who has helped enterprises migrate to the cloud. She makes cloud computing accessible to everyone.",
      specialties: ["AWS", "Cloud Architecture", "DevOps", "Kubernetes"]
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expert Instructors</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from industry professionals with years of real-world experience at top companies.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 font-semibold">Expert Instructors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-600 font-semibold">Years Avg Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.8</div>
            <div className="text-gray-600 font-semibold">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">100K+</div>
            <div className="text-gray-600 font-semibold">Students Taught</div>
          </div>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-20 h-20 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{instructor.name}</h3>
                    <p className="text-purple-600 font-semibold text-sm">{instructor.title}</p>
                    <p className="text-gray-500 text-sm">{instructor.company}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{instructor.bio}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm font-bold text-gray-800 ml-1">{instructor.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">Rating</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="text-blue-500" size={16} />
                      <span className="text-sm font-bold text-gray-800 ml-1">{(instructor.students / 1000).toFixed(0)}K</span>
                    </div>
                    <span className="text-xs text-gray-500">Students</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <BookOpen className="text-purple-500" size={16} />
                      <span className="text-sm font-bold text-gray-800 ml-1">{instructor.courses}</span>
                    </div>
                    <span className="text-xs text-gray-500">Courses</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Award size={16} className="mr-1" />
                    <span>{instructor.experience}</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-200">
                    View Courses
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Want to Become an Instructor?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Share your expertise with thousands of students worldwide. Join our community of expert instructors.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold rounded-2xl text-lg hover:from-blue-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-200">
            Apply to Teach
          </button>
        </div>
      </div>
    </div>
  );
}