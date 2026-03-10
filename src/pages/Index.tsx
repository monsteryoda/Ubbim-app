"use client";

import React from "react";
import CertificationsGrid from "@/components/CertificationsGrid";

const Index = () => {
  const certifications = [
    {
      id: "1",
      title: "ISO 9001:2015 Certificate",
      organization: "ACM-CCAS Limited",
      year: "2017",
      image: "/9001.png",
      description: "Quality Management System Certification"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-[#1A4B8C]">
          Our Certifications
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We maintain the highest standards of quality and excellence in all our operations
        </p>
        
        <CertificationsGrid certifications={certifications} />
      </div>
    </div>
  );
};

export default Index;