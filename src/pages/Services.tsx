"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, HardHat, TrendingUp, Users, Award, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Design & Build Services",
      description: "Comprehensive design and build services tailored to meet the specific needs of each project, ensuring seamless execution.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    },
    {
      title: "Firefighting Services",
      description: "Advanced fire protection systems designed to safeguard lives and property, from alarms to suppression systems.",
      image: "https://images.unsplash.com/photo-1555617798-318eb574e6e9?w=600&q=80",
    },
    {
      title: "Structural Repair and Refurbishment",
      description: "Comprehensive design and build services tailored to meet the specific needs of each project, ensuring seamless execution.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    },
    {
      title: "Mechanical Services",
      description: "Comprehensive design and build services tailored to meet the specific needs of each project, ensuring seamless execution.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    },
  ];

  const contactInfo = {
    address: "No. 219, Jalan S2 B10, Seremban 2, 70300 Seremban, Negeri Sembilan",
    phone: "+606-6016007",
    email: "admin@ubbim.com",
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A4B8C] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="w-8 h-8 text-[#4ADE80]" />
              <span className="text-white font-bold text-xl">UBBIM</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-[#4ADE80] transition-colors font-medium">
                Home
              </Link>
              <Link to="/services" className="text-[#4ADE80] font-medium">
                Services
              </Link>
              <Link to="/projects" className="text-white hover:text-[#4ADE80] transition-colors font-medium">
                Projects
              </Link>
              <Link to="/about" className="text-white hover:text-[#4ADE80] transition-colors font-medium">
                About
              </Link>
              <Link to="/contact" className="text-white hover:text-[#4ADE80] transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

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

      {/* Services Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              GET IN TOUCH
            </h2>
            <p className="text-gray-600">Ready to start your project? Contact us today.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-[#1A4B8C]" />
                <h3 className="font-semibold text-lg text-[#1A4B8C] mb-2">Address</h3>
                <p className="text-gray-600">{contactInfo.address}</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-3 text-[#1A4B8C]" />
                <h3 className="font-semibold text-lg text-[#1A4B8C] mb-2">Phone</h3>
                <p className="text-gray-600">{contactInfo.phone}</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-3 text-[#1A4B8C]" />
                <h3 className="font-semibold text-lg text-[#1A4B8C] mb-2">Email</h3>
                <p className="text-gray-600">{contactInfo.email}</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-[#1A4B8C] hover:bg-[#143a6e] text-white px-8 py-6 text-lg">
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;