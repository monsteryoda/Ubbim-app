"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Leaf, Award, HardHat, TrendingUp, Users, Phone, FileText, Shield, Cpu } from "lucide-react";
import LogoCarousel from "@/components/LogoCarousel";
import CertificationsGrid from "@/components/CertificationsGrid";

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
      title: "Ministry of Defence Project",
      location: "Singapore",
      image: "https://www.ublim.com/wp-content/uploads/2024/08/b39d1bf4d7445c5c632d52bb79cefa55.jpeg",
    },
    {
      title: "Metro Line Expansion",
      location: "São Paulo, Brazil",
      image: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?w=800&q=80",
    },
    {
      title: "Green Energy Complex",
      location: "Rio de Janeiro, Brazil",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
    },
    {
      title: "Highway Modernization",
      location: "Minas Gerais, Brazil",
      image: "https://images.unsplash.com/photo-1545158927-2c94795a9a6c?w=800&q=80",
    },
  ];

  const certifications = [
    {
      id: "1",
      title: "CIDB SCORE 3 Star Rating",
      organization: "CIDB Malaysia",
      year: "2022",
      image: "/src/assets/certification-2022.png",
      description: "Achieved 3-star rating under the CIDB SCORE evaluation system, recognizing excellent management and technical capabilities, compliance to best practices, and outstanding project management standards.",
    },
    {
      id: "2",
      title: "Sustainability Excellence",
      organization: "Green Business Council",
      year: "2023",
      image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?w=800&q=80",
      description: "Awarded for implementing sustainable practices in construction projects, reducing carbon footprint by 40% across operations.",
    },
    {
      id: "3",
      title: "Safety Leadership Award",
      organization: "National Safety Council",
      year: "2022",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
      description: "Honored for maintaining the highest safety standards with zero lost-time incidents across all project sites for three consecutive years.",
    },
    {
      id: "4",
      title: "Innovation in Construction",
      organization: "International Building Tech Awards",
      year: "2023",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      description: "Recognized for pioneering the use of BIM and AI-driven project management tools in large-scale infrastructure projects.",
    },
    {
      id: "5",
      title: "Excellence in Project Delivery",
      organization: "Project Management Institute",
      year: "2022",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      description: "Awarded for delivering complex projects on time and within budget, exceeding client expectations across multiple sectors.",
    },
    {
      id: "6",
      title: "Environmental Stewardship",
      organization: "Environmental Protection Agency",
      year: "2023",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      description: "Recognized for implementing eco-friendly construction practices and achieving LEED certification on multiple projects.",
    },
    {
      id: "7",
      title: "ISO 9001:2015",
      organization: "ACM-CCAS Limited",
      year: "2017",
      image: "/src/assets/certifications/iso-9001.png",
      description: "Quality Management System Certification"
    }
  ];

  const clientLogos = [
    { name: "CIDB", image: "/src/assets/cidb-logo.jpg" },
    { name: "Malaysia Airports", image: "/src/assets/malaysia-airports-logo.png" },
    { name: "FGV", image: "/src/assets/fgv-logo.jpg" },
    { name: "Northport", image: "/src/assets/northport-logo.png" },
    { name: "MINDEF", image: "/src/assets/mindef-logo.png" },
    { name: "Cenviro", image: "/src/assets/cenviro-logo.png" },
    { name: "CIDB", image: "/src/assets/cidb-logo.jpg" },
    { name: "Malaysia Airports", image: "/src/assets/malaysia-airports-logo.png" },
    { name: "FGV", image: "/src/assets/fgv-logo.jpg" },
    { name: "Northport", image: "/src/assets/northport-logo.png" },
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
              OUR SERVICES
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
                    {index === 0 ? "BUILT ENVIRONMENT SERVICES" : "DIGITAL SOLUTIONS"}
                  </h3>
                  <p className="text-gray-600 mb-4 text-justify">
                    {index === 0 
                      ? "Our Built Environment Services encompass every phase of construction and infrastructure development, from design and build to maintenance and refurbishment. We specialize in delivering high-quality, sustainable solutions that meet the unique needs of each project, ensuring safety, efficiency, and long-term value."
                      : "Our Digital Solutions integrate advanced technologies like aerial analytics, 3D scanning, and virtual design coordination to transform how projects are planned, executed, and managed. We also develop custom software tailored to optimize operations, enhance collaboration, and drive innovation across industries."
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

      {/* Featured Projects Slider */}
      <section className="py-20 bg-[#1A4B8C]">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              WE ARE TRUSTED BY
            </h2>
          </div>
          <LogoCarousel logos={clientLogos} />
        </div>
      </section>

      {/* Certifications Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              LICENSES & CERTIFICATIONS
            </h2>
          </div>
          <CertificationsGrid certifications={certifications} />
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