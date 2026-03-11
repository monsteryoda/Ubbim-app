"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, HardHat, Cpu, Code, Cloud, Smartphone, BarChart3, Globe, Shield, Zap, Layers, Search, Database, Wifi, Monitor, Headphones, FileText, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

const Services = () => {
  const builtEnvironmentServices = [
    {
      title: "Construction Management",
      description: "End-to-end project management from planning to completion, ensuring quality, safety, and timely delivery.",
      icon: Building2,
      features: ["Project Planning", "Resource Management", "Quality Control", "Safety Compliance"],
    },
    {
      title: "Design & Build",
      description: "Integrated design and construction services that streamline the building process and reduce costs.",
      icon: Layers,
      features: ["Architectural Design", "Structural Engineering", "Interior Design", "Sustainable Solutions"],
    },
    {
      title: "Infrastructure Development",
      description: "Large-scale infrastructure projects including roads, bridges, utilities, and public facilities.",
      icon: HardHat,
      features: ["Road Construction", "Bridge Building", "Utility Installation", "Public Facilities"],
    },
    {
      title: "Maintenance & Refurbishment",
      description: "Comprehensive maintenance services to extend the lifecycle of your buildings and infrastructure.",
      icon: FileText,
      features: ["Preventive Maintenance", "Emergency Repairs", "Renovation Services", "Asset Management"],
    },
  ];

  const digitalSolutions = [
    {
      title: "Building Information Modeling (BIM)",
      description: "Comprehensive 3D modeling and simulation services that enable precise project visualization, clash detection, and lifecycle management.",
      icon: Monitor,
      benefits: ["3D Visualization", "Clash Detection", "Cost Estimation", "Schedule Optimization"],
    },
    {
      title: "Virtual Reality (VR) & Augmented Reality (AR)",
      description: "Immersive experiences for design review, client presentations, and training programs that enhance understanding and engagement.",
      icon: Headphones,
      benefits: ["Design Validation", "Client Presentations", "Safety Training", "Maintenance Visualization"],
    },
    {
      title: "Drone & Aerial Analytics",
      description: "Advanced aerial surveying and monitoring using drone technology for site analysis, progress tracking, and topographic mapping.",
      icon: Search,
      benefits: ["Site Surveying", "Progress Monitoring", "Topographic Mapping", "Volume Calculations"],
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your specific business challenges and operational requirements.",
      icon: Code,
      benefits: ["Workflow Automation", "Data Integration", "Custom Dashboards", "API Development"],
    },
    {
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure solutions that enable seamless collaboration and data accessibility across your organization.",
      icon: Cloud,
      benefits: ["Scalability", "Cost Efficiency", "Remote Access", "Data Security"],
    },
    {
      title: "Data Analytics",
      description: "Advanced data analytics and business intelligence tools that transform raw data into actionable insights for better decision-making.",
      icon: BarChart3,
      benefits: ["Predictive Analytics", "Performance Monitoring", "Risk Assessment", "Business Intelligence"],
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent automation and predictive analytics powered by cutting-edge AI algorithms to optimize operations and reduce costs.",
      icon: Cpu,
      benefits: ["Process Automation", "Quality Prediction", "Resource Optimization", "Cost Reduction"],
    },
    {
      title: "IoT Solutions",
      description: "Internet of Things integration for smart buildings, equipment monitoring, and real-time asset tracking across your facilities.",
      icon: Wifi,
      benefits: ["Real-time Monitoring", "Predictive Maintenance", "Energy Management", "Asset Tracking"],
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions protecting your digital assets with advanced threat detection and response capabilities.",
      icon: Shield,
      benefits: ["Threat Detection", "Data Protection", "Compliance Management", "Incident Response"],
    },
    {
      title: "Mobile Development",
      description: "Custom mobile applications designed for iOS and Android platforms to enhance user engagement and operational efficiency.",
      icon: Smartphone,
      benefits: ["Cross-platform Apps", "User Experience Design", "Offline Functionality", "Push Notifications"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1A4B8C] text-white py-24 lg:py-32 overflow-hidden pt-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Comprehensive solutions for the built environment and digital innovation. We deliver excellence across every phase of your project lifecycle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#4ADE80] hover:bg-[#22c55e] text-[#1A4B8C] font-semibold">
                Explore Services <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A4B8C]">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Built Environment Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Built Environment Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From design to completion, we provide comprehensive construction and infrastructure services that deliver exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {builtEnvironmentServices.map((service, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-7 h-7 text-[#1A4B8C]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-justify">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-[#4ADE80] flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Digital Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Cutting-edge technology solutions that transform how you build, manage, and optimize your projects.
            </p>
            <Link to="/digital-solutions">
              <Button size="lg" className="bg-[#1A4B8C] hover:bg-[#143a6e]">
                Learn More About Digital Solutions <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {digitalSolutions.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1A4B8C] transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-[#1A4B8C] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A4B8C] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <span key={idx} className="text-xs bg-[#1A4B8C]/10 text-[#1A4B8C] px-2 py-1 rounded">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Let's discuss how our services can help you achieve your project goals and deliver exceptional results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[#1A4B8C] hover:bg-[#143a6e]">
                Contact Us <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#1A4B8C] text-[#1A4B8C] hover:bg-[#1A4B8C] hover:text-white">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;