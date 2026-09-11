import React from 'react';
import { INFRASTRUCTURE_CAPABILITIES } from '../../data/infrastructureData';

export default function InfrastructureMastery({ onOpenInquiry }) {
  return (
    <section className="py-20 sm:py-24 bg-[#14110E] text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase font-sans tracking-[0.25em] text-swarna-400 font-medium mb-3">
            <span className="w-6 h-px bg-swarna-400/60" />
            <span>Turnkey Flood-Plain Civil Engineering</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-[1.2] tracking-tight">
            Engineering 5-Star Temporary Townships on Seasonal Riverbeds
          </h2>
          <p className="text-sm text-stone-300 font-sans font-light mt-3 leading-relaxed">
            Over a quarter-century of pioneering rapid-deployment canvas architecture, acoustic insulation, subterranean electrification, and zero-runoff bio-digester sanitation.
          </p>
        </div>

        {/* 4 Architectural Capability Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {INFRASTRUCTURE_CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.id}
              className="p-8 rounded-sm bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-mono text-xs text-swarna-400 tracking-widest uppercase">
                    Pillar 0{idx + 1}
                  </span>
                  <span className="font-mono text-xs text-stone-300 bg-white/5 px-2.5 py-0.5 rounded-sm border border-white/10">
                    {cap.stats}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-white">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-swarna-300/80 font-sans font-light mt-0.5">
                    {cap.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 font-sans font-light leading-relaxed">
                  {cap.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-white/5 text-xs text-stone-400 font-sans">
                  {cap.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-swarna-400 text-xs">―</span>
                      <span className="font-light">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Turnkey Institutional Banner */}
        <div className="bg-[#1C1814] p-8 sm:p-10 rounded-sm border border-white/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <div className="text-[10px] uppercase font-sans tracking-[0.25em] text-swarna-400 font-medium">
              Institutional & Delegation Procurement
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
              Bespoke Camps for Corporate Boards, Family Offices & Ashrams
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-sans font-light leading-relaxed">
              Complete turnkey site engineering, underground utilities, dedicated Yajnashala pandits, VIP green corridors, and CSR Section 135 bhandaras.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('Turnkey Camp Inquiry')}
            className="px-7 py-3 rounded-sm bg-swarna-400 text-stone-950 hover:bg-swarna-300 transition-all duration-300 text-[11px] uppercase tracking-[0.16em] font-medium flex-shrink-0 shadow-xs cursor-pointer"
          >
            Inquire for Turnkey Camp
          </button>
        </div>

      </div>
    </section>
  );
}

