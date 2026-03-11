"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import DigitalSolutions from "./pages/DigitalSolutions";
import AerialAnalytics from "./pages/AerialAnalytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/digital-solutions" element={<DigitalSolutions />} />
        <Route path="/aerial-analytics" element={<AerialAnalytics />} />
      </Routes>
    </Router>
  );
}

export default App;