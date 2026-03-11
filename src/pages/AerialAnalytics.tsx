"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Mail, Plane, Camera, Map, FileText, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const AerialAnalytics = () => {
  const features = [
    {
      icon: Plane,
      title: "Advanced Drone Technology",
      description: "State-of-the-art drones equipped with high-resolution cameras and sensors for precise data collection."
    },
    {
      icon: Camera,
      title: "High-Resolution Imaging",
      description: "Capture detailed aerial imagery with exceptional clarity for accurate analysis and documentation."
    },
    {
      icon: Map,
      title: "3D Mapping & Modeling",
      description: "Create comprehensive 3D models and maps from aerial data for enhanced project visualization."
    },
    {
      icon: FileText,
      title: "Detailed Analytics Reports",
      description: "Receive comprehensive reports with actionable insights derived from aerial data analysis."
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "Ensure regulatory compliance and enhance site safety through remote aerial monitoring."
    },
    {
      icon: TrendingUp,
      title: "Cost-Effective Solutions",
      description: "Reduce project costs by minimizing on-site inspections and accelerating data collection."
    }
  ];

  const applications = [
    {
      title: "Construction Site Monitoring",
      description: "Track progress, identify issues, and ensure quality control across construction sites."
    },
    {
      title: "Land Surveying",
      description: "Accurate topographic surveys and boundary mapping for development projects."
    },
    {
      title: "Infrastructure Inspection",
      description: "Inspect bridges, roads, and other infrastructure without disrupting operations."
    },
    {
      title: "Environmental Assessment",
      description: "Monitor environmental changes and assess impact on surrounding areas."
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
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1A4B8C] text-white py-24 lg:py-32 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AERIAL ANALYTICS SOLUTIONS
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Transform Your Projects with Cutting-Edge Drone Technology and Data-Driven Insights
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-6">
                Elevate Your Project with Aerial Intelligence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                UBBIM's Aerial Analytics Solutions leverage advanced drone technology to provide precise aerial surveys, mapping, and data analysis. Our team of experts transforms raw aerial data into actionable insights that drive better project outcomes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From construction site monitoring to environmental assessments, our aerial analytics services help you make informed decisions, reduce costs, and improve project efficiency.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80" 
                alt="Aerial Analytics" 
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Why Choose Our Aerial Analytics
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive aerial analytics solutions deliver precision, efficiency, and actionable insights for your projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <feature.icon className="w-10 h-10 text-[#1A4B8C] mb-4" />
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

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Applications & Use Cases
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our aerial analytics solutions are versatile and can be applied across various industries and project types.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {app.description}
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
              GET IN TOUCH
            </h2>
            <p className="text-gray-600">Ready to leverage aerial analytics for your project? Contact us today.</p>
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
    </div>
  );
};

export default AerialAnalytics;