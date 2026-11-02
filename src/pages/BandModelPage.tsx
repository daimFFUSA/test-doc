/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavPage } from '../components/Navbar.tsx';
import {
  ArrowRight,
  BookOpen,
  PenTool,
  HeartHandshake,
  Users,
  Check,
  ShieldAlert,
  Send,
  Sparkles
} from 'lucide-react';

interface BandModelPageProps {
  onNavigate: (page: NavPage) => void;
  onSelectDegreeForPledge?: (degree: string, sponsors: number) => void;
}

export const BandModelPage: React.FC<BandModelPageProps> = ({
  onNavigate
}) => {
  // Center coordinate of the compact 220x220 diagram badge
  const cx = 110;
  const cy = 110;
  const radius = 78;

  return (
    <div className="text-[#33383D]">
      {/* 1. HERO SECTION: 55/45 EDITORIAL SPLIT (Canvas A: Warm Parchment with Script Texture) */}
      <section className="bg-script-texture pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2DFD8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column (55%): Headlines & Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[4px] bg-[#E8EDEC] border border-[#CCD8D7] text-[#1A4B54] text-[11px] font-bold tracking-[0.18em] uppercase">
                <Users className="w-3.5 h-3.5 text-[#B85B3F]" />
                <span>THE BAND MODEL</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#1A4B54] leading-[1.12] tracking-tight">
                Ten people. One student. Four promises.
              </h1>
              
              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
                A band is a 10-to-1 support circle. Ten sponsors on the outside pool $18 a month each — $180 total — to fund one student's Bible college degree, then surround him with the letters, prayer, and accountability that turn tuition into transformation.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('get-involved')}
                  className="bg-[#B85B3F] hover:bg-[#A34E35] text-white px-5 py-2.5 rounded-[4px] text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-sm active:scale-95"
                >
                  <span>Build a Band of 10</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('degrees')}
                  className="bg-white hover:bg-[#F4F4F0] border border-[#D5D2CA] text-[#33383D] px-5 py-2.5 rounded-[4px] text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                >
                  What your student studies
                </button>
              </div>

              {/* Editorial Trust Note */}
              <div className="pt-4 flex items-center gap-6 text-xs text-[#525B64] border-t border-[#E2DFD8]/80">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full is-circle bg-[#1A4B54]" style={{ borderRadius: '9999px' }} />
                  <span>Church-administered correspondence</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full is-circle bg-[#B85B3F]" style={{ borderRadius: '9999px' }} />
                  <span>Zero cost to facility budget</span>
                </div>
              </div>
            </div>

            {/* Right Column (45%): Layered Visual (Documentary Photo + Floating Glass 10-to-1 Badge) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[4px] overflow-hidden shadow-xl border border-[#D5D2CA] bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
                  alt="Hands writing an encouraging letter with an open Bible and study papers"
                  className="w-full h-[440px] sm:h-[480px] object-cover filter brightness-[0.98] contrast-[1.02] transition-transform duration-700 group-hover:scale-102"
                />
                
                {/* Subtle warm photo vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#122320]/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs pointer-events-none drop-shadow-md">
                  <p className="font-serif italic text-sm text-stone-100">
                    "Paper, postage, and ten outside believers keeping a student anchored."
                  </p>
                </div>
              </div>

              {/* Overlaid Floating Glass 10-to-1 Diagram Badge */}
              <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-white/95 backdrop-blur-md border border-[#E2DFD8] p-3.5 rounded-[4px] shadow-2xl z-20 flex flex-col items-center">
                <div className="relative w-[180px] h-[180px] flex items-center justify-center select-none">
                  
                  {/* SVG Connecting Solid Lines with Slow Traveling Pulse */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 220 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {[...Array(10)].map((_, i) => {
                      const angle = (i * 360) / 10 - 90;
                      const rad = (angle * Math.PI) / 180;
                      const sx = Math.round(cx + radius * Math.cos(rad));
                      const sy = Math.round(cy + radius * Math.sin(rad));

                      return (
                        <g key={i}>
                          <line
                            x1={sx}
                            y1={sy}
                            x2={cx}
                            y2={cy}
                            stroke="#1A4B54"
                            strokeWidth="1.25"
                            strokeOpacity="0.28"
                          />
                          <circle r="2.5" fill="#B85B3F" opacity="0.9">
                            <animate
                              attributeName="cx"
                              from={sx}
                              to={cx}
                              dur="3.8s"
                              begin={`${i * 0.38}s`}
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="cy"
                              from={sy}
                              to={cy}
                              dur="3.8s"
                              begin={`${i * 0.38}s`}
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.1;0.95;0.95;0"
                              dur="3.8s"
                              begin={`${i * 0.38}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                        </g>
                      );
                    })}
                  </svg>

                  {/* Central Student Circular Node */}
                  <div
                    className="z-10 w-16 h-16 rounded-full is-circle text-white bg-[#1A4B54] border-2 border-white flex flex-col items-center justify-center p-1 text-center shadow-md"
                    style={{ borderRadius: '9999px' }}
                  >
                    <BookOpen className="w-3.5 h-3.5 text-white mb-0.5" />
                    <span className="text-[8px] font-bold tracking-wider uppercase leading-none">
                      STUDENT
                    </span>
                    <span className="text-[6.5px] text-white/80 leading-none mt-0.5">
                      at BCA
                    </span>
                  </div>

                  {/* 10 Outer Sponsor Circular Nodes */}
                  {[...Array(10)].map((_, i) => {
                    const angle = (i * 360) / 10 - 90;
                    const rad = (angle * Math.PI) / 180;
                    const x = Math.round(radius * Math.cos(rad));
                    const y = Math.round(radius * Math.sin(rad));

                    return (
                      <div
                        key={i}
                        className="absolute z-20 w-6 h-6 rounded-full is-circle text-white bg-[#1A4B54] border border-white shadow-xs flex items-center justify-center text-[7px] font-bold"
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                          borderRadius: '9999px'
                        }}
                        title={`Sponsor ${i + 1} ($18/mo)`}
                      >
                        {i + 1}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-1 text-center">
                  <span className="text-[10px] font-bold text-[#1A4B54] uppercase tracking-wider block">
                    10-to-1 Model
                  </span>
                  <span className="text-[9px] text-[#6B7280]">
                    10 Sponsors · $180/mo total
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE ECONOMICS: Canvas A (Warm Parchment Linen with divide-x stats instead of white boxes) */}
      <section className="bg-[#F6F4EE] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2DFD8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
              THE ECONOMICS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
              What $180 a month actually buys
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Core tuition for a full-time correspondence load runs $180 a month. Ten sponsors at $18 each covers it entirely — no grants, no facility budget, no government funds.
            </p>
          </div>

          {/* Minimal Editorial Stats with divide-x divide-stone-300 */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-300 pt-4 pb-2">
            
            {/* Stat 1 */}
            <div className="py-6 md:py-2 md:pr-10 space-y-2">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#B85B3F]">
                $18<span className="text-xl font-normal text-[#525B64]">/mo</span>
              </div>
              <div className="font-serif text-lg font-bold text-[#1A4B54]">
                One sponsor's share
              </div>
              <p className="text-xs text-[#525B64] leading-relaxed">
                Less than a single dinner out. Most bands set up a recurring gift so nobody has to chase ten checks each month.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="py-6 md:py-2 md:px-10 space-y-2">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#1A4B54]">
                $180<span className="text-xl font-normal text-[#525B64]">/mo</span>
              </div>
              <div className="font-serif text-lg font-bold text-[#1A4B54]">
                The student's tuition
              </div>
              <p className="text-xs text-[#525B64] leading-relaxed">
                Full-time load at BCA: 2–3 courses per term, workbooks, printed texts, and proctored exams shipped through the facility mailroom.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="py-6 md:py-2 md:pl-10 space-y-2">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#1A4B54]">
                4 <span className="text-xl font-normal text-[#525B64]">years</span>
              </div>
              <div className="font-serif text-lg font-bold text-[#1A4B54]">
                To a full degree
              </div>
              <p className="text-xs text-[#525B64] leading-relaxed">
                Bachelor of Biblical Studies in about four years. Faster if testing out of foundation courses; slower terms are normal and never disqualify.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE FOUR PILLARS: Canvas D (Crisp Editorial White with Terracotta Accent Icons & Open Columns) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8E6DF]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
              THE FOUR PILLARS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
              More than a scholarship
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Money starts the relationship. These four commitments are what a band actually signs.
            </p>
          </div>

          {/* Open Editorial Columns with Terracotta Accent Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Pillar 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[4px] bg-[#FCEFEA] text-[#B85B3F] flex items-center justify-center shrink-0">
                <PenTool className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A4B54]">
                Correspondence
              </h3>
              <p className="text-xs text-[#525B64] leading-relaxed">
                One letter a month, minimum. Facility mailrooms screen everything, so keep it simple: paper, photos where permitted, encouragement. Your student re-reads these letters repeatedly during long lock-ins.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[4px] bg-[#FCEFEA] text-[#B85B3F] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18M3 10h18M5 10v11M19 10v11M12 2l7 8H5l7-8z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A4B54]">
                Prayer
              </h3>
              <p className="text-xs text-[#525B64] leading-relaxed">
                A weekly prayer list keeps ten sponsors praying for the same person by name — his coursework, his family, his patience in a crowded unit. Students consistently rank this above the money.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[4px] bg-[#FCEFEA] text-[#B85B3F] flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A4B54]">
                Coursework accountability
              </h3>
              <p className="text-xs text-[#525B64] leading-relaxed">
                BCA bills monthly and sets lesson deadlines. The band tracks pace with its student — a two-line check-in in each letter keeps four years of study from slipping into five.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[4px] bg-[#FCEFEA] text-[#B85B3F] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1A4B54]">
                Family support
              </h3>
              <p className="text-xs text-[#525B64] leading-relaxed">
                The sentence touches a whole household. Bands help the spouse and children back home — bounded, practical, and always at the family's direction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FAMILIES AT HOME: Canvas C (Soft Sage Tint with 50/50 Layout & Documentary Photography) */}
      <section className="bg-[#E9EFEA] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D8E2DA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Warm Documentary Photo (Mother & child looking through family mail in kitchen) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[4px] overflow-hidden shadow-md border border-[#D5DDD6]">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80"
                  alt="Mother and child in a sunlit home opening correspondence and family letters"
                  className="w-full h-[440px] sm:h-[480px] object-cover filter brightness-[0.98] contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122320]/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs drop-shadow-sm">
                  <p className="font-serif italic text-sm text-stone-100">
                    "When a dad is studying for a degree, his children see a student at work — not just an empty chair."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Standing with the household — without overstepping */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
                FAMILIES AT HOME
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
                Standing with the household — without overstepping
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                A sentence incarcerates one person and strains a whole family. Bands help the people left outside, always at the family's direction and inside clear boundaries.
              </p>

              {/* Minimal Divided Lists instead of heavy cards */}
              <div className="space-y-6 pt-2">
                
                {/* WHAT BANDS DO */}
                <div className="space-y-3">
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#1A4B54] block">
                    WHAT BANDS DO
                  </span>
                  <ul className="space-y-2.5 text-xs text-[#4B5563]">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#1A4B54] shrink-0 mt-0.5" />
                      <span>Cover a utility bill or groceries in a hard month, coordinated with the family's consent.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#1A4B54] shrink-0 mt-0.5" />
                      <span>Write to the student's children (where facility custody policy permits) — a child who hears from dad's friends stays connected.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#1A4B54] shrink-0 mt-0.5" />
                      <span>Provide gas money or a ride for visitation days when the family asks.</span>
                    </li>
                  </ul>
                </div>

                {/* WHAT BANDS NEVER DO */}
                <div className="space-y-3 pt-4 border-t border-[#D5DDD6]">
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#B85B3F] block">
                    CLEAR BOUNDARIES (WRITTEN IN EVERY BAND AGREEMENT)
                  </span>
                  <ul className="space-y-2.5 text-xs text-[#4B5563]">
                    <li className="flex items-start gap-2.5">
                      <ShieldAlert className="w-4 h-4 text-[#B85B3F] shrink-0 mt-0.5" />
                      <span>Never contact the facility about the family's private matters without written consent.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ShieldAlert className="w-4 h-4 text-[#B85B3F] shrink-0 mt-0.5" />
                      <span>No legal advice, no case advocacy — bands are educational, not legal.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <ShieldAlert className="w-4 h-4 text-[#B85B3F] shrink-0 mt-0.5" />
                      <span>No financial entanglement: gifts flow through the band's treasury, never personal loans.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PLAN YOUR BAND: Canvas B (Deep Obsidian Forest with Circles Texture) */}
      <section className="bg-circles-texture py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C86D3B]">
              PLAN YOUR BAND
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Run the numbers with your group
            </h2>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              A Sunday School class, a men's or women's group, a family, or friends who already meet weekly. Ten people pooling $18 a month covers 100% of an incarcerated student's college tuition.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400 pt-1">
              <Users className="w-4 h-4 text-[#C86D3B]" />
              <span>Bands of 6–14 are common. Ten is simply the classic circle.</span>
            </div>
          </div>

          {/* 3 Step Cards in Dark Glass */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 border border-white/10 rounded-[4px] p-7 backdrop-blur-xs space-y-3">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C86D3B]">
                STEP 01
              </div>
              <h3 className="font-serif text-base font-bold text-white">
                Gather Ten Believers
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Ten advocates pool $18/month each ($180 total). Less than a dinner out, no debt, and zero financial strain on any single family.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[4px] p-7 backdrop-blur-xs space-y-3">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C86D3B]">
                STEP 02
              </div>
              <h3 className="font-serif text-base font-bold text-white">
                Matched to a BCA Student
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Register your band and select the degree. We match your circle with a waiting, chaplain-nominated student at an approved facility.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[4px] p-7 backdrop-blur-xs space-y-3">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C86D3B]">
                STEP 03
              </div>
              <h3 className="font-serif text-base font-bold text-white">
                Four Years of Brotherhood
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Your band receives the welcome packet, mail rules, coursework calendar, monthly letter prompts, and quarterly academic report cards.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('get-involved')}
              className="bg-[#B85B3F] hover:bg-[#A34E35] text-white px-5 py-2.5 rounded-[4px] text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-md active:scale-95"
            >
              <span>Register your band</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('get-involved')}
              className="bg-transparent hover:bg-white/10 border border-white/20 text-white px-4 py-2.5 rounded-[4px] text-xs font-semibold transition-colors cursor-pointer"
            >
              I'd rather join one
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
