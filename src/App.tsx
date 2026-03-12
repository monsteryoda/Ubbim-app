"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import DesignBuildServices from './pages/DesignBuildServices';
import DigitalSolutions from './pages/DigitalSolutions';
import AerialAnalytics from './pages/AerialAnalytics';
import ThreeDScanning from './pages/ThreeDScanning';
import VRCoordination from './pages/VRCoordination';
import CustomSoftware from './pages/CustomSoftware';
import FirefightingServices from './pages/FirefightingServices';
import StructuralRepair from './pages/StructuralRepair';
import Award from './pages/Award';
import Projects from './pages/Projects';
import SecuritySurveillance from './pages/SecuritySurveillance';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/design-build" element={<DesignBuildServices />} />
          <Route path="/services/digital-solutions" element={<DigitalSolutions />} />
          <Route path="/aerial-analytics" element={<AerialAnalytics />} />
          <Route path="/3d-scanning" element={<ThreeDScanning />} />
          <Route path="/vr-coordination" element={<VRCoordination />} />
          <Route path="/custom-software" element={<CustomSoftware />} />
          <Route path="/firefighting" element={<FirefightingServices />} />
          <Route path="/services/structural-repair" element={<StructuralRepair />} />
          <Route path="/award" element={<Award />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services/security-surveillance" element={<SecuritySurveillance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;