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
  const defaultCertifications: Certification[] = [];

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
            <div className="relative overflow-hidden bg-gray-100">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-500"
              />
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
              <img
                src={selectedCertification.image}
                alt={selectedCertification.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationsGrid;