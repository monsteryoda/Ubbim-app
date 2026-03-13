"use client";

import React from "react";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const LookingAheadBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Globe Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2
            }}
            className="flex justify-center mb-4"
          >
            <Globe className="w-6 h-6 text-[#1A4B8C]" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-lg font-semibold text-[#1A4B8C] mb-4 tracking-wide"
          >
            LOOKING AHEAD
          </motion.h2>

          {/* Horizontal Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-0.5 bg-[#1A4B8C] mx-auto mb-8"
          />

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-100 rounded-2xl p-8 md:p-12"
          >
            <p className="text-gray-700 text-center text-lg md:text-xl leading-relaxed font-light">
              As we continue our journey, we remain dedicated to transforming the construction landscape — blending technology, sustainability, and human innovation to create lasting value for our clients and communities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LookingAheadBanner;