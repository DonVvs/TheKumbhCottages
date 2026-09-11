import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import { TRAVEL_AND_KUMBH_BLOGS } from '../../data/travelAndKumbhBlogsData';
import { ArrowRight, Clock, BookOpen, Compass, ShieldCheck, ExternalLink, Search, X } from 'lucide-react';

export default function TravelAndKumbhHubPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'India Sacred Travel',
    'Kumbh Accommodation & Logistics',
    'Kumbh Science & Philosophy',
    'Kumbh Traditions & Monasticism'
  ];

  const filteredBlogs = TRAVEL_AND_KUMBH_BLOGS.filter(blog => {
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pb-16 bg-[#FAF8F5] text-stone-900">
      <SEOHead
        title="Sacred Travel in India & Kumbh Mela Guides | TheKumbhCottages (Est. 2001)"
        description="Authoritative, genuine guides for spiritual travel in India: train transit, temple etiquette, elder accessibility, pure A2 ghee dining, planetary astronomy, 13 Akharas, and Kalpavas."
        canonical="https://thekumbhcottages.com/sacred-travel-and-kumbh-guides"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-swarna-700 font-medium mb-1.5">
              Knowledge Repository & Pilgrim Journal
            </div>
            <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
              Sacred Travel in India & Kumbh Mela Authority Guides
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 font-sans font-light mt-1.5 leading-relaxed">
              Curated by our 25-year parent hospitality council: authentic logistical manuals, city guides for Prayagraj, Nashik & Haridwar, dietary guidelines, and elder mobility protocols.
            </p>
          </div>

          {/* Minimalist Search Bar */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search guides (e.g., Allahabad, Nashik, Haridwar)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-stone-200/90 rounded-full pl-8 pr-8 py-1.5 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-8 text-xs scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full font-medium transition-colors flex-shrink-0 text-xs ${
                activeCategory === cat
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.slug}
              className="bg-white rounded-lg border border-stone-200/90 p-5 sm:p-6 flex flex-col justify-between hover:border-stone-300 transition-colors shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-swarna-700 uppercase bg-stone-50 px-2 py-0.5 rounded font-medium">
                    {blog.badge}
                  </span>
                  <span className="text-stone-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {blog.readTime}
                  </span>
                </div>

                <div>
                  <div className="text-[10px] font-mono text-stone-400 uppercase">
                    {blog.category}
                  </div>
                  <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900 mt-0.5 leading-snug">
                    <Link
                      to={`/guides/${blog.slug}`}
                      className="hover:text-swarna-700 transition-colors"
                    >
                      {blog.title}
                    </Link>
                  </h2>
                </div>

                <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-stone-400">
                  {blog.publishedDate}
                </span>

                <Link
                  to={`/guides/${blog.slug}`}
                  className="font-medium text-stone-900 hover:text-swarna-700 flex items-center gap-1 text-[11px]"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Outbound & Internal Resource Links Strip */}
        <div className="bg-[#120E0A] text-white p-5 sm:p-6 rounded-lg border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-[9px] uppercase font-mono text-swarna-400 font-medium">
              Active Destination Portals
            </div>
            <h3 className="font-serif text-base sm:text-lg font-light text-white">
              Planning for Nashik Simhastha 2027?
            </h3>
            <p className="text-xs text-stone-400 font-sans font-light">
              Visit our dedicated property portal at <span className="text-stone-200">kumbhcottagesnashik.com</span> or request corporate group buyouts.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://kumbhcottagesnashik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-darbar-gold px-3.5 py-1.5 rounded text-[11px] uppercase tracking-wider font-medium flex items-center gap-1"
            >
              <span>Visit Nashik Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <Link
              to="/corporate-contact"
              className="px-3.5 py-1.5 rounded border border-white/30 text-white hover:border-white text-[11px] uppercase tracking-wider transition-colors"
            >
              Contact Directorate
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
