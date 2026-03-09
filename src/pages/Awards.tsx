"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Star, Medal, FileCheck, Globe, Leaf, Shield } from "lucide-react";

const Awards = () => {
  const recentAwards = [
    {
      title: "Best Infrastructure Company",
      organization: "Brazil Construction Awards",
      year: "2023",
      category: "Industry Excellence",
      description: "Recognized for outstanding contributions to Brazil's infrastructure development.",
      icon: Trophy,
      color: "text-amber-500"
    },
    {
      title: "Sustainability Leadership Award",
      organization: "Green Business Council",
      year: "2023",
      category: "ESG",
      description: "For exceptional commitment to environmental and social responsibility.",
      icon: Leaf,
      color: "text-[#4ADE80]"
    },
    {
      title: "Safety Excellence Platinum",
      organization: "National Safety Council",
      year: "2023",
      category: "Safety",
      description: "Zero serious accidents across all project sites for 3 consecutive years.",
      icon: Shield,
      color: "text-blue-500"
    },
    {
      title: "Innovation in Construction",
      organization: "Latin American Engineering Summit",
      year: "2022",
      category: "Innovation",
      description: "Pioneering use of sustainable materials and smart construction techniques.",
      icon: Star,
      color: "text-purple-500"
    }
  ];

  const previousAwards = [
    { title: "ISO 14001 Certification", year: "2021", org: "International Organization" },
    { title: "Best Employer in Construction", year: "2021", org: "Glassdoor Brazil" },
    { title: "OHSAS 18001 Certification", year: "2020", org: "BSI Group" },
    { title: "LEED Platinum Partner", year: "2020", org: "US Green Building Council" },
    { title: "Quality Management ISO 9001", year: "2019", org: "ISO Certification" },
    { title: "Corporate Governance Award", year: "2019", org: "IBGC" },
  ];

  const certifications = [
    { name: "ISO 9001", description: "Quality Management" },
    { name: "ISO 14001", description: "Environmental Management" },
    { name: "ISO 45001", description: "Occupational Health & Safety" },
    { name: "LEED Platinum", description: "Green Building Certification" },
    { name: "B Corp Certified", description: "Social & Environmental Performance" },
    { name: "GRI Standards", description: "Sustainability Reporting" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A4B8C] py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="bg-[#4ADE80] text-[#1A4B8C] mb-4">Recognition</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Awards & Certifications
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Our commitment to excellence, safety, and sustainability has been 
              recognized by industry leaders, institutions, and communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Awards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-12 text-center">
            Recent Awards
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {recentAwards.map((award, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#1A4B8C] transition-colors">
                      <award.icon className={`w-8 h-8 ${award.color} group-hover:text-white transition-colors`} />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">{award.category}</Badge>
                      <h3 className="text-xl font-bold text-[#1A4B8C] mb-1">{award.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">{award.organization} • {award.year}</p>
                      <p className="text-gray-600 text-sm">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Certifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Internationally recognized standards that validate our commitment to quality, 
              safety, and sustainability.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-none shadow-md text-center">
                <CardContent className="p-6">
                  <FileCheck className="w-10 h-10 mx-auto mb-4 text-[#1A4B8C]" />
                  <h4 className="font-bold text-[#1A4B8C] text-sm mb-1">{cert.name}</h4>
                  <p className="text-xs text-gray-500">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Awards Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-12 text-center">
            Previous Recognitions
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl overflow-hidden">
              <div className="divide-y divide-gray-200">
                {previousAwards.map((award, index) => (
                  <div key={index} className="flex items-center justify-between p-6 hover:bg-white transition-colors">
                    <div className="flex items-center gap-4">
                      <Medal className="w-6 h-6 text-[#4ADE80]" />
                      <span className="font-semibold text-gray-800">{award.title}</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <span className="text-gray-500">{award.org}</span>
                      <Badge variant="secondary">{award.year}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Quote */}
      <section className="py-16 bg-[#1A4B8C]">
        <div className="container mx-auto px-4 text-center">
          <Globe className="w-12 h-12 mx-auto mb-6 text-[#4ADE80]" />
          <blockquote className="text-2xl md:text-3xl font-bold text-white max-w-4xl mx-auto mb-6">
            "Excellence is not an act, but a habit that defines who we are."
          </blockquote>
          <p className="text-gray-300">— Ubbim Leadership Principle</p>
        </div>
      </section>
    </div>
  );
};

export default Awards;