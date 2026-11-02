/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Logo } from './Logo.tsx';
import { NavPage } from './Navbar.tsx';
import { Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#122320] text-white border-t border-[#1C332F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-6 space-y-3.5">
            <button onClick={() => handleNav('band')} className="cursor-pointer text-left">
              <Logo variant="light" />
            </button>
            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              A national initiative with Bible Colleges of America funding correspondence degrees for incarcerated students — one band of ten sponsors at a time.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs">
              <Mail className="w-3.5 h-3.5 text-white/60 shrink-0" />
              <a
                href="mailto:m.woolstrum@brokenchains.org"
                className="text-white/80 hover:text-white underline underline-offset-4 font-mono text-[11px]"
              >
                m.woolstrum@brokenchains.org
              </a>
            </div>
          </div>

          {/* Col 2: EXPLORE */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-semibold tracking-widest uppercase text-white/50 mb-3.5 font-sans">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button
                  onClick={() => handleNav('band')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How a Band Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('degrees')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Academic Degrees
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('impact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Impact & Research
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Story
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: ACT */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-semibold tracking-widest uppercase text-white/50 mb-3.5 font-sans">
              ACT
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button
                  onClick={() => handleNav('get-involved')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Build a Band of 10
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('get-involved')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Join a Band
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('get-involved')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sponsor a Degree
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('leaders')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Correctional Leaders
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 text-[11px] text-white/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Broken Chains Prison Education. A ministry initiative of Bible Colleges of America, est. 1993, Kokomo, Indiana.</p>
          <p className="text-white/40">Brand & digital by Tricord</p>
        </div>
      </div>
    </footer>
  );
};
