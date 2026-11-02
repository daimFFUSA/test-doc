/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavPage } from '../components/Navbar.tsx';
import {
  ArrowRight,
  Mail,
  FileText,
  CheckCircle,
  Clock,
  BookOpen,
  GraduationCap,
  ShieldCheck
} from 'lucide-react';

interface DegreesPageProps {
  onNavigate: (page: NavPage) => void;
  onSelectDegreeForPledge?: (degree: string) => void;
}

export const DegreesPage: React.FC<DegreesPageProps> = ({
  onNavigate,
  onSelectDegreeForPledge
}) => {
  const handlePledge = (degree: string) => {
    if (onSelectDegreeForPledge) {
      onSelectDegreeForPledge(degree);
    }
    onNavigate('get-involved');
  };

  return (
    <div className="text-[#33383D]">
      {/* 1. HERO SECTION: Full-Width Canvas B (Deep Obsidian Forest with Atmospheric Library Photo Backdrop) */}
      <section className="relative bg-circles-texture py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden border-b border-[#233F3B]">
        {/* Subtle Atmospheric Library Background Image with 80% Gradient Wash */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80"
            alt="Classic academic library study arches"
            className="w-full h-full object-cover opacity-20 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#122320] via-[#122320]/90 to-[#122320]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/10 border border-white/15 text-[#C86D3B] text-[11px] font-bold tracking-[0.2em] uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC DEGREES</span>
          </span>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.12] tracking-tight">
            Scripture, studied seriously, in a place few seminaries reach.
          </h1>
          
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Broken Chains funds two degrees from Bible Colleges of America — a Bachelor of Biblical Studies and a Master of Arts. Both are church-administered, correspondence-delivered, and built for the reality of a cell, a mailroom, and no internet connection.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handlePledge('Bachelor of Biblical Studies')}
              className="bg-[#B85B3F] hover:bg-[#A34E35] text-white px-5 py-2.5 rounded-[4px] text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-md"
            >
              <span>Fund a B.B.S. Student</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="#course-delivery"
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-5 py-2.5 rounded-[4px] text-xs font-semibold transition-colors cursor-pointer"
            >
              How correspondence works
            </a>
          </div>
        </div>
      </section>

      {/* 2. THE PROGRAMS: Canvas A (Warm Parchment Linen with Script Texture) */}
      <section className="bg-script-texture py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2DFD8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
              THE PROGRAMS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
              Two degrees. One standard.
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Full program cost includes tuition, textbooks, workbooks, and postage. A classic band of ten at $18/month covers the $180 core tuition; rounding up covers the full program cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Degree Card 1: B.B.S. */}
            <div className="bg-white border border-[#E2DFD8] rounded-[4px] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#1A4B54] tracking-wide">UNDERGRADUATE</span>
                  <span className="text-xs font-semibold bg-[#FCEFEA] text-[#B85B3F] px-2.5 py-0.5 rounded-[4px]">
                    $216/mo full program
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A4B54] mb-4">
                  Bachelor of Biblical Studies (B.B.S.)
                </h3>

                {/* Stats Box */}
                <div className="grid grid-cols-2 gap-4 bg-[#FAF8F3] border border-[#EFECE4] rounded-[4px] p-3.5 mb-5 text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#6B7280] block font-semibold">Length</span>
                    <span className="font-bold text-[#1A4B54] text-sm">≈ 4 years</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#6B7280] block font-semibold">Credit hours</span>
                    <span className="font-bold text-[#1A4B54] text-sm">120 credit hours</span>
                  </div>
                </div>

                <p className="text-xs text-[#525B64] leading-relaxed mb-6">
                  Old and New Testament survey, hermeneutics, systematic theology, homiletics, biblical counseling, and church history. The degree a pastor, chaplain's assistant, or teacher builds on.
                </p>
              </div>

              <button
                onClick={() => handlePledge('Bachelor of Biblical Studies')}
                className="w-full sm:w-auto self-start bg-[#1A4B54] hover:bg-[#12373E] text-white text-xs font-semibold px-5 py-2.5 rounded-[4px] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <span>Fund a B.B.S. student</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Degree Card 2: M.A. */}
            <div className="bg-white border border-[#E2DFD8] rounded-[4px] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#1A4B54] tracking-wide">GRADUATE</span>
                  <span className="text-xs font-semibold bg-[#FCEFEA] text-[#B85B3F] px-2.5 py-0.5 rounded-[4px]">
                    $258/mo full program
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A4B54] mb-4">
                  Master of Arts (M.A.)
                </h3>

                {/* Stats Box */}
                <div className="grid grid-cols-2 gap-4 bg-[#FAF8F3] border border-[#EFECE4] rounded-[4px] p-3.5 mb-5 text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#6B7280] block font-semibold">Length</span>
                    <span className="font-bold text-[#1A4B54] text-sm">≈ 2 years post-B.A.</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#6B7280] block font-semibold">Credit hours</span>
                    <span className="font-bold text-[#1A4B54] text-sm">36 credit hours</span>
                  </div>
                </div>

                <p className="text-xs text-[#525B64] leading-relaxed mb-6">
                  Advanced exegesis in original languages, homiletics at a graduate level, pastoral theology, and leadership. For students called to teach, counsel, and shepherd fellowships after release.
                </p>
              </div>

              <button
                onClick={() => handlePledge('Master of Arts')}
                className="w-full sm:w-auto self-start bg-[#1A4B54] hover:bg-[#12373E] text-white text-xs font-semibold px-5 py-2.5 rounded-[4px] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <span>Fund an M.A. student</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COURSE DELIVERY: 40/60 Split with Physical Binder Flat-Lay Photo (Canvas D: Crisp White) */}
      <section id="course-delivery" className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8E6DF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (40%): Flat-lay photograph of correspondence binders, syllabi, study pens */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[4px] overflow-hidden shadow-lg border border-[#E2DFD8]">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80"
                  alt="Physical correspondence study materials, notebooks, binder, and pen"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122320]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs drop-shadow-sm">
                  <p className="font-serif italic text-sm text-stone-100">
                    "Printed binders, sealed exam packets, and three decades of mailroom compliance."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (60%): Designed for walls, not wi-fi */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
                PEDAGOGY IN SECURE FACILITIES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
                Designed for walls, not wi-fi
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                BCA has spent three decades refining correspondence education for environments traditional campuses never built for. No tablets, no video streaming, no internet dependency.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#B85B3F]" />
                    <h4 className="font-serif text-sm font-bold text-[#1A4B54]">Mailroom-native packets</h4>
                  </div>
                  <p className="text-xs text-[#525B64] leading-relaxed">
                    Course packets, workbooks, and transcripts move through existing facility mail procedures with zero digital footprint.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#B85B3F]" />
                    <h4 className="font-serif text-sm font-bold text-[#1A4B54]">Paper-first coursework</h4>
                  </div>
                  <p className="text-xs text-[#525B64] leading-relaxed">
                    Physical textbooks and written assignments that can be completed at a desk in a cell or in an education wing.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#B85B3F]" />
                    <h4 className="font-serif text-sm font-bold text-[#1A4B54]">Chaplain-proctored exams</h4>
                  </div>
                  <p className="text-xs text-[#525B64] leading-relaxed">
                    Midterms and finals are sealed in tamper-evident envelopes, proctored on-site, and returned to BCA for faculty grading.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B85B3F]" />
                    <h4 className="font-serif text-sm font-bold text-[#1A4B54]">Terms that accommodate</h4>
                  </div>
                  <p className="text-xs text-[#525B64] leading-relaxed">
                    Lockdowns and transfers happen. BCA's term calendar accommodates verified extensions without penalty.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE DAILY DISCIPLINE: Canvas C (Soft Sage Tint) */}
      <section className="bg-[#E9EFEA] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D8E2DA]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
              THE DAILY DISCIPLINE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
              What a study day looks like
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              A degree is not a moment of inspiration — it is 90 minutes a day, repeated for four years. Here is the rhythm your sponsorship funds.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: 4 Daily Steps */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="bg-white/80 border border-[#D5DDD6] rounded-[4px] p-5 shadow-xs flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#1A4B54] text-white text-xs font-bold flex items-center justify-center shrink-0" style={{ borderRadius: '9999px' }}>
                  1
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold tracking-wider text-[#B85B3F] uppercase">6:00 AM</div>
                  <h4 className="font-serif text-sm font-bold text-[#1A4B54]">Reading before the unit opens</h4>
                  <p className="text-xs text-[#525B64]">Text assigned for the week — often the only quiet hour on the block.</p>
                </div>
              </div>

              <div className="bg-white/80 border border-[#D5DDD6] rounded-[4px] p-5 shadow-xs flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#1A4B54] text-white text-xs font-bold flex items-center justify-center shrink-0" style={{ borderRadius: '9999px' }}>
                  2
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold tracking-wider text-[#B85B3F] uppercase">MIDDAY</div>
                  <h4 className="font-serif text-sm font-bold text-[#1A4B54]">Workbook session in the education wing</h4>
                  <p className="text-xs text-[#525B64]">Written exercises, diagramming a passage, drafting an exegesis paper.</p>
                </div>
              </div>

              <div className="bg-white/80 border border-[#D5DDD6] rounded-[4px] p-5 shadow-xs flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#1A4B54] text-white text-xs font-bold flex items-center justify-center shrink-0" style={{ borderRadius: '9999px' }}>
                  3
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold tracking-wider text-[#B85B3F] uppercase">EVENING</div>
                  <h4 className="font-serif text-sm font-bold text-[#1A4B54]">Correspondence</h4>
                  <p className="text-xs text-[#525B64]">A letter to the band, and lesson answers copied for the mailroom pickup.</p>
                </div>
              </div>

              <div className="bg-white/80 border border-[#D5DDD6] rounded-[4px] p-5 shadow-xs flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#1A4B54] text-white text-xs font-bold flex items-center justify-center shrink-0" style={{ borderRadius: '9999px' }}>
                  4
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold tracking-wider text-[#B85B3F] uppercase">MONTHLY</div>
                  <h4 className="font-serif text-sm font-bold text-[#1A4B54]">Proctored exam & new packet</h4>
                  <p className="text-xs text-[#525B64]">Exam proctored by the chaplain; next course packet arrives with the mail.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Why this matters to a warden */}
            <div className="lg:col-span-5 bg-[#122320] text-white rounded-[4px] p-8 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-9 h-9 rounded-[4px] bg-white/10 flex items-center justify-center text-[#C86D3B]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold leading-tight text-white">
                  Why this matters to a warden
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  A student on a term calendar is a student with daily purpose: a reason to stay off the disciplinary report, a place to be at 6 AM, and audit-ready academic progress reports.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate('impact')}
                  className="bg-[#B85B3F] hover:bg-[#A34E35] text-white text-xs font-semibold px-4 py-2.5 rounded-[4px] flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <span>See what we track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COST TRANSPARENCY: Zebra-Striped Table (Canvas D: Crisp White) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
              COST TRANSPARENCY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
              Every dollar is accounted for
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Sponsors deserve to know where the monthly gift goes. Zero administrative overhead deducted from tuition.
            </p>
          </div>

          {/* Zebra-Striped Clean Table */}
          <div className="border border-[#E2DFD8] rounded-[4px] overflow-hidden shadow-xs mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#1A4B54] text-white uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3.5 px-6 font-semibold">LINE ITEM</th>
                    <th className="py-3.5 px-6 font-semibold">B.B.S. (MONTHLY)</th>
                    <th className="py-3.5 px-6 font-semibold">M.A. (MONTHLY)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2DFD8] text-[#4B5563]">
                  <tr className="bg-white">
                    <td className="py-3.5 px-6 font-medium text-[#1A4B54]">Core tuition (10 × $18 band share)</td>
                    <td className="py-3.5 px-6 font-mono font-medium">$180.00</td>
                    <td className="py-3.5 px-6 font-mono font-medium">$180.00</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="py-3.5 px-6">Textbooks & printed workbooks</td>
                    <td className="py-3.5 px-6 font-mono">$24.00</td>
                    <td className="py-3.5 px-6 font-mono">$42.00</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3.5 px-6">Postage & mailroom handling</td>
                    <td className="py-3.5 px-6 font-mono">$12.00</td>
                    <td className="py-3.5 px-6 font-mono">$12.00</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="py-3.5 px-6">Proctored exam processing</td>
                    <td className="py-3.5 px-6 font-mono">$0.00</td>
                    <td className="py-3.5 px-6 font-mono">$24.00</td>
                  </tr>
                  <tr className="bg-[#F6F4EE] font-bold text-[#1A4B54]">
                    <td className="py-4 px-6">Full monthly program total</td>
                    <td className="py-4 px-6 text-[#B85B3F] text-sm font-mono font-bold">$216.00</td>
                    <td className="py-4 px-6 text-[#B85B3F] text-sm font-mono font-bold">$258.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('get-involved')}
              className="bg-[#B85B3F] hover:bg-[#A34E35] text-white px-5 py-2.5 rounded-[4px] text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-sm active:scale-95"
            >
              <span>Build a Band of 10</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('band')}
              className="bg-white hover:bg-[#F4F4F0] border border-[#D5D2CA] text-[#33383D] px-4 py-2.5 rounded-[4px] text-xs font-semibold transition-colors cursor-pointer"
            >
              How bands pool the cost
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
