import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 'royal-suite',
    image: '/assets/hero/royal-suite.jpg',
    badge: 'NASHIK · UJJAIN · HARIDWAR · PRAYAGRAJ',
    title: 'Sovereign Pilgrimage Sanctuaries',
    subtitle: 'Turnkey riverfront luxury, pure A2 Annakshetra, and dignified elder care across India’s sacred Dhams.',
    caption: 'Presidential Canvas Suites · Handcrafted Teakwood & Sunrise River Views'
  },
  {
    id: 'sanctuary-dusk',
    image: '/assets/hero/sanctuary-dusk.jpg',
    badge: 'ARC MEDIA GROUP · EST. 2001',
    title: 'Twenty-Five Years of Sacred Seva',
    subtitle: 'Pioneering private riverfront campuses with zero environmental impact.',
    caption: 'Sovereign Grounds at Twilight · Sacred Godavari Riverfront'
  },
  {
    id: 'annakshetra-dining',
    image: '/assets/hero/annakshetra-dining.jpg',
    badge: 'SHASTRA CULINARY PURITY',
    title: 'Consecrated A2 Desi Ghee Annakshetra',
    subtitle: '100% pure Gir cow bilona ghee, zero allium recipes, and Jain Chauvihar seva.',
    caption: 'Grand Riverside Annakshetra · Consecrated Dining Hall'
  },
  {
    id: 'snan-ghat-dawn',
    image: '/assets/hero/snan-ghat-dawn.jpg',
    badge: 'PRIVATE RIVER ACCESS',
    title: 'Consecrated Snan & Elder Dignity',
    subtitle: 'Dedicated bathing platforms, anti-slip boardwalks, and private aarti pavilions.',
    caption: 'Private Escorted Snan Platforms & Morning Aarti'
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
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section 
      className="relative w-full h-[100dvh] min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#0A0806] text-white pt-28 sm:pt-32 pb-8 sm:pb-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cinematic Photography Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((item, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={item.image}
                alt={item.caption}
                className={`w-full h-full object-cover object-center transition-transform duration-[9000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}
        {/* Subtle, Natural Vignette Allowing Full Architectural Visibility */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/75 via-transparent to-black/45 pointer-events-none" />
      </div>

      {/* Sleek, Minimalist Center Copy (Oberoi & Langham Inspired) */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 flex-1 flex flex-col justify-center items-center text-center w-full my-auto">
        
        {/* Refined Eyebrow */}
        <div className="inline-flex items-center gap-2.5 text-[9px] sm:text-[10px] uppercase tracking-[0.32em] text-swarna-300 font-sans font-medium mb-3 sm:mb-4 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
          <span className="w-5 h-px bg-swarna-400/60 inline-block" />
          <span>{slide.badge}</span>
          <span className="w-5 h-px bg-swarna-400/60 inline-block" />
        </div>

        {/* Short, Stately Headline (Maximum 3 to 4 Words) */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-light text-white leading-[1.12] tracking-tight mb-3 sm:mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          {slide.title}
        </h1>

        {/* Crisp, Single-Sentence Subtitle */}
        <p className="max-w-xl mx-auto text-xs sm:text-sm md:text-[15px] text-stone-200 font-sans font-light leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">
          {slide.subtitle}
        </p>

        {/* Understated Luxury Actions */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <a
            href="#destinations-showcase"
            className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-xs bg-swarna-400 text-stone-950 hover:bg-swarna-300 transition-all duration-300 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
          >
            <span>Explore Sanctuaries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => onOpenInquiry()}
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xs border border-white/40 bg-black/25 hover:bg-white hover:text-stone-950 transition-all duration-300 backdrop-blur-md text-stone-100 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium cursor-pointer"
          >
            Corporate Liaison
          </button>
        </div>

      </div>

      {/* Ultra-Clean Bottom Bar */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-stone-300">
        
        {/* Architectural Caption */}
        <div className="text-[11px] text-stone-300/90 font-serif italic tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] truncate max-w-[70%]">
          <span>{slide.caption}</span>
        </div>

        {/* Minimalist Slide Counter */}
        <div className="flex items-center gap-2 text-xs font-sans tracking-widest shrink-0">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="p-1 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1 font-mono text-[11px]">
            <span className="text-swarna-300 font-semibold">0{currentSlide + 1}</span>
            <span className="text-stone-500">/</span>
            <span className="text-stone-400">0{HERO_SLIDES.length}</span>
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="p-1 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
