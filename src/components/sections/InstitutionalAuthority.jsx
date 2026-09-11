import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { DIGNITARY_TESTIMONIALS, INSTITUTIONAL_CREDENTIALS } from '../../data/institutionalTrustData';

export default function InstitutionalAuthority() {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase font-sans tracking-[0.25em] text-swarna-700 font-medium mb-3">
            <span className="w-6 h-px bg-swarna-600/60" />
            <span>Institutional Trust & Seva Lineage</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-900 leading-[1.2] tracking-tight">
            A Quarter-Century of Sanctified Trust (2001–Present)
          </h2>
          <p className="text-sm text-stone-600 font-sans font-light mt-3 leading-relaxed">
            Trusted by venerable acharyas, high court jurists, corporate delegations, and over 50,000 multi-generational families across 25 years of continuous service.
          </p>
        </div>

        {/* Dignitary Testimonials (Clean Editorial Grid - No Boxy Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-16 pb-16 border-b border-stone-200/80">
          {DIGNITARY_TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="space-y-4 flex flex-col justify-between"
            >
              <blockquote className="font-serif italic text-base sm:text-lg text-stone-800 leading-relaxed border-l-2 border-swarna-500/70 pl-4 py-1">
                "{test.quote}"
              </blockquote>

              <div className="pt-2 flex items-center justify-between text-xs">
                <div>
                  <div className="font-serif font-medium text-stone-900 text-sm">
                    {test.name}
                  </div>
                  <div className="text-[11px] text-stone-500 font-sans font-light">
                    {test.title} · {test.organization}
                  </div>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-wider text-swarna-700 bg-stone-100 px-2.5 py-1 rounded">
                  {test.cycles}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Credentials Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTITUTIONAL_CREDENTIALS.map((cred, idx) => (
            <div
              key={idx}
              className="space-y-1.5"
            >
              <div className="flex items-center gap-1.5 text-swarna-700">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-serif text-sm font-medium text-stone-900">{cred.title}</span>
              </div>
              <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">{cred.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

