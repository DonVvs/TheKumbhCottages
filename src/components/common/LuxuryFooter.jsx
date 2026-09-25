import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ExternalLink } from 'lucide-react';

export default function LuxuryFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0704] text-stone-400 pt-10 pb-6 border-t border-white/10 text-xs">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Minimalist Identity Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/brand/emblem.webp"
              alt="The Kumbh Cottages Seal"
              width="28"
              height="28"
              loading="lazy"
              decoding="async"
              className="w-7 h-7 rounded-full border border-swarna-400/40 object-cover"
            />
            <div>
              <div className="font-serif text-sm text-stone-100 font-normal tracking-wide">
                The Kumbh Cottages
              </div>
              <div className="text-[9px] text-stone-400 uppercase tracking-[0.2em] font-sans font-medium">
                Raamvan Retreats Sacred Hospitality & Infrastructure Group · Est. 2001
              </div>
            </div>
          </div>

          <div className="text-[10px] font-serif text-stone-500 italic">
            ॥ सत्यं शिवं सुन्दरम् · अतिथिदेवो भव ॥
          </div>
        </div>

        {/* 5-Column Clean Directory */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 py-6 border-b border-white/10 text-[11px]">
          
          <div>
            <h4 className="font-serif text-stone-300 uppercase tracking-wider text-[10px] mb-2 font-normal">
              The Parent Group
            </h4>
            <ul className="space-y-1 text-stone-400 font-light">
              <li><Link to="/" className="hover:text-white transition-colors">Group Overview</Link></li>
              <li><Link to="/heritage-since-2001" className="hover:text-white transition-colors">25-Year Heritage</Link></li>
              <li><Link to="/capabilities-infrastructure" className="hover:text-white transition-colors">Turnkey Capabilities</Link></li>
              <li><Link to="/corporate-contact" className="hover:text-white transition-colors">Corporate Directorate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-stone-300 uppercase tracking-wider text-[10px] mb-2 font-normal">
              Destinations
            </h4>
            <ul className="space-y-1 text-stone-400 font-light">
              <li>
                <a href="https://kumbhcottagesnashik.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1 text-swarna-300">
                  <span>Nashik 2027</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li><Link to="/destinations#ujjain" className="hover:text-white transition-colors">Ujjain (Shipra)</Link></li>
              <li><Link to="/destinations#haridwar" className="hover:text-white transition-colors">Haridwar (Ganga)</Link></li>
              <li><Link to="/destinations#prayagraj" className="hover:text-white transition-colors">Prayagraj (Est. 2001)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-stone-300 uppercase tracking-wider text-[10px] mb-2 font-normal">
              Kumbh Directory
            </h4>
            <ul className="space-y-1 text-stone-400 font-light">
              <li><Link to="/kumbh-directory" className="hover:text-white transition-colors text-swarna-300">Universal Almanac</Link></li>
              <li><Link to="/kumbh-directory/prayagraj-maha-kumbh" className="hover:text-white transition-colors">Prayagraj Maha Kumbh</Link></li>
              <li><Link to="/kumbh-directory/nashik-simhastha-kumbh" className="hover:text-white transition-colors">Nashik Simhastha 2027</Link></li>
              <li><Link to="/kumbh-directory/haridwar-maha-kumbh" className="hover:text-white transition-colors">Haridwar Maha Kumbh</Link></li>
              <li><Link to="/kumbh-directory/ujjain-simhastha-kumbh" className="hover:text-white transition-colors">Ujjain Simhastha</Link></li>
              <li><Link to="/kumbh-directory/akharas-and-traditions" className="hover:text-white transition-colors">13 Sacred Akharas</Link></li>
              <li><Link to="/kumbh-directory/shahi-snan-rituals-guide" className="hover:text-white transition-colors">Shahi Snan Science</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-stone-300 uppercase tracking-wider text-[10px] mb-2 font-normal">
              Travel & Kumbh Guides
            </h4>
            <ul className="space-y-1 text-stone-400 font-light">
              <li><Link to="/sacred-travel-and-kumbh-guides" className="hover:text-white transition-colors text-swarna-300">All 39 Guides Hub</Link></li>
              <li><Link to="/guides/prayagraj-allahabad-complete-pilgrimage-travel-guide" className="hover:text-white transition-colors">Prayagraj City Guide</Link></li>
              <li><Link to="/guides/nashik-complete-pilgrimage-and-tourism-travel-guide" className="hover:text-white transition-colors">Nashik City Guide</Link></li>
              <li><Link to="/guides/haridwar-rishikesh-complete-pilgrimage-travel-guide" className="hover:text-white transition-colors">Haridwar & Rishikesh Guide</Link></li>
              <li><Link to="/guides/mahakaleshwar-ujjain-jyotirlinga-bhasma-aarti-simhastha-guide" className="hover:text-white transition-colors">Mahakaleshwar Ujjain</Link></li>
              <li><Link to="/guides/multi-generational-family-elder-pilgrimage-guide" className="hover:text-white transition-colors">Elder Pilgrimage Guide</Link></li>
              <li><Link to="/guides/pure-sattvic-ayurvedic-dining-guide" className="hover:text-white transition-colors">Pure Sattvic Dining</Link></li>
              <li><Link to="/guides/astronomical-science-of-kumbh-mela-planetary-alignments" className="hover:text-white transition-colors">Astronomical Science</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-stone-300 uppercase tracking-wider text-[10px] mb-2 font-normal">
              Corporate Liaison
            </h4>
            <div className="space-y-1 text-stone-400 font-light">
              <div>New Delhi & Nashik, India</div>
              <div>Tel: <a href="tel:+919889933333" className="hover:text-white font-mono">+91 98899 33333</a></div>
              <div>Email: <a href="mailto:kumbhcottages@gmail.com" className="hover:text-white">kumbhcottages@gmail.com</a></div>
              <div><a href="https://share.google/cmaiQgwb1FsV2jdfj" target="_blank" rel="noopener noreferrer" className="hover:text-swarna-300 text-stone-400 inline-flex items-center gap-1"><span>Google Business Listing ↗</span></a></div>
              <div><a href="https://www.facebook.com/thekumbhcottage/" target="_blank" rel="noopener noreferrer" className="hover:text-swarna-300 text-stone-400 inline-flex items-center gap-1"><span>Official Facebook ↗</span></a></div>
            </div>
          </div>

        </div>

        {/* Thematic Quick Internal Linking Strip */}
        <div className="py-4 border-b border-white/10 text-[10px] text-stone-400 space-y-2 font-sans font-light">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-serif text-stone-300 uppercase text-[9px] tracking-wider">City Guides:</span>
            <Link to="/guides/prayagraj-allahabad-complete-pilgrimage-travel-guide" className="hover:text-white">Prayagraj</Link>
            <span>·</span>
            <Link to="/guides/nashik-complete-pilgrimage-and-tourism-travel-guide" className="hover:text-white">Nashik</Link>
            <span>·</span>
            <Link to="/guides/haridwar-rishikesh-complete-pilgrimage-travel-guide" className="hover:text-white">Haridwar</Link>
            <span>·</span>
            <Link to="/guides/mahakaleshwar-ujjain-jyotirlinga-bhasma-aarti-simhastha-guide" className="hover:text-white">Ujjain</Link>
            <span>·</span>
            <Link to="/guides/trimbakeshwar-jyotirlinga-temple-darshan-guide-rituals" className="hover:text-white">Trimbakeshwar</Link>
            <span>·</span>
            <Link to="/guides/panchavati-nashik-ramayana-sites-complete-pilgrimage-guide" className="hover:text-white">Panchavati</Link>
            <span>·</span>
            <Link to="/guides/godavari-river-nashik-kumbh-significance-ghats-parikrama" className="hover:text-white">Godavari River</Link>
            <span>·</span>
            <Link to="/guides/ganga-aarti-haridwar-har-ki-pauri-timing-rituals-guide" className="hover:text-white">Har Ki Pauri Ganga Aarti</Link>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-serif text-stone-300 uppercase text-[9px] tracking-wider">Spiritual & Logistics:</span>
            <Link to="/guides/astronomical-science-of-kumbh-mela-planetary-alignments" className="hover:text-white">Planetary Astronomy</Link>
            <span>·</span>
            <Link to="/guides/kumbh-mela-shahi-snan-dates-rituals-spiritual-significance" className="hover:text-white">Shahi Snan Dates</Link>
            <span>·</span>
            <Link to="/guides/akhara-traditions-naga-sadhus-and-spiritual-lineages" className="hover:text-white">13 Akharas & Naga Sadhus</Link>
            <span>·</span>
            <Link to="/guides/kalpavas-discipline-spiritual-science-of-riverside-living" className="hover:text-white">Kalpavas 30-Day Vow</Link>
            <span>·</span>
            <Link to="/guides/kumbh-mela-accommodation-guide-luxury-tents-vs-hotels" className="hover:text-white">Cottages vs Hotels</Link>
            <span>·</span>
            <Link to="/guides/multi-generational-family-elder-pilgrimage-guide" className="hover:text-white">Elder Accessibility</Link>
            <span>·</span>
            <Link to="/guides/pure-sattvic-ayurvedic-dining-guide" className="hover:text-white">A2 Ghee Annakshetra</Link>
            <span>·</span>
            <Link to="/guides/first-time-sacred-travel-in-india-practical-guide" className="hover:text-white">First-Time Sacred Travel</Link>
            <span>·</span>
            <Link to="/guides/samruddhi-expressway-mumbai-pune-to-nashik-kumbh-transit-guide" className="hover:text-white">Samruddhi Expressway</Link>
          </div>
        </div>

        {/* Bottom Legal & Accreditations */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-stone-500">
          <div className="flex items-center gap-2">
            <span>© 2001–2027 The Kumbh Cottages · A Raamvan Retreats Global Venture. All Rights Reserved.</span>
            <span>•</span>
            <span>ISO 9001:2015 & HACCP Compliant</span>
          </div>

          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="p-1 text-stone-400 hover:text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
