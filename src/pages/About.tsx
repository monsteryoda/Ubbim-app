"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Users, Award, TrendingUp, Shield, Leaf, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize the safety of our workers, clients, and communities in every project we undertake."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to environmentally responsible practices and sustainable construction methods."
    },
    {
      icon: Target,
      title: "Quality Excellence",
      description: "Delivering superior quality through rigorous standards and continuous improvement."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Fostering a culture of teamwork, innovation, and shared success."
    }
  ];

  const milestones = [
    { year: "2003", event: "UBBIM founded with a vision to revolutionize construction" },
    { year: "2008", event: "Expanded operations to international markets" },
    { year: "2012", event: "Achieved ISO 9001:2015 certification" },
    { year: "2015", event: "Completed 200+ projects across multiple countries" },
    { year: "2019", event: "Launched digital solutions division" },
    { year: "2022", event: "Achieved CIDB SCORE 3 Star Rating" },
    { year: "2024", event: "Celebrating 20+ years of excellence" }
  ];

  const teamStats = [
    { value: "8,000+", label: "Employees Worldwide" },
    { value: "500+", label: "Projects Completed" },
    { value: "15", label: "Countries Served" },
    { value: "20+", label: "Years of Excellence" }
  ];

  const Logo = () => (
    <div className="h-10 w-auto flex items-center justify-center bg-[#1A4B8C] rounded text-white font-bold px-3 text-lg">
      UBBIM
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A4B8C] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Logo />
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
              <Link to="/about" className="text-[#4ADE80] font-medium">
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ABOUT UBBIM
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Building the future with innovation, excellence, and commitment
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Founded in 2003, UBBIM has grown from a local construction company to an international leader in built environment services and digital solutions. With over 20 years of experience, we have successfully delivered hundreds of projects across multiple countries and industries.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of our clients' needs. We've evolved from traditional construction to embracing cutting-edge technologies like BIM, AI, and sustainable building practices.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                Today, UBBIM stands as a trusted partner for governments, corporations, and communities worldwide, delivering projects that shape skylines, connect cities, and build the infrastructure of tomorrow.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" 
                alt="UBBIM Team" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl md:text-5xl font-bold text-[#1A4B8C] mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              OUR CORE VALUES
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define our culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#1A4B8C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-[#1A4B8C]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              OUR JOURNEY
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped our evolution and success.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#1A4B8C] text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-2">
                    {milestone.event}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A4B8C]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Building the Future
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Be part of our journey as we continue to innovate and deliver excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#4ADE80] hover:bg-[#3dd673] text-[#1A4B8C] px-8 py-6 text-lg font-semibold">
              Contact Us
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1A4B8C] px-8 py-6 text-lg font-semibold">
              View Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;