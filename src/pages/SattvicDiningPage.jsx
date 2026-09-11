import React from 'react';
import SEOHead from '../components/common/SEOHead';
import { Sparkles, Utensils, ShieldCheck, Sun, Leaf, HeartHandshake, Award } from 'lucide-react';
import { DINING_HIGHLIGHTS, SAMPLE_MENU } from '../data/diningData';

export default function SattvicDiningPage({ onOpenBooking }) {
  return (
    <main className="pt-8 pb-20 bg-cream-50 text-espresso-950">
      <SEOHead
        title="Sattvic Annakshetra & Pure Desi Ghee Dining | TheKumbhCottages"
        description="Discover our sacred Annakshetra dining philosophy. 100% Gir cow A2 desi ghee, zero onion & garlic, strict Jain Chauvihar, and Vedic Ekadashi phalahar menus."
        canonical="https://thekumbhcottages.com/sattvic-dining-annakshetra"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kumkum-100 border border-kumkum-500/30 text-kumkum-700 text-xs font-serif font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>॥ अन्नदानं महादानम् · सात्विक रस रसोई ॥</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-950 tracking-tight">
            Sattvic Annakshetra & Consecrated Dining
          </h1>
          <p className="text-sm sm:text-base text-espresso-700 font-sans mt-3">
            Pure Gir Cow A2 Bilona Ghee · Zero Onion & Garlic · Dedicated Jain Chauvihar & Ekadashi Phalahar.
          </p>
        </div>

        {/* Feature Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-swarna-400/50 aspect-video">
              <img
                src="/assets/cottages/sattvic-dining.webp"
                alt="Royal Sattvic Annakshetra Darbar Thali"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950">
              The Vedic Philosophy of Sacred Bhojan
            </h2>
            <p className="text-sm text-espresso-800 leading-relaxed font-sans">
              In Sanatan tradition, the quality of thoughts originates from the purity of food (<em>आहारशुद्धौ सत्त्वशुद्धिः</em>). At The Kumbh Cottages, our culinary preparation is an act of spiritual upasana.
            </p>
            <p className="text-sm text-espresso-800 leading-relaxed font-sans">
              We source organic stone-ground flours, hand-churned Vedic A2 bilona ghee, and pristine mountain spices, avoiding all pungent (Tamasic/Rajasic) ingredients to maintain spiritual tranquility during your pilgrimage.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-swarna-200/50 border border-swarna-400/60 px-4 py-2 rounded-xl text-xs font-serif font-bold text-espresso-950">
                <ShieldCheck className="w-4 h-4 text-swarna-700" />
                <span>All Meals Included in Every Cottage Stay</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Annakshetra */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {DINING_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="temple-panel p-6 rounded-2xl border border-cream-300 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-swarna-500/20 text-swarna-800 flex items-center justify-center mb-3">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-espresso-950">
                  {item.title}
                </h3>
                <p className="text-xs text-espresso-700 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Daily Darbar Degustation */}
        <div className="temple-panel p-8 rounded-3xl border border-cream-300 mb-16">
          <h3 className="font-serif text-2xl font-bold text-espresso-950 text-center mb-8">
            Complete Daily Sattvic Gastronomy
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-cream-300 space-y-3">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-swarna-800 border-b border-cream-200 pb-2">
                <Sun className="w-5 h-5 text-kesar-500" />
                <span>Morning Jagran & Nectar</span>
              </div>
              <ul className="space-y-2.5 text-xs text-espresso-800">
                {SAMPLE_MENU.morning.map((dish, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-swarna-600 font-bold">✦</span>
                    <span>{dish}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-swarna-200/40 p-6 rounded-2xl border border-swarna-400/50 space-y-3">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-espresso-950 border-b border-swarna-300 pb-2">
                <Utensils className="w-5 h-5 text-swarna-700" />
                <span>Royal Darbar Midday Thali</span>
              </div>
              <ul className="space-y-2.5 text-xs text-espresso-900 font-medium">
                {SAMPLE_MENU.royalThali.map((dish, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-swarna-700 font-bold">✦</span>
                    <span>{dish}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-cream-300 space-y-3">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-swarna-800 border-b border-cream-200 pb-2">
                <Leaf className="w-5 h-5 text-emerald-600" />
                <span>Chauvihar & Vrat Phalahar</span>
              </div>
              <ul className="space-y-2.5 text-xs text-espresso-800">
                {SAMPLE_MENU.eveningPhalahar.map((dish, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-swarna-600 font-bold">✦</span>
                    <span>{dish}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Corporate CSR Section 135 Seva & Annadaan Banner */}
        <div className="bg-[#1A120B] text-white p-8 rounded-3xl border border-swarna-400/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-serif text-swarna-300 uppercase tracking-widest font-bold">
              <HeartHandshake className="w-4 h-4 text-kesar-400" />
              <span>CSR Section 135 Philanthropy Seva</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Sponsor Daily Sadhu Bhandara & Annadaan
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl font-sans">
              Corporate entities and individual devotees can partner with The Kumbh Cottages Seva Trust to feed over 5,000 visiting sadhus and pilgrims daily with 80G tax exemption.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="btn-darbar-gold px-6 py-3.5 rounded-xl text-xs sm:text-sm font-serif font-bold shadow-lg flex-shrink-0"
          >
            Inquire for Annadaan Seva
          </button>
        </div>

      </div>
    </main>
  );
}
