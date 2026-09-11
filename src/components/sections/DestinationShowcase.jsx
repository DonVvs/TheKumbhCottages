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
        <div className="space-y-12 sm:space-y-16">
          {DESTINATIONS_PORTFOLIO.map((dest, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={dest.id}
                id={dest.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 sm:pb-16 border-b border-stone-200/80 last:border-b-0 last:pb-0"
              >
                
                {/* Visual */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-lg overflow-hidden aspect-[16/10] border border-stone-300/80 shadow-xs group">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-mono bg-[#0D0906]/90 text-swarna-300 px-3 py-1 rounded border border-swarna-400/20">
                      {dest.badge}
                    </div>
                    <div className="absolute bottom-3 left-3 text-xs text-stone-200 font-serif">
                      {dest.river} · {dest.city}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-swarna-700 font-medium">
                      {dest.circuit}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-stone-900 mt-1 leading-snug">
                      {dest.headline}
                    </h3>
                  </div>

                  <p className="text-sm text-stone-600 font-sans font-light leading-relaxed">
                    {dest.details}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-stone-700 font-sans font-light">
                    {dest.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <span className="text-swarna-600 text-xs">✦</span>
                        <span>{h}</span>
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
                        className="px-5 py-2.5 rounded bg-stone-900 text-white hover:bg-swarna-500 hover:text-stone-950 transition-colors text-xs uppercase tracking-wider font-medium inline-flex items-center gap-2 shadow-xs"
                      >
                        <span>Visit {dest.websiteDisplay}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => onOpenInquiry(dest.name)}
                        className="px-5 py-2.5 rounded bg-stone-900 text-white hover:bg-swarna-500 hover:text-stone-950 transition-colors text-xs uppercase tracking-wider font-medium inline-flex items-center gap-2 shadow-xs"
                      >
                        <span>Request Campus Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <button
                      onClick={() => onOpenInquiry(dest.name)}
                      className="px-5 py-2.5 rounded border border-stone-300 text-stone-700 hover:text-stone-950 hover:border-stone-500 text-xs uppercase tracking-wider font-normal transition-colors"
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

