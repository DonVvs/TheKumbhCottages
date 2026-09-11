import React from 'react';
import { Phone } from 'lucide-react';
import { TRANSLATIONS } from '../../data/translationsData';

export default function AuspiciousTopRibbon({ lang = 'en' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <div className="bg-[#0B0907]/90 backdrop-blur-md border-b border-white/[0.08] py-2 px-4 sm:px-6 lg:px-8 text-[10px] font-sans text-stone-300 z-50 relative">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        
        {/* Corporate Group Attribution */}
        <div className="flex items-center justify-center gap-3">
          <span className="font-sans font-medium tracking-[0.2em] text-white/90 uppercase text-[9px] sm:text-[10px]">
            Arc Media · Sacred Hospitality & Infrastructure Group
          </span>
          <span className="hidden sm:inline text-stone-600">·</span>
          <span className="hidden sm:inline font-serif italic text-swarna-400 text-[11px]">
            Est. 2001
          </span>
        </div>

        {/* Right Circuits & Direct Helpline */}
        <div className="flex items-center gap-4 text-[10px] text-stone-300">
          <span className="hidden lg:inline text-stone-400 tracking-[0.12em] uppercase font-light text-[9px]">
            Nashik 2027 · Ujjain 2028 · Haridwar · Prayagraj
          </span>
          <span className="hidden lg:inline text-stone-700">|</span>
          <a
            href="tel:+919889933333"
            className="inline-flex items-center gap-1.5 text-stone-200 hover:text-swarna-300 transition-colors font-mono tracking-wider"
          >
            <Phone className="w-2.5 h-2.5 text-swarna-400 flex-shrink-0" />
            <span>+91 98899 33333</span>
          </a>
        </div>

      </div>
    </div>
  );
}

