import React, { useState } from 'react';
import { 
  Scale, Star, MapPin, Building, Calendar, Award, Users, 
  MessageCircle, ThumbsUp, TrendingUp, CheckCircle, ExternalLink,
  Mail, Phone, Globe, Linkedin, Twitter, BookOpen, Clock,
  ArrowRight, Filter, Search, ChevronDown, Badge, Briefcase
} from 'lucide-react';

const ProfessionalProfilePage = () => {
  const [activeTab, setActiveTab] = useState('answers');
  const [filterOpen, setFilterOpen] = useState(false);

  const lawyer = {
    name: "Sarah Chen, Esq.",
    title: "Employment Law Specialist",
    firm: "Chen & Associates",
    location: "San Francisco, CA",
    barNumber: "CA-234567",
    barAdmission: "2018",
    education: [
      { school: "Stanford Law School", degree: "J.D.", year: "2018" },
      { school: "UC Berkeley", degree: "B.A. Political Science", year: "2015" }
    ],
    practiceAreas: [
      "Employment Law",
      "Wrongful Termination", 
      "Workplace Discrimination",
      "Wage & Hour Disputes",
      "Employment Contracts",
      "Executive Compensation"
    ],
    tier: "Expert",
    verified: true,
    rating: 4.9,
    totalReviews: 127,
    totalAnswers: 342,
    helpfulVotes: 2847,
    successRate: 94,
    responseTime: "< 2 hours",
    languages: ["English", "Mandarin", "Cantonese"],
    bio: `Sarah Chen is a distinguished employment law attorney with over 6 years of experience representing employees in complex workplace disputes. She specializes in wrongful termination, discrimination, and wage & hour cases throughout California.

Prior to founding Chen & Associates, Sarah worked at top-tier employment firms in Silicon Valley, where she developed expertise in tech industry employment matters. She has successfully recovered over $15 million for her clients in employment-related cases.

Sarah is frequently quoted in legal publications and has been recognized as a "Rising Star" by Super Lawyers for three consecutive years. She is passionate about protecting workers' rights and ensuring fair treatment in the workplace.`,
    contact: {
      email: "sarah@chenlaw.com",
      phone: "(415) 555-0123",
      website: "https://chenlaw.com"
    },
    social: {
      linkedin: "https://linkedin.com/in/sarahchenesq",
      twitter: "@SarahChenLaw"
    },
    firmInfo: {
      name: "Chen & Associates",
      founded: "2022",
      size: "12 attorneys",
      description: "Boutique employment law firm focused on employee rights and workplace justice."
    }
  };

  const recentAnswers = [
    {
      id: 1,
      question: "Can my employer fire me for discussing wages with coworkers?",
      category: "Employment Law",
      votes: 289,
      timeAgo: "4 hours ago",
      excerpt: "This is absolutely protected activity under both state and federal law. California Labor Code Section 232 explicitly prohibits employers from requiring employees to refrain from discussing wages...",
      isAcceptedAnswer: true
    },
    {
      id: 2,
      question: "Is it legal for my employer to monitor my personal emails on company computer?",
      category: "Privacy Rights",
      votes: 156,
      timeAgo: "1 day ago",
      excerpt: "California has strong privacy protections, but using a company computer complicates things. Generally, employers can monitor activity on company-owned devices...",
      isAcceptedAnswer: false
    },
    {
      id: 3,
      question: "Employer requiring 60+ hour weeks without overtime - California law?",
      category: "Wage & Hour",
      votes: 234,
      timeAgo: "2 days ago",
      excerpt: "This is a clear violation of California overtime laws. Non-exempt employees must receive overtime pay for hours worked over 8 in a day or 40 in a week...",
      isAcceptedAnswer: true
    },
    {
      id: 4,
      question: "Can I sue for wrongful termination if I was fired for poor performance?",
      category: "Wrongful Termination",
      votes: 178,
      timeAgo: "3 days ago",
      excerpt: "Poor performance can be a legitimate reason for termination, but timing and context matter. If the 'poor performance' claim is pretextual or followed protected activity...",
      isAcceptedAnswer: false
    }
  ];

  const achievements = [
    {
      title: "Super Lawyers Rising Star",
      year: "2023, 2024, 2025",
      description: "Recognized for excellence in employment law"
    },
    {
      title: "Avvo Clients' Choice Award",
      year: "2024",
      description: "Top-rated employment attorney in San Francisco"
    },
    {
      title: "CELA Member",
      year: "2019-Present",
      description: "California Employment Lawyers Association"
    }
  ];

  const stats = [
    { label: "Cases Won", value: "94%", icon: TrendingUp, color: "text-green-400" },
    { label: "Client Satisfaction", value: "4.9/5", icon: Star, color: "text-yellow-400" },
    { label: "Response Time", value: "< 2hrs", icon: Clock, color: "text-blue-400" },
    { label: "Total Answers", value: "342", icon: MessageCircle, color: "text-orange-400" }
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
                <a href="#" className="text-orange-500 font-medium">Find Lawyers</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Law Firms</a>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white">Find Lawyers</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-white">Employment Law</a>
          <span className="mx-2">•</span>
          <span className="text-gray-500">Sarah Chen</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Profile Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Profile Header */}
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex items-start space-x-6">
                {/* Profile Photo */}
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  SC
                </div>

                {/* Basic Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-bold">{lawyer.name}</h1>
                    <CheckCircle className="h-6 w-6 text-green-500" title="Verified Lawyer" />
                    <span className="bg-yellow-900 text-yellow-300 px-3 py-1 text-sm rounded-full">
                      {lawyer.tier}
                    </span>
                  </div>
                  
                  <p className="text-xl text-gray-300 mb-3">{lawyer.title}</p>
                  
                  <div className="flex items-center space-x-6 text-gray-400 mb-4">
                    <span className="flex items-center space-x-2">
                      <Building className="h-4 w-4" />
                      <span>{lawyer.firm}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{lawyer.location}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Admitted {lawyer.barAdmission}</span>
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${
                              i < Math.floor(lawyer.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-600'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-lg">{lawyer.rating}</span>
                      <span className="text-gray-400">({lawyer.totalReviews} reviews)</span>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex items-center space-x-4">
                    <button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-md transition-colors font-medium">
                      Contact Attorney
                    </button>
                    <button className="border border-gray-600 hover:border-gray-500 px-6 py-3 rounded-md transition-colors">
                      Ask Question
                    </button>
                    <button className="text-gray-400 hover:text-white p-3 rounded-md transition-colors">
                      <BookOpen className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
                    <IconComponent className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Tabs Navigation */}
            <div className="border-b border-gray-700">
              <nav className="flex space-x-8">
                {[
                  { id: 'answers', label: 'Answers', count: lawyer.totalAnswers },
                  { id: 'about', label: 'About', count: null },
                  { id: 'reviews', label: 'Reviews', count: lawyer.totalReviews },
                  { id: 'expertise', label: 'Expertise', count: null }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-orange-500 text-orange-500'
                        : 'border-transparent text-gray-400 hover:text-white hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                    {tab.count && (
                      <span className="ml-2 bg-gray-700 text-gray-300 px-2 py-1 text-xs rounded-full">
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              
              {/* Answers Tab */}
              {activeTab === 'answers' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Recent Answers</h2>
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                          type="text"
                          placeholder="Search answers..."
                          className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <button 
                        onClick={() => setFilterOpen(!filterOpen)}
                        className="flex items-center space-x-2 bg-gray-800 border border-gray-700 px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                      >
                        <Filter className="h-4 w-4" />
                        <span>Filter</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {recentAnswers.map((answer) => (
                      <div key={answer.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <span className="bg-blue-900 text-blue-300 px-2 py-1 text-xs rounded-full">
                              {answer.category}
                            </span>
                            {answer.isAcceptedAnswer && (
                              <span className="bg-green-900 text-green-300 px-2 py-1 text-xs rounded-full flex items-center space-x-1">
                                <CheckCircle className="h-3 w-3" />
                                <span>Accepted</span>
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-gray-400">{answer.timeAgo}</span>
                        </div>
                        
                        <h3 className="text-lg font-medium mb-3 hover:text-orange-500 cursor-pointer transition-colors">
                          {answer.question}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {answer.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span className="flex items-center space-x-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{answer.votes} helpful</span>
                            </span>
                          </div>
                          <button className="text-orange-500 hover:text-orange-400 text-sm font-medium flex items-center space-x-1">
                            <span>Read full answer</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* About Tab */}
              {activeTab === 'about' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-bold mb-4">About</h2>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                        {lawyer.bio}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Education</h3>
                    <div className="space-y-3">
                      {lawyer.education.map((edu, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                          <div>
                            <h4 className="font-medium">{edu.school}</h4>
                            <p className="text-gray-400">{edu.degree}</p>
                          </div>
                          <span className="text-gray-400">{edu.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Bar Admissions</h3>
                    <div className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span>California State Bar</span>
                        <span className="text-gray-400">#{lawyer.barNumber}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {lawyer.languages.map((language, index) => (
                        <span key={index} className="bg-gray-800 text-gray-300 px-3 py-2 rounded-full text-sm">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Achievements</h3>
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
                          <Award className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-medium">{achievement.title}</h4>
                            <p className="text-sm text-gray-400">{achievement.year}</p>
                            <p className="text-sm text-gray-300 mt-1">{achievement.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Client Reviews</h2>
                  <div className="text-center py-12 text-gray-400">
                    <Users className="h-12 w-12 mx-auto mb-4" />
                    <p>Client reviews will be displayed here.</p>
                    <p className="text-sm">Reviews are verified and anonymous.</p>
                  </div>
                </div>
              )}

              {/* Expertise Tab */}
              {activeTab === 'expertise' && (
                <div>
                  <h2 className="text-xl font-bold mb-6">Practice Areas</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {lawyer.practiceAreas.map((area, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Briefcase className="h-5 w-5 text-orange-500" />
                          <span className="font-medium">{area}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Contact Info */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <a href={`mailto:${lawyer.contact.email}`} className="text-orange-500 hover:text-orange-400 transition-colors">
                    {lawyer.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>{lawyer.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-gray-400" />
                  <a href={lawyer.contact.website} className="text-orange-500 hover:text-orange-400 transition-colors flex items-center space-x-1">
                    <span>Website</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Time</span>
                  <span className="text-green-400">{lawyer.responseTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Success Rate</span>
                  <span className="text-green-400">{lawyer.successRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Helpful Votes</span>
                  <span>{lawyer.helpfulVotes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Years Practicing</span>
                  <span>{new Date().getFullYear() - parseInt(lawyer.barAdmission)} years</span>
                </div>
              </div>
            </div>

            {/* Law Firm Info */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Law Firm</h3>
              <div className="space-y-3">
                <h4 className="font-medium">{lawyer.firmInfo.name}</h4>
                <p className="text-sm text-gray-400">{lawyer.firmInfo.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Founded</span>
                    <span>{lawyer.firmInfo.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Size</span>
                    <span>{lawyer.firmInfo.size}</span>
                  </div>
                </div>
                <button className="w-full mt-4 text-orange-500 hover:text-orange-400 text-sm font-medium flex items-center justify-center space-x-1">
                  <span>View Firm Profile</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Similar Lawyers */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Similar Lawyers</h3>
              <div className="space-y-4">
                {[
                  { name: "Michael Rodriguez", specialty: "Employment Law", rating: 4.8 },
                  { name: "Jennifer Kim", specialty: "Workplace Rights", rating: 4.7 },
                  { name: "David Park", specialty: "Labor Relations", rating: 4.9 }
                ].map((similarLawyer, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {similarLawyer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{similarLawyer.name}</h4>
                      <p className="text-xs text-gray-400">{similarLawyer.specialty}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span className="text-xs">{similarLawyer.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfilePage;