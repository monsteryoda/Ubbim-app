"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, Trophy, Medal, Star, Building2, Users, TrendingUp, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const Award = () => {
  const awards = [
    {
      title: "Malaysia Book of Records",
      year: "2022",
      description: "First construction company certified by ISO 14064-1:2018 Greenhouse Part 1",
      icon: Trophy,
      category: "Environmental Excellence"
    },
    {
      title: "CIDB SCORE 3 Star Rating",
      year: "2022",
      description: "Recognized for outstanding performance in safety, quality, and sustainability",
      icon: Medal,
      category: "Construction Excellence"
    },
    {
      title: "ISO 9001:2015 Certification",
      year: "2017",
      description: "Quality Management System Certification for construction services",
      icon: Award,
      category: "Quality Management"
    },
    {
      title: "ISO 14001:2015 Certification",
      year: "2019",
      description: "Environmental Management System Certification",
      icon: Award,
      category: "Environmental Management"
    },
    {
      title: "ISO 45001:2018 Certification",
      year: "2019",
      description: "Occupational Health and Safety Management System Certification",
      icon: Award,
      category: "Safety Excellence"
    },
    {
      title: "ISO 14064-1:2018 Certification",
      year: "2022",
      description: "Greenhouse Gases Part 1 - Organization Level for Quantification and Reporting",
      icon: Award,
      category: "Carbon Management"
    }
  ];

  const achievements = [
    { value: "1", label: "Malaysia Book of Records", icon: Trophy },
    { value: "3", label: "ISO Certifications", icon: Award },
    { value: "3", label: "CIDB Star Rating", icon: Medal },
    { value: "20+", label: "Years of Excellence", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1A4B8C] text-white py-24 lg:py-32 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565514020176-db79237b6d7a?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AWARDS & RECOGNITIONS
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Celebrating Excellence in Construction and Innovation
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-2xl p-8 shadow-lg">
                <achievement.icon className="w-12 h-12 mx-auto mb-4 text-[#1A4B8C]" />
                <div className="text-4xl md:text-5xl font-bold text-[#1A4B8C] mb-2">
                  {achievement.value}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              OUR AWARDS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognition for our commitment to excellence, innovation, and sustainability in the construction industry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-[#1A4B8C]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#1A4B8C] transition-colors duration-300">
                      <award.icon className="w-8 h-8 text-[#1A4B8C] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <span className="text-sm text-[#1A4B8C] font-semibold">{award.category}</span>
                      <h3 className="text-xl font-bold text-[#1A4B8C] mt-1">
                        {award.title}
                      </h3>
                      <span className="text-sm text-gray-500">{award.year}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A4B8C]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Journey of Excellence
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Partner with us and experience the quality that has earned us these prestigious recognitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#4ADE80] hover:bg-[#3dd673] text-[#1A4B8C] px-8 py-6 text-lg font-semibold">
              Contact Us
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1A4B8C] px-8 py-6 text-lg font-semibold">
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A4B8C] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/ubbim-logo.png" 
                  alt="UBBIM Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                UBBIM delivers comprehensive construction solutions with a focus on quality, innovation, and client satisfaction.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/services/design-build" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Design & Build
                  </Link>
                </li>
                <li>
                  <Link to="/firefighting" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Firefighting Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/structural-repair" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Structural Repair
                  </Link>
                </li>
                <li>
                  <Link to="/services/security-surveillance" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Security & Surveillance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#4ADE80] mt-0.5" />
                  <span className="text-gray-300">
                    No. 219, Jalan S2 B10,<br />
                    Seremban 2, 70300 Seremban,<br />
                    Negeri Sembilan
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#4ADE80]" />
                  <span className="text-gray-300">+606-6016007</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#4ADE80]" />
                  <span className="text-gray-300">admin@ubbim.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} UBBIM. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-[#4ADE80] text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-[#4ADE80] text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Award;