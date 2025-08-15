import React from 'react';
import { Users, MessageCircle, Heart, Share2, Calendar, Trophy, Star, BookOpen, X } from 'lucide-react';

export default function Community() {
  const communityStats = [
    { icon: Users, label: "Active Members", value: "50K+" },
    { icon: MessageCircle, label: "Discussions", value: "25K+" },
    { icon: Heart, label: "Helpful Answers", value: "100K+" },
    { icon: Trophy, label: "Success Stories", value: "5K+" }
  ];

  const recentPosts = [
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      title: "Just landed my first developer job!",
      content: "Thanks to the Web Development Bootcamp, I finally got my dream job at a tech startup. The community support was incredible throughout my journey!",
      likes: 124,
      replies: 18,
      time: "2 hours ago",
      category: "Success Story"
    },
    {
      id: 2,
      author: "Mike Johnson",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
      title: "Need help with React hooks",
      content: "I'm struggling with useEffect in my project. Can someone explain when to use the dependency array?",
      likes: 45,
      replies: 12,
      time: "4 hours ago",
      category: "Help Needed"
    },
    {
      id: 3,
      author: "Emma Rodriguez",
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100",
      title: "Free resource: Marketing templates",
      content: "I've created a collection of marketing templates that helped me in my courses. Feel free to download and use them!",
      likes: 89,
      replies: 25,
      time: "6 hours ago",
      category: "Resource Share"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Web Development Q&A Session",
      date: "Jan 15, 2025",
      time: "2:00 PM EST",
      attendees: 245,
      host: "Sarah Johnson"
    },
    {
      id: 2,
      title: "Data Science Career Panel",
      date: "Jan 18, 2025",
      time: "7:00 PM EST",
      attendees: 189,
      host: "Dr. Michael Chen"
    },
    {
      id: 3,
      title: "UX Design Workshop",
      date: "Jan 22, 2025",
      time: "3:00 PM EST",
      attendees: 156,
      host: "Alex Thompson"
    }
  ];

  const topContributors = [
    {
      name: "David Park",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100",
      points: 2450,
      badge: "Expert Helper",
      specialty: "JavaScript"
    },
    {
      name: "Lisa Wang",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
      points: 2180,
      badge: "Community Leader",
      specialty: "Python"
    },
    {
      name: "James Wilson",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      points: 1950,
      badge: "Mentor",
      specialty: "React Native"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Community</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with fellow learners, share knowledge, and grow together in our supportive community.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Recent Discussions</h2>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-600 transition-all duration-200">
                  New Post
                </button>
              </div>

              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-all duration-200"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-gray-800">{post.author}</h3>
                            <p className="text-sm text-gray-500">{post.time}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            post.category === 'Success Story' ? 'bg-green-100 text-green-700' :
                            post.category === 'Help Needed' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {post.category}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">{post.title}</h4>
                        <p className="text-gray-600 mb-4">{post.content}</p>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                            <Heart size={16} />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                            <MessageCircle size={16} />
                            <span>{post.replies}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-green-500 transition-colors">
                            <Share2 size={16} />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Calendar className="mr-2 text-purple-500" size={24} />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-all duration-200"
                  >
                    <h4 className="font-semibold text-gray-800 mb-2">{event.title}</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>{event.date} at {event.time}</p>
                      <p>Host: {event.host}</p>
                      <div className="flex items-center text-purple-600">
                        <Users size={14} className="mr-1" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                    <button className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-200">
                      Join Event
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Trophy className="mr-2 text-yellow-500" size={24} />
                Top Contributors
              </h3>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                  >
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{contributor.name}</h4>
                      <p className="text-sm text-purple-600">{contributor.badge}</p>
                      <p className="text-xs text-gray-500">{contributor.specialty}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-yellow-500">
                        <Star size={14} className="mr-1" />
                        <span className="text-sm font-semibold">{contributor.points}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Join the Conversation?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with thousands of learners, share your knowledge, and get help when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold rounded-2xl text-lg hover:from-blue-500 hover:to-purple-600 transform hover:scale-105 transition-all duration-200">
              Join Community
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl text-lg border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200">
              Browse Discussions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}