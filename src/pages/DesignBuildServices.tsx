"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, HardHat, TrendingUp, Users, Award, CheckCircle, Building2, Clock, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DesignBuildServices = () => {
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
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with deep industry knowledge and technical expertise."
    },
    {
      icon: Award,
      title: "Cost Optimization",
      description: "Strategic planning and execution to deliver projects within budget constraints."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "We begin with a comprehensive consultation to understand your project requirements, goals, and constraints. Our team develops a detailed project plan that outlines timelines, budgets, and deliverables."
    },
    {
      step: "02",
      title: "Design Development",
      description: "Our design team creates innovative solutions that balance aesthetics, functionality, and cost-effectiveness. We use advanced BIM technology to visualize and optimize every aspect of your project."
    },
    {
      step: "03",
      title: "Construction & Execution",
      description: "With approved designs in hand, our construction team brings your vision to life. We maintain strict quality control and safety standards while ensuring timely project completion."
    },
    {
      step: "04",
      title: "Handover & Support",
      description: "Upon completion, we conduct thorough inspections and provide comprehensive handover documentation. Our support continues even after project delivery to ensure your satisfaction."
    }
  ];

  const services = [
    {
      title: "Architectural Design",
      description: "Transform your ideas into detailed architectural plans that reflect your vision, needs, and budget.",
      image: "/src/assets/architectural-design.png"
    },
    {
      title: "Construction Management",
      description: "Ensure your project stays on track with expert management of timelines, resources, and quality control.",
      image: "/src/assets/construction-management.png"
    },
    {
      title: "General Contracting",
      description: "Rely on our skilled team to handle every aspect of construction, from sourcing materials to managing subcontractors.",
      image: "/src/assets/general-contracting.jpeg"
    }
  ];

  const benefits = [
    "Single point of responsibility for design and construction",
    "Reduced project risks through early contractor involvement",
    "Faster project delivery with overlapping design and construction phases",
    "Cost certainty with guaranteed maximum price options",
    "Enhanced collaboration between all project stakeholders",
    "Improved project quality through integrated team approach"
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              DESIGN AND BUILD SERVICES
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Comprehensive Solutions from Concept to Completion
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
              UBBIM's Design and Build Services offer a seamless approach to construction, integrating design, planning, and execution under one roof. Our team of experienced architects, engineers, and project managers work closely with you to bring your vision to life, ensuring quality, efficiency, and cost-effectiveness at every stage.
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
                <div className="p-8 bg-gray-100">
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
                  Integrated Approach
                </h3>
                <p className="text-gray-600 leading-relaxed text-right">
                  From design to construction, we manage every aspect of your project, ensuring seamless coordination and communication.
                </p>
              </div>
              <div className="text-right md:text-right">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Client-Centered Design
                </h3>
                <p className="text-gray-600 leading-relaxed text-right">
                  We prioritize your vision and needs, creating designs that are not only functional but also aesthetically pleasing and sustainable.
                </p>
              </div>
            </div>

            {/* Center Column - Large Image */}
            <div className="relative">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/chooseus.jpg" 
                  alt="Construction Site" 
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
                  Our team brings decades of experience and expertise in delivering high-quality, on-time, and on-budget projects.
                </p>
              </div>
              <div className="text-left md:text-left">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Proven Track Record
                </h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  Our portfolio of successful projects speaks for itself, showcasing our ability to deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A4B8C]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let us help you bring your vision to life with our comprehensive Design & Build services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#4ADE80] hover:bg-[#3dd673] text-[#1A4B8C] px-8 py-6 text-lg font-semibold">
              Get a Quote
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1A4B8C] px-8 py-6 text-lg font-semibold">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignBuildServices;