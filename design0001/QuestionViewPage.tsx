import React, { useState } from 'react';
import { 
  Scale, ArrowUp, ArrowDown, MessageCircle, Share, Bookmark, 
  MapPin, Clock, Zap, Users, Star, CheckCircle, AlertTriangle,
  ThumbsUp, ThumbsDown, Flag, MoreHorizontal, Award, Building
} from 'lucide-react';

const QuestionViewPage = () => {
  const [voteStatus, setVoteStatus] = useState(null); // 'up', 'down', or null
  const [bookmarked, setBookmarked] = useState(false);
  
  const question = {
    id: "employment-wrongful-termination-california-123",
    title: "Can my employer fire me for discussing wages with coworkers?",
    body: `I work at a tech company in California and recently discussed my salary with a colleague during lunch. My manager found out and called me into a meeting saying that discussing compensation violates company policy and that I could face termination if it happens again.

I thought there were laws protecting this kind of discussion, but my manager insists that California is an at-will employment state and they can fire me for any reason. They've now put me on a "performance improvement plan" which feels like retaliation.

Questions:
1. Is it legal for my employer to prohibit salary discussions?
2. Can they actually fire me for this in California?
3. What should I do if I believe this is retaliation?

Any advice would be greatly appreciated. I'm worried about losing my job but also want to know my rights.`,
    category: "employment-law",
    subcategory: "wage-discussion", 
    keywords: ["wrongful termination", "wage discussion", "california labor law", "retaliation"],
    location: "San Francisco, CA",
    votes: 347,
    views: 12451,
    answers: 8,
    timeAgo: "6 hours ago",
    author: "techworker_2025",
    authorRep: 156,
    aiClassification: {
      confidence: 94,
      primaryArea: "Employment Law",
      complexity: "Moderate",
      urgency: "Medium"
    },
    aiVerdict: {
      consensus: "Strong Protection Under Law",
      confidence: 91,
      summary: "California Labor Code Section 232 and federal NLRA provide strong protections for wage discussions among employees."
    }
  };

  const answers = [
    {
      id: 1,
      lawyer: {
        name: "Sarah Chen, Esq.",
        title: "Employment Law Specialist",
        location: "San Francisco, CA",
        firm: "Chen & Associates",
        barNumber: "CA-234567",
        rating: 4.9,
        totalAnswers: 342,
        tier: "Expert",
        verified: true
      },
      content: `**This is absolutely protected activity under both state and federal law.**

California Labor Code Section 232 explicitly prohibits employers from:
- Requiring employees to refrain from discussing wages
- Disciplining employees for wage discussions  
- Creating policies that discourage salary conversations

Additionally, the National Labor Relations Act (NLRA) protects "concerted activity" which includes discussing working conditions and compensation.

**Your employer's actions appear to constitute retaliation, which is illegal.**

**Immediate steps you should take:**
1. **Document everything** - Save the meeting notes, PIP documents, any emails
2. **File a complaint** with the California Department of Fair Employment and Housing (DFEH)
3. **Consider filing** with the National Labor Relations Board (NLRB)

The fact that they put you on a PIP immediately after the wage discussion creates a strong timeline for retaliation. California's whistleblower protection laws also apply here.

**Important:** At-will employment does NOT mean they can fire you for illegal reasons. Retaliation for protected activity is explicitly prohibited.

I'd recommend consulting with an employment attorney immediately. Many offer free consultations for potential retaliation cases.`,
      votes: 289,
      timeAgo: "4 hours ago",
      helpfulCount: 45,
      isProfessionalOpinion: true,
      consensus: "majority"
    },
    {
      id: 2,
      lawyer: {
        name: "Michael Rodriguez, Esq.",
        title: "Labor & Employment Attorney",
        location: "Los Angeles, CA", 
        firm: "Rodriguez Employment Law",
        barNumber: "CA-198765",
        rating: 4.8,
        totalAnswers: 289,
        tier: "Specialist",
        verified: true
      },
      content: `I agree with Attorney Chen's analysis - this is clearly protected activity under multiple statutes.

**Additional considerations specific to tech workers in California:**

California's SB-973 (Pay Data Reporting Law) actually **encourages** pay transparency. The state is actively moving toward more wage transparency, not less.

**Red flags in your situation:**
- Immediate PIP after protected activity (classic retaliation pattern)
- Manager incorrectly citing at-will employment as justification
- Policy that directly contradicts Labor Code Section 232

**Documentation to preserve:**
- The exact company policy language (if written)
- Names of witnesses to your salary discussion
- Timeline of events (discussion → meeting → PIP)
- Any performance reviews prior to this incident

**Timeline for action:**
- DFEH complaint: Must file within 1 year
- NLRB complaint: Must file within 6 months
- Private lawsuit: Typically 2-3 years

The tech industry has seen numerous successful retaliation cases. Companies often settle quickly when they realize they've violated clear statutory protections.

**Pro tip:** California's Private Attorneys General Act (PAGA) allows you to sue on behalf of other employees who may have faced similar retaliation. This can significantly increase leverage.`,
      votes: 156,
      timeAgo: "3 hours ago", 
      helpfulCount: 23,
      isProfessionalOpinion: true,
      consensus: "majority"
    },
    {
      id: 3,
      lawyer: {
        name: "Jennifer Kim, Esq.",
        title: "Employment Defense Attorney",
        location: "San Jose, CA",
        firm: "Kim Employment Solutions", 
        barNumber: "CA-345678",
        rating: 4.7,
        totalAnswers: 167,
        tier: "Specialist",
        verified: true
      },
      content: `While I agree that wage discussions are generally protected, **I'd counsel some caution here.**

**The employer's perspective to consider:**
- Was this discussion during work hours using company time?
- Did it involve confidential information beyond just wages?
- Is there a broader pattern of workplace disruption?

**Why this matters:**
Even protected activity can have limits. If the discussion involved truly confidential information (like executive compensation strategies or competitive salary data), there might be legitimate business reasons for concern.

**However,** based on your description, it sounds like a straightforward protected conversation between peers about your own compensation.

**The PIP timing is still very problematic** regardless of other factors.

**Alternative approach to consider:**
Before filing formal complaints, you might try addressing this through HR with a clear reference to Labor Code Section 232. Sometimes companies back down when they realize their legal exposure.

**Document the HR conversation** if you choose this route - their response will be valuable evidence if you need to escalate.

That said, I wouldn't wait long. The 6-month NLRB deadline comes quickly, and evidence gets stale.`,
      votes: 98,
      timeAgo: "2 hours ago",
      helpfulCount: 12,
      isProfessionalOpinion: true,
      consensus: "minority"
    }
  ];

  const relatedQuestions = [
    {
      title: "Employer threatened termination for union organizing - is this legal?",
      votes: 234,
      answers: 6,
      timeAgo: "1 day ago"
    },
    {
      title: "Can I be fired for filing a workers compensation claim in California?",
      votes: 189,
      answers: 4,
      timeAgo: "2 days ago"
    },
    {
      title: "What constitutes wrongful termination vs at-will employment?",
      votes: 167,
      answers: 9,
      timeAgo: "3 days ago"
    }
  ];

  const handleVote = (direction) => {
    setVoteStatus(voteStatus === direction ? null : direction);
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Legal Q&A</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-white">Employment Law</a>
              <span className="mx-2">•</span>
              <span className="text-gray-500">Wage Discussion Rights</span>
            </nav>

            {/* Question Header */}
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <div className="flex items-start space-x-4">
                
                {/* Voting */}
                <div className="flex flex-col items-center space-y-2">
                  <button 
                    onClick={() => handleVote('up')}
                    className={`p-2 rounded-full transition-colors ${
                      voteStatus === 'up' 
                        ? 'bg-orange-500 text-white' 
                        : 'hover:bg-gray-700 text-gray-400'
                    }`}
                  >
                    <ArrowUp className="h-5 w-5" />
                  </button>
                  <span className={`font-bold text-lg ${
                    voteStatus === 'up' ? 'text-orange-500' : 
                    voteStatus === 'down' ? 'text-blue-500' : 'text-gray-300'
                  }`}>
                    {question.votes}
                  </span>
                  <button 
                    onClick={() => handleVote('down')}
                    className={`p-2 rounded-full transition-colors ${
                      voteStatus === 'down' 
                        ? 'bg-blue-500 text-white' 
                        : 'hover:bg-gray-700 text-gray-400'
                    }`}
                  >
                    <ArrowDown className="h-5 w-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1">
                  
                  {/* Tags and Meta */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-blue-900 text-blue-300 px-2 py-1 text-xs rounded-full">
                      Employment Law
                    </span>
                    <span className="bg-purple-900 text-purple-300 px-2 py-1 text-xs rounded-full">
                      Wage Discussion
                    </span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-400 text-xs flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {question.location}
                    </span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-400 text-xs flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {question.timeAgo}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl font-bold mb-4">{question.title}</h1>

                  {/* AI Classification */}
                  <div className="bg-gray-700 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-orange-500" />
                        <span className="font-medium text-sm">AI Classification</span>
                      </div>
                      <span className="text-xs text-gray-400">{question.aiClassification.confidence}% confidence</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Primary Area:</span>
                        <div className="text-orange-400 font-medium">{question.aiClassification.primaryArea}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Complexity:</span>
                        <div className="text-yellow-400 font-medium">{question.aiClassification.complexity}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Urgency:</span>
                        <div className="text-green-400 font-medium">{question.aiClassification.urgency}</div>
                      </div>
                    </div>
                  </div>

                  {/* Question Body */}
                  <div className="prose prose-invert max-w-none mb-6">
                    <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                      {question.body}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{question.answers} answers</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                      <Share className="h-4 w-4" />
                      <span className="text-sm">Share</span>
                    </button>
                    <button 
                      onClick={() => setBookmarked(!bookmarked)}
                      className={`flex items-center space-x-2 transition-colors ${
                        bookmarked ? 'text-orange-500' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-current' : ''}`} />
                      <span className="text-sm">Save</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                      <Flag className="h-4 w-4" />
                      <span className="text-sm">Report</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Verdict */}
            <div className="bg-gradient-to-r from-orange-900/50 to-yellow-900/50 border border-orange-800 rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Zap className="h-5 w-5 text-orange-500" />
                <span className="font-semibold">AI Professional Consensus</span>
                <span className="text-xs bg-orange-900 text-orange-300 px-2 py-1 rounded-full">
                  {question.aiVerdict.confidence}% confidence
                </span>
              </div>
              <div className="text-lg font-medium text-orange-400 mb-2">
                {question.aiVerdict.consensus}
              </div>
              <p className="text-gray-300">
                {question.aiVerdict.summary}
              </p>
            </div>

            {/* Answers Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center space-x-2">
                  <Users className="h-5 w-5 text-orange-500" />
                  <span>{question.answers} Professional Opinions</span>
                </h2>
                <select className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm">
                  <option>Best</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div>

              {/* Answers */}
              <div className="space-y-6">
                {answers.map((answer) => (
                  <div key={answer.id} className="bg-gray-800 rounded-lg p-6">
                    
                    {/* Lawyer Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                          {answer.lawyer.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{answer.lawyer.name}</h3>
                            <CheckCircle className="h-4 w-4 text-green-500" title="Verified Lawyer" />
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              answer.lawyer.tier === 'Expert' 
                                ? 'bg-yellow-900 text-yellow-300' 
                                : 'bg-blue-900 text-blue-300'
                            }`}>
                              {answer.lawyer.tier}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400">{answer.lawyer.title}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-400">
                            <span className="flex items-center space-x-1">
                              <Building className="h-3 w-3" />
                              <span>{answer.lawyer.firm}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{answer.lawyer.location}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Star className="h-3 w-3 text-yellow-500" />
                              <span>{answer.lawyer.rating}</span>
                            </span>
                            <span>{answer.lawyer.totalAnswers} answers</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          answer.consensus === 'majority' 
                            ? 'bg-green-900 text-green-300' 
                            : 'bg-orange-900 text-orange-300'
                        }`}>
                          {answer.consensus === 'majority' ? 'Majority Opinion' : 'Alternative View'}
                        </span>
                        <button className="p-1 hover:bg-gray-700 rounded">
                          <MoreHorizontal className="h-4 w-4 text-gray-400" />
                        </button>
                      </div>
                    </div>

                    {/* Answer Content */}
                    <div className="prose prose-invert max-w-none mb-4">
                      <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                        {answer.content}
                      </div>
                    </div>

                    {/* Answer Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <button className="flex items-center space-x-1 p-2 hover:bg-gray-700 rounded transition-colors">
                            <ThumbsUp className="h-4 w-4" />
                            <span className="text-sm">{answer.votes}</span>
                          </button>
                          <button className="flex items-center space-x-1 p-2 hover:bg-gray-700 rounded transition-colors">
                            <ThumbsDown className="h-4 w-4" />
                          </button>
                        </div>
                        <span className="text-xs text-gray-400">{answer.helpfulCount} found helpful</span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-400">{answer.timeAgo}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="text-sm text-orange-500 hover:text-orange-400 transition-colors">
                          Reply
                        </button>
                        <button className="text-sm text-gray-400 hover:text-white transition-colors">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Question Stats */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Question Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Asked</span>
                  <span>{question.timeAgo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Viewed</span>
                  <span>{question.views.toLocaleString()} times</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Active</span>
                  <span>2 hours ago</span>
                </div>
              </div>
            </div>

            {/* Related Questions */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Related Questions</h3>
              <div className="space-y-4">
                {relatedQuestions.map((q, index) => (
                  <div key={index}>
                    <a href="#" className="text-sm hover:text-orange-500 transition-colors line-clamp-2">
                      {q.title}
                    </a>
                    <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                      <span>{q.votes} votes</span>
                      <span>•</span>
                      <span>{q.answers} answers</span>
                      <span>•</span>
                      <span>{q.timeAgo}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hot Questions */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">🔥 Hot Questions</h3>
              <div className="space-y-3">
                <a href="#" className="block text-sm hover:text-orange-500 transition-colors">
                  Can landlord enter without notice for "emergency"?
                </a>
                <a href="#" className="block text-sm hover:text-orange-500 transition-colors">
                  Employer requiring unpaid overtime - California
                </a>
                <a href="#" className="block text-sm hover:text-orange-500 transition-colors">
                  Car accident with uninsured driver - what now?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionViewPage;