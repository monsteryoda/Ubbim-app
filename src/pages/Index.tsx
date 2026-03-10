"use client";

import React from "react";
import LogoCarousel from "../components/LogoCarousel";

const Index: React.FC = () => {
  const logos = [
    {
      name: "CIDB",
      image: "/src/assets/logos/cidb.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <LogoCarousel logos={logos} />
    </div>
  );
};

export default Index;