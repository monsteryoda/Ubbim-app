"use client";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Mail, Headphones, Eye, Smartphone, Shield, TrendingUp, CheckCircle, Building2, Clock, Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const VRCoordination = () => {
  useEffect(() => {
    document.title = "Virtual Design Coordination - UBBIM";
    return () => {
      document.title = "UBBIM - Integrated Solutions for the Built Environment";
    };
  }, []);

  const services = [
    {
      title: "Virtual Reality (VR) Design Reviews",
      description: "Use VR to visualize and coordinate complex building designs before construction begins, reducing errors and rework.",
      image: "/vr.png"
    },
    {
      title: "Augmented Reality (AR) Site Visualization",
      description: "Overlay digital models onto real-world sites using AR, providing a clear understanding of how designs will fit within existing environments.",
      image: "/ar.jpg"
    },
    {
      title: "Process Video Animation",
      description: "Illustrate complex plant building processes and workflows with custom animations, making it easier for stakeholders to visualize and understand each step.",
      image: "/pv.png"
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
              Transforming Project Collaboration with VR, AR, and BIM
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
              UBBIM's Virtual Design Coordination services bring your projects to life with advanced VR, AR, and BIM technologies. By integrating these tools into the design process, we enable seamless collaboration, enhance decision-making, and ensure every detail is perfected before construction begins.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  Experience designs in a fully immersive environment, providing a clear and realistic view of the final project.
                </p>
              </div>
              <div className="text-right md:text-right">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Early Issue Detection
                </h3>
                <p className="text-gray-600 leading-relaxed text-right">
                  Identify and resolve design conflicts early, reducing the risk of costly errors and delays during construction.
                </p>
              </div>
            </div>

            {/* Center Column - Large Image */}
            <div className="relative">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/src/assets/key-benefit.jpg" 
                  alt="VR Coordination" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text Blocks */}
            <div className="space-y-8 md:pl-12">
              <div className="text-left md:text-left">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Improved Collaboration
                </h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  Enable real-time collaboration among project teams, ensuring that everyone is aligned and informed at every stage.
                </p>
              </div>
              <div className="text-left md:text-left">
                <h3 className="text-2xl font-bold text-[#1A4B8C] mb-3">
                  Streamlined Decision-Making
                </h3>
                <p className="text-gray-600 leading-relaxed text-left">
                  Make informed decisions faster with the ability to review, adjust, and approve designs in real-time.
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

export default VRCoordination;