"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Leaf, Award, HardHat, TrendingUp, Users, Phone, FileText, Shield, Cpu } from "lucide-react";

const Index = () => {
  const stats = [
    { value: "20+", label: "Years of Experience", icon: TrendingUp },
    { value: "500+", label: "Projects Completed", icon: Building2 },
    { value: "8,000+", label: "Employees", icon: Users },
    { value: "15", label: "Countries", icon: Award },
  ];

  const services = [
    {
      title: "Construction",
      description: "Large-scale infrastructure and building construction with cutting-edge technology.",
      icon: Building2,
    },
    {
      title: "Engineering",
      description: "Innovative engineering solutions for complex challenges in infrastructure.",
      icon: HardHat,
    },
  ];

  const featuredProjects = [
    {
      title: "Metro Line Expansion",
      location: "São Paulo, Brazil",
      image: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&q=80",
    },
    {
      title: "Green Energy Complex",
      location: "Rio de Janeiro, Brazil",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    },
    {
      title: "Highway Modernization",
      location: "Minas Gerais, Brazil",
      image: "https://images.unsplash.com/photo-1590644365607-1c5a8b57d0aa?w=800&q=80",
    },
  ];

  const awards = [
    { title: "Best Infrastructure Company", year: "2023", org: "Brazil Construction Awards" },
    { title: "Sustainability Excellence", year: "2023", org: "Green Business Council" },
    { title: "Safety Leadership Award", year: "2022", org: "National Safety Council" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#1A4B8C] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Integrated Solutions for the{" "}
              <span className="text-[#4ADE80]">Built Environment</span> and Beyond
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              From construction excellence to cutting-edge digital innovation, UBBIM delivers comprehensive services that shape the future of industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#4ADE80] text-[#1A4B8C] hover:bg-[#22c55e] font-semibold">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A4B8C]">
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Stats, Video & About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#1A4B8C]" />
                <div className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Video & About Combined */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* YouTube Video */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/IMFSWjvVlUM"
                  title="UBBIM Company Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* About Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-2">
                ABOUT US
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Experience, Expertise, and a Commitment to Excellence
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                UBBIM is a leading construction project management company with over 20 years of experience in the industry. We provide comprehensive solutions for construction projects, including design-build services, project management, progress monitoring, and data analytics. Our team of experts is committed to delivering high-quality services that meet the unique needs of each and every one of our clients.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                At UBBIM, we are continuously looking for ways to improve our services through technology adoption. We utilize advanced digital technologies such as Building Information Modeling (BIM), virtual reality (VR), and other digital tools to optimize project performance and delivery. Our focus on technology adoption allows us to stay at the forefront of the industry and provide innovative solutions for our clients.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                Our team brings a wealth of experience and expertise to every project, providing expert guidance and support throughout the project lifecycle. We are committed to delivering projects on time, on budget, and to the highest standards of quality. Contact us today to learn more about how we can help you with your construction project needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for infrastructure development, from planning 
              to execution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1A4B8C] transition-colors duration-300">
                    {index === 0 ? (
                      <Building2 className="w-7 h-7 text-[#1A4B8C] group-hover:text-white transition-colors duration-300" />
                    ) : (
                      <HardHat className="w-7 h-7 text-[#1A4B8C] group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                    BUILT ENVIRONMENT SERVICES
                  </h3>
                  <p className="text-gray-600 mb-4 text-justify">
                    {index === 0 
                      ? "Our Built Environment Services encompass every phase of construction and infrastructure development, from design and build to maintenance and refurbishment. We specialize in delivering high-quality, sustainable solutions that meet the unique needs of each project, ensuring safety, efficiency, and long-term value."
                      : service.description
                    }
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-[#1A4B8C] font-semibold hover:text-[#4ADE80] transition-colors"
                  >
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-[#1A4B8C]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-300 max-w-xl">
                Discover our most impactful infrastructure projects transforming communities.
              </p>
            </div>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A4B8C] mt-4 md:mt-0">
              <Link to="/projects" className="flex items-center gap-2">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-none group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Recognition & Awards
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <Award className="w-10 h-10 mx-auto mb-4 text-[#4ADE80]" />
                  <h3 className="font-bold text-[#1A4B8C] mb-1">{award.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">{award.org}</p>
                  <p className="text-sm font-semibold text-[#4ADE80]">{award.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-[#1A4B8C] text-[#1A4B8C] hover:bg-[#1A4B8C] hover:text-white">
              <Link to="/awards">View All Awards</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-[#1A4B8C] text-white border-none">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <FileText className="w-10 h-10 mb-4 text-[#4ADE80]" />
                <h3 className="text-xl font-bold mb-2">Sustainability Report</h3>
                <p className="text-gray-300 text-sm mb-4">Download our latest ESG report and see our impact.</p>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A4B8C]">
                  <Link to="/sustainability-report">Access Report</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1A4B8C] text-white border-none">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <Shield className="w-10 h-10 mb-4 text-[#4ADE80]" />
                <h3 className="text-xl font-bold mb-2">Whistleblower Channel</h3>
                <p className="text-gray-300 text-sm mb-4">Report concerns confidentially and securely.</p>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A4B8C]">
                  <Link to="/whistleblower">Access Channel</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1A4B8C] text-white border-none">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <Phone className="w-10 h-10 mb-4 text-[#4ADE80]" />
                <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                <p className="text-gray-300 text-sm mb-4">Get in touch for partnerships or inquiries.</p>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A4B8C]">
                  <Link to="/contact">Contact Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;