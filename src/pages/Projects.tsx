"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "transportation", label: "Transportation" },
    { value: "energy", label: "Energy" },
    { value: "buildings", label: "Buildings" },
    { value: "water", label: "Water & Sanitation" },
  ];

  const projects = [
    {
      id: 1,
      title: "Metro Line 4 Expansion",
      category: "transportation",
      location: "São Paulo, Brazil",
      year: "2023",
      status: "Completed",
      description: "15km metro line expansion connecting the southern districts to the city center.",
      image: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&q=80",
    },
    {
      id: 2,
      title: "Solar Energy Complex",
      category: "energy",
      location: "Minas Gerais, Brazil",
      year: "2023",
      status: "In Progress",
      description: "500MW solar farm generating clean energy for over 200,000 homes.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    },
    {
      id: 3,
      title: "Corporate Tower Plaza",
      category: "buildings",
      location: "Rio de Janeiro, Brazil",
      year: "2022",
      status: "Completed",
      description: "32-story mixed-use commercial tower with LEED Platinum certification.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      id: 4,
      title: "Highway BR-101 Expansion",
      category: "transportation",
      location: "Multiple States, Brazil",
      year: "2024",
      status: "In Progress",
      description: "200km highway modernization with smart traffic systems.",
      image: "https://images.unsplash.com/photo-1590644365607-1c5a8b57d0aa?w=800&q=80",
    },
    {
      id: 5,
      title: "Water Treatment Plant",
      category: "water",
      location: "Brasília, Brazil",
      year: "2022",
      status: "Completed",
      description: "Modern water treatment facility serving 1.5 million residents.",
      image: "https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?w=800&q=80",
    },
    {
      id: 6,
      title: "Wind Farm Complex",
      category: "energy",
      location: "Rio Grande do Norte, Brazil",
      year: "2023",
      status: "Completed",
      description: "350MW onshore wind farm with 140 turbines.",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A4B8C] py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Projects
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Explore our portfolio of transformative infrastructure projects across 
              Brazil and beyond. Each project represents our commitment to excellence, 
              innovation, and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.value
                    ? "bg-[#1A4B8C] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-none shadow-lg group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={project.status === "Completed" ? "bg-[#4ADE80] text-[#1A4B8C]" : "bg-amber-500"}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <button className="flex items-center text-[#1A4B8C] font-semibold hover:text-[#4ADE80] transition-colors text-sm">
                    View Project <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;