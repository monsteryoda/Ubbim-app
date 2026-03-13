"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, MapPin, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LogoCarousel from "@/components/LogoCarousel";
import cidbLogo from "../assets/cidb-logo.png";
import fgvLogo from "../assets/fgv-logo.png";
import mofLogo from "../assets/mof-logo.png";

const Index = () => {
  const logos = [
    { name: "CIDB", image: cidbLogo },
    { name: "FGV", image: fgvLogo },
    { name: "MOF", image: mofLogo },
  ];

  const services = [
    {
      icon: Building2,
      title: "Built Environment",
      description: "Comprehensive construction and infrastructure solutions",
      link: "/projects",
    },
    {
      icon: MapPin,
      title: "Digital Solutions",
      description: "Innovative technology and digital transformation services",
      link: "/projects",
    },
    {
      icon: Calendar,
      title: "Project Management",
      description: "End-to-end project delivery and management",
      link: "/projects",
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "15", label: "Countries Served" },
    { value: "20+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Building2 className="w-8 h-8 text-[#1A4B8C]" />
              <span className="ml-2 text-xl font-bold text-[#1A4B8C]">UBBIM</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-[#1A4B8C] transition-colors">
                Home
              </Link>
              <Link to="/projects" className="text-gray-700 hover:text-[#1A4B8C] transition-colors">
                Projects
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-[#1A4B8C] transition-colors">
                About
              </Link>
              <Button className="bg-[#1A4B8C] hover:bg-[#143d7a]">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[#1A4B8C] text-white py-32 lg:py-40 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              BUILDING THE FUTURE, <br />
              <span className="text-blue-300">ONE PROJECT AT A TIME</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Leading the way in built environment and digital solutions across Malaysia and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button size="lg" className="bg-white text-[#1A4B8C] hover:bg-gray-100">
                  View Our Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              TRUSTED BY INDUSTRY LEADERS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We partner with leading organizations to deliver exceptional results
            </p>
          </div>
          <LogoCarousel logos={logos} />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              OUR SERVICES
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for your construction and digital needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <service.icon className="w-12 h-12 text-[#1A4B8C] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link to={service.link} className="inline-flex items-center text-[#1A4B8C] hover:text-[#143d7a] font-medium">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1A4B8C] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="w-8 h-8" />
                <span className="ml-2 text-xl font-bold">UBBIM</span>
              </div>
              <p className="text-gray-400">
                Building the future with innovation and excellence.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/projects" className="hover:text-white">Built Environment</Link></li>
                <li><Link to="/projects" className="hover:text-white">Digital Solutions</Link></li>
                <li><Link to="/projects" className="hover:text-white">Project Management</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
                <li><Link to="/" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Kuala Lumpur, Malaysia</li>
                <li>info@ubbim.com</li>
                <li>+60 3-1234 5678</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© Copyright {new Date().getFullYear()} UBBIM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;