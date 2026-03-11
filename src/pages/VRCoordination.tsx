"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Mail, Headphones, Eye, Smartphone, Shield, TrendingUp, CheckCircle, Building2, Clock, Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const VRCoordination = () => {
  const services = [
    {
      title: "Virtual Design Coordination",
      description: "Use VR to visualize and coordinate complex building designs before construction begins, reducing errors and rework.",
      image: "/vr.jpeg"
    },
    {
      title: "Augmented Reality Walkthroughs",
      description: "Experience your project in real-time scale using AR, allowing stakeholders to walk through spaces before they're built.",
      image: "/ar-walkthrough.png"
    },
    {
      title: "Immersive Training",
      description: "Provide immersive training experiences for construction teams using VR simulations of complex systems and procedures.",
      image: "/vr-training.png"
    },
    {
      title: "Clash Detection & Resolution",
      description: "Identify and resolve design conflicts in a virtual environment before they become costly issues on-site.",
      image: "/clash-detection.png"
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
      title: "Design Review & Planning",
      description: "We analyze your project designs and develop a VR coordination strategy tailored to your specific needs and objectives."
    },
    {
      step: "02",
      title: "3D Model Preparation",
      description: "Our team prepares and optimizes 3D models for VR/AR environments, ensuring smooth performance and accurate visualization."
    },
    {
      step: "03",
      title: "Immersive Coordination",
      description: "Stakeholders experience the project in immersive VR/AR environments, identifying issues and making informed decisions."
    },
    {
      step: "04",
      title: "Implementation & Support",
      description: "We deliver comprehensive VR/AR solutions and ongoing support to ensure your team can leverage these technologies effectively."
    }
  ];

  const benefits = [
    "Single point of responsibility for VR/AR coordination",
    "Reduced project risks through early visualization",
    "Faster decision-making with immersive experiences",
    "Cost certainty with guaranteed maximum price options",
    "Enhanced collaboration between all project stakeholders",
    "Improved project quality through detailed 3D visualization"
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1A4B8C] text-white py-24 lg:py-32 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Link to="/services/digital-solutions" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Digital Solutions
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              VIRTUAL DESIGN COORDINATION
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Immersive Visualization for Smarter Construction Decisions
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
              UBBIM's Virtual Design Coordination solutions bring your projects to life before construction begins. Using cutting-edge VR and AR technology, we enable stakeholders to experience, visualize, and coordinate complex designs in immersive environments, reducing errors and accelerating decision-making.
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
                  Enhanced Visualization
                </h3>
                <p className="text-gray-600 leading-relaxed text-right">
                  Experience your project in immersive VR/AR environments, ensuring every detail is accurately understood before construction begins.
                </p>
              </div>
              <div className="text-right md:text-right">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Faster Decision-Making
                </h3>
                <p className="text-gray-600 leading-relaxed text-right">
                  Accelerate project timelines with immersive experiences that enable stakeholders to make informed decisions quickly.
                </p>
              </div>
            </div>

            {/* Center Column - Large Image */}
            <div className="relative">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/vr.jpeg" 
                  alt="VR Coordination" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text Blocks */}
            <div className="space-y-8 md:pl-12">
              <div className="text-left md:text-left">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Cost-Effective Coordination
                </h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  Reduce costs by identifying and resolving design conflicts in virtual environments before they become expensive on-site issues.
                </p>
              </div>
              <div className="text-left md:text-left">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Improved Safety
                </h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  Train teams in safe VR environments, reducing risks while ensuring comprehensive understanding of complex systems and procedures.
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
                UBBIM delivers comprehensive VR coordination solutions with a focus on innovation, precision, and client satisfaction.
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

export default VRCoordination;