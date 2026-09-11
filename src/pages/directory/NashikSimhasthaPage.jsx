import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import DirectoryBreadcrumbs from '../../components/directory/DirectoryBreadcrumbs';
import { KUMBH_FOUR_DHAMS_DIRECTORY } from '../../data/kumbhDirectoryData';
import { ExternalLink, MapPin, Calendar, Compass, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';

export default function NashikSimhasthaPage() {
  const data = KUMBH_FOUR_DHAMS_DIRECTORY.nashik;

  return (
    <main className="pb-16 bg-[#FAF8F5] text-stone-900">
      <SEOHead
        title="Nashik-Trimbakeshwar Simhastha 2027 Complete Guide & Directory | TheKumbhCottages"
        description="Official encyclopedia of Nashik Simhastha Kumbh Mela 2027. Ramkund holy snan, Trimbakeshwar Jyotirlinga, Jupiter in Leo astrological alignment, and luxury cottage sanctuaries."
        canonical="https://thekumbhcottages.com/kumbh-directory/nashik-simhastha-kumbh"
      />

      <DirectoryBreadcrumbs items={[{ label: "Nashik Simhastha Kumbh" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        
        {/* Header */}
        <header className="mb-6">
          <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-swarna-700 font-medium mb-1.5">
            Simhastha Kumbh 2027 · Dakshin Ganga Godavari
          </div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
            {data.title}
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-sans font-light mt-1.5 leading-relaxed">
            The once-in-twelve-years celestial confluence celebrated when Jupiter enters Simha Rashi, uniting the sacred bathing waters of Ramkund in Nashik with the holy origin of River Godavari at Trimbakeshwar.
          </p>
        </header>

        {/* City Master Travel Guide Callout Banner */}
        <div className="bg-white p-4 rounded-lg border border-stone-200/90 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <div className="space-y-0.5">
            <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-swarna-700 font-medium">
              <BookOpen className="w-3 h-3" />
              <span>Full City Travel & Pilgrimage Guide</span>
            </div>
            <div className="font-serif text-sm font-medium text-stone-900">
              Nashik Complete Pilgrimage & Tourism Guide: Panchavati to Trimbakeshwar
            </div>
            <p className="text-xs text-stone-600 font-sans font-light">
              Ramkund snan protocol, Trimbakeshwar VIP pass booking, Brahmagiri trek, and Samruddhi expressway transit.
            </p>
          </div>

          <Link
            to="/guides/nashik-complete-pilgrimage-and-tourism-travel-guide"
            className="btn-darbar-gold px-3.5 py-1.5 rounded text-[11px] uppercase tracking-wider font-medium flex items-center gap-1 flex-shrink-0"
          >
            <span>Read Master Guide</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Dedicated Destination Website Callout */}
        <div className="bg-[#120E0A] text-white p-4 rounded-lg border border-swarna-400/30 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="text-[9px] uppercase font-mono text-swarna-400 font-medium">
              Active Destination Property & Booking Portal
            </div>
            <div className="font-serif text-sm text-white mt-0.5">
              The Kumbh Cottages Nashik Simhastha 2027 Flagship
            </div>
            <p className="text-xs text-stone-400 font-sans font-light">
              28-Acre Riverfront Sanctuary, VIP Green Corridor to Ramkund, 100% Desi Ghee Annakshetra.
            </p>
          </div>

          <a
            href="https://kumbhcottagesnashik.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-darbar-gold px-3.5 py-1.5 rounded text-[11px] uppercase tracking-wider font-medium flex items-center gap-1 flex-shrink-0"
          >
            <span>Visit kumbhcottagesnashik.com</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Quick Facts Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-white p-3.5 rounded-lg border border-stone-200/90 text-xs mb-8">
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">Sacred Waters</span>
            <strong className="font-serif text-stone-900">Dakshin Ganga Godavari</strong>
          </div>
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">Planetary Sign</span>
            <strong className="font-serif text-stone-900">Jupiter in Leo (Simha)</strong>
          </div>
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">Upcoming Cycle</span>
            <strong className="font-serif text-stone-900">Simhastha 2027</strong>
          </div>
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">Sacred Ghats</span>
            <strong className="font-serif text-stone-900">Ramkund & Kushavarta</strong>
          </div>
        </div>

        {/* Deep Content Chapters */}
        <div className="space-y-6 text-xs sm:text-sm text-stone-700 font-sans font-light leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              Historical & Scriptural Significance of Nashik Simhastha
            </h2>
            <p>{data.historicalSignificance}</p>
            <p>{data.spiritualSignificance}</p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              Key Bathing Ghats in Nashik & Trimbakeshwar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {data.keyGhats.map((ghat, idx) => (
                <div key={idx} className="p-3 bg-white rounded border border-stone-200/80">
                  <strong className="font-serif text-stone-900 block text-xs">{ghat}</strong>
                  <p className="text-[11px] text-stone-600 font-light mt-0.5">Consecrated Godavari bathing tirtha.</p>
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
