import React from 'react';
import { CalendarCheck, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <CalendarCheck className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Event<span className="text-purple-400">Hub</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              College Event Registration platform built for seamless student participation and DevOps CI/CD pipeline demonstrations.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 font-medium">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('events')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Events
            </button>
            <button
              onClick={() => onNavigate('register')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Register
            </button>
            <button
              onClick={() => onNavigate('update-info')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Website Info
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
          </div>

          {/* Back to top button */}
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 text-slate-300 hover:text-white transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright and note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} <strong className="text-slate-300">EventHub – College Event Registration</strong>. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed for College DevOps CI/CD Demonstration
          </p>
        </div>
      </div>
    </footer>
  );
};
