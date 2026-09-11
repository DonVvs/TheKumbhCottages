import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { DESTINATIONS_PORTFOLIO } from '../../data/destinationsData';

export default function DestinationShowcase({ onOpenInquiry }) {
  return (
    <section id="destinations-showcase" className="py-20 sm:py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase font-sans tracking-[0.25em] text-swarna-700 font-medium mb-3">
            <span className="w-6 h-px bg-swarna-600/60" />
            <span>Sacred Dhams & Expedition Corridors</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-stone-900 leading-[1.2] tracking-tight">
            Active Riverfront Sanctuaries & Portals
          </h2>
          <p className="text-sm text-stone-600 font-sans font-light mt-3 leading-relaxed">
            Four consecrated properties across India’s sacred Maha Kumbh circuits, each custom-engineered for acoustic silence, step-free elder ease, and 100% pure Annakshetra dining.
          </p>
        </div>

        {/* Clean Editorial Destinations List */}
        <div className="space-y-16 sm:space-y-20">
          {DESTINATIONS_PORTFOLIO.map((dest, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={dest.id}
                id={dest.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-14 sm:pb-18 border-b border-stone-200 last:border-b-0 last:pb-0"
              >
                
                {/* Visual */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-sm overflow-hidden aspect-[16/10] border border-stone-200 shadow-xs group">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.18em] font-sans font-medium bg-[#0E0C0A]/90 text-swarna-300 px-3 py-1 rounded-sm border border-white/10 backdrop-blur-xs">
                      {dest.badge}
                    </div>
                    <div className="absolute bottom-4 left-4 text-xs text-stone-200 font-serif tracking-wide">
                      {dest.river} · {dest.city}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <div className="text-[10px] uppercase font-sans tracking-[0.22em] text-swarna-700 font-semibold">
                      {dest.circuit}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mt-1.5 leading-snug">
                      {dest.headline}
                    </h3>
                  </div>

                  <p className="text-sm text-stone-600 font-sans font-light leading-relaxed">
                    {dest.details}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-stone-700 font-sans">
                    {dest.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <span className="text-swarna-700 text-xs">―</span>
                        <span className="font-light">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    {dest.isExternal ? (
                      <a
                        href={dest.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-sm bg-stone-950 text-white hover:bg-swarna-500 hover:text-stone-950 transition-all duration-300 text-[11px] uppercase tracking-[0.16em] font-medium inline-flex items-center gap-2 shadow-xs cursor-pointer"
                      >
                        <span>Visit {dest.websiteDisplay}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => onOpenInquiry(dest.name)}
                        className="px-6 py-2.5 rounded-sm bg-stone-950 text-white hover:bg-swarna-500 hover:text-stone-950 transition-all duration-300 text-[11px] uppercase tracking-[0.16em] font-medium inline-flex items-center gap-2 shadow-xs cursor-pointer"
                      >
                        <span>Request Campus Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <button
                      onClick={() => onOpenInquiry(dest.name)}
                      className="px-6 py-2.5 rounded-sm border border-stone-300 text-stone-700 hover:text-stone-950 hover:border-stone-900 text-[11px] uppercase tracking-[0.16em] font-medium transition-all duration-300 cursor-pointer"
                    >
                      Corporate Liaison
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

