import React from 'react';
import { ShieldCheck, Quote } from 'lucide-react';
import { DIGNITARY_TESTIMONIALS, INSTITUTIONAL_CREDENTIALS } from '../../data/institutionalTrustData';

export default function InstitutionalAuthority() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] text-stone-900 border-b border-stone-200/80 relative overflow-hidden">
      {/* Background Subtle Sandstone Grain Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#8C7043_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase font-sans tracking-[0.25em] text-swarna-700 font-medium mb-3.5">
            <span className="w-8 h-px bg-swarna-600/70" />
            <span>Institutional Trust & Seva Lineage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 leading-[1.15] tracking-tight">
            A Quarter-Century of Sanctified Trust (2001–Present)
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans font-light mt-3.5 leading-relaxed">
            Trusted by venerable acharyas, high court jurists, corporate delegations, and over 50,000 multi-generational families across 25 years of continuous service.
          </p>
        </div>

        {/* Dignitary Testimonials (Aman/Oberoi Editorial Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16 pb-16 border-b border-stone-200/80">
          {DIGNITARY_TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="luxury-card p-8 sm:p-10 rounded-xl relative flex flex-col justify-between group overflow-hidden"
            >
              {/* Gold Top Border on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-swarna-500 transition-colors duration-500" />
              
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-swarna-600/40 group-hover:text-swarna-600/70 transition-colors" />
                <blockquote className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed">
                  "{test.quote}"
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-serif font-medium text-stone-950 text-base">
                    {test.name}
                  </div>
                  <div className="text-xs text-stone-500 font-sans font-light mt-0.5">
                    {test.title} · {test.organization}
                  </div>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-wider text-swarna-800 bg-swarna-500/15 border border-swarna-500/30 px-3 py-1 rounded-sm">
                  {test.cycles}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Credentials Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {INSTITUTIONAL_CREDENTIALS.map((cred, idx) => (
            <div
              key={idx}
              className="space-y-2 p-4 rounded-lg bg-stone-50/70 border border-stone-200/70 hover:border-swarna-500/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 text-swarna-700">
                <ShieldCheck className="w-4 h-4 text-swarna-600 shrink-0" />
                <span className="font-serif text-sm font-medium text-stone-950">{cred.title}</span>
              </div>
              <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">{cred.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

