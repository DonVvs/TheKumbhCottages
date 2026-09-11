import React from 'react';
import { Sparkles, Utensils, ShieldCheck, Sun, Leaf, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { DINING_HIGHLIGHTS, SAMPLE_MENU } from '../../data/diningData';
import { TRANSLATIONS } from '../../data/translationsData';

export default function AnnakshetraSection({ lang = 'en' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <section className="py-20 bg-cream-100 text-espresso-950 border-b border-cream-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sanskrit Shloka Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kumkum-100 border border-kumkum-500/30 text-kumkum-700 text-xs font-serif font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-kumkum-600" />
            <span>॥ अन्नं वै प्राणाः · अन्नं परब्रह्म स्वरूपम् ॥</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 tracking-tight">
            {t.dining_heading}
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-sans mt-3">
            {t.dining_subheading}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Image of Royal Sattvic Platter */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-swarna-400/50 aspect-video">
              <img
                src="/assets/cottages/sattvic-dining.webp"
                alt="Sovereign Royal Sattvic Annakshetra Thali"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase font-serif text-swarna-300 font-bold">Consecrated Culinary Seva</span>
                <h4 className="font-serif text-lg font-bold">Royal Darbar Thali in Pure Bilona Ghee</h4>
              </div>
            </div>

            {/* Floating Quality Seal */}
            <div className="absolute -top-4 -right-4 bg-[#120E0A] text-white p-4 rounded-2xl border border-swarna-400/60 shadow-2xl hidden sm:flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-swarna-400" />
              <div>
                <div className="font-serif font-bold text-xs text-swarna-200">100% Certified Sattvic</div>
                <div className="text-[10px] text-stone-400">Zero Onion · Zero Garlic</div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Dietary Commitments */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-espresso-950">
              Spiritual Nourishment Aligned with Vedic Shastras
            </h3>
            <p className="text-sm text-espresso-800 leading-relaxed font-sans">
              At The Kumbh Cottages, our kitchens are treated as consecrated sanctums. Every dish is cooked in authentic brass (Kansa) and cast iron vessels by traditionally initiated Brahmin cooks who chant auspicious mantras during preparation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {DINING_HIGHLIGHTS.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-2xl border border-cream-300 shadow-sm space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-kesar-500" />
                    <h4 className="font-serif font-bold text-sm text-espresso-950">{item.title}</h4>
                  </div>
                  <p className="text-xs text-espresso-700 leading-relaxed font-sans">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sample Course Highlights Grid */}
        <div className="temple-panel p-8 rounded-3xl border border-cream-300">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-serif text-swarna-700 font-bold tracking-widest">
              ✦ Daily Darbar Degustation ✦
            </span>
            <h3 className="font-serif text-2xl font-bold text-espresso-950 mt-1">
              Sample Annakshetra Menu
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            
            {/* Morning */}
            <div className="bg-white/80 p-5 rounded-2xl border border-cream-300 space-y-3">
              <div className="flex items-center gap-2 text-swarna-800 font-serif font-bold text-sm border-b border-cream-200 pb-2">
                <Sun className="w-4 h-4 text-kesar-500" />
                <span>Morning Jagran & Nectar</span>
              </div>
              <ul className="space-y-2 text-espresso-800">
                {SAMPLE_MENU.morning.map((dish, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-swarna-600 mt-0.5">✦</span>
                    <span>{dish}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Royal Thali */}
            <div className="bg-swarna-200/30 p-5 rounded-2xl border border-swarna-400/40 space-y-3">
              <div className="flex items-center gap-2 text-espresso-950 font-serif font-bold text-sm border-b border-swarna-300 pb-2">
                <Utensils className="w-4 h-4 text-swarna-700" />
                <span>Royal Darbar Midday Thali</span>
              </div>
              <ul className="space-y-2 text-espresso-900 font-medium">
                {SAMPLE_MENU.royalThali.map((dish, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-swarna-700 mt-0.5">✦</span>
                    <span>{dish}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Evening */}
            <div className="bg-white/80 p-5 rounded-2xl border border-cream-300 space-y-3">
              <div className="flex items-center gap-2 text-swarna-800 font-serif font-bold text-sm border-b border-cream-200 pb-2">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span>Chauvihar & Vrat Phalahar</span>
              </div>
              <ul className="space-y-2 text-espresso-800">
                {SAMPLE_MENU.eveningPhalahar.map((dish, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-swarna-600 mt-0.5">✦</span>
                    <span>{dish}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
