"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Fire, Shield, AlertTriangle, Wrench, CheckCircle, Building2, Clock, Users, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FirefightingServices = () => {
  const services = [
    {
      title: "Fire Alarm Systems",
      description: "Advanced fire detection and alarm systems that provide early warning and automatic notification to emergency services.",
      features: ["Smoke detectors", "Heat sensors", "Manual call points", "Control panels", "Emergency lighting"]
    },
    {
      title: "Fire Suppression Systems",
      description: "Comprehensive suppression systems including sprinklers, foam, and gas-based solutions for different fire risks.",
      features: ["Sprinkler systems", "Foam suppression", "Gas suppression", "Water mist systems", "Chemical agents"]
    },
    {
      title: "Fire Extinguishers",
      description: "Professional installation, maintenance, and inspection of fire extinguishers for all types of buildings.",
      features: ["Portable extinguishers", "Fixed systems", "Regular inspections", "Refilling services", "Training"]
    },
    {
      title: "Fire Safety Consulting",
      description: "Expert fire safety assessments, risk evaluations, and compliance consulting for all types of facilities.",
      features: ["Risk assessments", "Compliance audits", "Safety plans", "Emergency procedures", "Staff training"]
    }
  ];

  const features = [
    {
      icon: Fire,
      title: "24/7 Emergency Response",
      description: "Round-the-clock emergency response and support for fire safety incidents."
    },
    {
      icon: Shield,
      title: "Certified Professionals",
      description: "Our team consists of certified fire safety experts with extensive industry experience."
    },
    {
      icon: Wrench,
      title: "Regular Maintenance",
      description: "Comprehensive maintenance programs to ensure your systems are always operational."
    },
    {
      icon: CheckCircle,
      title: "Compliance Guaranteed",
      description: "All systems meet or exceed local and international fire safety standards."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Site Assessment",
      description: "Our experts conduct a thorough assessment of your facility to identify fire risks and determine the appropriate systems needed."
    },
    {
      step: "02",
      title: "System Design",
      description: "We design customized fire protection solutions tailored to your specific building layout, occupancy, and risk profile."
    },
    {
      step: "03",
      title: "Installation",
      description: "Our certified technicians install all fire safety equipment with precision, following all safety protocols and regulations."
    },
    {
      step: "04",
      title: "Testing & Commissioning",
      description: "Complete testing and commissioning of all systems to ensure they function correctly and meet all safety standards."
    },
    {
      step: "05",
      title: "Maintenance & Support",
      description: "Ongoing maintenance, inspections, and 24/7 support to keep your fire protection systems in optimal condition."
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599368523061-3f2e0c5b8c7d?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              FIREFIGHTING SERVICES
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Advanced Fire Protection Systems Designed to Safeguard Lives and Property
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Our Firefighting Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              UBBIM provides comprehensive fire protection solutions that meet the highest safety standards. From installation to maintenance, we ensure your property is protected around the clock.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Fire className="w-12 h-12 text-[#1A4B8C] flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-[#4ADE80] flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A4B8C] mb-16 text-center">
            Why Choose Our Firefighting Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <feature.icon className="w-16 h-16 text-[#1A4B8C] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure your fire protection systems are installed and maintained to the highest standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-[#1A4B8C]/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A4B8C] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
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
              Get a Free Fire Safety Consultation
            </h2>
            <p className="text-gray-600">Contact us today to discuss your fire protection needs.</p>
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
                UBBIM delivers comprehensive fire protection solutions with a focus on safety, quality, and reliability.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                  <Mail className="w-5 h-5" />
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
                  <Link to="/structural-repair" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Structural Repair
                  </Link>
                </li>
                <li>
                  <Link to="/security-surveillance" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
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
                    No. 219, Jalan S2 B10,<br />
                    Seremban 2, 70300 Seremban,<br />
                    Negeri Sembilan
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#4ADE80]" />
                  <span className="text-gray-300">+606-6016007</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#4ADE80]" />
                  <span className="text-gray-300">admin@ubbim.com</span>
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

export default FirefightingServices;