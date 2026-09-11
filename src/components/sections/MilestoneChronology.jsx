import React, { useState } from 'react';
import { MILESTONES_CHRONOLOGY } from '../../data/companyData';

export default function MilestoneChronology() {
  const [selectedMilestone, setSelectedMilestone] = useState(MILESTONES_CHRONOLOGY[MILESTONES_CHRONOLOGY.length - 1]);

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase font-sans tracking-[0.25em] text-swarna-700 font-medium mb-3">
            <span className="w-6 h-px bg-swarna-600/60" />
            <span>Quarter-Century Historical Provenance</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-stone-900 leading-[1.2] tracking-tight">
            Milestones of Continuous Seva (2001–2027)
          </h2>
          <p className="text-sm text-stone-600 font-sans font-light mt-3 leading-relaxed">
            Twenty-five consecutive years across four sacred pilgrimage circuits: Prayagraj, Ujjain, Haridwar, and Nashik.
          </p>
        </div>

        {/* Minimalist Year Selectors */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {MILESTONES_CHRONOLOGY.map((item) => {
            const isSelected = selectedMilestone.year === item.year;
            return (
              <button
                key={item.year}
                onClick={() => setSelectedMilestone(item)}
                className={`px-4 py-2 rounded font-mono text-xs transition-all flex-shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-white font-medium shadow-xs'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
                }`}
              >
                {item.year}
              </button>
            );
          })}
        </div>

        {/* Selected Milestone Detail Banner */}
        <div className="bg-white rounded-lg p-8 sm:p-10 border border-stone-200/90 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-stone-100 pb-6 lg:pb-0 lg:pr-8 space-y-1">
            <div className="font-mono text-3xl sm:text-4xl font-light text-stone-900">
              {selectedMilestone.year}
            </div>
            <div className="text-sm font-serif text-swarna-700 font-medium">
              {selectedMilestone.location}
            </div>
            <div className="text-xs font-mono text-stone-500 pt-1">
              {selectedMilestone.scale}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-2">
            <h3 className="font-serif text-lg sm:text-xl font-light text-stone-900">
              {selectedMilestone.event}
            </h3>
            <p className="text-sm text-stone-600 font-sans font-light leading-relaxed">
              {selectedMilestone.description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

