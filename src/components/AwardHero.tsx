"use client";

import React from "react";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

const AwardHero: React.FC = () => {
  const floatingIcons = [
    { icon: <Award className="w-8 h-8" />, top: "10%", left: "5%", delay: 0 },
    { icon: <Award className="w-6 h-6" />, top: "20%", right: "10%", delay: 0.5 },
    { icon: <Award className="w-7 h-7" />, top: "60%", left: "15%", delay: 1 },
    { icon: <Award className="w-5 h-5" />, top: "70%", right: "5%", delay: 1.5 },
    { icon: <Award className="w-6 h-6" />, top: "80%", left: "8%", delay: 2 },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#1A4B8C]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A4B8C] via-[#2563eb] to-[#1A4B8C] opacity-90" />
        <div className="absolute inset-0">
          {floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              className="absolute text-[#4ADE80]/20"
              style={{ top: item.top, left: item.left, right: item.right }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
                rotate: [0, 15, 0]
              }}
              transition={{ 
                duration: 3,
                delay: item.delay,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2
            }}
            className="flex items-center justify-center mb-6"
          >
            <div className="relative">
              <Award className="w-20 h-20 text-[#4ADE80]" />
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-[#4ADE80] rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Awards & <span className="text-[#4ADE80]">Certifications</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Recognized excellence in quality, environmental management, and occupational health and safety
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardHero;