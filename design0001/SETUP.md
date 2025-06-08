# 🚀 How to Run VERDICT.COM Design0001

Complete runnable Next.js project showcasing all three VERDICT.COM design pages.

## 🎯 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/vappsusa/vcomdesign.git
cd vcomdesign/design0001

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open your browser
# Navigate to http://localhost:3000
```

## 📖 What You'll See

### **Homepage** (`http://localhost:3000`)
- **Design System Overview**: Introduction to VERDICT.COM design philosophy
- **Navigation Hub**: Links to all three core page designs
- **Technical Stack**: React 19, Next.js 15.3, Tailwind CSS 4.1

### **Individual Page Routes**:
1. **Landing Page** (`/landing`) - Homepage with trending questions
2. **Question View** (`/question`) - Detailed Q&A with AI classification
3. **Professional Profile** (`/profile`) - Comprehensive lawyer profiles

## 🎨 Design Features You'll Experience

### **Reddit-Inspired Interface**
- Dark gray-900 theme with orange-500 accents
- Voting arrows and engagement metrics
- Card-based layout with smooth hover effects
- Intuitive sidebar navigation

### **AI-Powered Elements**
- Question classification with 94% confidence indicators
- Professional consensus verdicts
- Auto-categorization and keyword extraction
- Real-time AI processing animations

### **Professional Verification System**
- Tier badges (Expert, Specialist)
- Bar number verification displays
- Success rate metrics and response times
- Practice area specialization showcase

### **Multi-Vertical Architecture**
- Clean route structure (`/l/`, `/m/`, `/f/`)
- Color-coded categories by vertical
- Scalable component architecture
- SEO-optimized page structures

## 🛠️ Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📁 Project Structure

```
design0001/
├── app/                    # Next.js App Router
│   ├── globals.css        # Tailwind + custom styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage with navigation
│   ├── landing/page.tsx   # Landing page route
│   ├── question/page.tsx  # Question view route
│   └── profile/page.tsx   # Profile page route
├── LandingPage.tsx        # Homepage component
├── QuestionViewPage.tsx   # Q&A detail component
├── ProfessionalProfilePage.tsx  # Lawyer profile component
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## 🎯 Key Technologies

- **React 19**: Latest React with concurrent features
- **Next.js 15.3**: App Router with Partial Prerendering (PPR)
- **Tailwind CSS 4.1**: Utility-first styling with custom theme
- **TypeScript**: Full type safety
- **Lucide React**: Beautiful, consistent icons

## 🚀 Next Steps

Once you've explored the designs:

1. **Database Integration**: Connect to Supabase for real data
2. **Authentication**: Add Clerk for user management
3. **AI APIs**: Implement question classification endpoints
4. **Deployment**: Deploy to Vercel with Application-Aware Routing
5. **Multi-Vertical**: Expand to medical and financial Q&A

## 🎨 Design Philosophy

**"Professional Reddit for Legal Knowledge"**
- Community-driven Q&A with professional oversight
- AI-enhanced classification and moderation
- Gamified engagement with reputation systems
- Trust indicators through verification
- Multi-vertical scalability from day one

## 📸 Page Previews

### Landing Page
- Hero section with AI-powered search
- Trending legal questions feed
- Popular categories sidebar
- Top verified lawyers showcase

### Question View
- Detailed question with AI classification
- Professional lawyer responses
- Consensus verdict with confidence scores
- Interactive voting and engagement

### Professional Profile
- Comprehensive lawyer verification
- Tabbed interface (Answers, About, Reviews, Expertise)
- Success metrics and contact information
- Similar lawyers recommendations

---

**Ready to explore?** Run `npm run dev` and visit `http://localhost:3000`

All pages include realistic mock data for California employment law scenarios and are fully responsive across all device sizes.