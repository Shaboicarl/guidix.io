import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Pause, SkipForward, Volume2, Maximize, User, BookOpen, Award, MessageCircle, BarChart3, Settings, Bell, Search, X, CheckCircle } from 'lucide-react';

export default function Demo() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const demoSteps = [
    {
      title: "Welcome to Your Dashboard",
      description: "Your personalized learning hub where you can track progress, access courses, and manage your educational journey.",
      highlight: "dashboard-overview"
    },
    {
      title: "Browse Course Catalog",
      description: "Explore thousands of courses across different categories. Filter by skill level, duration, and topic to find exactly what you need.",
      highlight: "course-catalog"
    },
    {
      title: "Interactive Learning Experience",
      description: "Engage with video lessons, quizzes, coding exercises, and hands-on projects designed to reinforce your learning.",
      highlight: "learning-interface"
    },
    {
      title: "Track Your Progress",
      description: "Monitor your learning journey with detailed analytics, completion rates, and skill assessments.",
      highlight: "progress-tracking"
    },
    {
      title: "Connect with Community",
      description: "Join discussions, ask questions, and collaborate with fellow learners and expert instructors.",
      highlight: "community-features"
    },
    {
      title: "Earn Certificates",
      description: "Complete courses and earn industry-recognized certificates to showcase your new skills and advance your career.",
      highlight: "certificates"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            if (currentStep < demoSteps.length - 1) {
              setCurrentStep(curr => curr + 1);
              return 0;
            } else {
              setIsPlaying(false);
              return 100;
            }
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, demoSteps.length]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setProgress(0);
    }
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    setProgress(0);
    setIsPlaying(false);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Experience <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Guidix</span> in Action
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a guided tour through our platform and see how easy it is to start your learning journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Demo Video Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Video Player Header */}
              <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-white text-sm font-medium">Guidix Platform Demo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Volume2 className="text-white" size={16} />
                  <Maximize className="text-white" size={16} />
                </div>
              </div>

              {/* Demo Interface */}
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 h-96 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute top-20 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
                  <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300 rounded-full opacity-10 animate-pulse delay-500"></div>
                </div>

                {/* Demo Content Based on Current Step */}
                <div className="relative z-10 p-8 h-full">
                  {currentStep === 0 && (
                    <div className="animate-bounce-in">
                      <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-800">Welcome back, Sarah!</h3>
                          <div className="flex items-center space-x-2">
                            <Bell className="text-gray-400" size={20} />
                            <User className="text-gray-400" size={20} />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-blue-100 rounded-lg p-4 text-center">
                            <BookOpen className="text-blue-600 mx-auto mb-2" size={24} />
                            <div className="text-2xl font-bold text-blue-600">12</div>
                            <div className="text-sm text-gray-600">Courses</div>
                          </div>
                          <div className="bg-purple-100 rounded-lg p-4 text-center">
                            <Award className="text-purple-600 mx-auto mb-2" size={24} />
                            <div className="text-2xl font-bold text-purple-600">8</div>
                            <div className="text-sm text-gray-600">Certificates</div>
                          </div>
                          <div className="bg-green-100 rounded-lg p-4 text-center">
                            <BarChart3 className="text-green-600 mx-auto mb-2" size={24} />
                            <div className="text-2xl font-bold text-green-600">85%</div>
                            <div className="text-sm text-gray-600">Progress</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="animate-bounce-in">
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-800">Course Catalog</h3>
                          <Search className="text-gray-400" size={20} />
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                            <div className="w-12 h-12 bg-blue-400 rounded-lg mr-3"></div>
                            <div>
                              <div className="font-semibold text-gray-800">Web Development Bootcamp</div>
                              <div className="text-sm text-gray-600">40 hours • Beginner</div>
                            </div>
                          </div>
                          <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                            <div className="w-12 h-12 bg-purple-400 rounded-lg mr-3"></div>
                            <div>
                              <div className="font-semibold text-gray-800">Data Science with Python</div>
                              <div className="text-sm text-gray-600">35 hours • Intermediate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="animate-bounce-in">
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-800">Interactive Learning</h3>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-600">Live</span>
                          </div>
                        </div>
                        <div className="bg-gray-900 rounded-lg p-4 mb-4">
                          <div className="text-green-400 text-sm font-mono">
                            {'> function calculateSum(a, b) {'}
                            <br />
                            {'    return a + b;'}
                            <br />
                            {'}'}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Lesson 3 of 12</span>
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-400 h-2 rounded-full w-1/4"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="animate-bounce-in">
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Your Progress</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm text-gray-600">JavaScript Fundamentals</span>
                              <span className="text-sm font-semibold text-blue-600">90%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-400 h-2 rounded-full w-[90%]"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm text-gray-600">React Development</span>
                              <span className="text-sm font-semibold text-purple-600">65%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-purple-400 h-2 rounded-full w-[65%]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="animate-bounce-in">
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Community Discussion</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                            <div>
                              <div className="font-semibold text-gray-800 text-sm">Alex Chen</div>
                              <div className="text-sm text-gray-600">Need help with React hooks...</div>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
                            <div>
                              <div className="font-semibold text-gray-800 text-sm">Sarah Johnson</div>
                              <div className="text-sm text-gray-600">Just completed the bootcamp! 🎉</div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <MessageCircle className="text-blue-400 inline mr-2" size={16} />
                          <span className="text-sm text-gray-600">Join the conversation</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div className="animate-bounce-in">
                      <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                        <Award className="text-yellow-500 mx-auto mb-4" size={48} />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Certificate Earned!</h3>
                        <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white p-4 rounded-lg">
                          <div className="text-lg font-bold">Web Development Bootcamp</div>
                          <div className="text-sm opacity-90">Completed with Excellence</div>
                        </div>
                        <button className="mt-4 px-4 py-2 bg-blue-400 text-white rounded-lg text-sm hover:bg-blue-500 transition-colors">
                          Download Certificate
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Video Controls */}
              <div className="bg-gray-900 px-6 py-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={handlePlayPause}
                      className="flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
                    >
                      {isPlaying ? <Pause className="text-white" size={20} /> : <Play className="text-white ml-1" size={20} />}
                    </button>
                    <button
                      onClick={handleNext}
                      className="flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                    >
                      <SkipForward className="text-white" size={20} />
                    </button>
                  </div>
                  <div className="text-white text-sm">
                    Step {currentStep + 1} of {demoSteps.length}
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-400 h-2 rounded-full transition-all duration-100"
                    style={{ width: `${((currentStep * 100) + progress) / demoSteps.length}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Steps Sidebar */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Demo Steps</h3>
            {demoSteps.map((step, index) => (
              <div
                key={index}
                onClick={() => handleStepClick(index)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                  currentStep === index
                    ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white transform scale-105'
                    : 'bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    currentStep === index
                      ? 'bg-white text-blue-500'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${currentStep === index ? 'text-white' : 'text-gray-800'}`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm ${currentStep === index ? 'text-blue-100' : 'text-gray-600'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already transforming their careers with Guidix.
          </p>
          <button 
            onClick={() => navigate('/campus-select')}
            className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold rounded-2xl text-lg hover:from-blue-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-200"
          >
            Get Started Free
          </button>
          <button 
            onClick={() => setShowUpgradeModal(true)}
            className="px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl text-lg border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200"
          >
            View Plans
          </button>
        </div>
      </div>
      
      {/* Upgrade Modal */}
      {showUpgradeModal && <UpgradeModal />}
    </div>
  );
}