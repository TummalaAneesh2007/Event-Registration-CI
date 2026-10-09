import React from 'react';
import { WEBSITE_VERSION_INFO } from '../config/version';
import { Tag, Sparkles, GitBranch, Code2, Download } from 'lucide-react';

export const VersionInfoCard: React.FC = () => {
  return (
    <section id="update-info" className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <GitBranch className="w-3.5 h-3.5 text-purple-400" />
            <span>DevOps CI/CD Project Info</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Website Update Information
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Current build metadata for continuous integration & deployment demonstration.
          </p>
        </div>

        {/* Update Information Card */}
        <div className="relative bg-slate-900/90 border border-slate-800 hover:border-purple-500/30 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/40 backdrop-blur-sm transition-all duration-300 overflow-hidden">
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* 1. Current Website Version */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="w-12 h-12 rounded-xl bg-blue-950/70 border border-blue-800/50 flex items-center justify-center shrink-0">
                <Tag className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">
                  Current Website Version
                </span>
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                    {WEBSITE_VERSION_INFO.currentVersion}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                    Release
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Latest Update */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <div className="w-12 h-12 rounded-xl bg-purple-950/70 border border-purple-800/50 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-1">
                  Latest Update
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-100 block">
                  {WEBSITE_VERSION_INFO.latestUpdate}
                </span>
              </div>
            </div>
          </div>

          {/* Download project archive button for easy export */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Code2 className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Configured in <code className="text-purple-300 font-mono bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">src/config/version.ts</code></span>
            </div>

            <a
              href="./eventhub-project.zip"
              download="eventhub-project.zip"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-purple-500/50 transition-all shadow-md hover:shadow-purple-950/30 cursor-pointer"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>Download Project ZIP</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
