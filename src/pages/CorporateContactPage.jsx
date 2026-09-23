import React, { useState } from 'react';
import SEOHead from '../components/common/SEOHead';
import { MapPin, Phone, Mail, MessageSquare, Send, Check, Globe } from 'lucide-react';

export default function CorporateContactPage() {
  const [formData, setFormData] = useState({
    organization: '',
    name: '',
    phone: '',
    email: '',
    destination: 'Nashik Simhastha 2027',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <main className="pt-6 pb-16 bg-[#FAF8F5] text-stone-900">
      <SEOHead
        title="Corporate Directorate & Central Liaison | TheKumbhCottages (Est. 2001)"
        description="Connect with TheKumbhCottages Parent Executive Directorate for corporate camp allotments, acharya ashram setups, and institutional partnerships."
        canonical="https://thekumbhcottages.com/corporate-contact"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Page Header */}
        <div className="max-w-2xl mb-8">
          <div className="text-[10px] uppercase font-sans tracking-[0.2em] text-swarna-700 font-medium mb-1.5">
            Central Liaison
          </div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-stone-900 tracking-tight">
            Corporate Directorate & Central Liaison
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-sans font-light mt-1.5">
            Executive coordination for corporate leadership retreats, institutional delegations, and CSR Annadaan partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Headquarters Info */}
          <div className="lg:col-span-5 space-y-3">
            <div className="bg-white p-5 rounded-lg border border-stone-200/90 space-y-3 text-xs">
              <h2 className="font-serif text-sm font-medium text-stone-900 border-b border-stone-100 pb-2">
                Parent Executive Headquarters
              </h2>

              <div className="space-y-2.5 text-stone-700 font-light">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-stone-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-stone-900 block">Corporate Liaison Wing</strong>
                    <span>Connaught Place, New Delhi & Riverfront Sanctuary Directorate, Nashik, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-stone-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-stone-900 block">Telephone</strong>
                    <a href="tel:+919889933333" className="font-mono text-stone-900">+91 98899 33333</a>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 text-stone-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-stone-900 block">Email</strong>
                    <a href="mailto:kumbhcottages@gmail.com" className="text-stone-900">kumbhcottages@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-stone-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-stone-900 block">WhatsApp Liaison</strong>
                    <a
                      href="https://wa.me/919889933333?text=Pranam%20TheKumbhCottages%20Directorate%2C%20I%20am%20inquiring%20on%20behalf%20of%20our%20organization."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-900 hover:underline"
                    >
                      Connect on WhatsApp Desk ↗
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1 border-t border-stone-100">
                  <MapPin className="w-3.5 h-3.5 text-swarna-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-stone-900 block">Verified Google Business Profile</strong>
                    <a
                      href="https://share.google/cmaiQgwb1FsV2jdfj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-swarna-700 hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <span>View Google Maps & Reviews</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1 border-t border-stone-100">
                  <Globe className="w-3.5 h-3.5 text-swarna-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-medium text-stone-900 block">Official Facebook Channel</strong>
                    <a
                      href="https://www.facebook.com/thekumbhcottage/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-swarna-700 hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <span>facebook.com/thekumbhcottage</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 text-[10px] text-stone-500">
                Continuous Operations Since 2001 · ISO 9001:2015 & HACCP Compliant
              </div>
            </div>
          </div>

          {/* Minimalist Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-5 sm:p-6 rounded-lg border border-stone-200/90">
              <h2 className="font-serif text-sm font-medium text-stone-900 mb-1">
                Official Liaison & Group Inquiry
              </h2>
              <p className="text-xs text-stone-500 font-sans font-light mb-4">
                Submit details below. The executive desk responds within 2 business hours.
              </p>

              {isSent ? (
                <div className="p-4 bg-stone-50 border border-stone-200 rounded text-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-sm font-medium text-stone-900">
                    Inquiry Transmitted to Directorate
                  </h3>
                  <p className="text-xs text-stone-600 font-light">
                    Pranam. Your dossier request has been registered under priority allocation. Our central liaison officer will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 font-sans text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block uppercase text-[9px] font-medium text-stone-500 mb-0.5">
                        Organization / Family Office Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Singhania Trust / Tata Group"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-stone-400"
                      />
                    </div>

                    <div>
                      <label className="block uppercase text-[9px] font-medium text-stone-500 mb-0.5">
                        Authorized Representative Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-stone-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block uppercase text-[9px] font-medium text-stone-500 mb-0.5">
                        WhatsApp Contact *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98899 33333"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded border border-stone-200 bg-stone-50 text-xs font-mono focus:outline-none focus:border-stone-400"
                      />
                    </div>

                    <div>
                      <label className="block uppercase text-[9px] font-medium text-stone-500 mb-0.5">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. liaison@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-stone-400 font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block uppercase text-[9px] font-medium text-stone-500 mb-0.5">
                      Destination Circuit
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-stone-400 font-sans"
                    >
                      <option value="Nashik Simhastha 2027">Nashik Simhastha 2027 (Godavari)</option>
                      <option value="Ujjain Simhastha Campus">Ujjain Simhastha Campus (Shipra)</option>
                      <option value="Haridwar Ganga Retreat">Haridwar & Rishikesh Retreat (Ganga)</option>
                      <option value="Prayagraj Heritage Base">Prayagraj Founding Base (Triveni Sangam)</option>
                      <option value="Multi-Circuit Partnership">Multi-Circuit Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block uppercase text-[9px] font-medium text-stone-500 mb-0.5">
                      Delegation Requirements & Logistics
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Mention expected number of guests, private dining preferences, helipad permissions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-stone-400 font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-darbar-gold py-2 rounded text-[11px] uppercase tracking-wider font-medium flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3 h-3" />
                    <span>Submit Dossier</span>
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
