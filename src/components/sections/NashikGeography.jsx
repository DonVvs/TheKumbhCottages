import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Clock, ShieldCheck, HeartPulse, ChevronRight } from 'lucide-react';
import { TRANSIT_LANDMARKS } from '../../data/transitData';
import { TRANSLATIONS } from '../../data/translationsData';

export default function NashikGeography({ lang = 'en' }) {
  const [selectedLandmark, setSelectedLandmark] = useState(TRANSIT_LANDMARKS[0]);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <section className="py-20 bg-cream-50 text-espresso-950 border-b border-cream-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kesar-100 border border-kesar-500/30 text-kesar-700 text-xs font-serif font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>॥ Sacred Godavari Riverfront Sanctuary ॥</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 tracking-tight">
            {t.transit_heading}
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-sans mt-3">
            {t.transit_subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Map & Sanctuary Layout */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border-2 border-swarna-400/40 shadow-xl aspect-[16/10] bg-[#120E0A]">
              <img
                src="/hero-poster.webp"
                alt="Sanctuary Map Topography"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Animated Hotspot Pins */}
              {TRANSIT_LANDMARKS.map((landmark, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedLandmark(landmark)}
                  style={{ top: landmark.coordinates.y, left: landmark.coordinates.x }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none`}
                >
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-kesar-500/40 hotspot-pulse" />
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 shadow-lg transition-transform group-hover:scale-125 ${
                      selectedLandmark.name === landmark.name
                        ? 'bg-swarna-400 border-white text-espresso-950 scale-110'
                        : 'bg-kesar-600 border-white text-white'
                    }`}>
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <span className="absolute top-7 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[10px] font-sans px-2 py-0.5 rounded whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    {landmark.name}
                  </span>
                </button>
              ))}

              {/* In-Map Active Location Highlight Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0F0C09]/90 backdrop-blur-md p-4 rounded-2xl border border-swarna-400/40 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase font-serif text-swarna-300 font-semibold flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-kesar-400" />
                    <span>{selectedLandmark.type}</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    {selectedLandmark.name}
                  </h4>
                  <p className="text-xs text-stone-300 mt-0.5 line-clamp-1">
                    {selectedLandmark.significance}
                  </p>
                </div>
                <div className="text-right flex-shrink-0 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                  <div className="font-mono font-bold text-swarna-200 text-sm">{selectedLandmark.transitTime}</div>
                  <div className="text-[10px] text-stone-400">{selectedLandmark.distance} via Green Corridor</div>
                </div>
              </div>
            </div>

            {/* Elder Accessibility Boardwalk Banner */}
            <div className="river-glass-card p-5 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-swarna-500/20 text-swarna-800 flex items-center justify-center flex-shrink-0 mt-1">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-xs">
                <h4 className="font-serif font-bold text-sm text-espresso-950">
                  Step-Free Elder Boardwalks & 24/7 Medical Triage
                </h4>
                <p className="text-espresso-700 leading-relaxed font-sans">
                  The entire 28-acre sanctuary features slip-resistant timber ramps, on-demand electric golf cart mobility, and a doctor-on-call medical clinic with cardiac emergency backup.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Transit Landmark Matrix */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-serif text-lg font-bold text-espresso-950 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-swarna-600" />
              <span>Sacred Pilgrimage Transit Matrix</span>
            </h3>

            <div className="space-y-2.5">
              {TRANSIT_LANDMARKS.map((item, index) => {
                const isSelected = selectedLandmark.name === item.name;
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedLandmark(item)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                      isSelected
                        ? 'bg-white border-swarna-500 shadow-md ring-1 ring-swarna-400/30'
                        : 'bg-white/60 border-cream-300 hover:bg-white hover:border-swarna-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-sm text-espresso-950">{item.name}</span>
                        <span className="text-[10px] text-kesar-600 font-semibold px-2 py-0.5 rounded-full bg-kesar-100">{item.type}</span>
                      </div>
                      <div className="text-xs text-espresso-700 mt-1 flex items-center gap-2">
                        <span className="font-mono text-espresso-950 font-semibold">{item.distance}</span>
                        <span>•</span>
                        <span>{item.transitMode}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-mono font-bold text-sm text-swarna-700 bg-cream-100 px-2.5 py-1 rounded-lg border border-cream-300">
                        {item.transitTime}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
