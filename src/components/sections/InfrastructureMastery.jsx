import React from 'react';
import { ArrowRight, ShieldCheck, Wrench, Zap } from 'lucide-react';
import { INFRASTRUCTURE_CAPABILITIES } from '../../data/infrastructureData';

export default function InfrastructureMastery({ onOpenInquiry }) {
  return (
    <section className="py-20 sm:py-28 bg-[#0B0907] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Ambience / Subtle Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-swarna-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase font-sans tracking-[0.25em] text-swarna-400 font-medium mb-3.5">
            <span className="w-8 h-px bg-swarna-400/70" />
            <span>Turnkey Flood-Plain Civil Engineering</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.15] tracking-tight">
            Engineering 5-Star Temporary Townships on Seasonal Riverbeds
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-sans font-light mt-3.5 leading-relaxed">
            Over a quarter-century of pioneering rapid-deployment canvas architecture, acoustic insulation, subterranean electrification, and zero-runoff bio-digester sanitation.
          </p>
        </div>

        {/* 4 Architectural Capability Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {INFRASTRUCTURE_CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.id}
              className="luxury-dark-card p-8 sm:p-10 rounded-xl relative overflow-hidden flex flex-col justify-between group"
            >
              {/* Subtle top gold highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-swarna-400/80 transition-colors duration-500" />
              
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono text-xs text-swarna-400 font-semibold tracking-widest uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-swarna-400" />
                    Pillar 0{idx + 1}
                  </span>
                  <span className="font-mono text-[11px] text-swarna-300 bg-white/[0.04] px-3 py-1 rounded-sm border border-white/10">
                    {cap.stats}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-swarna-200 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-swarna-300/80 font-sans font-light mt-1 tracking-wide">
                    {cap.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 font-sans font-light leading-relaxed">
                  {cap.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/5 text-xs text-stone-400 font-sans">
                  {cap.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-swarna-400 text-xs">―</span>
                      <span className="font-light text-stone-300">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-stone-400 font-sans font-light group-hover:text-swarna-300 transition-colors">
                <span>Civil Capability · Certified</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Turnkey Institutional Banner (Aman Private Bespoke Hospitality Style) */}
        <div className="bg-gradient-to-r from-[#17130F] via-[#1A1612] to-[#14110E] p-8 sm:p-12 rounded-xl sm:rounded-2xl border border-swarna-500/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-swarna-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase font-sans tracking-[0.25em] text-swarna-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-swarna-400 animate-pulse" />
              <span>Institutional & Delegation Procurement</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              Bespoke Camps for Corporate Boards, Family Offices & Ashrams
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-sans font-light leading-relaxed">
              Complete turnkey site engineering, underground utilities, dedicated Yajnashala pandits, VIP green corridors, and CSR Section 135 bhandaras.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('Turnkey Camp Inquiry')}
            className="px-8 py-3.5 rounded-md bg-swarna-400 text-stone-950 hover:bg-swarna-300 transition-all duration-300 text-[11px] uppercase tracking-[0.18em] font-medium flex-shrink-0 shadow-lg cursor-pointer hover:shadow-swarna-500/20 relative z-10 flex items-center gap-2 group"
          >
            <span>Inquire for Turnkey Camp</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}

