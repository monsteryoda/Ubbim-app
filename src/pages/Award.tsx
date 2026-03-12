"use client";

import React, { useState } from "react";
import { Award, Trophy, Medal, Star, Shield, CheckCircle, ChevronRight, X, Sparkles, Calendar, Building2, Filter, Clock, TrendingUp, ArrowUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Award: React.FC = () => {
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [showTimeline, setShowTimeline] = useState(false);

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

  const floatingIcons = [
    { icon: <Award className="w-8 h-8" />, top: "10%", left: "5%", delay: 0 },
    { icon: <Star className="w-6 h-6" />, top: "20%", right: "10%", delay: 0.5 },
    { icon: <Trophy className="w-7 h-7" />, top: "60%", left: "15%", delay: 1 },
    { icon: <Medal className="w-5 h-5" />, top: "70%", right: "5%", delay: 1.5 },
    { icon: <Shield className="w-6 h-6" />, top: "80%", left: "8%", delay: 2 },
  ];

  const categories = ["all", "Certification", "Record", "Rating"];
  
  const filteredAwards = filterCategory === "all" 
    ? awards 
    : awards.filter(award => award.category === filterCategory);

  const sortedAwards = [...filteredAwards].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 pt-24 pb-16">
      {/* Hero Section */}
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
              {[
                { value: "6", label: "Certifications", icon: <Award className="w-6 h-6" /> },
                { value: "2017", label: "First Award", icon: <Calendar className="w-6 h-6" /> },
                { value: "100%", label: "Compliance", icon: <CheckCircle className="w-6 h-6" /> },
                { value: "20+", label: "Years Experience", icon: <Building2 className="w-6 h-6" /> },
              ].map((stat, index) => (
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

      {/* Filter & View Toggle Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="w-5 h-5 text-[#1A4B8C] mr-2" />
              <span className="text-gray-700 font-medium mr-2">Filter by:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  variant={filterCategory === category ? "default" : "outline"}
                  className={`capitalize ${
                    filterCategory === category 
                      ? "bg-[#1A4B8C] text-white" 
                      : "text-gray-700 hover:bg-[#1A4B8C]/10"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium mr-2">View:</span>
              <Button
                onClick={() => setShowTimeline(!showTimeline)}
                variant={showTimeline ? "default" : "outline"}
                className={showTimeline ? "bg-[#1A4B8C] text-white" : "text-gray-700 hover:bg-[#1A4B8C]/10"}
              >
                {showTimeline ? (
                  <>
                    <Award className="w-4 h-4 mr-2" />
                    Grid View
                  </>
                ) : (
                  <>
                    <Clock className="w-4 h-4 mr-2" />
                    Timeline
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline View */}
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
                  {sortedAwards.map((award, index) => (
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
            {sortedAwards.map((award, index) => (
              <motion.div key={award.id} variants={itemVariants} style={{ delay: index * 0.1 }}>
                <Card 
                  className={`group hover:shadow-2xl transition-all duration-500 border-none overflow-hidden cursor-pointer bg-white ${award.borderColor} border-2 hover:-translate-y-2`}
                  onClick={() => setSelectedCertification(award.id)}
                >
                  <CardContent className="p-8">
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCertification && (
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
              {awards.find(a => a.id === selectedCertification) && (
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCertification(null)}
                    className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#1A4B8C] hover:text-white transition-colors z-10 shadow-lg"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                  
                  <div className="p-8">
                    {awards.find(a => a.id === selectedCertification) && (
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", damping: 15 }}
                          className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${awards.find(a => a.id === selectedCertification)?.color} text-white mb-6 shadow-2xl`}
                        >
                          {awards.find(a => a.id === selectedCertification)?.icon}
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Badge className="mb-4 bg-[#1A4B8C]/10 text-[#1A4B8C]">
                            {awards.find(a => a.id === selectedCertification)?.category}
                          </Badge>
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                            {awards.find(a => a.id === selectedCertification)?.title}
                          </h2>
                          <p className="text-xl text-gray-500 mb-6">
                            {awards.find(a => a.id === selectedCertification)?.year}
                          </p>
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto"
                          >
                            {awards.find(a => a.id === selectedCertification)?.description}
                          </motion.p>
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Commitment Section */}
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
    </div>
  );
};

export default Award;