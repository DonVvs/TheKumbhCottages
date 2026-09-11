import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`sticky top-0 z-40 bg-[#0E0B08] border-b border-[#231A12] py-3 transition-shadow duration-300 ${
        isScrolled ? 'shadow-xl' : 'shadow-none'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Brand Seal & Parent Title */}
          <Link to="/" className="flex items-center gap-3 group text-left flex-shrink-0">
            <img
              src="/assets/brand/emblem.webp"
              alt="The Kumbh Cottages Seal"
              className="w-8 h-8 rounded-full border border-swarna-400/40 object-cover flex-shrink-0 group-hover:border-swarna-300 transition-colors"
            />
            <div>
              <span className="block font-serif text-sm sm:text-base font-light tracking-wide text-white group-hover:text-swarna-200 transition-colors">
                The Kumbh Cottages
              </span>
              <span className="block text-[8px] font-sans text-stone-400 font-normal tracking-[0.2em] uppercase">
                Est. 2001 · Parent Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[11px] xl:text-xs font-sans tracking-[0.14em] uppercase font-normal text-stone-300">
            
            {/* Overview */}
            <Link
              to="/"
              className={`transition-colors py-1.5 whitespace-nowrap relative ${
                location.pathname === '/'
                  ? 'text-swarna-300 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-swarna-400'
                  : 'hover:text-white'
              }`}
            >
              Overview
            </Link>

            {/* Destinations Dropdown */}
            <div
              className="relative py-1.5"
              onMouseEnter={() => setDestinationsDropdown(true)}
              onMouseLeave={() => setDestinationsDropdown(false)}
            >
              <Link
                to="/destinations"
                className={`transition-colors flex items-center gap-1 whitespace-nowrap relative ${
                  location.pathname.startsWith('/destinations')
                    ? 'text-swarna-300 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-swarna-400'
                    : 'hover:text-white'
                }`}
              >
                <span>Destinations</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${destinationsDropdown ? 'rotate-180 text-swarna-300' : 'text-stone-400'}`} />
              </Link>

              {destinationsDropdown && (
                <div className="absolute top-full left-0 w-64 bg-[#120E0A]/98 backdrop-blur-xl border border-swarna-500/20 rounded-lg shadow-2xl p-2 z-50 animate-fadeIn normal-case tracking-normal">
                  <a
                    href="https://kumbhcottagesnashik.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-md hover:bg-white/5 transition-colors flex items-center justify-between text-xs text-swarna-300 hover:text-white font-serif"
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
                    className="p-2 rounded-md hover:bg-white/5 transition-colors block text-xs text-stone-300 hover:text-white"
                  >
                    Ujjain (Shipra Riverfront)
                  </Link>
                  <Link
                    to="/destinations#haridwar"
                    className="p-2 rounded-md hover:bg-white/5 transition-colors block text-xs text-stone-300 hover:text-white"
                  >
                    Haridwar (Ganga Sanctuary)
                  </Link>
                  <Link
                    to="/destinations#prayagraj"
                    className="p-2 rounded-md hover:bg-white/5 transition-colors block text-xs text-stone-400 hover:text-white border-t border-white/5 mt-1 pt-1.5"
                  >
                    Prayagraj Foundation (Est. 2001)
                  </Link>
                </div>
              )}
            </div>

            {/* Kumbh Directory Dropdown */}
            <div
              className="relative py-1.5"
              onMouseEnter={() => setDirectoryDropdown(true)}
              onMouseLeave={() => setDirectoryDropdown(false)}
            >
              <Link
                to="/kumbh-directory"
                className={`transition-colors flex items-center gap-1 whitespace-nowrap relative ${
                  location.pathname.startsWith('/kumbh-directory')
                    ? 'text-swarna-300 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-swarna-400'
                    : 'hover:text-white'
                }`}
              >
                <span>Directory</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${directoryDropdown ? 'rotate-180 text-swarna-300' : 'text-stone-400'}`} />
              </Link>

              {directoryDropdown && (
                <div className="absolute top-full left-0 w-72 bg-[#120E0A]/98 backdrop-blur-xl border border-swarna-500/20 rounded-lg shadow-2xl p-2 z-50 animate-fadeIn normal-case tracking-normal">
                  <Link
                    to="/kumbh-directory"
                    className="p-2.5 rounded-md hover:bg-white/5 transition-colors block text-xs text-swarna-300 font-serif font-medium border-b border-white/5 mb-1"
                  >
                    Universal Kumbh Almanac
                  </Link>
                  <Link
                    to="/kumbh-directory/prayagraj-maha-kumbh"
                    className="p-2 rounded-md hover:bg-white/5 transition-colors block text-xs text-stone-300 hover:text-white"
                  >
                    Prayagraj Maha Kumbh Guide
                  </Link>
                  <Link
                    to="/kumbh-directory/nashik-simhastha-kumbh"
                    className="p-2 rounded-md hover:bg-white/5 transition-colors block text-xs text-stone-300 hover:text-white"
                  >
                    Nashik Simhastha 2027 Guide
                  </Link>
                  <Link
                    to="/kumbh-directory/haridwar-maha-kumbh"
                    className="p-2 rounded-md hover:bg-white/5 transition-colors block text-xs text-stone-300 hover:text-white"
                  >
                    Haridwar Maha Kumbh Guide
                  </Link>
                  <Link
                    to="/kumbh-directory/ujjain-simhastha-kumbh"
                    className="p-2 rounded-md hover:bg-white/5 transition-colors block text-xs text-stone-300 hover:text-white"
                  >
                    Ujjain Simhastha Guide
                  </Link>
                  <Link
                    to="/kumbh-directory/akharas-and-traditions"
                    className="p-2 rounded-md hover:bg-white/5 transition-colors block text-xs text-stone-300 hover:text-white border-t border-white/5 mt-1 pt-1.5"
                  >
                    The 13 Sacred Akharas
                  </Link>
                  <Link
                    to="/kumbh-directory/shahi-snan-rituals-guide"
                    className="p-2 rounded-md hover:bg-white/5 transition-colors block text-xs text-stone-300 hover:text-white"
                  >
                    Shahi Snan Rituals & Science
                  </Link>
                </div>
              )}
            </div>

            {/* Capabilities */}
            <Link
              to="/capabilities-infrastructure"
              className={`transition-colors py-1.5 whitespace-nowrap relative ${
                location.pathname === '/capabilities-infrastructure'
                  ? 'text-swarna-300 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-swarna-400'
                  : 'hover:text-white'
              }`}
            >
              Capabilities
            </Link>

            {/* Heritage */}
            <Link
              to="/heritage-since-2001"
              className={`transition-colors py-1.5 whitespace-nowrap relative ${
                location.pathname === '/heritage-since-2001'
                  ? 'text-swarna-300 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-swarna-400'
                  : 'hover:text-white'
              }`}
            >
              Heritage
            </Link>

            {/* Guides & Journal (Single-line whitespace nowrap) */}
            <Link
              to="/sacred-travel-and-kumbh-guides"
              className={`transition-colors py-1.5 whitespace-nowrap relative ${
                location.pathname.startsWith('/sacred-travel-and-kumbh-guides') || location.pathname.startsWith('/guides')
                  ? 'text-swarna-300 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-swarna-400'
                  : 'hover:text-white'
              }`}
            >
              Guides & Journal
            </Link>

            {/* Contact */}
            <Link
              to="/corporate-contact"
              className={`transition-colors py-1.5 whitespace-nowrap relative ${
                location.pathname === '/corporate-contact'
                  ? 'text-swarna-300 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-swarna-400'
                  : 'hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            
            {/* Language Switcher Pill */}
            <div className="flex items-center border border-white/15 bg-white/[0.04] rounded-full px-2 py-1 text-[10px] font-sans tracking-wider text-stone-400">
              <button
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded-full transition-colors cursor-pointer ${lang === 'en' ? 'text-swarna-300 font-medium' : 'hover:text-white'}`}
              >
                EN
              </button>
              <span className="text-white/20 mx-0.5">|</span>
              <button
                onClick={() => setLang('hi')}
                className={`px-1.5 py-0.5 rounded-full transition-colors cursor-pointer ${lang === 'hi' ? 'text-swarna-300 font-medium' : 'hover:text-white'}`}
              >
                हिं
              </button>
              <span className="text-white/20 mx-0.5">|</span>
              <button
                onClick={() => setLang('mr')}
                className={`px-1.5 py-0.5 rounded-full transition-colors cursor-pointer ${lang === 'mr' ? 'text-swarna-300 font-medium' : 'hover:text-white'}`}
              >
                मरा
              </button>
            </div>

            {/* Inquire Button */}
            <button
              onClick={() => onOpenInquiry()}
              className="px-4 xl:px-5 py-2 rounded-full border border-swarna-400/60 bg-swarna-400/10 hover:bg-swarna-400 hover:text-stone-950 text-swarna-300 text-[11px] uppercase tracking-[0.14em] font-medium transition-all duration-300 shadow-xs cursor-pointer whitespace-nowrap"
            >
              Inquire
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenInquiry()}
              className="px-3 py-1.5 rounded-full border border-swarna-400/60 bg-swarna-400/10 text-swarna-300 text-[10px] uppercase tracking-wider font-medium"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-stone-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E0B08] border-b border-[#231A12] px-6 py-6 space-y-3.5 text-xs animate-fadeIn font-light shadow-2xl">
          
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
          <Link to="/kumbh-directory" className="block text-stone-300 hover:text-white py-1.5">
            Kumbh Directory & Almanac
          </Link>
          <Link to="/capabilities-infrastructure" className="block text-stone-300 hover:text-white py-1.5">
            Capabilities & Infrastructure
          </Link>
          <Link to="/heritage-since-2001" className="block text-stone-300 hover:text-white py-1.5">
            Heritage Since 2001
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
              className="flex-1 py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-stone-200 text-center font-mono text-[11px]"
            >
              📞 +91 98899 33333
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="flex-1 py-2 px-3 rounded-lg bg-swarna-400 text-stone-950 text-center font-serif text-xs font-bold"
            >
              Inquire
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

