/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, NavPage } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { BandModelPage } from './pages/BandModelPage.tsx';
import { DegreesPage } from './pages/DegreesPage.tsx';
import { ImpactPage } from './pages/ImpactPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { CorrectionalLeadersPage } from './pages/CorrectionalLeadersPage.tsx';
import { GetInvolvedPage } from './pages/GetInvolvedPage.tsx';
import { SEO_METADATA } from './data/contentData.ts';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('band');
  const [pledgeDegree, setPledgeDegree] = useState<string>('Bachelor of Biblical Studies');
  const [pledgeSponsors, setPledgeSponsors] = useState<number>(10);

  // Sync document title and meta description dynamically based on active page
  useEffect(() => {
    const seo = SEO_METADATA[currentPage];
    if (seo) {
      document.title = seo.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', seo.metaDescription);
      }
    }
  }, [currentPage]);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDegreeForPledge = (degree: string, sponsors: number = 10) => {
    setPledgeDegree(degree);
    setPledgeSponsors(sponsors);
    setCurrentPage('get-involved');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#33383D]">
      {/* Top Navigation Bar matching screenshots */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'band' && (
          <BandModelPage
            onNavigate={handleNavigate}
            onSelectDegreeForPledge={handleSelectDegreeForPledge}
          />
        )}
        {currentPage === 'degrees' && (
          <DegreesPage
            onNavigate={handleNavigate}
            onSelectDegreeForPledge={handleSelectDegreeForPledge}
          />
        )}
        {currentPage === 'impact' && (
          <ImpactPage
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'leaders' && (
          <CorrectionalLeadersPage
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'get-involved' && (
          <GetInvolvedPage
            onNavigate={handleNavigate}
            initialDegree={pledgeDegree}
            initialSponsors={pledgeSponsors}
          />
        )}
      </main>

      {/* Institutional Dark Teal Footer matching screenshots */}
      <Footer
        onNavigate={handleNavigate}
      />
    </div>
  );
}
