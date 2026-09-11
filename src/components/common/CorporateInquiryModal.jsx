import React, { useState } from 'react';
import { X, Check, MessageSquare, Send } from 'lucide-react';

export default function CorporateInquiryModal({ isOpen, onClose, defaultDestination = 'Nashik Simhastha 2027' }) {
  const [inquiryType, setInquiryType] = useState('corporate-camp');
  const [destination, setDestination] = useState(defaultDestination);
  const [organizationName, setOrganizationName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [estimatedGuests, setEstimatedGuests] = useState('20-50 Devotees');
  const [requirements, setRequirements] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppURL = () => {
    const message = `*PRANAM / CORPORATE & GROUP INQUIRY*
*The Kumbh Cottages Parent Liaison Desk*
━━━━━━━━━━━━━━━━━━━━━━━
• *Organization:* ${organizationName || 'Corporate Devotee Group'}
• *Contact:* ${contactPerson || 'N/A'}
• *Phone:* ${phone || 'N/A'}
• *Email:* ${email || 'N/A'}
• *Destination:* ${destination}
• *Category:* ${inquiryType}
• *Delegation:* ${estimatedGuests}
• *Requirements:* ${requirements || 'Turnkey camp setup, private Annakshetra, and VIP passes'}
━━━━━━━━━━━━━━━━━━━━━━━`;

    return `https://wa.me/919889933333?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      
      <div className="relative w-full max-w-lg bg-white text-stone-900 rounded-lg border border-stone-200 shadow-xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-[#0E0A07] text-white px-4 py-3 flex items-center justify-between border-b border-white/10">
          <div>
            <h3 className="font-serif text-sm font-light text-white">
              Corporate & VIP Liaison Portal
            </h3>
            <p className="text-[9px] text-stone-400 font-sans font-light">
              The Kumbh Cottages · Est. 2001
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-3.5 text-xs">
          
          {isSubmitted ? (
            <div className="text-center py-5 space-y-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <Check className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-sm font-medium text-stone-900">
                Inquiry Logged with Directorate
              </h4>
              <p className="text-xs text-stone-600 max-w-xs mx-auto font-light">
                Pranam <strong>{contactPerson}</strong>. Your dossier for <strong>{organizationName}</strong> has been received.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-darbar-gold px-3.5 py-1.5 rounded text-[11px] uppercase tracking-wider font-medium inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Transmit to WhatsApp Desk</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block uppercase text-[9px] font-medium text-stone-500 mb-0.5">
                    Destination *
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-stone-400 font-sans"
                  >
                    <option value="Nashik Simhastha 2027">Nashik Simhastha 2027 (Godavari)</option>
                    <option value="Ujjain Simhastha Campus">Ujjain Simhastha Campus (Shipra)</option>
                    <option value="Haridwar Ganga Retreat">Haridwar Ganga Retreat (Ganga)</option>
                    <option value="Prayagraj Foundation">Prayagraj Founding Base (Triveni Sangam)</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase text-[9px] font-medium text-stone-500 mb-0.5">
                    Delegation Size
                  </label>
                  <select
                    value={estimatedGuests}
                    onChange={(e) => setEstimatedGuests(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-stone-400 font-sans"
                  >
                    <option value="10-25 Devotees">10 – 25 Devotees</option>
                    <option value="25-60 Devotees">25 – 60 Devotees</option>
                    <option value="60-150 Devotees">60 – 150 Devotees</option>
                    <option value="150+ Devotees">150+ Devotees</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase text-[9px] font-medium text-stone-500 mb-0.5">
                    Organization / Trust *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Singhania Group"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-stone-400 font-sans"
                  />
                </div>

                <div>
                  <label className="block uppercase text-[9px] font-medium text-stone-500 mb-0.5">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alok Sharma"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-stone-400 font-sans"
                  />
                </div>

                <div>
                  <label className="block uppercase text-[9px] font-medium text-stone-500 mb-0.5">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98899 33333"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-stone-400 font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block uppercase text-[9px] font-medium text-stone-500 mb-0.5">
                  Specific Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention stay preferences, private dining, elder mobility..."
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-stone-400 font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-darbar-gold py-2 rounded text-[11px] uppercase tracking-wider font-medium flex items-center justify-center gap-1.5"
              >
                <Send className="w-3 h-3" />
                <span>Submit Inquiry</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
