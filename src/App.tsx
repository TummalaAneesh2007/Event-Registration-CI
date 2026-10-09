import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventsSection } from './components/EventsSection';
import { RegistrationForm } from './components/RegistrationForm';
import { VersionInfoCard } from './components/VersionInfoCard';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedEventId, setSelectedEventId] = useState<string>('tech-fest');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Account for fixed navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectEvent = (eventId: string) => {
    setSelectedEventId(eventId);
    scrollToSection('register');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onScrollToRegister={() => scrollToSection('register')}
          onScrollToEvents={() => scrollToSection('events')}
        />

        {/* 2. Events Section (Tech Fest, CodeSprint, Creative Carnival) */}
        <EventsSection onSelectEvent={handleSelectEvent} />

        {/* 3. Registration Form (with live validation & success pass) */}
        <RegistrationForm
          selectedEventId={selectedEventId}
          onEventChange={(id) => setSelectedEventId(id)}
        />

        {/* 4. CI/CD Project Information Card (Website Update Information) */}
        <VersionInfoCard />

        {/* 5. About Section (College platform purpose & DevOps context) */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
