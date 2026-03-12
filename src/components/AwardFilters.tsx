"use client";

import React from "react";

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
        {/* View toggle removed */}
      </div>
    </section>
  );
};

export default AwardFilters;