import React, { useState, useEffect, useCallback } from 'react';
import { 
  Camera, 
  Sparkles, 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  MapPin,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { CAMP_GALLERY_CATEGORIES, CAMP_GALLERY_PHOTOS } from '../../data/campGalleryData';

export default function AuthenticCampGallery({ initialCategory = 'all', limit = null }) {
  const [activeTab, setActiveTab] = useState(initialCategory);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Filtered photos based on active tab
  const filteredPhotos = activeTab === 'all'
    ? CAMP_GALLERY_PHOTOS
    : CAMP_GALLERY_PHOTOS.filter(photo => photo.category === activeTab);

  const displayPhotos = limit ? filteredPhotos.slice(0, limit) : filteredPhotos;

  // Handle Tab Switch with smooth micro-animation
  const handleTabChange = (categoryId) => {
    setIsAnimating(true);
    setActiveTab(categoryId);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Open Lightbox
  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Close Lightbox
  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  // Navigate Lightbox
  const showPrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : displayPhotos.length - 1));
  }, [displayPhotos.length]);

  const showNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev < displayPhotos.length - 1 ? prev + 1 : 0));
  }, [displayPhotos.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const currentPhoto = lightboxIndex !== null ? displayPhotos[lightboxIndex] : null;

  return (
    <section 
      id="authentic-camp-gallery" 
      className="py-16 sm:py-24 bg-[#0F0D0A] text-stone-100 relative overflow-hidden"
    >
      {/* Background Ambience / Subtle Vedic Motif */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-swarna-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-swarna-500/30 text-swarna-300 text-[11px] font-sans tracking-[0.2em] uppercase mb-4 shadow-inner">
            <Camera className="w-3.5 h-3.5 text-swarna-400 animate-pulse" />
            <span>Authentic Ground Photography · 100% Real Campus</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight mb-4">
            Sanctuary in Focus: The Real Kumbh Experience
          </h2>

          <p className="font-sans text-sm sm:text-base text-stone-300 font-light leading-relaxed">
            Direct visual documentation of our turnkey riverfront canvas enclaves, handcrafted teak interiors, ensuite western ceramic bathrooms, pure A2 Annakshetra dining, and sacred Sangam boat snan seva.
          </p>

          <div className="flex items-center justify-center gap-6 mt-6 text-[11px] font-mono text-stone-400">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-swarna-400" />
              <span>Verified On-Ground Operations</span>
            </span>
            <span className="text-stone-700">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-swarna-400" />
              <span>Unfiltered Devotee Moments</span>
            </span>
          </div>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none no-scrollbar">
          {CAMP_GALLERY_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            const count = cat.id === 'all' 
              ? CAMP_GALLERY_PHOTOS.length 
              : CAMP_GALLERY_PHOTOS.filter(p => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-swarna-500 text-stone-950 font-medium shadow-[0_0_20px_rgba(197,168,128,0.35)] scale-105'
                    : 'bg-white/[0.05] text-stone-300 hover:bg-white/[0.1] hover:text-white border border-white/[0.06]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-stone-950/20 text-stone-950' : 'bg-white/10 text-stone-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid with Smooth Stagger Transitions */}
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-out ${
            isAnimating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
          }`}
        >
          {displayPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-xl overflow-hidden bg-stone-900/80 border border-white/[0.08] hover:border-swarna-500/50 transition-all duration-500 shadow-lg hover:shadow-[0_12px_30px_rgba(0,0,0,0.8)] cursor-pointer flex flex-col"
            >
              {/* Image Container with Smooth Scale Effect */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.96] group-hover:brightness-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Tag Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[9px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-swarna-300 border border-swarna-500/30">
                    {photo.tag}
                  </span>
                </div>

                {/* Interactive Zoom Pill Button */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <div className="w-8 h-8 rounded-full bg-swarna-500/90 text-stone-950 flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Floating Bottom Info within Image */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h3 className="font-serif text-base sm:text-lg text-white font-normal leading-snug group-hover:text-swarna-300 transition-colors">
                    {photo.title}
                  </h3>
                  <div className="text-[10px] font-sans text-stone-300 line-clamp-1 mt-0.5">
                    {photo.categoryLabel}
                  </div>
                </div>
              </div>

              {/* Descriptive Caption Card Bottom */}
              <div className="p-4 bg-[#14110E] border-t border-white/[0.05] flex-1 flex flex-col justify-between">
                <p className="text-xs text-stone-400 font-sans leading-relaxed line-clamp-2">
                  {photo.caption}
                </p>

                <div className="mt-3 pt-2.5 border-t border-white/[0.04] flex items-center justify-between text-[10px] text-stone-500 font-sans">
                  <span className="tracking-wider uppercase text-swarna-400/80 font-mono">
                    Raamvan Retreats
                  </span>
                  <span className="inline-flex items-center gap-1 text-stone-400 group-hover:text-white transition-colors">
                    <span>Inspect</span>
                    <ArrowRight className="w-2.5 h-2.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-900/90 via-[#1A1612] to-stone-900/90 border border-swarna-500/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-center md:text-left">
          <div className="space-y-1.5 max-w-2xl">
            <div className="font-serif text-lg sm:text-xl text-white">
              Experience Authentic Sovereign Pilgrimage First-Hand
            </div>
            <p className="font-sans text-xs sm:text-sm text-stone-300 font-light">
              All cottages include insulated European fly architecture, attached western ceramic bathrooms, 24/7 geyser hot water, and pure Gir cow A2 Desi Ghee Annakshetra dining.
            </p>
          </div>

          <a
            href="/destinations"
            className="px-6 py-3 rounded-full bg-swarna-500 text-stone-950 font-sans font-medium text-xs tracking-wider uppercase hover:bg-swarna-400 transition-all shadow-[0_0_25px_rgba(197,168,128,0.3)] hover:scale-105 shrink-0 inline-flex items-center gap-2"
          >
            <span>Explore Sanctuary Destinations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* ─── FULLSCREEN LIGHTBOX MODAL ─── */}
      {currentPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fadeIn p-3 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Top Bar Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-50 text-stone-300">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono text-swarna-300 border border-white/10">
                {lightboxIndex + 1} / {displayPhotos.length}
              </span>
              <span className="hidden sm:inline text-xs font-serif text-stone-300">
                {currentPhoto.categoryLabel}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer shadow-lg"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Left Navigation Arrow */}
          <button
            onClick={showPrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 hover:bg-swarna-500 hover:text-stone-950 text-white transition-all cursor-pointer backdrop-blur-md border border-white/10"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={showNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 hover:bg-swarna-500 hover:text-stone-950 text-white transition-all cursor-pointer backdrop-blur-md border border-white/10"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Center */}
          <div 
            className="max-w-5xl max-h-[92vh] w-full flex flex-col items-center justify-center z-40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-xl overflow-hidden border border-white/15 bg-stone-950 shadow-2xl max-h-[75vh] flex items-center justify-center">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                title={currentPhoto.title}
                className="max-h-[75vh] max-w-full object-contain select-none animate-zoomIn"
              />
            </div>

            {/* Lightbox Caption Box */}
            <div className="mt-4 text-center max-w-2xl px-4">
              <h4 className="font-serif text-lg sm:text-xl text-white font-normal mb-1">
                {currentPhoto.title}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                {currentPhoto.caption}
              </p>
              <div className="mt-2 text-[10px] font-mono text-swarna-400 tracking-wider uppercase">
                The Kumbh Cottages · A Raamvan Retreats Global Venture
              </div>
            </div>
          </div>

        </div>
      )}

    </section>
  );
}
