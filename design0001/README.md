# VERDICT.COM Design0001 - Core Page Designs

## 🎯 Overview
Three initial design pages for VERDICT.COM - Multi-vertical AI-powered Q&A platform democratizing professional knowledge through AI classification, professional consensus, and community engagement.

**Design Inspiration**: Reddit-style interface adapted for legal Q&A platform
**Tech Stack**: React 19, Tailwind CSS 4.1, Lucide React icons
**Theme**: Dark mode with orange legal brand accents

## 📁 Files Included

### 1. `LandingPage.tsx`
- **Purpose**: Homepage showcasing trending legal questions
- **Features**:
  - Hero section with AI-powered search
  - Reddit-style voting system
  - Popular categories sidebar
  - Top lawyers preview
  - Platform statistics
- **Route**: `/` (SEO optimized)

### 2. `QuestionViewPage.tsx` 
- **Purpose**: Detailed question page with professional answers
- **Features**:
  - AI classification panel (94% confidence)
  - Professional consensus verdict
  - Verified lawyer responses with tier system
  - Voting and engagement metrics
  - Related questions sidebar
- **Route**: `/l/q/[slug]` (SEO optimized with PPR)

### 3. `ProfessionalProfilePage.tsx`
- **Purpose**: Comprehensive lawyer profile and portfolio
- **Features**:
  - Verification badges and tier system
  - Tabbed interface (Answers, About, Reviews, Expertise)
  - Success metrics and response times
  - Contact information and firm details
  - Similar lawyers recommendations
- **Route**: `/i/l/[username]` (SEO optimized)

## 🎨 Design System

### Color Palette
```css
Primary: Orange-500 (#F97316) - Legal brand accent
Background: Gray-900 (#111827) - Dark theme base
Cards: Gray-800 (#1F2937) - Content containers
Text: White/Gray-300 - High contrast readability
Accents: Blue/Green/Yellow for status indicators
```

### Key Components
- **Voting System**: Reddit-style up/down arrows
- **Verification Badges**: Green checkmarks for verified lawyers
- **Tier System**: Expert (yellow), Specialist (blue)
- **AI Confidence**: Orange badges showing classification confidence
- **Category Tags**: Color-coded practice areas

### Typography
- **Headlines**: Bold, large text for question titles
- **Body**: Gray-300 for readability on dark background
- **Metadata**: Gray-400 for timestamps and stats
- **CTAs**: Orange buttons for primary actions

## 🚀 Implementation Notes

### Mock Data Context
- **Location**: California (San Francisco, Los Angeles)
- **Practice Area**: Employment Law focus
- **Sample Questions**: Wage discussions, wrongful termination, workplace rights
- **Sample Lawyers**: Sarah Chen, Michael Rodriguez, Jennifer Kim

### Multi-Vertical Ready
Design patterns support expansion to:
- **Medical**: `/m/` routes for medical professionals
- **Financial**: `/f/` routes for financial advisors
- **Categories**: Each vertical gets own color coding

### SEO Optimization
- Structured data markup ready
- Meta tags and descriptions
- Breadcrumb navigation
- Clean URL structure
- Fast loading with React 19 features

## 📱 Responsive Design
- **Mobile-first**: Tailwind responsive utilities
- **Grid layouts**: Adaptive column systems
- **Navigation**: Collapsible mobile menus
- **Touch targets**: Proper button sizing

## 🔧 Next Steps
1. Integrate with Supabase database schema
2. Add Clerk authentication flows
3. Implement AI classification API endpoints
4. Connect to Vercel AI Gateway
5. Add real-time features with Supabase
6. Expand to medical and financial verticals

## 💡 Design Philosophy
**"Professional Reddit for Legal Knowledge"**
- Community-driven Q&A with professional oversight
- AI-enhanced classification and moderation
- Gamified engagement with reputation systems
- Trust indicators through verification
- Multi-vertical scalability from day one

---

*Created: June 2025*  
*Platform: VERDICT.COM*  
*Architecture: Multi-vertical AI-powered Q&A*
