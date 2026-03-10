"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Camera, Lock, Eye, Smartphone, AlertTriangle, Wrench, CheckCircle, Building2, Clock, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Design & Build",
      description: "Comprehensive design and construction services delivered through a collaborative approach that ensures efficiency and quality.",
      image: "/src/assets/design-build.jpg"
    },
    {
      title: "Firefighting Services",
      description: "Complete fire protection systems including design, installation, and maintenance of sprinkler systems and fire alarms.",
      image: "/src/assets/firefighting.jpg"
    },
    {
      title: "Security & Surveillance",
      description: "Advanced security systems including CCTV, access control, and intrusion detection for comprehensive protection.",
      image: "/src/assets/security-surveillance.jpg"
    },
    {
      title: "Construction Management",
      description: "Professional oversight of construction projects from planning through completion, ensuring timely delivery.",
      image: "/src/assets/construction-management.jpg"
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

  const serviceFeatures = [
    {
      title: "Video Surveillance",
      description: "High-definition cameras with night vision, motion detection, and remote viewing capabilities for complete visibility.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&q=80"
    },
    {
      title: "Access Control",
      description: "Multi-factor authentication systems including card readers, biometric scanners, and mobile credential management.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80"
    },
    {
      title: "Intrusion Detection",
      description: "Advanced sensors and alarm systems that detect unauthorized entry and trigger immediate alerts to security teams.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
    },
    {
      title: "Integrated Security Management",
      description: "Centralized platform that unifies all security systems for streamlined monitoring and response management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A4B8C] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/src/assets/ubbim-logo.png" 
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              OUR SERVICES
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Comprehensive construction solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Footer */}
      <footer className="bg-[#1A4B8C] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/src/assets/ubbim-logo.png" 
                  alt="UBBIM Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                UBBIM delivers comprehensive construction solutions with a focus on safety, innovation, and client satisfaction.
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

export default Services;