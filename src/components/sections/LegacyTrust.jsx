import React from 'react';
import { Star, ShieldCheck, Award, HeartHandshake, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA, ACCREDITATIONS } from '../../data/testimonialsData';
import { TRANSLATIONS } from '../../data/translationsData';

export default function LegacyTrust({ lang = 'en' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  return (
    <section className="py-20 bg-cream-100 text-espresso-950 border-b border-cream-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-swarna-500/15 border border-swarna-500/40 text-swarna-800 text-xs font-serif font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-swarna-700" />
            <span>॥ 25 Years of Sanctified Trust Since 2001 ॥</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-950 tracking-tight">
            {t.testimonials_heading}
          </h2>
          <p className="text-sm sm:text-base text-espresso-700 font-sans mt-3">
            {t.testimonials_subheading}
          </p>
        </div>

        {/* Devotee Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="temple-panel temple-card-hover p-8 rounded-3xl flex flex-col justify-between border border-cream-300 relative"
            >
              <Quote className="w-10 h-10 text-swarna-400/20 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* 5-Star Gold Ratings */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-mono font-bold text-espresso-800">5.0 / 5.0</span>
                </div>

                <p className="text-sm text-espresso-900 leading-relaxed font-sans italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-cream-200 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-serif font-bold text-sm sm:text-base text-espresso-950">
                      {testimonial.name}
                    </h4>
                    {testimonial.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                  </div>
                  <p className="text-xs text-espresso-700 font-sans">
                    {testimonial.designation} · {testimonial.city}
                  </p>
                </div>

                <span className="text-[10px] text-swarna-800 font-serif font-semibold bg-swarna-200/50 px-2.5 py-1 rounded-full border border-swarna-300">
                  {testimonial.stayedIn}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditation Seals Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ACCREDITATIONS.map((badge, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-cream-300 shadow-sm text-center space-y-1"
            >
              <div className="w-8 h-8 rounded-full bg-swarna-500/15 text-swarna-800 flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="font-serif font-bold text-xs sm:text-sm text-espresso-950">{badge.title}</h4>
              <p className="text-[11px] text-espresso-600 font-sans">{badge.subtitle}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
