import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users, Star, Play, X } from 'lucide-react';

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 12500,
      duration: "40 hours",
      level: "Beginner to Advanced",
      price: "$89",
      category: "Web Development",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Master HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive bootcamp."
    },
    {
      id: 2,
      title: "Data Science with Python",
      instructor: "Dr. Michael Chen",
      rating: 4.8,
      students: 8900,
      duration: "35 hours",
      level: "Intermediate",
      price: "$79",
      category: "Data Science",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Learn data analysis, machine learning, and visualization with Python and popular libraries."
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      instructor: "Emma Rodriguez",
      rating: 4.7,
      students: 15200,
      duration: "25 hours",
      level: "Beginner",
      price: "$69",
      category: "Digital Marketing",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Master SEO, social media marketing, content strategy, and paid advertising campaigns."
    },
    {
      id: 4,
      title: "UX/UI Design Fundamentals",
      instructor: "Alex Thompson",
      rating: 4.9,
      students: 7800,
      duration: "30 hours",
      level: "Beginner to Intermediate",
      price: "$75",
      category: "Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Learn user experience design principles, wireframing, prototyping, and design tools."
    },
    {
      id: 5,
      title: "Mobile App Development with React Native",
      instructor: "James Wilson",
      rating: 4.6,
      students: 5600,
      duration: "45 hours",
      level: "Intermediate to Advanced",
      price: "$95",
      category: "Mobile Development",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Build cross-platform mobile apps for iOS and Android using React Native."
    },
    {
      id: 6,
      title: "Cloud Computing with AWS",
      instructor: "Lisa Park",
      rating: 4.8,
      students: 6700,
      duration: "38 hours",
      level: "Intermediate",
      price: "$85",
      category: "Cloud Computing",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Master Amazon Web Services, cloud architecture, and deployment strategies."
    }
  ];

  const categories = [
    "All Courses",
    "Web Development",
    "Data Science",
    "Digital Marketing",
    "Design",
    "Mobile Development",
    "Cloud Computing",
    "Business",
    "Photography"
  ];

  // Filter courses based on selected category
  const filteredCourses = selectedCategory === 'All Courses' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Courses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover world-class courses taught by industry experts. Start your learning journey today.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all duration-200">
                    <Play className="text-blue-600" size={24} />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                  <span className="text-sm font-bold text-gray-800">{course.price}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-600 font-semibold">{course.level}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{course.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">by {course.instructor}</span>
                  <Link
                    to="/campus-select"
                    className="px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 inline-block text-center"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} 
            {selectedCategory !== 'All Courses' && ` in ${selectedCategory}`}
          </p>
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600 mb-6">Try selecting a different category.</p>
              <button 
                onClick={() => setSelectedCategory('All Courses')}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Courses
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}