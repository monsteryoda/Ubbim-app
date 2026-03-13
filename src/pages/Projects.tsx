"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, MapPin, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  const projects = [
    {
      title: "Ministry of Defence Project",
      location: "Singapore",
      year: "2023",
      category: "Defense Infrastructure",
      image: "/src/assets/ministry-defence-project.png",
      description: "Site Clearance Earthwork, Road & Drainage and Detention Pond Works for Kualiti Alam Sdn Bhd",
      completed: true,
    },
    {
      title: "Metro Line Expansion",
      location: "São Paulo, Brazil",
      year: "2023",
      category: "Transportation",
      image: "/src/assets/metro-line-expansion.png",
      description: "Development of Scheduled Waste Management Centre ('SWMCJ') Infrastructure Package for Cenviro Johor Sdn Bhd.",
      completed: true,
    },
    {
      title: "Green Energy Complex",
      location: "Rio de Janeiro, Brazil",
      year: "2022",
      category: "Energy",
      image: "/src/assets/green-energy-complex.png",
      description: "Modularised incinerator project for Kualiti Alam Sdn Bhd",
      completed: true,
    },
    {
      title: "Highway Modernization",
      location: "Minas Gerais, Brazil",
      year: "2022",
      category: "Infrastructure",
      image: "/src/assets/highway-modernization.png",
      description: "Design and Construction of Depolution System Plant at Tanjong Malim Perak for M/S Special Builder Sdn Bhd",
      completed: true,
    },
    {
      title: "Commercial Tower",
      location: "Kuala Lumpur, Malaysia",
      year: "2023",
      category: "Commercial",
      image: "/src/assets/commercial-tower.png",
      description: "Design, Fabrication and Erection of Storage Tank and Process Equipments for Cenviro Recovery and Recycling Plant",
      completed: true,
    },
    {
      title: "Residential Development",
      location: "Seremban, Malaysia",
      year: "2024",
      category: "Residential",
      image: "/src/assets/residential-development.png",
      description: "Fabrication & Erection of Structure Steel for the Ampang Line LRT extension project",
      completed: false,
    },
    {
      title: "Industrial Warehouse",
      location: "Johor, Malaysia",
      year: "2024",
      category: "Industrial",
      image: "/src/assets/industrial-warehouse.png",
      description: "Construction of PDRM Training Centre in Simpang Pulai, Pahang",
      completed: true,
    },
  ];

  const recentProjects = [
    {
      title: "Ampang Line LRT Extension",
      location: "Kuala Lumpur, Malaysia",
      year: "2024",
      category: "Transportation",
      image: "/src/assets/lrt-extension-blueprint.png",
      description: "Digital Permit to Work System (e-ptw) for an incineration plant",
      completed: false,
    },
    {
      title: "Cenviro Recovery Plant",
      location: "Johor, Malaysia",
      year: "2023",
      category: "Industrial",
      image: "/src/assets/cenviro-recovery-plant.png",
      description: "Project Management System for Shutdown Operation",
      completed: true,
    },
    {
      title: "Special Builder Depolution Plant",
      location: "Perak, Malaysia",
      year: "2022",
      category: "Infrastructure",
      image: "/src/assets/special-builder-depolution-plant.png",
      description: "Aerial Analytics Services for an Earthworks Project in Port Dickson",
      completed: true,
    },
    {
      title: "Kualiti Alam Incinerator",
      location: "Selangor, Malaysia",
      year: "2022",
      category: "Energy",
      image: "/src/assets/green-energy-complex.png",
      description: "Modularised incinerator project for sustainable waste management",
      completed: true,
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "15", label: "Countries Served" },
    { value: "20+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1A4B8C] text-white py-24 lg:py-32 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              OUR PROJECTS
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Explore Our Success Stories in the Built Environment and Digital Innovation
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1A4B8C] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              FEATURED PROJECTS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects delivered with precision and excellence.
            </p>
          </div>
          <Carousel
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={5000}
            className="max-w-4xl mx-auto"
          >
            {projects.map((project, index) => (
              <div key={index} className="relative">
                <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Recent Projects Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              RECENT PROJECTS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our latest completed and ongoing projects across Malaysia and beyond.
            </p>
          </div>
          <Carousel
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={5000}
            className="max-w-4xl mx-auto"
          >
            {recentProjects.map((project, index) => (
              <div key={index} className="relative">
                <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A4B8C] text-white">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-300 text-sm">
            © Copyright {new Date().getFullYear()} UBBIM
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;