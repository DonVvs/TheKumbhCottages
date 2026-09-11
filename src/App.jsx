import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AuspiciousTopRibbon from './components/common/AuspiciousTopRibbon';
import LuxuryHeader from './components/common/LuxuryHeader';
import LuxuryFooter from './components/common/LuxuryFooter';
import CorporateInquiryModal from './components/common/CorporateInquiryModal';
import FloatingConciergeButtons from './components/common/FloatingConciergeButtons';

import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import InfrastructurePage from './pages/InfrastructurePage';
import HeritagePage from './pages/HeritagePage';
import CorporateContactPage from './pages/CorporateContactPage';

// Directory Pages
import KumbhDirectoryHubPage from './pages/directory/KumbhDirectoryHubPage';
import PrayagrajKumbhPage from './pages/directory/PrayagrajKumbhPage';
import NashikSimhasthaPage from './pages/directory/NashikSimhasthaPage';
import HaridwarKumbhPage from './pages/directory/HaridwarKumbhPage';
import UjjainSimhasthaPage from './pages/directory/UjjainSimhasthaPage';
import AkharasTraditionsPage from './pages/directory/AkharasTraditionsPage';
import ShahiSnanRitualsPage from './pages/directory/ShahiSnanRitualsPage';

// Travel in India & Kumbh Knowledge Base
import TravelAndKumbhHubPage from './pages/blogs/TravelAndKumbhHubPage';
import BlogDetailPage from './pages/blogs/BlogDetailPage';

import { initClarity, setClarityTag } from './utils/clarity';

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

      {/* 1. Auspicious Top Micro-Ribbon */}
      <AuspiciousTopRibbon lang={lang} />

      {/* 2. Parent Group Architectural Header */}
      <LuxuryHeader
        lang={lang}
        setLang={setLang}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* 3. Main Route Content Area */}
      <div className="flex-1">
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
      </div>

      {/* 4. Sovereign Parent Group Footer */}
      <LuxuryFooter lang={lang} />

      {/* 5. Floating Obsidian Concierge Micro-Dock */}
      <FloatingConciergeButtons />

      {/* 6. Corporate & Group Inquiry Modal */}
      <CorporateInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={handleCloseInquiry}
        defaultDestination={defaultInquiryDestination}
      />
    </div>
  );
}
