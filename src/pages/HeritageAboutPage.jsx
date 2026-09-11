import React from 'react';
import SEOHead from '../components/common/SEOHead';
import { Sparkles, Award, ShieldCheck, HeartHandshake, Compass, CheckCircle2, Calendar } from 'lucide-react';
import { TIMELINE_DATA } from '../data/timelineData';

export default function HeritageAboutPage({ onOpenBooking }) {
  return (
    <main className="pt-8 pb-20 bg-cream-50 text-espresso-950">
      <SEOHead
        title="25 Years of Heritage (2001–2027) | TheKumbhCottages"
        description="Learn the history of TheKumbhCottages, serving over 50,000 devotees continuously since 2001 across Prayagraj, Nashik, Haridwar, and Ujjain Maha Kumbh festivals."
        canonical="https://thekumbhcottages.com/heritage-legacy-since-2001"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-swarna-500/15 border border-swarna-500/40 text-swarna-800 text-xs font-serif font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>॥ अनवरत सेवा परंपरा · वर्ष २००१ से ॥</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-950 tracking-tight">
            25 Years of Sacred Heritage (2001–2027)
          </h1>
          <p className="text-sm sm:text-base text-espresso-700 font-sans mt-3">
            The story of an institution founded on the sacred banks of Triveni Sangam, now bringing sovereign royal hospitality to Nashik Simhastha 2027.
          </p>
        </div>

        {/* Narrative Origin Chapter */}
        <div className="temple-panel p-8 sm:p-12 rounded-3xl border border-cream-300 shadow-xl mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase font-serif text-kesar-600 font-bold tracking-widest">
              Our Spiritual Lineage
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950">
              Transforming Sacred Pilgrimage into Tranquil Tapasya
            </h2>
            <p className="text-sm text-espresso-800 leading-relaxed font-sans">
              In 2001, during the historic Prayagraj Maha Kumbh, our founders observed a critical gap: elderly devotees and revered spiritual teachers often had to endure extreme cold, unhygienic sanitation, and chaotic logistics just to fulfill their sacred vows of holy snan.
            </p>
            <p className="text-sm text-espresso-800 leading-relaxed font-sans">
              <strong>The Kumbh Cottages</strong> was established with an uncompromising vow: to construct weather-proof, hygienic, insulated sanctuaries where every pilgrim is served as a living manifestation of divinity (<em>अतिथिदेवो भव</em>).
            </p>
            <p className="text-sm text-espresso-800 leading-relaxed font-sans">
              Over the last quarter of a century, we have expanded to all four sacred Maha Kumbh cities—Prayagraj, Nashik, Haridwar, and Ujjain—hosting dignitaries, justices, corporate leaders, and over 50,000 multi-generational families.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-swarna-400/50 aspect-square bg-[#120E0A] flex items-center justify-center p-8">
              <img
                src="/assets/brand/emblem.webp"
                alt="25 Year Seal"
                className="w-48 h-48 sm:w-60 sm:h-60 rounded-full border-4 border-swarna-400/80 shadow-2xl p-2"
              />
            </div>
          </div>
        </div>

        {/* 2001-2027 Comprehensive Milestone Timeline */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950 text-center mb-10">
            Our 25-Year Pilgrimage Milestones
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {TIMELINE_DATA.map((milestone, index) => (
              <div
                key={index}
                className="temple-panel temple-card-hover p-6 rounded-2xl border border-cream-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-espresso-950 text-swarna-200 flex flex-col items-center justify-center border border-swarna-400/40 flex-shrink-0 shadow-md">
                    <span className="font-mono font-bold text-base leading-none">{milestone.year}</span>
                    <span className="text-[9px] uppercase tracking-wider text-swarna-400 font-sans mt-0.5">Est.</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif font-bold text-base sm:text-lg text-espresso-950">
                        {milestone.title}
                      </h3>
                      <span className="text-[10px] text-kesar-600 bg-kesar-100 font-semibold px-2 py-0.5 rounded-full font-mono">
                        {milestone.location}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-espresso-700 font-sans mt-1 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right flex-shrink-0 bg-cream-100 px-3 py-1.5 rounded-xl border border-cream-200">
                  <span className="text-xs font-mono font-bold text-swarna-800">
                    {milestone.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
