"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import LicensesAndCertifications from './pages/LicensesAndCertifications';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/licenses-certifications" element={<LicensesAndCertifications />} />
      </Routes>
    </Router>
  );
}

export default App;