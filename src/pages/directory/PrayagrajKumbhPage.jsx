import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import DirectoryBreadcrumbs from '../../components/directory/DirectoryBreadcrumbs';
import { KUMBH_FOUR_DHAMS_DIRECTORY } from '../../data/kumbhDirectoryData';
import { MapPin, Calendar, Compass, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';

export default function PrayagrajKumbhPage() {
  const data = KUMBH_FOUR_DHAMS_DIRECTORY.prayagraj;

  return (
    <main className="pb-16 bg-[#FAF8F5] text-stone-900">
      <SEOHead
        title="Prayagraj Maha Kumbh Mela Complete Guide & Directory | TheKumbhCottages"
        description="Comprehensive guide to Prayagraj Maha Kumbh at Triveni Sangam. History, astronomical alignment of Jupiter & Sun in Capricorn, major bathing dates, and nearby sacred temples."
        canonical="https://thekumbhcottages.com/kumbh-directory/prayagraj-maha-kumbh"
      />

      <DirectoryBreadcrumbs items={[{ label: "Prayagraj Maha Kumbh" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        
        {/* Header */}
        <header className="mb-6">
          <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-swarna-700 font-medium mb-1.5">
            Tirtharaj Prayag · Triveni Sangam
          </div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
            {data.title}
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-sans font-light mt-1.5 leading-relaxed">
            The king of all sacred tirthas, where the holy Ganga, Yamuna, and invisible Saraswati unite to create the supreme cosmic bathing confluence.
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
              Prayagraj (Allahabad) Complete Pilgrimage & Travel Guide
            </div>
            <p className="text-xs text-stone-600 font-sans font-light">
              Triveni Sangam boat rates, Lete Hanuman Ji, Akshayavat inside Akbar Fort, and Vande Bharat connectivity.
            </p>
          </div>

          <Link
            to="/guides/prayagraj-allahabad-complete-pilgrimage-travel-guide"
            className="btn-darbar-gold px-3.5 py-1.5 rounded text-[11px] uppercase tracking-wider font-medium flex items-center gap-1 flex-shrink-0"
          >
            <span>Read Master Guide</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Quick Facts Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-white p-3.5 rounded-lg border border-stone-200/90 text-xs mb-8">
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">River Confluence</span>
            <strong className="font-serif text-stone-900">Triveni Sangam</strong>
          </div>
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">Planetary Sign</span>
            <strong className="font-serif text-stone-900">Jupiter in Taurus / Sun in Capricorn</strong>
          </div>
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">Cycle Frequency</span>
            <strong className="font-serif text-stone-900">{data.frequency}</strong>
          </div>
          <div>
            <span className="text-[9px] font-mono text-stone-400 block uppercase">Founding Base</span>
            <strong className="font-serif text-stone-900">The Kumbh Cottages (2001)</strong>
          </div>
        </div>

        {/* Deep Content Chapters */}
        <div className="space-y-6 text-xs sm:text-sm text-stone-700 font-sans font-light leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              Historical & Scriptural Provenance
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
              Key Bathing Ghats & Consecrated Tirthas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {data.keyGhats.map((ghat, idx) => (
                <div key={idx} className="p-3 bg-white rounded border border-stone-200/80">
                  <strong className="font-serif text-stone-900 block text-xs">{ghat}</strong>
                  <p className="text-[11px] text-stone-600 font-light mt-0.5">Consecrated bathing node at Triveni Sangam basin.</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              Major Consecrated Snan Muhurtas
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
              Nearby Consecrated Temples
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {data.nearbySacredSites.map((site, idx) => (
                <div key={idx} className="p-3 bg-white rounded border border-stone-200/80">
                  <strong className="font-serif text-stone-900 block">{site}</strong>
                </div>
              ))}
            </div>
          </section>

          {/* Inter-Dham Consecrated Circuit */}
          <section className="p-5 bg-white rounded-lg border border-stone-200/90 space-y-3">
            <div className="text-[10px] uppercase font-mono text-swarna-700 font-medium">
              Sanatan Network · The Four Sacred Kumbh Dhams
            </div>
            <h2 className="font-serif text-base font-normal text-stone-900">
              Explore The Other Sacred Kumbh Dhams & Monastic Almanac
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              <Link
                to="/kumbh-directory/nashik-simhastha-kumbh"
                className="p-3 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[9px] font-mono text-swarna-700 uppercase">Upcoming 2027</div>
                  <strong className="font-serif text-stone-900 group-hover:text-swarna-700 block">Nashik Simhastha</strong>
                  <p className="text-[11px] text-stone-600 font-light mt-0.5">Godavari River · Ramkund & Trimbakeshwar</p>
                </div>
                <span className="text-[10px] text-stone-500 font-medium mt-2 flex items-center gap-1">Explore Directory →</span>
              </Link>

              <Link
                to="/kumbh-directory/haridwar-maha-kumbh"
                className="p-3 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[9px] font-mono text-stone-500 uppercase">Himalayan Gateway</div>
                  <strong className="font-serif text-stone-900 group-hover:text-swarna-700 block">Haridwar Maha Kumbh</strong>
                  <p className="text-[11px] text-stone-600 font-light mt-0.5">Maa Ganga · Har Ki Pauri Brahma Kund</p>
                </div>
                <span className="text-[10px] text-stone-500 font-medium mt-2 flex items-center gap-1">Explore Directory →</span>
              </Link>

              <Link
                to="/kumbh-directory/ujjain-simhastha-kumbh"
                className="p-3 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[9px] font-mono text-stone-500 uppercase">City of Mahakal</div>
                  <strong className="font-serif text-stone-900 group-hover:text-swarna-700 block">Ujjain Simhastha</strong>
                  <p className="text-[11px] text-stone-600 font-light mt-0.5">Shipra River · Ram Ghat & Mahakaleshwar</p>
                </div>
                <span className="text-[10px] text-stone-500 font-medium mt-2 flex items-center gap-1">Explore Directory →</span>
              </Link>

              <Link
                to="/kumbh-directory/akharas-and-traditions"
                className="p-3 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[9px] font-mono text-stone-500 uppercase">Monastic Orders</div>
                  <strong className="font-serif text-stone-900 group-hover:text-swarna-700 block">13 Sacred Akharas</strong>
                  <p className="text-[11px] text-stone-600 font-light mt-0.5">Shaiva, Vaishnava & Udasin lineages</p>
                </div>
                <span className="text-[10px] text-stone-500 font-medium mt-2 flex items-center gap-1">View Monastic Almanac →</span>
              </Link>

              <Link
                to="/kumbh-directory/shahi-snan-rituals-guide"
                className="p-3 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[9px] font-mono text-stone-500 uppercase">Vedic Physics</div>
                  <strong className="font-serif text-stone-900 group-hover:text-swarna-700 block">Shahi Snan Science</strong>
                  <p className="text-[11px] text-stone-600 font-light mt-0.5">Step-by-step royal bath procedures</p>
                </div>
                <span className="text-[10px] text-stone-500 font-medium mt-2 flex items-center gap-1">Read Snan Manual →</span>
              </Link>

              <Link
                to="/destinations"
                className="p-3 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[9px] font-mono text-stone-500 uppercase">The Kumbh Cottages</div>
                  <strong className="font-serif text-stone-900 group-hover:text-swarna-700 block">All Cottage Campuses</strong>
                  <p className="text-[11px] text-stone-600 font-light mt-0.5">Insulated Swiss riverfront sanctuaries</p>
                </div>
                <span className="text-[10px] text-stone-500 font-medium mt-2 flex items-center gap-1">Explore Portfolios →</span>
              </Link>
            </div>
          </section>

          {/* Related Authoritative Guides */}
          <section className="p-5 bg-white rounded-lg border border-stone-200/90 space-y-3">
            <div className="text-[10px] uppercase font-mono text-swarna-700 font-medium">
              Curated Pilgrim Guides
            </div>
            <h2 className="font-serif text-base font-normal text-stone-900">
              Authoritative Manuals for Prayagraj Pilgrims
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link
                to="/guides/prayagraj-allahabad-complete-pilgrimage-travel-guide"
                className="p-3 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors block group"
              >
                <strong className="font-serif text-stone-900 group-hover:text-swarna-700 block text-xs">
                  Prayagraj Complete Pilgrimage & Travel Guide
                </strong>
                <p className="text-[11px] text-stone-600 font-light mt-1">
                  Triveni Sangam boat hiring rates, Lete Hanuman Ji, and Vande Bharat connectivity.
                </p>
              </Link>

              <Link
                to="/guides/kalpavas-discipline-spiritual-science-of-riverside-living"
                className="p-3 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors block group"
              >
                <strong className="font-serif text-stone-900 group-hover:text-swarna-700 block text-xs">
                  The Sacred Vow of Kalpavas: 30 Days of Tapasya
                </strong>
                <p className="text-[11px] text-stone-600 font-light mt-1">
                  Daily trisnaan, Ekabhukta fasting, scriptural study, and spiritual disciplines.
                </p>
              </Link>

              <Link
                to="/guides/kumbh-mela-accommodation-guide-luxury-tents-vs-hotels"
                className="p-3 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors block group"
              >
                <strong className="font-serif text-stone-900 group-hover:text-swarna-700 block text-xs">
                  Cottages vs City Hotels Accommodation Guide
                </strong>
                <p className="text-[11px] text-stone-600 font-light mt-1">
                  Why staying directly on the sacred floodplain avoids 40 km traffic barricades.
                </p>
              </Link>

              <Link
                to="/guides/multi-generational-family-elder-pilgrimage-guide"
                className="p-3 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors block group"
              >
                <strong className="font-serif text-stone-900 group-hover:text-swarna-700 block text-xs">
                  Elder Pilgrimage Guide: Step-Free Mobility & Safety
                </strong>
                <p className="text-[11px] text-stone-600 font-light mt-1">
                  Wheelchair access, cardiac pacing, and weather-proof cottage accommodations.
                </p>
              </Link>
            </div>
          </section>

        </div>

      </article>
    </main>
  );
}
