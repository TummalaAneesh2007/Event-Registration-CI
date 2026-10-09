import React from 'react';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column: Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              About EventHub
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Empowering Campus Life Through Seamless Event Discovery
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              <strong className="text-white">EventHub</strong> is a unified college event registration platform designed to bridge student organizations, engineering clubs, and campus attendees. By bringing technical symposiums, coding competitions, and cultural festivals under one roof, EventHub eliminates messy sign-up sheets and fragmented announcements.
            </p>

            <p className="text-base text-slate-300 leading-relaxed">
              Developed as part of a college <strong className="text-purple-300">DevOps CI/CD initiative</strong>, this frontend application showcases clean component architecture, zero-dependency hosting capabilities, responsive mobile-first design, and seamless deployment through GitHub Actions.
            </p>

            <div className="pt-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="block text-2xl font-bold text-blue-400">100%</span>
                  <span className="text-xs text-slate-400">Client-side & Static Ready</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="block text-2xl font-bold text-purple-400">0 ms</span>
                  <span className="text-xs text-slate-400">Instant Validation Feedback</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: 4 Feature cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-950 border border-blue-800/50 flex items-center justify-center mb-4 text-blue-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Centralized Hub</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Single destination for campus technical conferences, hackathons, and cultural festivities.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-indigo-950 border border-indigo-800/50 flex items-center justify-center mb-4 text-indigo-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Instant Registration</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Streamlined registration form with instant client validation and instant demo passes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-purple-950 border border-purple-800/50 flex items-center justify-center mb-4 text-purple-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Student Engagement</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Designed to maximize cross-department collaboration and student turnout.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-800/50 flex items-center justify-center mb-4 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">DevOps Ready</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineered for rapid build cycles, automated testing, and zero-cost GitHub Pages hosting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
