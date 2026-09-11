import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 'sanctuary-dusk',
    image: '/assets/hero/sanctuary-dusk.jpg',
    badge: 'EST. 2001 · PARENT SACRED HOSPITALITY GROUP',
    caption: 'Sovereign Riverfront Grounds · Golden Twilight on Sacred Godavari',
    location: 'Nashik · Ujjain · Haridwar · Prayagraj'
  },
  {
    id: 'royal-suite',
    image: '/assets/hero/royal-suite.jpg',
    badge: 'LUXURY ARCHITECTURAL SANCTUARIES',
    caption: 'Presidential Canvas Suites · Handcrafted Teakwood & Sunrise River Views',
    location: 'Acoustic Insulation · En-Suite Bathrooms · Veranda Lounges'
  },
  {
    id: 'annakshetra-dining',
    image: '/assets/hero/annakshetra-dining.jpg',
    badge: 'CONSECRATED SHASTRA CUISINE',
    caption: 'Grand Riverside Annakshetra · 100% Pure Gir Cow A2 Desi Ghee Dining',
    location: 'Zero Allium · Shastric Purity · Sunset Jain Chauvihar'
  },
  {
    id: 'snan-ghat-dawn',
    image: '/assets/hero/snan-ghat-dawn.jpg',
    badge: 'DIGNIFIED SACRED PROTOCOLS',
    caption: 'Private Consecrated Snan Ghats · Escorted Bathing Platforms & Aarti Pavilions',
    location: 'Step-Free Elder Mobility · Golf Carts · 24/7 Medical Triage'
  }
];

export default function CorporateHero({ onOpenInquiry }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="relative w-full h-[calc(100dvh-80px)] min-h-[520px] max-h-[920px] flex flex-col justify-between overflow-hidden bg-[#0A0704] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* Slideshow Background Layers with Smooth Crossfade & Cinematic Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.caption}
                className={`w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}
        {/* Multi-gradient Vignette Overlay for High-End Contrast & Text Readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0A0704] via-[#0A0704]/60 to-[#0A0704]/75 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(10,7,4,0.6)_100%)] pointer-events-none" />
      </div>

      {/* Main Editorial Hero Content - Calibrated for 100% Single Viewport Fit */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex-1 flex flex-col justify-center items-center text-center w-full">
        
        {/* Dynamic Subtle Inscription Badge */}
        <div className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-swarna-300 font-sans font-medium mb-2.5 sm:mb-3.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-swarna-400/25 bg-[#0D0906]/85 backdrop-blur-md shadow-xs animate-fadeIn">
          <span>{HERO_SLIDES[currentSlide].badge}</span>
        </div>

        {/* Understated Serif Headline */}
        <h1 className="max-w-4xl mx-auto font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-light text-white leading-tight sm:leading-[1.18] tracking-tight mb-2 sm:mb-3 drop-shadow-sm">
          Twenty-Five Years of Sovereign Pilgrimage Hospitality
        </h1>

        {/* Clean Editorial Subtitle */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-stone-200 font-sans font-light leading-relaxed mb-4 sm:mb-6 drop-shadow-xs">
          Engineering turn-key riverfront sanctuaries, 100% pure A2 desi ghee Annakshetra, and dignified elder mobility across India’s sacred Maha Kumbh Dhams: Nashik, Ujjain, Haridwar, and Prayagraj.
        </p>

        {/* Minimalist Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto">
          <a
            href="#destinations-showcase"
            className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-swarna-400 text-stone-950 hover:bg-swarna-300 transition-colors text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <span>Explore Destinations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => onOpenInquiry()}
            className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-2.5 rounded-full border border-white/25 bg-black/40 backdrop-blur-sm text-stone-200 hover:border-white hover:text-white transition-colors text-xs uppercase tracking-wider font-normal cursor-pointer"
          >
            Corporate Liaison Desk
          </button>
        </div>

        {/* Slideshow Progress Indicators & Navigation */}
        <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2.5 sm:gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="p-1 sm:p-1.5 rounded-full bg-black/40 border border-white/15 text-stone-300 hover:text-white hover:border-swarna-400 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  idx === currentSlide
                    ? 'w-6 sm:w-8 bg-swarna-400'
                    : 'w-1.5 sm:w-2 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="p-1 sm:p-1.5 rounded-full bg-black/40 border border-white/15 text-stone-300 hover:text-white hover:border-swarna-400 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
        </div>

        {/* Current Slide Architectural Caption */}
        <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-[11px] text-stone-300/90 font-serif italic tracking-wide">
          <span>{HERO_SLIDES[currentSlide].caption}</span>
        </div>

      </div>

      {/* Sleek Minimalist Trust Metrics Strip - Compact Single Row / 2x2 on Mobile */}
      <div className="relative z-30 border-t border-white/10 bg-[#0A0704]/98 backdrop-blur-md py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 text-center md:text-left">
          
          <div className="space-y-0.5 md:border-r border-white/10 md:pr-4">
            <div className="font-mono text-sm sm:text-base md:text-lg text-swarna-200 font-light">2001–2027</div>
            <div className="text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-wider font-sans">25 Years Lineage</div>
          </div>

          <div className="space-y-0.5 md:border-r border-white/10 md:pr-4">
            <div className="font-mono text-sm sm:text-base md:text-lg text-swarna-200 font-light">4 Dhams</div>
            <div className="text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-wider font-sans truncate">Nashik · Ujjain · Haridwar · Prayagraj</div>
          </div>

          <div className="space-y-0.5 md:border-r border-white/10 md:pr-4">
            <div className="font-mono text-sm sm:text-base md:text-lg text-swarna-200 font-light">50,000+</div>
            <div className="text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-wider font-sans truncate">Devotees Hosted</div>
          </div>

          <div className="space-y-0.5">
            <div className="font-mono text-sm sm:text-base md:text-lg text-swarna-200 font-light">0% Runoff</div>
            <div className="text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-wider font-sans">Zero River Impact</div>
          </div>

        </div>
      </div>

    </section>
  );
}



