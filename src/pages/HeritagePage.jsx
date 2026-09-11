import React from 'react';
import SEOHead from '../components/common/SEOHead';
import { MILESTONES_CHRONOLOGY } from '../data/companyData';
import RelatedGuidesWidget from '../components/common/RelatedGuidesWidget';

export default function HeritagePage() {
  return (
    <main className="pt-6 pb-16 bg-[#FAF8F5] text-stone-900">
      <SEOHead
        title="25 Years of Sacred Heritage (2001–2027) | TheKumbhCottages"
        description="The 25-year journey of TheKumbhCottages. From 20 Swiss cottages in Prayagraj (2001) to sovereign luxury villages across Nashik, Ujjain, and Haridwar."
        canonical="https://thekumbhcottages.com/heritage-since-2001"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Page Header */}
        <div className="max-w-2xl mb-8">
          <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-swarna-700 font-medium mb-1.5">
            Provenance (2001–2027)
          </div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
            Our 25-Year Operating Lineage
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-sans font-light mt-1.5">
            The pioneering story of India's preeminent sovereign sacred hospitality and flood-plain infrastructure group.
          </p>
        </div>

        {/* Narrative Chapter */}
        <div className="bg-white rounded-lg border border-stone-200/90 p-5 sm:p-8 mb-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-3">
            <h2 className="font-serif text-lg sm:text-xl font-normal text-stone-900">
              Transforming Sacred Pilgrimage into Tranquil Tapasya
            </h2>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-sans font-light leading-relaxed">
              <p>
                In 2001, during the historic Prayagraj Maha Kumbh, our founders recognized that devotees journeying from across the world were forced to endure extreme cold, unhygienic conditions, and logistical distress just to complete their sacred snan.
              </p>
              <p>
                <strong>The Kumbh Cottages</strong> was established with an unbending vow: to construct weather-proof, hygienic, insulated sanctuaries where every pilgrim is served as a living manifestation of divinity (<em>अतिथिदेवो भव</em>).
              </p>
              <p>
                Over the last quarter of a century, our operations have expanded to all four sacred Maha Kumbh cities—<strong>Nashik, Ujjain, Haridwar, and Prayagraj</strong>—hosting dignitaries, jurists, corporate leaders, and over 50,000 multi-generational families.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center p-3">
            <img
              src="/assets/brand/emblem.webp"
              alt="25 Year Seal"
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-swarna-400/40 p-1 bg-[#120E0A] object-cover"
            />
          </div>
        </div>

        {/* 2001-2027 Milestone List */}
        <div className="space-y-3 max-w-4xl mx-auto">
          <h3 className="font-serif text-lg font-normal text-stone-900 text-center mb-5">
            Chronology of Continuous Operations
          </h3>

          {MILESTONES_CHRONOLOGY.map((milestone, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg border border-stone-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded bg-stone-100 text-stone-800 flex items-center justify-center font-mono text-xs font-medium flex-shrink-0">
                  {milestone.year}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif font-medium text-xs sm:text-sm text-stone-900">
                      {milestone.event}
                    </h4>
                    <span className="text-[10px] text-stone-500 font-mono">
                      · {milestone.location}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 font-sans font-light mt-0.5 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>

              <div className="sm:text-right flex-shrink-0 text-[10px] font-mono text-stone-500">
                {milestone.scale}
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="mt-12">
        <RelatedGuidesWidget
          title="Sacred Traditions & Kalpavas Heritage"
          subtitle="Explore the 30-day vow of Kalpavas and the ancient monastic history of the 13 Akharas."
        />
      </div>
    </main>
  );
}
