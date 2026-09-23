import React, { useState } from 'react';
import { MILESTONES_CHRONOLOGY } from '../../data/companyData';
import { CheckCircle2, Award, Tv, MapPin } from 'lucide-react';

export default function MilestoneChronology() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedYear, setSelectedYear] = useState('2011–2012'); // Highlight the BBC & Nat Geo milestone by default or latest

  const filteredMilestones = activeFilter === 'ALL'
    ? MILESTONES_CHRONOLOGY
    : MILESTONES_CHRONOLOGY.filter(m => m.circuit.toUpperCase() === activeFilter);

  // If current selected milestone is not in filtered list, select first available
  const currentMilestone = filteredMilestones.find(m => m.year === selectedYear) || filteredMilestones[0];

  return (
    <section id="milestones-provenance" className="py-20 sm:py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase font-sans tracking-[0.25em] text-swarna-700 font-medium mb-3">
            <span className="w-6 h-px bg-swarna-600/60" />
            <span>Quarter-Century Historical Provenance</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-900 leading-[1.2] tracking-tight">
            Milestones of Continuous Seva (2000–2027)
          </h2>
          <p className="text-sm text-stone-600 font-sans font-light mt-3 leading-relaxed">
            Twenty-five consecutive years of sovereign pilgrimage hospitality across India's sacred Maha Kumbh Dhams: Prayagraj, Nashik, and Haridwar.
          </p>
        </div>

        {/* Circuit Filter Tabs */}
        <div className="flex items-center gap-2 pb-2 mb-6 overflow-x-auto text-xs font-sans">
          {[
            { id: 'ALL', label: 'All Historic Cycles (8)' },
            { id: 'PRAYAGRAJ', label: 'Prayagraj (5 Cycles)' },
            { id: 'NASHIK', label: 'Nashik (2015 & 2027)' },
            { id: 'HARIDWAR', label: 'Haridwar (2016)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveFilter(tab.id);
                const firstMatch = tab.id === 'ALL'
                  ? MILESTONES_CHRONOLOGY[0]
                  : MILESTONES_CHRONOLOGY.find(m => m.circuit.toUpperCase() === tab.id);
                if (firstMatch) setSelectedYear(firstMatch.year);
              }}
              className={`px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Year Selectors Ribbon */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          {filteredMilestones.map((item) => {
            const isSelected = currentMilestone.year === item.year;
            return (
              <button
                key={item.year}
                onClick={() => setSelectedYear(item.year)}
                className={`px-4 py-2.5 rounded-lg font-sans text-xs transition-all duration-300 shrink-0 cursor-pointer flex flex-col items-start gap-0.5 border text-left ${
                  isSelected
                    ? 'bg-stone-950 text-white border-swarna-500/60 shadow-md scale-[1.02]'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                }`}
              >
                <span className={`font-mono text-xs font-semibold ${isSelected ? 'text-swarna-300' : 'text-stone-900'}`}>
                  {item.year}
                </span>
                <span className={`text-[10px] tracking-wider uppercase ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                  {item.circuit} · {item.melaType}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Milestone Detail Spread (Editorial Architectural Ledger) */}
        <div className="luxury-card rounded-xl sm:rounded-2xl border border-stone-200/90 shadow-md overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            
            {/* Left Column: Metadata & Prestige Badges */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-stone-200 pb-6 lg:pb-0 lg:pr-8 space-y-4">
              <div className="space-y-1">
                <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-swarna-700 font-medium">
                  {currentMilestone.circuit} Circuit · {currentMilestone.melaType}
                </div>
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
                  {currentMilestone.year}
                </div>
                <div className="text-xs sm:text-sm font-sans text-stone-600 flex items-center gap-1 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-swarna-600 shrink-0" />
                  <span>{currentMilestone.location}</span>
                </div>
              </div>

              {/* Special Prestige Badges (BBC / Sole Rights / Model) */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-swarna-50 border border-swarna-200 text-swarna-900 text-xs font-serif font-medium">
                  {currentMilestone.badge.includes('BBC') ? (
                    <Tv className="w-4 h-4 text-swarna-700 shrink-0" />
                  ) : (
                    <Award className="w-4 h-4 text-swarna-700 shrink-0" />
                  )}
                  <span>{currentMilestone.badge}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 text-[11px] font-mono text-stone-500">
                Institutional Mandate: <strong className="text-stone-700 font-medium">{currentMilestone.scale}</strong>
              </div>
            </div>

            {/* Middle Column: Event Narrative & Key Highlights */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-900 leading-snug">
                {currentMilestone.event}
              </h3>
              
              <p className="text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed">
                {currentMilestone.description}
              </p>

              {/* Accomplishment Highlights */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <div className="text-[10px] uppercase font-sans tracking-widest text-stone-400 font-semibold">
                  Key Institutional Achievements:
                </div>
                {currentMilestone.highlights && currentMilestone.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-swarna-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Archival Spread */}
            <div className="lg:col-span-3">
              <div className="relative rounded overflow-hidden aspect-[4/3] border border-stone-200 bg-stone-100 shadow-xs">
                <img
                  src={currentMilestone.image}
                  alt={currentMilestone.imageAlt || `${currentMilestone.event} - The Kumbh Cottages`}
                  title={currentMilestone.imageAlt || `${currentMilestone.event} · Authentic Archival Photograph`}
                  width="640"
                  height="480"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] text-stone-200 font-sans flex items-center justify-between">
                  <span className="font-serif">{currentMilestone.circuit}</span>
                  <span className="font-mono text-swarna-300">{currentMilestone.shortYear}</span>
                </div>
              </div>
              <div className="text-[10px] text-stone-400 font-serif italic text-center mt-2 flex flex-col items-center gap-0.5">
                <span>{currentMilestone.imageCaption || "Documented historical campus operations · Raamvan Retreats Global Venture"}</span>
                <span className="text-[9px] font-sans text-stone-400 tracking-wider">
                  © 2001–2027 The Kumbh Cottages · Licensed Archival Photography
                </span>
              </div>

              {/* Schema.org ImageObject for Google Licensable Image & SEO */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ImageObject",
                    "contentUrl": `https://thekumbhcottages.com${currentMilestone.image}`,
                    "name": `${currentMilestone.event} (${currentMilestone.year})`,
                    "description": currentMilestone.imageAlt || currentMilestone.description,
                    "caption": currentMilestone.imageCaption || currentMilestone.event,
                    "license": currentMilestone.license || "https://thekumbhcottages.com/corporate-contact#licensing",
                    "acquireLicensePage": "https://thekumbhcottages.com/corporate-contact",
                    "creditText": currentMilestone.credit || "The Kumbh Cottages · Raamvan Retreats Global Venture",
                    "creator": {
                      "@type": "Organization",
                      "name": "The Kumbh Cottages",
                      "url": "https://thekumbhcottages.com"
                    },
                    "copyrightNotice": currentMilestone.copyright || "© 2001–2027 The Kumbh Cottages · A Raamvan Retreats Global Venture. All Rights Reserved."
                  })
                }}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
