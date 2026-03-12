"use client";

import React from "react";
import { Award, Trophy, Medal, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Award: React.FC = () => {
  const awards = [
    {
      id: "1",
      title: "Malaysia Book of Records",
      year: "2022",
      icon: <Trophy className="w-12 h-12 text-[#1A4B8C]" />,
      description: "First construction company certified by ISO 14064-1:2018 Greenhouse Part 1",
      category: "Record"
    },
    {
      id: "2",
      title: "CIDB SCORE 3 Star Rating",
      year: "2022",
      icon: <Medal className="w-12 h-12 text-[#1A4B8C]" />,
      description: "Certificate of Achievement for Good management and technical capabilities, compliance to best practices and good project management",
      category: "Rating"
    },
    {
      id: "3",
      title: "ISO 9001:2015",
      year: "2017",
      icon: <Award className="w-12 h-12 text-[#1A4B8C]" />,
      description: "Quality Management System Certification by ACM-CCAS Limited",
      category: "Certification"
    },
    {
      id: "4",
      title: "ISO 14001:2015",
      year: "2019",
      icon: <Award className="w-12 h-12 text-[#1A4B8C]" />,
      description: "Environmental Management System Certification by ACM-CCAS Limited",
      category: "Certification"
    },
    {
      id: "5",
      title: "ISO 45001:2018",
      year: "2019",
      icon: <Award className="w-12 h-12 text-[#1A4B8C]" />,
      description: "Occupational Health and Safety Management System Certification by ACM-CCAS Limited",
      category: "Certification"
    },
    {
      id: "6",
      title: "ISO 14064-1:2018",
      year: "2022",
      icon: <Star className="w-12 h-12 text-[#1A4B8C]" />,
      description: "Greenhouse Gases Part 1 - Organization Level for Quantification and Reporting Greenhouse Gas Emission and Removals",
      category: "Certification"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F4F8] to-white pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-16 h-16 text-[#1A4B8C] mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A4B8C]">
              Our Awards & Certifications
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized excellence in quality, environmental management, and occupational health and safety
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {awards.map((award) => (
            <Card 
              key={award.id} 
              className="group hover:shadow-2xl transition-all duration-300 border-none overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    {award.icon}
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-[#1A4B8C]/10 text-[#1A4B8C] hover:bg-[#1A4B8C]/20">
                      {award.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {award.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {award.year}
                    </p>
                    <p className="text-gray-600">
                      {award.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-[#1A4B8C] rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-8">Our Commitment to Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">6</div>
                <div className="text-blue-200">Certifications & Awards</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2017</div>
                <div className="text-blue-200">First Certification Year</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-200">Compliance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;