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
              className="w-7 h-7 rounded-full border border-swarna-400/40 object-cover"
            />
            <div>
              <div className="font-serif text-sm text-stone-100 font-normal tracking-wide">
                The Kumbh Cottages
              </div>
              <div className="text-[9px] text-stone-400 uppercase tracking-[0.2em] font-sans font-medium">
                Arc Media Sacred Hospitality & Infrastructure Group · Est. 2001
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
              <li><Link to="/kumbh-directory" className="hover:text-white transition-colors">Universal Almanac</Link></li>
              <li><Link to="/kumbh-directory/prayagraj-maha-kumbh" className="hover:text-white transition-colors">Prayagraj Guide</Link></li>
              <li><Link to="/kumbh-directory/nashik-simhastha-kumbh" className="hover:text-white transition-colors">Nashik Simhastha Guide</Link></li>
              <li><Link to="/kumbh-directory/haridwar-maha-kumbh" className="hover:text-white transition-colors">Haridwar Guide</Link></li>
              <li><Link to="/kumbh-directory/ujjain-simhastha-kumbh" className="hover:text-white transition-colors">Ujjain Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-stone-300 uppercase tracking-wider text-[10px] mb-2 font-normal">
              Travel & Kumbh Guides
            </h4>
            <ul className="space-y-1 text-stone-400 font-light">
              <li><Link to="/sacred-travel-and-kumbh-guides" className="hover:text-white transition-colors text-swarna-300">All Guides Hub</Link></li>
              <li><Link to="/guides/first-time-sacred-travel-in-india-practical-guide" className="hover:text-white transition-colors">First-Time Sacred Travel</Link></li>
              <li><Link to="/guides/multi-generational-family-elder-pilgrimage-guide" className="hover:text-white transition-colors">Elder Pilgrimage Guide</Link></li>
              <li><Link to="/guides/pure-sattvic-ayurvedic-dining-guide" className="hover:text-white transition-colors">Pure Sattvic Dining Science</Link></li>
              <li><Link to="/guides/astronomical-science-of-kumbh-mela-planetary-alignments" className="hover:text-white transition-colors">Astronomical Amrit Snan</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-stone-300 uppercase tracking-wider text-[10px] mb-2 font-normal">
              Corporate Liaison
            </h4>
            <div className="space-y-1 text-stone-400 font-light">
              <div>New Delhi & Nashik, India</div>
              <div>Tel: <a href="tel:+919889933333" className="hover:text-white font-mono">+91 98899 33333</a></div>
              <div>Email: <a href="mailto:corporate@thekumbhcottages.com" className="hover:text-white">corporate@thekumbhcottages.com</a></div>
              <div><a href="https://share.google/cmaiQgwb1FsV2jdfj" target="_blank" rel="noopener noreferrer" className="hover:text-swarna-300 text-stone-400 inline-flex items-center gap-1"><span>Google Business Listing ↗</span></a></div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Accreditations */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-stone-500">
          <div className="flex items-center gap-2">
            <span>© 2001–2027 The Kumbh Cottages · An Arc Media Enterprise. All Rights Reserved.</span>
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
