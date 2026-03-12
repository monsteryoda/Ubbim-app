"use client";

import React from "react";
import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

interface AwardModalProps {
  awards: AwardItem[];
  selectedCertification: string | null;
  setSelectedCertification: (id: string | null) => void;
}

const AwardModal: React.FC<AwardModalProps> = ({
  awards,
  selectedCertification,
  setSelectedCertification,
}) => {
  const selectedAward = awards.find(a => a.id === selectedCertification);

  return (
    <AnimatePresence>
      {selectedCertification && selectedAward && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertification(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCertification(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#1A4B8C] hover:text-white transition-colors z-10 shadow-lg"
              >
                <Award className="w-6 h-6" />
              </motion.button>
              
              <div className="p-8">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", damping: 15 }}
                    className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${selectedAward.color} text-white mb-6 shadow-2xl`}
                  >
                    {selectedAward.icon}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Badge className="mb-4 bg-[#1A4B8C]/10 text-[#1A4B8C]">
                      {selectedAward.category}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                      {selectedAward.title}
                    </h2>
                    <p className="text-xl text-gray-500 mb-6">
                      {selectedAward.year}
                    </p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                      {selectedAward.description}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AwardModal;