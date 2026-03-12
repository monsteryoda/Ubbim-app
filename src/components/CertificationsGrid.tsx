"use client";

import React, { useState } from "react";
import { X, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

  // Core certifications data
  const defaultCertifications: Certification[] = [
    {
      id: "1",
      title: "ISO 9001:2015",
      organization: "ACM-CCAS Limited",
      year: "2017",
      image: "/src/assets/certifications/iso-9001-2015.png",
      description: "Quality Management System Certification",
      hasLightbox: true
    },
    {
      id: "2",
      title: "ISO 14001:2015",
      organization: "ACM-CCAS Limited",
      year: "2019",
      image: "/src/assets/certifications/iso-14001-2015.png",
      description: "Environmental Management System Certification",
      hasLightbox: true
    },
    {
      id: "3",
      title: "ISO 45001:2018",
      organization: "ACM-CCAS Limited",
      year: "2019",
      image: "/src/assets/certifications/iso-45001-2018.png",
      description: "Occupational Health and Safety Management System Certification",
      hasLightbox: true
    },
    {
      id: "4",
      title: "ISO 14064-1:2018",
      organization: "Institute of Quality Malaysia",
      year: "2022",
      image: "/src/assets/certifications/iso-14064-1.png",
      description: "Greenhouse Gases Part 1 - Organization Level for Quantification and Reporting Greenhouse Gas Emission and Removals",
      hasLightbox: true
    },
    {
      id: "5",
      title: "CIDB G7",
      organization: "CIDB Malaysia",
      year: "2022",
      image: "/src/assets/certifications/g7.png",
      description: "General Construction Class 7 Rating",
      hasLightbox: true
    },
    {
      id: "6",
      title: "Malaysia Book of Records",
      organization: "Malaysia Book of Records",
      year: "2022",
      image: "/src/assets/certifications/malaysia-book.png",
      description: "First construction company certified by ISO 14064-1:2018 Greenhouse Part 1",
      hasLightbox: true
    }
  ];

  const displayCertifications = certifications || defaultCertifications;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {displayCertifications.map((cert) => (
          <Card 
            key={cert.id} 
            className="group hover:shadow-2xl transition-all duration-300 border-none overflow-hidden cursor-pointer"
            onClick={() => cert.hasLightbox !== false && setSelectedCertification(cert)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-[9/16] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                {cert.image && (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A4B8C]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedCertification && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertification(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedCertification(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:text-[#1A4B8C] transition-colors z-10"
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