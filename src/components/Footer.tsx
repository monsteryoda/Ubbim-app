"use client";

import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    address: "No. 219, Jalan S2 B10, Seremban 2, 70300 Seremban, Negeri Sembilan",
    phone: "+606-6016007",
    email: "admin@ubbim.com",
  };

  return (
    <footer className="bg-[#1A4B8C] text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
          {/* Company Info */}
          <div className="flex items-center space-x-2">
            <img 
              src="/ubbim-logo.png" 
              alt="UBBIM Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span className="text-gray-300 text-xs">
                {contactInfo.address}
              </span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Phone className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span className="text-gray-300 text-xs">{contactInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Mail className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span className="text-gray-300 text-xs">{contactInfo.email}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-4 pt-3">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-1.5 md:space-y-0">
            <p className="text-gray-400 text-xs">
              © {currentYear} UBBIM. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#4ADE80] text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#4ADE80] text-xs transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;