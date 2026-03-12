"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Link } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "@/components/Navbar";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
}

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [highlightsIndex, setHighlightsIndex] = useState(0);

  const projects: Project[] = [
    {
      id: "1",
      title: "Site Clearance Earthwork, Road & Drainage and Detention Pond Works for Kualiti Alam Sdn Bhd",
      description: "A modern residential development featuring sustainable design and premium amenities.",
      image: "/src/assets/projects/construction-site.jpg",
      category: "Residential",
      year: "2023"
    },
    {
      id: "2",
      title: "Development of Scheduled Waste Management Centre (\"SWMCJ\") Infrastructure Package for Cenviro Johor Sdn Bhd.",
      description: "State-of-the-art corporate headquarters with green building certification.",
      image: "/src/assets/projects/ubbim-hq.jpg",
      category: "Commercial",
      year: "2022"
    },
    {
      id: "3",
      title: "Modularised Incinerator Project for Kualiti Alam Sdn Bhd",
      description: "Sustainable industrial complex designed for energy efficiency and minimal environmental impact.",
      image: "/src/assets/projects/eco-industrial-park.jpg",
      category: "Industrial",
      year: "2023"
    },
    {
      id: "4",
      title: "Design and Construction of Depolution System Plant at Tanjong Malim Perak for M/S Special Builder Sdn Bhd",
      description: "Modern transportation hub integrating multiple transit systems with retail and office spaces.",
      image: "/src/assets/projects/transit-hub.jpg",
      category: "Infrastructure",
      year: "2024"
    },
    {
      id: "5",
      title: "Design, Fabrication and Erection of Storage Tank and Process Equipments for Cenviro Recovery and Recycling Plant",
      description: "Eco-friendly resort featuring sustainable architecture and nature-integrated design.",
      image: "/src/assets/projects/green-valley-resort.jpg",
      category: "Industrial",
      year: "2023"
    },
    {
      id: "6",
      title: "Fabrication & Erection of Structure Steel for the Ampang Line LRT extension project",
      description: "Integrated smart city development with IoT-enabled infrastructure and sustainable systems.",
      image: "/src/assets/projects/smart-city-plaza.jpg",
      category: "Infrastructure",
      year: "2024"
    },
    {
      id: "7",
      title: "Construction of PDRM Training Centre in Simpang Pulai, Pahang",
      description: "Comprehensive environmental cleanup and treatment facility for contaminated industrial land.",
      image: "/src/assets/projects/environmental-facility.jpg",
      category: "Infrastructure",
      year: "2024"
    },
    {
      id: "8",
      title: "High-Rise Commercial Tower Development in Kuala Lumpur City Centre",
      description: "Premium office tower with smart building technology and LEED certification.",
      image: "/src/assets/projects/commercial-tower.jpg",
      category: "Commercial",
      year: "2024"
    },
    {
      id: "9",
      title: "Sustainable Housing Estate with Green Community Spaces",
      description: "Eco-friendly residential community with solar panels and rainwater harvesting systems.",
      image: "/src/assets/projects/green-housing.jpg",
      category: "Residential",
      year: "2024"
    },
    {
      id: "10",
      title: "Advanced Manufacturing Facility for Automotive Industry",
      description: "State-of-the-art production plant with automated assembly lines and quality control systems.",
      image: "/src/assets/projects/manufacturing-facility.jpg",
      category: "Industrial",
      year: "2024"
    },
    {
      id: "11",
      title: "Regional Highway Expansion and Bridge Construction Project",
      description: "Major infrastructure upgrade connecting urban centers with modern bridge structures.",
      image: "/src/assets/projects/highway-bridge.jpg",
      category: "Infrastructure",
      year: "2024"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextHighlightsSlide = () => {
    setHighlightsIndex((prev) => (prev + 1) % 7);
  };

  const prevHighlightsSlide = () => {
    setHighlightsIndex((prev) => (prev - 1 + 7) % 7);
  };

  const goToHighlightsSlide = (index: number) => {
    setHighlightsIndex(index);
  };

  const digitalSolutions = [
    {
      title: "Digital Permit to Work System (e-ptw) for an incineration plant",
      image: "/src/assets/projects/highlights-banner.png"
    },
    {
      title: "Project Management System for Shutdown Operation",
      image: "/src/assets/projects/highlights-2.png"
    },
    {
      title: "Aerial Analytics Services for an Earthworks Project in Port Dickson",
      image: "/src/assets/projects/highlights-3.png"
    },
    {
      title: "3D Scanning and Facility Management System for Large Mechanical Room",
      image: "/src/assets/projects/highlights-4.png"
    },
    {
      title: "3D Process Animation Video for a Waste to Energy Plant in Johor",
      image: "/src/assets/projects/highlights-5.png"
    },
    {
      title: "Development of Building Contractors App (BEENA) for Association of Construction Project Managers",
      image: "/src/assets/projects/highlights-7.png"
    },
    {
      title: "Virtual Reality Remodelling of a Storage Warehouse in Melaka",
      image: "/src/assets/projects/highlights-9.png"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Header Section */}
      <section className="relative bg-[#1A4B8C] text-white py-24 lg:py-32 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              PROJECTS
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Explore Our Success Stories in the Built Environment and Digital Innovation
            </p>
          </div>
        </div>
      </section>

      {/* Main Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Built Environment Projects
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the diverse range of projects we've delivered across residential, commercial, industrial, and infrastructure sectors.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {projects.map((project) => (
                    <div key={project.id} className="w-full flex-shrink-0">
                      <Card className="border-none">
                        <CardContent className="p-0">
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            
                            {/* Project Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                              <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-[#1A4B8C] border-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-[#1A4B8C] border-2"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-[#1A4B8C] w-8" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Solutions Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Digital Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Innovative digital solutions that transform how projects are planned, executed, and managed.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${highlightsIndex * 100}%)` }}
                >
                  {digitalSolutions.map((solution, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <Card className="border-none">
                        <CardContent className="p-0">
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <img
                              src={solution.image}
                              alt={solution.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                              <h4 className="text-2xl font-bold mb-2">{solution.title}</h4>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <Button
                onClick={prevHighlightsSlide}
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-[#1A4B8C] border-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={nextHighlightsSlide}
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-[#1A4B8C] border-2"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {digitalSolutions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToHighlightsSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === highlightsIndex 
                        ? "bg-[#1A4B8C] w-8" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
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
                  <RouterLink to="/" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Home
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/services" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Services
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/projects" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Projects
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/about" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    About Us
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/contact" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Contact
                  </RouterLink>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <RouterLink to="/services/design-build" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Design & Build
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/firefighting" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Firefighting Services
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/services/structural-repair" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Structural Repair
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/services/security-surveillance" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Security & Surveillance
                  </RouterLink>
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

export default Projects;