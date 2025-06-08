import Link from 'next/link'
import { Scale, Eye, User, Code, Github, ExternalLink } from 'lucide-react'

export default function HomePage() {
  const pages = [
    {
      id: 'landing',
      title: 'Landing Page',
      description: 'Homepage showcasing trending legal questions with Reddit-style voting and AI classification',
      icon: Scale,
      route: '/landing',
      features: ['Hero section with search', 'Popular categories sidebar', 'Top lawyers preview', 'Trending questions feed']
    },
    {
      id: 'question',
      title: 'Question View',
      description: 'Detailed Q&A page with professional lawyer responses and AI-powered verdict consensus',
      icon: Eye,
      route: '/question',
      features: ['AI classification panel', 'Professional opinions', 'Voting system', 'Related questions']
    },
    {
      id: 'profile', 
      title: 'Professional Profile',
      description: 'Comprehensive lawyer profile with verification, expertise, and portfolio showcase',
      icon: User,
      route: '/profile',
      features: ['Verification badges', 'Tabbed interface', 'Success metrics', 'Contact information']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">VERDICT Design System</span>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/vappsusa/vcomdesign" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            VERDICT.COM
            <span className="text-orange-500"> Design0001</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Reddit-inspired design system for multi-vertical AI-powered legal Q&A platform.
            Three core page designs showcasing professional legal knowledge democratization.
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-gray-400 mb-12">
            <div className="flex items-center space-x-1">
              <Code className="h-4 w-4 text-orange-500" />
              <span>React 19 + Next.js 15.3</span>
            </div>
            <div className="flex items-center space-x-1">
              <Scale className="h-4 w-4 text-orange-500" />
              <span>Tailwind CSS 4.1</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4 text-orange-500" />
              <span>Lucide React Icons</span>
            </div>
          </div>

          {/* Design Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="bg-orange-900/50 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <Scale className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-400 text-sm">
                94% confidence question classification, professional consensus, and real-time AI processing
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="bg-blue-900/50 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <User className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Verified</h3>
              <p className="text-gray-400 text-sm">
                Tier system, bar verification, success metrics, and expertise showcase for lawyers
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="bg-green-900/50 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <Eye className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Multi-Vertical Ready</h3>
              <p className="text-gray-400 text-sm">
                Scalable architecture supporting legal, medical, and financial Q&A verticals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Design Pages</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pages.map((page) => {
            const IconComponent = page.icon;
            return (
              <div key={page.id} className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-colors">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-orange-900/50 rounded-lg p-3">
                    <IconComponent className="h-8 w-8 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{page.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {page.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {page.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={page.route}
                  className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-md transition-colors font-medium w-full justify-center"
                >
                  <span>View {page.title}</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Scale className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-bold">VERDICT Design0001</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Multi-vertical AI-powered Q&A platform design system
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a 
                href="https://github.com/vappsusa/vcomdesign" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub Repository
              </a>
              <span>•</span>
              <span>React 19 + Next.js 15.3</span>
              <span>•</span>
              <span>Tailwind CSS 4.1</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}