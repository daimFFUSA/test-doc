/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavPage } from '../components/Navbar.tsx';
import {
  ArrowRight,
  Scale,
  TrendingUp,
  Users,
  FileText,
  BarChart2,
  UserCheck,
  LineChart
} from 'lucide-react';

interface ImpactPageProps {
  onNavigate: (page: NavPage) => void;
}

export const ImpactPage: React.FC<ImpactPageProps> = ({ onNavigate }) => {
  return (
    <div className="text-[#33383D]">
      {/* 1. HERO SECTION: Canvas B (Deep Obsidian Forest with Circles Texture) */}
      <section className="bg-circles-texture py-24 px-4 sm:px-6 lg:px-8 text-white border-b border-[#233F3B]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/10 border border-white/20 text-[#C86D3B] text-[11px] font-bold tracking-[0.2em] uppercase">
            <LineChart className="w-3.5 h-3.5" />
            <span>LONGITUDINAL RESEARCH & AUDIT DATA</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.12] tracking-tight">
            We measure, because boards and wardens will ask.
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Sponsorship feels good. Data convinces. From the first day of enrollment, every Broken Chains student contributes to a longitudinal record designed to answer the empirical questions wardens, chaplains, and church boards actually have.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('get-involved')}
              className="bg-[#B85B3F] hover:bg-[#A34E35] text-white text-xs font-semibold px-5 py-2.5 rounded-[4px] flex items-center gap-2 transition-colors cursor-pointer shadow-md active:scale-95"
            >
              <span>Build a Band of 10</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('leaders')}
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold px-5 py-2.5 rounded-[4px] transition-colors cursor-pointer"
            >
              Placement packet for wardens
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE CRIMINOLOGY: Canvas A (Warm Parchment Linen with Script Texture) */}
      <section className="bg-script-texture py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2DFD8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
              THE CRIMINOLOGY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
              Contact, not just classes
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Correctional research has consistently found that prosocial contact — regular, structured, positive relationships with people on the outside — is associated with better outcomes after release. Education programs show the same direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Card 1: What literature points to */}
            <div className="bg-white border border-[#E2DFD8] rounded-[4px] p-8 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#1A4B54]">
                  What peer-reviewed literature confirms
                </h3>
                <ul className="space-y-3.5 text-xs text-[#525B64] leading-relaxed list-disc pl-5">
                  <li>
                    <strong>Prosocial outside ties:</strong> Regular correspondence and authentic volunteer mentorship correlate with marked declines in disciplinary infractions during incarceration.
                  </li>
                  <li>
                    <strong>Post-secondary education:</strong> Rigorous college-level study reduces recidivism significantly across multi-state correctional evaluations.
                  </li>
                  <li>
                    <strong>Family reconnection:</strong> Students with active outside prayer circles and family support show higher post-release employment stability.
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-[#E8E6DF] mt-6 text-[11px] text-[#6B7280] italic">
                Broken Chains does not claim credit for general literature — we fund students and hold our cohorts accountable to these metrics.
              </div>
            </div>

            {/* Card 2: What makes our data different */}
            <div className="bg-[#1A4B54] text-white rounded-[4px] p-8 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-white">
                  What makes our audit data distinctive
                </h3>
                <ul className="space-y-4 text-xs text-white/90 leading-relaxed list-disc pl-5">
                  <li>
                    <strong className="text-white">Day-one baseline:</strong> Metrics start on enrollment day with historical conduct records, not selected after graduation.
                  </li>
                  <li>
                    <strong className="text-white">Self-as-baseline comparison:</strong> Each student is measured against his own prior behavioral track, preventing systemic bias.
                  </li>
                  <li>
                    <strong className="text-white">Complete stakeholder transparency:</strong> Facility wardens, chaplains, faculty, and outside sponsors all review identical quarterly data.
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/15 text-[11px] text-white/75 font-mono">
                Longitudinal tracking: Enrollment through 3 years post-release.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE PILLARS: Canvas D (Crisp Editorial White with Open Columns) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8E6DF]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
              THREE PILLARS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
              What we track, end to end
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Three families of measures, collected from initial enrollment to three years after the gate opens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Pillar 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[4px] bg-[#FCEFEA] text-[#B85B3F] flex items-center justify-center shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1A4B54]">In-facility calm</h3>
                <div className="text-[10px] uppercase tracking-wider text-[#6B7280] font-semibold mt-0.5 mb-2">
                  DISCIPLINARY WRITES · UNIT PARTICIPATION
                </div>
              </div>
              <p className="text-xs text-[#525B64] leading-relaxed">
                Disciplinary write-ups, work details, and program attendance are recorded quarterly and compared against the student's personal pre-enrollment baseline.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[4px] bg-[#FCEFEA] text-[#B85B3F] flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1A4B54]">Completion velocity</h3>
                <div className="text-[10px] uppercase tracking-wider text-[#6B7280] font-semibold mt-0.5 mb-2">
                  CREDITS COMPLETED · TIME-TO-DEGREE
                </div>
              </div>
              <p className="text-xs text-[#525B64] leading-relaxed">
                Courses completed per semester, exam passage rates, extensions utilized, and projected graduation date — shared directly with sponsoring bands.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[4px] bg-[#FCEFEA] text-[#B85B3F] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1A4B54]">Post-release anchor</h3>
                <div className="text-[10px] uppercase tracking-wider text-[#6B7280] font-semibold mt-0.5 mb-2">
                  3-YEAR FOLLOW-UP · CHURCH FELLOWSHIP
                </div>
              </div>
              <p className="text-xs text-[#525B64] leading-relaxed">
                After release, alumni enter a three-year longitudinal audit: custody avoidance, employment continuity, and fellowship integration in their home church.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY: Canvas C (Soft Sage Tint) */}
      <section className="bg-[#E9EFEA] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D8E2DA]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
              METHODOLOGY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
              How the numbers get collected
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              No cumbersome bureaucratic burdens. Just brief, standardized quarterly forms administered through facility chaplains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/90 border border-[#D5DDD6] rounded-[4px] p-7 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-[4px] bg-[#E8EDEC] text-[#1A4B54] flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1A4B54]">Baseline at enrollment</h3>
              <p className="text-xs text-[#525B64] leading-relaxed">
                Before the first lesson ships, historical disciplinary write-ups and education history are verified with the resident's written consent and facility clearance.
              </p>
            </div>

            <div className="bg-white/90 border border-[#D5DDD6] rounded-[4px] p-7 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-[4px] bg-[#E8EDEC] text-[#1A4B54] flex items-center justify-center">
                <BarChart2 className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1A4B54]">Quarterly check-ins</h3>
              <p className="text-xs text-[#525B64] leading-relaxed">
                Chaplains verify lesson pacing and behavior summaries on a 2-minute quarterly review. Bands and facility administrators receive identical updates.
              </p>
            </div>

            <div className="bg-white/90 border border-[#D5DDD6] rounded-[4px] p-7 shadow-xs space-y-3">
              <div className="w-9 h-9 rounded-[4px] bg-[#E8EDEC] text-[#1A4B54] flex items-center justify-center">
                <UserCheck className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#1A4B54]">After the gate opens</h3>
              <p className="text-xs text-[#525B64] leading-relaxed">
                Graduates are followed for 36 months through partner churches or regional reentry fellowships to document employment and church anchoring.
              </p>
            </div>
          </div>

          {/* Callout box for correctional leaders */}
          <div className="bg-white border border-[#D5DDD6] rounded-[4px] p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-base font-bold text-[#1A4B54]">
                Running a facility or leading a church mission board?
              </h4>
              <p className="text-xs text-[#525B64] mt-1">
                Request the full audit packet: tracking methodology, agreement templates, and sample cohort reports.
              </p>
            </div>
            <button
              onClick={() => onNavigate('leaders')}
              className="shrink-0 bg-[#B85B3F] hover:bg-[#A34E35] text-white text-xs font-semibold px-4 py-2.5 rounded-[4px] flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <span>For correctional leaders</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. REPORTING TABLE: Zebra-Striped Clean Table (Canvas D: Crisp White) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
              REPORTING CADENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
              Who sees what, and when
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Audited findings are published to each stakeholder group on a regular, predictable calendar.
            </p>
          </div>

          <div className="border border-[#E2DFD8] rounded-[4px] overflow-hidden shadow-xs mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#1A4B54] text-white uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3.5 px-6 font-semibold">STAKEHOLDER</th>
                    <th className="py-3.5 px-6 font-semibold">FREQUENCY</th>
                    <th className="py-3.5 px-6 font-semibold">DELIVERABLE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2DFD8] text-[#4B5563]">
                  <tr className="bg-white">
                    <td className="py-3.5 px-6 font-semibold text-[#1A4B54]">Sponsoring Bands (10 Adults)</td>
                    <td className="py-3.5 px-6">Monthly + Semester</td>
                    <td className="py-3.5 px-6">Letter prompts, coursework pacing status, semester grades</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="py-3.5 px-6 font-semibold text-[#1A4B54]">Facility Wardens & Chaplains</td>
                    <td className="py-3.5 px-6">Quarterly</td>
                    <td className="py-3.5 px-6">Cohort conduct audit vs. baseline, study hours, mail compliance</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3.5 px-6 font-semibold text-[#1A4B54]">BCA Faculty & Registrar</td>
                    <td className="py-3.5 px-6">Each Term</td>
                    <td className="py-3.5 px-6">Academic progress, extension records, proctored exam integrity</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="py-3.5 px-6 font-semibold text-[#1A4B54]">Sponsoring Church Boards & Donors</td>
                    <td className="py-3.5 px-6">Annual</td>
                    <td className="py-3.5 px-6">Comprehensive national impact report across all active bands</td>
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
              onClick={() => onNavigate('degrees')}
              className="bg-white hover:bg-[#F4F4F0] border border-[#D5D2CA] text-[#33383D] px-4 py-2.5 rounded-[4px] text-xs font-semibold transition-colors cursor-pointer"
            >
              See the degrees we fund
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
