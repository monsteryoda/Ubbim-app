"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  HardHat, 
  Leaf, 
  Train, 
  Zap, 
  Droplets,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Building2,
      title: "Building Construction",
      description: "Commercial, residential, and industrial building projects delivered with precision and quality.",
      features: ["Commercial complexes", "Residential towers", "Industrial facilities", "Renovation projects"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
    },
    {
      icon: Train,
      title: "Transportation Infrastructure",
      description: "Development of roads, highways, bridges, railways, and metro systems connecting communities.",
      features: ["Highways and roads", "Bridges and viaducts", "Railway systems", "Metro expansions"],
      image: "https://images.unsplash.com/photo-1517153295259-74c0f88f8f6d?w=800&q=80"
    },
    {
      icon: Zap,
      title: "Energy Projects",
      description: "Sustainable energy infrastructure including renewable energy installations and power distribution.",
      features: ["Solar farms", "Wind energy", "Power substations", "Transmission lines"],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
    },
    {
      icon: Droplets,
      title: "Water & Sanitation",
      description: "Comprehensive water treatment plants, sewage systems, and irrigation infrastructure.",
      features: ["Water treatment plants", "Sewage networks", "Irrigation systems", "Flood control"],
      image: "https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?w=800&q=80"
    }
  ];

  const engineeringServices = [
    {
      icon: HardHat,
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery within budget and quality standards."
    },
    {
      icon: CheckCircle,
      title: "Technical Consulting",
      description: "Expert consulting services for feasibility studies, planning, and technical assessments."
    },
    {
      icon: Leaf,
      title: "Environmental Engineering",
      description: "Environmental impact assessments and sustainable construction practices implementation."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A4B8C] py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Comprehensive infrastructure solutions combining technical excellence, 
              innovation, and sustainability. From concept to completion, we deliver 
              projects that transform communities and drive economic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-xl">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-[#1A4B8C]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A4B8C]">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#4ADE80]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-[#1A4B8C] hover:bg-[#153d73]">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Engineering Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized engineering services to support every phase of your project.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {engineeringServices.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1A4B8C] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1A4B8C]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your infrastructure needs and discover how 
            Ubbim can deliver excellence for your project.
          </p>
          <Button asChild size="lg" className="bg-[#4ADE80] text-[#1A4B8C] hover:bg-[#22c55e] font-semibold">
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;