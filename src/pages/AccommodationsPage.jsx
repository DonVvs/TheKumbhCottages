import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import { Sparkles, Maximize2, Bed, Users, Eye, Check, ShieldCheck, ArrowRight, Filter } from 'lucide-react';
import { STAYS_DATA } from '../data/staysData';
import { formatPrice } from '../utils/priceFormatter';
import AuthenticCampGallery from '../components/sections/AuthenticCampGallery';

export default function AccommodationsPage({
  currency = 'INR',
  onOpenBooking,
  onSelectStayDetail
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredStays = STAYS_DATA.filter((stay) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'presidential' && stay.id.includes('maharaja')) return true;
    if (selectedCategory === 'villa' && stay.id.includes('godavari')) return true;
    if (selectedCategory === 'cottage' && stay.id.includes('swiss')) return true;
    if (selectedCategory === 'tent' && stay.id.includes('safari')) return true;
    return true;
  });

  return (
    <main className="pt-8 pb-20 bg-cream-50 text-espresso-950">
      <SEOHead
        title="Luxury Swiss Cottages & Presidential Suites | TheKumbhCottages"
        description="Explore our insulated luxury Swiss cottages, Presidential Godavari Villas, and Maharaja Royal Suites with 100% Desi Ghee Annakshetra dining and 24/7 personal khidmatgar."
        canonical="https://thekumbhcottages.com/luxury-cottages-suites"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-swarna-500/15 border border-swarna-500/40 text-swarna-800 text-xs font-serif font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>॥ Sovereign Heritage Lodging Portfolio ॥</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-950 tracking-tight">
            Luxury Cottages & Presidential Suites
          </h1>
          <p className="text-sm sm:text-base text-espresso-700 font-sans mt-3">
            Constructed with acoustic triple-layer insulation, Italian marble bathrooms, and dedicated step-free boardwalks on the banks of sacred Godavari.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: 'all', label: 'Complete Collection' },
              { id: 'presidential', label: 'Maharaja Suite' },
              { id: 'villa', label: 'Godavari Villa' },
              { id: 'cottage', label: 'Royal Swiss Cottages' },
              { id: 'tent', label: 'Safari Glamping' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-serif transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-espresso-950 text-swarna-200 font-bold shadow-md'
                    : 'bg-white text-espresso-800 border border-cream-300 hover:border-swarna-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Stay List */}
        <div className="space-y-12">
          {filteredStays.map((stay, index) => (
            <div
              key={stay.id}
              className="temple-panel rounded-3xl overflow-hidden shadow-xl border border-cream-300 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 items-center"
            >
              
              {/* Image & Gallery Thumbnail Strip */}
              <div className="lg:col-span-6 space-y-3">
                <div className="relative rounded-2xl overflow-hidden aspect-video border border-cream-300 shadow-md group">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-espresso-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-swarna-400/40 text-swarna-200 text-xs font-serif">
                    {stay.badge}
                  </div>
                </div>

                {/* Micro specs row */}
                <div className="grid grid-cols-4 gap-2 text-center text-[11px] bg-white p-2.5 rounded-xl border border-cream-200 text-espresso-800 font-sans">
                  <div><strong>Area:</strong> {stay.area}</div>
                  <div><strong>Bed:</strong> {stay.bed.split(' ')[0]}</div>
                  <div><strong>Cap:</strong> {stay.capacity}</div>
                  <div className="truncate"><strong>View:</strong> Godavari</div>
                </div>
              </div>

              {/* Information & Action Section */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-kesar-600 font-bold font-mono">
                    {stay.category}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950 mt-0.5">
                    {stay.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-espresso-700 font-sans mt-2 leading-relaxed">
                    {stay.description}
                  </p>
                </div>

                {/* Full Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-espresso-800 pt-2 border-t border-cream-200">
                  {stay.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-swarna-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Booking Triggers */}
                <div className="pt-4 border-t border-cream-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-mono font-bold text-2xl text-espresso-950">
                      {formatPrice(stay.priceINR, currency)}
                      <span className="text-xs font-sans text-stone-500 font-normal"> / night</span>
                    </div>
                    <div className="text-[10px] text-stone-500 font-sans">
                      * Includes 100% Desi Ghee Annakshetra Dining
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onSelectStayDetail(stay)}
                      className="px-4 py-3 rounded-xl border border-cream-400 bg-white hover:bg-cream-100 text-espresso-950 text-xs font-serif font-semibold"
                    >
                      Specifications
                    </button>

                    <button
                      onClick={() => onOpenBooking(stay.id)}
                      className="btn-darbar-gold px-6 py-3 rounded-xl text-xs sm:text-sm font-serif font-bold shadow-lg flex items-center gap-1.5"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Reserve Stay</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Real Photography Visual Catalog */}
      <div className="mt-16">
        <AuthenticCampGallery initialCategory="interiors" />
      </div>
    </main>
  );
}
