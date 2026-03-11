"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import DesignBuildServices from "./pages/DesignBuildServices";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FirefightingServices from "./pages/FirefightingServices";
import StructuralRepair from "./pages/StructuralRepair";
import SecuritySurveillance from "./pages/SecuritySurveillance";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/design-build" element={<DesignBuildServices />} />
        <Route path="/services/structural-repair" element={<StructuralRepair />} />
        <Route path="/services/security-surveillance" element={<SecuritySurveillance />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/firefighting" element={<FirefightingServices />} />
      </Routes>
    </Router>
  );
}

export default App;