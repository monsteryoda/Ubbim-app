"use client";

import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A4B8C] text-white py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-300 text-sm">
          © Copyright {currentYear} UBBIM
        </p>
      </div>
    </footer>
  );
};

export default Footer;