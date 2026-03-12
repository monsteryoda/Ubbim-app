"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      title: "Advanced Manufacturing Facility for Automotive Industry",
      description: "State-of-the-art production plant with automated assembly lines and quality control systems.",
      image: "/src/assets/projects/manufacturing-facility.jpg",
      category: "Industrial",
      year: "2024"
    },
    {
      id: "10",
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
    setHighlightsIndex((prev) => (prev + 1) % projects.length);
  };

  const prevHighlightsSlide = () => {
    setHighlightsIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToHighlightsSlide = (index: number) => {
    setHighlightsIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A4B8C] mb-4">
            Built Environment Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Our Success Stories in the Built Environment and Digital Innovation
          </p>
        </div>

        {/* Main Carousel */}
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

        {/* Digital Solutions Carousel */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#1A4B8C] text-center mb-8">
            Digital Solutions
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${highlightsIndex * 100}%)` }}
                >
                  {projects.map((project, index) => (
                    <div key={project.id} className="w-full flex-shrink-0">
                      <Card className="border-none">
                        <CardContent className="p-0">
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <img
                              src={index === 0 ? "/src/assets/projects/highlights-banner.png" : index === 1 ? "/src/assets/projects/highlights-2.png" : index === 2 ? "/src/assets/projects/highlights-3.png" : index === 3 ? "/src/assets/projects/highlights-4.png" : index === 4 ? "/src/assets/projects/highlights-5.png" : index === 5 ? "/src/assets/projects/highlights-6.png" : index === 6 ? "/src/assets/projects/highlights-7.png" : project.image}
                              alt={index === 0 ? "Financial Summary Dashboard" : index === 1 ? "Lorry Movement Tracking" : index === 2 ? "Aerial Analytics Services" : index === 3 ? "3D Scanning and Facility Management" : index === 4 ? "3D Process Animation Video for a Waste to Energy Plant in Johor" : index === 5 ? "Virtual Reality Remodelling of a Storage Warehouse in Melaka" : index === 6 ? "Development of Building Contractors App (BEENA) for Association of Construction Project Managers" : project.title}
                              className="w-full h-full object-cover"
                            />
                            {index === 0 && (
                              <>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                  <h4 className="text-2xl font-bold mb-2">Project Management System for Shutdown Operation</h4>
                                </div>
                              </>
                            )}
                            {index === 1 && (
                              <>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                  <h4 className="text-2xl font-bold mb-2">Aerial Analytics Services for an Earthworks Project in Port Dickson</h4>
                                </div>
                              </>
                            )}
                            {index === 2 && (
                              <>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                  <h4 className="text-2xl font-bold mb-2">3D Scanning and Facility Management System for Large Mechanical Room</h4>
                                </div>
                              </>
                            )}
                            {index === 3 && (
                              <>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                  <h4 className="text-2xl font-bold mb-2">3D Process Animation Video for a Waste to Energy Plant in Johor</h4>
                                </div>
                              </>
                            )}
                            {index === 4 && (
                              <>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                  <h4 className="text-2xl font-bold mb-2">Virtual Reality Remodelling of a Storage Warehouse in Melaka</h4>
                                </div>
                              </>
                            )}
                            {index === 5 && (
                              <>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                  <h4 className="text-2xl font-bold mb-2">Development of Building Contractors App (BEENA) for Association of Construction Project Managers</h4>
                                </div>
                              </>
                            )}
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
                {projects.map((_, index) => (
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
      </div>
    </div>
  );
};

export default Projects;