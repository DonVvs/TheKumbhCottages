# The Kumbh Cottages 🕉️

> **Official Flagship Web Experience & Authority Hub for Luxury Hospitality Across India's Sacred Kumbh Melas**  
> Nashik Trimbakeshwar (2027) • Prayagraj (2025/2037) • Ujjain (2028) • Haridwar (2033)

[![Website](https://img.shields.io/badge/Website-thekumbhcottages.com-amber?style=flat-square)](https://thekumbhcottages.com)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📖 Overview

**The Kumbh Cottages** provides ultra-luxury tented accommodations, private VIP ghat access, Sattvic fine-dining, institutional turnkey setups, and corporate CSR camp facilities across India's Maha Kumbh & Simhastha pilgrimage sites.

This portal is engineered with high-authority semantic SEO, prerendered static architecture for search engine discovery, JSON-LD Schema.org graphs, AI-crawler compatibility (`llms.txt`), and interactive booking flows.

---

## ✨ Features

- **Luxury Accommodations Explorer**: Interactive suite browser detailing Presidential Maharaja Suites, Godavari Luxury Villas, and Swiss Luxury Cottages.
- **Comprehensive Kumbh Encyclopedia & Directory**: Dedicated authority hubs for Nashik Trimbakeshwar, Prayagraj Triveni Sangam, Ujjain Shipra, Haridwar Ganga, 13 Akhara Lineages, and Shahi Snan dates.
- **Corporate & High-Net-Worth Concierge**: Direct corporate booking engine, turnkey institutional camps, Annakshetra (Bhandara) catering, and CSR facilitation.
- **Auspicious Muhurat & Daily Vedic Panchang Ribbon**: Real-time lunar phase, tithi, and Shahi Snan countdown.
- **Multi-Language Support**: Seamless English, Hindi (हिंदी), and Marathi (मराठी) localization.
- **Full Static Prerendering (SEO)**: Custom static build pipeline (`scripts/prerender.js`) injecting metadata, Open Graph, Twitter Cards, and schema markup into static HTML for 40+ high-value routes.
- **AI Agent Context Readiness**: Implements `/llms.txt` and `/llms-full.txt` standards for indexing by ChatGPT, Claude, Perplexity, and Gemini.

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom Vedic Heritage Theme Tokens
- **Icons**: Lucide React
- **Animations / Micro-interactions**: Tailwind Transitions & Canvas Confetti
- **SEO & Social**: Custom Head Manager, OpenGraph, JSON-LD Structured Data (Hotel, Organization, FAQ, TouristAttraction)
- **Analytics**: Microsoft Clarity Integration

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/DonVvs/TheKumbhCottages.git

# Navigate into directory
cd TheKumbhCottages

# Install dependencies
npm install
```

### Development

```bash
# Run local Vite development server
npm run dev
```

### Production Build & Prerender

```bash
# Builds the production bundle and prerenders static SEO HTML files
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```text
TheKumbhCottages/
├── public/                 # Static assets, sitemap.xml, robots.txt, llms.txt
├── scripts/
│   ├── prerender.js        # Static HTML generator for all routes & SEO metadata
│   └── indexnow.js         # Instant search engine indexing ping
├── src/
│   ├── components/         # Reusable UI, ribbons, headers, modals & sections
│   ├── data/               # Knowledge base, directories, blogs & accommodations data
│   ├── pages/              # Route pages (Accommodations, Guides, Directories, Corporate)
│   ├── utils/              # Structured schema helpers, formatters & analytics
│   ├── App.jsx             # App routing and layout
│   └── main.jsx            # Application entry point
├── index.html              # Base HTML template
├── tailwind.config.js      # Custom theme, typography & colors
└── vite.config.js          # Vite configuration
```

---

## 📜 License

Private & Proprietary © **The Kumbh Cottages & Resorts**. All rights reserved.
