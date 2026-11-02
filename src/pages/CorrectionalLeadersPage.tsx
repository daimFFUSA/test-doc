/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavPage } from '../components/Navbar.tsx';
import {
  ArrowRight,
  Package,
  Mail,
  Users,
  FileCheck2,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Building2,
  Lock
} from 'lucide-react';

interface CorrectionalLeadersPageProps {
  onNavigate: (page: NavPage) => void;
}

export const CorrectionalLeadersPage: React.FC<CorrectionalLeadersPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    facilityName: '',
    stateSystem: '',
    role: '',
    workEmail: '',
    currentPrograms: '',
    questions: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="text-[#33383D]">
      {/* 1. HERO SECTION: High-contrast Dark Slate Canvas B (Deep Obsidian Forest with Circles Texture) */}
      <section className="bg-circles-texture py-24 px-4 sm:px-6 lg:px-8 text-white border-b border-[#233F3B]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/10 border border-white/20 text-[#C86D3B] text-[11px] font-bold tracking-[0.2em] uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CORRECTIONAL FACILITY ADMINISTRATION</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.12] tracking-tight">
            Fund nothing. Risk little. Measure everything.
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Broken Chains is built for institutions that have seen programs come and go. This page is the administrator's perspective: zero cost, mailroom security compliance, and audited quarterly metrics returned to your desk.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#packet-form"
              className="bg-[#B85B3F] hover:bg-[#A34E35] text-white text-xs font-semibold px-5 py-2.5 rounded-[4px] flex items-center gap-2 transition-colors cursor-pointer shadow-md active:scale-95"
            >
              <span>Request the placement packet</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => onNavigate('impact')}
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold px-5 py-2.5 rounded-[4px] transition-colors cursor-pointer"
            >
              See what we track
            </button>
          </div>
        </div>
      </section>

      {/* 2. ZERO FACILITY COST: Canvas A (Warm Parchment Linen with Script Texture) */}
      <section className="bg-script-texture py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2DFD8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
              ZERO FACILITY COST
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
              Your budget never sees an invoice
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Everything a band funds — tuition, texts, workbooks, mail postage, and grading — is paid by private sponsors on the outside.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E2DFD8] rounded-[4px] p-7 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-[4px] bg-[#FCEFEA] text-[#B85B3F] flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1A4B54]">Tuition is 100% private</h3>
              <p className="text-xs text-[#525B64] leading-relaxed">
                Every seat is underwritten by a dedicated band of ten outside supporters. No state funds, no federal grant matching, zero institutional line items.
              </p>
            </div>

            <div className="bg-white border border-[#E2DFD8] rounded-[4px] p-7 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-[4px] bg-[#FCEFEA] text-[#B85B3F] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1A4B54]">Mail stays in your channels</h3>
              <p className="text-xs text-[#525B64] leading-relaxed">
                All materials flow through standard mailroom procedures — identical screening, approved-vendor vetting, and volume protocols as any correspondence course.
              </p>
            </div>

            <div className="bg-white border border-[#E2DFD8] rounded-[4px] p-7 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-[4px] bg-[#FCEFEA] text-[#B85B3F] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1A4B54]">Zero new staff burden</h3>
              <p className="text-xs text-[#525B64] leading-relaxed">
                The facility chaplaincy coordinates nominations and proctors midterm/final exams. Our outside director handles all donor stewardship and band communications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAILROOM COMPLIANCE: Canvas C (Soft Sage Tint with Screened Folders Photo) */}
      <section className="bg-[#E9EFEA] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D8E2DA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Screened Folders & Inspection Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[4px] overflow-hidden shadow-lg border border-[#D5DDD6]">
                <img
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80"
                  alt="Official administrative correspondence folders, screened documents, and compliance paperwork"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122320]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs drop-shadow-sm">
                  <p className="font-serif italic text-sm text-stone-100">
                    "Softcover texts, staple-free bindings, and pre-cleared correspondence protocols."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Mailroom Compliance Details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
                DOC & MAILROOM COMPLIANCE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
                Built to clear your mailroom, not test it
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                Our materials guidelines were drafted from state department of corrections mail policies across the Midwest. Zero contraband risk, zero digital infrastructure.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#B85B3F]" />
                    <h4 className="font-serif text-sm font-bold text-[#1A4B54]">Paper-Only Specifications</h4>
                  </div>
                  <p className="text-xs text-[#525B64] leading-relaxed">
                    Softcover texts, glue-bound workbooks, standard weight envelopes. No metal coils, no media disks, no electronic storage devices.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#B85B3F]" />
                    <h4 className="font-serif text-sm font-bold text-[#1A4B54]">Approved Vendor Invoicing</h4>
                  </div>
                  <p className="text-xs text-[#525B64] leading-relaxed">
                    Course shipments arrive directly from Bible Colleges of America's registrar under institutional credentials with itemized packing slips.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#B85B3F]" />
                    <h4 className="font-serif text-sm font-bold text-[#1A4B54]">Strict Sponsor Vetting</h4>
                  </div>
                  <p className="text-xs text-[#525B64] leading-relaxed">
                    Sponsors sign written covenants agreeing to facility rules. Violators are immediately removed and banned by our national director.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#B85B3F]" />
                    <h4 className="font-serif text-sm font-bold text-[#1A4B54]">Rapid Policy Alignment</h4>
                  </div>
                  <p className="text-xs text-[#525B64] leading-relaxed">
                    Any facility regulation changes are propagated across all 10 band members within 5 business days.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SAFETY & BEHAVIORAL DATA: Canvas D (Crisp Editorial White) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8E6DF]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
              SAFETY & BEHAVIORAL DATA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
              You get an audited quarterly report, not a progress plea
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Every participating resident is tracked against his own pre-enrollment baseline: disciplinary write-ups, program attendance, and coursework pace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-[#FAF8F3] border border-[#E2DFD8] rounded-[4px] p-8 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-[4px] bg-[#1A4B54] text-white flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A4B54]">
                What the quarterly report details
              </h3>
              <ul className="space-y-3 text-xs text-[#525B64] leading-relaxed list-disc pl-5">
                <li>Disciplinary write-ups per quarter vs. the student's personal pre-enrollment baseline</li>
                <li>Weekly study hours logged in unit or education wing</li>
                <li>Completed credits and projected graduation timeline</li>
                <li>Aggregate unit-level trends when hosting cohorts of 3+ students</li>
              </ul>
            </div>

            <div className="bg-[#122320] text-white rounded-[4px] p-8 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-[4px] bg-white/10 text-[#C86D3B] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Why outside sponsors stay disciplined
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Sponsors sign binding agreements committing never to call the warden's office, never to offer unauthorized legal advice, and never to send prohibited enclosures. All inquiries funnel through our staff director.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 text-[11px] text-[#C86D3B] font-mono">
                10 accountable adults · 1 student · Zero facility distraction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PLACEMENT PACKET FORM: Canvas A (Warm Parchment Linen with Script Texture) */}
      <section id="packet-form" className="bg-script-texture py-20 px-4 sm:px-6 lg:px-8 border-t border-[#E2DFD8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
              PLACEMENT PACKET
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
              Request the institutional review packet
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              For wardens, deputy superintendents, chaplains, and education directors. The packet includes the model facility agreement, tracking methodology, and a sample quarterly audit.
            </p>
          </div>

          <div className="bg-white border border-[#E2DFD8] rounded-[4px] p-8 sm:p-10 shadow-lg">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#1A4B54] mx-auto" />
                <h3 className="font-serif text-xl font-bold text-[#1A4B54]">
                  Review Packet Transmitted
                </h3>
                <p className="text-xs text-[#525B64] max-w-md mx-auto">
                  Thank you. Our correctional coordinator will transmit the security documentation and placement agreement directly to your official email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1">
                      Facility name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kokomo Correctional Facility"
                      value={formData.facilityName}
                      onChange={(e) => setFormData({ ...formData, facilityName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#D5D2CA] rounded-[4px] bg-[#FAF8F3] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1A4B54]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1">
                      State / system *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Indiana Department of Correction"
                      value={formData.stateSystem}
                      onChange={(e) => setFormData({ ...formData, stateSystem: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#D5D2CA] rounded-[4px] bg-[#FAF8F3] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1A4B54]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1">
                      Your administrative role *
                    </label>
                    <select
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#D5D2CA] rounded-[4px] bg-[#FAF8F3] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1A4B54]"
                    >
                      <option value="">Select a role</option>
                      <option value="Warden / Superintendent">Warden / Superintendent</option>
                      <option value="Deputy Director / Programs">Deputy Director / Programs</option>
                      <option value="Supervisory Chaplain">Supervisory Chaplain</option>
                      <option value="Facility Chaplain">Facility Chaplain</option>
                      <option value="Education Director">Education Director</option>
                      <option value="Other Administrator">Other Administrator</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#374151] mb-1">
                      Official work email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="warden@doc.state.gov"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-[#D5D2CA] rounded-[4px] bg-[#FAF8F3] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1A4B54]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#374151] mb-1">
                    Current educational & faith programs in your facility
                  </label>
                  <input
                    type="text"
                    placeholder="Briefly: existing correspondence or volunteer classes"
                    value={formData.currentPrograms}
                    onChange={(e) => setFormData({ ...formData, currentPrograms: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#D5D2CA] rounded-[4px] bg-[#FAF8F3] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1A4B54]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#374151] mb-1">
                    Questions for our coordinator
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mail volume, security protocols, cohort nominations — anything on your mind."
                    value={formData.questions}
                    onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-[#D5D2CA] rounded-[4px] bg-[#FAF8F3] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1A4B54]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#B85B3F] hover:bg-[#A34E35] text-white text-xs font-semibold px-5 py-2.5 rounded-[4px] flex items-center gap-2 transition-colors cursor-pointer shadow-md active:scale-95"
                  >
                    <span>Send placement request</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-[10px] text-[#6B7280] pt-1">
                  We treat all institutional inquiries with full administrative confidentiality. Handled directly by our National Director.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
