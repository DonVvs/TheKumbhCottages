import React, { useState } from 'react';
import { Sparkles, Maximize2, Bed, Eye, Check, ArrowRight, Shield } from 'lucide-react';
import { STAYS_DATA } from '../../data/staysData';
import { formatPrice } from '../../utils/priceFormatter';
import { TRANSLATIONS } from '../../data/translationsData';

export default function InteractiveSuiteExplorer({
  lang = 'en',
  currency = 'INR',
  onOpenBooking,
  onSelectStayDetail
}) {
  const [activeFilter, setActiveFilter] = useState('all');
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const filteredStays = STAYS_DATA.filter((stay) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'presidential' && (stay.id.includes('maharaja') || stay.id.includes('godavari'))) return true;
    if (activeFilter === 'cottage' && stay.id.includes('swiss')) return true;
    if (activeFilter === 'tent' && stay.id.includes('safari')) return true;
    return true;
  });

  return (
    <section className="py-20 bg-cream-100 text-espresso-950 border-b border-cream-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-swarna-500/15 border border-swarna-500/40 text-swarna-800 text-xs font-serif font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-swarna-600" />
            <span>॥ Sovereign Heritage Accommodations ॥</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 tracking-tight">
            {t.stays_heading}
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-sans mt-3">
            {t.stays_subheading}
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Sanctuaries' },
              { id: 'presidential', label: 'Presidential Suites & Villas' },
              { id: 'cottage', label: 'Swiss Cottages' },
              { id: 'tent', label: 'Glamping Safari Tents' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-serif transition-all ${
                  activeFilter === tab.id
                    ? 'bg-espresso-950 text-swarna-200 font-bold shadow-md'
                    : 'bg-white text-espresso-800 border border-cream-300 hover:border-swarna-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accommodation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStays.map((stay) => (
            <div
              key={stay.id}
              className="temple-panel rounded-3xl overflow-hidden shadow-lg border border-cream-300 hover:border-swarna-400/60 transition-all duration-500 flex flex-col justify-between group"
            >
              
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={stay.image}
                  alt={stay.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Top Badge */}
                <div className="absolute top-4 left-4 bg-espresso-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-swarna-400/50 text-swarna-200 text-xs font-serif font-semibold">
                  {stay.badge}
                </div>

                {/* Nightly Price Tag */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-cream-300 shadow-xl text-right">
                  <div className="font-mono font-bold text-lg text-espresso-950">
                    {formatPrice(stay.priceINR, currency)}
                  </div>
                  <div className="text-[10px] text-stone-500 font-sans">
                    / night ({t.tax_note})
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                
                <div>
                  <h3 className="font-serif text-2xl font-bold text-espresso-950 mb-1 group-hover:text-swarna-700 transition-colors">
                    {stay.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-espresso-700 font-sans line-clamp-2">
                    {stay.tagline}
                  </p>

                  {/* Key Specs Bar */}
                  <div className="grid grid-cols-3 gap-2 bg-cream-50 p-3 rounded-xl border border-cream-200 my-4 text-xs text-espresso-800">
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-swarna-600 flex-shrink-0" />
                      <span className="font-mono font-medium">{stay.area}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-swarna-600 flex-shrink-0" />
                      <span className="truncate">{stay.bed}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-swarna-600 flex-shrink-0" />
                      <span className="truncate">{stay.view}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-1.5 text-xs text-espresso-800">
                    {stay.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-swarna-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-cream-200 flex items-center gap-3">
                  <button
                    onClick={() => onSelectStayDetail(stay)}
                    className="flex-1 py-3 px-4 rounded-xl border border-cream-400 bg-white hover:bg-cream-50 text-espresso-950 text-xs sm:text-sm font-serif font-semibold transition-colors text-center"
                  >
                    {t.view_details}
                  </button>

                  <button
                    onClick={() => onOpenBooking(stay.id)}
                    className="flex-1 btn-darbar-gold py-3 px-4 rounded-xl text-xs sm:text-sm font-serif font-bold shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.instant_reserve}</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
