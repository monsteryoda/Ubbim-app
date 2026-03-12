"use client";

import React from "react";
import { Award, Clock, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AwardFiltersProps {
  filterCategory: string;
  setFilterCategory: (category: string) => void;
  showTimeline: boolean;
  setShowTimeline: (show: boolean) => void;
}

const AwardFilters: React.FC<AwardFiltersProps> = ({
  filterCategory,
  setFilterCategory,
  showTimeline,
  setShowTimeline,
}) => {
  const categories = ["all", "Certification", "Record", "Rating"];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default AwardFilters;