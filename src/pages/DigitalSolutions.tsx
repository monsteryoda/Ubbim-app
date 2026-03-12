"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Lightbulb, Code, Smartphone, Globe, Shield, Zap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

interface DigitalSolution {
  title: string;
  description: string;
  image: string;
  hasButton: boolean;
  link: string;
}

const DigitalSolutions: React.FC = () => {
  const solutions: DigitalSolution[] = [
    {
      title: "Digital Permit to Work System (e-ptw)",
      description: "A comprehensive digital permit management system designed for incineration plants and industrial facilities. Streamline your safety protocols with automated workflows and real-time monitoring.",
      image: "/src/assets/projects/highlights-banner.png",
      hasButton: true,
      link: "/services/digital-solutions/e-ptw"
    },
    {
      title: "Project Management System for Shutdown Operation",
      description: "Specialized project management platform for complex shutdown operations. Coordinate multiple teams, track progress, and ensure safety compliance during critical maintenance periods.",
      image: "/src/assets/projects/highlights-2.png",
      hasButton: true,
      link: "/services/digital-solutions/pm-system"
    },
    {
      title: "Aerial Analytics Services",
      description: "Advanced aerial data analytics for earthworks projects. Utilize drone technology and AI-powered analysis to optimize site planning and monitoring.",
      image: "/src/assets/projects/highlights-3.png",
      hasButton: true,
      link: "/services/digital-solutions/aerial-analytics"
    },
    {
      title: "3D Scanning and Facility Management",
      description: "Comprehensive 3D scanning solution for large mechanical rooms. Create digital twins for better facility management and maintenance planning.",
      image: "/src/assets/projects/highlights-4.png",
      hasButton: true,
      link: "/services/digital-solutions/3d-scanning"
    },
    {
      title: "3D Process Animation Video",
      description: "Immersive 3D animation videos for waste-to-energy plants. Visualize complex processes for training, safety briefings, and stakeholder presentations.",
      image: "/src/assets/projects/highlights-5.png",
      hasButton: true,
      link: "/services/digital-solutions/3d-animation"
    },
    {
      title: "Building Contractors App (BEENA)",
      description: "Custom mobile application developed for the Association of Construction Project Managers. Connect contractors, share resources, and streamline project collaboration.",
      image: "/src/assets/projects/highlights-7.png",
      hasButton: true,
      link: "/services/digital-solutions/beena-app"
    },
    {
      title: "Virtual Reality Remodelling",
      description: "Immersive VR experience for warehouse remodelling projects. Visualize design changes before implementation and enhance client decision-making.",
      image: "/src/assets/projects/highlights-9.png",
      hasButton: true,
      link: "/services/digital-solutions/vr-remodelling"
    }
  ];

  const contactInfo = {
    address: "No. 219, Jalan S2 B10, Seremban 2, 70300 Seremban, Negeri Sembilan",
    phone: "+606-6016007",
    email: "admin@ubbim.com",
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1A4B8C] text-white py-24 lg:py-32 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              DIGITAL SOLUTIONS
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Innovative digital technologies transforming construction and facility management
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              OUR DIGITAL SOLUTIONS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At UBBIM, we leverage cutting-edge digital technologies to enhance project planning, execution, and management. From 3D scanning to virtual reality, our solutions drive efficiency and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-none shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {solution.hasButton && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link to={solution.link}>
                        <button className="px-8 py-3 bg-[#005F6B] hover:bg-[#007A8A] text-white font-bold rounded-full text-sm transition-all duration-200 hover:scale-105">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
                    {contactInfo.address}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#4ADE80]" />
                  <span className="text-gray-300">{contactInfo.phone}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#4ADE80]" />
                  <span className="text-gray-300">{contactInfo.email}</span>
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

export default DigitalSolutions;