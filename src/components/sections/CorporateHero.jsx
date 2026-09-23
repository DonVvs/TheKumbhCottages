import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 'camp-riverfront-fountain',
    image: '/assets/real_camps/kumbh-cottages-riverfront-sanctuary-fountain.webp',
    badge: 'RAAMVAN RETREATS · RIVERFRONT VALLEY',
    title: 'Sacred Riverfront Sanctuary',
    subtitle: 'Canvas townships rising above the holy river — saffron flags, sacred waters, and twenty-five years of pilgrim hospitality.',
    caption: 'The Kumbh Cottages Riverfront · Saffron Flags & Holy River Fountain',
    objectPosition: 'center 40%',
    kenBurnsDir: 'right',
  },
  {
    id: 'camp-night-fairy-lights',
    image: '/assets/real_camps/kumbh-cottages-night-view-fairy-lit-campus.webp',
    badge: 'NASHIK SIMHASTHA · EST. 2001',
    title: 'Twenty-Five Years of Sacred Seva',
    subtitle: 'At dusk the valley glows — fairy-lit pathways, vibrant tents, and the calm of devotion under an open sky.',
    caption: 'The Kumbh Cottages Valley · Fairy Lit Night View',
    objectPosition: 'center 35%',
    kenBurnsDir: 'left',
  },
  {
    id: 'camp-daylight-brand',
    image: '/assets/real_camps/kumbh-cottages-daylight-camp-lawn-seating.webp',
    badge: 'THE KUMBH COTTAGES™ · RAAMVAN RETREATS',
    title: 'Where Pilgrimage Meets Comfort',
    subtitle: 'White Swiss tents, rattan lounges, and saffron banners — a complete pilgrim township designed for families.',
    caption: 'The Kumbh Cottages™ · Daylight Valley with Brand Signage',
    objectPosition: 'center 50%',
    kenBurnsDir: 'right',
  },
  {
    id: 'camp-elevated-orange-villas',
    image: '/assets/real_camps/kumbh-cottages-elevated-riverbank-canvas-villas.webp',
    badge: 'ELEVATED RIVERBANK · FLOOD-PLAIN ENGINEERING',
    title: 'Engineered Above the Sacred Floodplain',
    subtitle: 'Elevated canvas villas on timber platforms — handcrafted, weather-resilient, and consecrated for each Kumbh.',
    caption: 'Elevated Riverbank Valley · The Kumbh Cottages Canvas Villas',
    objectPosition: 'center 45%',
    kenBurnsDir: 'left',
  },
  {
    id: 'camp-swiss-boardwalk',
    image: '/assets/real_camps/kumbh-cottages-luxury-swiss-tents-boardwalk.webp',
    badge: 'SWISS CANVAS SUITES · PRIVATE VERANDAHS',
    title: 'Pristine Canvas Swiss Enclaves',
    subtitle: 'Each suite opens onto a private bamboo boardwalk — lounge chairs, potted palms, and panoramic camp vistas.',
    caption: 'The Kumbh Cottages · Swiss Canvas Suites & Private Boardwalk',
    objectPosition: 'center 40%',
    kenBurnsDir: 'right',
  },
];

const DURATION = 5000;   // 5s per slide
const TRANSITION = 800;  // 0.8s crossfade

