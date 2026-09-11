import React from 'react';
import { X, Check, Sparkles, Bed, Maximize2, Users, Eye, ArrowRight } from 'lucide-react';
import { formatPrice } from '../../utils/priceFormatter';

export default function StayDetailModal({ stay, isOpen, onClose, onReserve, currency = 'INR' }) {
  if (!isOpen || !stay) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      <div className="relative w-full max-w-3xl bg-[#FAF7F2] text-espresso-950 rounded-2xl sm:rounded-3xl border border-swarna-400/50 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-[#1A120B] text-white px-6 py-4 flex items-center justify-between border-b border-swarna-400/30">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-swarna-400 font-bold">
              {stay.badge}
            </span>
            <h3 className="font-serif text-lg sm:text-xl text-white">
              {stay.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-stone-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {/* Main Hero Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-video border border-cream-300 shadow-md">
            <img
              src={stay.image}
              alt={stay.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-espresso-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-swarna-400/50 text-swarna-300 font-mono font-bold text-sm">
              {formatPrice(stay.priceINR, currency)} <span className="text-xs font-sans text-stone-300">/ night</span>
            </div>
          </div>

          {/* Key Specs Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-xl border border-cream-300 text-xs">
            <div className="flex items-center gap-2 text-espresso-800">
              <Maximize2 className="w-4 h-4 text-swarna-600 flex-shrink-0" />
              <span><strong>Area:</strong> {stay.area}</span>
            </div>
            <div className="flex items-center gap-2 text-espresso-800">
              <Bed className="w-4 h-4 text-swarna-600 flex-shrink-0" />
              <span><strong>Bed:</strong> {stay.bed}</span>
            </div>
            <div className="flex items-center gap-2 text-espresso-800">
              <Users className="w-4 h-4 text-swarna-600 flex-shrink-0" />
              <span><strong>Cap:</strong> {stay.capacity}</span>
            </div>
            <div className="flex items-center gap-2 text-espresso-800">
              <Eye className="w-4 h-4 text-swarna-600 flex-shrink-0" />
              <span><strong>View:</strong> {stay.view}</span>
            </div>
          </div>

          {/* Narrative Description */}
          <div>
            <h4 className="font-serif font-bold text-base text-espresso-950 mb-2">
              Sanctuary Description
            </h4>
            <p className="text-sm text-espresso-800 leading-relaxed">
              {stay.description}
            </p>
          </div>

          {/* Features & Inclusions */}
          <div>
            <h4 className="font-serif font-bold text-base text-espresso-950 mb-3">
              Included Sovereign Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {stay.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-espresso-800">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-swarna-500/20 text-swarna-700 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-cream-100 border-t border-cream-300 px-6 py-4 flex items-center justify-between gap-4">
          <div className="text-xs text-stone-500">
            * 100% Desi Ghee Annakshetra Dining Included
          </div>
          <button
            onClick={() => {
              onClose();
              onReserve(stay.id);
            }}
            className="btn-darbar-gold px-6 py-3 rounded-xl text-sm font-serif font-bold shadow-lg flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Reserve This Stay</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
