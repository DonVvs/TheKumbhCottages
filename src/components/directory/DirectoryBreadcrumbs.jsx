import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function DirectoryBreadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-[11px] font-mono text-stone-500 border-b border-stone-200/80 mb-6">
      <ol className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 flex-wrap">
        <li>
          <Link to="/" className="hover:text-espresso-950 transition-colors">Home</Link>
        </li>
        <li>
          <ChevronRight className="w-3 h-3 text-stone-400" />
        </li>
        <li>
          <Link to="/kumbh-directory" className="hover:text-espresso-950 transition-colors">Kumbh Directory</Link>
        </li>
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <li>
              <ChevronRight className="w-3 h-3 text-stone-400" />
            </li>
            <li className={idx === items.length - 1 ? 'text-espresso-950 font-medium truncate max-w-[200px]' : ''}>
              {item.path ? (
                <Link to={item.path} className="hover:text-espresso-950 transition-colors">{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
