"use client";

import React from "react";
import { Card } from "@/components/ui/card";

interface Certification {
  id: string;
  title: string;
  organization: string;
  year: string;
  image: string;
  description: string;
}

interface CertificationsGridProps {
  certifications?: Certification[];
}

const CertificationsGrid: React.FC<CertificationsGridProps> = ({ certifications }) => {
  // Sample certifications data
  const defaultCertifications: Certification[] = [
    {
      id: "1",
      title: "ISO 9001:2015",
      organization: "ACM-CCAS Limited",
      year: "2017",
      image: "/src/assets/certifications/9001.png",
      description: "Quality Management System Certification"
    }
  ];

  const displayCertifications = certifications || defaultCertifications;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {displayCertifications.map((cert) => (
        <Card 
          key={cert.id} 
          className="group hover:shadow-xl transition-all duration-300 border-none overflow-hidden"
        >
          <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
            {cert.image && (
              <img
                src={cert.image}
                alt={cert.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            )}
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h3>
            <p className="text-gray-600 text-sm">{cert.organization}</p>
            <p className="text-gray-600 text-sm">{cert.year}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CertificationsGrid;