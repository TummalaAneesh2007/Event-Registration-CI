export interface CollegeEvent {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  badgeColor: string;
  accentGradient: string;
  highlights: string[];
}

export const COLLEGE_EVENTS: CollegeEvent[] = [
  {
    id: 'tech-fest',
    name: 'Tech Fest',
    tagline: 'Technology, Innovation & Project Showcases',
    category: 'Innovation & Tech',
    description: 'Immerse yourself in cutting-edge robotics demonstrations, AI project showcases, hardware hack zones, and guest keynotes from engineering industry pioneers.',
    date: 'November 14, 2026',
    time: '9:30 AM – 5:00 PM',
    venue: 'Main Auditorium & Engineering Quad',
    badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
    accentGradient: 'from-blue-600 to-indigo-600',
    highlights: ['Hardware & IoT Project Expo', 'AI/ML Prototype Demos', 'Industry Mentor Q&A', 'Certificate of Participation']
  },
  {
    id: 'codesprint',
    name: 'CodeSprint',
    tagline: 'Coding Competitions & Programming Challenges',
    category: 'Competitive Programming',
    description: 'A high-energy competitive coding arena featuring algorithmic puzzles, speed debugging rounds, and rapid-fire team development challenges with live leaderboards.',
    date: 'November 15, 2026',
    time: '10:00 AM – 4:30 PM',
    venue: 'Computing Center, Lab 3 & 4',
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
    accentGradient: 'from-cyan-500 to-blue-600',
    highlights: ['Algorithmic Speed Challenge', 'Bug Bounty & Debugging Race', 'Live Arena Leaderboard', 'Cash Prizes & Certificates']
  },
  {
    id: 'creative-carnival',
    name: 'Creative Carnival',
    tagline: 'Arts, Culture & Creative Activities',
    category: 'Culture & Arts',
    description: 'Celebrate student creativity and artistic flair! Features digital art battles, live acoustic performances, photography exhibitions, and interactive hands-on craft workshops.',
    date: 'November 16, 2026',
    time: '11:00 AM – 6:30 PM',
    venue: 'Campus Open Amphitheatre & Student Center',
    badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
    accentGradient: 'from-purple-600 to-pink-600',
    highlights: ['Digital Art & UI Design Duel', 'Live Stage Performances', 'Photo Gallery Showcase', 'Student Creator Stalls']
  }
];
