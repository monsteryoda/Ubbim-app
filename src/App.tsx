"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import DesignBuild from './pages/DesignBuild';
import DigitalSolutions from './pages/DigitalSolutions';
import AerialAnalytics from './pages/AerialAnalytics';
import ThreeDScanning from './pages/ThreeDScanning';
import VRCoordination from './pages/VRCoordination';
import CustomSoftware from './pages/CustomSoftware';
import Firefighting from './pages/Firefighting';
import StructuralRepair from './pages/StructuralRepair';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/design-build" element={<DesignBuild />} />
          <Route path="/services/digital-solutions" element={<DigitalSolutions />} />
          <Route path="/aerial-analytics" element={<AerialAnalytics />} />
          <Route path="/3d-scanning" element={<ThreeDScanning />} />
          <Route path="/vr-coordination" element={<VRCoordination />} />
          <Route path="/custom-software" element={<CustomSoftware />} />
          <Route path="/firefighting" element={<Firefighting />} />
          <Route path="/services/structural-repair" element={<StructuralRepair />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;