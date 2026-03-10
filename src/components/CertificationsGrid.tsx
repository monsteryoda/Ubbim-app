"use client";

import React, { useState } from "react";
import { X, Award } from "lucide-react";
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
            className="group hover:shadow-xl transition-all duration-300 border-none cursor-pointer overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50"
            onClick={() => setSelectedCertification(cert)}
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Award className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{cert.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{cert.organization}</p>
                  <p className="text-gray-500 text-xs">{cert.year} • {cert.description}</p>
                </div>
              </div>
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
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedCertification.title}</h2>
                <p className="text-gray-600 mb-2">{selectedCertification.organization}</p>
                <p className="text-gray-500 text-sm mb-4">{selectedCertification.year}</p>
                <p className="text-gray-700">{selectedCertification.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationsGrid;