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
                to="/kumbh-directory/prayagraj-maha-kumbh"
                className="p-3 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[9px] font-mono text-swarna-700 uppercase">Tirtharaj Base</div>
                  <strong className="font-serif text-stone-900 group-hover:text-swarna-700 block">Prayagraj Maha Kumbh</strong>
                  <p className="text-[11px] text-stone-600 font-light mt-0.5">Triveni Sangam · Ganga, Yamuna & Saraswati</p>
                </div>
                <span className="text-[10px] text-stone-500 font-medium mt-2 flex items-center gap-1">Explore Directory →</span>
              </Link>

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
              Authoritative Manuals for Ujjain & Shipra Pilgrims
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link
                to="/guides/mahakaleshwar-ujjain-jyotirlinga-bhasma-aarti-simhastha-guide"
                className="p-3 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors block group"
              >
                <strong className="font-serif text-stone-900 group-hover:text-swarna-700 block text-xs">
                  Mahakaleshwar Jyotirlinga & Bhasma Aarti Guide
                </strong>
                <p className="text-[11px] text-stone-600 font-light mt-1">
                  Bhasma Aarti booking rules, Mahakal Lok corridor, VIP darshan protocol, and Ram Ghat snan.
                </p>
              </Link>

              <Link
                to="/guides/astronomical-science-of-kumbh-mela-planetary-alignments"
                className="p-3 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors block group"
              >
                <strong className="font-serif text-stone-900 group-hover:text-swarna-700 block text-xs">
                  Astronomical Science of Kumbh Mela Alignments
                </strong>
                <p className="text-[11px] text-stone-600 font-light mt-1">
                  Why Jupiter in Leo triggers Simhastha, electromagnetic water ionization, and cosmic energy.
                </p>
              </Link>

              <Link
                to="/guides/kumbh-mela-shahi-snan-dates-rituals-spiritual-significance"
                className="p-3 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors block group"
              >
                <strong className="font-serif text-stone-900 group-hover:text-swarna-700 block text-xs">
                  Shahi Snan Dates, Rituals & Spiritual Significance
                </strong>
                <p className="text-[11px] text-stone-600 font-light mt-1">
                  Vaishakha Purnima royal snan and sacred bathing protocols on Shipra riverbanks.
                </p>
              </Link>

              <Link
                to="/guides/pure-sattvic-ayurvedic-dining-guide"
                className="p-3 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200/70 transition-colors block group"
              >
                <strong className="font-serif text-stone-900 group-hover:text-swarna-700 block text-xs">
                  Pure Sattvic & Ayurvedic Dining Guide
                </strong>
                <p className="text-[11px] text-stone-600 font-light mt-1">
                  Gir cow A2 bilona ghee, zero onion/garlic principles, and digestive vitality during pilgrimage.
                </p>
              </Link>
            </div>
          </section>

        </div>

      </article>
    </main>
  );
}
