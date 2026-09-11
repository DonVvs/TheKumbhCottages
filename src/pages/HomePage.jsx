import React from 'react';
import SEOHead from '../components/common/SEOHead';
import CorporateHero from '../components/sections/CorporateHero';
import TheLineageStory from '../components/sections/TheLineageStory';
import DestinationShowcase from '../components/sections/DestinationShowcase';
import InfrastructureMastery from '../components/sections/InfrastructureMastery';
import InstitutionalAuthority from '../components/sections/InstitutionalAuthority';
import MilestoneChronology from '../components/sections/MilestoneChronology';
import RelatedGuidesWidget from '../components/common/RelatedGuidesWidget';

export default function HomePage({ lang = 'en', onOpenInquiry }) {
  return (
    <main className="-mt-[92px] sm:-mt-[96px]">
      <SEOHead
        title="TheKumbhCottages | Sovereign Heritage & Sacred Infrastructure Group (Est. 2001)"
        description="The parent hospitality institution engineering luxury riverfront sanctuaries, turnkey tented infrastructure, and consecrated 100% Desi Ghee Annakshetra across Nashik, Ujjain, Haridwar, and Prayagraj."
        canonical="https://thekumbhcottages.com"
      />

      {/* 1. Corporate Editorial Hero */}
      <CorporateHero lang={lang} onOpenInquiry={onOpenInquiry} />

      {/* 2. Chapter 01: The Sovereign Origin & Lineage Since 2001 */}
      <TheLineageStory />

      {/* 3. Multi-Destination Portals Showcase (Nashik, Ujjain, Haridwar, Prayagraj) */}
      <DestinationShowcase lang={lang} onOpenInquiry={onOpenInquiry} />

      {/* 4. Turnkey Infrastructure Mastery (The Work We Have Built) */}
      <InfrastructureMastery lang={lang} onOpenInquiry={onOpenInquiry} />

      {/* 5. Institutional Authority & 25-Year Dignitary Trust */}
      <InstitutionalAuthority lang={lang} />

      {/* 6. 2001–2027 Milestone Chronology */}
      <MilestoneChronology lang={lang} />

      {/* 7. Essential Sacred Travel & Kumbh Guides Widget */}
      <RelatedGuidesWidget
        title="Sacred Travel in India & Kumbh Mela Guides"
        subtitle="Practical transit manuals, elder accessibility guidelines, and Vedic ritual astronomy from our 25-year parent repository."
      />
    </main>
  );
}
