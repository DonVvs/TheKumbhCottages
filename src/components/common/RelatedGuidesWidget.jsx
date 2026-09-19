import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { TRAVEL_AND_KUMBH_BLOGS_META } from '../../data/travelAndKumbhBlogsMeta';

export default function RelatedGuidesWidget({
  category = null,
  limit = 3,
  title = "Sacred Travel & Kumbh Guides",
  subtitle = "Genuine practical transit manuals, elder accessibility guidelines, and ritual astronomy from our 25-year repository."
}) {
  const filteredBlogs = category
    ? TRAVEL_AND_KUMBH_BLOGS_META.filter(b => b.category === category).slice(0, limit)
    : TRAVEL_AND_KUMBH_BLOGS_META.slice(0, limit);

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12 sm:mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase font-sans tracking-[0.25em] text-swarna-700 font-medium mb-3">
              <span className="w-6 h-px bg-swarna-600/60" />
              <span>Pilgrim Knowledge Base & Editorial</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-900 leading-[1.2] tracking-tight">
              {title}
            </h2>
            <p className="text-sm text-stone-600 font-sans font-light mt-3 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <Link
            to="/sacred-travel-and-kumbh-guides"
            className="px-6 py-2.5 rounded-sm border border-stone-300 text-stone-900 hover:border-stone-900 transition-all duration-300 text-[11px] uppercase tracking-[0.16em] font-medium flex items-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.slug}
              className="bg-white rounded-sm border border-stone-200 overflow-hidden flex flex-col justify-between hover:border-stone-400 transition-all duration-300 shadow-xs group"
            >
              <div className="p-6 sm:p-8 space-y-3.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-swarna-700 uppercase tracking-wider text-[10px] font-sans font-medium">
                    {blog.badge}
                  </span>
                  <span className="text-stone-400 flex items-center gap-1 text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-normal text-stone-900 leading-snug">
                  <Link
                    to={`/guides/${blog.slug}`}
                    className="hover:text-swarna-700 transition-colors"
                  >
                    {blog.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="text-[11px] font-mono">Curated Advisory</span>
                <Link
                  to={`/guides/${blog.slug}`}
                  className="font-medium text-stone-900 hover:text-swarna-700 flex items-center gap-1.5 uppercase text-[11px] tracking-wider"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

