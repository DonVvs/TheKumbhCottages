import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import DirectoryBreadcrumbs from '../../components/directory/DirectoryBreadcrumbs';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { KUMBH_FOUR_DHAMS_DIRECTORY, THIRTEEN_AKHARAS_DIRECTORY, KUMBH_SEO_FAQS } from '../../data/kumbhDirectoryData';

import RelatedGuidesWidget from '../../components/common/RelatedGuidesWidget';

export default function KumbhDirectoryHubPage() {
  return (
    <main className="pb-16 bg-[#FAF8F5] text-stone-900">
      <SEOHead
        title="Complete Kumbh Mela Directory & Universal Almanac | TheKumbhCottages"
        description="The master encyclopedia and directory of all four sacred Kumbh Melas: Prayagraj, Nashik Simhastha, Haridwar, and Ujjain. Astrological alignments, 13 Akharas, and sacred snan dates."
        canonical="https://thekumbhcottages.com/kumbh-directory"
      />

      <DirectoryBreadcrumbs />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        
        {/* Hub Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-swarna-700 font-medium mb-1.5">
            Universal Sanatan Almanac & Directory
          </div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
            The Complete Encyclopedia of Sacred Kumbh Melas
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-sans font-light mt-1.5 leading-relaxed">
            The definitive historical, astronomical, and ritual directory of the world’s largest peaceful gathering. Explore the four consecrated riverfronts, ancient planetary confluences, monastic akharas, and sacred snan guidelines.
          </p>
        </div>

        {/* 4 Sacred Kumbh Dhams Directory Cards */}
        <div className="space-y-4 mb-10">
          <h2 className="font-serif text-lg font-normal text-stone-900 border-l-2 border-swarna-500 pl-2.5">
            The Four Consecrated Kumbh Dhams
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Prayagraj */}
            <div className="bg-white p-5 rounded-lg border border-stone-200/90 flex flex-col justify-between hover:border-stone-300 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 uppercase">
                  <span>Triveni Sangam · Ganga, Yamuna, Saraswati</span>
                  <span className="text-swarna-700 font-serif">Tirtharaj</span>
                </div>
                <h3 className="font-serif text-base font-medium text-stone-900">
                  {KUMBH_FOUR_DHAMS_DIRECTORY.prayagraj.title}
                </h3>
                <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                  {KUMBH_FOUR_DHAMS_DIRECTORY.prayagraj.historicalSignificance.slice(0, 150)}...
                </p>
                <div className="text-[10px] font-mono text-stone-600 bg-stone-50 p-2 rounded">
                  <strong>Astrology:</strong> {KUMBH_FOUR_DHAMS_DIRECTORY.prayagraj.astronomicalAlignment}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <Link
                  to="/kumbh-directory/prayagraj-maha-kumbh"
                  className="text-stone-900 font-medium hover:text-swarna-700 flex items-center gap-1 text-[11px]"
                >
                  <span>Explore Prayagraj Directory</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-[10px] text-stone-400 font-mono">12-Year Cycle</span>
              </div>
            </div>

            {/* Nashik Simhastha */}
            <div className="bg-white p-5 rounded-lg border border-stone-200/90 flex flex-col justify-between hover:border-stone-300 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 uppercase">
                  <span>Dakshin Ganga Godavari · Ramkund & Trimbakeshwar</span>
                  <span className="text-swarna-700 font-serif font-medium">Simhastha 2027</span>
                </div>
                <h3 className="font-serif text-base font-medium text-stone-900">
                  {KUMBH_FOUR_DHAMS_DIRECTORY.nashik.title}
                </h3>
                <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                  {KUMBH_FOUR_DHAMS_DIRECTORY.nashik.historicalSignificance.slice(0, 150)}...
                </p>
                <div className="text-[10px] font-mono text-stone-600 bg-stone-50 p-2 rounded">
                  <strong>Astrology:</strong> {KUMBH_FOUR_DHAMS_DIRECTORY.nashik.astronomicalAlignment}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <Link
                  to="/kumbh-directory/nashik-simhastha-kumbh"
                  className="text-stone-900 font-medium hover:text-swarna-700 flex items-center gap-1 text-[11px]"
                >
                  <span>Explore Nashik Directory</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <a
                  href="https://kumbhcottagesnashik.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-swarna-700 font-mono hover:underline flex items-center gap-0.5"
                >
                  <span>kumbhcottagesnashik.com</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            {/* Haridwar */}
            <div className="bg-white p-5 rounded-lg border border-stone-200/90 flex flex-col justify-between hover:border-stone-300 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 uppercase">
                  <span>Maa Ganga · Har Ki Pauri & Brahma Kund</span>
                  <span className="text-swarna-700 font-serif">Gangadwara</span>
                </div>
                <h3 className="font-serif text-base font-medium text-stone-900">
                  {KUMBH_FOUR_DHAMS_DIRECTORY.haridwar.title}
                </h3>
                <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                  {KUMBH_FOUR_DHAMS_DIRECTORY.haridwar.historicalSignificance.slice(0, 150)}...
                </p>
                <div className="text-[10px] font-mono text-stone-600 bg-stone-50 p-2 rounded">
                  <strong>Astrology:</strong> {KUMBH_FOUR_DHAMS_DIRECTORY.haridwar.astronomicalAlignment}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <Link
                  to="/kumbh-directory/haridwar-maha-kumbh"
                  className="text-stone-900 font-medium hover:text-swarna-700 flex items-center gap-1 text-[11px]"
                >
                  <span>Explore Haridwar Directory</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-[10px] text-stone-400 font-mono">12-Year Cycle</span>
              </div>
            </div>

            {/* Ujjain Simhastha */}
            <div className="bg-white p-5 rounded-lg border border-stone-200/90 flex flex-col justify-between hover:border-stone-300 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 uppercase">
                  <span>Holy Shipra River · Mahakaleshwar Jyotirlinga</span>
                  <span className="text-swarna-700 font-serif">Avantika</span>
                </div>
                <h3 className="font-serif text-base font-medium text-stone-900">
                  {KUMBH_FOUR_DHAMS_DIRECTORY.ujjain.title}
                </h3>
                <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                  {KUMBH_FOUR_DHAMS_DIRECTORY.ujjain.historicalSignificance.slice(0, 150)}...
                </p>
                <div className="text-[10px] font-mono text-stone-600 bg-stone-50 p-2 rounded">
                  <strong>Astrology:</strong> {KUMBH_FOUR_DHAMS_DIRECTORY.ujjain.astronomicalAlignment}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <Link
                  to="/kumbh-directory/ujjain-simhastha-kumbh"
                  className="text-stone-900 font-medium hover:text-swarna-700 flex items-center gap-1 text-[11px]"
                >
                  <span>Explore Ujjain Directory</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-[10px] text-stone-400 font-mono">12-Year Cycle</span>
              </div>
            </div>

          </div>
        </div>

        {/* 2 Special Directories: Akharas & Shahi Snan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-white p-5 rounded-lg border border-stone-200/90 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-swarna-700 uppercase">Monastic Orders</div>
              <h3 className="font-serif text-base font-medium text-stone-900">
                The 13 Sacred Akharas Directory
              </h3>
              <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                Complete guide to the Shaiva Sannyasi, Vaishnava Bairagi, and Udasin monastic orders, Naga Sadhu traditions, and akhara hierarchy.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-stone-100">
              <Link
                to="/kumbh-directory/akharas-and-traditions"
                className="text-stone-900 font-medium hover:text-swarna-700 flex items-center gap-1 text-[11px]"
              >
                <span>Read Akharas Directory</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-stone-200/90 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-swarna-700 uppercase">Vedic Science</div>
              <h3 className="font-serif text-base font-medium text-stone-900">
                Shahi Snan Rituals & Pilgrimage Science
              </h3>
              <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                Step-by-step Vedic snan procedure, Kalpavas discipline, sunrise meditation hours, and sacred bathing protocols for families and elders.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-stone-100">
              <Link
                to="/kumbh-directory/shahi-snan-rituals-guide"
                className="text-stone-900 font-medium hover:text-swarna-700 flex items-center gap-1 text-[11px]"
              >
                <span>Read Shahi Snan Guide</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Master FAQ Section for Voice Search & AI Crawlers */}
        <div className="bg-white p-5 sm:p-6 rounded-lg border border-stone-200/90">
          <h2 className="font-serif text-lg font-normal text-stone-900 mb-4">
            Frequently Asked Questions & Kumbh Almanac Knowledge
          </h2>
          <div className="space-y-3.5">
            {KUMBH_SEO_FAQS.map((faq, idx) => (
              <div key={idx} className="border-b border-stone-100 pb-3 last:border-b-0 last:pb-0">
                <h3 className="font-serif text-xs sm:text-sm font-medium text-stone-900">
                  {faq.q}
                </h3>
                <p className="text-xs text-stone-600 font-sans font-light mt-1 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="mt-12">
        <RelatedGuidesWidget
          title="Kumbh Science, Astronomy & Monastic Guides"
          subtitle="Explore the planetary physics of Amrit snan, the 13 Akharas, and Kalpavas vows."
        />
      </div>
    </main>
  );
}
