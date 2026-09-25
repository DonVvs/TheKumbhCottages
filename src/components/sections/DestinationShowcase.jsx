import React from 'react';
import { ExternalLink, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { DESTINATIONS_PORTFOLIO } from '../../data/destinationsData';
import RefinedLiquidImage from '../3d/RefinedLiquidImage';
import SovereignAtmosphereCanvas from '../3d/SovereignAtmosphereCanvas';

export default function DestinationShowcase({ onOpenInquiry }) {
  return (
    <section id="destinations-showcase" className="py-20 sm:py-28 bg-[#FAF8F5] text-stone-900 border-b border-stone-200/80 relative">
      {/* Background WebGL Ambient Sandstone Light Sheen */}
      <SovereignAtmosphereCanvas />
      {/* Background Subtle Sandstone Grain Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#8C7043_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase font-sans tracking-[0.25em] text-swarna-700 font-medium mb-3.5">
            <span className="w-8 h-px bg-swarna-600/70" />
            <span>Sacred Dhams & Expedition Corridors</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 leading-[1.15] tracking-tight">
            Active Riverfront Sanctuaries & Portals
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans font-light mt-3.5 leading-relaxed">
            Four consecrated properties across India’s sacred Maha Kumbh circuits, each custom-engineered for acoustic silence, step-free elder ease, and 100% pure Annakshetra dining.
          </p>
        </div>

        {/* Belmond / Oberoi Hospitality Suites Showcase */}
        <div className="space-y-12 sm:space-y-16">
          {DESTINATIONS_PORTFOLIO.map((dest, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={dest.id}
                id={dest.id}
                className="luxury-card rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-500 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Frame with WebGL Silk Wave Refinement */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-lg overflow-hidden aspect-[16/10] bg-stone-900 border border-stone-200/80 shadow-md">
                      <RefinedLiquidImage
                        src={dest.image}
                        alt={dest.name}
                        aspectRatio="16/10"
                        className="rounded-lg"
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                        
                        {/* Floating Gilded Glass Badges */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium bg-[#0E0C0A]/90 text-swarna-300 px-3 py-1 rounded-sm border border-white/15 backdrop-blur-md shadow-sm">
                            {dest.badge}
                          </span>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-200 font-serif tracking-wide">
                          <span className="inline-flex items-center gap-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                            <MapPin className="w-3.5 h-3.5 text-swarna-400" />
                            {dest.river} · {dest.city}
                          </span>
                          <span className="font-mono text-[11px] text-swarna-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                            Cycle {dest.cycle}
                          </span>
                        </div>
                      </RefinedLiquidImage>
                    </div>
                  </div>

                  {/* Editorial Sanctuary Details */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <div className="inline-flex items-center gap-2 text-[10px] uppercase font-sans tracking-[0.25em] text-swarna-700 font-semibold mb-1.5">
                        <span>{dest.circuit}</span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-3xl font-normal text-stone-950 leading-snug">
                        {dest.headline}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-[15px] text-stone-600 font-sans font-light leading-relaxed">
                      {dest.details}
                    </p>

                    {/* Highlights List with Refined Gold Accents */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-700 font-sans">
                      {dest.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-swarna-600 mt-1.5 shrink-0" />
                          <span className="font-light text-stone-700 leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-wrap items-center gap-3.5">
                      {dest.isExternal ? (
                        <a
                          href={dest.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-md bg-stone-950 text-white hover:bg-swarna-500 hover:text-stone-950 transition-all duration-300 text-[11px] uppercase tracking-[0.18em] font-medium inline-flex items-center gap-2 shadow-xs cursor-pointer group/btn"
                        >
                          <span>Visit {dest.websiteDisplay}</span>
                          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </a>
                      ) : (
                        <button
                          onClick={() => onOpenInquiry(dest.name)}
                          className="px-6 py-3 rounded-md bg-stone-950 text-white hover:bg-swarna-500 hover:text-stone-950 transition-all duration-300 text-[11px] uppercase tracking-[0.18em] font-medium inline-flex items-center gap-2 shadow-xs cursor-pointer group/btn"
                        >
                          <span>Request Campus Dossier</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      )}

                      <button
                        onClick={() => onOpenInquiry(dest.name)}
                        className="px-6 py-3 rounded-md border border-stone-300 text-stone-800 hover:text-stone-950 hover:border-stone-900 text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-300 cursor-pointer hover:bg-stone-50"
                      >
                        Corporate Liaison
                      </button>
                    </div>

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

