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
              <h4 className="text-xl font-bold text-gray-800 mb-4">Platinum Award for ESG</h4>
              <p className="text-gray-600 leading-relaxed text-justify">
                Recognized for our leadership in sustainability, UBBIM Resources integrates ESG principles across every stage of our projects — from turning industrial by-products into eco-friendly materials like CenPave to upholding transparent governance through ISO standards and empowering local communities through training. This award affirms our belief that innovation and sustainability can progress hand in hand to build a greener future.
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
              <h4 className="text-xl font-bold text-gray-800 mb-4">Platinum Award for ICT/Digitalization</h4>
              <p className="text-gray-600 leading-relaxed text-justify">
                Honored for driving digital transformation in Malaysia's construction sector, UBBIM Resources leverages AI, BIM, drone analytics, and digital twin technologies to enhance project efficiency, transparency, and safety. This award reflects our commitment to reshaping the built environment through purposeful innovation and future-ready digital practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* New Section Below */}
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1A4B8C] mb-4">
            Additional Recognition
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            More achievements that showcase our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Award 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="relative h-80">
              <img 
                src={esgAwardImage} 
                alt="Additional Award 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Award Title 1</h4>
              <p className="text-gray-600 leading-relaxed text-justify">
                Description text for the additional award goes here. This section highlights another achievement that demonstrates our dedication to quality and innovation in the construction industry.
              </p>
            </div>
          </div>

          {/* Award 4 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="relative h-80">
              <img 
                src={ictAwardImage} 
                alt="Additional Award 2" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Award Title 2</h4>
              <p className="text-gray-600 leading-relaxed text-justify">
                Description text for the second additional award goes here. This recognition further validates our position as a leader in sustainable and innovative construction practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardFilters;