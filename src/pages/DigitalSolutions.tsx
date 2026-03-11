"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Cpu, Code, Cloud, Smartphone, BarChart3, Globe, Shield, Zap, Layers, Search, Database, Wifi, Monitor, Headphones, FileText, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

const DigitalSolutions = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure solutions that enable seamless collaboration and data accessibility across your organization.",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Advanced data analytics and business intelligence tools that transform raw data into actionable insights for better decision-making.",
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Intelligent automation and predictive analytics powered by cutting-edge AI algorithms to optimize operations and reduce costs.",
    },
    {
      icon: Globe,
      title: "IoT Solutions",
      description: "Internet of Things integration for smart buildings, equipment monitoring, and real-time asset tracking across your facilities.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions protecting your digital assets with advanced threat detection and response capabilities.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Custom mobile applications designed for iOS and Android platforms to enhance user engagement and operational efficiency.",
    },
  ];

  const services = [
    {
      title: "Building Information Modeling (BIM)",
      description: "Comprehensive 3D modeling and simulation services that enable precise project visualization, clash detection, and lifecycle management.",
      benefits: ["3D Visualization", "Clash Detection", "Cost Estimation", "Schedule Optimization"],
    },
    {
      title: "Virtual Reality (VR) & Augmented Reality (AR)",
      description: "Immersive experiences for design review, client presentations, and training programs that enhance understanding and engagement.",
      benefits: ["Design Validation", "Client Presentations", "Safety Training", "Maintenance Visualization"],
    },
    {
      title: "Drone & Aerial Analytics",
      description: "Advanced aerial surveying and monitoring using drone technology for site analysis, progress tracking, and topographic mapping.",
      benefits: ["Site Surveying", "Progress Monitoring", "Topographic Mapping", "Volume Calculations"],
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your specific business challenges and operational requirements.",
      benefits: ["Workflow Automation", "Data Integration", "Custom Dashboards", "API Development"],
    },
  ];

  const processSteps = [
    { number: "01", title: "Discovery", description: "Understanding your requirements and challenges through detailed consultation." },
    { number: "02", title: "Planning", description: "Developing a comprehensive strategy and technical roadmap for your project." },
    { number: "03", title: "Development", description: "Building and testing your solution with agile methodologies and continuous feedback." },
    { number: "04", title: "Deployment", description: "Launching your solution with proper training and support for smooth adoption." },
    { number: "05", title: "Support", description: "Ongoing maintenance, updates, and optimization to ensure long-term success." },
  ];

  const industries = [
    { name: "Construction", icon: Monitor },
    { name: "Real Estate", icon: Building2 },
    { name: "Infrastructure", icon: HardHat },
    { name: "Energy", icon: Zap },
    { name: "Manufacturing", icon: Factory },
    { name: "Transportation", icon: Truck },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1A4B8C] text-white py-24 lg:py-32 overflow-hidden pt-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Digital Solutions for the{" "}
              <span className="text-[#4ADE80]">Modern World</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Transform your business with cutting-edge technology. From AI and IoT to cloud computing and custom software, we deliver innovative digital solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#4ADE80] hover:bg-[#22c55e] text-[#1A4B8C] font-semibold">
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A4B8C]">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Our Digital Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage the latest technologies to deliver comprehensive digital solutions that address your unique business challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1A4B8C] transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-[#1A4B8C] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-justify">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Core Digital Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized services designed to meet the evolving needs of modern businesses across various industries.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1A4B8C] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-justify">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-[#4ADE80] flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
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
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful delivery of every digital project.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1A4B8C] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-[#1A4B8C] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-[#1A4B8C]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our digital solutions are tailored to meet the specific needs of various industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
                <industry.icon className="w-10 h-10 text-[#4ADE80] mx-auto mb-3" />
                <span className="text-white font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Let's discuss how our digital solutions can help you achieve your goals and stay ahead of the competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[#1A4B8C] hover:bg-[#143a6e]">
                Contact Us <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#1A4B8C] text-[#1A4B8C] hover:bg-[#1A4B8C] hover:text-white">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalSolutions;