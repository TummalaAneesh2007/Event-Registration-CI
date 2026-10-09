import React from 'react';
import { ArrowDown, Calendar, Users, Award, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  onScrollToRegister: () => void;
  onScrollToEvents: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToRegister, onScrollToEvents }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting and grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-purple-600/25 to-pink-600/10 blur-[130px] rounded-full" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 blur-[110px] rounded-full" />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #a855f7 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-purple-500/10">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>Annual Campus Fest Season 2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span className="text-slate-400">DevOps CI/CD Showcase</span>
          </div>

          {/* Main Heading - EXACT wording requested: “Discover. Connect. Celebrate.” */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            <span className="block text-slate-100">Discover.</span>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Connect. Celebrate.
            </span>
          </h1>

          {/* Short introduction to college events */}
          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-normal">
            Welcome to <span className="text-white font-semibold">EventHub</span>, your central gateway to premier college events. 
            Experience high-intensity coding challenges, innovative engineering showcases, and vibrant creative arts festivals on campus.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
            <button
              onClick={onScrollToRegister}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl shadow-xl shadow-purple-900/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Register Now</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
            <button
              onClick={onScrollToEvents}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all duration-200 cursor-pointer"
            >
              <span>Explore 3 Flagship Events</span>
            </button>
          </div>

          {/* Highlights bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-800/80">
            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60 text-left">
              <div className="flex items-center gap-2 text-blue-400 mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Events</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-white">3 Flagship</p>
              <p className="text-xs text-slate-400">Fest, Sprint & Carnival</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60 text-left">
              <div className="flex items-center gap-2 text-purple-400 mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Audience</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-white">Campus Wide</p>
              <p className="text-xs text-slate-400">Students & Faculty</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60 text-left">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Location</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-white">College Campus</p>
              <p className="text-xs text-slate-400">On-site Venues</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60 text-left">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Award className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Recognition</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-white">Certificates</p>
              <p className="text-xs text-slate-400">Badges & Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
