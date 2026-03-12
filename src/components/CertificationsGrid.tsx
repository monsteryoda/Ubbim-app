"use client";

import React, { useState } from "react";
import { X, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import iso9001 from "@/assets/certifications/iso-9001.png";
import iso14001 from "@/assets/certifications/iso-14001.png";
import iso45001 from "@/assets/certifications/iso-45001-2018.png";
import iso14064 from "@/assets/certifications/14064.png";
import malaysiaBook from "@/assets/certifications/malaysia-book.png";
import cidbScore from "@/assets/certifications/2022.png";

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
      image: iso9001,
      description: "Quality Management System Certification",
      hasLightbox: true
    },
    {
      id: "2",
      title: "ISO 14001:2015",
      organization: "ACM-CCAS Limited",
      year: "2019",
      image: iso14001,
      description: "Environmental Management System Certification",
      hasLightbox: true
    },
    {
      id: "3",
      title: "ISO 45001:2018",
      organization: "ACM-CCAS Limited",
      year: "2019",
      image: iso45001,
      description: "Occupational Health and Safety Management System Certification",
      hasLightbox: true
    },
    {
      id: "4",
      title: "ISO 14064-1:2018",
      organization: "Institute of Quality Malaysia",
      year: "2022",
      image: iso14064,
      description: "Greenhouse Gases Part 1 - Organization Level for Quantification and Reporting Greenhouse Gas Emission and Removals",
      hasLightbox: true
    },
    {
      id: "5",
      title: "CIDB SCORE 3 Star Rating",
      organization: "CIDB Malaysia",
      year: "2022",
      image: cidbScore,
      description: "Certificate of Achievement for Good management and technical capabilities, compliance to best practices and good project management",
      hasLightbox: true
    },
    {
      id: "6",
      title: "Malaysia Book of Records",
      organization: "Malaysia Book of Records",
      year: "2022",
      image: malaysiaBook,
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
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                {cert.image && (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                )}
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
                  className="w-full aspect-square object-contain p-4"
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