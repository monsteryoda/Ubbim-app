"use client";

import React from "react";
import esgAwardImage from "../assets/esg-award.jpg";
import ictAwardImage from "../assets/ict-award.jpg";

interface AwardFiltersProps {
  filterCategory: string;
  setFilterCategory: (category: string) => void;
  showTimeline: boolean;
  setShowTimeline: (show: boolean) => void;
}

const AwardFilters: React.FC<AwardFiltersProps> = ({
  filterCategory,
  setFilterCategory,
  showTimeline,
  setShowTimeline,
}) => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1A4B8C] mb-4">
            Our Awards & Recognition
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating excellence in construction, sustainability, and digital innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Award 1: Platinum Award for ESG */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="relative h-80">
              <img 
                src={esgAwardImage} 
                alt="Platinum Award for ESG Ceremony" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Leadership in Environmental & Social Governance</h4>
              <p className="text-gray-600 leading-relaxed">
                Recognized for outstanding leadership in integrating ESG principles across all operations. 
                Our commitment to sustainability includes eco-friendly construction materials, ISO 14001 
                environmental governance certification, and community empowerment programs that have 
                positively impacted over 50,000 lives. We lead the industry in reducing carbon footprint 
                while delivering exceptional construction quality.
              </p>
            </div>
          </div>

          {/* Award 2: Platinum Award for ICT/Digitalization */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="relative h-80">
              <img 
                src={ictAwardImage} 
                alt="Platinum Award for ICT/Digitalization Ceremony" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Pioneering Digital Construction Technology</h4>
              <p className="text-gray-600 leading-relaxed">
                Awarded for groundbreaking digital transformation in construction using cutting-edge 
                technologies. Our implementation of AI-powered project management, Building Information 
                Modeling (BIM), drone-based site analytics, and digital twin technology has increased 
                project efficiency by 35% while reducing costs and improving safety standards across 
                all our construction sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardFilters;