import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEOHead from '../../components/common/SEOHead';
import DirectoryBreadcrumbs from '../../components/directory/DirectoryBreadcrumbs';
import { TRAVEL_AND_KUMBH_BLOGS } from '../../data/travelAndKumbhBlogsData';
import { Clock, Calendar, User, ArrowLeft, ArrowRight, ExternalLink, Share2, BookOpen } from 'lucide-react';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = TRAVEL_AND_KUMBH_BLOGS.find((b) => b.slug === slug);

  if (!blog) {
    return <Navigate to="/sacred-travel-and-kumbh-guides" replace />;
  }

  const breadcrumbs = [
    { name: "Home", url: "https://thekumbhcottages.com" },
    { name: "Sacred Travel & Kumbh Guides", url: "https://thekumbhcottages.com/sacred-travel-and-kumbh-guides" },
    { name: blog.title, url: `https://thekumbhcottages.com/guides/${blog.slug}` }
  ];

  const otherBlogs = TRAVEL_AND_KUMBH_BLOGS.filter((b) => b.slug !== slug).slice(0, 2);

  return (
    <main className="pb-16 bg-[#FAF8F5] text-stone-900">
      <SEOHead
        title={`${blog.title} | TheKumbhCottages (Est. 2001)`}
        description={blog.excerpt}
        canonical={`https://thekumbhcottages.com/guides/${blog.slug}`}
        type="article"
        breadcrumbs={breadcrumbs}
      />

      <DirectoryBreadcrumbs
        items={[
          { label: "Guides & Journal", path: "/sacred-travel-and-kumbh-guides" },
          { label: blog.badge }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        
        {/* Article Header */}
        <header className="mb-8 border-b border-stone-200/80 pb-6">
          <div className="flex items-center gap-2 text-[10px] font-mono text-stone-500 uppercase mb-2">
            <span className="text-swarna-700 bg-stone-100 px-2 py-0.5 rounded font-medium">
              {blog.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-stone-400" />
              {blog.readTime}
            </span>
            <span>•</span>
            <span>{blog.publishedDate}</span>
          </div>

          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-stone-900 tracking-tight leading-snug">
            {blog.title}
          </h1>

          <p className="text-xs sm:text-sm text-stone-600 font-sans font-light mt-2 leading-relaxed italic border-l-2 border-swarna-500 pl-3">
            {blog.excerpt}
          </p>

          <div className="mt-4 flex items-center justify-between text-[11px] text-stone-500 font-sans">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-stone-800 text-stone-200 flex items-center justify-center text-[9px] font-mono">
                TKC
              </div>
              <span>Authored by <strong>{blog.author}</strong></span>
            </div>

            <span className="text-[10px] font-mono text-stone-400">
              Verified Seva Authority · Est. 2001
            </span>
          </div>
        </header>

        {/* Table of Contents Box */}
        {blog.tableOfContents && blog.tableOfContents.length > 0 && (
          <nav className="p-4 bg-white rounded-lg border border-stone-200/90 mb-8 text-xs">
            <div className="font-serif text-xs font-medium text-stone-900 mb-2 flex items-center gap-1.5 uppercase tracking-wider text-stone-600">
              <BookOpen className="w-3.5 h-3.5 text-swarna-600" />
              <span>In This Master Guide:</span>
            </div>
            <ul className="space-y-1.5 text-stone-600 font-sans font-light">
              {blog.tableOfContents.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-swarna-700 hover:underline transition-colors block"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Main Article Body */}
        <div
          className="prose prose-stone max-w-none text-xs sm:text-sm text-stone-700 font-sans font-light leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Dedicated Contextual Destination Portal Callout */}
        <div className="mt-10 p-5 bg-white rounded-lg border border-stone-200/90 space-y-3">
          <div className="text-[10px] uppercase font-mono text-swarna-700 font-medium">
            Active Sacred Destination Gateway
          </div>
          <h3 className="font-serif text-base font-normal text-stone-900">
            Planning Your Journey with The Kumbh Cottages
          </h3>
          <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
            As the parent group operating continuously since 2001, we provide turnkey luxury riverfront campuses across Nashik, Ujjain, Haridwar, and Prayagraj.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="https://kumbhcottagesnashik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-darbar-gold px-3.5 py-1.5 rounded text-[11px] uppercase tracking-wider font-medium flex items-center gap-1"
            >
              <span>Visit Nashik Portal (kumbhcottagesnashik.com)</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <Link
              to="/corporate-contact"
              className="px-3.5 py-1.5 rounded border border-stone-300 text-stone-700 hover:text-black hover:border-stone-400 text-[11px] uppercase tracking-wider font-normal transition-colors"
            >
              Request Corporate Liaison
            </Link>
          </div>
        </div>

        {/* Internal Cross-Linking / Related Guides */}
        <div className="mt-12 pt-8 border-t border-stone-200/80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-base font-normal text-stone-900">
              Related Authority Guides & Knowledge
            </h3>
            <Link
              to="/sacred-travel-and-kumbh-guides"
              className="text-xs text-stone-600 hover:text-swarna-700 flex items-center gap-1"
            >
              <span>All Guides</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherBlogs.map((b) => (
              <div
                key={b.slug}
                className="p-4 bg-white rounded-lg border border-stone-200/90 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <span className="text-[9px] uppercase font-mono text-swarna-700 bg-stone-50 px-1.5 py-0.5 rounded">
                    {b.badge}
                  </span>
                  <h4 className="font-serif text-xs sm:text-sm font-normal text-stone-900 leading-snug">
                    <Link to={`/guides/${b.slug}`} className="hover:text-swarna-700 transition-colors">
                      {b.title}
                    </Link>
                  </h4>
                  <p className="text-[11px] text-stone-600 font-sans font-light line-clamp-2">
                    {b.excerpt}
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400 font-mono">
                  <span>{b.readTime}</span>
                  <Link to={`/guides/${b.slug}`} className="text-stone-900 font-sans font-medium hover:text-swarna-700">
                    Read →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </article>
    </main>
  );
}
