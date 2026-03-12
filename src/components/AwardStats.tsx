"use client";

import React from "react";
import { Award, Calendar, CheckCircle, Building2 } from "lucide-react";
import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const AwardStats: React.FC = () => {
  const stats: StatItem[] = [
    { value: "6", label: "Certifications", icon: <Award className="w-6 h-6" /> },
    { value: "2017", label: "First Award", icon: <Calendar className="w-6 h-6" /> },
    { value: "100%", label: "Compliance", icon: <CheckCircle className="w-6 h-6" /> },
    { value: "20+", label: "Years Experience", icon: <Building2 className="w-6 h-6" /> },
  ];

  return (
    <section className="py-12 -mt-8 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1A4B8C] to-[#2563eb] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#1A4B8C] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardStats;