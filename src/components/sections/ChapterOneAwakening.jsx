import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../../data/translationsData';

export default function ChapterOneAwakening({ lang = 'en' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const STATS = [
    {
      number: "25+",
      label: "Years of Heritage",
      subtext: "Continuously serving devotees since 2001 across all 4 Maha Kumbh Dhams."
    },
    {
      number: "28",
      label: "Acre Sovereign Sanctuary",
      subtext: "Secured riverfront layout with insulated weather-proof cottages & timber boardwalks."
    },
    {
      number: "100%",
      label: "Pure Gir Cow Desi Ghee",
      subtext: "Vedic Annakshetra dining with zero onion, zero garlic, and strict Jain Chauvihar."
    },
    {
      number: "50,000+",
      label: "Pilgrims Consecrated",
      subtext: "Devotees, venerable acharyas, and global families hosted with 99.4% satisfaction."
    }
  ];

  return (
    <section className="py-20 bg-cream-50 text-espresso-950 border-b border-cream-300 relative overflow-hidden">
      
      {/* Subtle Background Jharokha Motif */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Storytelling */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kesar-100 border border-kesar-500/30 text-kesar-600 text-xs font-serif font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.chapter1_badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso-950 leading-[1.2]">
              {t.chapter1_title}
            </h2>

            <div className="space-y-4 text-espresso-800 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                {t.chapter1_text}
              </p>
              <p>
                Pilgrimage during the holy Maha Kumbh is a sacred once-in-twelve-years tapasya. Yet, the spiritual bliss of snan should never be compromised by exhaustion or logistical distress. At <strong>The Kumbh Cottages</strong>, our founders envisioned a sanctuary where venerable acharyas, global devotees, and multi-generational families could dwell in serenity, dignity, and absolute hygiene.
              </p>
              <p>
                From step-free senior citizen access to private green-corridor transit toward Ramkund, every touchpoint is consecrated with devotion.
              </p>
            </div>

            {/* Inclusions Pill Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-espresso-900 bg-white p-3 rounded-xl border border-cream-300 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-swarna-600 flex-shrink-0" />
                <span>24/7 Dedicated Senior Citizen Care</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-espresso-900 bg-white p-3 rounded-xl border border-cream-300 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-swarna-600 flex-shrink-0" />
                <span>Ramkund VIP Green Corridor Escorts</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-espresso-900 bg-white p-3 rounded-xl border border-cream-300 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-swarna-600 flex-shrink-0" />
                <span>Trimbakeshwar Sanctum Coordination</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-espresso-900 bg-white p-3 rounded-xl border border-cream-300 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-swarna-600 flex-shrink-0" />
                <span>100% Desi Ghee Annakshetra Dining</span>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Stat Trust Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="temple-panel temple-card-hover p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-3xl sm:text-4xl font-bold text-swarna-700 tracking-tight mb-1">
                    {stat.number}
                  </div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-espresso-950 mb-2">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-xs text-espresso-700 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
