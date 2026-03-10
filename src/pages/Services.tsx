"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, HardHat, TrendingUp, Users, Award, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Construction",
      description: "Large-scale infrastructure and building construction with cutting-edge technology.",
      icon: Building2,
      details: "Our Built Environment Services encompass every phase of construction and infrastructure development, from design and build to maintenance and refurbishment. We specialize in delivering high-quality, sustainable solutions that meet the unique needs of each project, ensuring safety, efficiency, and long-term value.",
      features: [
        "Project Management & Supervision",
        "Design-Build Services",
        "Progress Monitoring & Reporting",
        "Quality Assurance & Control",
        "Safety Management Systems",
        "Sustainable Construction Practices",
      ],
    },
    {
      title: "Engineering",
      description: "Innovative engineering solutions for complex challenges in infrastructure.",
      icon: HardHat,
      details: "Our Digital Solutions integrate advanced technologies like aerial analytics, 3D scanning, and virtual design coordination to transform how projects are planned, executed, and managed. We also develop custom software tailored to optimize operations, enhance collaboration, and drive innovation across industries.",
      features: [
        "Building Information Modeling (BIM)",
        "Virtual Reality (VR) Design Coordination",
        "3D Laser Scanning & Surveying",
        "Aerial Analytics & Drone Mapping",
        "Custom Software Development",
        "Data Analytics & Reporting",
      ],
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
            <Link to="/" className="inline-flex items-center text-[#4ADE80] hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              OUR SERVICES
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Comprehensive solutions for infrastructure development, from planning to execution.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-[#1A4B8C]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1A4B8C] mb-4">
                    {index === 0 ? "BUILT ENVIRONMENT SERVICES" : "DIGITAL SOLUTIONS"}
                  </h2>
                  <p className="text-gray-600 mb-6 text-justify">
                    {service.details}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-[#4ADE80] rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
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