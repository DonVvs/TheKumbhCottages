import React, { useEffect } from 'react';
import { WIKIDATA_ENTITIES } from '../../data/wikidataEntities';
import { KUMBH_SEO_FAQS } from '../../data/kumbhDirectoryData';

export default function SEOHead({
  title = "TheKumbhCottages | Sovereign Heritage & Sacred Infrastructure Group (Est. 2001)",
  description = "Experience 25 years of consecrated luxury hospitality, pure A2 desi ghee Annakshetra dining, and turnkey riverfront sanctuaries across Nashik, Ujjain, Haridwar, and Prayagraj.",
  canonical = "https://thekumbhcottages.com",
  type = "website",
  image = "https://thekumbhcottages.com/hero-poster.webp",
  schemaType = "Corporation",
  breadcrumbs = null,
  faqs = null,
  additionalSchemas = null
}) {
  useEffect(() => {
    document.title = title;
    
    // Meta helper
    const setMetaTag = (name, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Standard Meta Tags
    setMetaTag("description", description);
    setMetaTag("robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMetaTag("googlebot", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMetaTag("author", "TheKumbhCottages Parent Directorate");
    setMetaTag("keywords", "TheKumbhCottages, Kumbh Mela luxury cottages, Nashik Simhastha 2027, kumbhcottagesnashik.com, Prayagraj Maha Kumbh, Haridwar Kumbh, Ujjain Simhastha, 13 Akharas, Shahi Snan, Annakshetra, sacred infrastructure, Swiss cottages");

    // OpenGraph Meta Tags
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:url", canonical, true);
    setMetaTag("og:type", type, true);
    setMetaTag("og:image", image, true);
    setMetaTag("og:site_name", "TheKumbhCottages", true);
    setMetaTag("og:locale", "en_IN", true);

    // Twitter Card Meta Tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", image);

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonical;

    // Hreflang alternate language tags for Hindi/Marathi search capture
    const hreflangMap = {
      'en': canonical,
      'hi': `${canonical}${canonical.includes('?') ? '&' : '?'}lang=hi`,
      'mr': `${canonical}${canonical.includes('?') ? '&' : '?'}lang=mr`,
      'x-default': canonical
    };
    Object.entries(hreflangMap).forEach(([lang, url]) => {
      const selector = `link[rel="alternate"][hreflang="${lang}"]`;
      let link = document.querySelector(selector);
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
      }
      link.href = url;
    });

    // Structured Data JSON-LD
    const jsonLdScriptId = 'structured-data-jsonld';
    let script = document.getElementById(jsonLdScriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = jsonLdScriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const graphItems = [
      // 1. Google Sitelinks Search Box WebSite Schema
      {
        "@type": "WebSite",
        "@id": "https://thekumbhcottages.com/#website",
        "url": "https://thekumbhcottages.com",
        "name": "TheKumbhCottages",
        "description": "The Sovereign Parent Hospitality & Sacred Infrastructure Group Operating Continuously Since 2001.",
        "publisher": {
          "@id": "https://thekumbhcottages.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://thekumbhcottages.com/kumbh-directory?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": ["en", "hi", "mr"]
      },

      // 2. Organization / Corporation Schema
      {
        "@type": "Corporation",
        "@id": "https://thekumbhcottages.com/#organization",
        "name": "The Kumbh Cottages",
        "alternateName": ["TheKumbhCottages", "The Kumbh Cottages Group"],
        "legalName": "TheKumbhCottages Sacred Infrastructure & Hospitality Group",
        "parentOrganization": {
          "@type": "Organization",
          "name": "Raamvan Retreats",
          "legalName": "Raamvan Retreats Group"
        },
        "foundingDate": "2001",
        "founder": {
          "@type": "Person",
          "name": "The Kumbh Cottages Founding Directorate"
        },
        "url": "https://thekumbhcottages.com",
        "logo": "https://thekumbhcottages.com/assets/brand/emblem.webp",
        "image": "https://thekumbhcottages.com/hero-poster.webp",
        "description": description,
        "telephone": "+91-98899-33333",
        "email": "kumbhcottages@gmail.com",
        "sameAs": [
          "https://kumbhcottagesnashik.com",
          "https://share.google/cmaiQgwb1FsV2jdfj",
          "https://www.wikidata.org/wiki/Q1028",
          "https://www.facebook.com/thekumbhcottage/"
        ],
        "hasMap": "https://share.google/cmaiQgwb1FsV2jdfj",
        "areaServed": [
          { "@type": "City", "name": "Nashik" },
          { "@type": "City", "name": "Ujjain" },
          { "@type": "City", "name": "Haridwar" },
          { "@type": "City", "name": "Prayagraj" }
        ],
        "knowsAbout": [
          "Kumbh Mela",
          "Nashik Simhastha 2027",
          "Prayagraj Maha Kumbh",
          "Haridwar Maha Kumbh",
          "Ujjain Simhastha",
          "13 Sacred Akharas",
          "Shahi Snan Rituals",
          "Turnkey Flood-Plain Civil Engineering",
          "100% Desi Ghee Annakshetra",
          "Elder Step-Free Mobility Boardwalks",
          "Zero-Discharge Sanitation"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-98899-33333",
            "contactType": "Corporate & Group Liaison",
            "email": "kumbhcottages@gmail.com",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi", "Marathi"]
          }
        ]
      },

      // 3. Site Navigation Elements for Sitelinks
      {
        "@type": "SiteNavigationElement",
        "@id": "https://thekumbhcottages.com/#navigation",
        "name": [
          "Overview",
          "Destinations",
          "Capabilities & Infrastructure",
          "Heritage Since 2001",
          "Universal Kumbh Directory",
          "Nashik Simhastha 2027 Portal",
          "Corporate Contact"
        ],
        "url": [
          "https://thekumbhcottages.com",
          "https://thekumbhcottages.com/destinations",
          "https://thekumbhcottages.com/capabilities-infrastructure",
          "https://thekumbhcottages.com/heritage-since-2001",
          "https://thekumbhcottages.com/kumbh-directory",
          "https://kumbhcottagesnashik.com",
          "https://thekumbhcottages.com/corporate-contact"
        ]
      }
    ];

    // 4. FAQ Schema for Rich Snippets & AI Search
    const activeFaqs = faqs || KUMBH_SEO_FAQS;
    if (activeFaqs && activeFaqs.length > 0) {
      graphItems.push({
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        "mainEntity": activeFaqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      });
    }

    // 5. BreadcrumbList Schema if present
    if (breadcrumbs && breadcrumbs.length > 0) {
      graphItems.push({
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        "itemListElement": breadcrumbs.map((b, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": b.name,
          "item": b.url
        }))
      });
    }

    // 6. Additional Schema Items (Event, Article, TouristAttraction, LodgingBusiness, HowTo)
    if (additionalSchemas && Array.isArray(additionalSchemas)) {
      graphItems.push(...additionalSchemas);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": graphItems
    };

    script.textContent = JSON.stringify(structuredData);
  }, [title, description, canonical, type, image, schemaType, breadcrumbs, faqs, additionalSchemas]);

  return null;
}
