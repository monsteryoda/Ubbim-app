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

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-6">
                Our Services
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Design & Build is a project delivery method where a single entity—the Design & Build contractor—takes responsibility for both the design and construction of a project. This integrated approach streamlines communication, reduces project timelines, and provides clients with a single point of accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Why Choose Our Design & Build Services?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our integrated approach delivers superior results through collaboration, innovation, and expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-[#1A4B8C]" />
                  </div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Our Design & Build Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures project success from concept to completion.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#1A4B8C] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
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