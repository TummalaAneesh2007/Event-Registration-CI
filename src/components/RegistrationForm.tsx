import React, { useState, useEffect } from 'react';
import { COLLEGE_EVENTS } from '../data/events';
import { CheckCircle, AlertCircle, Sparkles, User, Mail, School, Calendar, RefreshCw, Ticket, Info } from 'lucide-react';

interface RegistrationFormProps {
  selectedEventId: string;
  onEventChange: (id: string) => void;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  collegeName?: string;
  eventId?: string;
}

interface SubmittedData {
  fullName: string;
  email: string;
  collegeName: string;
  eventId: string;
  eventName: string;
  ticketId: string;
  registrationTime: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  selectedEventId,
  onEventChange,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [eventId, setEventId] = useState(selectedEventId || 'tech-fest');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);

  // Sync internal state if parent changes selectedEventId
  useEffect(() => {
    if (selectedEventId) {
      setEventId(selectedEventId);
    }
  }, [selectedEventId]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else {
      // Standard email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        newErrors.email = 'Please enter a valid email address (e.g., student@college.edu)';
      }
    }

    if (!collegeName.trim()) {
      newErrors.collegeName = 'College name is required';
    }

    if (!eventId) {
      newErrors.eventId = 'Please select an event';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate swift instant client-side validation
    setTimeout(() => {
      const selectedEvent = COLLEGE_EVENTS.find((ev) => ev.id === eventId);
      const ticketNum = 'EH-' + Math.floor(100000 + Math.random() * 900000);
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      setSubmittedData({
        fullName: fullName.trim(),
        email: email.trim(),
        collegeName: collegeName.trim(),
        eventId: eventId,
        eventName: selectedEvent ? selectedEvent.name : 'College Event',
        ticketId: ticketNum,
        registrationTime: now,
      });

      setIsSubmitting(false);
    }, 400);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFullName('');
    setEmail('');
    setCollegeName('');
    setErrors({});
  };

  return (
    <section id="register" className="py-20 md:py-28 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Registration Form
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Register for College Events
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Fill in your details below to reserve your entry pass for our upcoming campus activities.
          </p>
        </div>

        {/* Demo Notice Banner */}
        <div className="mb-8 p-4 rounded-xl bg-slate-900/90 border border-indigo-500/30 flex items-start gap-3.5 text-xs sm:text-sm text-slate-300 shadow-md shadow-black/20">
          <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-indigo-300">College DevOps CI/CD Demo Notice: </span>
            This is a student demonstration project. Submissions are validated locally in your browser. Registrations are not stored in a real backend database.
          </div>
        </div>

        {/* Form Card or Success Card */}
        {submittedData ? (
          /* SUCCESS STATE */
          <div className="bg-slate-900/90 border border-emerald-500/40 rounded-2xl p-6 sm:p-10 shadow-2xl shadow-black/50 text-center animate-fadeIn">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
              <CheckCircle className="w-9 h-9 text-emerald-400" />
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-semibold border border-emerald-800 mb-2">
              Registration Successful
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              You're Registered, {submittedData.fullName}!
            </h3>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
              Thank you for registering for <span className="font-semibold text-purple-300">{submittedData.eventName}</span>. 
              Your demo entry pass has been generated below.
            </p>

            {/* Demo Ticket Card */}
            <div className="max-w-md mx-auto bg-slate-950 rounded-xl border border-slate-800 p-5 text-left mb-8 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-24 h-24 bg-purple-600/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-bold text-slate-200 tracking-wider uppercase">EventHub Pass</span>
                </div>
                <span className="text-xs font-mono font-semibold text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/60">
                  {submittedData.ticketId}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Attendee</span>
                  <span className="font-semibold text-white truncate block">{submittedData.fullName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Event</span>
                  <span className="font-semibold text-purple-300 truncate block">{submittedData.eventName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Email</span>
                  <span className="font-medium text-slate-200 truncate block">{submittedData.email}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">College</span>
                  <span className="font-medium text-slate-200 truncate block">{submittedData.collegeName}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Status: <strong className="text-emerald-400 font-semibold">Confirmed (Demo)</strong></span>
                <span>Time: {submittedData.registrationTime}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-900/30 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Register Another Attendee</span>
              </button>
            </div>
          </div>
        ) : (
          /* REGISTRATION FORM */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl shadow-black/40 backdrop-blur-sm"
          >
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-slate-200 mb-2">
                  Full Name <span className="text-pink-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Alex Johnson"
                    className={`w-full pl-10 pr-4 py-3 bg-slate-950/80 border rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none transition-all ${
                      errors.fullName
                        ? 'border-pink-500/80 focus:ring-2 focus:ring-pink-500/30'
                        : 'border-slate-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-pink-400 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                  Email Address <span className="text-pink-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. alex@university.edu"
                    className={`w-full pl-10 pr-4 py-3 bg-slate-950/80 border rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none transition-all ${
                      errors.email
                        ? 'border-pink-500/80 focus:ring-2 focus:pink-500/30'
                        : 'border-slate-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-xs text-pink-400 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* College Name */}
              <div>
                <label htmlFor="collegeName" className="block text-sm font-semibold text-slate-200 mb-2">
                  College / Institute Name <span className="text-pink-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <School className="w-4 h-4" />
                  </div>
                  <input
                    id="collegeName"
                    type="text"
                    value={collegeName}
                    onChange={(e) => {
                      setCollegeName(e.target.value);
                      if (errors.collegeName) setErrors({ ...errors, collegeName: undefined });
                    }}
                    placeholder="e.g. Stanford University or MIT"
                    className={`w-full pl-10 pr-4 py-3 bg-slate-950/80 border rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none transition-all ${
                      errors.collegeName
                        ? 'border-pink-500/80 focus:ring-2 focus:pink-500/30'
                        : 'border-slate-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                    }`}
                  />
                </div>
                {errors.collegeName && (
                  <p className="mt-1.5 text-xs text-pink-400 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.collegeName}</span>
                  </p>
                )}
              </div>

              {/* Event Selection Dropdown */}
              <div>
                <label htmlFor="eventId" className="block text-sm font-semibold text-slate-200 mb-2">
                  Select Event <span className="text-pink-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <select
                    id="eventId"
                    value={eventId}
                    onChange={(e) => {
                      setEventId(e.target.value);
                      onEventChange(e.target.value);
                      if (errors.eventId) setErrors({ ...errors, eventId: undefined });
                    }}
                    className={`w-full pl-10 pr-10 py-3 bg-slate-950/80 border rounded-xl text-white text-sm focus:outline-none transition-all appearance-none cursor-pointer ${
                      errors.eventId
                        ? 'border-pink-500/80 focus:ring-2 focus:ring-pink-500/30'
                        : 'border-slate-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                    }`}
                  >
                    {COLLEGE_EVENTS.map((ev) => (
                      <option key={ev.id} value={ev.id} className="bg-slate-900 text-white py-2">
                        {ev.name} ({ev.date})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {errors.eventId && (
                  <p className="mt-1.5 text-xs text-pink-400 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.eventId}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-purple-900/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Processing Registration...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-purple-200" />
                      <span>Complete Registration</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-xs text-slate-400 pt-1">
                By submitting, you agree to comply with campus event conduct guidelines.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
