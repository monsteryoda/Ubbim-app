"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Star, TrendingUp, FileCheck, Globe } from "lucide-react";

interface StackCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const StackCard: React.FC<StackCardProps> = ({ icon, title, description, color }) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold text-[#1A4B8C] mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const StackCards: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
            OUR CORE STRENGTHS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built on a foundation of experience, certified excellence, and national recognition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Experience Card */}
          <StackCard
            icon={<TrendingUp className="w-8 h-8 text-white" />}
            title="20+ Years Experience"
            description="Decades of expertise in construction project management, delivering complex infrastructure projects across multiple countries with proven track record of success."
            color="bg-[#1A4B8C]"
          />

          {/* ISO Certification Card */}
          <StackCard
            icon={<Shield className="w-8 h-8 text-white" />}
            title="ISO Certified Excellence"
            description="ISO 9001, 14001, and 45001 certified for quality, environmental management, and occupational health & safety standards ensuring world-class service delivery."
            color="bg-[#4ADE80]"
          />

          {/* National Recognition Card */}
          <StackCard
            icon={<Award className="w-8 h-8 text-white" />}
            title="National Recognition"
            description="Platinum Business Awards 2025 for ESG and ICT Digitalization, recognized by SME Malaysia for innovation, sustainability, and digital transformation leadership."
            color="bg-[#1A4B8C]"
          />
        </div>
      </div>
    </section>
  );
};

export default StackCards;