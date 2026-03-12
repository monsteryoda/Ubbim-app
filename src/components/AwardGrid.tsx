"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AwardItem {
  id: string;
  title: string;
  year: string;
  icon: React.ReactNode;
  description: string;
  category: string;
  color: string;
  borderColor: string;
}

interface AwardGridProps {
  awards: AwardItem[];
  selectedCertification: string | null;
  setSelectedCertification: (id: string | null) => void;
}

const AwardGrid: React.FC<AwardGridProps> = ({
  awards,
  selectedCertification,
  setSelectedCertification,
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {awards.map((award, index) => (
          <motion.div key={award.id} variants={itemVariants} style={{ delay: index * 0.1 }}>
            <div 
              className={`group hover:shadow-2xl transition-all duration-500 border-none overflow-hidden cursor-pointer bg-white ${award.borderColor} border-2 hover:-translate-y-2 rounded-2xl`}
              onClick={() => setSelectedCertification(award.id)}
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="flex items-start space-x-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${award.color} text-white shadow-lg`}
                  >
                    {award.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-[#1A4B8C]/10 text-[#1A4B8C] hover:bg-[#1A4B8C]/20">
                        {award.category}
                      </Badge>
                      <span className="text-sm text-gray-500 font-medium">{award.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#1A4B8C] transition-colors">
                      {award.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {award.description}
                </p>
                
                <motion.div
                  className="flex items-center text-[#1A4B8C] font-semibold"
                  whileHover={{ x: 8 }}
                >
                  <span>View Details</span>
                  <ChevronRight className="w-5 h-5 ml-1" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AwardGrid;