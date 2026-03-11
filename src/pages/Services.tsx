"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, HardHat, TrendingUp, Users, Award, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const Services = () => {
  const services = [
    {
      title: "Design & Build Services",
      description: "Comprehensive design and build services tailored to meet the specific needs of each project, ensuring seamless execution.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      hasButton: true,
      link: "/services/design-build",
    },
    {
      title: "Firefighting Services",
      description: "Advanced fire protection systems designed to safeguard lives and property, from alarms to suppression systems.",
      image: "/src/assets/firefighting-services.jpg",
      hasButton: true,
      link: "/firefighting",
    },
    {
      title: "Structural Repair and Refurbishment",
      description: "Expert repair and refurbishment services that breathe new life into existing structures, enhancing durability and appearance.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
      hasButton: true,
      link: "/services/structural-repair",
    },
    {
      title: "Security & Surveillance Solutions",
      description: "Integrated security and surveillance solutions that provide peace of mind through advanced monitoring and control systems.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
      hasButton: true,
      link: "/services/security-surveillance",
    },
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              BUILT ENVIRONMENT SERVICES
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Comprehensive Solutions for Every Stage of Construction and Infrastructure Development
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              OUR SERVICES
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At UBBIM, we provide end-to-end services that cover every aspect of the built environment. From conceptual design to final construction, and ongoing maintenance, our team is dedicated to delivering projects that stand the test of time, ensuring safety, efficiency, and sustainability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {service.hasButton && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link to={service.link}>
                        <button className="px-8 py-3 bg-[#005F6B] hover:bg-[#007A8A] text-white font-bold rounded-full text-sm transition-all duration-200 hover:scale-105">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
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
            <p className="text-gray-600">Ready to start your project? Contact us today.</p>
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

export default Services;