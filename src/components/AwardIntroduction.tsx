"use client";

import React from "react";
import { motion } from "framer-motion";

const AwardIntroduction: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-6">
              Recognized Excellence
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              UBBIM Resources has been honored by the SME Association of Malaysia for our outstanding contributions to the construction industry. This recognition reflects our unwavering commitment to quality, innovation, and sustainable practices that set new standards for the sector.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              As a leader in AI integration, digital twin technology, and sustainable construction materials, we continue to push boundaries and deliver solutions that shape the future of built environments while protecting our planet for generations to come.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardIntroduction;