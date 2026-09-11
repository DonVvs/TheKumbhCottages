import React from 'react';
import { Phone } from 'lucide-react';
import { TRANSLATIONS } from '../../data/translationsData';

export default function AuspiciousTopRibbon({ lang = 'en' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <div className="bg-[#080604] border-b border-white/[0.04] py-1.5 px-4 sm:px-6 lg:px-8 text-[10px] sm:text-[11px] font-sans text-stone-400 z-50 relative">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
        
        {/* Sacred Lineage Inscription */}
        <div className="flex items-center justify-center gap-2">
          <span className="font-serif tracking-[0.15em] text-swarna-300/85 uppercase text-[10px]">
            {t.ribbon_text}
          </span>
        </div>

        {/* Right Circuits & Direct Helpline */}
        <div className="flex items-center gap-3 text-[10px] text-stone-400">
          <span className="hidden lg:inline text-stone-400/90 font-light tracking-wide">
            Nashik · Ujjain · Haridwar · Prayagraj
          </span>
          <span className="hidden lg:inline text-stone-600">|</span>
          <a
            href="tel:+919889933333"
            className="inline-flex items-center gap-1.5 text-stone-300 hover:text-swarna-300 transition-colors font-mono"
          >
            <Phone className="w-2.5 h-2.5 text-swarna-400 flex-shrink-0" />
            <span className="tracking-normal">+91 98899 33333</span>
          </a>
        </div>

      </div>
    </div>
  );
}

