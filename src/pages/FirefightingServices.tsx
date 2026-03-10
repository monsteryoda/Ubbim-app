"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Fire, Shield, AlertTriangle, Wrench, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FirefightingServices = () => {
  const services = [
    {
      title: "Fire Alarm Systems",
      description: "Advanced fire detection and alarm systems that provide early warning and automatic notification to emergency services.",
      features: ["24/7 Monitoring", "Smart Detection", "Automatic Alerting", "Integration Ready"]
    },
    {
      title: "Fire Suppression Systems",
      description: "Comprehensive suppression solutions including sprinkler systems, gas suppression, and foam systems for various applications.",
      features: ["Sprinkler Systems", "Gas Suppression", "Foam Systems", "Water Mist"]
    },
    {
      title: "Fire Extinguisher Services",
      description: "Installation, maintenance, and inspection of fire extinguishers to ensure they're ready when you need them most.",
      features: ["Installation", "Regular Inspection", "Maintenance", "Recharging"]
    },
    {
      title: "Fire Safety Consulting",
      description: "Expert consultation on fire safety compliance, risk assessment, and development of comprehensive fire safety plans.",
      features: ["Risk Assessment", "Compliance Audit", "Safety Planning", "Staff Training"]
    }
  ];

  const features = [
    {
      icon: Fire,
      title: "24/7 Emergency Response",
      description: "Round-the-clock support and emergency response for all fire safety incidents."
    },
    {
      icon: Shield,
      title: "Certified Professionals",
      description: "Our team consists of certified fire safety experts with extensive industry experience."
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Comprehensive fire risk assessments to identify and mitigate potential hazards."
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Regular maintenance and prompt repair services to keep your systems operational."
    }
  ];

  const complianceStandards = [
    "NFPA Standards Compliance",
    "Local Fire Code Requirements",
    "OSHA Safety Regulations",
    "Insurance Company Standards",
    "Building Code Requirements",
    "Industry Best Practices"
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555617798-4573b7e6f5a4?w=1920&q=80')] bg-cover bg-center" />
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
              Comprehensive Fire Protection Solutions for Your Safety and Peace of Mind
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-6">
              Protecting What Matters Most
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At UBBIM, we understand that fire safety is not just about compliance—it's about protecting lives, property, and your peace of mind. Our comprehensive firefighting services are designed to provide complete fire protection for residential, commercial, and industrial properties.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From initial design and installation to ongoing maintenance and emergency response, our certified team ensures your fire protection systems are always ready when you need them most.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Our Firefighting Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a complete range of fire protection services tailored to meet the specific needs of your property.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#1A4B8C] p-3 rounded-lg">
                      <Fire className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-[#4ADE80]" />
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Why Choose Our Firefighting Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring expertise, reliability, and commitment to every fire protection project we undertake.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#1A4B8C] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A4B8C] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-[#1A4B8C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Compliance & Standards
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-[#4ADE80]" />
                  <span className="font-medium">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-6">
            Need Fire Safety Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let our experts design a fire protection system that meets your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#1A4B8C] hover:bg-[#143a6e] text-white px-8 py-6 text-lg">
              Get a Free Quote
            </Button>
            <Button className="bg-[#4ADE80] hover:bg-[#3dd673] text-[#1A4B8C] px-8 py-6 text-lg font-semibold">
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
                UBBIM delivers comprehensive fire protection solutions with a focus on safety, compliance, and reliability.
              </p>
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

export default FirefightingServices;