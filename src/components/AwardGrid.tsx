"use client";

import React from "react";

interface AwardGridProps {
  awards: any[];
  selectedCertification: string | null;
  setSelectedCertification: (id: string | null) => void;
}

const AwardGrid: React.FC<AwardGridProps> = () => {
  return (
    <div className="container mx-auto px-4">
      {/* AwardGrid component removed - replaced with AwardFilters */}
    </div>
  );
};

export default AwardGrid;