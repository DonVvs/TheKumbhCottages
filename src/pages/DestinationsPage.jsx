import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import { ExternalLink, ArrowRight, BookOpen } from 'lucide-react';
import { DESTINATIONS_PORTFOLIO } from '../data/destinationsData';
import RelatedGuidesWidget from '../components/common/RelatedGuidesWidget';

export default function DestinationsPage({ onOpenInquiry }) {
  return (
    <main className="pt-6 pb-16 bg-[#FAF8F5] text-stone-900">
      <SEOHead
        title="Destinations & Cottage Portfolios | TheKumbhCottages (Est. 2001)"
        description="Explore our sovereign cottage campuses across Nashik (kumbhcottagesnashik.com), Ujjain, Haridwar, and our founding base in Prayagraj."
        canonical="https://thekumbhcottages.com/destinations"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Page Header */}
        <div className="max-w-2xl mb-8">
          <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-swarna-700 font-medium mb-1.5">
            Sacred Circuits
          </div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
            Our Cottage Portfolios & Destination Portals
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-sans font-light mt-1.5">
            Active riverfront campuses across Nashik, Ujjain, and Haridwar, anchored by our 25-year founding base in Prayagraj.
          </p>
        </div>

        {/* Portfolios List */}
        <div className="space-y-6">
          {DESTINATIONS_PORTFOLIO.map((dest) => (
            <div
              key={dest.id}
              id={dest.id}
              className="bg-white rounded-lg border border-stone-200/90 p-5 sm:p-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                
                {/* Visual */}
                <div className="lg:col-span-5">
                  <div className="relative rounded overflow-hidden aspect-[16/10] border border-stone-200">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 text-[9px] uppercase tracking-wider font-mono bg-black/75 text-stone-200 px-2 py-0.5 rounded">
                      {dest.badge}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-7 space-y-2.5">
                  <div>
                    <div className="text-[10px] font-mono text-stone-500 uppercase">
                      {dest.city}, {dest.state} · {dest.river}
                    </div>
                    <h2 className="font-serif text-lg sm:text-xl font-normal text-stone-900 mt-0.5">
                      {dest.name}
                    </h2>
                  </div>

                  <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                    {dest.details}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1.5 text-[11px] text-stone-700 font-sans font-light border-t border-stone-100">
                    {dest.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1">
                        <span className="text-swarna-600 text-[10px]">✦</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Contextual Internal Links */}
                  <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                    <Link
                      to={
                        dest.id === 'nashik'
                          ? '/kumbh-directory/nashik-simhastha-kumbh'
                          : dest.id === 'ujjain'
                          ? '/kumbh-directory/ujjain-simhastha-kumbh'
                          : dest.id === 'haridwar'
                          ? '/kumbh-directory/haridwar-maha-kumbh'
                          : '/kumbh-directory/prayagraj-maha-kumbh'
                      }
                      className="text-stone-700 hover:text-swarna-700 font-medium inline-flex items-center gap-1 group"
                    >
                      <span className="text-swarna-600 text-[10px]">✦</span>
                      <span className="group-hover:underline">Explore {dest.city} Kumbh Almanac</span>
                      <ArrowRight className="w-2.5 h-2.5 text-stone-400 group-hover:text-swarna-700" />
                    </Link>

                    <span className="text-stone-300">•</span>

                    <Link
                      to={
                        dest.id === 'nashik'
                          ? '/guides/nashik-complete-pilgrimage-and-tourism-travel-guide'
                          : dest.id === 'ujjain'
                          ? '/guides/mahakaleshwar-ujjain-jyotirlinga-bhasma-aarti-simhastha-guide'
                          : dest.id === 'haridwar'
                          ? '/guides/haridwar-rishikesh-complete-pilgrimage-travel-guide'
                          : '/guides/prayagraj-allahabad-complete-pilgrimage-travel-guide'
                      }
                      className="text-stone-700 hover:text-swarna-700 font-medium inline-flex items-center gap-1 group"
                    >
                      <BookOpen className="w-3 h-3 text-swarna-600" />
                      <span className="group-hover:underline">{dest.city} Travel & Pilgrimage Manual</span>
                      <ArrowRight className="w-2.5 h-2.5 text-stone-400 group-hover:text-swarna-700" />
                    </Link>
                  </div>

                  {/* Actions */}
                  <div className="pt-2.5 border-t border-stone-100 flex flex-wrap items-center gap-2.5">
                    {dest.isExternal ? (
                      <a
                        href={dest.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-darbar-gold px-3.5 py-1.5 rounded text-[11px] uppercase tracking-wider font-medium flex items-center gap-1"
                      >
                        <span>Open {dest.websiteDisplay} Portal</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <button
                        onClick={() => onOpenInquiry(dest.name)}
                        className="btn-darbar-gold px-3.5 py-1.5 rounded text-[11px] uppercase tracking-wider font-medium flex items-center gap-1"
                      >
                        <span>Request Campus Dossier</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}

                    <button
                      onClick={() => onOpenInquiry(dest.name)}
                      className="px-3 py-1.5 rounded border border-stone-300 text-stone-700 hover:text-black hover:border-stone-400 text-[11px] uppercase tracking-wider font-normal transition-colors"
                    >
                      Corporate Buyout Inquiry
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="mt-12">
        <RelatedGuidesWidget
          category="India Sacred Travel"
          title="Sacred Travel & Transit Itineraries"
          subtitle="How to reach and navigate Nashik, Ujjain, Haridwar, and Prayagraj with multi-generational family comfort."
        />
      </div>
    </main>
  );
}
