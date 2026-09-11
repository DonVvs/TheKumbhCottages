import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import DirectoryBreadcrumbs from '../../components/directory/DirectoryBreadcrumbs';
import { KUMBH_FOUR_DHAMS_DIRECTORY } from '../../data/kumbhDirectoryData';
import { MapPin, Calendar, Compass, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';

export default function HaridwarKumbhPage() {
  const data = KUMBH_FOUR_DHAMS_DIRECTORY.haridwar;

  return (
    <main className="pb-16 bg-[#FAF8F5] text-stone-900">
      <SEOHead
        title="Haridwar Maha Kumbh Mela Complete Guide & Directory | TheKumbhCottages"
        description="Comprehensive guide to Haridwar Maha Kumbh on Maa Ganga. Har Ki Pauri, Brahma Kund, Jupiter in Aquarius alignment, major snan dates, and Himalayan pilgrimage guidelines."
        canonical="https://thekumbhcottages.com/kumbh-directory/haridwar-maha-kumbh"
      />

      <DirectoryBreadcrumbs items={[{ label: "Haridwar Maha Kumbh" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        
        {/* Header */}
        <header className="mb-6">
          <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-swarna-700 font-medium mb-1.5">
            Gangadwara · Foothills of the Himalayas
          </div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
            {data.title}
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-sans font-light mt-1.5 leading-relaxed">
            Where the holy river Ganga leaves the rugged Himalayan heights and enters the northern plains of India, blessing Brahma Kund at Har Ki Pauri.
          </p>
        </header>

        {/* City Master Travel Guide Callout Banner */}
        <div className="bg-white p-4 rounded-lg border border-stone-200/90 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-swarna-700 font-medium">
              <BookOpen className="w-3 h-3" />
              <span>Full City Travel & Pilgrimage Guide</span>
            </div>
            <div className="font-serif text-sm font-medium text-stone-900">
              Haridwar & Rishikesh Complete Pilgrimage & Travel Guide
            </div>
            <p className="text-xs text-stone-600 font-sans font-light">
              Har Ki Pauri evening Ganga Aarti seating, Mansa Devi ropeway, Daksha Mahadev in Kankhal, and Rishikesh ashrams.
            </p>
          </div>

          <Link
            to="/guides/haridwar-rishikesh-complete-pilgrimage-travel-guide"
            className="btn-darbar-gold px-3.5 py-1.5 rounded text-[11px] uppercase tracking-wider font-medium flex items-center gap-1 flex-shrink-0"
          >
            <span>Read Master Guide</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Quick Facts Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-white p-3.5 rounded-lg border border-stone-200/90 text-xs mb-8">
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">Sacred River</span>
            <strong className="font-serif text-stone-900">Maa Ganga</strong>
          </div>
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">Planetary Sign</span>
            <strong className="font-serif text-stone-900">Jupiter in Aquarius / Sun in Aries</strong>
          </div>
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">Major Ghat</span>
            <strong className="font-serif text-stone-900">Har Ki Pauri (Brahma Kund)</strong>
          </div>
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">Retreat Base</span>
            <strong className="font-serif text-stone-900">The Kumbh Cottages Haridwar</strong>
          </div>
        </div>

        {/* Deep Content Chapters */}
        <div className="space-y-6 text-xs sm:text-sm text-stone-700 font-sans font-light leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              The Legend of Mayapuri & Brahma Kund
            </h2>
            <p>{data.historicalSignificance}</p>
            <p>{data.spiritualSignificance}</p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              Astronomical Alignment (Jyotish Shastra)
            </h2>
            <div className="p-3 bg-white rounded-lg border border-stone-200/90 text-xs font-mono text-stone-800 space-y-1">
              <div>• {data.astronomicalAlignment}</div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              Key Bathing Ghats in Haridwar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {data.keyGhats.map((ghat, idx) => (
                <div key={idx} className="p-3 bg-white rounded border border-stone-200/80">
                  <strong className="font-serif text-stone-900 block text-xs">{ghat}</strong>
                  <p className="text-[11px] text-stone-600 font-light mt-0.5">Consecrated Ganga riverfront bathing ghat.</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              Major Consecrated Snan Dates
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {data.majorSnanDates.map((snan, idx) => (
                <div key={idx} className="p-3 bg-white rounded border border-stone-200/80 space-y-0.5">
                  <strong className="font-serif text-xs text-stone-900 block">{snan.name}</strong>
                  <p className="text-[11px] text-stone-600 font-light">{snan.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              Nearby Consecrated Pilgrimage Temples
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {data.nearbySacredSites.map((site, idx) => (
                <div key={idx} className="p-3 bg-white rounded border border-stone-200/80">
                  <strong className="font-serif text-stone-900 block">{site}</strong>
                </div>
              ))}
            </div>
          </section>

        </div>

      </article>
    </main>
  );
}
