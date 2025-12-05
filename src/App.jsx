import React from 'react';
import Navbar from './components/Navbar';
import Carosal from './components/Carosal';
import Categories from './components/Categories';
import ServicesSearch from './components/ServicesSearch';
import BillsData from './components/BillsData';
import Footer from './components/Footer';

// Pages
import DownloadApp from './components/pages/DownloadApp';
import Contact from './components/pages/Contact';
import AllServices from './components/pages/AllServices';
import About from './components/pages/About';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
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
                <ServicesSearch />
                <BillsData />
              </>
            }
          />

          {/* OTHER PAGES */}
          <Route path="/download" element={<DownloadApp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
