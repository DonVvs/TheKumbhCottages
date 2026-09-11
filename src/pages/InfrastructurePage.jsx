import React from 'react';
import SEOHead from '../components/common/SEOHead';
import { Building2, Utensils, HeartPulse, Leaf } from 'lucide-react';
import { INFRASTRUCTURE_CAPABILITIES } from '../data/infrastructureData';
import RelatedGuidesWidget from '../components/common/RelatedGuidesWidget';

export default function InfrastructurePage({ onOpenInquiry }) {
  const iconMap = {
    Building2: Building2,
    Utensils: Utensils,
    HeartPulse: HeartPulse,
    Leaf: Leaf
  };

  return (
    <main className="pt-6 pb-16 bg-[#FAF8F5] text-stone-900">
      <SEOHead
        title="Turnkey Infrastructure & Annakshetra Capabilities | TheKumbhCottages"
        description="Learn how TheKumbhCottages engineers 5-star temporary flood-plain townships, 100% Desi Ghee Annakshetra dining, and step-free elder mobility across sacred riverbanks."
        canonical="https://thekumbhcottages.com/capabilities-infrastructure"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Page Header */}
        <div className="max-w-2xl mb-8">
          <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-swarna-700 font-medium mb-1.5">
            Engineering Mastery
          </div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
            Turnkey Infrastructure & Hospitality Capabilities
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-sans font-light mt-1.5">
            Proprietary engineering, underground electrical grids, pure Vedic Annakshetra kitchens, and zero-discharge environmental sanitation.
          </p>
        </div>

        {/* 4 Clean Capability Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-10">
          {INFRASTRUCTURE_CAPABILITIES.map((cap) => {
            const IconComponent = iconMap[cap.icon] || Building2;
            return (
              <div
                key={cap.id}
                className="bg-white p-5 rounded-lg border border-stone-200/90 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded bg-stone-100 text-stone-700 flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[11px] text-stone-500 font-medium">
                      {cap.stats}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-serif text-base font-normal text-stone-900">
                      {cap.title}
                    </h2>
                    <p className="text-[11px] text-stone-500 font-sans font-light">
                      {cap.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                    {cap.description}
                  </p>

                  <div className="space-y-1 pt-1.5 border-t border-stone-100 text-[11px] text-stone-600 font-sans font-light">
                    {cap.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-1">
                        <span className="text-swarna-600 text-[10px]">✦</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist Turnkey Banner */}
        <div className="bg-[#120E0A] text-white p-5 sm:p-6 rounded-lg border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-[9px] uppercase font-sans tracking-widest text-swarna-400 font-medium">
              Institutional Solutions
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-light text-white">
              Partner with The Kumbh Cottages Directorate
            </h3>
            <p className="text-xs text-stone-400 font-sans font-light max-w-lg">
              Turnkey civil execution, underground electrical grids, Annakshetra dining, and VIP security liaisons for corporate groups, spiritual ashrams, and state delegations.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry()}
            className="btn-darbar-gold px-4 py-2 rounded text-[11px] uppercase tracking-wider font-medium flex-shrink-0"
          >
            Inquire for Turnkey Camp
          </button>
        </div>

      </div>

      <div className="mt-12">
        <RelatedGuidesWidget
          title="Infrastructure, Dining & Accessibility Guides"
          subtitle="Explore the science of A2 Gir cow bilona ghee, step-free timber boardwalks, and winter insulation."
        />
      </div>
    </main>
  );
}
