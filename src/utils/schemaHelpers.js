/**
 * Centralized Schema.org Structured Data Helpers
 * TheKumbhCottages SEO Infrastructure
 * 
 * Generates JSON-LD graph items for Google Rich Results:
 * - Event (Nashik 2027, Ujjain 2028 pages)
 * - Article / BlogPosting (all guide pages)
 * - TouristAttraction (directory pages)
 * - LodgingBusiness (accommodation/pricing pages)
 * - HowTo (packing, booking, preparation guides)
 */

const ORG_REF = { "@id": "https://thekumbhcottages.com/#organization" };
const WEBSITE_REF = { "@id": "https://thekumbhcottages.com/#website" };

/**
 * Event schema for Kumbh Mela events (Nashik 2027, Ujjain 2028, etc.)
 */
export function createEventSchema({
  name,
  description,
  startDate,
  endDate,
  locationName,
  locationCity,
  locationState = "India",
  url,
  image = "https://thekumbhcottages.com/hero-poster.webp",
  offers = null
}) {
  const schema = {
    "@type": "Event",
    "@id": `${url}#event`,
    "name": name,
    "description": description,
    "startDate": startDate,
    "endDate": endDate,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": locationName,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": locationCity,
        "addressRegion": locationState,
        "addressCountry": "IN"
      }
    },
    "organizer": ORG_REF,
    "image": image,
    "url": url,
    "inLanguage": ["en", "hi", "mr"]
  };

  if (offers) {
    schema.offers = {
      "@type": "Offer",
      "url": offers.url || url,
      "price": offers.price || "15000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": offers.validFrom || "2026-01-01"
    };
  }

  return schema;
}

/**
 * Article / BlogPosting schema for guide pages
 */
export function createArticleSchema({
  headline,
  description,
  url,
  datePublished = "2026-09-12",
  dateModified = "2026-09-12",
  author = "TheKumbhCottages Editorial Directorate",
  image = "https://thekumbhcottages.com/hero-poster.webp",
  wordCount = 2500,
  articleSection = "Kumbh Mela Guides"
}) {
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    "headline": headline,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://thekumbhcottages.com"
    },
    "publisher": ORG_REF,
    "isPartOf": WEBSITE_REF,
    "image": image,
    "wordCount": wordCount,
    "articleSection": articleSection,
    "inLanguage": "en",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}

/**
 * TouristAttraction schema for sacred sites in directory pages
 */
export function createTouristAttractionSchema({
  name,
  description,
  url,
  city,
  state,
  image = "https://thekumbhcottages.com/hero-poster.webp",
  additionalType = "ReligiousSite"
}) {
  return {
    "@type": ["TouristAttraction", "LandmarksOrHistoricalBuildings"],
    "@id": `${url}#attraction`,
    "name": name,
    "description": description,
    "url": url,
    "image": image,
    "additionalType": `https://schema.org/${additionalType}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressCountry": "IN",
      "addressRegion": state
    },
    "isAccessibleForFree": true,
    "publicAccess": true,
    "touristType": ["Pilgrims", "Cultural Tourists", "Spiritual Seekers"]
  };
}

/**
 * LodgingBusiness schema for accommodation pages
 */
export function createLodgingSchema({
  name = "The Kumbh Cottages — Luxury Swiss Cottage Sanctuary",
  description,
  url,
  city,
  priceRange = "₹₹₹₹",
  starRating = 5,
  image = "https://thekumbhcottages.com/hero-poster.webp",
  amenities = []
}) {
  return {
    "@type": "LodgingBusiness",
    "@id": `${url}#lodging`,
    "name": name,
    "description": description,
    "url": url,
    "image": image,
    "priceRange": priceRange,
    "starRating": {
      "@type": "Rating",
      "ratingValue": starRating
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressCountry": "IN"
    },
    "telephone": "+91-98899-33333",
    "email": "corporate@thekumbhcottages.com",
    "amenityFeature": amenities.map(a => ({
      "@type": "LocationFeatureSpecification",
      "name": a,
      "value": true
    })),
    "checkinTime": "12:00",
    "checkoutTime": "11:00",
    "petsAllowed": false
  };
}

/**
 * HowTo schema for step-by-step guides (packing, booking, preparation)
 */
export function createHowToSchema({
  name,
  description,
  url,
  totalTime = "PT30M",
  steps = [],
  image = "https://thekumbhcottages.com/hero-poster.webp"
}) {
  return {
    "@type": "HowTo",
    "@id": `${url}#howto`,
    "name": name,
    "description": description,
    "url": url,
    "image": image,
    "totalTime": totalTime,
    "step": steps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.name,
      "text": s.text,
      ...(s.url ? { "url": s.url } : {})
    }))
  };
}
