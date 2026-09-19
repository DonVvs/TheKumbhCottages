import React from 'react';
import { ShieldCheck, Compass, Sparkles, Award } from 'lucide-react';
import { COMPANY_PROFILE } from '../../data/companyData';

export default function TheLineageStory() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] text-stone-900 border-b border-stone-200/80 relative overflow-hidden">
      {/* Background Subtle Sandstone Grain Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#8C7043_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Architectural Trust Credentials Bar (Oberoi & Aman Hospitality Ledger) */}
        <div className="border-b border-stone-200/90 pb-14 mb-16 sm:mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            <div className="group space-y-2 sm:border-r border-stone-200/90 sm:pr-6 transition-all duration-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-swarna-600 group-hover:scale-125 transition-transform duration-300" />
                <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal tracking-tight">2001–2027</div>
              </div>
              <div className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.22em] text-swarna-800 font-semibold">25 Years Lineage</div>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Pioneering sovereign riverfront sanctuaries across every continuous Maha Kumbh cycle.
              </p>
            </div>

            <div className="group space-y-2 sm:border-r border-stone-200/90 sm:pr-6 transition-all duration-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-swarna-600 group-hover:scale-125 transition-transform duration-300" />
                <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal tracking-tight">4 Sacred Dhams</div>
              </div>
              <div className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.22em] text-swarna-800 font-semibold">All-India Presence</div>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Nashik 2027 · Ujjain 2028 · Haridwar · Prayagraj.
              </p>
            </div>

            <div className="group space-y-2 sm:border-r border-stone-200/90 sm:pr-6 transition-all duration-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-swarna-600 group-hover:scale-125 transition-transform duration-300" />
                <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal tracking-tight">50,000+ Guests</div>
              </div>
              <div className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.22em] text-swarna-800 font-semibold">Distinguished Patronage</div>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Revered Acharyas, Dignitaries, Family Trusts & Global NRI Pilgrims.
              </p>
            </div>

            <div className="group space-y-2 transition-all duration-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-swarna-600 group-hover:scale-125 transition-transform duration-300" />
                <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-950 font-normal tracking-tight">Zero River Impact</div>
              </div>
              <div className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.22em] text-swarna-800 font-semibold">Ecological Seva</div>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                100% closed-loop bio-digesters protecting sacred river ghat waters.
              </p>
            </div>

          </div>
        </div>

        {/* Editorial Eyebrow & Headline Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase font-sans tracking-[0.25em] text-swarna-700 font-medium mb-3.5">
            <span className="w-8 h-px bg-swarna-600/70" />
            <span>Raamvan Retreats Directorate · Provenance & Lineage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 leading-[1.15] tracking-tight">
            A Quarter-Century of Sovereign Sacred Hospitality
          </h2>
        </div>

        {/* Top Editorial Narrative & Architectural Visual Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pb-16 sm:pb-20 border-b border-stone-200/80">
          
          {/* Left Column: Rich Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-serif italic text-lg sm:text-xl text-stone-800 leading-relaxed border-l-2 border-swarna-500/80 pl-5 py-1">
              "In 2001, on the sacred sands of Triveni Sangam, The Kumbh Cottages was founded under Raamvan Retreats with a singular conviction: spiritual pilgrimage should elevate the soul, never exhaust the body."
            </p>
            
            <div className="space-y-4 text-stone-600 text-sm sm:text-[15px] leading-relaxed font-sans font-light">
              <p>
                The Kumbh Mela represents humanity's greatest congregation of seekers, revered spiritual masters, and multi-generational families. Yet establishing weather-resilient, dignified sanctuary with authentic Vedic dining amidst seasonal river terrains requires decades of specialized civil and operational mastery.
              </p>

              <p>
                Operating as the dedicated sacred hospitality division of <strong className="font-medium text-stone-900">Raamvan Retreats</strong>, <strong className="font-medium text-stone-900">The Kumbh Cottages</strong> has engineered turnkey civil townships across India's four sacred Kumbh Dhams: <strong className="font-medium text-stone-900">Nashik (Godavari)</strong>, <strong className="font-medium text-stone-900">Ujjain (Shipra)</strong>, <strong className="font-medium text-stone-900">Haridwar (Ganga)</strong>, and our founding base in <strong className="font-medium text-stone-900">Prayagraj (Triveni Sangam)</strong>.
              </p>

              <p>
                From coordinating private hawan shalas for venerable Shankaracharyas and jurists to laying kilometers of step-free timber boardwalks for elders, our parent institution stands upon twenty-five unbroken years of sanctified trust and zero environmental compromise.
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Photography with Luxury Frame */}
          <div className="lg:col-span-5">
            <div className="relative group p-2 bg-white rounded-lg border border-stone-200/80 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)]">
              <div className="relative rounded-md overflow-hidden aspect-[4/3]">
                <img
                  src="/assets/real_camps/kumbh-cottages-elevated-riverbank-canvas-villas.webp"
                  alt="The Kumbh Cottages Sanctuary Grounds"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Gold Pill Badge */}
                <div className="absolute top-3 left-3 bg-[#0C0A08]/85 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-[10px] uppercase font-sans tracking-[0.16em] text-swarna-300">
                  Turnkey Canvas Enclave
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-[11px] text-stone-200 font-sans tracking-wide">
                  <span className="font-serif">Riverfront Sanctuary Grounds</span>
                  <span className="font-mono text-swarna-300">Continuous Seva Since 2001</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom: 4 Heritage Pillars (Aman / Belmond Editorial Card Grid) */}
        <div className="pt-16 sm:pt-20">
          <div className="flex items-center justify-between mb-10">
            <div className="text-[11px] uppercase font-sans tracking-[0.25em] text-swarna-800 font-semibold">
              The Institutional Pillars of Our Seva
            </div>
            <div className="hidden sm:block text-xs font-serif italic text-stone-500">
              Preserving Vedic Sanatana Dharma with Modern Civil Precision
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {COMPANY_PROFILE.pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="luxury-card p-6 sm:p-7 rounded-lg relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Accent Gold Top Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-swarna-500 transition-colors duration-500" />
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-swarna-700 font-semibold tracking-wider">
                      {`0${idx + 1}`}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-300 group-hover:bg-swarna-500 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="font-serif text-lg font-normal text-stone-950 leading-snug group-hover:text-swarna-900 transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs sm:text-[13px] text-stone-600 font-sans font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-stone-100 flex items-center text-[10px] uppercase tracking-[0.16em] text-stone-400 font-medium group-hover:text-swarna-700 transition-colors">
                  <span>Pillar Standard · Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
