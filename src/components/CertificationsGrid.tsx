"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
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
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);

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
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {displayCertifications.map((cert) => (
          <Card 
            key={cert.id} 
            className="group hover:shadow-xl transition-all duration-300 border-none cursor-pointer overflow-hidden"
            onClick={() => setSelectedCertification(cert)}
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
          </Card>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedCertification && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertification(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedCertification(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedCertification.title}</h3>
                <p className="text-gray-600 mb-2"><strong>Organization:</strong> {selectedCertification.organization}</p>
                <p className="text-gray-600 mb-2"><strong>Year:</strong> {selectedCertification.year}</p>
                <p className="text-gray-600">{selectedCertification.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationsGrid;