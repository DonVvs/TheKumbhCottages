import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import DirectoryBreadcrumbs from '../../components/directory/DirectoryBreadcrumbs';
import { KUMBH_FOUR_DHAMS_DIRECTORY } from '../../data/kumbhDirectoryData';
import { MapPin, Calendar, Compass, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';

export default function UjjainSimhasthaPage() {
  const data = KUMBH_FOUR_DHAMS_DIRECTORY.ujjain;

  return (
    <main className="pb-16 bg-[#FAF8F5] text-stone-900">
      <SEOHead
        title="Ujjain Simhastha Maha Kumbh Guide & Directory | TheKumbhCottages"
        description="Encyclopedia of Ujjain Simhastha Kumbh on the holy Shipra River. Mahakaleshwar Jyotirlinga, Ram Ghat, planetary alignment of Jupiter in Leo, and Bhasma Aarti spiritual guide."
        canonical="https://thekumbhcottages.com/kumbh-directory/ujjain-simhastha-kumbh"
      />

      <DirectoryBreadcrumbs items={[{ label: "Ujjain Simhastha Kumbh" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        
        {/* Header */}
        <header className="mb-6">
          <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-swarna-700 font-medium mb-1.5">
            Avantika Puri · Holy River Shipra
          </div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
            {data.title}
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-sans font-light mt-1.5 leading-relaxed">
            The sacred Simhastha congregation in the eternal city of Mahakal, where the Shipra River transforms into an ocean of celestial vibrations.
          </p>
        </header>

        {/* Quick Facts Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-white p-3.5 rounded-lg border border-stone-200/90 text-xs mb-8">
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">Sacred River</span>
            <strong className="font-serif text-stone-900">Holy Shipra</strong>
          </div>
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">Planetary Sign</span>
            <strong className="font-serif text-stone-900">Jupiter in Leo / Sun in Aries</strong>
          </div>
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">Primary Jyotirlinga</span>
            <strong className="font-serif text-stone-900">Mahakaleshwar</strong>
          </div>
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">Major Ghat</span>
            <strong className="font-serif text-stone-900">Ram Ghat</strong>
          </div>
        </div>

        {/* Deep Content Chapters */}
        <div className="space-y-6 text-xs sm:text-sm text-stone-700 font-sans font-light leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              Ujjain's Eternal Role in Cosmic Time & Jyotish
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
              Key Bathing Ghats in Ujjain
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {data.keyGhats.map((ghat, idx) => (
                <div key={idx} className="p-3 bg-white rounded border border-stone-200/80">
                  <strong className="font-serif text-stone-900 block text-xs">{ghat}</strong>
                  <p className="text-[11px] text-stone-600 font-light mt-0.5">Consecrated Shipra riverfront bathing ghat.</p>
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
