import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingConciergeButtons() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-40 flex items-center gap-1.5 sm:gap-2">
      {/* WhatsApp Quick Liaison Micro-button */}
      <a
        href="https://wa.me/919889933333?text=Pranam%20TheKumbhCottages%20Directorate%2C%20I%20am%20inquiring%20about%20corporate%20camps%20and%20pilgrimage%20sanctuaries."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-[#120E0A]/95 backdrop-blur-md border border-swarna-500/40 hover:border-swarna-400 text-swarna-300 hover:text-white flex items-center justify-center transition-all shadow-lg active:scale-95"
        aria-label="WhatsApp Liaison Desk"
      >
        <MessageSquare className="w-3.5 h-3.5 text-swarna-300" />
      </a>

      {showTooltip && (
        <div className="hidden sm:block absolute right-10 top-1/2 -translate-y-1/2 bg-[#0E0A07] border border-stone-700 text-stone-300 text-[10px] px-2.5 py-1 rounded whitespace-nowrap shadow-md font-sans animate-fadeIn">
          WhatsApp Desk
        </div>
      )}

      {/* Corporate Contact Micro-link */}
      <Link
        to="/corporate-contact"
        className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-[#120E0A]/95 backdrop-blur-md border border-stone-700 hover:border-swarna-400 text-stone-300 hover:text-white text-[9px] sm:text-[10px] tracking-wider uppercase font-medium flex items-center gap-1.5 transition-all shadow-lg active:scale-95"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-swarna-400 animate-pulse" />
        <span className="font-sans">Liaison Desk</span>
      </Link>
    </div>
  );
}

