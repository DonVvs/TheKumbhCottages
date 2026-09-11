# Sovereign Heritage & Royal Luxury Web Design System
## Complete Master Coding & Architectural Blueprint for AI Agents

> **Purpose:** This document is the single source of truth for building websites in the identical design theme, aesthetic philosophy, visual hierarchy, UX excellence, and technical stack as **The Kumbh Cottages Nashik**. Any AI agent or developer can use this blueprint to construct the main company website or sister brand properties with zero guesswork.

---

## 1. Design Philosophy & Brand Aesthetics

The design language embodies **"Sovereign Indian Luxury"** — an aesthetic inspired by ultra-luxury heritage hospitality (Aman, Oberoi Vilas, Six Senses, Taj Exotica) fused with sacred Sanatan architectural gravitas.

### Core Principles:
1. **Luminous Warm Sandstone Canvas (Light Theme):** The primary canvas is **not** sterile stark white `#FFFFFF` nor harsh dark mode; it is a soft, luminous alabaster cream `#FAF7F2` and `#FDFBF7` with warm linen textures.
2. **Deep Espresso & Obsidian Typography:** Headlines and dark accents use deep roasted espresso `#1A120B` and obsidian `#0D0906` for royal contrast and maximum legibility for all age groups.
3. **Burnished Swarna Antique Gold:** Accent metals are restrained antique gold (`#C5A059`, `#E5C388`, `#B38F5B`), never cheap neon yellow. Used for borders, badges, shimmers, micro-dividers, and primary action buttons.
4. **Sacred Auspicious Accents:**
   - **Kesar (Saffron Amber):** `#D97706` / `#F59E0B` for live alerts, status badges, and warmth.
   - **Kumkum (Sacred Crimson):** `#8E2428` / `#74191D` for sacred top ribbons, seals, and heritage stamps.
5. **Architectural Elevation & Jharokha Framing:** Use subtle 1px antique gold borders (`border-[#C5A059]/30`), delicate inner shadows, backdrop blur filters (`backdrop-blur-xl`), and carved marble panel gradients (`.temple-panel`).
6. **Lagless Performance & Universal Readability:** High-clarity sans-serif typography for body text (`Inter`, `Outfit`, `Plus Jakarta Sans`) to protect against hairline serif blurriness on mobile screens and older eyes, with royal display serifs (`Cinzel`, `Marcellus`, `Playfair Display`) strictly reserved for headings.

---

## 2. Color Tokens & Palette Reference

```
┌─────────────────┬─────────────┬────────────────────────────────────────────────────────┐
│ Token Name      │ Hex Code    │ Semantic Role & Usage                                 │
├─────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ cream-50        │ #FDFBF7     │ Primary luminous soft alabaster background canvas     │
│ cream-100       │ #FAF7F2     │ Warm soft linen surface & card backgrounds             │
│ cream-200       │ #EFE8DC     │ Soft sandstone tone for subtle hover & secondary cards│
│ cream-300       │ #E3D7C5     │ Subtle divider & hairline border tone                  │
│ cream-400       │ #D5C4AC     │ Outer border tone                                      │
│ cream-500       │ #C2AD91     │ Muted sand accent                                      │
├─────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ espresso-950    │ #1A120B     │ Primary headline deep rich espresso                    │
│ espresso-900    │ #261B12     │ Secondary dark surface                                 │
│ espresso-800    │ #3A2B20     │ Primary body text (ultra-high contrast)                │
│ espresso-700    │ #523F32     │ Secondary body text & metadata                         │
│ espresso-600    │ #6E5747     │ Muted sandalwood subtext & captions                    │
├─────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ swarna-200      │ #FDF3D6     │ Soft gold highlight & glow                             │
│ swarna-300      │ #F6E3AD     │ Highlight gold for active links and badges            │
│ swarna-400      │ #E7CA7B     │ Medium warm gold                                       │
│ swarna-500      │ #C5A059     │ Sovereign Warm Antique Gold (Primary Brand Metal)     │
│ swarna-600      │ #B08842     │ Deep antique gold border                               │
│ swarna-700      │ #8E6B2D     │ Dark burnished gold text on light surfaces            │
│ swarna-800      │ #6C4F1C     │ Deep bronze text                                       │
├─────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ kesar-400       │ #F59E0B     │ Warm saffron amber highlight                           │
│ kesar-500       │ #D97706     │ Sacred Saffron Amber (Badge / Live Status)             │
│ kesar-600       │ #B45309     │ Deep saffron border & accent                           │
├─────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ kumkum-500      │ #8E2428     │ Sacred Crimson Red (Seals / Heritage badges)          │
│ kumkum-700      │ #74191D     │ Deep auspicious ribbon background                      │
├─────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ obsidian-dark   │ #0A0704     │ Deep nocturnal luxury background for Hero & Footer    │
│ obsidian-card   │ #120E0A     │ High-end frosted dropdowns & floating docks            │
└─────────────────┴─────────────┴────────────────────────────────────────────────────────┘
```

