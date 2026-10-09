import React from 'react';
import { COLLEGE_EVENTS, CollegeEvent } from '../data/events';
import { Calendar, MapPin, Clock, ArrowRight, CheckCircle2, Cpu, Terminal, Palette } from 'lucide-react';

interface EventsSectionProps {
  onSelectEvent: (eventId: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onSelectEvent }) => {
  const getEventIcon = (id: string) => {
    switch (id) {
      case 'tech-fest':
        return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'codesprint':
        return <Terminal className="w-6 h-6 text-cyan-400" />;
      case 'creative-carnival':
        return <Palette className="w-6 h-6 text-purple-400" />;
      default:
        return <Calendar className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="events" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Featured Schedule
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Upcoming College Events
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Choose from our three signature college events. Register in advance to secure your spot and receive a confirmation pass.
          </p>
        </div>

        {/* 3 Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLEGE_EVENTS.map((event: CollegeEvent) => (
            <div
              key={event.id}
              className="flex flex-col bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 rounded-2xl overflow-hidden shadow-xl shadow-black/40 hover:shadow-purple-950/20 transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Card top banner gradient accent */}
              <div className={`h-2 bg-gradient-to-r ${event.accentGradient}`} />

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Top bar with icon and category badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getEventIcon(event.id)}
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full border font-medium ${event.badgeColor}`}>
                      {event.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {event.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1 mb-4">
                    {event.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6">
                    {event.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Event Metadata (Date, Time, Venue) and Action */}
                <div className="pt-6 border-t border-slate-800/90 mt-2 space-y-4">
                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="font-medium text-white">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                      <span className="line-clamp-1">{event.venue}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectEvent(event.id)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 border border-slate-700/80 hover:border-transparent transition-all duration-200 group-hover:shadow-lg group-hover:shadow-purple-900/30 cursor-pointer"
                  >
                    <span>Register for {event.name}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
