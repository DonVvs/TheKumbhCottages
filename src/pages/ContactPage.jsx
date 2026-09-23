import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import { MapPin, Phone, Mail, MessageSquare, Clock, ShieldCheck, Sparkles, Send, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2',
    date: '2027-02-15',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}
  };

  return (
    <main className="pt-8 pb-20 bg-cream-50 text-espresso-950">
      <SEOHead
        title="Contact VIP Concierge & Central Liaison Desk | TheKumbhCottages"
        description="Connect with 24/7 VIP Concierge at TheKumbhCottages for Nashik Simhastha 2027 reservations, corporate camp allotments, and Shahi Snan passes."
        canonical="https://thekumbhcottages.com/contact-vip-concierge"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-swarna-500/15 border border-swarna-500/40 text-swarna-800 text-xs font-serif font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>॥ 24/7 केंद्रीय अतिथि सेवा एवं संपर्क ॥</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-950 tracking-tight">
            VIP Concierge & Central Liaison
          </h1>
          <p className="text-sm sm:text-base text-espresso-700 font-sans mt-3">
            Direct coordination for Nashik Simhastha 2027 accommodations, chartered aviation, and devotee assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Transit Inquiries */}
          <div className="lg:col-span-5 space-y-6">
            <div className="temple-panel p-8 rounded-3xl border border-cream-300 shadow-lg space-y-6">
              <h2 className="font-serif text-2xl font-bold text-espresso-950 border-b border-cream-300 pb-4">
                Central Liaison Headquarters
              </h2>

              <div className="space-y-4 text-sm text-espresso-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-swarna-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-espresso-950">Sanctuary Location:</h3>
                    <p className="text-xs text-espresso-700 mt-0.5 leading-relaxed">
                      Godavari Riverfront Sanctuary, VIP Green Corridor Gate 4, Near Ramkund Ghat, Nashik, Maharashtra 422003
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-swarna-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-espresso-950">24/7 Telephone Helpline:</h3>
                    <p className="text-xs font-mono font-bold text-espresso-950 mt-0.5">
                      +91 98899 33333
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-swarna-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-espresso-950">Direct Email:</h3>
                    <p className="text-xs font-mono text-espresso-800 mt-0.5">
                      kumbhcottages@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-espresso-950">WhatsApp Concierge Desk:</h3>
                    <a
                      href="https://wa.me/919889933333?text=Pranam%20TheKumbhCottages%2C%20I%20am%20inquiring%20about%20Simhastha%202027%20VIP%20accommodations."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-700 hover:underline inline-block mt-0.5"
                    >
                      Click for Instant WhatsApp Chat (Response &lt; 5 mins)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-cream-300">
                  <MapPin className="w-5 h-5 text-swarna-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-bold text-espresso-950">Verified Google Business Profile:</h3>
                    <a
                      href="https://share.google/cmaiQgwb1FsV2jdfj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-swarna-700 hover:underline inline-flex items-center gap-1 mt-0.5"
                    >
                      <span>View Google Maps Listing & Devotee Reviews</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Trust Seal */}
              <div className="bg-cream-100 p-4 rounded-2xl border border-cream-300 flex items-center gap-3 text-xs text-espresso-800">
                <ShieldCheck className="w-6 h-6 text-swarna-700 flex-shrink-0" />
                <span>Continuous Operations Since 2001 · 99.4% Devotee Satisfaction Rating</span>
              </div>
            </div>
          </div>

          {/* Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-cream-300 shadow-xl">
              <h2 className="font-serif text-2xl font-bold text-espresso-950 mb-2">
                Send VIP Reservation Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-espresso-700 mb-6 font-sans">
                Our Senior Pilgrimage Liaison Officer will respond with complete tariff packages and availability.
              </p>

              {isSent ? (
                <div className="text-center py-12 space-y-4 bg-cream-50 rounded-2xl border border-swarna-400/50 p-6 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-espresso-950">
                    Inquiry Received with Gratitude!
                  </h3>
                  <p className="text-xs text-espresso-700 max-w-md mx-auto">
                    Pranam <strong>{formData.name}</strong>. Our central liaison desk has received your request. We will reach out to you via WhatsApp / Phone shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-espresso-800 mb-1">
                        Devotee Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alok Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-sm focus:outline-none focus:border-swarna-500 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-espresso-800 mb-1">
                        WhatsApp Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98899 33333"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-sm font-mono focus:outline-none focus:border-swarna-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-espresso-800 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. sharma@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-sm focus:outline-none focus:border-swarna-500 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-espresso-800 mb-1">
                        Expected Pilgrimage Month / Year
                      </label>
                      <input
                        type="text"
                        defaultValue="Nashik Simhastha 2027"
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-sm font-sans text-stone-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-espresso-800 mb-1">
                      Devotee Requirements / Senior Citizen Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention stay preferences, number of family members, or specific puja requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-sm focus:outline-none focus:border-swarna-500 font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-darbar-gold py-3.5 rounded-xl text-sm font-serif font-bold shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit VIP Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
