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
              We are proud to be recognized by the SME Association of Malaysia for our excellence in innovation and responsible growth.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              These awards celebrate UBBIM's leadership in integrating AI, digital twin technologies, and sustainable materials to drive meaningful impact across Malaysia's construction sector.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardIntroduction;