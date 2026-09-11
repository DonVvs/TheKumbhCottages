import React, { useState } from 'react';
import { X, Check, Calendar, Users, Sparkles, ShieldCheck, ChevronRight, ChevronLeft, MessageSquare, Phone, User, Mail, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STAYS_DATA, ADD_ONS } from '../../data/staysData';
import { formatPrice } from '../../utils/priceFormatter';
import { trackClarityEvent, upgradeClaritySession } from '../../utils/clarity';

export default function BookingEngineModal({ isOpen, onClose, initialStayId = null, currency = 'INR' }) {
  const [step, setStep] = useState(1);
  const [selectedStayId, setSelectedStayId] = useState(initialStayId || STAYS_DATA[0].id);
  const [checkInDate, setCheckInDate] = useState('2027-02-15');
  const [checkOutDate, setCheckOutDate] = useState('2027-02-18');
  const [guestsCount, setGuestsCount] = useState(2);
  const [selectedAddOns, setSelectedAddOns] = useState(['vip-shahi-snan-pass']);
  
  // Devotee info
  const [devoteeName, setDevoteeName] = useState('');
  const [devoteePhone, setDevoteePhone] = useState('');
  const [devoteeEmail, setDevoteeEmail] = useState('');
  const [devoteeCity, setDevoteeCity] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const selectedStay = STAYS_DATA.find(s => s.id === selectedStayId) || STAYS_DATA[0];

  // Calculate nights
  const calculateNights = () => {
    try {
      const d1 = new Date(checkInDate);
      const d2 = new Date(checkOutDate);
      const diffTime = Math.abs(d2 - d1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch (e) {
      return 3;
    }
  };

  const nights = calculateNights();
  const stayBasePrice = (selectedStay?.priceINR || 28000) * nights;
  const addOnsTotalINR = selectedAddOns.reduce((sum, id) => {
    const item = ADD_ONS.find(a => a.id === id);
    return sum + (item?.priceINR || 0);
  }, 0);

  const subtotalINR = stayBasePrice + addOnsTotalINR;
  const taxesINR = Math.round(subtotalINR * 0.18);
  const grandTotalINR = subtotalINR + taxesINR;
  const depositRequiredINR = Math.round(grandTotalINR * 0.25);

  const toggleAddOn = (id) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter(item => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    trackClarityEvent('submit_reservation');
    upgradeClaritySession('booking_token_confirmed');

    // Trigger confetti explosion
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#D97706', '#8E2428', '#FAF7F2']
      });
    } catch (err) {}
  };

  const getWhatsAppURL = () => {
    const addOnsNames = selectedAddOns.map(id => ADD_ONS.find(a => a.id === id)?.name).filter(Boolean).join(', ') || 'None';
    const message = `*JAI SHREE RAM / PRANAM THE KUMBH COTTAGES*
*Booking Token Reservation Request*
━━━━━━━━━━━━━━━━━━━━━━━
• *Devotee Name:* ${devoteeName || 'Pilgrim Devotee'}
• *Phone:* ${devoteePhone || 'N/A'}
• *City / Origin:* ${devoteeCity || 'N/A'}
• *Stay Category:* ${selectedStay.name}
• *Dates:* ${checkInDate} to ${checkOutDate} (${nights} Nights)
• *Devotees:* ${guestsCount} Guests
• *VIP Inclusions:* ${addOnsNames}
• *Estimated Total:* ${formatPrice(grandTotalINR, currency)} (incl. 18% GST)
• *25% Token Deposit:* ${formatPrice(depositRequiredINR, currency)}
• *Special Requests:* ${specialRequests || 'Elder care / ground floor preference'}
━━━━━━━━━━━━━━━━━━━━━━━
Please confirm inventory availability for Nashik Simhastha 2027.`;

    return `https://wa.me/919889933333?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      <div className="relative w-full max-w-4xl bg-[#FAF7F2] text-espresso-950 rounded-2xl sm:rounded-3xl border border-swarna-400/50 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header Bar */}
        <div className="bg-[#1A120B] text-white px-6 py-4 flex items-center justify-between border-b border-swarna-400/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-swarna-400/50 overflow-hidden flex-shrink-0">
              <img src="/assets/brand/emblem.webp" alt="Seal" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg text-swarna-200">
                Sovereign Sanctuary Reservation Engine
              </h3>
              <p className="text-[11px] text-stone-400 font-sans">
                Nashik Simhastha 2027 · Est. 2001 · 25% Token Confirmation
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-stone-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Progress Bar */}
        {!isSubmitted && (
          <div className="bg-cream-200 border-b border-cream-300 px-6 py-3 flex items-center justify-between text-xs font-serif">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-espresso-950 font-bold' : 'text-stone-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-swarna-500 text-espresso-950 font-bold' : 'bg-stone-300'}`}>1</span>
              <span className="hidden sm:inline">Select Sanctuary</span>
            </div>
            <span className="text-stone-300">──</span>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-espresso-950 font-bold' : 'text-stone-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-swarna-500 text-espresso-950 font-bold' : 'bg-stone-300'}`}>2</span>
              <span className="hidden sm:inline">Dates & Devotees</span>
            </div>
            <span className="text-stone-300">──</span>
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-espresso-950 font-bold' : 'text-stone-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? 'bg-swarna-500 text-espresso-950 font-bold' : 'bg-stone-300'}`}>3</span>
              <span className="hidden sm:inline">VIP Inclusions</span>
            </div>
            <span className="text-stone-300">──</span>
            <div className={`flex items-center gap-2 ${step >= 4 ? 'text-espresso-950 font-bold' : 'text-stone-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 4 ? 'bg-swarna-500 text-espresso-950 font-bold' : 'bg-stone-300'}`}>4</span>
              <span className="hidden sm:inline">Confirmation</span>
            </div>
          </div>
        )}

        {/* Modal Body Container (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: CATEGORY SELECTION */}
          {step === 1 && !isSubmitted && (
            <div className="space-y-4">
              <div className="text-center sm:text-left">
                <h4 className="font-serif text-xl font-bold text-espresso-950">Choose Your Stay Category</h4>
                <p className="text-xs text-espresso-700">All stays include pure A2 desi ghee Annakshetra dining and 24/7 senior citizen assistance.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {STAYS_DATA.map((stay) => {
                  const isSelected = selectedStayId === stay.id;
                  return (
                    <div
                      key={stay.id}
                      onClick={() => setSelectedStayId(stay.id)}
                      className={`cursor-pointer rounded-2xl p-4 border-2 transition-all duration-300 flex flex-col justify-between ${
                        isSelected
                          ? 'border-swarna-500 bg-swarna-200/40 shadow-lg ring-2 ring-swarna-400/30'
                          : 'border-cream-300 bg-white hover:border-swarna-400/50'
                      }`}
                    >
                      <div className="flex gap-4">
                        <img
                          src={stay.image}
                          alt={stay.name}
                          className="w-24 h-20 rounded-xl object-cover border border-cream-300 flex-shrink-0"
                        />
                        <div>
                          <span className="inline-block text-[10px] uppercase font-bold text-kesar-600 tracking-wider">
                            {stay.badge}
                          </span>
                          <h5 className="font-serif font-bold text-base text-espresso-950">
                            {stay.name}
                          </h5>
                          <p className="text-xs text-espresso-600 line-clamp-2 mt-0.5">
                            {stay.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-cream-300 flex items-center justify-between">
                        <span className="font-mono font-bold text-base text-espresso-950">
                          {formatPrice(stay.priceINR, currency)} <span className="text-xs font-sans text-stone-500">/ night</span>
                        </span>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isSelected ? 'bg-swarna-500 text-espresso-950' : 'border border-stone-300'}`}>
                          {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: DATES & DEVOTEE CONFIGURATION */}
          {step === 2 && !isSubmitted && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-xl font-bold text-espresso-950">Select Dates & Number of Devotees</h4>
                <p className="text-xs text-espresso-700">Nashik Simhastha 2027 key dates and Shahi Snan periods.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-cream-300">
                <div>
                  <label className="block text-xs font-semibold uppercase text-espresso-800 tracking-wider mb-2">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-espresso-950 font-mono text-sm focus:outline-none focus:border-swarna-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-espresso-800 tracking-wider mb-2">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-espresso-950 font-mono text-sm focus:outline-none focus:border-swarna-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase text-espresso-800 tracking-wider mb-2">
                    Number of Devotees (Guests)
                  </label>
                  <div className="flex items-center gap-4">
                    {[1, 2, 3, 4, 6, 8].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setGuestsCount(num)}
                        className={`w-12 h-12 rounded-xl font-mono text-sm font-bold transition-all ${
                          guestsCount === num
                            ? 'bg-espresso-950 text-swarna-200 border-2 border-swarna-400 shadow-md'
                            : 'bg-cream-100 text-espresso-800 border border-cream-300 hover:border-swarna-400'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stay Summary Card */}
              <div className="bg-swarna-200/40 p-4 rounded-xl border border-swarna-400/40 flex items-center justify-between text-sm">
                <div>
                  <span className="text-xs uppercase text-espresso-700 tracking-wider font-semibold">Configured Duration</span>
                  <div className="font-serif font-bold text-espresso-950">{selectedStay.name} · {nights} Nights · {guestsCount} Devotees</div>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase text-espresso-700 tracking-wider">Base Tariff</span>
                  <div className="font-mono font-bold text-espresso-950">{formatPrice(stayBasePrice, currency)}</div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: VIP PILGRIMAGE INCLUSIONS */}
          {step === 3 && !isSubmitted && (
            <div className="space-y-4">
              <div>
                <h4 className="font-serif text-xl font-bold text-espresso-950">Select Sacred Rituals & VIP Add-ons</h4>
                <p className="text-xs text-espresso-700">Pre-arranged personalized seva and fast-track temple authorizations.</p>
              </div>

              <div className="space-y-3">
                {ADD_ONS.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center justify-between gap-4 ${
                        isChecked
                          ? 'border-swarna-500 bg-swarna-200/30 shadow-sm'
                          : 'border-cream-300 bg-white hover:border-swarna-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center ${isChecked ? 'bg-swarna-500 text-espresso-950' : 'border border-stone-300'}`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-serif font-bold text-sm text-espresso-950">{addon.name}</span>
                            <span className="text-[10px] bg-kesar-100 text-kesar-600 font-semibold px-2 py-0.5 rounded-full">{addon.category}</span>
                          </div>
                          <p className="text-xs text-espresso-700 mt-0.5">{addon.description}</p>
                        </div>
                      </div>

                      <div className="font-mono font-bold text-sm text-espresso-950 whitespace-nowrap">
                        +{formatPrice(addon.priceINR, currency)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: DEVOTEE INFORMATION & PAYMENT BREAKDOWN */}
          {step === 4 && !isSubmitted && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h4 className="font-serif text-xl font-bold text-espresso-950">Devotee Information & Reservation Token</h4>
                <p className="text-xs text-espresso-700">Fill in primary devotee details to issue your digital reservation token voucher.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border border-cream-300">
                <div>
                  <label className="block text-xs font-semibold uppercase text-espresso-800 mb-1">
                    Primary Devotee Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Sharma"
                    value={devoteeName}
                    onChange={(e) => setDevoteeName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-400 bg-cream-50 text-sm focus:outline-none focus:border-swarna-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-espresso-800 mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98899 33333"
                    value={devoteePhone}
                    onChange={(e) => setDevoteePhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-400 bg-cream-50 text-sm font-mono focus:outline-none focus:border-swarna-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-espresso-800 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. sharma@example.com"
                    value={devoteeEmail}
                    onChange={(e) => setDevoteeEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-400 bg-cream-50 text-sm focus:outline-none focus:border-swarna-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-espresso-800 mb-1">
                    City / Country of Origin
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai, Maharashtra"
                    value={devoteeCity}
                    onChange={(e) => setDevoteeCity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-400 bg-cream-50 text-sm focus:outline-none focus:border-swarna-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase text-espresso-800 mb-1">
                    Elder Care Assistance / Dietary Special Requests
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Mention if wheelchair or Jain chauvihar meal timings required..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-cream-400 bg-cream-50 text-sm focus:outline-none focus:border-swarna-500"
                  />
                </div>
              </div>

              {/* Financial Calculation Breakdown Table */}
              <div className="bg-[#1A120B] text-white p-6 rounded-2xl border border-swarna-400/40 space-y-3">
                <h5 className="font-serif text-swarna-300 text-sm uppercase tracking-wider">
                  Transparent Tariff & Deposit Calculation
                </h5>
                <div className="space-y-1.5 text-xs text-stone-300 border-b border-white/10 pb-3">
                  <div className="flex justify-between">
                    <span>{selectedStay.name} ({nights} nights × {formatPrice(selectedStay.priceINR, currency)})</span>
                    <span className="font-mono text-white">{formatPrice(stayBasePrice, currency)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Selected VIP Add-ons ({selectedAddOns.length} items)</span>
                    <span className="font-mono text-white">{formatPrice(addOnsTotalINR, currency)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-mono text-white">{formatPrice(subtotalINR, currency)}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Applicable Luxury GST (18%)</span>
                    <span className="font-mono text-stone-300">{formatPrice(taxesINR, currency)}</span>
                  </div>
                </div>

                <div className="flex justify-between text-base font-bold text-white pt-1">
                  <span>Grand Total (All-Inclusive)</span>
                  <span className="font-mono text-swarna-300 text-lg">{formatPrice(grandTotalINR, currency)}</span>
                </div>

                <div className="bg-swarna-500/20 border border-swarna-400/50 p-3 rounded-xl flex items-center justify-between text-xs text-swarna-200">
                  <span className="font-semibold">25% Advance Token Required to Lock Dates:</span>
                  <span className="font-mono font-bold text-sm text-swarna-300">{formatPrice(depositRequiredINR, currency)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-darbar-gold py-4 rounded-xl text-base font-serif font-bold shadow-xl flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Confirm Reservation Token & Generate Voucher</span>
              </button>
            </form>
          )}

          {/* CONFIRMATION / SUCCESS SCREEN */}
          {isSubmitted && (
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 border-2 border-emerald-500 flex items-center justify-center mx-auto shadow-lg">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-kesar-600 font-bold">
                  ॥ ॐ नमः शिवाय · शुभ संकल्प ॥
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950">
                  Reservation Token Initiated Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-espresso-700 max-w-xl mx-auto">
                  Pranam <strong>{devoteeName || 'Devotee'}</strong>. Your token request for <strong>{selectedStay.name}</strong> ({checkInDate} to {checkOutDate}) has been recorded with our central liaison desk.
                </p>
              </div>

              {/* Digital Pilgrim Pass Summary */}
              <div className="bg-white p-6 rounded-2xl border-2 border-swarna-400/60 max-w-md mx-auto text-left shadow-lg space-y-3">
                <div className="flex items-center justify-between border-b border-cream-300 pb-2">
                  <span className="text-xs uppercase font-semibold text-stone-500">Booking Reference</span>
                  <span className="font-mono font-bold text-xs text-espresso-950">#TKC-2027-SIMH-{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
                <div className="text-xs space-y-1 text-espresso-800">
                  <div><strong>Devotee:</strong> {devoteeName || 'Pilgrim Devotee'} ({devoteePhone})</div>
                  <div><strong>Sanctuary:</strong> {selectedStay.name}</div>
                  <div><strong>Duration:</strong> {nights} Nights ({guestsCount} Devotees)</div>
                  <div><strong>Total Tariff:</strong> {formatPrice(grandTotalINR, currency)} (18% GST Incl.)</div>
                  <div><strong>25% Advance Token:</strong> {formatPrice(depositRequiredINR, currency)}</div>
                </div>
              </div>

              {/* Instant WhatsApp 1-Click Action */}
              <div className="max-w-md mx-auto space-y-3">
                <a
                  href={getWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-darbar-gold py-3.5 px-6 rounded-xl text-sm font-serif font-bold shadow-xl flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 text-espresso-950" />
                  <span>Send Token to Central WhatsApp Liaison</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 text-xs text-stone-600 hover:text-stone-900 transition-colors"
                >
                  Close & Return to Sanctuary
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls (Steps 1 to 3) */}
        {!isSubmitted && (
          <div className="bg-cream-100 border-t border-cream-300 px-6 py-4 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="inline-flex items-center gap-1 text-xs font-serif text-espresso-800 hover:text-espresso-950 font-semibold"
              >
                <ChevronLeft className="w-4 h-4" /> Previous Step
              </button>
            ) : (
              <span className="text-xs text-stone-500 italic">25 Years of Trusted Seva</span>
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="btn-darbar-gold px-6 py-2.5 rounded-xl text-xs font-serif font-bold shadow-md flex items-center gap-1.5"
              >
                <span>Proceed to Step {step + 1}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : null}
          </div>
        )}

      </div>
    </div>
  );
}
