"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, TrendingUp, Users, Award, CheckCircle, Cpu, Clock, Shield, Leaf, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const DigitalSolutions = () => {
  const services = [
    {
      title: "Aerial Analytics Solutions",
      description: "Leverage drone technology for precise aerial surveys, mapping, and data analysis.",
      image: "/aerial-analytics.png",
      link: "/aerial-analytics"
    },
    {
      title: "3D Scanning Solutions",
      description: "Advanced 3D scanning that provide accurate representations of physical spaces, enhancing project planning and execution",
      image: "/3d-scanning.jpeg",
      link: "/3d-scanning"
    },
    {
      title: "Virtual Design Coordination",
      description: "Utilize virtual and augmented reality to visualize designs, coordinate teams, and improve project outcomes with immersive experiences.",
      image: "/vr.jpeg",
      link: "/vr-coordination"
    },
    {
      title: "Custom Software Solutions",
      description: "Tailored software solutions, including project management systems, digital permit to work systems, and GHG tracking systems, designed to meet your specific operational needs.",
      image: "/coding.jpeg",
      link: "/custom-software"
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
      icon: Cpu,
      title: "Technology Leadership",
      description: "We stay at the forefront of digital innovation, continuously adopting the latest technologies."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with deep industry knowledge and technical expertise."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Our track record of successful digital transformations speaks for itself."
    }
  ];

  const benefits = [
    "Single source of truth for all project data",
    "Reduced errors through digital coordination",
    "Faster decision-making with real-time insights",
    "Cost certainty with guaranteed maximum price options",
    "Enhanced collaboration between all project stakeholders",
    "Improved project quality through integrated team approach"
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1A4B8C] text-white py-24 lg:py-32 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              DIGITAL SOLUTIONS
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Innovative Technology Solutions for the Built Environment
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
              UBBIM's Digital Solutions bring the power of cutting-edge technology to the built environment. From aerial analytics to 3D scanning and custom software development, we offer tools that enhance project precision, streamline processes, and unlock new possibilities for innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden relative group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link to={service.link}>
                      <button className="px-8 py-3 bg-[#005F6B] hover:bg-[#007A8A] text-white font-bold rounded-full text-sm transition-colors duration-200">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
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

export default DigitalSolutions;