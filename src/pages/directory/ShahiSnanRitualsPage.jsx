import React from 'react';
import SEOHead from '../../components/common/SEOHead';
import DirectoryBreadcrumbs from '../../components/directory/DirectoryBreadcrumbs';
import { SHAHI_SNAN_SCIENCE } from '../../data/kumbhDirectoryData';
import { Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ShahiSnanRitualsPage() {
  return (
    <main className="pb-16 bg-[#FAF8F5] text-stone-900">
      <SEOHead
        title="Shahi Snan Rituals & Vedic Pilgrimage Science | TheKumbhCottages"
        description="Complete guide to the spiritual science of Shahi Snan (Royal Bath) at Kumbh Mela. Step-by-step Vedic snan procedure, Kalpavas vows, mantra chanting, and elder safety protocols."
        canonical="https://thekumbhcottages.com/kumbh-directory/shahi-snan-rituals-guide"
      />

      <DirectoryBreadcrumbs items={[{ label: "Shahi Snan Rituals Guide" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        
        {/* Header */}
        <header className="mb-6">
          <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-swarna-700 font-medium mb-1.5">
            Sacred Ritual Science
          </div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
            The Spiritual Science & Ritual Procedure of Shahi Snan
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-sans font-light mt-1.5 leading-relaxed">
            The profound spiritual physics behind the Royal Bath (Rajyogi Snan): scriptural mantras, step-by-step Vedic procedures, and elder safety protocols.
          </p>
        </header>

        {/* Narrative Chapters */}
        <div className="space-y-6 text-xs sm:text-sm text-stone-700 font-sans font-light leading-relaxed mb-8">
          
          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              Why the Shahi Snan is Consecrated
            </h2>
            <p>
              In Vedic cosmology, when Jupiter, the Sun, and the Moon align in specific astrological houses during the Kumbh Mela, the subtle electromagnetic frequency of the sacred river waters undergoes a cosmic ionization known as <em>Amritatva</em> (nectar state).
            </p>
            <p>
              A single dip during the peak Muhurta of the Shahi Snan is believed to dissolve lifetimes of accumulated karmic impressions (Prarabdha Karma), purifying the physical body, the subtle mind, and the causal soul.
            </p>
          </section>

          {/* Step by Step Vedic Snan Ritual */}
          <section className="space-y-3">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              Vedic Step-by-Step Bathing Procedure
            </h2>

            <div className="space-y-2.5">
              {SHAHI_SNAN_SCIENCE.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3.5 rounded-lg border border-stone-200/90 flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded bg-stone-100 text-stone-800 flex items-center justify-center font-mono text-xs font-medium flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <strong className="font-serif text-xs sm:text-sm text-stone-900 block">{step.title}</strong>
                    <p className="text-xs text-stone-600 font-light mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sacred Snan Mantra */}
          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              Consecrated Bathing Mantras
            </h2>
            <div className="p-4 bg-stone-900 text-stone-200 rounded-lg space-y-2 font-mono text-xs border border-stone-800">
              <div className="text-swarna-400 font-serif text-sm">
                गङ्गे च यमुने चैव गोदावरि सरस्वति । नर्मदे सिन्धु कावेरि जलेऽस्मिन् संनिधिं कुरु ॥
              </div>
              <div className="text-[11px] text-stone-400 font-sans font-light">
                <em>"O sacred rivers Ganga, Yamuna, Godavari, Saraswati, Narmada, Sindhu, and Kaveri! Please sanctify this water with your divine presence."</em>
              </div>
            </div>
          </section>

          {/* Elder & Multi-Generational Safety Protocols */}
          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              Sanctuary Protocols for Elderly Pilgrims & Families
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SHAHI_SNAN_SCIENCE.safetyGuidelines.map((guide, idx) => (
                <div key={idx} className="p-3 bg-white rounded border border-stone-200/80 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-serif text-stone-900 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{guide.title}</span>
                  </div>
                  <p className="text-[11px] text-stone-600 font-light leading-normal">{guide.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

      </article>
    </main>
  );
}