---

## 3. Typography System & Font Hierarchy

### Google Fonts Setup (`index.html`)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;900&family=Inter:wght@400;500;600;700&family=Marcellus&family=Noto+Serif+Devanagari:wght@400;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&display=swap" />
```

### Font Roles:
1. **`font-cinzel` & `font-marcellus` & `font-serif` (`Playfair Display`):**
   - Strictly reserved for `<h1>`, `<h2>`, `<h3>`, `.font-headline`, luxury tags, and royal badges.
   - Letter spacing: `tracking-wider` (`0.05em`) to `tracking-[0.18em]`.
2. **`font-sans` (`Inter`, `Outfit`, `Plus Jakarta Sans`):**
   - Used for **all body copy**, paragraphs (`<p>`), lists (`<li>`), table data (`<td>`), inputs, buttons, and small labels.
   - **Crucial Rule:** Body text should never use delicate Didone serifs at small sizes to prevent fuzzy rendering on mobile devices.
3. **`font-devanagari` (`Noto Serif Devanagari`):**
   - Used for Hindi (`hi`) and Marathi (`mr`) translations, Sanskrit shlokas, and cultural mantras.
4. **`font-mono` (`Inter` with tabular numerals):**
   - Styled with `font-feature-settings: "tnum" 1` for financial numbers, dates, coordinates, and tariff tables.

---

## 4. Tailwind CSS Configuration (`tailwind.config.js`)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        cream: {
          50: '#FDFBF7',  // Primary luminous soft alabaster canvas
          100: '#FAF7F2', // Warm soft linen surface
          200: '#EFE8DC', // Soft sandstone tone
          300: '#E3D7C5', // Subtle divider tone
          400: '#D5C4AC', // Border tone
          500: '#C2AD91',
        },
        espresso: {
          950: '#1A120B', // Primary headline deep rich espresso
          900: '#261B12',
          800: '#3A2B20', // Primary body text
          700: '#523F32', // Secondary body text
          600: '#6E5747', // Muted sandalwood subtext
          500: '#8C7260',
          400: '#AA917F',
        },
        swarna: {
          200: '#FDF3D6',
          300: '#F6E3AD',
          400: '#E7CA7B',
          500: '#C5A059', // Sovereign Warm Antique Gold
          600: '#B08842',
          700: '#8E6B2D',
          800: '#6C4F1C',
        },
        kesar: {
          100: '#FEF3E8',
          200: '#FDE1C8',
          400: '#F59E0B',
          500: '#D97706', // Sacred Saffron Amber
          600: '#B45309',
        },
        kumkum: {
          100: '#FCEBEB',
          500: '#8E2428', // Sacred Crimson Red
          600: '#74191D',
          700: '#5C1215',
        },
        sandstone: {
          50: '#FFFFFF',
          100: '#1A120B',
          200: '#3A2B20',
          300: '#6E5747',
          400: '#8C7260',
          500: '#C5A059',
        },
        mahogany: {
          950: '#FDFBF7',
          900: '#FAF7F2',
          850: '#EFE8DC',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        devanagari: ['Noto Serif Devanagari', 'Marcellus', 'serif'],
        marcellus: ['Marcellus', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Outfit', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Inter', 'Outfit', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'traditional': '0.14em',
        'royal': '0.22em',
      }
    },
  },
  plugins: [],
}
```

---

