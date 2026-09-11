import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../../data/faqData';
import { TRANSLATIONS } from '../../data/translationsData';

export default function FAQSection({ lang = 'en' }) {
  const [openIndex, setOpenIndex] = useState(0);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-cream-50 text-espresso-950 border-b border-cream-300 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kesar-100 border border-kesar-500/30 text-kesar-700 text-xs font-serif font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>॥ Devotee Guidance & Clarifications ॥</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 tracking-tight">
            {t.faq_heading}
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-sans mt-3">
            {t.faq_subheading}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="temple-panel rounded-2xl overflow-hidden border border-cream-300 transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-espresso-950">
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-cream-100 flex items-center justify-center text-espresso-800 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-swarna-500 text-espresso-950' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-espresso-800 leading-relaxed font-sans border-t border-cream-200/80 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
