import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TRAVEL_AND_KUMBH_BLOGS } from '../src/data/travelAndKumbhBlogsData.js';
import { KUMBH_FOUR_DHAMS_DIRECTORY, THIRTEEN_AKHARAS_DIRECTORY, KUMBH_SEO_FAQS, SHAHI_SNAN_SCIENCE } from '../src/data/kumbhDirectoryData.js';
import { MASTER_KUMBH_FAQS } from '../src/data/faqSeoData.js';
import { DESTINATIONS_PORTFOLIO } from '../src/data/destinationsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

function getRouteImage(routePath) {
  if (routePath.startsWith('guides/')) {
    const slug = routePath.replace('guides/', '');
    const blog = TRAVEL_AND_KUMBH_BLOGS.find(b => b.slug === slug);
    if (blog && blog.image) return blog.image;
  }
  if (routePath === 'heritage-since-2001') {
    return '/assets/milestones/the-kumbh-cottages-2001-ram-janmabhoomi-triveni-sangam-camp.webp';
  }
  if (routePath === 'destinations') {
    return '/assets/cottages/godavari-villa.webp';
  }
  if (routePath === 'capabilities-infrastructure') {
    return '/assets/cottages/pure-sattvic-annakshetra-dining-hall.webp';
  }
  if (routePath === 'corporate-contact') {
    return '/assets/real_camps/kumbh-cottages-vip-founders-delegation-lounge.webp';
  }
  if (routePath === 'kumbh-directory/nashik-simhastha-kumbh') {
    return '/assets/hero/nashik-hero-1.webp';
  }
  if (routePath === 'kumbh-directory/haridwar-maha-kumbh') {
    return '/assets/hero/kumbh-ghats-sunrise.jpg';
  }
  if (routePath === 'kumbh-directory/ujjain-simhastha-kumbh') {
    return '/assets/hero/sanctuary-dusk.jpg';
  }
  if (routePath === 'kumbh-directory/akharas-and-traditions') {
    return '/assets/hero/ramkund-godavari-maha-aarti.jpg';
  }
  if (routePath === 'kumbh-directory/shahi-snan-rituals-guide') {
    return '/assets/real_camps/kumbh-cottages-sacred-sankalpa-puja-boat-snan.webp';
  }
  return '/assets/real_camps/kumbh-cottages-riverfront-sanctuary-fountain.webp';
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ─────────────────────────────────────────────────────────────────────────────
// BUILD DYNAMIC FULL-CONTENT BLOG ROUTES (ALL 39 ARTICLES)
// ─────────────────────────────────────────────────────────────────────────────
const blogRoutes = TRAVEL_AND_KUMBH_BLOGS.map((blog) => {
  const canonical = `https://thekumbhcottages.com/guides/${blog.slug}`;
  
  // Table of Contents HTML
  let tocHtml = '';
  if (blog.tableOfContents && blog.tableOfContents.length > 0) {
    const listItems = blog.tableOfContents
      .map(item => `<li><a href="#${item.id}">${escapeHtml(item.title)}</a></li>`)
      .join('\n');
    tocHtml = `
      <nav aria-label="Table of Contents" style="background:#f9f8f6; padding:1.25rem; border-radius:8px; border:1px solid #e7e5e4; margin:1.5rem 0;">
        <h3 style="font-size:14px; text-transform:uppercase; letter-spacing:0.05em; color:#78350f; margin-bottom:0.75rem;">In This Master Guide:</h3>
        <ul style="line-height:1.8; font-size:13px; color:#44403c; padding-left:1.25rem;">
          ${listItems}
        </ul>
      </nav>
    `;
  }

  // Related In-Content Links HTML
  let relatedLinksHtml = '';
  if (blog.relatedLinks && blog.relatedLinks.length > 0) {
    const linksList = blog.relatedLinks
      .map(link => `<li><a href="${link.url}" style="color:#854d0e; text-decoration:underline;"><strong>✦ ${escapeHtml(link.label)}</strong></a></li>`)
      .join('\n');
    relatedLinksHtml = `
      <section aria-label="Official Related Resources" style="background:#fefce8; padding:1.25rem; border-radius:8px; border:1px solid #fef08a; margin:2rem 0;">
        <h3 style="font-size:14px; text-transform:uppercase; color:#854d0e; margin-bottom:0.75rem;">Official Pilgrimage &amp; Related Resources:</h3>
        <ul style="line-height:1.8; font-size:13px; color:#713f12; padding-left:1.25rem;">
          ${linksList}
        </ul>
      </section>
    `;
  }

  // Destination Portal Callout
  const bookingCalloutHtml = `
    <div style="background:#1c1917; color:#f5f5f4; padding:1.5rem; border-radius:8px; border:1px solid #d97706; margin:2rem 0;">
      <span style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#fbbf24;">Active Sacred Destination Gateway</span>
      <h3 style="color:#ffffff; margin:0.5rem 0;">Planning Your Sacred Journey with The Kumbh Cottages</h3>
      <p style="font-size:13px; color:#d6d3d1; line-height:1.6;">
        Established in 2001, The Kumbh Cottages engineers turnkey weather-proof luxury cottage villages, 100% pure A2 desi ghee Annakshetra dining, and step-free elder boardwalks across Nashik, Ujjain, Haridwar, and Prayagraj.
      </p>
      <div style="margin-top:1rem; display:flex; flex-wrap:wrap; gap:0.75rem;">
        <a href="https://kumbhcottagesnashik.com" target="_blank" rel="noopener noreferrer" style="background:#d97706; color:#ffffff; padding:0.5rem 1rem; border-radius:4px; text-decoration:none; font-size:12px; font-weight:600;">Visit Nashik 2027 Portal (kumbhcottagesnashik.com) ↗</a>
        <a href="/destinations" style="background:#292524; color:#ffffff; padding:0.5rem 1rem; border-radius:4px; text-decoration:none; font-size:12px; border:1px solid #44403c;">All Destination Portfolios</a>
        <a href="/corporate-contact" style="background:#292524; color:#ffffff; padding:0.5rem 1rem; border-radius:4px; text-decoration:none; font-size:12px; border:1px solid #44403c;">Request Corporate Liaison</a>
      </div>
    </div>
  `;

  // Related Guides Grid (Pick 4 contextually relevant guides)
  const sameCategory = TRAVEL_AND_KUMBH_BLOGS.filter(b => b.slug !== blog.slug && b.category === blog.category);
  const diffCategory = TRAVEL_AND_KUMBH_BLOGS.filter(b => b.slug !== blog.slug && b.category !== blog.category);
  const relatedFour = [...sameCategory, ...diffCategory].slice(0, 4);

  const relatedCardsHtml = relatedFour.map(r => `
    <article style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.25rem;">
      <span style="font-size:10px; text-transform:uppercase; color:#b45309; font-weight:600; background:#fef3c7; padding:0.2rem 0.5rem; border-radius:4px;">${escapeHtml(r.badge)}</span>
      <h4 style="margin:0.5rem 0; font-size:14px;"><a href="/guides/${r.slug}" style="color:#1c1917; text-decoration:none;">${escapeHtml(r.title)}</a></h4>
      <p style="font-size:12px; color:#57534e; line-height:1.5;">${escapeHtml(r.excerpt.slice(0, 140))}...</p>
      <div style="margin-top:0.75rem; font-size:11px; color:#a8a29e; display:flex; justify-content:space-between;">
        <span>${escapeHtml(r.readTime)}</span>
        <a href="/guides/${r.slug}" style="color:#b45309; font-weight:600;">Read Guide →</a>
      </div>
    </article>
  `).join('\n');

  const relatedSectionHtml = `
    <section aria-label="Related Knowledge &amp; Guides" style="margin-top:2.5rem; padding-top:2rem; border-top:1px solid #e7e5e4;">
      <h3 style="font-size:18px; color:#1c1917; margin-bottom:1rem;">Related Authority Guides &amp; Sacred Knowledge</h3>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem;">
        ${relatedCardsHtml}
      </div>
    </section>
  `;

  // Semantic Breadcrumbs
  const breadcrumbHtml = `
    <nav aria-label="Breadcrumb" style="font-size:11px; color:#78716c; margin-bottom:1rem;">
      <ol style="display:flex; flex-wrap:wrap; gap:0.5rem; list-style:none; padding:0; margin:0;">
        <li><a href="/" style="color:#78716c; text-decoration:none;">Home</a> »</li>
        <li><a href="/sacred-travel-and-kumbh-guides" style="color:#78716c; text-decoration:none;">Guides &amp; Journal</a> »</li>
        <li aria-current="page" style="color:#1c1917; font-weight:500;">${escapeHtml(blog.title)}</li>
      </ol>
    </nav>
  `;

  const fullArticleHtml = `
    <article class="master-pilgrim-guide" style="max-width:900px; margin:0 auto; padding:1rem 0;">
      ${breadcrumbHtml}
      <header style="margin-bottom:2rem; border-bottom:1px solid #e7e5e4; padding-bottom:1.5rem;">
        <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#b45309; font-weight:600; margin-bottom:0.5rem;">
          ${escapeHtml(blog.category)} · ${escapeHtml(blog.badge)}
        </div>
        <h1 style="font-size:28px; line-height:1.3; color:#1c1917; margin:0.5rem 0;">${escapeHtml(blog.title)}</h1>
        <div style="font-size:12px; color:#78716c; margin:0.75rem 0; display:flex; flex-wrap:wrap; gap:1rem;">
          <span>Authored by <strong>${escapeHtml(blog.author)}</strong></span>
          <span>•</span>
          <span>Published: <time datetime="${blog.publishedDate}">${blog.publishedDate}</time></span>
          <span>•</span>
          <span>Read Time: ${escapeHtml(blog.readTime)}</span>
          <span>•</span>
          <span>Verified Seva Authority (Est. 2001)</span>
        </div>
        <p style="font-size:15px; line-height:1.6; color:#44403c; font-style:italic; border-left:3px solid #d97706; padding-left:1rem; margin-top:1rem;">
          ${escapeHtml(blog.excerpt)}
        </p>
      </header>

      ${tocHtml}

      <div class="article-body-content" style="line-height:1.8; font-size:15px; color:#292524;">
        ${blog.content}
      </div>

      ${relatedLinksHtml}
      ${bookingCalloutHtml}
      ${relatedSectionHtml}
    </article>
  `;

  return {
    path: `guides/${blog.slug}`,
    title: `${blog.title} | TheKumbhCottages (Est. 2001)`,
    description: blog.excerpt,
    h1: blog.title,
    canonical,
    priority: '0.9',
    type: 'article',
    blog,
    content: fullArticleHtml
  };
});

// ─────────────────────────────────────────────────────────────────────────────
// CORE BRAND & GROUP ROUTES
// ─────────────────────────────────────────────────────────────────────────────
const coreRoutes = [
  {
    path: '',
    title: 'TheKumbhCottages | Sovereign Heritage & Sacred Infrastructure Group (Est. 2001)',
    description: 'The parent hospitality institution engineering luxury riverfront sanctuaries, turnkey tented infrastructure, and consecrated 100% Desi Ghee Annakshetra across Nashik, Ujjain, Haridwar, and Prayagraj.',
    h1: 'Twenty-Five Years of Sovereign Pilgrimage Hospitality',
    canonical: 'https://thekumbhcottages.com',
    priority: '1.0',
    type: 'website',
    content: `
      <section style="max-width:1000px; margin:0 auto; padding:1.5rem 0;">
        <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.2em; color:#b45309; font-weight:600;">
          Established 2001 · Sovereign Sacred Infrastructure &amp; Pilgrimage Hospitality
        </div>
        <h1 style="font-size:32px; line-height:1.25; color:#1c1917; margin:0.75rem 0;">
          Twenty-Five Years of Sovereign Pilgrimage Hospitality Across India’s Maha Kumbh Dhams
        </h1>
        <p style="font-size:16px; line-height:1.7; color:#44403c;">
          The Kumbh Cottages is the pioneering parent hospitality group engineering turnkey luxury riverfront campuses, 100% pure A2 desi ghee Annakshetra dining, step-free elder mobility boardwalks, and consecrated spiritual sanctuaries across Nashik (Godavari River), Ujjain (Shipra River), Haridwar (Maa Ganga), and our founding heritage base in Prayagraj (Triveni Sangam).
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:1.5rem; margin:2rem 0;">
          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <h2 style="font-size:18px; color:#1c1917; margin-bottom:0.75rem;">Chapter 01 · 25-Year Lineage &amp; Provenance (Est. 2001)</h2>
            <p style="font-size:13px; color:#57534e; line-height:1.7;">
              Founded on the sacred floodplain sands of Triveni Sangam during the 2001 Prayagraj Maha Kumbh, The Kumbh Cottages was conceived to solve a fundamental spiritual dilemma: pilgrimage should elevate the soul, never exhaust or endanger the body. Over a quarter century, our engineers have perfected temporary flood-plain civil townships, insulating hundreds of thousands of multi-generational families, acharyas, and dignitaries.
            </p>
            <a href="/heritage-since-2001" style="font-size:12px; color:#b45309; font-weight:600; text-decoration:none;">Explore Our 25-Year Heritage →</a>
          </div>

          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <h2 style="font-size:18px; color:#1c1917; margin-bottom:0.75rem;">Chapter 02 · Sacred Portfolios &amp; Active Destinations</h2>
            <ul style="font-size:13px; color:#57534e; line-height:1.7; padding-left:1.25rem;">
              <li><strong>Nashik Simhastha 2027 (Godavari River):</strong> Flagship 28-Acre Sanctuary, VIP corridor to Ramkund. Dedicated portal: <a href="https://kumbhcottagesnashik.com" style="color:#b45309; font-weight:600;">kumbhcottagesnashik.com</a></li>
              <li><strong>Ujjain Simhastha Campus (Shipra River):</strong> Consecrated riverfront campus near Ram Ghat and Mahakaleshwar Jyotirlinga.</li>
              <li><strong>Haridwar Ganga Retreat (Maa Ganga):</strong> Gangadwara sanctuary near Har Ki Pauri and Brahma Kund.</li>
              <li><strong>Prayagraj Foundation Base (Triveni Sangam):</strong> Continuous sacred seva and luxury Swiss cottage operations since 2001.</li>
            </ul>
            <a href="/destinations" style="font-size:12px; color:#b45309; font-weight:600; text-decoration:none;">View Cottage Portfolios →</a>
          </div>

          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <h2 style="font-size:18px; color:#1c1917; margin-bottom:0.75rem;">Chapter 03 · Engineering Mastery &amp; Turnkey Capabilities</h2>
            <p style="font-size:13px; color:#57534e; line-height:1.7;">
              Turnkey flood-plain civil townships, modular climate-proof Swiss villas, underground electrical distribution grids, 100% pure Gir cow A2 bilona desi ghee Annakshetra dining (zero onion, zero garlic), 2.5+ km step-free elevated timber boardwalks for elders, and zero river runoff bio-digester sanitation.
            </p>
            <a href="/capabilities-infrastructure" style="font-size:12px; color:#b45309; font-weight:600; text-decoration:none;">Explore Turnkey Capabilities →</a>
          </div>

          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <h2 style="font-size:18px; color:#1c1917; margin-bottom:0.75rem;">Chapter 04 · Universal Kumbh Directory &amp; Almanac</h2>
            <p style="font-size:13px; color:#57534e; line-height:1.7;">
              The definitive astrological, historical, and ritual encyclopedia of the four sacred Kumbh Melas: planetary confluences of Jupiter and Sun, the 13 monastic Akharas of Adi Shankaracharya, royal Shahi Snan dates, and the spiritual science of the holy dip.
            </p>
            <a href="/kumbh-directory" style="font-size:12px; color:#b45309; font-weight:600; text-decoration:none;">Access Kumbh Directory →</a>
          </div>
        </div>

        <!-- Master FAQ Accordion Pre-rendered for Search Bot Parsing -->
        <section aria-label="Frequently Asked Questions" style="background:#f9f8f6; padding:1.75rem; border-radius:8px; border:1px solid #e7e5e4; margin-top:2.5rem;">
          <h2 style="font-size:22px; color:#1c1917; margin-bottom:1.5rem;">Frequently Asked Questions About Kumbh Mela &amp; The Kumbh Cottages</h2>
          <div style="display:flex; flex-direction:column; gap:1.25rem;">
            ${MASTER_KUMBH_FAQS.slice(0, 10).map(faq => `
              <div style="border-bottom:1px solid #e7e5e4; padding-bottom:1rem;">
                <h3 style="font-size:15px; color:#1c1917; margin-bottom:0.5rem;">${escapeHtml(faq.q)}</h3>
                <p style="font-size:13px; color:#57534e; line-height:1.6;">${escapeHtml(faq.a)}</p>
              </div>
            `).join('\n')}
          </div>
        </section>
      </section>
    `
  },
  {
    path: 'destinations',
    title: 'Destinations & Cottage Portfolios | TheKumbhCottages (Est. 2001)',
    description: 'Explore our sovereign cottage campuses across Nashik (kumbhcottagesnashik.com), Ujjain, Haridwar, and our founding base in Prayagraj.',
    h1: 'Our Cottage Portfolios & Destination Portals',
    canonical: 'https://thekumbhcottages.com/destinations',
    priority: '0.95',
    type: 'website',
    content: `
      <section style="max-width:1000px; margin:0 auto; padding:1.5rem 0;">
        <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.2em; color:#b45309; font-weight:600;">
          Sacred Circuits &amp; Riverfront Sanctuaries
        </div>
        <h1 style="font-size:30px; line-height:1.3; color:#1c1917; margin:0.75rem 0;">
          Our Sovereign Cottage Portfolios &amp; Destination Campuses
        </h1>
        <p style="font-size:15px; line-height:1.7; color:#44403c;">
          Across the four sacred riverbanks of Sanatan Dharma, The Kumbh Cottages operates specialized, fully-insulated tented sanctuaries designed for acharyas, family offices, and dignitaries.
        </p>

        <div style="display:flex; flex-direction:column; gap:2rem; margin:2.5rem 0;">
          ${DESTINATIONS_PORTFOLIO.map(dest => `
            <article style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.75rem;">
              <span style="font-size:10px; text-transform:uppercase; color:#b45309; font-weight:600; background:#fef3c7; padding:0.25rem 0.5rem; border-radius:4px;">${escapeHtml(dest.badge)}</span>
              <h2 style="font-size:22px; color:#1c1917; margin:0.75rem 0 0.25rem;">${escapeHtml(dest.name)}</h2>
              <div style="font-size:12px; color:#78716c; margin-bottom:1rem;">${escapeHtml(dest.city)}, ${escapeHtml(dest.state)} · ${escapeHtml(dest.river)}</div>
              <p style="font-size:14px; color:#44403c; line-height:1.7;">${escapeHtml(dest.details)}</p>
              
              <h4 style="font-size:13px; text-transform:uppercase; color:#78350f; margin:1rem 0 0.5rem;">Campus Highlights:</h4>
              <ul style="font-size:13px; color:#57534e; line-height:1.7; padding-left:1.25rem;">
                ${dest.highlights.map(h => `<li>✦ ${escapeHtml(h)}</li>`).join('\n')}
              </ul>

              <div style="margin-top:1.25rem; display:flex; flex-wrap:wrap; gap:0.75rem; align-items:center;">
                ${dest.isExternal ? `
                  <a href="${dest.website}" target="_blank" rel="noopener noreferrer" style="background:#d97706; color:#ffffff; padding:0.5rem 1rem; border-radius:4px; text-decoration:none; font-size:12px; font-weight:600;">Open ${dest.websiteDisplay} Portal ↗</a>
                ` : `
                  <a href="/corporate-contact" style="background:#d97706; color:#ffffff; padding:0.5rem 1rem; border-radius:4px; text-decoration:none; font-size:12px; font-weight:600;">Request Campus Dossier →</a>
                `}
                <a href="${dest.id === 'nashik' ? '/kumbh-directory/nashik-simhastha-kumbh' : dest.id === 'ujjain' ? '/kumbh-directory/ujjain-simhastha-kumbh' : dest.id === 'haridwar' ? '/kumbh-directory/haridwar-maha-kumbh' : '/kumbh-directory/prayagraj-maha-kumbh'}" style="color:#b45309; font-size:12px; font-weight:600; text-decoration:none;">Explore ${dest.city} Kumbh Almanac →</a>
                <a href="${dest.id === 'nashik' ? '/guides/nashik-complete-pilgrimage-and-tourism-travel-guide' : dest.id === 'ujjain' ? '/guides/mahakaleshwar-ujjain-jyotirlinga-bhasma-aarti-simhastha-guide' : dest.id === 'haridwar' ? '/guides/haridwar-rishikesh-complete-pilgrimage-travel-guide' : '/guides/prayagraj-allahabad-complete-pilgrimage-travel-guide'}" style="color:#78716c; font-size:12px; text-decoration:none;">${dest.city} City Travel Manual →</a>
              </div>
            </article>
          `).join('\n')}
        </div>
      </section>
    `
  },
  {
    path: 'capabilities-infrastructure',
    title: 'Turnkey Infrastructure & Annakshetra Capabilities | TheKumbhCottages',
    description: 'Learn how TheKumbhCottages engineers 5-star temporary flood-plain townships, 100% Desi Ghee Annakshetra dining, and step-free elder mobility across sacred riverbanks.',
    h1: 'Turnkey Infrastructure & Hospitality Capabilities',
    canonical: 'https://thekumbhcottages.com/capabilities-infrastructure',
    priority: '0.9',
    type: 'website',
    content: `
      <section style="max-width:1000px; margin:0 auto; padding:1.5rem 0;">
        <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.2em; color:#b45309; font-weight:600;">
          Proprietary Civil Engineering &amp; Sacred Seva Infrastructure
        </div>
        <h1 style="font-size:30px; line-height:1.3; color:#1c1917; margin:0.75rem 0;">
          Turnkey Floodplain Infrastructure &amp; Pure Annakshetra Capabilities
        </h1>
        <p style="font-size:15px; line-height:1.7; color:#44403c;">
          Since 2001, The Kumbh Cottages has engineered temporary self-contained luxury civil townships directly on unstable river floodplains, providing dignity, security, and pure nourishment for millions.
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem; margin:2.5rem 0;">
          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <h2 style="font-size:17px; color:#1c1917; margin-bottom:0.75rem;">1. Modular Weather-Proof Swiss Villas</h2>
            <p style="font-size:13px; color:#57534e; line-height:1.7;">
              Triple-layer thermal canvas construction resistant to 60 km/h river squalls, extreme temperature fluctuations (4°C night to 35°C daytime), equipped with soundproofing, solid teak timber flooring, and ceramic-fitted private bathrooms.
            </p>
            <a href="/guides/kumbh-mela-accommodation-guide-luxury-tents-vs-hotels" style="font-size:12px; color:#b45309; font-weight:600; text-decoration:none;">Read Tents vs Hotels Guide →</a>
          </div>

          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <h2 style="font-size:17px; color:#1c1917; margin-bottom:0.75rem;">2. 100% Gir Cow A2 Desi Ghee Annakshetra</h2>
            <p style="font-size:13px; color:#57534e; line-height:1.7;">
              Strict Vedic Annakshetra adhering to ancient Ayurvedic principles: cooked exclusively in authentic bilona A2 cow ghee, copper-filtered water, rock salt, zero onion, zero garlic, compliant with Jain Chauvihar, Ekadashi, and Kalpavas vows.
            </p>
            <a href="/guides/pure-sattvic-ayurvedic-dining-guide" style="font-size:12px; color:#b45309; font-weight:600; text-decoration:none;">Read Pure Sattvic Dining Guide →</a>
          </div>

          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <h2 style="font-size:17px; color:#1c1917; margin-bottom:0.75rem;">3. Step-Free Elder Mobility Boardwalks</h2>
            <p style="font-size:13px; color:#57534e; line-height:1.7;">
              Over 2.5 km of elevated interlocking timber walkways engineered to allow wheelchair and battery-operated golf cart access from cottage suites directly to the consecrated bathing ghats without navigating treacherous shifting sand dunes.
            </p>
            <a href="/guides/multi-generational-family-elder-pilgrimage-guide" style="font-size:12px; color:#b45309; font-weight:600; text-decoration:none;">Read Elder Mobility Guide →</a>
          </div>

          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <h2 style="font-size:17px; color:#1c1917; margin-bottom:0.75rem;">4. Zero-Discharge Environmental Bio-Sanitation</h2>
            <p style="font-size:13px; color:#57534e; line-height:1.7;">
              Self-contained aerobic and anaerobic bio-digester treatment systems with zero effluent discharge into sacred rivers (Ganga, Godavari, Shipra, Yamuna), complete solid waste composting, and 100% biodegradable pilgrim amenities.
            </p>
            <a href="/guides/kumbh-mela-eco-sustainability-green-pilgrimage-guide" style="font-size:12px; color:#b45309; font-weight:600; text-decoration:none;">Read Green Pilgrimage Guide →</a>
          </div>
        </div>
      </section>
    `
  },
  {
    path: 'heritage-since-2001',
    title: '25 Years of Sacred Heritage (2001–2027) | TheKumbhCottages',
    description: 'The 25-year journey of TheKumbhCottages. From 20 Swiss cottages in Prayagraj (2001) to sovereign luxury villages across Nashik, Ujjain, and Haridwar.',
    h1: 'Our 25-Year Operating Lineage',
    canonical: 'https://thekumbhcottages.com/heritage-since-2001',
    priority: '0.85',
    type: 'website',
    content: `
      <section style="max-width:1000px; margin:0 auto; padding:1.5rem 0;">
        <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.2em; color:#b45309; font-weight:600;">
          Consecrated Hospitality Lineage · Est. 2001 Prayagraj
        </div>
        <h1 style="font-size:30px; line-height:1.3; color:#1c1917; margin:0.75rem 0;">
          Our 25-Year Chronological Pilgrimage Lineage (2001–2027)
        </h1>
        <p style="font-size:15px; line-height:1.7; color:#44403c;">
          A quarter century of uninterrupted sacred seva, engineering milestones, and institutional trust across India's greatest Sanatan congregations.
        </p>

        <div style="display:flex; flex-direction:column; gap:1.5rem; margin:2.5rem 0;">
          <div style="background:#ffffff; border-left:4px solid #d97706; border:1px solid #e7e5e4; border-left-width:4px; border-radius:8px; padding:1.25rem;">
            <div style="font-size:11px; font-weight:700; color:#b45309;">2001 · Prayagraj Maha Kumbh Mela</div>
            <h3 style="font-size:16px; color:#1c1917; margin:0.25rem 0;">The Genesis on Sangam Sands</h3>
            <p style="font-size:13px; color:#57534e; line-height:1.6;">Founded with 20 Swiss cottages at Triveni Sangam, providing the first insulated sanctuary for visiting acharyas, family offices, and foreign scholars.</p>
          </div>

          <div style="background:#ffffff; border-left:4px solid #d97706; border:1px solid #e7e5e4; border-left-width:4px; border-radius:8px; padding:1.25rem;">
            <div style="font-size:11px; font-weight:700; color:#b45309;">2003 · Nashik-Trimbakeshwar Simhastha</div>
            <h3 style="font-size:16px; color:#1c1917; margin:0.25rem 0;">Expansion to Dakshin Ganga Godavari</h3>
            <p style="font-size:13px; color:#57534e; line-height:1.6;">Established sacred camps near Ramkund and Kushavarta, pioneering VIP green corridor transits for Shaiva and Vaishnava royal processions.</p>
          </div>

          <div style="background:#ffffff; border-left:4px solid #d97706; border:1px solid #e7e5e4; border-left-width:4px; border-radius:8px; padding:1.25rem;">
            <div style="font-size:11px; font-weight:700; color:#b45309;">2004 · Ujjain Simhastha Kumbh Mela</div>
            <h3 style="font-size:16px; color:#1c1917; margin:0.25rem 0;">Consecration Along Shipra River</h3>
            <p style="font-size:13px; color:#57534e; line-height:1.6;">Operations near Ram Ghat and Mahakaleshwar Jyotirlinga, introducing specialized Jain Chauvihar sattvic dining and Bhasma Aarti liaisons.</p>
          </div>

          <div style="background:#ffffff; border-left:4px solid #d97706; border:1px solid #e7e5e4; border-left-width:4px; border-radius:8px; padding:1.25rem;">
            <div style="font-size:11px; font-weight:700; color:#b45309;">2010 · Haridwar Maha Kumbh Mela</div>
            <h3 style="font-size:16px; color:#1c1917; margin:0.25rem 0;">Himalayan Gateway at Gangadwara</h3>
            <p style="font-size:13px; color:#57534e; line-height:1.6;">Riverfront sanctuary on Maa Ganga near Har Ki Pauri Brahma Kund, introducing multi-tiered thermal insulation for sub-zero night temperatures.</p>
          </div>

          <div style="background:#ffffff; border-left:4px solid #d97706; border:1px solid #e7e5e4; border-left-width:4px; border-radius:8px; padding:1.25rem;">
            <div style="font-size:11px; font-weight:700; color:#b45309;">2013 &amp; 2019 · Prayagraj Maha Kumbh &amp; Ardh Kumbh</div>
            <h3 style="font-size:16px; color:#1c1917; margin:0.25rem 0;">Scale Mastery &amp; Smart Camp Engineering</h3>
            <p style="font-size:13px; color:#57534e; line-height:1.6;">Scaled to 250+ luxury Swiss villas, deployed bio-digester environmental sanitation, and accommodated supreme court jurists, industrial leaders, and over 50,000 pilgrims.</p>
          </div>

          <div style="background:#ffffff; border-left:4px solid #d97706; border:1px solid #e7e5e4; border-left-width:4px; border-radius:8px; padding:1.25rem;">
            <div style="font-size:11px; font-weight:700; color:#b45309;">2025 · Prayagraj Maha Kumbh</div>
            <h3 style="font-size:16px; color:#1c1917; margin:0.25rem 0;">The 400-Million Pilgrim Benchmark</h3>
            <p style="font-size:13px; color:#57534e; line-height:1.6;">Executed zero-incident luxury operations during the historic 2025 gathering, providing seamless Kalpavas suites and consecrated Annakshetra seva.</p>
          </div>

          <div style="background:#ffffff; border-left:4px solid #d97706; border:1px solid #e7e5e4; border-left-width:4px; border-radius:8px; padding:1.25rem;">
            <div style="font-size:11px; font-weight:700; color:#b45309;">2027 · Nashik-Trimbakeshwar Simhastha Flagship</div>
            <h3 style="font-size:16px; color:#1c1917; margin:0.25rem 0;">The 28-Acre Riverfront Sanctuary</h3>
            <p style="font-size:13px; color:#57534e; line-height:1.6;">Our preeminent sovereign development for the upcoming August-September 2027 Simhastha along River Godavari. Active Portal: <a href="https://kumbhcottagesnashik.com" style="color:#b45309; font-weight:600;">kumbhcottagesnashik.com</a></p>
          </div>
        </div>
      </section>
    `
  },
  {
    path: 'corporate-contact',
    title: 'Corporate Directorate & Central Liaison | TheKumbhCottages (Est. 2001)',
    description: 'Connect with TheKumbhCottages Parent Executive Directorate for corporate camp allotments, acharya ashram setups, and institutional partnerships.',
    h1: 'Corporate Directorate & Central Liaison',
    canonical: 'https://thekumbhcottages.com/corporate-contact',
    priority: '0.85',
    type: 'website',
    content: `
      <section style="max-width:1000px; margin:0 auto; padding:1.5rem 0;">
        <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.2em; color:#b45309; font-weight:600;">
          Executive Governance &amp; Central Coordination Desk
        </div>
        <h1 style="font-size:30px; line-height:1.3; color:#1c1917; margin:0.75rem 0;">
          Corporate Directorate &amp; Central Institutional Liaison
        </h1>
        <p style="font-size:15px; line-height:1.7; color:#44403c;">
          The executive council of The Kumbh Cottages coordinates institutional retreats, acharya ashram construction, CSR Annadaan partnerships, and high-security dignitary protocols across all four sacred circuits.
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:1.5rem; margin:2.5rem 0;">
          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <h3 style="font-size:16px; color:#1c1917; margin-bottom:0.75rem;">Central Liaison Directorate</h3>
            <p style="font-size:13px; color:#57534e; line-height:1.8;">
              <strong>National Coordination Office:</strong> Connaught Place, New Delhi, India<br/>
              <strong>Field Directorate:</strong> Riverfront Sanctuary Directorate, Nashik &amp; Prayagraj<br/>
              <strong>Direct Helpline:</strong> <a href="tel:+919889933333" style="color:#b45309; font-weight:600;">+91 98899 33333</a><br/>
              <strong>Central Email:</strong> <a href="mailto:kumbhcottages@gmail.com" style="color:#b45309;">kumbhcottages@gmail.com</a><br/>
              <strong>Google Business:</strong> <a href="https://share.google/cmaiQgwb1FsV2jdfj" target="_blank" rel="noopener noreferrer" style="color:#b45309;">Verified Google Listing ↗</a>
            </p>
          </div>

          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <h3 style="font-size:16px; color:#1c1917; margin-bottom:0.75rem;">Institutional Allotment Mandates</h3>
            <ul style="font-size:13px; color:#57534e; line-height:1.8; padding-left:1.25rem;">
              <li><strong>Entire Camp Corporate Buyouts:</strong> Private secured perimeter villages for leadership conclaves.</li>
              <li><strong>Acharya &amp; Matha Ashram Setups:</strong> Consecrated enclosures with yajnashalas and private snan corridors.</li>
              <li><strong>CSR Annadaan Partnerships:</strong> Mass feeding sponsorship through our 100% pure A2 desi ghee Annakshetra.</li>
              <li><strong>VIP Protocol Green Corridors:</strong> State guest facilitation with step-free elder transit.</li>
            </ul>
          </div>
        </div>
      </section>
    `
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// KUMBH DIRECTORY ROUTES (6 SPECIALIZED ENCYCLOPEDIC PAGES + HUB)
// ─────────────────────────────────────────────────────────────────────────────
const directoryRoutes = [
  {
    path: 'kumbh-directory',
    title: 'Complete Kumbh Mela Directory & Universal Almanac | TheKumbhCottages',
    description: 'The master encyclopedia and directory of all four sacred Kumbh Melas: Prayagraj, Nashik Simhastha, Haridwar, and Ujjain. Astrological alignments, 13 Akharas, and sacred snan dates.',
    h1: 'The Complete Encyclopedia of Sacred Kumbh Melas',
    canonical: 'https://thekumbhcottages.com/kumbh-directory',
    priority: '0.95',
    type: 'website',
    content: `
      <section style="max-width:1000px; margin:0 auto; padding:1.5rem 0;">
        <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.2em; color:#b45309; font-weight:600;">
          Universal Sanatan Almanac &amp; Master Directory
        </div>
        <h1 style="font-size:30px; line-height:1.3; color:#1c1917; margin:0.75rem 0;">
          The Complete Encyclopedia of Sacred Kumbh Melas
        </h1>
        <p style="font-size:15px; line-height:1.7; color:#44403c;">
          The definitive historical, astronomical, and ritual directory of the world’s largest gathering of humanity. Explore the four consecrated riverfronts, ancient planetary confluences, monastic akharas, and royal Shahi Snan science.
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:1.5rem; margin:2.5rem 0;">
          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <span style="font-size:10px; text-transform:uppercase; color:#b45309; font-weight:600;">Tirtharaj · Confluence</span>
            <h2 style="font-size:18px; color:#1c1917; margin:0.5rem 0;">Prayagraj Maha Kumbh Mela</h2>
            <p style="font-size:13px; color:#57534e; line-height:1.6;">${KUMBH_FOUR_DHAMS_DIRECTORY.prayagraj.historicalSignificance.slice(0, 160)}...</p>
            <div style="margin-top:1rem;"><a href="/kumbh-directory/prayagraj-maha-kumbh" style="font-size:12px; color:#b45309; font-weight:600; text-decoration:none;">Explore Prayagraj Directory →</a></div>
          </div>

          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <span style="font-size:10px; text-transform:uppercase; color:#b45309; font-weight:600;">Simhastha 2027 · Godavari</span>
            <h2 style="font-size:18px; color:#1c1917; margin:0.5rem 0;">Nashik-Trimbakeshwar Simhastha</h2>
            <p style="font-size:13px; color:#57534e; line-height:1.6;">${KUMBH_FOUR_DHAMS_DIRECTORY.nashik.historicalSignificance.slice(0, 160)}...</p>
            <div style="margin-top:1rem;"><a href="/kumbh-directory/nashik-simhastha-kumbh" style="font-size:12px; color:#b45309; font-weight:600; text-decoration:none;">Explore Nashik Directory →</a></div>
          </div>

          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <span style="font-size:10px; text-transform:uppercase; color:#b45309; font-weight:600;">Gangadwara · Foothills</span>
            <h2 style="font-size:18px; color:#1c1917; margin:0.5rem 0;">Haridwar Maha Kumbh Mela</h2>
            <p style="font-size:13px; color:#57534e; line-height:1.6;">${KUMBH_FOUR_DHAMS_DIRECTORY.haridwar.historicalSignificance.slice(0, 160)}...</p>
            <div style="margin-top:1rem;"><a href="/kumbh-directory/haridwar-maha-kumbh" style="font-size:12px; color:#b45309; font-weight:600; text-decoration:none;">Explore Haridwar Directory →</a></div>
          </div>

          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <span style="font-size:10px; text-transform:uppercase; color:#b45309; font-weight:600;">Avantika Puri · Shipra</span>
            <h2 style="font-size:18px; color:#1c1917; margin:0.5rem 0;">Ujjain Simhastha Kumbh Mela</h2>
            <p style="font-size:13px; color:#57534e; line-height:1.6;">${KUMBH_FOUR_DHAMS_DIRECTORY.ujjain.historicalSignificance.slice(0, 160)}...</p>
            <div style="margin-top:1rem;"><a href="/kumbh-directory/ujjain-simhastha-kumbh" style="font-size:12px; color:#b45309; font-weight:600; text-decoration:none;">Explore Ujjain Directory →</a></div>
          </div>

          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <span style="font-size:10px; text-transform:uppercase; color:#b45309; font-weight:600;">Monastic Lineages</span>
            <h2 style="font-size:18px; color:#1c1917; margin:0.5rem 0;">The 13 Sacred Akharas</h2>
            <p style="font-size:13px; color:#57534e; line-height:1.6;">The monastic defense of Sanatan Dharma organized by Adi Shankaracharya: Shaiva, Vaishnava, and Udasin orders.</p>
            <div style="margin-top:1rem;"><a href="/kumbh-directory/akharas-and-traditions" style="font-size:12px; color:#b45309; font-weight:600; text-decoration:none;">View Akharas Directory →</a></div>
          </div>

          <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
            <span style="font-size:10px; text-transform:uppercase; color:#b45309; font-weight:600;">Vedic Science</span>
            <h2 style="font-size:18px; color:#1c1917; margin:0.5rem 0;">Shahi Snan Rituals Guide</h2>
            <p style="font-size:13px; color:#57534e; line-height:1.6;">Step-by-step Vedic snan procedure, Kalpavas discipline, sunrise meditation hours, and sacred bathing protocols.</p>
            <div style="margin-top:1rem;"><a href="/kumbh-directory/shahi-snan-rituals-guide" style="font-size:12px; color:#b45309; font-weight:600; text-decoration:none;">Read Snan Science Guide →</a></div>
          </div>
        </div>

        <section aria-label="Frequently Asked Questions" style="background:#f9f8f6; padding:1.75rem; border-radius:8px; border:1px solid #e7e5e4; margin-top:2.5rem;">
          <h2 style="font-size:22px; color:#1c1917; margin-bottom:1.5rem;">Frequently Asked Questions on Kumbh Mela Traditions</h2>
          <div style="display:flex; flex-direction:column; gap:1.25rem;">
            ${KUMBH_SEO_FAQS.map(faq => `
              <div style="border-bottom:1px solid #e7e5e4; padding-bottom:1rem;">
                <h3 style="font-size:15px; color:#1c1917; margin-bottom:0.5rem;">${escapeHtml(faq.q)}</h3>
                <p style="font-size:13px; color:#57534e; line-height:1.6;">${escapeHtml(faq.a)}</p>
              </div>
            `).join('\n')}
          </div>
        </section>
      </section>
    `
  },
  {
    path: 'kumbh-directory/prayagraj-maha-kumbh',
    title: 'Prayagraj Maha Kumbh Mela Complete Guide & Directory | TheKumbhCottages',
    description: 'Comprehensive guide to Prayagraj Maha Kumbh at Triveni Sangam. History, astronomical alignment of Jupiter & Sun in Capricorn, major bathing dates, and nearby sacred temples.',
    h1: 'Prayagraj Maha Kumbh Mela Complete Directory & Almanac',
    canonical: 'https://thekumbhcottages.com/kumbh-directory/prayagraj-maha-kumbh',
    priority: '0.95',
    type: 'website',
    content: `
      <article style="max-width:900px; margin:0 auto; padding:1.5rem 0;">
        <nav aria-label="Breadcrumb" style="font-size:11px; color:#78716c; margin-bottom:1rem;">
          <a href="/" style="color:#78716c; text-decoration:none;">Home</a> » <a href="/kumbh-directory" style="color:#78716c; text-decoration:none;">Kumbh Directory</a> » <span>Prayagraj Maha Kumbh</span>
        </nav>
        <span style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#b45309; font-weight:600;">Tirtharaj Prayag · Triveni Sangam</span>
        <h1 style="font-size:30px; line-height:1.3; color:#1c1917; margin:0.5rem 0;">Prayagraj Maha Kumbh Mela Complete Directory &amp; Almanac</h1>
        <p style="font-size:15px; color:#44403c; line-height:1.7;">
          Venerated across Vedic literature as Tirtharaj (the King of all Pilgrimages), Prayagraj is the sacred crucible where the holy rivers Ganga, Yamuna, and the subterranean Saraswati unite at Triveni Sangam.
        </p>

        <section style="margin:2rem 0; background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
          <h2 style="font-size:20px; color:#1c1917; margin-bottom:1rem;">Astronomical Alignment &amp; Spiritual Science</h2>
          <p style="font-size:14px; color:#57534e; line-height:1.7;">
            <strong>Planetary Sign:</strong> ${KUMBH_FOUR_DHAMS_DIRECTORY.prayagraj.astronomicalAlignment}
          </p>
          <p style="font-size:14px; color:#57534e; line-height:1.7; margin-top:0.75rem;">
            <strong>Spiritual Significance:</strong> ${KUMBH_FOUR_DHAMS_DIRECTORY.prayagraj.spiritualSignificance}
          </p>
          <p style="font-size:14px; color:#57534e; line-height:1.7; margin-top:0.75rem;">
            <strong>Historical Provenance:</strong> ${KUMBH_FOUR_DHAMS_DIRECTORY.prayagraj.historicalSignificance}
          </p>
        </section>

        <section style="margin:2rem 0;">
          <h2 style="font-size:20px; color:#1c1917; margin-bottom:1rem;">Major Consecrated Snan Muhurtas</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1rem;">
            ${KUMBH_FOUR_DHAMS_DIRECTORY.prayagraj.majorSnanDates.map(snan => `
              <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:6px; padding:1rem;">
                <strong style="color:#1c1917; font-size:14px; display:block;">${escapeHtml(snan.name)}</strong>
                <span style="font-size:12px; color:#78716c; line-height:1.5; display:block; margin-top:0.25rem;">${escapeHtml(snan.description)}</span>
              </div>
            `).join('\n')}
          </div>
        </section>

        <section style="margin:2rem 0;">
          <h2 style="font-size:20px; color:#1c1917; margin-bottom:1rem;">Nearby Consecrated Pilgrimage Temples</h2>
          <ul style="font-size:14px; color:#44403c; line-height:1.8; padding-left:1.25rem;">
            ${KUMBH_FOUR_DHAMS_DIRECTORY.prayagraj.nearbySacredSites.map(site => `<li><strong>✦ ${escapeHtml(site)}</strong></li>`).join('\n')}
          </ul>
        </section>

        <section style="background:#fefce8; border:1px solid #fef08a; border-radius:8px; padding:1.5rem; margin:2rem 0;">
          <h3 style="font-size:16px; color:#854d0e; margin-bottom:0.75rem;">Authoritative Manuals for Prayagraj Pilgrims:</h3>
          <ul style="font-size:13px; color:#713f12; line-height:1.8; padding-left:1.25rem;">
            <li><a href="/guides/prayagraj-allahabad-complete-pilgrimage-travel-guide" style="color:#854d0e; font-weight:600;">Prayagraj Complete Pilgrimage &amp; Travel Guide (Triveni Sangam boats &amp; Lete Hanuman Ji)</a></li>
            <li><a href="/guides/kalpavas-discipline-spiritual-science-of-riverside-living" style="color:#854d0e; font-weight:600;">The Sacred Vow of Kalpavas: 30 Days of Tapasya on Sangam Sands</a></li>
            <li><a href="/guides/kumbh-mela-accommodation-guide-luxury-tents-vs-hotels" style="color:#854d0e; font-weight:600;">Cottages vs City Hotels Accommodation Guide in Prayagraj</a></li>
          </ul>
        </section>
      </article>
    `
  },
  {
    path: 'kumbh-directory/nashik-simhastha-kumbh',
    title: 'Nashik-Trimbakeshwar Simhastha 2027 Complete Guide & Directory | TheKumbhCottages',
    description: 'Official encyclopedia of Nashik Simhastha Kumbh Mela 2027. Ramkund holy snan, Trimbakeshwar Jyotirlinga, Jupiter in Leo astrological alignment, and luxury cottage sanctuaries.',
    h1: 'Nashik-Trimbakeshwar Simhastha Kumbh 2027 Complete Guide',
    canonical: 'https://thekumbhcottages.com/kumbh-directory/nashik-simhastha-kumbh',
    priority: '0.95',
    type: 'website',
    content: `
      <article style="max-width:900px; margin:0 auto; padding:1.5rem 0;">
        <nav aria-label="Breadcrumb" style="font-size:11px; color:#78716c; margin-bottom:1rem;">
          <a href="/" style="color:#78716c; text-decoration:none;">Home</a> » <a href="/kumbh-directory" style="color:#78716c; text-decoration:none;">Kumbh Directory</a> » <span>Nashik Simhastha 2027</span>
        </nav>
        <span style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#b45309; font-weight:600;">Simhastha Kumbh 2027 · Dakshin Ganga Godavari</span>
        <h1 style="font-size:30px; line-height:1.3; color:#1c1917; margin:0.5rem 0;">Nashik-Trimbakeshwar Simhastha Kumbh 2027 Complete Guide &amp; Directory</h1>
        <p style="font-size:15px; color:#44403c; line-height:1.7;">
          Celebrated once every twelve years when Jupiter (Brihaspati) and Sun (Surya) simultaneously enter the zodiac sign of Leo (Simha Rashi), uniting the holy bathing waters of Ramkund in Nashik with the divine source of River Godavari at Trimbakeshwar Jyotirlinga.
        </p>

        <div style="background:#1c1917; color:#ffffff; padding:1.5rem; border-radius:8px; border:1px solid #d97706; margin:2rem 0;">
          <span style="font-size:10px; text-transform:uppercase; color:#fbbf24; font-weight:600;">Active Flagship Destination Portal</span>
          <h2 style="font-size:20px; color:#ffffff; margin:0.5rem 0;">The Kumbh Cottages Nashik Simhastha 2027 Flagship</h2>
          <p style="font-size:13px; color:#d6d3d1; line-height:1.6;">
            Our premier 28-acre sovereign sanctuary set on the banks of Godavari, offering Presidential Villas, 100% Desi Ghee Annakshetra dining, and a 1.8 km direct VIP Green Corridor to Ramkund.
          </p>
          <div style="margin-top:1rem;">
            <a href="https://kumbhcottagesnashik.com" target="_blank" rel="noopener noreferrer" style="background:#d97706; color:#ffffff; padding:0.5rem 1rem; border-radius:4px; text-decoration:none; font-size:12px; font-weight:600;">Visit Dedicated Nashik Portal (kumbhcottagesnashik.com) ↗</a>
          </div>
        </div>

        <section style="margin:2rem 0; background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
          <h2 style="font-size:20px; color:#1c1917; margin-bottom:1rem;">Astrological Alignment &amp; Scriptural Heritage</h2>
          <p style="font-size:14px; color:#57534e; line-height:1.7;">
            <strong>Planetary Alignment:</strong> ${KUMBH_FOUR_DHAMS_DIRECTORY.nashik.astronomicalAlignment}
          </p>
          <p style="font-size:14px; color:#57534e; line-height:1.7; margin-top:0.75rem;">
            <strong>Sacred Cycle:</strong> ${KUMBH_FOUR_DHAMS_DIRECTORY.nashik.nextCycle}
          </p>
          <p style="font-size:14px; color:#57534e; line-height:1.7; margin-top:0.75rem;">
            <strong>Historical Significance:</strong> ${KUMBH_FOUR_DHAMS_DIRECTORY.nashik.historicalSignificance}
          </p>
        </section>

        <section style="margin:2rem 0;">
          <h2 style="font-size:20px; color:#1c1917; margin-bottom:1rem;">Major Consecrated Simhastha 2027 Snan Dates</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1rem;">
            ${KUMBH_FOUR_DHAMS_DIRECTORY.nashik.majorSnanDates.map(snan => `
              <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:6px; padding:1rem;">
                <strong style="color:#1c1917; font-size:14px; display:block;">${escapeHtml(snan.name)}</strong>
                <span style="font-size:12px; color:#78716c; line-height:1.5; display:block; margin-top:0.25rem;">${escapeHtml(snan.description)}</span>
              </div>
            `).join('\n')}
          </div>
        </section>

        <section style="background:#fefce8; border:1px solid #fef08a; border-radius:8px; padding:1.5rem; margin:2rem 0;">
          <h3 style="font-size:16px; color:#854d0e; margin-bottom:0.75rem;">Authoritative Nashik Simhastha Manuals:</h3>
          <ul style="font-size:13px; color:#713f12; line-height:1.8; padding-left:1.25rem;">
            <li><a href="/guides/nashik-complete-pilgrimage-and-tourism-travel-guide" style="color:#854d0e; font-weight:600;">Nashik Complete Pilgrimage &amp; Tourism Guide: Panchavati to Trimbakeshwar</a></li>
            <li><a href="/guides/godavari-river-nashik-kumbh-significance-ghats-parikrama" style="color:#854d0e; font-weight:600;">Sacred Godavari River, Ghats &amp; Parikrama Guide</a></li>
            <li><a href="/guides/panchavati-nashik-ramayana-sites-complete-pilgrimage-guide" style="color:#854d0e; font-weight:600;">Panchavati Sacred Ramayana Sites Complete Pilgrimage Guide</a></li>
            <li><a href="/guides/trimbakeshwar-jyotirlinga-temple-darshan-guide-rituals" style="color:#854d0e; font-weight:600;">Trimbakeshwar Jyotirlinga Temple Darshan &amp; Rituals Guide</a></li>
          </ul>
        </section>
      </article>
    `
  },
  {
    path: 'kumbh-directory/haridwar-maha-kumbh',
    title: 'Haridwar Maha Kumbh Mela Complete Guide & Directory | TheKumbhCottages',
    description: 'Comprehensive guide to Haridwar Maha Kumbh on Maa Ganga. Har Ki Pauri, Brahma Kund, Jupiter in Aquarius alignment, major snan dates, and Himalayan pilgrimage guidelines.',
    h1: 'Haridwar Maha Kumbh Mela Complete Directory & Guide',
    canonical: 'https://thekumbhcottages.com/kumbh-directory/haridwar-maha-kumbh',
    priority: '0.9',
    type: 'website',
    content: `
      <article style="max-width:900px; margin:0 auto; padding:1.5rem 0;">
        <nav aria-label="Breadcrumb" style="font-size:11px; color:#78716c; margin-bottom:1rem;">
          <a href="/" style="color:#78716c; text-decoration:none;">Home</a> » <a href="/kumbh-directory" style="color:#78716c; text-decoration:none;">Kumbh Directory</a> » <span>Haridwar Maha Kumbh</span>
        </nav>
        <span style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#b45309; font-weight:600;">Gangadwara · Himalayan Gateway</span>
        <h1 style="font-size:30px; line-height:1.3; color:#1c1917; margin:0.5rem 0;">Haridwar Maha Kumbh Mela Complete Directory &amp; Guide</h1>
        <p style="font-size:15px; color:#44403c; line-height:1.7;">
          Where the holy river Ganga leaves the rugged Himalayan heights and descends into the plains of northern India, blessing Brahma Kund at Har Ki Pauri where celestial nectar fell.
        </p>

        <section style="margin:2rem 0; background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
          <h2 style="font-size:20px; color:#1c1917; margin-bottom:1rem;">Astronomical Alignment &amp; Holy Ganga Science</h2>
          <p style="font-size:14px; color:#57534e; line-height:1.7;">
            <strong>Planetary Sign:</strong> ${KUMBH_FOUR_DHAMS_DIRECTORY.haridwar.astronomicalAlignment}
          </p>
          <p style="font-size:14px; color:#57534e; line-height:1.7; margin-top:0.75rem;">
            <strong>Historical Antiquity:</strong> ${KUMBH_FOUR_DHAMS_DIRECTORY.haridwar.historicalSignificance}
          </p>
        </section>

        <section style="margin:2rem 0;">
          <h2 style="font-size:20px; color:#1c1917; margin-bottom:1rem;">Major Consecrated Royal Snan Muhurtas</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1rem;">
            ${KUMBH_FOUR_DHAMS_DIRECTORY.haridwar.majorSnanDates.map(snan => `
              <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:6px; padding:1rem;">
                <strong style="color:#1c1917; font-size:14px; display:block;">${escapeHtml(snan.name)}</strong>
                <span style="font-size:12px; color:#78716c; line-height:1.5; display:block; margin-top:0.25rem;">${escapeHtml(snan.description)}</span>
              </div>
            `).join('\n')}
          </div>
        </section>

        <section style="background:#fefce8; border:1px solid #fef08a; border-radius:8px; padding:1.5rem; margin:2rem 0;">
          <h3 style="font-size:16px; color:#854d0e; margin-bottom:0.75rem;">Authoritative Himalayan Pilgrimage Manuals:</h3>
          <ul style="font-size:13px; color:#713f12; line-height:1.8; padding-left:1.25rem;">
            <li><a href="/guides/haridwar-rishikesh-complete-pilgrimage-travel-guide" style="color:#854d0e; font-weight:600;">Haridwar &amp; Rishikesh Complete Pilgrimage &amp; Travel Guide</a></li>
            <li><a href="/guides/ganga-aarti-haridwar-har-ki-pauri-timing-rituals-guide" style="color:#854d0e; font-weight:600;">Ganga Aarti at Har Ki Pauri: Timing, Rituals &amp; Seating Guide</a></li>
          </ul>
        </section>
      </article>
    `
  },
  {
    path: 'kumbh-directory/ujjain-simhastha-kumbh',
    title: 'Ujjain Simhastha Maha Kumbh Guide & Directory | TheKumbhCottages',
    description: 'Encyclopedia of Ujjain Simhastha Kumbh on the holy Shipra River. Mahakaleshwar Jyotirlinga, Ram Ghat, planetary alignment of Jupiter in Leo, and Bhasma Aarti spiritual guide.',
    h1: 'Ujjain Simhastha Maha Kumbh Directory & Spiritual Guide',
    canonical: 'https://thekumbhcottages.com/kumbh-directory/ujjain-simhastha-kumbh',
    priority: '0.9',
    type: 'website',
    content: `
      <article style="max-width:900px; margin:0 auto; padding:1.5rem 0;">
        <nav aria-label="Breadcrumb" style="font-size:11px; color:#78716c; margin-bottom:1rem;">
          <a href="/" style="color:#78716c; text-decoration:none;">Home</a> » <a href="/kumbh-directory" style="color:#78716c; text-decoration:none;">Kumbh Directory</a> » <span>Ujjain Simhastha</span>
        </nav>
        <span style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#b45309; font-weight:600;">Avantika Puri · Holy Shipra River</span>
        <h1 style="font-size:30px; line-height:1.3; color:#1c1917; margin:0.5rem 0;">Ujjain Simhastha Maha Kumbh Directory &amp; Spiritual Guide</h1>
        <p style="font-size:15px; color:#44403c; line-height:1.7;">
          Ancient Avantika, the prime meridian of Hindu astronomy and home to Lord Mahakaleshwar, the only south-facing (Dakshinmurti) Swayambhu Jyotirlinga on Earth.
        </p>

        <section style="margin:2rem 0; background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
          <h2 style="font-size:20px; color:#1c1917; margin-bottom:1rem;">Astrological Alignment &amp; Mahakal Corridor</h2>
          <p style="font-size:14px; color:#57534e; line-height:1.7;">
            <strong>Planetary Sign:</strong> ${KUMBH_FOUR_DHAMS_DIRECTORY.ujjain.astronomicalAlignment}
          </p>
          <p style="font-size:14px; color:#57534e; line-height:1.7; margin-top:0.75rem;">
            <strong>Spiritual Grace:</strong> ${KUMBH_FOUR_DHAMS_DIRECTORY.ujjain.spiritualSignificance}
          </p>
        </section>

        <section style="margin:2rem 0;">
          <h2 style="font-size:20px; color:#1c1917; margin-bottom:1rem;">Major Consecrated Simhastha Snan Muhurtas</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1rem;">
            ${KUMBH_FOUR_DHAMS_DIRECTORY.ujjain.majorSnanDates.map(snan => `
              <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:6px; padding:1rem;">
                <strong style="color:#1c1917; font-size:14px; display:block;">${escapeHtml(snan.name)}</strong>
                <span style="font-size:12px; color:#78716c; line-height:1.5; display:block; margin-top:0.25rem;">${escapeHtml(snan.description)}</span>
              </div>
            `).join('\n')}
          </div>
        </section>

        <section style="background:#fefce8; border:1px solid #fef08a; border-radius:8px; padding:1.5rem; margin:2rem 0;">
          <h3 style="font-size:16px; color:#854d0e; margin-bottom:0.75rem;">Authoritative Ujjain Pilgrimage Manuals:</h3>
          <ul style="font-size:13px; color:#713f12; line-height:1.8; padding-left:1.25rem;">
            <li><a href="/guides/mahakaleshwar-ujjain-jyotirlinga-bhasma-aarti-simhastha-guide" style="color:#854d0e; font-weight:600;">Mahakaleshwar Ujjain Jyotirlinga, Bhasma Aarti &amp; Simhastha Guide</a></li>
            <li><a href="/guides/astronomical-science-of-kumbh-mela-planetary-alignments" style="color:#854d0e; font-weight:600;">Astronomical Science of Kumbh Mela: Planetary Alignments</a></li>
          </ul>
        </section>
      </article>
    `
  },
  {
    path: 'kumbh-directory/akharas-and-traditions',
    title: 'The 13 Sacred Akharas of Kumbh Mela Complete Directory | TheKumbhCottages',
    description: 'Comprehensive guide to the 13 monastic Akharas of Kumbh Mela: Juna, Niranjani, Mahanirvani, Atal, Nirmohi, Digambar, Bada Udasin, and Nirmal orders. History, deities, and Naga Sadhu traditions.',
    h1: 'The 13 Sacred Akharas of Kumbh Mela Directory',
    canonical: 'https://thekumbhcottages.com/kumbh-directory/akharas-and-traditions',
    priority: '0.85',
    type: 'website',
    content: `
      <article style="max-width:900px; margin:0 auto; padding:1.5rem 0;">
        <nav aria-label="Breadcrumb" style="font-size:11px; color:#78716c; margin-bottom:1rem;">
          <a href="/" style="color:#78716c; text-decoration:none;">Home</a> » <a href="/kumbh-directory" style="color:#78716c; text-decoration:none;">Kumbh Directory</a> » <span>13 Sacred Akharas</span>
        </nav>
        <span style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#b45309; font-weight:600;">Ancient Monastic Orders · Adi Shankaracharya</span>
        <h1 style="font-size:30px; line-height:1.3; color:#1c1917; margin:0.5rem 0;">The 13 Sacred Akharas of Kumbh Mela Complete Directory</h1>
        <p style="font-size:15px; color:#44403c; line-height:1.7;">
          In the 8th century CE, Adi Shankaracharya organized monastic ascetics into Dashanami orders to defend Sanatan Dharma. Overseen by the Akhil Bharatiya Akhara Parishad (ABAP), these 13 monastic orders lead every royal Shahi Snan procession.
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.25rem; margin:2rem 0;">
          ${THIRTEEN_AKHARAS_DIRECTORY.map(akhara => `
            <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:6px; padding:1.25rem;">
              <span style="font-size:10px; text-transform:uppercase; color:#b45309; font-weight:600; background:#fef3c7; padding:0.2rem 0.5rem; border-radius:4px;">${escapeHtml(akhara.tradition)}</span>
              <h3 style="font-size:15px; color:#1c1917; margin:0.5rem 0;">${escapeHtml(akhara.name)}</h3>
              <p style="font-size:12px; color:#57534e; line-height:1.6;">${escapeHtml(akhara.significance)}</p>
              <div style="font-size:11px; color:#78716c; margin-top:0.75rem;">
                <strong>Deity:</strong> ${escapeHtml(akhara.deity)} · <strong>Founded:</strong> ${escapeHtml(akhara.founded)}
              </div>
            </div>
          `).join('\n')}
        </div>

        <section style="background:#fefce8; border:1px solid #fef08a; border-radius:8px; padding:1.5rem; margin:2rem 0;">
          <h3 style="font-size:16px; color:#854d0e; margin-bottom:0.75rem;">Monastic Knowledge &amp; Traditions Manuals:</h3>
          <ul style="font-size:13px; color:#713f12; line-height:1.8; padding-left:1.25rem;">
            <li><a href="/guides/akhara-traditions-naga-sadhus-and-spiritual-lineages" style="color:#854d0e; font-weight:600;">Akhara Traditions, Naga Sadhus &amp; Spiritual Lineages Guide</a></li>
            <li><a href="/guides/kumbh-mela-shahi-snan-dates-rituals-spiritual-significance" style="color:#854d0e; font-weight:600;">Shahi Snan Dates, Rituals &amp; Spiritual Significance</a></li>
          </ul>
        </section>
      </article>
    `
  },
  {
    path: 'kumbh-directory/shahi-snan-rituals-guide',
    title: 'Shahi Snan Rituals & Vedic Pilgrimage Science | TheKumbhCottages',
    description: 'Complete guide to the spiritual science of Shahi Snan (Royal Bath) at Kumbh Mela. Step-by-step Vedic snan procedure, Kalpavas vows, mantra chanting, and elder safety protocols.',
    h1: 'Shahi Snan Rituals & Vedic Pilgrimage Science Guide',
    canonical: 'https://thekumbhcottages.com/kumbh-directory/shahi-snan-rituals-guide',
    priority: '0.85',
    type: 'website',
    content: `
      <article style="max-width:900px; margin:0 auto; padding:1.5rem 0;">
        <nav aria-label="Breadcrumb" style="font-size:11px; color:#78716c; margin-bottom:1rem;">
          <a href="/" style="color:#78716c; text-decoration:none;">Home</a> » <a href="/kumbh-directory" style="color:#78716c; text-decoration:none;">Kumbh Directory</a> » <span>Shahi Snan Science</span>
        </nav>
        <span style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#b45309; font-weight:600;">Vedic Physics &amp; Ritual Protocols</span>
        <h1 style="font-size:30px; line-height:1.3; color:#1c1917; margin:0.5rem 0;">Shahi Snan Rituals &amp; Vedic Pilgrimage Science Guide</h1>
        <p style="font-size:15px; color:#44403c; line-height:1.7;">
          The sacred royal bath is not merely an immersion in physical water, but a cosmic synchrony where planetary alignment charges the river molecules with solar and Jovian bio-energy.
        </p>

        <section style="margin:2rem 0;">
          <h2 style="font-size:20px; color:#1c1917; margin-bottom:1rem;">The Six-Stage Vedic Snan Science</h2>
          <div style="display:flex; flex-direction:column; gap:1rem;">
            ${SHAHI_SNAN_SCIENCE.steps.map(step => `
              <div style="background:#ffffff; border:1px solid #e7e5e4; border-radius:6px; padding:1.25rem;">
                <h3 style="font-size:15px; color:#1c1917; margin-bottom:0.25rem;">${escapeHtml(step.title)}</h3>
                <p style="font-size:13px; color:#57534e; line-height:1.6;">${escapeHtml(step.desc)}</p>
              </div>
            `).join('\n')}
          </div>
        </section>

        <section style="margin:2rem 0; background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem;">
          <h2 style="font-size:20px; color:#1c1917; margin-bottom:1rem;">Senior Citizen &amp; Family Safety Protocols</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1rem;">
            ${SHAHI_SNAN_SCIENCE.safetyGuidelines.map(g => `
              <div style="background:#f9f8f6; border-radius:6px; padding:1rem;">
                <strong style="color:#1c1917; font-size:13px; display:block;">✦ ${escapeHtml(g.title)}</strong>
                <p style="font-size:12px; color:#57534e; margin-top:0.25rem; line-height:1.5;">${escapeHtml(g.desc)}</p>
              </div>
            `).join('\n')}
          </div>
        </section>
      </article>
    `
  },
  {
    path: 'sacred-travel-and-kumbh-guides',
    title: 'Sacred Travel in India & Kumbh Mela Guides | TheKumbhCottages (Est. 2001)',
    description: 'Authoritative, genuine guides for spiritual travel in India: train transit, temple etiquette, elder accessibility, pure A2 ghee dining, planetary astronomy, 13 Akharas, and Kalpavas.',
    h1: 'Sacred Travel in India & Kumbh Mela Authority Guides',
    canonical: 'https://thekumbhcottages.com/sacred-travel-and-kumbh-guides',
    priority: '0.95',
    type: 'website',
    content: `
      <section style="max-width:1000px; margin:0 auto; padding:1.5rem 0;">
        <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.2em; color:#b45309; font-weight:600;">
          Universal Knowledge Base &amp; Pilgrim Journal
        </div>
        <h1 style="font-size:30px; line-height:1.3; color:#1c1917; margin:0.75rem 0;">
          Sacred Travel in India &amp; Kumbh Mela Master Guides (All 39 Articles)
        </h1>
        <p style="font-size:15px; line-height:1.7; color:#44403c;">
          Curated by our 25-year parent hospitality council: comprehensive city manuals for Prayagraj, Nashik &amp; Haridwar, scriptural astronomy, dietary guidelines, and elder mobility protocols across India's sacred dhams.
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:1.5rem; margin:2.5rem 0;">
          ${TRAVEL_AND_KUMBH_BLOGS.map(b => `
            <article style="background:#ffffff; border:1px solid #e7e5e4; border-radius:8px; padding:1.5rem; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <span style="font-size:10px; text-transform:uppercase; color:#b45309; font-weight:600; background:#fef3c7; padding:0.2rem 0.5rem; border-radius:4px;">${escapeHtml(b.badge)}</span>
                <h2 style="font-size:16px; color:#1c1917; margin:0.75rem 0 0.5rem; line-height:1.4;">
                  <a href="/guides/${b.slug}" style="color:#1c1917; text-decoration:none;">${escapeHtml(b.title)}</a>
                </h2>
                <p style="font-size:12px; color:#57534e; line-height:1.6;">${escapeHtml(b.excerpt.slice(0, 150))}...</p>
              </div>
              <div style="margin-top:1rem; padding-top:0.75rem; border-top:1px solid #f5f5f4; display:flex; justify-content:space-between; align-items:center; font-size:11px; color:#78716c;">
                <span>${escapeHtml(b.readTime)}</span>
                <a href="/guides/${b.slug}" style="color:#b45309; font-weight:600; text-decoration:none;">Read Full Guide →</a>
              </div>
            </article>
          `).join('\n')}
        </div>
      </section>
    `
  }
];

// Combine all 52 routes
const ROUTES = [...coreRoutes, ...directoryRoutes, ...blogRoutes];

// ─────────────────────────────────────────────────────────────────────────────
// PRE-RENDER ENGINE
// ─────────────────────────────────────────────────────────────────────────────
function prerender() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.warn('dist/index.html not found. Skipping static prerender.');
    return;
  }

  const templateHtml = fs.readFileSync(templatePath, 'utf-8');

  // Pre-rendered Universal Crawlable Footer
  const universalFooterHtml = `
    <footer role="contentinfo" style="background:#0a0704; color:#a8a29e; padding:3rem 1.5rem 2rem; font-size:12px; line-height:1.7; border-top:1px solid #292524;">
      <div style="max-width:1200px; margin:0 auto;">
        
        <!-- Identity Strip -->
        <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:1rem; padding-bottom:2rem; border-bottom:1px solid #292524;">
          <div>
            <strong style="font-size:16px; color:#fafaf9; display:block;">The Kumbh Cottages</strong>
            <span style="font-size:11px; text-transform:uppercase; letter-spacing:0.15em; color:#d97706;">Raamvan Retreats Sacred Hospitality &amp; Infrastructure Group · Est. 2001</span>
          </div>
          <div style="font-style:italic; font-size:12px; color:#78716c;">
            ॥ सत्यं शिवं सुन्दरम् · अतिथिदेवो भव ॥
          </div>
        </div>

        <!-- 5-Column Navigation Matrix -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:2rem; padding:2rem 0; border-bottom:1px solid #292524;">
          
          <div>
            <h4 style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#e7e5e4; margin-bottom:0.75rem;">The Parent Group</h4>
            <ul style="list-style:none; padding:0; margin:0; line-height:2;">
              <li><a href="/" style="color:#a8a29e; text-decoration:none;">Group Overview</a></li>
              <li><a href="/heritage-since-2001" style="color:#a8a29e; text-decoration:none;">25-Year Heritage (2001–2027)</a></li>
              <li><a href="/capabilities-infrastructure" style="color:#a8a29e; text-decoration:none;">Turnkey Infrastructure</a></li>
              <li><a href="/corporate-contact" style="color:#a8a29e; text-decoration:none;">Corporate Directorate</a></li>
            </ul>
          </div>

          <div>
            <h4 style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#e7e5e4; margin-bottom:0.75rem;">Destinations &amp; Portals</h4>
            <ul style="list-style:none; padding:0; margin:0; line-height:2;">
              <li><a href="https://kumbhcottagesnashik.com" target="_blank" rel="noopener noreferrer" style="color:#fbbf24; text-decoration:none;">Nashik Simhastha 2027 Portal ↗</a></li>
              <li><a href="/destinations#ujjain" style="color:#a8a29e; text-decoration:none;">Ujjain Simhastha Campus</a></li>
              <li><a href="/destinations#haridwar" style="color:#a8a29e; text-decoration:none;">Haridwar Ganga Sanctuary</a></li>
              <li><a href="/destinations#prayagraj" style="color:#a8a29e; text-decoration:none;">Prayagraj Founding Base</a></li>
            </ul>
          </div>

          <div>
            <h4 style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#e7e5e4; margin-bottom:0.75rem;">Kumbh Directory</h4>
            <ul style="list-style:none; padding:0; margin:0; line-height:2;">
              <li><a href="/kumbh-directory" style="color:#fbbf24; text-decoration:none;">Universal Almanac</a></li>
              <li><a href="/kumbh-directory/prayagraj-maha-kumbh" style="color:#a8a29e; text-decoration:none;">Prayagraj Maha Kumbh</a></li>
              <li><a href="/kumbh-directory/nashik-simhastha-kumbh" style="color:#a8a29e; text-decoration:none;">Nashik Simhastha 2027</a></li>
              <li><a href="/kumbh-directory/haridwar-maha-kumbh" style="color:#a8a29e; text-decoration:none;">Haridwar Maha Kumbh</a></li>
              <li><a href="/kumbh-directory/ujjain-simhastha-kumbh" style="color:#a8a29e; text-decoration:none;">Ujjain Simhastha Kumbh</a></li>
              <li><a href="/kumbh-directory/akharas-and-traditions" style="color:#a8a29e; text-decoration:none;">13 Sacred Akharas</a></li>
              <li><a href="/kumbh-directory/shahi-snan-rituals-guide" style="color:#a8a29e; text-decoration:none;">Shahi Snan Science</a></li>
            </ul>
          </div>

          <div>
            <h4 style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#e7e5e4; margin-bottom:0.75rem;">Master City Guides</h4>
            <ul style="list-style:none; padding:0; margin:0; line-height:2;">
              <li><a href="/guides/prayagraj-allahabad-complete-pilgrimage-travel-guide" style="color:#a8a29e; text-decoration:none;">Prayagraj Travel Manual</a></li>
              <li><a href="/guides/nashik-complete-pilgrimage-and-tourism-travel-guide" style="color:#a8a29e; text-decoration:none;">Nashik Pilgrimage Guide</a></li>
              <li><a href="/guides/haridwar-rishikesh-complete-pilgrimage-travel-guide" style="color:#a8a29e; text-decoration:none;">Haridwar &amp; Rishikesh Guide</a></li>
              <li><a href="/guides/mahakaleshwar-ujjain-jyotirlinga-bhasma-aarti-simhastha-guide" style="color:#a8a29e; text-decoration:none;">Mahakaleshwar Ujjain Guide</a></li>
              <li><a href="/guides/trimbakeshwar-jyotirlinga-temple-darshan-guide-rituals" style="color:#a8a29e; text-decoration:none;">Trimbakeshwar Temple Guide</a></li>
              <li><a href="/guides/panchavati-nashik-ramayana-sites-complete-pilgrimage-guide" style="color:#a8a29e; text-decoration:none;">Panchavati Ramayana Sites</a></li>
            </ul>
          </div>

          <div>
            <h4 style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:#e7e5e4; margin-bottom:0.75rem;">Logistics &amp; Philosophy</h4>
            <ul style="list-style:none; padding:0; margin:0; line-height:2;">
              <li><a href="/guides/first-time-sacred-travel-in-india-practical-guide" style="color:#a8a29e; text-decoration:none;">First-Time Sacred Travel</a></li>
              <li><a href="/guides/multi-generational-family-elder-pilgrimage-guide" style="color:#a8a29e; text-decoration:none;">Elder Mobility Guide</a></li>
              <li><a href="/guides/pure-sattvic-ayurvedic-dining-guide" style="color:#a8a29e; text-decoration:none;">Pure Sattvic Dining Science</a></li>
              <li><a href="/guides/astronomical-science-of-kumbh-mela-planetary-alignments" style="color:#a8a29e; text-decoration:none;">Planetary Alignments</a></li>
              <li><a href="/guides/kalpavas-discipline-spiritual-science-of-riverside-living" style="color:#a8a29e; text-decoration:none;">Kalpavas Tapasya Vow</a></li>
              <li><a href="/sacred-travel-and-kumbh-guides" style="color:#fbbf24; text-decoration:none;">All 39 Guides Index →</a></li>
            </ul>
          </div>

        </div>

        <!-- Comprehensive All 39 Guides Crawl Strip -->
        <div style="padding:1.5rem 0; border-bottom:1px solid #292524; font-size:11px; color:#78716c;">
          <strong style="color:#e7e5e4; display:block; margin-bottom:0.5rem; text-transform:uppercase; font-size:10px;">Universal Index of All 39 Authority Guides:</strong>
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem 1rem;">
            ${TRAVEL_AND_KUMBH_BLOGS.map(b => `<a href="/guides/${b.slug}" style="color:#a8a29e; text-decoration:none;">${escapeHtml(b.title)}</a>`).join(' <span style="color:#44403c;">•</span> ')}
          </div>
        </div>

        <!-- Bottom Accreditations -->
        <div style="padding-top:1.5rem; display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:1rem; font-size:11px; color:#78716c;">
          <div>© 2001–2027 The Kumbh Cottages · A Raamvan Retreats Global Venture. ISO 9001:2015 &amp; HACCP Compliant.</div>
          <div>Tel: <a href="tel:+919889933333" style="color:#a8a29e;">+91 98899 33333</a> · Email: <a href="mailto:kumbhcottages@gmail.com" style="color:#a8a29e;">kumbhcottages@gmail.com</a></div>
        </div>

      </div>
    </footer>
  `;

  // Pre-rendered Universal Crawlable Header
  const universalHeaderHtml = `
    <header role="banner" style="background:#120e0a; color:#f5f5f4; padding:0.75rem 1.5rem; border-bottom:1px solid #292524; font-size:12px;">
      <nav aria-label="Primary Navigation" style="max-width:1200px; margin:0 auto; display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:1rem;">
        <a href="/" style="color:#ffffff; font-weight:700; text-decoration:none; font-size:14px;">The Kumbh Cottages <span style="font-size:10px; color:#d97706; font-weight:400;">(Est. 2001)</span></a>
        <div style="display:flex; flex-wrap:wrap; gap:1rem;">
          <a href="/" style="color:#e7e5e4; text-decoration:none;">Overview</a>
          <a href="/destinations" style="color:#e7e5e4; text-decoration:none;">Destinations</a>
          <a href="https://kumbhcottagesnashik.com" target="_blank" rel="noopener noreferrer" style="color:#fbbf24; text-decoration:none; font-weight:600;">Nashik 2027 Flagship ↗</a>
          <a href="/capabilities-infrastructure" style="color:#e7e5e4; text-decoration:none;">Capabilities</a>
          <a href="/heritage-since-2001" style="color:#e7e5e4; text-decoration:none;">Heritage</a>
          <a href="/kumbh-directory" style="color:#e7e5e4; text-decoration:none;">Kumbh Directory</a>
          <a href="/sacred-travel-and-kumbh-guides" style="color:#e7e5e4; text-decoration:none;">Guides &amp; Journal (39)</a>
          <a href="/corporate-contact" style="color:#e7e5e4; text-decoration:none;">Contact</a>
        </div>
      </nav>
    </header>
  `;

  ROUTES.forEach(route => {
    let routeHtml = templateHtml;
    
    // Replace Title
    routeHtml = routeHtml.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
    
    // Replace Meta Description
    const safeDesc = escapeHtml(route.description);
    if (routeHtml.includes('<meta name="description"')) {
      routeHtml = routeHtml.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${safeDesc}" />`);
    } else {
      routeHtml = routeHtml.replace('</head>', `  <meta name="description" content="${safeDesc}" />\n</head>`);
    }

    // Replace Canonical Link
    if (routeHtml.includes('<link rel="canonical"')) {
      routeHtml = routeHtml.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${route.canonical}" />`);
    } else {
      routeHtml = routeHtml.replace('</head>', `  <link rel="canonical" href="${route.canonical}" />\n</head>`);
    }

    // Build Graph Schema
    const graph = [
      {
        "@type": "WebSite",
        "@id": "https://thekumbhcottages.com/#website",
        "url": "https://thekumbhcottages.com",
        "name": "TheKumbhCottages",
        "description": "Sovereign Heritage & Sacred Infrastructure Group Operating Continuously Since 2001.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://thekumbhcottages.com/sacred-travel-and-kumbh-guides?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Corporation",
        "@id": "https://thekumbhcottages.com/#organization",
        "name": "The Kumbh Cottages",
        "alternateName": "TheKumbhCottages",
        "foundingDate": "2001",
        "url": "https://thekumbhcottages.com",
        "logo": "https://thekumbhcottages.com/assets/brand/emblem.webp",
        "description": route.description,
        "telephone": "+91-98899-33333",
        "email": "kumbhcottages@gmail.com",
        "sameAs": [
          "https://kumbhcottagesnashik.com",
          "https://share.google/cmaiQgwb1FsV2jdfj",
          "https://www.wikidata.org/wiki/Q1028",
          "https://www.facebook.com/thekumbhcottage/"
        ],
        "hasMap": "https://share.google/cmaiQgwb1FsV2jdfj"
      }
    ];

    // If Article, inject Article / BlogPosting Schema
    if (route.type === 'article' && route.blog) {
      const blog = route.blog;
      const articleImage = `https://thekumbhcottages.com${blog.image || '/assets/real_camps/kumbh-cottages-riverfront-sanctuary-fountain.webp'}`;
      graph.push({
        "@type": "BlogPosting",
        "@id": `${route.canonical}#article`,
        "headline": blog.title,
        "description": blog.excerpt,
        "image": articleImage,
        "datePublished": blog.publishedDate,
        "dateModified": blog.publishedDate,
        "mainEntityOfPage": route.canonical,
        "author": {
          "@type": "Organization",
          "name": blog.author || "TheKumbhCottages Sacred Seva Directorate",
          "url": "https://thekumbhcottages.com"
        },
        "publisher": {
          "@id": "https://thekumbhcottages.com/#organization"
        }
      });

      // BreadcrumbList Schema for articles
      graph.push({
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thekumbhcottages.com" },
          { "@type": "ListItem", "position": 2, "name": "Guides & Journal", "item": "https://thekumbhcottages.com/sacred-travel-and-kumbh-guides" },
          { "@type": "ListItem", "position": 3, "name": blog.title, "item": route.canonical }
        ]
      });
    }

    // If directory or home page, inject FAQPage Schema
    if (route.path === '' || route.path === 'kumbh-directory') {
      graph.push({
        "@type": "FAQPage",
        "mainEntity": (route.path === 'kumbh-directory' ? KUMBH_SEO_FAQS : MASTER_KUMBH_FAQS.slice(0, 10)).map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      });
    }

    const schemaJson = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": graph
    });

    const schemaScript = `\n  <script type="application/ld+json" id="prerender-schema">${schemaJson}</script>\n`;
    
    // Inject OpenGraph, Twitter, and canonical Social Metadata
    const routeImage = getRouteImage(route.path);
    const ogImageUrl = `https://thekumbhcottages.com${routeImage}`;
    const safeTitleAttr = escapeHtml(route.title);
    const safeDescAttr = escapeHtml(route.description);
    const socialTags = `  <meta property="og:title" content="${safeTitleAttr}" />\n  <meta property="og:description" content="${safeDescAttr}" />\n  <meta property="og:url" content="${route.canonical}" />\n  <meta property="og:image" content="${ogImageUrl}" />\n  <meta name="twitter:card" content="summary_large_image" />\n  <meta name="twitter:title" content="${safeTitleAttr}" />\n  <meta name="twitter:description" content="${safeDescAttr}" />\n  <meta name="twitter:image" content="${ogImageUrl}" />\n`;
    
    routeHtml = routeHtml.replace('</head>', `${schemaScript}${socialTags}</head>`);

    // Inject semantic content into <div id="root"> for 100% crawlability by search bots and AI
    const semanticPrerenderHtml = `<div id="root">${universalHeaderHtml}<main role="main" style="min-height:80vh; padding:1rem;">${route.content}</main>${universalFooterHtml}</div>`;
    
    routeHtml = routeHtml.replace('<div id="root"></div>', semanticPrerenderHtml);

    if (route.path === '') {
      fs.writeFileSync(path.join(distDir, 'index.html'), routeHtml);
    } else {
      const targetDir = path.join(distDir, route.path);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      fs.writeFileSync(path.join(targetDir, 'index.html'), routeHtml);
    }
  });

  // 1. Automatically generate sitemap.xml
  const publicDir = path.resolve(__dirname, '../public');
  const sitemapXml = generateSitemap(ROUTES);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');

  // 2. Automatically generate feed.xml (RSS 2.0 Feed)
  const rssFeedXml = generateRssFeed(ROUTES);
  fs.writeFileSync(path.join(publicDir, 'feed.xml'), rssFeedXml, 'utf-8');
  fs.writeFileSync(path.join(distDir, 'feed.xml'), rssFeedXml, 'utf-8');

  // 3. Copy static AI & bot files
  const filesToCopy = ['llms.txt', 'llms-full.txt', 'robots.txt', 'e3d7a859b19f4a0c8b61c834a9e52c80.txt'];
  filesToCopy.forEach(file => {
    const src = path.join(publicDir, file);
    const dest = path.join(distDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  });

  console.log(`✅ Static pre-rendering, full semantic HTML injection, Sitelinks Search Box schemas, automatic sitemap.xml, feed.xml, robots.txt, and llms.txt successfully generated for all ${ROUTES.length} canonical routes!`);
}

