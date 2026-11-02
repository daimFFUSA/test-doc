/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavPage } from '../components/Navbar.tsx';
import {
  ArrowRight,
  User,
  Users,
  Sparkles,
  Building,
  Plus,
  Minus,
  CheckCircle2,
  Mail,
  ShieldCheck
} from 'lucide-react';

interface GetInvolvedPageProps {
  onNavigate: (page: NavPage) => void;
  initialDegree?: string;
  initialSponsors?: number;
}

export const GetInvolvedPage: React.FC<GetInvolvedPageProps> = ({
  onNavigate,
  initialDegree = 'Still deciding',
  initialSponsors = 10
}) => {
  const [activeTab, setActiveTab] = useState<'join' | 'build' | 'sponsor' | 'institutional'>('build');
  const [sponsorsCount, setSponsorsCount] = useState<number>(initialSponsors);
  const [degreeChoice, setDegreeChoice] = useState<string>(
    initialDegree.includes('Bachelor') ? 'Bachelor of Biblical Studies' :
    initialDegree.includes('Master') ? 'Master of Arts' : 'Still deciding'
  );

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    churchGroup: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const calculateMonthly = () => {
    if (degreeChoice === 'Bachelor of Biblical Studies') return '$216';
    if (degreeChoice === 'Master of Arts') return '$258';
    return '$216';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'What can sponsors send in the mail?',
      a: 'Paper correspondence only: handwritten or typed letters, greeting cards, and family photos where permitted by the facility mailroom rules. No cash, no stamps in envelopes, and no outside packages (all course textbooks and exams ship directly from BCA).'
    },
    {
      q: 'Are volunteers screened?',
      a: 'Yes. All band sponsors complete basic orientation and review our volunteer conduct agreement. Facilities do not require full background clearances for correspondence students, but we hold sponsors strictly to facility mail regulations.'
    },
    {
      q: 'Can I write about my family and church?',
      a: 'Yes, this is encouraged! Incarcerated students consistently share that hearing normal family stories, church life updates, sermon thoughts, and daily prayers is the most humanizing part of receiving their monthly letter.'
    },
    {
      q: 'What if my student is transferred or released?',
      a: 'BCA correspondence courses are fully portable. If a student is transferred to another state or facility, his coursework follows him. If he is released before graduation, his sponsorship continues so he can finish his degree while transitioning home.'
    },
    {
      q: 'How is the money handled?',
      a: 'Funds flow through a centralized 501(c)(3) tuition account via recurring monthly draft ($18/mo per person in a band of ten). 100% of student funds are credited directly to Bible Colleges of America to cover courses, books, and grading.'
    }
  ];

  return (
    <div className="text-[#33383D]">
      {/* 1. HERO SECTION: Canvas A (Warm Parchment Linen with Script Texture) */}
      <section className="bg-script-texture pt-20 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#E2DFD8]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F] block">
            GET INVOLVED
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#1A4B54] leading-[1.14] tracking-tight">
            One form. Four ways in.
          </h1>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto pb-4">
            Whether you're one person with $18 or a facility with three hundred residents, there is a clear way to start this month.
          </p>

          {/* 4 Segmented Tab Bar */}
          <div className="inline-flex flex-wrap items-center justify-center p-1 bg-white/80 border border-[#D5D2CA] rounded-[4px] gap-1 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('join')}
              className={`px-4 py-2 text-xs font-semibold rounded-[4px] flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'join'
                  ? 'bg-[#1A4B54] text-white shadow-xs'
                  : 'text-[#4B5563] hover:text-[#1A4B54] hover:bg-stone-100/60'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Join a Band</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('build')}
              className={`px-4 py-2 text-xs font-semibold rounded-[4px] flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'build'
                  ? 'bg-[#1A4B54] text-white shadow-xs'
                  : 'text-[#4B5563] hover:text-[#1A4B54] hover:bg-stone-100/60'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Build a Band</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('sponsor')}
              className={`px-4 py-2 text-xs font-semibold rounded-[4px] flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'sponsor'
                  ? 'bg-[#1A4B54] text-white shadow-xs'
                  : 'text-[#4B5563] hover:text-[#1A4B54] hover:bg-stone-100/60'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sponsor a Degree</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('institutional');
                onNavigate('leaders');
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-[4px] flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'institutional'
                  ? 'bg-[#1A4B54] text-white shadow-xs'
                  : 'text-[#4B5563] hover:text-[#1A4B54] hover:bg-stone-100/60'
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              <span>Institutional Placement</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. MAIN PLEDGE SECTION: Canvas D (Crisp Editorial White with Generous Padding) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8E6DF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#B85B3F] block">
                  REGISTRATION & PLEDGE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
                  Gather your ten
                </h2>
                <p className="text-xs sm:text-sm text-[#525B64] leading-relaxed">
                  Start with the core commitment. We match your circle with a qualified, chaplain-nominated student and provide complete correspondence materials.
                </p>
              </div>

              {/* Card 1: YOUR SELECTIONS */}
              <div className="bg-[#FAF8F3] border border-[#E2DFD8] rounded-[4px] p-6 shadow-xs space-y-4">
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#1A4B54] block">
                  YOUR SELECTIONS
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <div className="text-[10px] text-[#6B7280] uppercase tracking-wider mb-1 font-semibold">Sponsors</div>
                    <div className="font-serif text-2xl font-bold text-[#1A4B54]">{sponsorsCount}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#6B7280] uppercase tracking-wider mb-1 font-semibold">Degree</div>
                    <div className="font-serif text-xl font-bold text-[#1A4B54] truncate">
                      {degreeChoice === 'Bachelor of Biblical Studies' ? 'B.B.S.' :
                       degreeChoice === 'Master of Arts' ? 'M.A.' : 'Flexible'}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#6B7280] uppercase tracking-wider mb-1 font-semibold">Monthly total</div>
                    <div className="font-serif text-2xl font-bold text-[#B85B3F]">
                      {calculateMonthly()}
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-[#6B7280] pt-2 border-t border-[#E8E6DF]">
                  Core tuition is $180/month ($18/mo per person in a band of ten). You can customize anytime.
                </p>
              </div>

              {/* Card 2: TALK TO A PERSON */}
              <div className="bg-[#FAF8F3] border border-[#E2DFD8] rounded-[4px] p-6 shadow-xs space-y-2">
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#1A4B54] block">
                  TALK TO A PERSON
                </span>
                <div className="text-xs font-bold text-[#1A4B54]">
                  Michael Woolstrum · National Director
                </div>
                <div>
                  <a
                    href="mailto:m.woolstrum@brokenchains.org"
                    className="text-xs text-[#1A4B54] hover:text-[#B85B3F] underline underline-offset-4 font-mono flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>m.woolstrum@brokenchains.org</span>
                  </a>
                </div>
                <p className="text-xs text-[#525B64] leading-relaxed pt-2">
                  Band formation, facility partnerships, student matching — he handles all three personally.
                </p>
              </div>
            </div>

            {/* Right Column (7 cols): Pledge Form Container */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF8F3] border border-[#E2DFD8] rounded-[4px] p-8 sm:p-9 shadow-md">
                {submitted ? (
                  <div className="text-center py-10 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-[#1A4B54] mx-auto" />
                    <h3 className="font-serif text-2xl font-bold text-[#1A4B54]">
                      Pledge Received
                    </h3>
                    <p className="text-xs text-[#525B64] max-w-md mx-auto">
                      Thank you, {formData.fullName || 'friend'}. Michael Woolstrum will follow up with your band's welcome packet, student matching timeline, and giving treasury setup.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#374151] mb-1">
                          Full name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-[#D5D2CA] rounded-[4px] bg-white focus:outline-none focus:ring-1 focus:ring-[#1A4B54]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#374151] mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-[#D5D2CA] rounded-[4px] bg-white focus:outline-none focus:ring-1 focus:ring-[#1A4B54]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#374151] mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          placeholder="(555) 555-0100"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-[#D5D2CA] rounded-[4px] bg-white focus:outline-none focus:ring-1 focus:ring-[#1A4B54]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#374151] mb-1">
                          Church or group
                        </label>
                        <input
                          type="text"
                          placeholder="Group or congregation"
                          value={formData.churchGroup}
                          onChange={(e) => setFormData({ ...formData, churchGroup: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-[#D5D2CA] rounded-[4px] bg-white focus:outline-none focus:ring-1 focus:ring-[#1A4B54]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#374151] mb-1">
                          Sponsors in band
                        </label>
                        <select
                          value={sponsorsCount}
                          onChange={(e) => setSponsorsCount(parseInt(e.target.value))}
                          className="w-full px-3 py-2 text-xs border border-[#D5D2CA] rounded-[4px] bg-white focus:outline-none focus:ring-1 focus:ring-[#1A4B54]"
                        >
                          <option value="4">4 sponsors</option>
                          <option value="6">6 sponsors</option>
                          <option value="8">8 sponsors</option>
                          <option value="10">10 sponsors (Classic band)</option>
                          <option value="12">12 sponsors</option>
                          <option value="15">15 sponsors</option>
                          <option value="20">20 sponsors</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#374151] mb-1">
                          Degree to fund
                        </label>
                        <select
                          value={degreeChoice}
                          onChange={(e) => setDegreeChoice(e.target.value)}
                          className="w-full px-3 py-2 text-xs border border-[#D5D2CA] rounded-[4px] bg-white focus:outline-none focus:ring-1 focus:ring-[#1A4B54]"
                        >
                          <option value="Still deciding">Still deciding</option>
                          <option value="Bachelor of Biblical Studies">Bachelor of Biblical Studies ($216/mo)</option>
                          <option value="Master of Arts">Master of Arts ($258/mo)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1">
                        Anything we should know?
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Band size, timeline, facility questions, prayer concerns — whatever's on your mind."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-[#D5D2CA] rounded-[4px] bg-white focus:outline-none focus:ring-1 focus:ring-[#1A4B54]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="bg-[#B85B3F] hover:bg-[#A34E35] text-white text-xs font-semibold px-5 py-2.5 rounded-[4px] flex items-center gap-2 transition-colors cursor-pointer shadow-md active:scale-95"
                      >
                        <span>Send my pledge</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[10px] text-[#6B7280] pt-2">
                      No payment is collected on this form. We'll confirm details and set up your band's giving before any money moves.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VOLUNTEER & MAIL GUIDELINES: Canvas C (Soft Sage Tint) */}
      <section className="bg-[#E9EFEA] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#D8E2DA]">
        <div className="max-w-4xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F] block text-center mb-3">
            VOLUNTEER & MAIL GUIDELINES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight text-center mb-10">
            The questions sponsors ask first
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#D5DDD6] rounded-[4px] overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAFAF8] transition-colors"
                  >
                    <span className="font-medium text-xs sm:text-sm text-[#1A4B54]">
                      {faq.q}
                    </span>
                    <span className="text-[#B85B3F] shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 pt-1 text-xs text-[#525B64] leading-relaxed border-t border-[#F0ECE1]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
