import React from 'react';
import { Search, Scale, Users, Zap, TrendingUp, MapPin, Star, ChevronRight, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const featuredQuestions = [
    {
      id: 1,
      title: "Can my landlord evict me for having a service animal?",
      category: "tenant-rights",
      subcategory: "disability-law",
      location: "California",
      votes: 247,
      answers: 12,
      aiConfidence: 94,
      timeAgo: "3 hours ago",
      isHot: true
    },
    {
      id: 2,
      title: "What happens if I'm injured in an Uber accident?",
      category: "personal-injury",
      subcategory: "rideshare-accidents",
      location: "New York",
      votes: 189,
      answers: 8,
      aiConfidence: 91,
      timeAgo: "5 hours ago",
      isHot: true
    },
    {
      id: 3,
      title: "Can my employer fire me for discussing wages with coworkers?",
      category: "employment-law",
      subcategory: "wage-discussion",
      location: "Texas",
      votes: 156,
      answers: 15,
      aiConfidence: 88,
      timeAgo: "8 hours ago",
      isHot: false
    }
  ];

  const topCategories = [
    { name: "Employment Law", questions: 1247, icon: "💼" },
    { name: "Personal Injury", questions: 892, icon: "🏥" },
    { name: "Family Law", questions: 743, icon: "👨‍👩‍👧‍👦" },
    { name: "Criminal Defense", questions: 621, icon: "⚖️" },
    { name: "Real Estate", questions: 534, icon: "🏠" },
    { name: "Immigration", questions: 487, icon: "🌍" }
  ];

  const topLawyers = [
    {
      name: "Sarah Chen, Esq.",
      specialty: "Employment Law",
      location: "San Francisco, CA",
      rating: 4.9,
      answers: 342,
      tier: "Expert"
    },
    {
      name: "Michael Rodriguez, Esq.",
      specialty: "Personal Injury",
      location: "Los Angeles, CA", 
      rating: 4.8,
      answers: 289,
      tier: "Specialist"
    },
    {
      name: "Jennifer Kim, Esq.",
      specialty: "Family Law",
      location: "New York, NY",
      rating: 4.9,
      answers: 267,
      tier: "Expert"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Scale className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold">VERDICT</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Legal Q&A</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Find Lawyers</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Law Firms</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 px-4 py-2 rounded-md transition-colors">
                Sign In
              </button>
              <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-md transition-colors">
                Ask Question
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Get Legal Answers from
            <span className="text-orange-500"> Verified Lawyers</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            AI-powered legal Q&A platform connecting you with experienced attorneys. 
            Get professional insights on your legal questions in minutes.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Ask your legal question..."
              className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
            <button className="absolute right-2 top-2 bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-md transition-colors">
              Ask
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Zap className="h-4 w-4 text-orange-500" />
              <span>AI-Classified in 30s</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4 text-orange-500" />
              <span>2,847 Verified Lawyers</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="h-4 w-4 text-orange-500" />
              <span>98% Accuracy Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Scale className="h-5 w-5 text-orange-500 mr-2" />
                Popular Categories
              </h3>
              <div className="space-y-3">
                {topCategories.map((category, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{category.icon}</span>
                      <span className="font-medium group-hover:text-orange-500 transition-colors">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">{category.questions}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Star className="h-5 w-5 text-orange-500 mr-2" />
                Top Lawyers
              </h3>
              <div className="space-y-4">
                {topLawyers.map((lawyer, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      {lawyer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-sm truncate">{lawyer.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          lawyer.tier === 'Expert' 
                            ? 'bg-yellow-900 text-yellow-300' 
                            : 'bg-blue-900 text-blue-300'
                        }`}>
                          {lawyer.tier}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{lawyer.specialty}</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <MapPin className="h-3 w-3" />
                        <span>{lawyer.location}</span>
                        <span>•</span>
                        <span>{lawyer.answers} answers</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Featured Questions */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Trending Legal Questions</h2>
                <select className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm">
                  <option>Hot</option>
                  <option>New</option>
                  <option>Top</option>
                </select>
              </div>
              
              <div className="space-y-4">
                {featuredQuestions.map((question) => (
                  <div
                    key={question.id}
                    className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors border-l-4 border-orange-500"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Voting */}
                      <div className="flex flex-col items-center space-y-1 text-sm">
                        <button className="p-1 hover:bg-gray-700 rounded">
                          <ChevronRight className="h-4 w-4 rotate-270" />
                        </button>
                        <span className="font-medium text-orange-500">{question.votes}</span>
                        <button className="p-1 hover:bg-gray-700 rounded">
                          <ChevronRight className="h-4 w-4 rotate-90" />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {question.isHot && (
                            <span className="bg-red-900 text-red-300 px-2 py-1 text-xs rounded-full">
                              🔥 Hot
                            </span>
                          )}
                          <span className="bg-blue-900 text-blue-300 px-2 py-1 text-xs rounded-full">
                            {question.category.replace('-', ' ')}
                          </span>
                          <span className="text-gray-400 text-xs">•</span>
                          <span className="text-gray-400 text-xs flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {question.location}
                          </span>
                          <span className="text-gray-400 text-xs">•</span>
                          <span className="text-gray-400 text-xs">{question.timeAgo}</span>
                        </div>
                        
                        <h3 className="text-lg font-medium mb-3 hover:text-orange-500 cursor-pointer transition-colors">
                          {question.title}
                        </h3>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{question.answers} answers</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Zap className="h-4 w-4 text-orange-500" />
                              <span>{question.aiConfidence}% AI confidence</span>
                            </span>
                          </div>
                          <button className="text-orange-500 hover:text-orange-400 text-sm font-medium flex items-center space-x-1">
                            <span>View answers</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-6 w-6 text-orange-500" />
                <span className="text-lg font-bold">VERDICT</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered legal Q&A platform connecting you with verified attorneys.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal Areas</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Employment Law</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Personal Injury</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Family Law</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Criminal Defense</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Lawyers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Join as Expert</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Verification Process</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lawyer Directory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Law Firm Profiles</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 VERDICT.COM. All rights reserved. Not a law firm - for informational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;