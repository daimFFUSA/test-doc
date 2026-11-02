/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NavPage } from '../components/Navbar.tsx';
import {
  ArrowRight,
  BookOpen,
  Users,
  CheckCircle2,
  Landmark,
  Building2,
  Laptop,
  Mail,
  Award,
  Phone
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: NavPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="text-[#33383D]">
      {/* 1. HERO SECTION: Canvas A (Warm Parchment Linen with Script Texture) */}
      <section className="bg-script-texture pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#E2DFD8]">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F] block">
            OUR STORY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#1A4B54] leading-[1.14] tracking-tight">
            A college that has mailed lessons since 1993. An initiative built to fund the seats.
          </h1>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Broken Chains exists because a proven correspondence college kept receiving letters from inside prisons — and kept having to say no to students with no way to pay.
          </p>
        </div>
      </section>

      {/* 2. HERITAGE & TIMELINE: Canvas D (Crisp Editorial White with Stamp & Envelope Visual) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8E6DF]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
              HERITAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
              Three decades of mail rooms, then a plan
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Bible Colleges of America opened its doors in 1993 in Kokomo, Indiana — an independent, church-administered institution teaching Scripture by correspondence to students whose circumstances keep them off a campus.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (55%): Vertical Milestone Line */}
            <div className="lg:col-span-7 space-y-10 pl-4 border-l-2 border-[#1A4B54]/20 relative ml-2">
              
              {/* Event 1 */}
              <div className="relative pl-6">
                <span
                  className="absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-[#1A4B54] border-2 border-white shadow-xs"
                  style={{ borderRadius: '9999px' }}
                />
                <div className="text-[11px] font-mono font-bold tracking-wider text-[#B85B3F] uppercase mb-1">
                  1993 · FOUNDATION
                </div>
                <h3 className="font-serif text-base font-bold text-[#1A4B54] mb-1.5">
                  BCA is founded in Kokomo, Indiana
                </h3>
                <p className="text-xs text-[#525B64] leading-relaxed">
                  Established as an independent, church-based correspondence Bible college with a single mission: bring rigorous exegetical training directly to students whom traditional resident campuses cannot seat.
                </p>
              </div>

              {/* Event 2 */}
              <div className="relative pl-6">
                <span
                  className="absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-[#1A4B54] border-2 border-white shadow-xs"
                  style={{ borderRadius: '9999px' }}
                />
                <div className="text-[11px] font-mono font-bold tracking-wider text-[#B85B3F] uppercase mb-1">
                  1990s–2010s · THE LETTERS
                </div>
                <h3 className="font-serif text-base font-bold text-[#1A4B54] mb-1.5">
                  Inmate inquiries multiply across state lines
                </h3>
                <p className="text-xs text-[#525B64] leading-relaxed">
                  Handwritten requests poured in from correctional chaplains and inmates asking for theological courses. Family members fronted tuition when they could, but thousands of qualified students sat on waitlists with no sponsor.
                </p>
              </div>

              {/* Event 3 */}
              <div className="relative pl-6">
                <span
                  className="absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-[#B85B3F] border-2 border-white shadow-xs"
                  style={{ borderRadius: '9999px' }}
                />
                <div className="text-[11px] font-mono font-bold tracking-wider text-[#B85B3F] uppercase mb-1">
                  TODAY · BROKEN CHAINS LAUNCHES
                </div>
                <h3 className="font-serif text-base font-bold text-[#1A4B54] mb-1.5">
                  The 10-to-1 Band of Brothers & Sisters
                </h3>
                <p className="text-xs text-[#525B64] leading-relaxed">
                  Broken Chains was engineered to solve the funding bottleneck: 10 outside believers pooling $18/month each ($180 total) to sponsor one student's degree while providing monthly correspondence, prayer, and quarterly progress reporting.
                </p>
              </div>

              {/* Institutional Partner Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-[4px] p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Building2 className="w-4 h-4 text-[#1A4B54]" />
                    <h4 className="font-serif text-xs font-bold text-[#1A4B54]">Academic Partner: BCA</h4>
                  </div>
                  <p className="text-[11px] text-[#525B64] leading-relaxed">
                    Bible Colleges of America (est. 1993) delivers coursework, proctors exams, and issues degrees. Broken Chains funds the seats.
                  </p>
                </div>

                <div className="bg-[#FAF9F5] border border-[#E8E6DF] rounded-[4px] p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Laptop className="w-4 h-4 text-[#1A4B54]" />
                    <h4 className="font-serif text-xs font-bold text-[#1A4B54]">Creative Partner: Tricord</h4>
                  </div>
                  <p className="text-[11px] text-[#525B64] leading-relaxed">
                    Tricord Digital manages platform design and public campaign outreach for this non-profit initiative.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column (45%): Authentic Visual Asset (Vintage stamps, mail envelopes, textbooks) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[4px] overflow-hidden shadow-lg border border-[#E2DFD8]">
                <img
                  src="https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=1200&q=80"
                  alt="Vintage correspondence mail envelopes, letters, and vintage postal postage"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122320]/65 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs drop-shadow-sm">
                  <p className="font-serif italic text-sm text-stone-100">
                    "Thirty years of physical post, sealed exams, and handwritten letters keeping men and women rooted in hope."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHAT WE BELIEVE: Canvas C (Soft Sage Tint) */}
      <section className="bg-[#E9EFEA] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D8E2DA]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
              WHAT WE BELIEVE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
              Four convictions that shape the work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/90 border border-[#D5DDD6] rounded-[4px] p-6 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-[4px] bg-[#FCEFEA] text-[#B85B3F] flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-sm font-bold text-[#1A4B54]">Rigor over sentiment</h3>
              <p className="text-xs text-[#525B64] leading-relaxed">
                We fund real degrees with real grading. Encouragement without coursework is just a nice letter; coursework without fellowship turns cold.
              </p>
            </div>

            <div className="bg-white/90 border border-[#D5DDD6] rounded-[4px] p-6 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-[4px] bg-[#FCEFEA] text-[#B85B3F] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-sm font-bold text-[#1A4B54]">The band, not the hero</h3>
              <p className="text-xs text-[#525B64] leading-relaxed">
                Ten ordinary believers beat one generous patron. Circles of mutual accountability outlast single donors and survive economic shifts.
              </p>
            </div>

            <div className="bg-white/90 border border-[#D5DDD6] rounded-[4px] p-6 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-[4px] bg-[#FCEFEA] text-[#B85B3F] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-sm font-bold text-[#1A4B54]">Measured honesty</h3>
              <p className="text-xs text-[#525B64] leading-relaxed">
                We publish what we track — including terms that run long, lock-down delays, and cohorts that struggle. Real transparency builds trust.
              </p>
            </div>

            <div className="bg-white/90 border border-[#D5DDD6] rounded-[4px] p-6 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-[4px] bg-[#FCEFEA] text-[#B85B3F] flex items-center justify-center">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-sm font-bold text-[#1A4B54]">Church-anchored</h3>
              <p className="text-xs text-[#525B64] leading-relaxed">
                Local congregations own their bands. Broken Chains coordinates and provides curriculum; it does not replace the local body of Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATEMENT OF FAITH: Canvas A (Warm Parchment Linen) */}
      <section className="bg-[#F6F4EE] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2DFD8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B85B3F]">
              STATEMENT OF FAITH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A4B54] tracking-tight">
              Where we stand
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Bands and students come from many traditions. These are the core convictions Broken Chains and BCA teach from — stated plainly so sponsoring churches can decide quickly.
            </p>
          </div>

          <div className="bg-white border border-[#E2DFD8] rounded-[4px] p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-[#525B64] leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#B85B3F] shrink-0 mt-1.5" style={{ borderRadius: '9999px' }} />
                <p>
                  <strong className="text-[#1A4B54]">The Bible is the inspired, authoritative Word of God</strong> — the center of every course we fund and the infallible guide for faith and practice.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#B85B3F] shrink-0 mt-1.5" style={{ borderRadius: '9999px' }} />
                <p>
                  <strong className="text-[#1A4B54]">Jesus Christ is Lord:</strong> His virgin birth, sinless life, atoning death, and bodily resurrection are the heart of the gospel we study.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#B85B3F] shrink-0 mt-1.5" style={{ borderRadius: '9999px' }} />
                <p>
                  <strong className="text-[#1A4B54]">The Church is God's instrument</strong> for teaching, discipleship, and care — this initiative exists to serve congregations, never substitute for them.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#B85B3F] shrink-0 mt-1.5" style={{ borderRadius: '9999px' }} />
                <p>
                  <strong className="text-[#1A4B54]">Every student is made in the image of God,</strong> capable of true study and redemption, whatever the legal record in the administration office says.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP: Canvas B (Deep Obsidian Forest with Distinct Non-Duplicated Bio Frame) */}
      <section className="bg-circles-texture py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C86D3B]">
              LEADERSHIP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              A small team with a long runway
            </h2>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              Broken Chains is led by practitioners who have administered correspondence theological education and prison ministry for decades.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Michael Woolstrum Bio Card - Refactored without Duplicate Text, with Clean Profile Frame */}
            <div className="lg:col-span-6 bg-white text-[#33383D] rounded-[4px] p-8 shadow-xl border border-[#D5D2CA] flex flex-col justify-between">
              <div className="space-y-4">
                
                {/* Profile Header */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full bg-[#1A4B54] text-white flex items-center justify-center font-serif font-bold text-base tracking-wider shrink-0 shadow-sm border-2 border-[#CCD8D7]"
                    style={{ borderRadius: '9999px' }}
                  >
                    MW
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1A4B54]">
                      Michael Woolstrum
                    </h3>
                    <div className="text-[11px] font-semibold text-[#B85B3F] uppercase tracking-wider">
                      National Director · Broken Chains
                    </div>
                  </div>
                </div>

                {/* Single, Concise, Authoritative Biography */}
                <p className="text-xs text-[#525B64] leading-relaxed pt-2">
                  Michael leads band formation, facility chaplaincy partnerships, and student placement across participating institutions. With decades of direct background in Christian higher education and church leadership, he serves as the principal liaison for wardens, pastors, and outside volunteer leaders.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] text-[#4B5563]">
                  <div className="bg-[#FAF8F3] p-2.5 rounded-[4px] border border-[#E8E6DF]">
                    <span className="font-semibold text-[#1A4B54] block">Focus</span>
                    <span>Facility relations & student matching</span>
                  </div>
                  <div className="bg-[#FAF8F3] p-2.5 rounded-[4px] border border-[#E8E6DF]">
                    <span className="font-semibold text-[#1A4B54] block">Headquarters</span>
                    <span>Kokomo, Indiana</span>
                  </div>
                </div>

              </div>

              {/* Contact Footer */}
              <div className="pt-6 border-t border-[#E8E6DF] mt-6 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="mailto:m.woolstrum@brokenchains.org"
                  className="text-xs text-[#1A4B54] hover:text-[#B85B3F] underline underline-offset-4 font-mono font-medium flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>m.woolstrum@brokenchains.org</span>
                </a>
                <span className="text-[11px] text-[#6B7280]">Direct response within 24h</span>
              </div>
            </div>

            {/* Right Callout Banner */}
            <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-[4px] p-8 shadow-xl flex flex-col justify-between backdrop-blur-xs">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#C86D3B] font-bold">
                  EXPANSION OPPORTUNITY
                </span>
                <h3 className="font-serif text-2xl font-bold leading-snug text-white">
                  The story's next chapter has empty chairs in it.
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Every band that forms this semester is an incarcerated student who stops waiting for funding. Ten believers, eighteen dollars a month, four years of correspondence study.
                </p>
              </div>

              <div className="pt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('get-involved')}
                  className="bg-[#B85B3F] hover:bg-[#A34E35] text-white text-xs font-semibold px-5 py-2.5 rounded-[4px] flex items-center gap-2 transition-colors cursor-pointer shadow-md active:scale-95"
                >
                  <span>Build a Band of 10</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('band')}
                  className="bg-transparent hover:bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-[4px] transition-colors cursor-pointer"
                >
                  How a band works
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
