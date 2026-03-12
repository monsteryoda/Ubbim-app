"use client";

import React from "react";
import { Award, Clock } from "lucide-react";
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
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* View Toggle */}
          <div className="flex items-center gap-2">
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