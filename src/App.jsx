import React from 'react';
import Navbar from './components/Navbar';
import Carosal from './components/Carosal';
import Categories from './components/Categories';
import ServicesSearch from './components/ServicesSearch';
import BillsData from './components/BillsData';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';  // LINE 1: Add kiya

// Pages
import DownloadApp from './components/pages/DownloadApp';
import Contact from './components/pages/Contact';
import AllServices from './components/pages/AllServices';
import About from './components/pages/About';

// NAYE 3 PAGES ADD KIYE (Zepto → Hazaribag Market kiya hua)
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfUse from './components/pages/TermsOfUse';
import ResponsibleDisclosure from './components/pages/ResponsibleDisclosure';

import { Routes, Route } from 'react-router-dom';
import Stores from './components/Stores';

import ScrollToTop from './components/ScrollToTop';   // ADDED (NO other changes)

function App() {
  return (
    <>
      <ScrollToTop />
      {/* <CustomCursor />  LINE 2: Navbar se pehle add kiya */}
      <Navbar />

      <div className="mt-16">

        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Carosal />
                <Categories />
                {/* <ServicesSearch /> */}
                {/* <BillsData /> */}
                <Stores />
              </>
            }
          />

          {/* OTHER PAGES */}
          <Route path="/download" element={<DownloadApp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/about" element={<About />} />

          {/* NEW 3 PAGES ADDED */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/responsible-disclosure" element={<ResponsibleDisclosure />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;