function generateSitemap(routes) {
  const today = new Date().toISOString().split('T')[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  routes.forEach(route => {
    const priority = route.priority || '0.8';
    const changefreq = priority === '1.0' ? 'daily' : parseFloat(priority) >= 0.9 ? 'daily' : 'weekly';
    const safeTitle = (route.title || 'TheKumbhCottages')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
    const routeImage = getRouteImage(route.path);
    const imageUrl = `https://thekumbhcottages.com${routeImage}`;

    xml += `  <url>\n`;
    xml += `    <loc>${route.canonical}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `    <image:image>\n`;
    xml += `      <image:loc>${imageUrl}</image:loc>\n`;
    xml += `      <image:title>${safeTitle}</image:title>\n`;
    xml += `      <image:license>https://thekumbhcottages.com/corporate-contact#licensing</image:license>\n`;
    xml += `    </image:image>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;
  return xml;
}

function generateRssFeed(routes) {
  const buildDate = new Date().toUTCString();
  let feed = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  feed += `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n`;
  feed += `  <channel>\n`;
  feed += `    <title>TheKumbhCottages — Sovereign Heritage &amp; Sacred Infrastructure Group</title>\n`;
  feed += `    <link>https://thekumbhcottages.com</link>\n`;
  feed += `    <description>Authoritative pilgrimage updates, logistical transit manuals, and luxury riverfront sanctuary announcements by Raamvan Retreats (Est. 2001).</description>\n`;
  feed += `    <language>en-IN</language>\n`;
  feed += `    <lastBuildDate>${buildDate}</lastBuildDate>\n`;
  feed += `    <atom:link href="https://thekumbhcottages.com/feed.xml" rel="self" type="application/rss+xml" />\n`;

  routes.forEach(route => {
    const safeTitle = (route.title || 'TheKumbhCottages')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');

    const safeDesc = (route.description || 'Sovereign Heritage and Sacred Infrastructure Group')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');

    feed += `    <item>\n`;
    feed += `      <title>${safeTitle}</title>\n`;
    feed += `      <link>${route.canonical}</link>\n`;
    feed += `      <guid isPermaLink="true">${route.canonical}</guid>\n`;
    feed += `      <pubDate>${buildDate}</pubDate>\n`;
    feed += `      <description>${safeDesc}</description>\n`;
    feed += `    </item>\n`;
  });

  feed += `  </channel>\n`;
  feed += `</rss>\n`;
  return feed;
}

prerender();
