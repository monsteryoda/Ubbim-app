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
      image: "/src/assets/project-management.png"
    },
    {
      title: "Digital Permit to Work Systems",
      description: "Simplify the permit process with a digital system that ensures compliance, enhances safety, and reduces administrative burdens.",
      image: "/src/assets/permit-system.png"
    },
    {
      title: "Facility Management Solutions",
      description: "Optimize facility operations with software that helps you manage maintenance schedules, asset tracking, and resource allocation efficiently.",
      image: "/src/assets/facility-management.jpg"
    },
    {
      title: "Custom ERP Solutions",
      description: "Develop a bespoke ERP system that integrates all facets of your business, providing seamless operations and real-time data visibility.",
      image: "/src/assets/erp-solutions.png"
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
                  Our software is custom-built to match your specific workflows and requirements, ensuring maximum efficiency and user adoption.
                </p>
              </div>
              <div className="text-right md:text-right">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Scalable Architecture
                </h3>
                <p className="text-gray-600 leading-relaxed text-right">
                  Built with scalability in mind, our solutions grow with your business and adapt to changing operational needs.
                </p>
              </div>
            </div>

            {/* Center Column - Large Image */}
            <div className="relative">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/coding.jpeg" 
                  alt="Custom Software" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text Blocks */}
            <div className="space-y-8 md:pl-12">
              <div className="text-left md:text-left">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Enhanced Security
                </h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  Our software incorporates robust security measures to protect your data and ensure compliance with industry standards.
                </p>
              </div>
              <div className="text-left md:text-left">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Ongoing Support
                </h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  We provide comprehensive maintenance and support services to keep your software running smoothly and up-to-date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A4B8C] text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-300 text-sm">
            © Copyright {new Date().getFullYear()} UBBIM
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CustomSoftware;