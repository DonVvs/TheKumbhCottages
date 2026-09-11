import React from 'react';
import { COMPANY_PROFILE } from '../../data/companyData';

export default function TheLineageStory() {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow & Headline Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase font-sans tracking-[0.25em] text-swarna-700 font-medium mb-3">
            <span className="w-6 h-px bg-swarna-600/60" />
            <span>Provenance & Institutional Lineage</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-stone-900 leading-[1.2] tracking-tight">
            A Quarter-Century of Consecrated Sacred Hospitality
          </h2>
        </div>

        {/* Top Editorial Narrative & Architectural Visual Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pb-16 border-b border-stone-200/80">
          
          {/* Left Column: Rich Editorial Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed border-l-2 border-swarna-500/70 pl-4 py-1">
              "In 2001, on the sacred sands of Triveni Sangam, The Kumbh Cottages was founded with a singular conviction: spiritual pilgrimage should elevate the soul, never exhaust the body."
            </p>
            
            <div className="space-y-4 text-stone-600 text-sm leading-relaxed font-sans font-light">
              <p>
                The Kumbh Mela represents humanity's greatest congregation of seekers, revered spiritual masters, and multi-generational families. Yet establishing weather-resilient, dignified sanctuary with authentic Vedic dining amidst seasonal river terrains requires decades of specialized civil and operational mastery.
              </p>

              <p>
                Over the past 25 years, <strong className="font-medium text-stone-900">The Kumbh Cottages</strong> has pioneered turnkey temporary civil townships across India's four sacred Kumbh Dhams: <strong className="font-medium text-stone-900">Nashik (Godavari)</strong>, <strong className="font-medium text-stone-900">Ujjain (Shipra)</strong>, <strong className="font-medium text-stone-900">Haridwar (Ganga)</strong>, and our founding base in <strong className="font-medium text-stone-900">Prayagraj (Triveni Sangam)</strong>.
              </p>

              <p>
                From coordinating private hawan shalas for venerable Shankaracharyas and jurists to laying kilometers of step-free timber boardwalks for elders, our parent institution stands upon twenty-five unbroken years of sanctified trust and zero environmental compromise.
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] border border-stone-300/80 shadow-xs">
              <img
                src="/assets/cottages/godavari-villa.webp"
                alt="The Kumbh Cottages Sanctuary Grounds"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] text-stone-200 font-sans tracking-wide">
                <span className="font-serif">Riverfront Sanctuary Grounds</span>
                <span className="font-mono text-swarna-300">Continuous Seva Since 2001</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom: 4 Heritage Pillars (Horizontal Clean Editorial Columns - No Boxy Cards) */}
        <div className="pt-14 sm:pt-16">
          <div className="text-[10px] uppercase font-sans tracking-[0.25em] text-stone-400 font-medium mb-8">
            The Institutional Pillars of Our Seva
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {COMPANY_PROFILE.pillars.map((pillar, idx) => (
              <div key={idx} className="space-y-2.5">
                <div className="font-mono text-xs text-swarna-700/80 font-medium">
                  {`0${idx + 1}`}
                </div>
                <h3 className="font-serif text-base font-normal text-stone-900 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