export default function CorporateHero({ onOpenInquiry }) {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0); // forces text re-animation on slide change
  const [visited, setVisited] = useState(() => new Set([0, 1])); // Buffer active + next slide only
  const pausedRef = useRef(false);
  const currentRef = useRef(0); // stable ref avoids stale closures in interval

  // Keep ref in sync with state and progressively buffer next slide
  useEffect(() => {
    currentRef.current = current;
    setVisited(prev => {
      const nextIdx = (current + 1) % HERO_SLIDES.length;
      if (prev.has(current) && prev.has(nextIdx)) return prev;
      const nextSet = new Set(prev);
      nextSet.add(current);
      nextSet.add(nextIdx);
      return nextSet;
    });
  }, [current]);

  // ─── Reliable interval that never resets mid-transition ───
  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      const next = (currentRef.current + 1) % HERO_SLIDES.length;
      currentRef.current = next;
      setCurrent(next);
      setAnimKey(k => k + 1);
    }, DURATION);
    return () => clearInterval(id);
  }, []); // ← empty deps: interval is created once, never recreated

  const goTo = (idx) => {
    if (idx === currentRef.current) return;
    currentRef.current = idx;
    setCurrent(idx);
    setAnimKey(k => k + 1);
  };

  const slide = HERO_SLIDES[current];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0A0806] text-white"
      style={{ height: '100dvh', minHeight: 680 }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >

      {/* ── Background images — progressive buffering, minimal initial payload ── */}
      {HERO_SLIDES.map((item, idx) => {
        const isActive = idx === current;
        const shouldLoad = visited.has(idx);
        return (
          <div
            key={item.id}
            className="absolute inset-0"
            style={{
              zIndex: isActive ? 2 : 1,
              opacity: isActive ? 1 : 0,
              transition: `opacity ${TRANSITION}ms ease-in-out`,
            }}
          >
            {shouldLoad && (
              <img
                // key change forces new animation on each activation
                key={isActive ? `img-active-${animKey}` : item.id}
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
                style={{
                  objectPosition: item.objectPosition,
                  animation: isActive
                    ? `heroKenBurns_${item.kenBurnsDir} 8s cubic-bezier(0.25, 1, 0.5, 1) forwards`
                    : 'none',
                }}
                draggable={false}
                loading={idx === 0 ? 'eager' : 'lazy'}
                fetchpriority={idx === 0 ? 'high' : 'low'}
                decoding={idx === 0 ? 'sync' : 'async'}
              />
            )}
          </div>
        );
      })}

      {/* Atmospheric overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 10,
          background:
            'linear-gradient(to top, rgba(8,6,4,0.90) 0%, rgba(8,6,4,0.30) 42%, rgba(0,0,0,0.55) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 11,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* ── Left editorial counter (desktop only) ── */}
      <div
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
        style={{ zIndex: 40 }}
      >
        <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, transparent, rgba(197,160,89,0.55), transparent)' }} />
        <span
          style={{
            writingMode: 'vertical-rl',
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: 'rgba(197,160,89,0.7)',
            fontFamily: 'Inter, monospace',
          }}
        >
          {String(current + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
        </span>
        <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, transparent, rgba(197,160,89,0.55), transparent)' }} />
      </div>

      {/* ── Content ── */}
      <div
        className="relative w-full h-full flex flex-col justify-between"
        style={{ zIndex: 30, paddingTop: 'calc(6rem + env(safe-area-inset-top, 0px))' }}
      >
        {/* Center editorial block */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-6 sm:px-10 max-w-5xl mx-auto w-full">

          {/* Badge */}
          <div
            key={`badge-${animKey}`}
            className="inline-flex items-center gap-3 mb-5"
            style={{ animation: 'heroFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both' }}
          >
            <span style={{ width: 28, height: 1, background: 'linear-gradient(to right, transparent, rgba(197,160,89,0.9))' }} />
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.6rem',
                fontWeight: 500,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: '#D6B265',
                textShadow: '0 2px 8px rgba(0,0,0,0.9)',
              }}
            >
              {slide.badge}
            </span>
            <span style={{ width: 28, height: 1, background: 'linear-gradient(to left, transparent, rgba(197,160,89,0.9))' }} />
          </div>

          {/* Headline */}
          <h1
            key={`h1-${animKey}`}
            className="font-serif font-light text-white leading-[1.08] mb-4"
            style={{
              fontSize: 'clamp(2rem, 5.5vw, 4rem)',
              textShadow: '0 2px 20px rgba(0,0,0,0.95)',
              letterSpacing: '-0.01em',
              maxWidth: 780,
              animation: 'heroFadeUp 0.75s 0.08s cubic-bezier(0.16, 1, 0.3, 1) both',
            }}
          >
            {slide.title}
          </h1>

          {/* Gold divider */}
          <div
            key={`div-${animKey}`}
            style={{
              width: 44,
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(197,160,89,0.85), transparent)',
              marginBottom: '1.1rem',
              animation: 'heroFadeUp 0.75s 0.14s cubic-bezier(0.16, 1, 0.3, 1) both',
            }}
          />

          {/* Subtitle */}
          <p
            key={`sub-${animKey}`}
            className="font-sans font-light text-stone-300 leading-relaxed max-w-lg mx-auto mb-8"
            style={{
              fontSize: 'clamp(0.78rem, 1.4vw, 0.92rem)',
              textShadow: '0 1px 6px rgba(0,0,0,0.95)',
              animation: 'heroFadeUp 0.8s 0.18s cubic-bezier(0.16, 1, 0.3, 1) both',
            }}
          >
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div
            key={`cta-${animKey}`}
            className="flex flex-wrap items-center justify-center gap-3"
            style={{ animation: 'heroFadeUp 0.85s 0.24s cubic-bezier(0.16, 1, 0.3, 1) both' }}
          >
            <a
              href="#destinations-showcase"
              className="flex items-center gap-2.5 cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                padding: '0.7rem 1.6rem',
                borderRadius: 999,
                background: '#C5A059',
                color: '#0A0806',
                boxShadow: '0 4px 22px rgba(197,160,89,0.38)',
                textDecoration: 'none',
              }}
            >
              <span>Explore Sanctuaries</span>
              <ArrowRight style={{ width: 13, height: 13 }} />
            </a>

            <button
              onClick={onOpenInquiry}
              className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0A0806]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '0.7rem 1.4rem',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.28)',
                background: 'rgba(0,0,0,0.35)',
                color: '#F0EDE8',
                backdropFilter: 'blur(12px)',
              }}
            >
              Corporate Liaison
            </button>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="w-full px-6 sm:px-10 lg:px-16 pb-8 sm:pb-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* Caption */}
          <p
            key={`cap-${animKey}`}
            className="font-serif italic text-stone-400 truncate text-center sm:text-left"
            style={{
              fontSize: '0.67rem',
              maxWidth: 320,
              animation: 'heroFadeUp 0.7s 0.1s both',
            }}
          >
            {slide.caption}
          </p>

          {/* Progress bars */}
          <div className="flex items-center gap-2.5">
            {HERO_SLIDES.map((item, idx) => {
              const isActive = idx === current;
              return (
                <button
                  key={item.id}
                  onClick={() => goTo(idx)}
                  title={`Slide ${idx + 1}`}
                  className="flex flex-col items-center gap-1 cursor-pointer py-1 group"
                >
                  <div
                    style={{
                      width: isActive ? 40 : 24,
                      height: 2,
                      borderRadius: 999,
                      background: 'rgba(255,255,255,0.18)',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'width 0.4s ease',
                    }}
                  >
                    {isActive && (
                      <div
                        key={`prog-${animKey}`}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: '#C5A059',
                          borderRadius: 999,
                          animation: `slideProgress ${DURATION}ms linear forwards`,
                        }}
                      />
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: '0.55rem',
                      fontFamily: 'Inter, monospace',
                      letterSpacing: '0.15em',
                      color: isActive ? '#D6B265' : 'rgba(255,255,255,0.3)',
                      fontWeight: isActive ? 600 : 400,
                      transition: 'color 0.3s',
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => goTo((currentRef.current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
              aria-label="Previous slide"
              className="flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-white hover:text-[#0A0806]"
              style={{
                width: 34,
                height: 34,
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'rgba(0,0,0,0.45)',
                color: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(8px)',
                fontSize: '0.9rem',
              }}
            >
              ←
            </button>
            <button
              onClick={() => goTo((currentRef.current + 1) % HERO_SLIDES.length)}
              aria-label="Next slide"
              className="flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-white hover:text-[#0A0806]"
              style={{
                width: 34,
                height: 34,
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'rgba(0,0,0,0.45)',
                color: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(8px)',
                fontSize: '0.9rem',
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroKenBurns_right {
          0%   { transform: scale(1.0)  translate(0, 0); }
          100% { transform: scale(1.06) translate(-1%, -0.5%); }
        }
        @keyframes heroKenBurns_left {
          0%   { transform: scale(1.0)  translate(0, 0); }
          100% { transform: scale(1.06) translate(1%, -0.5%); }
        }
        @keyframes slideProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
