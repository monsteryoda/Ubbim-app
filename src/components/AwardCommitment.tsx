"use client";

import React from "react";
import { Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AwardCommitment: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#1A4B8C] to-[#2563eb] rounded-3xl p-12 md:p-16 text-white text-center shadow-2xl relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 bg-[#4ADE80]/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 4,
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="relative z-10"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              <Award className="w-16 h-16 mx-auto mb-6 text-[#4ADE80]" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto relative z-10">
              Every certification represents our dedication to maintaining the highest standards in quality, safety, and environmental responsibility.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10"
            >
              <Button className="bg-[#4ADE80] hover:bg-[#3dd673] text-[#1A4B8C] px-8 py-6 text-lg font-semibold shadow-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Learn More About Our Standards
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardCommitment;