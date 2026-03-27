"use client";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, HardHat, TrendingUp, Users, Award, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Cpu, Shield, Flame, Wrench, Eye, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { showSuccess } from "@/utils/toast";
import ubbimLogo from "@/assets/ubbim-logo.png";

const Services = () => {
  useEffect(() => {
    document.title = "Built Environment Services - UBBIM";
    return () => {
      document.title = "UBBIM - Integrated Solutions for the Built Environment";
    };
  }, []);

  const builtEnvironmentServices = [
    {
      title: "Design & Build Services",
      description: "Comprehensive design and build services tailored to meet the specific needs of each project, ensuring seamless execution.",
      icon: Building2,
      link: "/services/design-build",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
    },
    {
      title: "Firefighting Services",
      description: "Advanced fire protection systems designed to safeguard lives and property, from alarms to suppression systems.",
      icon: Flame,
      link: "/firefighting",
      image: "/src/assets/firefighting-services.jpg"
    },
    {
      title: "Structural Repair and Refurbishment",
      description: "Expert repair and refurbishment services that breathe new life into existing structures, enhancing durability and appearance.",
      icon: Wrench,
      link: "/services/structural-repair",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80"
    },
    {
      title: "Security & Surveillance Solutions",
      description: "Integrated security and surveillance solutions that provide peace of mind through advanced monitoring and control systems.",
      icon: Eye,
      link: "/services/security-surveillance",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80"
    },
  ];

  const contactInfo = {
    address: "No. 219, Jalan S2 B10, Seremban 2, 70300 Seremban, Negeri Sembilan",
    phone: "+606-6016007",
    email: "admin@ubbim.com",
  };

  const handleContactClick = () => {
    showSuccess("Thank you for your interest! We'll contact you shortly.");
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1A4B8C] text-white py-24 lg:py-32 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              BUILT ENVIRONMENT SERVICES
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Comprehensive Solutions for Every Stage of Construction and Infrastructure Development
            </p>
          </div>
        </div>
      </section>

      {/* Built Environment Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              BUILT ENVIRONMENT SERVICES
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At UBBIM, we provide end-to-end services that cover every aspect of the built environment. From conceptual design to final construction, and ongoing maintenance, our team is dedicated to delivering projects that stand the test of time, ensuring safety, efficiency, and sustainability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {builtEnvironmentServices.map((service, index) => (
              <Card key={index} className="border-none shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link to={service.link}>
                      <button className="px-8 py-3 bg-[#005F6B] hover:bg-[#007A8A] text-white font-bold rounded-full text-sm transition-all duration-200 hover:scale-105">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <service.icon className="w-6 h-6 text-[#1A4B8C] mr-2" />
                    <h3 className="text-xl font-bold text-[#1A4B8C]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
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

export default Services;