"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  TrendingDown, 
  Users, 
  Globe, 
  Zap, 
  Droplets,
  FileText,
  Download,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const SustainabilityReport = () => {
  const highlights = [
    { value: "45%", label: "Carbon Emissions Reduced", icon: TrendingDown },
    { value: "12M", label: "Trees Planted", icon: Leaf },
    { value: "85%", label: "Waste Recycled", icon: Zap },
    { value: "100%", label: "Projects with EIA", icon: FileText },
  ];

  const esgPillars = [
    {
      title: "Environmental",
      color: "bg-[#4ADE80]",
      items: [
        "Carbon neutrality by 2040",
        "100% renewable energy in operations by 2025",
        "Zero deforestation commitment",
        "Water usage reduction programs",
        "Biodiversity protection initiatives"
      ]
    },
    {
      title: "Social",
      color: "bg-[#1A4B8C]",
      items: [
        "Diversity and inclusion programs",
        "Local community development",
        "Safety-first workplace culture",
        "Employee wellness initiatives",
        "Education and training programs"
      ]
    },
    {
      title: "Governance",
      color: "bg-slate-700",
      items: [
        "Transparent reporting practices",
        "Ethical business conduct",
        "Anti-corruption compliance",
        "Board diversity (40% women)",
        "Stakeholder engagement"
      ]
    }
  ];

  const initiatives = [
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Advanced water recycling systems in all projects, reducing consumption by 35%."
    },
    {
      icon: Globe,
      title: "Biodiversity Protection",
      description: "Wildlife corridors and protected areas maintained across all project sites."
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Direct investment of 2% of project value in local community programs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A4B8C] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Badge className="bg-[#4ADE80] text-[#1A4B8C] mb-4">2023 Report</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sustainability Report
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              Our commitment to building a sustainable future goes beyond compliance. 
              We integrate environmental, social, and governance principles into every 
              aspect of our operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#4ADE80] text-[#1A4B8C] hover:bg-[#22c55e] font-semibold">
                <Download className="w-4 h-4 mr-2" /> Download PDF
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A4B8C]">
                View Previous Reports
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50">
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-[#4ADE80]" />
                <div className="text-4xl font-bold text-[#1A4B8C] mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              ESG Commitments
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Environmental, Social, and Governance framework guides every decision we make.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {esgPillars.map((pillar, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <div className={`h-2 ${pillar.color}`} />
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1A4B8C] mb-6">{pillar.title}</h3>
                  <ul className="space-y-4">
                    {pillar.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#4ADE80] mt-0.5 shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-12 text-center">
            Key Initiatives
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center mb-6">
                    <initiative.icon className="w-7 h-7 text-[#1A4B8C]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#1A4B8C]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Certified Sustainability
              </h2>
              <p className="text-gray-300">
                ISO 14001 certified | LEED Platinum partner | GRI Standards compliant
              </p>
            </div>
            <Button className="bg-[#4ADE80] text-[#1A4B8C] hover:bg-[#22c55e] font-semibold">
              Contact Sustainability Team <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityReport;