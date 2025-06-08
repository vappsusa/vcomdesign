// VERDICT.COM Design0001 Components
// Export all design components for easy importing

export { default as LandingPage } from './LandingPage';
export { default as QuestionViewPage } from './QuestionViewPage';
export { default as ProfessionalProfilePage } from './ProfessionalProfilePage';

// Component types for reference
export type ComponentType = 
  | 'LandingPage'
  | 'QuestionViewPage'
  | 'ProfessionalProfilePage';

// Design system metadata
export const designSystem = {
  name: "VERDICT Design0001",
  version: "1.0.0",
  theme: "Reddit-inspired dark mode",
  colors: {
    primary: "#F97316", // Orange-500
    background: "#111827", // Gray-900
    cards: "#1F2937", // Gray-800
    text: "#F3F4F6", // Gray-100
    textSecondary: "#D1D5DB", // Gray-300
    textMuted: "#9CA3AF", // Gray-400
  },
  features: [
    "AI-powered question classification",
    "Professional verification system",
    "Reddit-style voting and engagement",
    "Multi-vertical architecture ready",
    "SEO-optimized page structures"
  ]
};
