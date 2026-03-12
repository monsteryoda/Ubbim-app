"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: "1",
      title: "Menara UBBIM",
      category: "Commercial",
      location: "Kuala Lumpur",
      year: "2023",
      image: "/src/assets/projects/menara-ubbim.jpg",
      description: "A state-of-the-art commercial building featuring sustainable design and modern architecture."
    },
    {
      id: "2",
      title: "Residence Taman Connaught",
      category: "Residential",
      location: "Cheras, Kuala Lumpur",
      year: "2022",
      image: "/src/assets/projects/residence-taman-connaught.jpg",
      description: "Luxury residential development with modern amenities and eco-friendly features."
    },
    {
      id: "3",
      title: "Pavilion Bukit Jalil",
      category: "Commercial",
      location: "Kuala Lumpur",
      year: "2023",
      image: "/src/assets/projects/pavilion-bukit-jalil.jpg",
      description: "Mixed-use development combining retail, office, and entertainment spaces."
    },
    {
      id: "4",
      title: "SkyVille Residences",
      category: "Residential",
      location: "Petaling Jaya",
      year: "2021",
      image: "/src/assets/projects/skyville-residences.jpg",
      description: "High-rise residential complex with panoramic city views and premium facilities."
    },
    {
      id: "5",
      title: "Tech Park Phase 2",
      category: "Industrial",
      location: "Shah Alam",
      year: "2022",
      image: "/src/assets/projects/tech-park-phase-2.jpg",
      description: "Modern industrial facility designed for technology and manufacturing companies."
    },
    {
      id: "6",
      title: "Green Valley Resort",
      category: "Hospitality",
      location: "Cameron Highlands",
      year: "2023",
      image: "/src/assets/projects/green-valley-resort.jpg",
      description: "Eco-friendly resort nestled in the hills with sustainable building practices."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A4B8C] mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of exceptional construction projects across Malaysia, 
            showcasing our commitment to quality, innovation, and sustainability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-2xl transition-all duration-300 border-none overflow-hidden cursor-pointer"
            >
              <CardContent className="p-0">
                {/* Responsive Image Carousel */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                  <Carousel className="w-full h-full">
                    <CarouselContent className="h-full">
                      <CarouselItem className="h-full">
                        <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-200 to-gray-300">
                          <Building2 className="w-16 h-16 text-gray-400" />
                        </div>
                      </CarouselItem>
                      <CarouselItem className="h-full">
                        <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-300 to-gray-400">
                          <Building2 className="w-16 h-16 text-gray-500" />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A4B8C]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-[#1A4B8C] hover:bg-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#1A4B8C] transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-[#1A4B8C]" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-[#1A4B8C]" />
                      <span className="text-sm">{project.year}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <button className="flex items-center text-[#1A4B8C] font-medium hover:text-[#143a6e] transition-colors">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-[#1A4B8C] to-[#4ADE80] rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl">
              Let's work together to bring your vision to life with our expert construction services.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#1A4B8C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;