const fs = require('fs');
const path = require('path');

const srcDir = path.resolve('public/assets/incoming_kumbh');
const realCampsDir = path.resolve('public/assets/real_camps');
const cottagesDir = path.resolve('public/assets/cottages');

if (!fs.existsSync(realCampsDir)) {
  fs.mkdirSync(realCampsDir, { recursive: true });
}
if (!fs.existsSync(cottagesDir)) {
  fs.mkdirSync(cottagesDir, { recursive: true });
}

// Mapping of incoming files to clean SEO filenames
const copyMap = [
  // 1. Accommodation Interiors & Private Attached Bathrooms
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.26 PM.jpeg',
    dest: 'cottages/deluxe-swiss-cottage-twin-interior.webp',
  },
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.25 PM.jpeg',
    dest: 'cottages/luxury-cottage-master-suite-interior.webp',
  },
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.26 PM (2).jpeg',
    dest: 'cottages/royal-suite-double-bed-interior.webp',
  },
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.27 PM.jpeg',
    dest: 'cottages/ensuite-western-bathroom-vanity.webp',
  },
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.27 PM (1).jpeg',
    dest: 'cottages/private-bathroom-hot-water-plumbing.webp',
  },

  // Also store in real_camps for gallery
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.26 PM.jpeg',
    dest: 'real_camps/kumbh-cottages-deluxe-twin-bedroom-interior.webp',
  },
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.25 PM.jpeg',
    dest: 'real_camps/kumbh-cottages-luxury-master-suite-interior.webp',
  },
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.26 PM (2).jpeg',
    dest: 'real_camps/kumbh-cottages-royal-suite-wrought-iron-bed.webp',
  },
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.27 PM.jpeg',
    dest: 'real_camps/kumbh-cottages-ensuite-western-toilet-vanity.webp',
  },
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.27 PM (1).jpeg',
    dest: 'real_camps/kumbh-cottages-private-attached-bathroom-shower.webp',
  },

  // 2. Dining & Annakshetra
  {
    src: 'restaurant.webp',
    dest: 'cottages/pure-sattvic-annakshetra-dining-hall.webp',
  },
  {
    src: 'restaurant.webp',
    dest: 'real_camps/kumbh-cottages-grand-annakshetra-dining-hall.webp',
  },
  {
    src: 'NEW/33.jpeg',
    dest: 'real_camps/kumbh-cottages-family-dining-annakshetra-seva.webp',
  },
  {
    src: 'NEW/TheKumbhCottages_Nashik_prayagraj (13).jpeg',
    dest: 'real_camps/kumbh-cottages-dining-hall-celebration.webp',
  },

  // 3. Camp Township & Riverfront Views
  {
    src: 'main.webp',
    dest: 'real_camps/kumbh-cottages-riverfront-sanctuary-fountain.webp',
  },
  {
    src: 'kumbh-cottages.jpg',
    dest: 'real_camps/kumbh-cottages-elevated-riverbank-canvas-villas.webp',
  },
  {
    src: '2.webp',
    dest: 'real_camps/kumbh-cottages-aerial-township-avenue-layout.webp',
  },
  {
    src: '5.webp',
    dest: 'real_camps/kumbh-cottages-daylight-camp-lawn-seating.webp',
  },
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.28 PM.jpeg',
    dest: 'real_camps/kumbh-cottages-luxury-swiss-tents-boardwalk.webp',
  },
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.27 PM (2).jpeg',
    dest: 'real_camps/kumbh-cottages-verandah-loungers-riverfront.webp',
  },
  {
    src: 'NEW/55.jpeg',
    dest: 'real_camps/kumbh-cottages-night-view-fairy-lit-campus.webp',
  },
  {
    src: '3.webp',
    dest: 'real_camps/kumbh-cottages-prefabricated-luxury-cottages-night.webp',
  },
  {
    src: 'NEW/66.jpeg',
    dest: 'real_camps/kumbh-cottages-prefabricated-glass-executive-suites.webp',
  },

  // 4. Sacred Snan, Boat Rides & Vedic Welcome
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.25 PM (1).jpeg',
    dest: 'real_camps/kumbh-cottages-holy-river-boat-ride-sangam-snan.webp',
  },
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.24 PM (1).jpeg',
    dest: 'real_camps/kumbh-cottages-sacred-sankalpa-puja-boat-snan.webp',
  },
  {
    src: 'NEW/TheKumbhCottages_Nashik_prayagraj (4).jpeg',
    dest: 'real_camps/kumbh-cottages-traditional-tilak-welcome-ceremony.webp',
  },
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.23 PM (1).jpeg',
    dest: 'real_camps/kumbh-cottages-evening-reception-arrival-welcome.webp',
  },
  {
    src: 'NEW/TheKumbhCottages_Nashik_prayagraj (2).jpeg',
    dest: 'real_camps/kumbh-cottages-cottage-verandah-mehndi-art-seva.webp',
  },
  {
    src: 'NEW/TheKumbhCottages_Nashik_prayagraj (7).jpeg',
    dest: 'real_camps/kumbh-cottages-maha-kumbh-mehndi-hand-art.webp',
  },

  // 5. Elder Care, Devotee Fellowship & Wellness
  {
    src: 'NEW/Massage_chair_TheKumbhCottages.jpeg',
    dest: 'real_camps/kumbh-cottages-elder-care-massage-chair-wellness.webp',
  },
  {
    src: 'NEW/WhatsApp Image 2026-09-13 at 3.51.52 PM (1).jpeg',
    dest: 'real_camps/kumbh-cottages-senior-pilgrims-lounge-comfort.webp',
  },
  {
    src: 'NEW/TheKumbhCottages_Nashik_prayagraj (8).jpeg',
    dest: 'real_camps/kumbh-cottages-senior-guests-garden-canopy-relaxation.webp',
  },
  {
    src: '4.webp',
    dest: 'real_camps/kumbh-cottages-evening-satsang-aarti-gathering.webp',
  },
  {
    src: 'NEW/WhatsApp Image 2026-09-13 at 3.51.52 PM.jpeg',
    dest: 'real_camps/kumbh-cottages-multi-generational-family-pilgrims.webp',
  },
  {
    src: 'NEW/kumbh-nashik-2027-prayagraj.jpeg',
    dest: 'real_camps/kumbh-cottages-family-cottage-porch-relaxation.webp',
  },
  {
    src: 'NEW/11.jpeg',
    dest: 'real_camps/kumbh-cottages-international-pilgrim-namaste-sunset.webp',
  },
  {
    src: 'about.webp',
    dest: 'real_camps/kumbh-cottages-vip-founders-delegation-lounge.webp',
  },
  {
    src: 'about1.webp',
    dest: 'real_camps/kumbh-cottages-campus-operations-supervision-team.webp',
  },
  {
    src: 'about2.webp',
    dest: 'real_camps/kumbh-cottages-revered-devotee-elder-guest.webp',
  },

  // 6. Stargazing, Conclaves & Unique Amenities
  {
    src: 'NEW/22.jpeg',
    dest: 'real_camps/kumbh-cottages-astronomical-stargazing-telescope-deck.webp',
  },
  {
    src: 'NEW/TheKumbhCottages_Nashik_prayagraj (14).jpeg',
    dest: 'real_camps/kumbh-cottages-moon-craters-telescope-astronomy.webp',
  },
  {
    src: 'about3.webp',
    dest: 'real_camps/kumbh-cottages-outdoor-amphitheater-led-screen.webp',
  },
  {
    src: 'NEW/TheKumbhCottages_Nashik_prayagraj (16).jpeg',
    dest: 'real_camps/kumbh-cottages-shaded-shamiana-courtyard-pavilion.webp',
  },
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.23 PM.jpeg',
    dest: 'real_camps/kumbh-cottages-corporate-lions-club-conclave.webp',
  },
  {
    src: 'bnEW/WhatsApp Image 2026-09-13 at 5.54.24 PM.jpeg',
    dest: 'real_camps/kumbh-cottages-administrative-mela-reception-team.webp',
  },
  {
    src: 'NEW/TheKumbhCottages1.jpeg',
    dest: 'real_camps/kumbh-cottages-corporate-delegation-arrival-checkin.webp',
  }
];

let copiedCount = 0;
for (const item of copyMap) {
  const fullSrc = path.join(srcDir, item.src);
  const fullDest = path.join('public/assets', item.dest);
  if (fs.existsSync(fullSrc)) {
    fs.copyFileSync(fullSrc, fullDest);
    copiedCount++;
  } else {
    console.warn('Source file not found:', fullSrc);
  }
}

console.log(`Successfully copied & SEO-renamed ${copiedCount} files into public/assets!`);