## 5. Master CSS Engine (`src/index.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  *, ::before, ::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    background-color: #FAF7F2;
    color: #261B12;
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    font-family: 'Inter', 'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    background-color: #FAF7F2;
    color: #1A120B;
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 1.65;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    touch-action: manipulation;
    position: relative;
  }

  #root, main {
    overflow-x: hidden;
    width: 100%;
    max-width: 100%;
    position: relative;
    background-color: #FAF7F2;
    color: #1A120B;
    min-height: 100dvh;
    font-family: 'Inter', 'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  }

  ::selection {
    background-color: rgba(197, 160, 89, 0.35);
    color: #1A120B;
  }

  /* Universal Legibility: Body elements use high-clarity sans */
  p, li, dd, dt, td, th, blockquote, input, select, textarea, button, a {
    font-family: 'Inter', 'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  }

  /* Display headlines receive crisp royal serif treatment */
  h1.font-serif, h2.font-serif, h3.font-serif, h4.font-serif, .font-headline {
    font-family: 'Playfair Display', 'Cinzel', 'Marcellus', Georgia, serif !important;
  }

  .font-mono {
    font-family: 'Inter', 'Outfit', system-ui, sans-serif !important;
    font-feature-settings: "tnum" 1;
    letter-spacing: 0.04em;
  }
}

/* Mobile Safe-Area Utilities */
.pb-safe {
  padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
}
.pt-safe {
  padding-top: max(0.75rem, env(safe-area-inset-top));
}

