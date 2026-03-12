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
  hasLightbox?: boolean;
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
      description: "Quality Management System Certification",
      hasLightbox: true
    },
    {
      id: "2",
      title: "ISO 14001:2015",
      organization: "ACM-CCAS Limited",
      year: "2019",
      image: "/src/assets/certifications/14001.png",
      description: "Environmental Management System Certification",
      hasLightbox: false
    },
    {
      id: "3",
      title: "ISO 45001:2018",
      organization: "ACM-CCAS Limited",
      year: "2019",
      image: "/src/assets/certifications/iso-45001-2018.png",
      description: "Occupational Health and Safety Management System Certification",
      hasLightbox: true
    }
  ];

  const displayCertifications = certifications || defaultCertifications;

  return (
    <>
      <div className="space-y-6 max-w-4xl mx-auto">
        {displayCertifications.map((cert) => (
          <Card 
            key={cert.id} 
            className={`group hover:shadow-xl transition-all duration-300 border-none overflow-hidden ${
              cert.hasLightbox !== false ? "cursor-pointer" : ""
            }`}
            onClick={() => cert.hasLightbox !== false && setSelectedCertification(cert)}
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/2" style={{ paddingBottom: "100%" }}>
                {cert.image && (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-2">{cert.organization} • {cert.year}</p>
                <p className="text-gray-500">{cert.description}</p>
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
              {selectedCertification.image && (
                <img
                  src={selectedCertification.image}
                  alt={selectedCertification.title}
                  className="w-full h-auto"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationsGrid;