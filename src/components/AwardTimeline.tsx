"use client";

import React from "react";
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

interface AwardItem {
  id: string;
  title: string;
  year: string;
  icon: React.ReactNode;
  description: string;
  category: string;
  color: string;
}

interface AwardTimelineProps {
  awards: AwardItem[];
  selectedCertification: string | null;
  setSelectedCertification: (id: string | null) => void;
  showTimeline: boolean;
}

const AwardTimeline: React.FC<AwardTimelineProps> = ({
  awards,
  selectedCertification,
  setSelectedCertification,
  showTimeline,
}) => {
  return (
    <AnimatePresence>
      {showTimeline && (
        <motion.section
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12"
        >
          <div className="container mx-auto px-4">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1A4B8C] via-[#2563eb] to-[#1A4B8C]" />
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#4ADE80] rounded-full border-4 border-white shadow-lg transform -translate-x-1/2" />
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}>
                      <Card 
                        className="hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        onClick={() => setSelectedCertification(award.id)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${award.color} text-white`}>
                              {award.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <Badge className="bg-[#1A4B8C]/10 text-[#1A4B8C]">
                                  {award.category}
                                </Badge>
                                <span className="text-sm text-gray-500 font-medium">{award.year}</span>
                              </div>
                              <h3 className="text-lg font-bold text-gray-800 mb-1">
                                {award.title}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {award.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default AwardTimeline;