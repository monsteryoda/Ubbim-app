"use client";

import React, { useState, useEffect } from "react";
import { Award, Trophy, Medal, Star, Shield } from "lucide-react";
import AwardHero from "@/components/AwardHero";
import AwardFilters from "@/components/AwardFilters";
import AwardTimeline from "@/components/AwardTimeline";
import AwardGrid from "@/components/AwardGrid";
import AwardModal from "@/components/AwardModal";
import CommitmentSection from "@/components/CommitmentSection";
import AwardIntroduction from "@/components/AwardIntroduction";
import AwardsPhotoCollage from "@/components/AwardsPhotoCollage";
import LookingAheadBanner from "@/components/LookingAheadBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const Award: React.FC = () => {
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [showTimeline, setShowTimeline] = useState(false);

  useEffect(() => {
    document.title = "Award - UBBIM";
    return () => {
      document.title = "UBBIM - Integrated Solutions for the Built Environment";
    };
  }, []);

  const awards: AwardItem[] = [
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

  const filteredAwards = filterCategory === "all" 
    ? awards 
    : awards.filter(award => award.category === filterCategory);

  const sortedAwards = [...filteredAwards].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Navbar />
      <AwardHero />
      <AwardFilters 
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        showTimeline={showTimeline}
        setShowTimeline={setShowTimeline}
      />
      <AwardIntroduction />
      <AwardTimeline 
        awards={sortedAwards}
        selectedCertification={selectedCertification}
        setSelectedCertification={setSelectedCertification}
        showTimeline={showTimeline}
      />
      <AwardGrid 
        awards={sortedAwards}
        selectedCertification={selectedCertification}
        setSelectedCertification={setSelectedCertification}
      />
      <CommitmentSection />
      <AwardsPhotoCollage />
      <LookingAheadBanner />
      <Footer />
    </div>
  );
};

export default Award;