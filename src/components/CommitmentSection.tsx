"use client";

import React from "react";
import { Leaf, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CommitmentItem {
  id: string;
  text: string;
}

const CommitmentSection: React.FC = () => {
  const commitments: CommitmentItem[] = [
    {
      id: "1",
      text: "Champion ESG-driven practices in construction",
    },
    {
      id: "2",
      text: "Pioneer digital adoption for project efficiency and transparency",
    },
    {
      id: "3",
      text: "Foster innovation through R&D in sustainable materials and AI integration",
    },
    {
      id: "4",
      text: "Support Malaysia's Construction 5.0 vision through continuous capability building",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Quote Block */}
          <div className="relative mb-12">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4ADE80] rounded-full" />
            <blockquote className="pl-6 italic text-xl md:text-2xl text-gray-700 leading-relaxed">
              "This recognition reinforces our mission to build a smarter, more sustainable future — one project at a time."
            </blockquote>
            <div className="mt-4 pl-6">
              <cite className="not-italic text-sm font-semibold text-[#1A4B8C]">
                — Managing Director, UBBIM Resources
              </cite>
            </div>
          </div>

          {/* Heading with Icon */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Leaf className="w-8 h-8 text-[#4ADE80] mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C]">
                Commitment to Excellence
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Our unwavering dedication to innovation and sustainability drives every project we undertake, ensuring we deliver value that transcends expectations.
            </p>
          </div>

          {/* Commitments List */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {commitments.map((item, index) => (
              <Card 
                key={item.id}
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#4ADE80]/10 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-[#4ADE80]" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;