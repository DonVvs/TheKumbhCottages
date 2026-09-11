import React from 'react';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { formatPrice } from '../../utils/priceFormatter';

export default function MobileStickyCTA({ onOpenBooking, currency = 'INR' }) {
  const minPrice = 22000;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F0C09]/95 backdrop-blur-xl border-t border-[#C5A059]/30 px-4 py-2.5 shadow-2xl pb-safe">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        
        {/* WhatsApp Direct Action */}
        <a
          href="https://wa.me/919889933333?text=Pranam%20TheKumbhCottages%2C%20I%20would%20like%20to%20reserve%20a%20luxury%20cottage%20for%20Nashik%20Simhastha%202027."
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-emerald-700/80 border border-emerald-400/50 flex items-center justify-center text-white shadow-lg active:scale-95 transition-transform flex-shrink-0"
          aria-label="Contact via WhatsApp"
        >
          <MessageSquare className="w-5 h-5 text-white" />
        </a>

        {/* Starting Tariff Preview */}
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-medium tracking-wider text-stone-400">
            From
          </span>
          <span className="font-mono font-bold text-sm text-swarna-300">
            {formatPrice(minPrice, currency)} <span className="text-[10px] text-stone-400 font-sans">/ nt</span>
          </span>
        </div>

        {/* Primary Reserve Action Button */}
        <button
          onClick={() => onOpenBooking()}
          className="btn-darbar-gold flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-serif font-bold shadow-lg flex items-center justify-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Reserve Cottage</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
}
