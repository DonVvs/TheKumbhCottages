import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, MessageSquare, Compass, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { TIMELINE_DATA } from '../../data/timelineData';
import { TRANSLATIONS } from '../../data/translationsData';

export default function HeroSection({ lang = 'en', onOpenBooking }) {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const timerRef = useRef(null);

  // Auto advance timeline milestones every 6 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      setActiveMilestoneIndex((prev) => (prev + 1) % TIMELINE_DATA.length);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, [isHovered]);

  const activeMilestone = TIMELINE_DATA[activeMilestoneIndex];

  return (
    <section className="relative w-full min-h-[95dvh] lg:h-screen lg:max-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#0A0704] text-white">
      
      {/* Background Image / WebP Poster with High-Performance CSS Fallback */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-poster.webp"
          alt="The Kumbh Cottages Sovereign Sanctuary"
          className="w-full h-full object-cover object-center scale-105 transform-gpu will-change-transform transition-transform duration-10000 ease-out"
        />
        
        {/* Layer 1: Top Shadow for Header Visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0704]/90 via-[#0A0704]/40 to-transparent" />
        
        {/* Layer 2: Center Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#0A0704_95%)] opacity-75" />
        
        {/* Layer 3: Bottom Gradient for Seamless Transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0704] via-[#0A0704]/60 to-transparent" />
      </div>

      {/* Main Center Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-28 pb-8 flex-1 flex flex-col justify-center text-center items-center">
        
        {/* Sacred Institution Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-swarna-400/50 mb-6 shadow-xl animate-fadeIn">
          <Compass className="w-3.5 h-3.5 text-swarna-300 animate-spin-slow" />
          <span className="text-xs sm:text-xs font-serif tracking-[0.22em] text-swarna-200 uppercase font-semibold">
            {t.hero_badge}
          </span>
          <span className="text-swarna-400">✦</span>
          <span className="text-xs text-white/90 font-sans font-medium">25 Years of Continuous Seva</span>
        </div>

        {/* Display Headline */}
        <h1 className="max-w-4xl mx-auto font-serif tracking-tight leading-[1.1] mb-6">
          <span className="block text-3xl sm:text-5xl lg:text-6xl text-swarna-200 drop-shadow-md">
            {t.hero_title_line1}
          </span>
          <span className="block text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mt-1 drop-shadow-lg">
            {t.hero_title_line2}
          </span>
        </h1>

        {/* High-Clarity Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-stone-200 font-sans leading-relaxed mb-8 drop-shadow">
          {t.hero_subtitle}
        </p>

        {/* Dual Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto btn-darbar-gold px-8 py-3.5 rounded-full text-sm sm:text-base font-serif font-bold shadow-2xl flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-espresso-950 group-hover:rotate-12 transition-transform" />
            <span>{t.hero_explore}</span>
            <ArrowRight className="w-4 h-4 text-espresso-950 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/919889933333?text=Pranam%20TheKumbhCottages%2C%20I%20would%20like%20to%20inquire%20about%20Simhastha%202027%20reservations."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto btn-temple-outline px-7 py-3.5 rounded-full text-sm sm:text-base font-serif flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>{t.hero_whatsapp}</span>
          </a>
        </div>

      </div>

      {/* Bottom Heritage Timeline Dock (7-Milestone Interactive Bar: 2001 to 2027) */}
      <div
        className="relative z-10 bg-[#120E0A]/90 backdrop-blur-xl border-t border-swarna-500/30 px-4 py-3 sm:py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Active Milestone Title & Location */}
          <div className="flex items-center gap-3 text-left w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-kesar-500 animate-pulse flex-shrink-0" />
              <div className="font-mono text-swarna-300 font-bold text-sm sm:text-base">
                {activeMilestone.year}
              </div>
              <span className="text-stone-400">·</span>
              <div className="font-serif text-xs sm:text-sm text-white font-semibold">
                {activeMilestone.title} ({activeMilestone.location})
              </div>
            </div>
            <span className="text-[11px] font-mono text-stone-400 hidden sm:inline">
              {activeMilestone.stats}
            </span>
          </div>

          {/* 7-Year Milestone Selectors */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full pb-1 md:pb-0">
            {TIMELINE_DATA.map((milestone, idx) => {
              const isActive = activeMilestoneIndex === idx;
              return (
                <button
                  key={milestone.year}
                  onClick={() => setActiveMilestoneIndex(idx)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all duration-300 flex items-center gap-1 ${
                    isActive
                      ? 'bg-swarna-500 text-espresso-950 font-bold shadow-lg ring-1 ring-swarna-300 scale-105'
                      : 'bg-white/5 text-stone-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{milestone.year}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-espresso-950" />}
                </button>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
}
