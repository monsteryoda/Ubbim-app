"use client";

import React from "react";
import { Globe } from "lucide-react";

const LookingAheadBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Globe Icon and Heading */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-6 h-6 text-[#1A4B8C]" />
              <h2 className="text-2xl font-semibold text-[#1A4B8C] tracking-wide">
                Looking Ahead
              </h2>
            </div>
            <div className="w-24 h-1 bg-[#1A4B8C] rounded-full" />
          </div>

          {/* Centered Text on Light Gray Background */}
          <div className="bg-gray-100 rounded-2xl p-12 text-center">
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              As we continue our journey, we remain dedicated to transforming the construction landscape — blending technology, sustainability, and human innovation to create lasting value for our clients and communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookingAheadBanner;