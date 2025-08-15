import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, ChevronDown, ChevronRight, Download, BookOpen, CheckCircle, Clock, FileText, Save, X } from 'lucide-react';

export default function StudentCoursePlayer() {
  const { slug } = useParams();
  const [selectedLesson, setSelectedLesson] = useState('1-1');
  const [expandedModules, setExpandedModules] = useState(['1']);
  const [notes, setNotes] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);

  const course = {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    progress: 65,
    modules: [
      {
        id: '1',
        title: 'HTML & CSS Fundamentals',
        lessons: [
          { id: '1-1', title: 'Introduction to HTML', duration: '15:30', completed: true },
          { id: '1-2', title: 'HTML Structure & Elements', duration: '22:45', completed: true },
          { id: '1-3', title: 'CSS Basics & Styling', duration: '18:20', completed: true },
          { id: '1-4', title: 'CSS Flexbox & Grid', duration: '25:10', completed: false }
        ]
      },
      {
        id: '2',
        title: 'JavaScript Fundamentals',
        lessons: [
          { id: '2-1', title: 'Variables & Data Types', duration: '20:15', completed: false },
          { id: '2-2', title: 'Functions & Scope', duration: '28:30', completed: false },
          { id: '2-3', title: 'DOM Manipulation', duration: '32:45', completed: false }
        ]
      },
      {
        id: '3',
        title: 'React Development',
        lessons: [
          { id: '3-1', title: 'Introduction to React', duration: '24:20', completed: false },
          { id: '3-2', title: 'Components & Props', duration: '30:15', completed: false },
          { id: '3-3', title: 'State & Hooks', duration: '35:40', completed: false }
        ]
      }
    ]
  };

  const currentLesson = course.modules
    .flatMap(module => module.lessons)
    .find(lesson => lesson.id === selectedLesson);

  const resources = [
    { id: 1, name: 'HTML Cheat Sheet.pdf', type: 'PDF', size: '2.3 MB' },
    { id: 2, name: 'CSS Reference Guide.pdf', type: 'PDF', size: '1.8 MB' },
    { id: 3, name: 'Project Files.zip', type: 'ZIP', size: '5.2 MB' },
    { id: 4, name: 'Code Examples.html', type: 'HTML', size: '0.5 MB' }
  ];

  const quizQuestions = [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Home Tool Markup Language",
        "Hyperlink and Text Markup Language"
      ],
      correct: 0
    },
    {
      id: 2,
      question: "Which CSS property is used to change the text color?",
      options: ["font-color", "text-color", "color", "foreground-color"],
      correct: 2
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: number}>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleQuizAnswer = (questionId: number, answerIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
  };

  const getQuizScore = () => {
    let correct = 0;
    quizQuestions.forEach(question => {
      if (quizAnswers[question.id] === question.correct) {
        correct++;
      }
    });
    return Math.round((correct / quizQuestions.length) * 100);
  };

  const saveNotes = () => {
    // In a real app, this would save to the backend
    console.log('Saving notes:', notes);
    alert('Notes saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Course Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h1>
              <p className="text-gray-600">by {course.instructor}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-1">Course Progress</div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm font-semibold text-gray-900">{course.progress}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Video Player */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play size={64} className="mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">{currentLesson?.title}</h3>
                  <p className="text-gray-300">Video Player Placeholder</p>
                  <p className="text-sm text-gray-400 mt-2">Duration: {currentLesson?.duration}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{currentLesson?.title}</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-4">
                    In this lesson, we'll cover the fundamentals of HTML and how to structure web pages. 
                    You'll learn about semantic elements, proper document structure, and best practices 
                    for writing clean, accessible HTML code.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What you'll learn:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>HTML document structure and DOCTYPE declaration</li>
                    <li>Common HTML elements and their purposes</li>
                    <li>Semantic HTML and accessibility considerations</li>
                    <li>Best practices for clean, maintainable code</li>
                  </ul>
                </div>

                {/* Quiz Section */}
                {selectedLesson === '1-3' && (
                  <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Lesson Quiz</h3>
                      <button
                        onClick={() => setShowQuiz(!showQuiz)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        {showQuiz ? 'Hide Quiz' : 'Take Quiz'}
                      </button>
                    </div>

                    {showQuiz && (
                      <div className="space-y-6">
                        {quizQuestions.map((question, index) => (
                          <div key={question.id} className="bg-white p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-3">
                              {index + 1}. {question.question}
                            </h4>
                            <div className="space-y-2">
                              {question.options.map((option, optionIndex) => (
                                <label key={optionIndex} className="flex items-center space-x-2 cursor-pointer">
                                  <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={optionIndex}
                                    onChange={() => handleQuizAnswer(question.id, optionIndex)}
                                    disabled={quizSubmitted}
                                    className="text-blue-600"
                                  />
                                  <span className={`${
                                    quizSubmitted 
                                      ? optionIndex === question.correct 
                                        ? 'text-green-600 font-semibold' 
                                        : quizAnswers[question.id] === optionIndex 
                                          ? 'text-red-600' 
                                          : 'text-gray-600'
                                      : 'text-gray-700'
                                  }`}>
                                    {option}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}

                        {!quizSubmitted ? (
                          <button
                            onClick={submitQuiz}
                            disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                          >
                            Submit Quiz
                          </button>
                        ) : (
                          <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-2">Quiz Results</h4>
                            <p className="text-lg">
                              Score: <span className="font-bold text-blue-600">{getQuizScore()}%</span>
                            </p>
                            {getQuizScore() >= 70 ? (
                              <p className="text-green-600 mt-2">✅ Great job! You can proceed to the next lesson.</p>
                            ) : (
                              <div className="mt-2">
                                <p className="text-red-600">❌ You need 70% to pass. Please review the material and retake the quiz.</p>
                                <button
                                  onClick={() => {
                                    setQuizSubmitted(false);
                                    setQuizAnswers({});
                                  }}
                                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                  Retake Quiz
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    ← Previous Lesson
                  </button>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Next Lesson →
                  </button>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Lesson Notes</h3>
                <button
                  onClick={saveNotes}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Save size={16} className="mr-2" />
                  Save Notes
                </button>
              </div>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Take notes about this lesson..."
                className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent resize-none"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Syllabus */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Syllabus</h3>
              <div className="space-y-2">
                {course.modules.map((module) => (
                  <div key={module.id}>
                    <button
                      onClick={() => toggleModule(module.id)}
                      className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span className="font-medium text-gray-900">{module.title}</span>
                      {expandedModules.includes(module.id) ? (
                        <ChevronDown size={16} className="text-gray-400" />
                      ) : (
                        <ChevronRight size={16} className="text-gray-400" />
                      )}
                    </button>
                    
                    {expandedModules.includes(module.id) && (
                      <div className="ml-4 space-y-1">
                        {module.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => setSelectedLesson(lesson.id)}
                            className={`w-full flex items-center justify-between p-2 text-left rounded-lg transition-colors ${
                              selectedLesson === lesson.id
                                ? 'bg-blue-50 text-blue-700'
                                : 'hover:bg-gray-50 text-gray-700'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              {lesson.completed ? (
                                <CheckCircle size={16} className="text-green-500" />
                              ) : (
                                <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                              )}
                              <span className="text-sm">{lesson.title}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-xs text-gray-500">
                              <Clock size={12} />
                              <span>{lesson.duration}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Downloadable Resources */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
              <div className="space-y-3">
                {resources.map((resource) => (
                  <div key={resource.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                    <div className="flex items-center space-x-3">
                      <FileText size={20} className="text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{resource.name}</p>
                        <p className="text-xs text-gray-500">{resource.type} • {resource.size}</p>
                      </div>
                    </div>
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Download size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}