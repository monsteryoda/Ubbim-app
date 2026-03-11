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

  // Updated certifications data with 5 specific items
  const defaultCertifications: Certification[] = [
    {
      id: "1",
      title: "SME Corp Certificate",
      organization: "SME Corporation Malaysia",
      year: "2023",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      description: "Recognized certification for small and medium enterprises, highlighting our commitment to excellence and innovation in the construction industry."
    },
    {
      id: "2",
      title: "Quality Excellence Award",
      organization: "International Construction Awards",
      year: "2023",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
      description: "Awarded for outstanding quality standards and precision in metal fabrication and construction processes."
    },
    {
      id: "3",
      title: "Digital Innovation Certificate",
      organization: "Tech Innovation Council",
      year: "2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      description: "Recognized for integrating advanced digital technologies and software solutions into construction project management."
    },
    {
      id: "4",
      title: "Sustainability Leadership",
      organization: "Green Building Council",
      year: "2023",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
      description: "Honored for implementing sustainable practices and eco-friendly solutions across all project operations."
    },
    {
      id: "5",
      title: "Environmental Stewardship",
      organization: "Environmental Protection Agency",
      year: "2024",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
      description: "Certified for outstanding environmental responsibility and commitment to sustainable development practices."
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