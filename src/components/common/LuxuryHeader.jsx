import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink, Phone } from 'lucide-react';
import { TRANSLATIONS } from '../../data/translationsData';

export default function LuxuryHeader({
  lang,
  setLang,
  onOpenInquiry
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsDropdown, setDestinationsDropdown] = useState(false);
  const [directoryDropdown, setDirectoryDropdown] = useState(false);
  const location = useLocation();
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDestinationsDropdown(false);
    setDirectoryDropdown(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled || !isHome
          ? 'bg-[#0B0907]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/80 via-black/35 to-transparent backdrop-blur-[1px] border-b border-white/[0.04] py-3.5 sm:py-4'
      }`}
    >
      {/* Top Integrated Micro-Ribbon (Only in top state on desktop) */}
      {(!isScrolled && isHome) && (
        <div className="hidden lg:block border-b border-white/10 pb-2 mb-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] font-sans text-stone-300">
            <div className="flex items-center gap-3 tracking-[0.2em] uppercase text-[9px] text-white/90">
              <span className="font-semibold text-swarna-300">Raamvan Retreats</span>
              <span className="text-white/30">|</span>
              <span className="text-stone-300">Sacred Hospitality & Infrastructure</span>
              <span className="text-white/30">|</span>
              <span className="font-serif italic text-swarna-400 capitalize">Est. 2001</span>
            </div>

            <div className="flex items-center gap-4 text-[10px]">
              <span className="tracking-[0.14em] uppercase text-stone-300 font-light text-[9px]">
                Nashik 2027 · Ujjain 2028 · Haridwar · Prayagraj
              </span>
              <span className="text-white/20">|</span>
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
      )}

      {/* Main Navigation Bar Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 xl:gap-8 w-full min-w-0">
          
          {/* Brand Seal & Parent Title */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group text-left shrink-0">
            <img
              src="/assets/brand/emblem.webp"
              alt="The Kumbh Cottages Seal"
              width="32"
              height="32"
              decoding="async"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-swarna-400/60 object-cover shrink-0 group-hover:border-swarna-300 transition-colors shadow-xs"
            />
            <div className="shrink-0">
              <span className="block font-serif text-sm sm:text-base lg:text-lg font-normal tracking-[0.02em] text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] group-hover:text-swarna-200 transition-colors leading-tight whitespace-nowrap">
                The Kumbh Cottages
              </span>
              <span className="block text-[7.5px] sm:text-[8.5px] lg:text-[9px] font-sans text-stone-300 font-medium tracking-[0.08em] sm:tracking-[0.1em] uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] whitespace-nowrap">
                A Raamvan Retreats Global Venture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (5 Curated Items) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[11px] xl:text-[12px] font-sans tracking-[0.16em] uppercase font-medium text-stone-200">
            
            {/* 1. Destinations Dropdown */}
            <div
              className="relative py-1.5"
              onMouseEnter={() => setDestinationsDropdown(true)}
              onMouseLeave={() => setDestinationsDropdown(false)}
            >
              <Link
                to="/destinations"
                className={`transition-colors flex items-center gap-1 whitespace-nowrap relative drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${
                  location.pathname.startsWith('/destinations')
                    ? 'text-swarna-300 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-swarna-400'
                    : 'hover:text-white'
                }`}
              >
                <span>Destinations</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${destinationsDropdown ? 'rotate-180 text-swarna-300' : 'text-stone-300'}`} />
              </Link>

              {destinationsDropdown && (
                <div className="absolute top-full left-0 w-64 bg-[#0E0C0A]/95 backdrop-blur-2xl border border-white/15 rounded-md shadow-2xl p-2 z-50 animate-fadeIn normal-case tracking-normal">
                  <a
                    href="https://kumbhcottagesnashik.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded hover:bg-white/10 transition-colors flex items-center justify-between text-xs text-swarna-300 hover:text-white font-serif"
                  >
                    <div>
                      <div className="font-medium text-swarna-200">Nashik Simhastha 2027</div>
                      <div className="text-[10px] font-mono text-stone-400">kumbhcottagesnashik.com ↗</div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-swarna-400" />
                  </a>
                  <div className="h-px bg-white/10 my-1" />
                  <Link
                    to="/destinations#ujjain"
                    className="p-2 rounded hover:bg-white/10 transition-colors block text-xs text-stone-200 hover:text-white"
                  >
                    Ujjain (Shipra Riverfront)
                  </Link>
                  <Link
                    to="/destinations#haridwar"
                    className="p-2 rounded hover:bg-white/10 transition-colors block text-xs text-stone-200 hover:text-white"
                  >
                    Haridwar (Ganga Sanctuary)
                  </Link>
                  <Link
                    to="/destinations#prayagraj"
                    className="p-2 rounded hover:bg-white/10 transition-colors block text-xs text-stone-300 hover:text-white border-t border-white/10 mt-1 pt-1.5"
                  >
                    Prayagraj Foundation (Est. 2001)
                  </Link>
                </div>
              )}
            </div>

            {/* 2. Infrastructure & Capabilities */}
            <Link
              to="/capabilities-infrastructure"
              className={`transition-colors py-1.5 whitespace-nowrap relative drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${
                location.pathname === '/capabilities-infrastructure'
                  ? 'text-swarna-300 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-swarna-400'
                  : 'hover:text-white'
              }`}
            >
              Infrastructure
            </Link>

            {/* 3. Heritage (25 Years Since 2001) */}
            <Link
              to="/heritage-since-2001"
              className={`transition-colors py-1.5 whitespace-nowrap relative drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${
                location.pathname === '/heritage-since-2001'
                  ? 'text-swarna-300 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-swarna-400'
                  : 'hover:text-white'
              }`}
            >
              Heritage
            </Link>

            {/* 4. Almanac & Guides Dropdown */}
            <div
              className="relative py-1.5"
              onMouseEnter={() => setDirectoryDropdown(true)}
              onMouseLeave={() => setDirectoryDropdown(false)}
            >
              <Link
                to="/kumbh-directory"
                className={`transition-colors flex items-center gap-1 whitespace-nowrap relative drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${
                  location.pathname.startsWith('/kumbh-directory') || location.pathname.startsWith('/sacred-travel') || location.pathname.startsWith('/guides')
                    ? 'text-swarna-300 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-swarna-400'
                    : 'hover:text-white'
                }`}
              >
                <span>Directory & Guides</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${directoryDropdown ? 'rotate-180 text-swarna-300' : 'text-stone-300'}`} />
              </Link>

              {directoryDropdown && (
                <div className="absolute top-full left-0 w-72 bg-[#0E0C0A]/95 backdrop-blur-2xl border border-white/15 rounded-md shadow-2xl p-2 z-50 animate-fadeIn normal-case tracking-normal">
                  <Link
                    to="/kumbh-directory"
                    className="p-2.5 rounded hover:bg-white/10 transition-colors block text-xs text-swarna-300 font-serif font-medium border-b border-white/10 mb-1"
                  >
                    Universal Kumbh Almanac
                  </Link>
                  <Link
                    to="/kumbh-directory/prayagraj-maha-kumbh"
                    className="p-2 rounded hover:bg-white/10 transition-colors block text-xs text-stone-200 hover:text-white"
                  >
                    Prayagraj Maha Kumbh Guide
                  </Link>
                  <Link
                    to="/kumbh-directory/nashik-simhastha-kumbh"
                    className="p-2 rounded hover:bg-white/10 transition-colors block text-xs text-stone-200 hover:text-white"
                  >
                    Nashik Simhastha 2027 Guide
                  </Link>
                  <Link
                    to="/kumbh-directory/ujjain-simhastha-kumbh"
                    className="p-2 rounded hover:bg-white/10 transition-colors block text-xs text-stone-200 hover:text-white"
                  >
                    Ujjain Simhastha Guide
                  </Link>
                  <Link
                    to="/kumbh-directory/haridwar-maha-kumbh"
                    className="p-2 rounded hover:bg-white/10 transition-colors block text-xs text-stone-200 hover:text-white"
                  >
                    Haridwar Maha Kumbh Guide
                  </Link>
                  <div className="h-px bg-white/10 my-1" />
                  <Link
                    to="/sacred-travel-and-kumbh-guides"
                    className="p-2 rounded hover:bg-white/10 transition-colors block text-xs text-stone-300 hover:text-white"
                  >
                    Sacred Travel in India Journal ↗
                  </Link>
                </div>
              )}
            </div>

            {/* 5. Contact */}
            <Link
              to="/corporate-contact"
              className={`transition-colors py-1.5 whitespace-nowrap relative drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${
                location.pathname === '/corporate-contact'
                  ? 'text-swarna-300 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-swarna-400'
                  : 'hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Controls (Guaranteed to NEVER overflow) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
            
            {/* Language Switcher Pill */}
            <div className="flex items-center border border-white/20 bg-black/40 backdrop-blur-md rounded-xs px-2.5 py-1 text-[10px] font-sans tracking-widest text-stone-300">
              <button
                onClick={() => setLang('en')}
                className={`px-1 py-0.5 transition-colors cursor-pointer ${lang === 'en' ? 'text-swarna-300 font-bold' : 'hover:text-white'}`}
              >
                EN
              </button>
              <span className="text-white/25 mx-1">/</span>
              <button
                onClick={() => setLang('hi')}
                className={`px-1 py-0.5 transition-colors cursor-pointer ${lang === 'hi' ? 'text-swarna-300 font-bold' : 'hover:text-white'}`}
              >
                हिं
              </button>
              <span className="text-white/25 mx-1">/</span>
              <button
                onClick={() => setLang('mr')}
                className={`px-1 py-0.5 transition-colors cursor-pointer ${lang === 'mr' ? 'text-swarna-300 font-bold' : 'hover:text-white'}`}
              >
                मरा
              </button>
            </div>

            {/* Inquire Button */}
            <button
              onClick={() => onOpenInquiry()}
              className="px-4 py-1.5 xl:px-5 xl:py-2 rounded-xs border border-swarna-400 bg-swarna-400 text-stone-950 hover:bg-swarna-300 hover:border-swarna-300 text-[11px] uppercase tracking-[0.16em] font-medium transition-all duration-300 cursor-pointer whitespace-nowrap shadow-sm"
            >
              Inquire
            </button>
          </div>

          {/* Mobile Right Controls (Guaranteed to be fully visible on all mobile screens) */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0 ml-1 sm:ml-2">
            <button
              onClick={() => onOpenInquiry()}
              className="px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-xs border border-swarna-400 bg-swarna-400 text-stone-950 text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold active:scale-95 transition-transform whitespace-nowrap shadow-xs"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xs text-stone-200 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] active:scale-95 transition-transform"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-swarna-300" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0907]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-3.5 text-xs animate-fadeIn font-light shadow-2xl mt-3">
          
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-stone-400">
            <span className="text-[11px] font-serif">Language:</span>
            <div className="flex items-center border border-white/15 bg-white/[0.04] rounded-full px-2 py-1 text-[10px] font-sans tracking-wider">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${lang === 'en' ? 'text-swarna-300 font-medium bg-white/10' : 'hover:text-white'}`}
              >
                EN
              </button>
              <span className="text-white/20 mx-1">|</span>
              <button
                onClick={() => setLang('hi')}
                className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${lang === 'hi' ? 'text-swarna-300 font-medium bg-white/10' : 'hover:text-white'}`}
              >
                हिं
              </button>
              <span className="text-white/20 mx-1">|</span>
              <button
                onClick={() => setLang('mr')}
                className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${lang === 'mr' ? 'text-swarna-300 font-medium bg-white/10' : 'hover:text-white'}`}
              >
                मरा
              </button>
            </div>
          </div>

          <Link to="/" className="block text-stone-200 hover:text-white py-1.5 font-normal">
            The Group Overview
          </Link>
          <a
            href="https://kumbhcottagesnashik.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-swarna-300 hover:text-white py-1.5 flex items-center justify-between font-normal"
          >
            <span>Nashik Simhastha 2027</span>
            <span className="text-[10px] font-mono text-stone-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">kumbhcottagesnashik.com ↗</span>
          </a>
          <Link to="/destinations" className="block text-stone-300 hover:text-white py-1.5">
            Destinations (Ujjain, Haridwar, Prayagraj)
          </Link>
          <Link to="/capabilities-infrastructure" className="block text-stone-300 hover:text-white py-1.5">
            Capabilities & Infrastructure
          </Link>
          <Link to="/heritage-since-2001" className="block text-stone-300 hover:text-white py-1.5">
            Heritage Since 2001
          </Link>
          <Link to="/kumbh-directory" className="block text-stone-300 hover:text-white py-1.5">
            Kumbh Directory & Almanac
          </Link>
          <Link to="/sacred-travel-and-kumbh-guides" className="block text-stone-300 hover:text-white py-1.5">
            Sacred Travel & Kumbh Guides
          </Link>
          <Link to="/corporate-contact" className="block text-stone-300 hover:text-white py-1.5">
            Corporate Contact
          </Link>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
            <a
              href="tel:+919889933333"
              className="flex-1 py-2 px-3 rounded bg-white/5 border border-white/10 text-stone-200 text-center font-mono text-[11px]"
            >
              📞 +91 98899 33333
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="flex-1 py-2 px-3 rounded bg-swarna-400 text-stone-950 text-center font-serif text-xs font-bold"
            >
              Inquire
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
