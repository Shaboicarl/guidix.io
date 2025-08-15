import React, { useState } from 'react';
import { Search, Filter, Star, Clock, Users, BookOpen } from 'lucide-react';

export default function StudentCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'business', name: 'Business' },
    { id: 'data-science', name: 'Data Science' }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 12500,
      duration: "40 hours",
      level: "Beginner",
      category: "development",
      price: "$89",
      thumbnail: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Master HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive bootcamp.",
      enrolled: false
    },
    {
      id: 2,
      title: "Data Science with Python",
      instructor: "Dr. Michael Chen",
      rating: 4.8,
      students: 8900,
      duration: "35 hours",
      level: "Intermediate",
      category: "data-science",
      price: "$79",
      thumbnail: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Learn data analysis, machine learning, and visualization with Python and popular libraries.",
      enrolled: true
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      instructor: "Emma Rodriguez",
      rating: 4.7,
      students: 15200,
      duration: "25 hours",
      level: "Beginner",
      category: "marketing",
      price: "$69",
      thumbnail: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Master SEO, social media marketing, content strategy, and paid advertising campaigns.",
      enrolled: true
    },
    {
      id: 4,
      title: "UX/UI Design Fundamentals",
      instructor: "Alex Thompson",
      rating: 4.9,
      students: 7800,
      duration: "30 hours",
      level: "Beginner",
      category: "design",
      price: "$75",
      thumbnail: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Learn user experience design principles, wireframing, prototyping, and design tools.",
      enrolled: false
    },
    {
      id: 5,
      title: "Mobile App Development with React Native",
      instructor: "James Wilson",
      rating: 4.6,
      students: 5600,
      duration: "45 hours",
      level: "Advanced",
      category: "development",
      price: "$95",
      thumbnail: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Build cross-platform mobile apps for iOS and Android using React Native.",
      enrolled: false
    },
    {
      id: 6,
      title: "Cloud Computing with AWS",
      instructor: "Lisa Park",
      rating: 4.8,
      students: 6700,
      duration: "38 hours",
      level: "Intermediate",
      category: "development",
      price: "$85",
      thumbnail: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Master Amazon Web Services, cloud architecture, and deployment strategies.",
      enrolled: false
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || course.level.toLowerCase() === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const handleEnroll = (courseId: number) => {
    // In a real app, this would make an API call
    console.log('Enrolling in course:', courseId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Course Catalog</h1>
          <p className="text-gray-600">Discover and enroll in courses to advance your skills</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty.id} value={difficulty.id}>{difficulty.name}</option>
              ))}
            </select>

            {/* Results Count */}
            <div className="flex items-center text-gray-600">
              <Filter size={20} className="mr-2" />
              <span>{filteredCourses.length} courses found</span>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                  <span className="text-sm font-bold text-gray-800">{course.price}</span>
                </div>
                {course.enrolled && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Enrolled
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-2 py-1 rounded">
                    {course.level}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{course.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">by {course.instructor}</span>
                  {course.enrolled ? (
                    <button className="px-4 py-2 bg-green-100 text-green-700 font-semibold rounded-lg cursor-default">
                      <BookOpen size={16} className="inline mr-1" />
                      Enrolled
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEnroll(course.id)}
                      className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Enroll Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredCourses.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:border-blue-300 hover:text-blue-600 transition-all duration-200">
              Load More Courses
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all courses.</p>
          </div>
        )}
      </div>
    </div>
  );
}