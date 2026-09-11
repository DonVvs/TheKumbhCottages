import React from 'react';
import { Sparkles, Shield, Flame, Compass, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { ADD_ONS } from '../../data/staysData';
import { formatPrice } from '../../utils/priceFormatter';

export default function SacredSevaServices({ onOpenBooking, currency = 'INR' }) {
  return (
    <section className="py-20 bg-cream-50 text-espresso-950 border-b border-cream-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kesar-100 border border-kesar-500/30 text-kesar-700 text-xs font-serif font-semibold mb-3">
            <Flame className="w-3.5 h-3.5 text-kesar-600" />
            <span>॥ Consecrated Vedic Seva & Pilgrimage Inclusions ॥</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 tracking-tight">
            VIP Pilgrimage Corridors & Sacred Rituals
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-sans mt-3">
            Seamless Vedic coordination, fast-track temple authorizations, and dedicated personal assistants for elderly devotees.
          </p>
        </div>

        {/* Add-ons / Seva Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADD_ONS.map((service) => (
            <div
              key={service.id}
              className="temple-panel temple-card-hover p-6 rounded-2xl flex flex-col justify-between border border-cream-300 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-kesar-600 px-2.5 py-1 rounded-full bg-kesar-100 border border-kesar-200">
                    {service.category}
                  </span>
                  <span className="font-mono font-bold text-sm text-espresso-950">
                    {formatPrice(service.priceINR, currency)}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-espresso-950 group-hover:text-swarna-700 transition-colors">
                  {service.name}
                </h3>

                <p className="text-xs text-espresso-700 leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-cream-200 flex items-center justify-between">
                <span className="text-[11px] text-stone-500 font-serif italic">Pre-Arranged by Concierge</span>
                <button
                  onClick={() => onOpenBooking()}
                  className="text-xs font-serif font-bold text-swarna-700 hover:text-swarna-900 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Include in Booking</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
