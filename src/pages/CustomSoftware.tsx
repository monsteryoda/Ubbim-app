"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Mail, Code, Database, Shield, TrendingUp, CheckCircle, Building2, Clock, Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const CustomSoftware = () => {
  const services = [
    {
      title: "Project Management Systems",
      description: "Streamline your project workflows with custom management systems that provide real-time tracking, reporting, and collaboration tools.",
      image: "/project-management.png"
    },
    {
      title: "Digital Permit to Work Systems",
      description: "Simplify the permit process with a digital system that ensures compliance, enhances safety, and reduces administrative burdens.",
      image: "/digital-permit.png"
    },
    {
      title: "Facility Management Solutions",
      description: "Optimize facility operations with software that helps you manage maintenance schedules, asset tracking, and resource allocation efficiently.",
      image: "/facility.png"
    },
    {
      title: "Custom ERP Solutions",
      description: "Develop a bespoke ERP system that integrates all facets of your business, providing seamless operations and real-time data visibility.",
      image: "/custom-erp.jpg"
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
      icon: Leaf,
      title: "Sustainable Solutions",
      description: "Eco-friendly design and construction practices for long-term environmental benefits."
    },
    {
      icon: TrendingUp,
      title: "Expert Team",
      description: "Experienced professionals with deep industry knowledge and technical expertise."
    },
    {
      icon: CheckCircle,
      title: "Cost Optimization",
      description: "Strategic planning and execution to deliver projects within budget constraints."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We conduct thorough consultations to understand your specific operational needs and develop a comprehensive software strategy."
    },
    {
      step: "02",
      title: "Custom Development",
      description: "Our expert developers build tailored software solutions using the latest technologies and best practices for optimal performance."
    },
    {
      step: "03",
      title: "Testing & Integration",
      description: "Rigorous testing ensures your software works seamlessly with existing systems and meets all performance requirements."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We provide comprehensive deployment services and ongoing support to ensure your software continues to meet your evolving needs."
    }
  ];

  const benefits = [
    "Single point of responsibility for software development",
    "Reduced operational risks through reliable custom solutions",
    "Faster project delivery with optimized workflows",
    "Cost certainty with guaranteed maximum price options",
    "Enhanced collaboration between all project stakeholders",
    "Improved project quality through tailored digital tools"
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1A4B8C] text-white py-24 lg:py-32 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Link to="/services/digital-solutions" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Digital Solutions
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              CUSTOM SOFTWARE SOLUTIONS
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Tailored Digital Solutions for Enhanced Efficiency and Control
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
              UBBIM's Custom Software Solutions are designed to meet the unique challenges of your industry. From project management to facility maintenance, our tailored software enhances efficiency, improves collaboration, and provides you with the tools needed to achieve your goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-white flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
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
            Key Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Column - Text Blocks */}
            <div className="space-y-8 md:pr-12">
              <div className="text-right md:text-right">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Tailored Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed text-right">
                  Get software solutions that are specifically designed to address the unique challenges of your business, ensuring maximum relevance and impact.
                </p>
              </div>
              <div className="text-right md:text-right">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Scalable Architecture
                </h3>
                <p className="text-gray-600 leading-relaxed text-right">
                  Our software grows with your business, providing the flexibility to adapt to changing needs and expanding operations.
                </p>
              </div>
            </div>

            {/* Center Column - Large Image */}
            <div className="relative">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/key-digital.png" 
                  alt="Custom Software" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text Blocks */}
            <div className="space-y-8 md:pl-12">
              <div className="text-left md:text-left">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Improved Efficiency
                </h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  Automate processes, reduce manual errors, and enhance productivity with software that streamlines your operations.
                </p>
              </div>
              <div className="text-left md:text-left">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Enhanced Decision-Making
                </h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  Leverage real-time data and analytics to make informed decisions, improve forecasting, and optimize resource allocation.
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
                UBBIM delivers comprehensive custom software solutions with a focus on innovation, reliability, and client satisfaction.
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
                  <Link to="/aerial-analytics" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Aerial Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/3d-scanning" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    3D Scanning
                  </Link>
                </li>
                <li>
                  <Link to="/vr-coordination" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    VR Coordination
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

export default CustomSoftware;