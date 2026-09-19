import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LuxuryHeader from './components/common/LuxuryHeader';
import LuxuryFooter from './components/common/LuxuryFooter';
import FloatingConciergeButtons from './components/common/FloatingConciergeButtons';

import HomePage from './pages/HomePage';

// Lazy-loaded Secondary Corporate Pages
const DestinationsPage = lazy(() => import('./pages/DestinationsPage'));
const InfrastructurePage = lazy(() => import('./pages/InfrastructurePage'));
const HeritagePage = lazy(() => import('./pages/HeritagePage'));
const CorporateContactPage = lazy(() => import('./pages/CorporateContactPage'));

// Lazy-loaded Master Kumbh Directory Pages
const KumbhDirectoryHubPage = lazy(() => import('./pages/directory/KumbhDirectoryHubPage'));
const PrayagrajKumbhPage = lazy(() => import('./pages/directory/PrayagrajKumbhPage'));
const NashikSimhasthaPage = lazy(() => import('./pages/directory/NashikSimhasthaPage'));
const HaridwarKumbhPage = lazy(() => import('./pages/directory/HaridwarKumbhPage'));
const UjjainSimhasthaPage = lazy(() => import('./pages/directory/UjjainSimhasthaPage'));
const AkharasTraditionsPage = lazy(() => import('./pages/directory/AkharasTraditionsPage'));
const ShahiSnanRitualsPage = lazy(() => import('./pages/directory/ShahiSnanRitualsPage'));

// Lazy-loaded Travel & Knowledge Base
const TravelAndKumbhHubPage = lazy(() => import('./pages/blogs/TravelAndKumbhHubPage'));
const BlogDetailPage = lazy(() => import('./pages/blogs/BlogDetailPage'));

// Lazy-loaded Inquiry Modal
const CorporateInquiryModal = lazy(() => import('./components/common/CorporateInquiryModal'));

import { initClarity, setClarityTag } from './utils/clarity';

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#FAF8F5]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-stone-200 border-t-swarna-600 animate-spin" />
        <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-stone-500 font-medium">
          Loading Sanctuary Portal...
        </span>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
    setClarityTag('page_path', pathname);
    setClarityTag('page_title', document.title);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [defaultInquiryDestination, setDefaultInquiryDestination] = useState('Nashik Simhastha 2027');

  useEffect(() => {
    initClarity('ydlevz3pj0');
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang && ['en', 'hi', 'mr'].includes(urlLang)) {
      setLang(urlLang);
    }
  }, []);

  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleOpenInquiry = (dest = 'Nashik Simhastha 2027') => {
    setDefaultInquiryDestination(dest);
    setIsInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-espresso-950 font-sans selection:bg-swarna-500/30 selection:text-espresso-950">
      <ScrollToTop />

      {/* 1. Parent Group Architectural Header */}
      <LuxuryHeader
        lang={lang}
        setLang={setLang}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* 2. Main Route Content Area */}
      <div className={`flex-1 ${isHome ? '' : 'pt-20 sm:pt-24'}`}>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            {/* Core Corporate Routes */}
            <Route
              path="/"
              element={<HomePage lang={lang} onOpenInquiry={handleOpenInquiry} />}
            />
            <Route
              path="/destinations"
              element={<DestinationsPage onOpenInquiry={handleOpenInquiry} />}
            />
            <Route
              path="/capabilities-infrastructure"
              element={<InfrastructurePage onOpenInquiry={handleOpenInquiry} />}
            />
            <Route
              path="/heritage-since-2001"
              element={<HeritagePage onOpenInquiry={handleOpenInquiry} />}
            />
            <Route
              path="/corporate-contact"
              element={<CorporateContactPage />}
            />

            {/* Master Kumbh Directory & Encyclopedic SEO Routes */}
            <Route
              path="/kumbh-directory"
              element={<KumbhDirectoryHubPage />}
            />
            <Route
              path="/kumbh-directory/prayagraj-maha-kumbh"
              element={<PrayagrajKumbhPage />}
            />
            <Route
              path="/kumbh-directory/nashik-simhastha-kumbh"
              element={<NashikSimhasthaPage />}
            />
            <Route
              path="/kumbh-directory/haridwar-maha-kumbh"
              element={<HaridwarKumbhPage />}
            />
            <Route
              path="/kumbh-directory/ujjain-simhastha-kumbh"
              element={<UjjainSimhasthaPage />}
            />
            <Route
              path="/kumbh-directory/akharas-and-traditions"
              element={<AkharasTraditionsPage />}
            />
            <Route
              path="/kumbh-directory/shahi-snan-rituals-guide"
              element={<ShahiSnanRitualsPage />}
            />

            {/* Sacred Travel in India & Kumbh Authority Blogs */}
            <Route
              path="/sacred-travel-and-kumbh-guides"
              element={<TravelAndKumbhHubPage />}
            />
            <Route
              path="/travel-india-guides"
              element={<TravelAndKumbhHubPage />}
            />
            <Route
              path="/guides/:slug"
              element={<BlogDetailPage />}
            />
          </Routes>
        </Suspense>
      </div>

      {/* 4. Sovereign Parent Group Footer */}
      <LuxuryFooter lang={lang} />

      {/* 5. Floating Obsidian Concierge Micro-Dock */}
      <FloatingConciergeButtons />

      {/* 6. Corporate & Group Inquiry Modal (Mounted dynamically on demand) */}
      {isInquiryModalOpen && (
        <Suspense fallback={null}>
          <CorporateInquiryModal
            isOpen={isInquiryModalOpen}
            onClose={handleCloseInquiry}
            defaultDestination={defaultInquiryDestination}
          />
        </Suspense>
      )}
    </div>
  );
}
