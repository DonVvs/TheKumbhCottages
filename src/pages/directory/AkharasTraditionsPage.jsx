import React from 'react';
import SEOHead from '../../components/common/SEOHead';
import DirectoryBreadcrumbs from '../../components/directory/DirectoryBreadcrumbs';
import { THIRTEEN_AKHARAS_DIRECTORY } from '../../data/kumbhDirectoryData';

export default function AkharasTraditionsPage() {
  return (
    <main className="pb-16 bg-[#FAF8F5] text-stone-900">
      <SEOHead
        title="The 13 Sacred Akharas of Kumbh Mela Complete Directory | TheKumbhCottages"
        description="Comprehensive guide to the 13 monastic Akharas of Kumbh Mela: Juna, Niranjani, Mahanirvani, Atal, Nirmohi, Digambar, Bada Udasin, and Nirmal orders. History, deities, and Naga Sadhu traditions."
        canonical="https://thekumbhcottages.com/kumbh-directory/akharas-and-traditions"
      />

      <DirectoryBreadcrumbs items={[{ label: "13 Sacred Akharas Directory" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        
        {/* Header */}
        <header className="mb-6">
          <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-swarna-700 font-medium mb-1.5">
            Ancient Monastic Orders
          </div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
            The 13 Sacred Akharas of Kumbh Mela
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-sans font-light mt-1.5 leading-relaxed">
            The monastic defense and spiritual guardianship of Sanatan Dharma: an encyclopedic breakdown of the Shaiva Sannyasi, Vaishnava Bairagi, and Udasin ascetic lineages.
          </p>
        </header>

        {/* Narrative Chapters */}
        <div className="space-y-6 text-xs sm:text-sm text-stone-700 font-sans font-light leading-relaxed mb-8">
          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              The Origin of Akharas & Adi Shankaracharya's Vision
            </h2>
            <p>
              The word <em>Akhara</em> originates from the Sanskrit <em>Akshavata</em> (wrestling ground or assembly). In the 8th century CE, Adi Shankaracharya organized monastic ascetics into Dashanami orders to defend Sanatan Dharma both through philosophical debate (Shastrartha) and physical valor.
            </p>
            <p>
              Today, the 13 recognized Akharas are overseen by the <strong>Akhil Bharatiya Akhara Parishad (ABAP)</strong> and hold the exclusive spiritual privilege of leading the grand royal Shahi Snan processions at every Kumbh Mela.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg font-normal text-stone-900">
              The Three Monastic Traditions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 bg-white rounded-lg border border-stone-200/80 space-y-1">
                <strong className="font-serif text-stone-900 block">7 Shaiva Akharas</strong>
                <span className="text-stone-600 font-light text-[11px]">Worshippers of Lord Shiva and Lord Dattatreya. Includes the Naga Sannyasis.</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-stone-200/80 space-y-1">
                <strong className="font-serif text-stone-900 block">3 Vaishnava Akharas</strong>
                <span className="text-stone-600 font-light text-[11px]">Devotees of Lord Rama, Krishna, and Hanuman Ji. Known as Bairagi Ani Akharas.</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-stone-200/80 space-y-1">
                <strong className="font-serif text-stone-900 block">3 Udasin & Nirmal</strong>
                <span className="text-stone-600 font-light text-[11px]">Followers of Sri Chand Ji (Guru Nanak’s son) and the Sikh Nirmala monastic order.</span>
              </div>
            </div>
          </section>
        </div>

        {/* The 13 Akharas Directory Cards */}
        <div className="space-y-4">
          <h2 className="font-serif text-lg font-normal text-stone-900">
            Complete Directory of the 13 Akharas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {THIRTEEN_AKHARAS_DIRECTORY.map((akhara) => (
              <div
                key={akhara.id}
                className="bg-white p-4 rounded-lg border border-stone-200/90 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase font-mono tracking-wider text-swarna-700 bg-stone-50 px-2 py-0.5 rounded">
                    {akhara.tradition}
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">HQ: {akhara.headquarters}</span>
                </div>

                <h3 className="font-serif text-sm font-medium text-stone-900">
                  {akhara.name}
                </h3>

                <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                  {akhara.description}
                </p>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] font-mono text-stone-500">
                  <span>Ishta: {akhara.ishtaDevta}</span>
                  <span>Est: {akhara.established}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </article>
    </main>
  );
}
