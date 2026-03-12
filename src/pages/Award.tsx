"use client";

import React, { useState } from "react";
import { Award, Trophy, Medal, Star, Shield, CheckCircle, ChevronRight, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Award: React.FC = () => {
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null);

  const awards = [
    {
      id: "1",
      title: "Malaysia Book of Records",
      year: "2022",
      icon: <Trophy className="w-12 h-12" />,
      description: "First construction company certified by ISO 14064-1:2018 Greenhouse Part 1",
      category: "Record",
      color: "from-yellow-400 to-orange-500",
      borderColor: "border-yellow-400"
    },
    {
      id: "2",
      title: "CIDB SCORE 3 Star Rating",
      year: "2022",
      icon: <Medal className="w-12 h-12" />,
      description: "Certificate of Achievement for Good management and technical capabilities, compliance to best practices and good project management",
      category: "Rating",
      color: "from-blue-400 to-blue-600",
      borderColor: "border-blue-400"
    },
    {
      id: "3",
      title: "ISO 9001:2015",
      year: "2017",
      icon: <Shield className="w-12 h-12" />,
      description: "Quality Management System Certification by ACM-CCAS Limited",
      category: "Certification",
      color: "from-green-400 to-green-600",
      borderColor: "border-green-400"
    },
    {
      id: "4",
      title: "ISO 14001:2015",
      year: "2019",
      icon: <Shield className="w-12 h-12" />,
      description: "Environmental Management System Certification by ACM-CCAS Limited",
      category: "Certification",
      color: "from-emerald-400 to-emerald-600",
      borderColor: "border-emerald-400"
    },
    {
      id: "5",
      title: "ISO 45001:2018",
      year: "2019",
      icon: <Shield className="w-12 h-12" />,
      description: "Occupational Health and Safety Management System Certification by ACM-CCAS Limited",
      category: "Certification",
      color: "from-teal-400 to-teal-600",
      borderColor: "border-teal-400"
    },
    {
      id: "6",
      title: "ISO 14064-1:2018",
      year: "2022",
      icon: <Star className="w-12 h-12" />,
      description: "Greenhouse Gases Part 1 - Organization Level for Quantification and Reporting Greenhouse Gas Emission and Removals",
      category: "Certification",
      color: "from-purple-400 to-purple-600",
      borderColor: "border-purple-400"
    }
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1A4B8C]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A4B8C] via-[#2563eb] to-[#1A4B8C] opacity-90" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4ADE80] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Award className="w-20 h-20 text-[#4ADE80] animate-bounce" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#4ADE80] rounded-full animate-ping" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Awards & <span className="text-[#4ADE80]">Certifications</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Recognized excellence in quality, environmental management, and occupational health and safety
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1A4B8C] mb-2">6</div>
                <div className="text-gray-600 font-medium">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1A4B8C] mb-2">2017</div>
                <div className="text-gray-600 font-medium">First Award</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1A4B8C] mb-2">100%</div>
                <div className="text-gray-600 font-medium">Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1A4B8C] mb-2">20+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {awards.map((award) => (
              <motion.div key={award.id} variants={itemVariants}>
                <Card 
                  className={`group hover:shadow-2xl transition-all duration-500 border-none overflow-hidden cursor-pointer bg-white ${award.borderColor} border-2 hover:-translate-y-2`}
                  onClick={() => setSelectedCertification(award.id)}
                >
                  <CardContent className="p-8">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                      
                      <div className="flex items-start space-x-4 mb-6">
                        <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${award.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {award.icon}
                        </div>
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
                      
                      <div className="flex items-center text-[#1A4B8C] font-semibold group-hover:translate-x-2 transition-transform">
                        <span>View Details</span>
                        <ChevronRight className="w-5 h-5 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedCertification && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertification(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {awards.find(a => a.id === selectedCertification) && (
              <div className="relative">
                <button
                  onClick={() => setSelectedCertification(null)}
                  className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#1A4B8C] hover:text-white transition-colors z-10 shadow-lg"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="p-8">
                  {awards.find(a => a.id === selectedCertification) && (
                    <div className="text-center">
                      <div className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${awards.find(a => a.id === selectedCertification)?.color} text-white mb-6 shadow-2xl`}>
                        {awards.find(a => a.id === selectedCertification)?.icon}
                      </div>
                      <Badge className="mb-4 bg-[#1A4B8C]/10 text-[#1A4B8C]">
                        {awards.find(a => a.id === selectedCertification)?.category}
                      </Badge>
                      <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {awards.find(a => a.id === selectedCertification)?.title}
                      </h2>
                      <p className="text-xl text-gray-500 mb-6">
                        {awards.find(a => a.id === selectedCertification)?.year}
                      </p>
                      <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        {awards.find(a => a.id === selectedCertification)?.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* Commitment Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#1A4B8C] to-[#2563eb] rounded-3xl p-12 md:p-16 text-white text-center shadow-2xl"
          >
            <Award className="w-16 h-16 mx-auto mb-6 text-[#4ADE80]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Every certification represents our dedication to maintaining the highest standards in quality, safety, and environmental responsibility.
            </p>
            <Button className="bg-[#4ADE80] hover:bg-[#3dd673] text-[#1A4B8C] px-8 py-6 text-lg font-semibold">
              Learn More About Our Standards
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Award;