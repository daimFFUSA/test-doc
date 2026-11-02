/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { Menu, X } from 'lucide-react';

export type NavPage = 'band' | 'degrees' | 'impact' | 'about' | 'leaders' | 'get-involved';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavPage; label: string }[] = [
    { id: 'band', label: 'How a Band Works' },
    { id: 'degrees', label: 'Academic Degrees' },
    { id: 'impact', label: 'Impact & Research' },
    { id: 'about', label: 'Our Story' },
    { id: 'leaders', label: 'Correctional Leaders' }
  ];

  const handleNav = (id: NavPage) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#E8E6DF] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <button
            onClick={() => handleNav('band')}
            className="text-left cursor-pointer focus:outline-none"
            aria-label="Broken Chains Homepage"
          >
            <Logo variant="dark" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 text-[13px]">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-1.5 rounded-[4px] cursor-pointer transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-[#E6EEED] text-[#1A4B54] font-medium'
                      : 'text-[#4B5563] hover:text-[#1A4B54] hover:bg-[#F4F4F0]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Primary Action Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => handleNav('get-involved')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#B85B3F] hover:bg-[#A34E35] rounded-[4px] transition-all shadow-sm cursor-pointer whitespace-nowrap active:scale-95"
            >
              Build a Band of 10
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A4B54] hover:text-[#B85B3F] focus:outline-none cursor-pointer rounded-[4px]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E6DF] bg-white px-4 pt-3 pb-5 space-y-1.5 shadow-lg">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`block w-full text-left px-3 py-2 text-sm rounded-[4px] transition-colors ${
                  isActive
                    ? 'bg-[#E6EEED] text-[#1A4B54] font-semibold'
                    : 'text-[#4B5563] hover:bg-[#F4F4F0]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#E8E6DF]">
            <button
              onClick={() => handleNav('get-involved')}
              className="w-full text-center py-2.5 text-xs font-semibold text-white bg-[#B85B3F] rounded-[4px]"
            >
              Build a Band of 10
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
