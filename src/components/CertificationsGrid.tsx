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
  certifications: Certification[];
}

const CertificationsGrid: React.FC<CertificationsGridProps> = ({ certifications }) => {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert) => (
          <Card 
            key={cert.id} 
            className="group hover:shadow-xl transition-all duration-300 border-none cursor-pointer overflow-hidden"
            onClick={() => setSelectedCertification(cert)}
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#1A4B8C]/0 group-hover:bg-[#1A4B8C]/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Award className="w-12 h-12 text-[#4ADE80]" />
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
              <img
                src={selectedCertification.image}
                alt={selectedCertification.title}
                className="w-full h-auto"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-[#1A4B8C] mb-4">
                {selectedCertification.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Organization</p>
                  <p className="font-semibold text-gray-800">{selectedCertification.organization}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Year Awarded</p>
                  <p className="font-semibold text-[#4ADE80]">{selectedCertification.year}</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-600 leading-relaxed">
                  {selectedCertification.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationsGrid;