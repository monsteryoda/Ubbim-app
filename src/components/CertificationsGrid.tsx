"use client";

import React, { useState } from "react";
import { X, Award, Shield, FileText, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Certification {
  id: string;
  title: string;
  organization: string;
  year: string;
  image?: string;
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
      title: "ISO 14001:2015",
      organization: "ACM-CCAS Limited",
      year: "2019",
      description: "Environmental Management System Certification"
    }
  ];

  const displayCertifications = certifications || defaultCertifications;

  const getIcon = (title: string) => {
    if (title.includes("ISO")) return <Shield className="w-6 h-6" />;
    if (title.includes("Environmental") || title.includes("Sustainability")) return <Leaf className="w-6 h-6" />;
    if (title.includes("Award") || title.includes("Excellence")) return <Award className="w-6 h-6" />;
    return <FileText className="w-6 h-6" />;
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {displayCertifications.map((cert) => (
          <Card 
            key={cert.id} 
            className="group hover:shadow-xl transition-all duration-300 border-none cursor-pointer overflow-hidden"
            onClick={() => setSelectedCertification(cert)}
          >
            <div className="p-6">
              <div className="w-14 h-14 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1A4B8C] transition-colors duration-300">
                <div className="text-[#1A4B8C] group-hover:text-white transition-colors duration-300">
                  {getIcon(cert.title)}
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#1A4B8C] mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {cert.organization}
              </p>
              <p className="text-gray-500 text-xs mb-4">
                {cert.year}
              </p>
              <p className="text-gray-600 text-sm">
                {cert.description}
              </p>
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
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6">
              <button
                onClick={() => setSelectedCertification(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="w-16 h-16 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center mb-4">
                <div className="text-[#1A4B8C]">
                  {getIcon(selectedCertification.title)}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1A4B8C] mb-2">
                {selectedCertification.title}
              </h3>
              <p className="text-gray-600 mb-2">
                {selectedCertification.organization}
              </p>
              <p className="text-gray-500 text-sm mb-4">
                {selectedCertification.year}
              </p>
              <p className="text-gray-600">
                {selectedCertification.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationsGrid;