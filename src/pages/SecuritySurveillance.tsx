"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Camera, Lock, Eye, Smartphone, AlertTriangle, Wrench, CheckCircle, Building2, Clock, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SecuritySurveillance = () => {
  const services = [
    {
      title: "CCTV Surveillance Systems",
      description: "State-of-the-art CCTV systems with high-definition cameras, remote monitoring capabilities, and advanced analytics for comprehensive security coverage.",
      image: "/src/assets/cctv-systems.jpeg"
    },
    {
      title: "Access Control Systems",
      description: "Secure and convenient access control solutions including biometric scanners, card readers, and mobile access management for all entry points.",
      image: "/src/assets/access-control.jpeg"
    },
    {
      title: "Alarm & Intrusion Detection",
      description: "Advanced alarm systems and intrusion detection technology that provides real-time alerts and integrates with monitoring centers for rapid response.",
      image: "/src/assets/alarm-systems.jpeg"
    }
  ];

  const features = [
    {
      icon: Building2,
      title: "Integrated Approach",
      description: "Seamless coordination between design and construction teams for optimal project outcomes."
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Streamlined processes that reduce project timelines without compromising quality."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control measures throughout every phase of the project lifecycle."
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Round-the-clock surveillance and monitoring for continuous protection of your premises."
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Comprehensive security risk assessments to identify vulnerabilities and implement effective countermeasures."
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Regular maintenance and prompt technical support to keep your security systems operational."
    }
  ];

  const benefits = [
    "Single point of responsibility for design and installation",
    "Reduced security risks through integrated systems",
    "Faster deployment with overlapping design and installation phases",
    "Cost certainty with guaranteed maximum price options",
    "Enhanced collaboration between security and IT teams",
    "Improved security posture through comprehensive approach"
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A4B8C] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/ubbim-logo.png" 
                alt="UBBIM Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-[#4ADE80] transition-colors font-medium">
                Home
              </Link>
              <Link to="/services" className="text-white hover:text-[#4ADE80] transition-colors font-medium">
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              SECURITY & SURVEILLANCE SOLUTIONS
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Advanced Security Systems for Maximum Protection
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              UBBIM's Security & Surveillance Solutions provide comprehensive protection for your property and assets. From advanced CCTV systems to access control and alarm integration, our team ensures that your facility is equipped with the latest security technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A4B8C] mb-16 text-center">
            Why Choose Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Column - Text Blocks */}
            <div className="space-y-8 md:pr-12">
              <div className="text-right md:text-right">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Comprehensive Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed text-right">
                  We provide end-to-end security services, from design and installation to maintenance and monitoring, ensuring total protection.
                </p>
              </div>
              <div className="text-right md:text-right">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Advanced Technology
                </h3>
                <p className="text-gray-600 leading-relaxed text-right">
                  We utilize the latest security technologies to deliver systems that are both effective and efficient.
                </p>
              </div>
            </div>

            {/* Center Column - Large Image */}
            <div className="relative">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/src/assets/security-surveillance.jpg" 
                  alt="Why Choose Us" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text Blocks */}
            <div className="space-y-8 md:pl-12">
              <div className="text-left md:text-left">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Experienced Team
                </h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  Our team of security experts brings extensive experience in protecting diverse environments, from commercial buildings to industrial facilities.
                </p>
              </div>
              <div className="text-left md:text-left">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Regulatory Compliance
                </h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  Our solutions meet all relevant security regulations and standards, giving you peace of mind that your facility is protected and compliant.
                </p>
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
                UBBIM delivers comprehensive security solutions with a focus on safety, innovation, and client satisfaction.
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
                  <Link to="/design-build" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Design & Build
                  </Link>
                </li>
                <li>
                  <Link to="/firefighting" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Firefighting Services
                  </Link>
                </li>
                <li>
                  <Link to="/security-surveillance" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Security & Surveillance
                  </Link>
                </li>
                <li>
                  <Link to="/construction-management" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Construction Management
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
                    123 Construction Ave,<br />
                    Building City, BC 12345
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#4ADE80]" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#4ADE80]" />
                  <span className="text-gray-300">info@ubbim.com</span>
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

export default SecuritySurveillance;