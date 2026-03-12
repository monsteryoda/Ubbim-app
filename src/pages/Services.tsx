"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, HardHat, TrendingUp, Users, Award, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Cpu, Shield, Flame, Wrench, Eye, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { showSuccess } from "@/utils/toast";

const Services = () => {
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

  const digitalSolutions = [
    {
      title: "Aerial Analytics Solutions",
      description: "Leverage drone technology for precise aerial surveys, mapping, and data analysis.",
      icon: TrendingUp,
      link: "/aerial-analytics",
      image: "/aerial-analytics.png"
    },
    {
      title: "3D Scanning Solutions",
      description: "Advanced 3D scanning that provide accurate representations of physical spaces, enhancing project planning and execution",
      icon: Building2,
      link: "/3d-scanning",
      image: "/3d-scanning.jpeg"
    },
    {
      title: "Virtual Design Coordination",
      description: "Utilize virtual and augmented reality to visualize designs, coordinate teams, and improve project outcomes with immersive experiences.",
      icon: Cpu,
      link: "/vr-coordination",
      image: "/vr.jpeg"
    },
    {
      title: "Custom Software Solutions",
      description: "Tailored software solutions, including project management systems, digital permit to work systems, and GHG tracking systems, designed to meet your specific operational needs.",
      icon: Users,
      link: "/custom-software",
      image: "/coding.jpeg"
    }
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
              OUR SERVICES
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Comprehensive Solutions for the Built Environment and Digital Innovation
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
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              DIGITAL SOLUTIONS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              UBBIM's Digital Solutions bring the power of cutting-edge technology to the built environment. From aerial analytics to 3D scanning and custom software development, we offer tools that enhance project precision, streamline processes, and unlock new possibilities for innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalSolutions.map((service, index) => (
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
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help bring your project to life.
          </p>
          <Button 
            onClick={handleContactClick}
            className="bg-[#4ADE80] hover:bg-[#3dd673] text-[#1A4B8C] px-8 py-6 text-lg font-semibold"
          >
            Contact Us
          </Button>
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
                UBBIM delivers comprehensive built environment services with a focus on innovation, reliability, and client satisfaction.
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

export default Services;