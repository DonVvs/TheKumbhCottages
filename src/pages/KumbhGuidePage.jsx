import React from 'react';
import SEOHead from '../components/common/SEOHead';
import { Sparkles, Calendar, MapPin, Compass, ShieldCheck, Clock, Users, ArrowRight } from 'lucide-react';

export default function KumbhGuidePage({ onOpenBooking }) {
  const SHAHI_SNAN_DATES = [
    {
      title: "First Royal Shahi Snan (Dhwajarohan & Simhastha Parva)",
      date: "August 2027",
      tithi: "Shravan Shukla Purnima / Simha Guru Pravesh",
      significance: "Grand ceremonial flag hoisting by Akharas and holy dip marking the formal commencement of Simhastha Kumbh.",
      transit: "Reserved VIP Ghat Platform via The Kumbh Cottages Green Corridor"
    },
    {
      title: "Second Royal Shahi Snan (Kushavarta & Ramkund Maha Snan)",
      date: "September 2027",
      tithi: "Bhadrapada Krishna Amavasya (Somvati Amavasya)",
      significance: "The most auspicious astrological alignment with millions taking the sacred dip at Ramkund and Trimbakeshwar.",
      transit: "Escorted VIP Golf Cart Shuttle to Ramkund"
    },
    {
      title: "Third Royal Shahi Snan (Rishi Panchami / Vaman Jayanti)",
      date: "September 2027",
      tithi: "Bhadrapada Shukla Dwadashi",
      significance: "Culmination of royal royal processions, Nagar Pravesh, and mega sadhu bhandara.",
      transit: "Private Escort to Trimbak Sanctum"
    }
  ];

  return (
    <main className="pt-8 pb-20 bg-cream-50 text-espresso-950">
      <SEOHead
        title="Nashik Simhastha 2027 Guide & Shahi Snan Dates | TheKumbhCottages"
        description="Official pilgrimage guide to Nashik Simhastha 2027. Auspicious Shahi Snan dates, Ramkund green corridors, Trimbakeshwar Jyotirlinga rituals, and VIP cottage passes."
        canonical="https://thekumbhcottages.com/kumbh-guide-shahi-snan-dates"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kesar-100 border border-kesar-500/30 text-kesar-700 text-xs font-serif font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>॥ नाशिक त्र्यंबकेश्वर सिंहस्थ २०२७ महाकुंभ ॥</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-950 tracking-tight">
            Nashik Simhastha 2027 Guide & Shahi Snan Dates
          </h1>
          <p className="text-sm sm:text-base text-espresso-700 font-sans mt-3">
            A comprehensive pilgrimage manual to the once-in-12-years celestial confluence on the sacred banks of River Godavari.
          </p>
        </div>

        {/* Shahi Snan Dates Calendar Cards */}
        <div className="space-y-6 mb-16">
          <h2 className="font-serif text-2xl font-bold text-espresso-950 border-l-4 border-swarna-500 pl-3">
            Sacred Shahi Snan & Auspicious Muhurtas
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SHAHI_SNAN_DATES.map((snan, index) => (
              <div
                key={index}
                className="temple-panel temple-card-hover p-6 rounded-3xl border border-cream-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-kesar-600 bg-kesar-100 px-3 py-1 rounded-full">
                      {snan.date}
                    </span>
                    <span className="text-[11px] font-serif text-swarna-700 font-bold">Event 0{index + 1}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-espresso-950">
                    {snan.title}
                  </h3>

                  <div className="text-xs font-serif italic text-swarna-800 bg-swarna-200/40 p-2.5 rounded-xl border border-swarna-300">
                    {snan.tithi}
                  </div>

                  <p className="text-xs text-espresso-700 leading-relaxed font-sans">
                    {snan.significance}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-cream-200 text-xs text-espresso-800">
                  <div className="flex items-center gap-1.5 font-medium text-emerald-700">
                    <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{snan.transit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Pilgrim Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-cream-300 shadow-sm space-y-4">
            <h3 className="font-serif text-xl font-bold text-espresso-950">
              Essential Rituals & Holy Landmarks
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-espresso-800 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-swarna-600 font-bold">1.</span>
                <span><strong>Ramkund Holy Dip:</strong> Taking the primary snan at Ramkund, where Lord Rama performed sacred tarpana for Dasharatha.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-swarna-600 font-bold">2.</span>
                <span><strong>Trimbakeshwar Rudrabhishek:</strong> Offering abhishek at the sacred Jyotirlinga, the origin of River Godavari (Brahmagiri hills).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-swarna-600 font-bold">3.</span>
                <span><strong>Panchavati & Kalaram Darshan:</strong> Visiting Sita Gufa, Kapaleshwar Mandir, and Tapovan forest sanctuaries.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1A120B] text-white p-8 rounded-3xl border border-swarna-400/40 shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs uppercase font-serif text-swarna-300 tracking-wider font-bold">
                VIP Green Corridor Privilege
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Reserve Your Consecrated Sanctuary Early
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                Due to strict vehicular movement restrictions during peak Simhastha snan dates, The Kumbh Cottages provides authorized VIP vehicle tags, private golf-cart transfers, and dedicated elder sevaks.
              </p>
            </div>

            <button
              onClick={() => onOpenBooking()}
              className="btn-darbar-gold py-3 px-6 rounded-xl text-sm font-serif font-bold shadow-lg flex items-center justify-center gap-2 self-start"
            >
              <Sparkles className="w-4 h-4" />
              <span>Reserve Simhastha 2027 Cottage</span>
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