/* Custom Soft Antique Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #FAF7F2;
}
::-webkit-scrollbar-thumb {
  background: #D5C4AC;
  border-radius: 4px;
  border: 2px solid #FAF7F2;
}
::-webkit-scrollbar-thumb:hover {
  background: #C5A059;
}

/* 1. Sovereign Burnished Gold Action Button */
.btn-darbar-gold {
  background: linear-gradient(135deg, #C5A880 0%, #B38F5B 50%, #745220 100%);
  color: #0F0C09;
  font-family: 'Marcellus', 'Cinzel', serif;
  font-weight: 600;
  letter-spacing: 0.1em;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 16px -2px rgba(179, 143, 91, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(197, 168, 128, 0.4);
}
.btn-darbar-gold:hover {
  background: linear-gradient(135deg, #D1B690 0%, #BF9B68 50%, #AA8751 100%);
  box-shadow: 0 6px 22px -2px rgba(179, 143, 91, 0.35);
  transform: translateY(-1px);
}

/* 2. Frosted Dark Glass Outline Button */
.btn-temple-outline {
  background: rgba(15, 12, 9, 0.4);
  border: 1px solid rgba(197, 168, 128, 0.4);
  color: #FAF7F2;
  font-family: 'Marcellus', serif;
  font-weight: 500;
  letter-spacing: 0.08em;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
}
.btn-temple-outline:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(197, 160, 89, 0.2);
}

/* 3. Soft Carved Marble / Sandstone Panel */
.temple-panel {
  background: linear-gradient(180deg, #FFFFFF 0%, #FAF7F2 100%);
  border: 1px solid rgba(197, 160, 89, 0.28);
  box-shadow: 0 10px 30px -5px rgba(60, 40, 20, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.temple-card-hover {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.temple-card-hover:hover {
  transform: translateY(-4px);
  border-color: rgba(197, 160, 89, 0.55);
  box-shadow: 0 16px 36px -8px rgba(197, 160, 89, 0.2), 0 4px 12px rgba(60, 40, 20, 0.04);
}

/* 4. Luxury River Frosted Glass Surface */
.river-glass-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(229, 195, 136, 0.35);
  box-shadow: 0 10px 35px -10px rgba(158, 125, 71, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.river-glass-card:hover {
  background: rgba(255, 255, 255, 0.96);
  border-color: rgba(197, 160, 89, 0.6);
  box-shadow: 0 20px 45px -12px rgba(158, 125, 71, 0.16), 0 6px 18px -4px rgba(0, 0, 0, 0.05);
  transform: translateY(-3px);
}

/* 5. Auspicious Crimson Top Ribbon */
.auspicious-patti {
  background: linear-gradient(90deg, #74191D 0%, #8E2428 50%, #74191D 100%);
  color: #FFFDF8;
  border-bottom: 1px solid rgba(197, 160, 89, 0.4);
  box-shadow: 0 2px 10px rgba(60, 20, 20, 0.15);
}

/* 6. Gold Text Gradient */
.text-gold-gradient {
  background: linear-gradient(135deg, #B3861B 0%, #C59B27 45%, #8E6515 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 7. Responsive Editorial Table Wrapper */
.editorial-table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  max-width: 100%;
  width: 100%;
}
```

---

## 6. Layout & Global Shell Architecture

Every website in this theme is constructed with the following persistent shell layout:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. Auspicious Top Micro-Ribbon (Shloka + 24/7 Helpline Link)           │
├────────────────────────────────────────────────────────────────────────┤
│ 2. Architectural Fixed Header (Logo Seal + Mega Dropdowns + Switchers) │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│ 3. Main Route Content Area (<main className="pb-16 lg:pb-0">)          │
│    - Hero Section (Cinematic Video + Editorial Headline + Timeline)   │
│    - Awakening / Storytelling Chapter                                 │
│    - Product / Service / Accommodation Grid & Interactive Explorer    │
│    - Trust, Accreditations, Devotee Reviews & History                 │
│    - Geographic Map & VIP Transit Logistics                          │
│    - Pure Sattvic Seva & CSR Commitments                              │
│    - Knowledge Journal & FAQs                                         │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│ 4. Sovereign Darbar Multi-Column Footer (4 Dhams Directory + Legal)    │
├────────────────────────────────────────────────────────────────────────┤
│ 5. Mobile Sticky Bottom CTA Bar (WhatsApp Icon + Price + Reserve Btn) │
├────────────────────────────────────────────────────────────────────────┤
│ 6. Floating Obsidian Concierge Micro-Dock (Contact Pill + Google + WA) │
└────────────────────────────────────────────────────────────────────────┘
```

### Component Breakdown:

### A. Luxury Header (`LuxuryHeader.jsx`)
- **Auspicious Top Ribbon:** Displays auspicious shloka (e.g. `॥ Om Namah Shivaya · Holy Simhastha 2027 ॥`) + direct clickable phone/WhatsApp helpline.
- **Scroll Transition:**
  - When `isScrolled === false` on Home: Transparent background with maximum visual immersion.
  - When `isScrolled === true`: Smooth transition to `bg-[#0D0906] border-b border-white/15 shadow-xl` with auto-collapsed top ribbon.
- **Brand Logo:** Authentic seal logo on the left with subtle hover scaling.
- **Mega-Dropdowns:** Triggered on hover (`mouseenter`/`mouseleave` with 200ms debounce), rendered in obsidian glass (`bg-[#120E0A] border border-[#C5A880]/30 shadow-2xl rounded-xl p-3.5`).
- **Language Switcher Pill:** `EN | हिं | मराठी` pill in header bar.
- **Reserve Button:** Sovereign gold pill button (`btn-darbar-gold`) opening the universal booking engine.

### B. Luxury Footer (`LuxuryFooter.jsx`)
- **Top Sacred Inscription:** Official logo + 25-Year Heritage tag + Sanskrit shloka with antique gold diamond separators (`✦`).
- **Four Sacred Locations Directory:** 4 responsive columns showcasing the brand's network (e.g., Prayagraj, Nashik, Haridwar, Ujjain) with direct Google Maps links (`↗`).
- **Deep 4-Column Directory:**
  1. Quick Links (About Us, History, Guide, Sitemap)
  2. Products / Stays / Categories (Tariffs, Amenities, Inclusions)
  3. Seva / Philosophy / CSR (Sattvic Dining, Elder Care, Vedic Rituals)
  4. 24/7 Central Liaison Contact & Social Proof (WhatsApp, Email, Google Reviews)
- **Bottom Bar:** Official trademark copyright statement, ISO/trust seals, and smooth `Scroll to Top` arrow button.

### C. Mobile Sticky CTA (`MobileStickyCTA.jsx`)
- Fixed at the bottom for viewport widths `< 1024px` (`lg:hidden`).
- Respects mobile bottom notch with `pb-[max(0.65rem,env(safe-area-inset-bottom))]`.
- Contains:
  1. Instant WhatsApp quick-action circular button (`Phone` icon with amber/green accent).
  2. Starting tariff / key summary (`font-mono` text).
  3. `Reserve` action button (`btn-darbar-gold` with `ArrowRight`).

### D. Floating Concierge Capsule (`FloatingConciergeButtons.jsx`)
- **Bottom-Left:** Floating `CONTACT US` obsidian pill (`bg-[#1F100A]/95 border border-[#C5A059]/60`) with mail icon.
- **Bottom-Right:** Sleek vertical obsidian & gold capsule dock (`hidden md:block fixed right-6 bottom-8 z-30`) containing:
  1. Google Profile & Reviews direct link with custom tooltip.
  2. Hairline divider (`w-5 h-[1px] bg-white/15`).
  3. WhatsApp direct concierge liaison link with live indicator (`● Live`).

---

## 7. Section-by-Section Design Blueprints

### Section 1: Cinematic Hero Section (`HeroSection.jsx`)
- **Height:** `h-[100dvh]` on mobile, `lg:h-screen lg:max-h-[100dvh]` on desktop.
- **Video Engine:** Memoized `<video>` element with hardware GPU acceleration (`transform-gpu translate-z-0 will-change-transform backface-hidden`), `autoPlay`, `loop`, `muted`, `playsInline`, and an instant WebP poster fallback (`1.webp`) to eliminate black screen flash.
- **Vignette Overlays:** 3 layered gradient overlays for cinematic contrast (top shadow, bottom fade, subtle side vignette).
- **Center Content:**
  - Official institution seal / logo with drop-shadow.
  - Sacred institution subtitle: `EST. 2001 · NASHIK SIMHASTHA 2027` with compass icon.
  - Multi-line display headline with dual font sizes (`text-swarna-200` line 1, `text-white` line 2).
  - High-clarity subtitle in `font-sans` with 1.6 line height.
  - Dual action buttons: `btn-darbar-gold` (Reserve) + `btn-temple-outline` (WhatsApp).
- **Bottom Heritage Dock:** 7-milestone interactive timeline bar (e.g. 2001, 2006, 2011, 2015, 2018, 2024, 2027). Auto-advances every 6 seconds, pauses on hover, with interactive gold glow indicators and year markers.

### Section 2: Awakening & Origin Story (`ChapterOneAwakening.jsx`)
- **Layout:** 2-column editorial grid (Left: Large serif chapter title `॥ Chapter 01 · The Sovereign Awakening ॥` + evocative narrative copy; Right: Stats badge matrix).
- **Stat Cards:** 4 high-trust metric blocks (e.g., `25+ Years Experience`, `28-Acre Sanctuary`, `100% Desi Ghee Dining`, `50,000+ Devotees Served`) with `font-mono` numerals, antique gold borders, and subtle hover lifts.

### Section 3: Product / Stay Explorer (`InteractiveSuiteExplorer.jsx` & `StaysSection.jsx`)
- **Card Structure:**
  - Image container with aspect ratio `16:10` or `4:3`, subtle hover zoom (`scale-105 transition-transform duration-700`), and category badge (`Maharaja Royal Suite`, `Safari Villa Tent`).
  - Key specs row: Floor area (`650 sq.ft`), bed type (`King Teak Bed`), river view badge.
  - Feature bullet points with checkmarks (`Dual Inverter HVAC`, `En-suite Italian Bath`, `24/7 Butler`).
  - Pricing display: Dual currency toggle support (`₹48,000 / Night` or `$578 / Night`) with `font-mono` numerals and tax clarity note.
  - Dual CTAs on card: `Explore Details` (opens modal) + `Reserve` (opens booking engine).

### Section 4: Geographic Sanctuary & Transit Map (`NashikGeography.jsx`)
- **Map Visual:** High-definition topographic/satellite map image overlay with interactive animated pulse pins (`.interactive-hotspot-pin`).
- **Transit Matrix:** Distance & transit time table to key pilgrimage landmarks (e.g., Ramkund Ghat: 8 mins via Green Corridor; Trimbakeshwar: 28 mins; Airport: 35 mins via Helipad).
- **Elder Boardwalk & Safety Inset:** Visual highlights of step-free timber walkways, golf cart mobility, and medical triage.

### Section 5: Annakshetra & Sattvic Cuisine (`AnnakshetraPage.jsx`)
- **Philosophical Focus:** 100% Pure Cow Desi Ghee, Zero Onion & Garlic, Strict Jain Chauvihar before sunset, Vrat & Ekadashi Phalahar menus.
- **Seva Inscriptions:** Sanskrit shloka banners (`अन्नं परब्रह्म स्वरूपम्`), corporate CSR Section 135 sponsorship details, and food quality safety standards.

### Section 6: Trust, Heritage & Devotee Testimonials (`LegacyTrust.jsx`)
- **Devotee Testimonial Cards:** 5-star gold ratings (`★★★★★`), pilgrim name, city, organization, verified badge (`ShieldCheck`), and quote formatted in high-contrast text on `.temple-panel`.
- **Accreditation Logos:** Government tourism badges, UNESCO Intangible Heritage references, and ISO hospitality compliance seals.
- **Accordion FAQ:** Expandable question-and-answer list with rich microdata markup for Google FAQ Rich Snippets.

---

## 8. Interactive Modal & Booking Engine Architecture

### The 4-Step Booking Engine (`BookingEngineModal.jsx`)

```
Step 1: Category Selection (Suite / Villa / Cottage cards with real-time availability badges)
   ↓
Step 2: Dates & Devotee Configuration (Check-in, Check-out, Nights auto-calculation, Guests)
   ↓
Step 3: VIP Pilgrimage Inclusions (Checkable add-ons: Trimbak Rudrabhishek, VIP Snan Pass, Elder Sevak)
   ↓
Step 4: Devotee Information & Instant WhatsApp / Invoice Confirmation
```

### Financial Calculation Engine:
```javascript
const stayBasePrice = selectedStay.price * nights;
const addOnsTotalINR = selectedAddOns.reduce((sum, id) => sum + (ADD_ONS.find(a => a.id === id)?.priceINR || 0), 0);
const subtotalINR = stayBasePrice + addOnsTotalINR;
const taxesINR = Math.round(subtotalINR * 0.18); // 18% standard luxury GST
const grandTotalINR = subtotalINR + taxesINR;
const depositRequiredINR = Math.round(grandTotalINR * 0.25); // 25% booking token
```

### Conversion Features:
1. **Confetti Celebration:** Triggers `canvas-confetti` explosion upon successful token submission.
2. **WhatsApp Direct Payload:** Auto-generates encoded WhatsApp message URL prefilled with booking reference, stay category, dates, guest details, and tariff for 1-click confirmation with the central desk.
3. **Clarity Telemetry:** Triggers `trackClarityEvent('submit_reservation')` and `upgradeClaritySession('booking_token_confirmed')`.

---

## 9. Multi-Language & Multi-Currency System

### 1. Language State (`en` | `hi` | `mr`)
- Stored in React state at the root `App.jsx`.
- Initialized from URL search parameter `?lang=hi` or `?lang=mr` with automatic fallback to `en`.
- Dictionary structure in `src/data/translationsData.js`:
```javascript
export const TRANSLATIONS = {
  en: { ... },
  hi: { ... },
  mr: { ... }
};
```

### 2. Multi-Currency (`INR` | `USD`)
- Stored in root state (`currency`, `setCurrency`).
- Real-time conversion helper:
```javascript
export const formatPrice = (inr, currency = 'INR') => {
  if (currency === 'USD') {
    const usd = Math.round(inr / 83);
    return `$${usd.toLocaleString('en-US')}`;
  }
  return `₹${inr.toLocaleString('en-IN')}`;
};
```

---

## 10. Sacred Audio Synthesis & User Interaction

### Audio Utility (`src/utils/divineAudio.js`)
- Plays an authentic, uplifting sacred Shankh Naad audio transition when the devotee toggles audio or reaches key milestone chapters.
- **Audio Rule:** Never autoplay audio on initial page load without user gesture (browser policy compliance). Trigger audio on button click or explicit interaction.

```javascript
import shankhWav from '../assets/audio/shankh_9to15.wav';

let audioInstance = null;

export function playShankhTransition() {
  try {
    if (!audioInstance) {
      audioInstance = new Audio(shankhWav);
    }
    audioInstance.currentTime = 0;
    audioInstance.volume = 0.85;
    audioInstance.play().catch(err => {
      console.warn('Audio play restricted until user gesture:', err);
    });
    return true;
  } catch (err) {
    return false;
  }
}

export function stopDivineAudio() {
  if (audioInstance) {
    try {
      audioInstance.pause();
      audioInstance.currentTime = 0;
    } catch (e) {}
  }
}
```

---

## 11. SEO, Schema.org & Knowledge Graph Entity Linking

Every page must achieve top-tier Google search visibility, AI search ranking (Perplexity, ChatGPT Search, Gemini), and rich snippets.

### A. Dynamic SEO Head Component (`SEOHead.jsx`)
- Updates `document.title`, `meta[name="description"]`, `meta[name="keywords"]`, canonical `<link>`, OpenGraph, and Twitter tags on route change.
- Injects enriched JSON-LD structured data linked to official **Wikidata Knowledge Graph** entities and government domains (`.gov.in`).

### B. Wikidata Entity Dictionary (`src/data/wikidataEntities.js`)
**Strict Rule:** Knowledge Graph entities must cite canonical sources (UNESCO, Wikidata, Wikipedia, Britannica, Official `.gov.in` sites), **zero** commercial third-party links.

```javascript
export const WIKIDATA_ENTITIES = {
  kumbhMela: {
    "@type": "Event",
    "name": "Kumbh Mela",
    "sameAs": [
      "https://www.wikidata.org/wiki/Q10283",
      "https://en.wikipedia.org/wiki/Kumbh_Mela",
      "https://ich.unesco.org/en/RL/kumbh-mela-01258",
      "https://www.britannica.com/topic/Kumbh-Mela"
    ]
  },
  nashik: {
    "@type": "Place",
    "name": "Nashik",
    "sameAs": [
      "https://www.wikidata.org/wiki/Q200019",
      "https://en.wikipedia.org/wiki/Nashik",
      "https://nashik.gov.in",
      "https://www.maharashtratourism.gov.in"
    ]
  }
};
```

---

## 12. Build Pipeline, Image Optimization & Static Pre-Rendering

### NPM Scripts (`package.json`)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build && node scripts/prerender.js",
    "indexnow": "node scripts/indexnow.js",
    "preview": "vite preview"
  }
}
```

### Static Pre-rendering Engine (`scripts/prerender.js`)
- Runs automatically post-build.
- Takes the compiled `dist/index.html` template and generates real static HTML files for every route (e.g. `dist/luxury-cottages-nashik-kumbh-2027/index.html`, `dist/shahi-snan-dates-nashik-kumbh-2027/index.html`, etc.).
- Injects exact server-rendered `<title>`, `<meta>`, canonical URL, OpenGraph tags, JSON-LD Schema graphs, and crawlable semantic HTML content snippets (`<h1>`, `<h2>`, `<p>`, `<ul>`) into the pre-rendered HTML before search engine spiders crawl.
- Also auto-generates:
  1. `dist/sitemap.xml` with `<lastmod>` timestamps and priority scores.
  2. `dist/feed.xml` (RSS 2.0 feed for news aggregators).
  3. Dispatches automated IndexNow search engine pings (`scripts/indexnow.js`) to Bing, Yandex, and Naver.

### Image Optimization Rules
1. All hero and card imagery must be converted to modern **WebP** (`.webp`) format.
2. Hero poster image must be preloaded in `<head>`:
   ```html
   <link rel="preload" href="/1.webp" as="image" type="image/webp" />
   ```
3. All images must specify explicit `width`, `height`, or `aspectRatio` styles to prevent Cumulative Layout Shift (CLS = 0).

---

## 13. Telemetry & Analytics (`Microsoft Clarity`)

### Telemetry Engine (`src/utils/clarity.js`)
```javascript
import Clarity from '@microsoft/clarity';

export function initClarity(projectId = 'ydlevz3pj0') {
  if (typeof window === 'undefined' || !projectId) return;
  try {
    Clarity.init(projectId);
  } catch (e) {}
}

export function trackClarityEvent(eventName) {
  try { Clarity.event(eventName); } catch (e) {}
}

export function setClarityTag(key, value) {
  try { Clarity.setTag(key, value); } catch (e) {}
}

export function upgradeClaritySession(reason) {
  try { Clarity.upgrade(reason); } catch (e) {}
}
```

### Automatic Route Telemetry Tracker (`App.jsx`)
```jsx
function ClarityRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    try {
      setClarityTag('page_path', location.pathname);
      setClarityTag('page_title', document.title);
      let visitorId = localStorage.getItem('kcn_visitor_id');
      if (!visitorId) {
        visitorId = 'visitor_' + Math.random().toString(36).substring(2, 11);
        localStorage.setItem('kcn_visitor_id', visitorId);
      }
      identifyUser(visitorId, undefined, location.pathname);
    } catch (e) {}
  }, [location]);

  return null;
}
```

---

## 14. Master AI Agent Prompt Template

When instructing another AI agent to generate new pages or a sister website in this theme, provide the following prompt:

```markdown
You are building a sovereign luxury website in the exact design theme of "The Kumbh Cottages Nashik".
Follow the rules in `DESIGN_SYSTEM_AND_CODING_INSTRUCTIONS.md`:
1. Canvas: Warm soft alabaster cream (#FAF7F2 / #FDFBF7), deep roasted espresso typography (#1A120B), and burnished antique gold accents (#C5A059 / #E5C388).
2. Typography: Playfair Display / Cinzel / Marcellus for headlines; Inter / Outfit for high-legibility body copy; Noto Serif Devanagari for Hindi/Marathi.
3. Use custom CSS classes: `.btn-darbar-gold`, `.btn-temple-outline`, `.temple-panel`, `.temple-card-hover`, `.river-glass-card`, `.auspicious-patti`.
4. Header: Auspicious micro-ribbon + fixed glass header with smooth scroll compression, 5-item navigation, language switch (EN/HI/MR), and Reserve CTA.
5. Hero: Full-bleed lagless background video with webp poster fallback, institutional seal, display headline, and 7-milestone heritage timeline dock.
6. Footer: Sovereign Darbar footer with 4-Dhams directory, Google Maps deep-links, multi-column directory, and Sanskrit shlokas.
7. Modals: 4-step booking engine with add-on checkboxes, 18% GST calculation, confetti trigger, and WhatsApp payload generation.
8. Mobile: Fixed bottom sticky CTA bar with safe area padding.
9. Floating dock: Obsidian Google Reviews & WhatsApp micro-dock.
10. SEO: Dynamic SEOHead, Wikidata Knowledge Graph JSON-LD schema, and static pre-rendering in `scripts/prerender.js`.
```

---

## 15. Complete Implementation Checklist for New Projects

- [ ] **1. Dependencies:** Install `react`, `react-dom`, `react-router-dom`, `lucide-react`, `tailwindcss`, `autoprefixer`, `postcss`, `canvas-confetti`, `@microsoft/clarity`, `sharp`.
- [ ] **2. Font Imports:** Embed Google Fonts (`Cinzel`, `Inter`, `Marcellus`, `Noto Serif Devanagari`, `Playfair Display`) in `index.html`.
- [ ] **3. Tailwind Tokens:** Paste the exact color palette, fonts, and letter spacings into `tailwind.config.js`.
- [ ] **4. Global CSS:** Paste the master stylesheet into `src/index.css` with all `.btn-darbar-gold`, `.temple-panel`, and animation utilities.
- [ ] **5. Navigation & Shell:** Wire `LuxuryHeader`, `LuxuryFooter`, `MobileStickyCTA`, and `FloatingConciergeButtons` in `App.jsx`.
- [ ] **6. Multilingual & Currency:** Setup language state (`en`/`hi`/`mr`) and currency state (`INR`/`USD`).
- [ ] **7. Booking Engine:** Integrate `BookingEngineModal` with WhatsApp generator and confetti celebration.
- [ ] **8. SEO & Schema:** Implement `SEOHead` with Wikidata entity linking across all pages.
- [ ] **9. Pre-rendering:** Configure `scripts/prerender.js` and `scripts/indexnow.js` in `package.json` build step.
- [ ] **10. Verification:** Test responsive layout across mobile (375px), tablet (768px), and desktop (1440px) ensuring zero horizontal scroll and 100% legibility.
