"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/sustainability-report", label: "Sustainability Report" },
    { path: "/awards", label: "Awards" },
    { path: "/whistleblower", label: "Whistleblower Channel" },
    { path: "/contact", label: "Contact Us" },
  ];

  const legalLinks = [
    { path: "#", label: "Privacy Policy" },
    { path: "#", label: "Terms of Use" },
    { path: "#", label: "Code of Ethics" },
  ];

  return (
    <footer className="bg-[#1A4B8C] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1A4B8C] font-bold text-xl">U</span>
              </div>
              <span className="text-xl font-bold">Ubbim</span>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Building sustainable infrastructure for a better tomorrow. 
              Committed to excellence, innovation, and social responsibility.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4ADE80] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4ADE80] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4ADE80] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4ADE80] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-[#4ADE80] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4ADE80] mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">
                  Av. Presidente Wilson, 231<br />
                  Rio de Janeiro, RJ, Brazil<br />
                  CEP 20030-905
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#4ADE80] shrink-0" />
                <span className="text-gray-300 text-sm">+55 21 3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#4ADE80] shrink-0" />
                <span className="text-gray-300 text-sm">contato@ubbim.com</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-[#4ADE80] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            {currentYear} Ubbim. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">
            CNPJ: 12.345.678/0001-90
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;