"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Leaf, Award, HardHat, TrendingUp, Users, Phone, FileText, Shield, Cpu, MapPin, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import LogoCarousel from "@/components/LogoCarousel";
import CertificationsGrid from "@/components/CertificationsGrid";
import Navbar from "@/components/Navbar";

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
    },
    {
      id: "8",
      title: "ISO 14001:2015",
      organization: "ACM-CCAS Limited",
      year: "2019",
      image: "/src/assets/certifications/14001.png",
      description: "Environmental Management System Certification for general construction, civil and structural engineering services"
    },
    {
      id: "9",
      title: "ISO 45001:2018",
      organization: "ACM-CCAS Limited",
      year: "2019",
      image: "/src/assets/certifications/iso-45001-2018.png",
      description: "Occupational Health and Safety Management System Certification for provision of general construction, civil and structural engineering services"
    },
    {
      id: "10",
      title: "ISO 14064-1:2018",
      organization: "Institute of Quality Malaysia",
      year: "2022",
      image: "/src/assets/certifications/14064.png",
      description: "Greenhouse Gases Part 1 - Organization Level for Quantification and Reporting Greenhouse Gas Emission and Removals"
    },
    {
      id: "11",
      title: "Malaysia Book of Records",
      organization: "Malaysia Book of Records",
      year: "2022",
      image: "/src/assets/certifications/malaysia-book.png",
      description: "First construction company certified by ISO 14064-1:2018 Greenhouse Part 1 for provision of construction in civil, structural engineering and E-Construction Project Management Service"
    }
  ];

  const clientLogos = [
    { name: "CIDB", image: "/src/assets/cidb-logo.png" },
    { name: "Malaysia Airports", image: "/src/assets/malaysia-airports-logo.png" },
    { name: "FGV", image: "/src/assets/fgv-logo.png" },
    { name: "Northport", image: "/src/assets/northport-logo.png" },
    { name: "MINDEF", image: "/src/assets/mindef-logo.png" },
    { name: "Cenviro", image: "/src/assets/cenviro-logo.png" },
    { name: "CIDB", image: "/src/assets/cidb-logo.png" },
    { name: "Malaysia Airports", image: "/src/assets/malaysia-airports-logo.png" },
    { name: "FGV", image: "/src/assets/fgv-logo.png" },
    { name: "Northport", image: "/src/assets/northport-logo.png" },
  ];

  const officeDetails = {
    address: "No. 219, Jalan S2 B10, Seremban 2, 70300 Seremban, Negeri Sembilan",
    phone: "+606-6016007",
    email: "admin@ubbim.com",
    socialLinks: [
      { icon: Facebook, href: "#", label: "Facebook" },
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
      { icon: Instagram, href: "#", label: "Instagram" },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1A4B8C] text-white py-24 lg:py-32 overflow-hidden pt-16">
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
            <Card key="construction" className="group hover:shadow-xl transition-shadow duration-300 border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1A4B8C] transition-colors duration-300">
                  <Building2 className="w-7 h-7 text-[#1A4B8C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                  BUILT ENVIRONMENT SERVICES
                </h3>
                <p className="text-gray-600 mb-4 text-justify">
                  Our Built Environment Services encompass every phase of construction and infrastructure development, from design and build to maintenance and refurbishment. We specialize in delivering high-quality, sustainable solutions that meet the unique needs of each project, ensuring safety, efficiency, and long-term value.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-[#1A4B8C] font-semibold hover:text-[#4ADE80] transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>
            <Card key="digital" className="group hover:shadow-xl transition-shadow duration-300 border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1A4B8C] transition-colors duration-300">
                  <Cpu className="w-7 h-7 text-[#1A4B8C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#1A4B8C] mb-3">
                  DIGITAL SOLUTIONS
                </h3>
                <p className="text-gray-600 mb-4 text-justify">
                  Our Digital Solutions integrate advanced technologies like aerial analytics, 3D scanning, and virtual design coordination to transform how projects are planned, executed, and managed. We also develop custom software tailored to optimize operations, enhance collaboration, and drive innovation across industries.
                </p>
                <Link
                  to="/digital-solutions"
                  className="inline-flex items-center text-[#1A4B8C] font-semibold hover:text-[#4ADE80] transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>
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

      {/* Contact Us Section with Office Details and Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              CONTACT US
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address Card */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#1A4B8C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#1A4B8C] mb-2">Address</h3>
                      <p className="text-gray-600">{officeDetails.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#1A4B8C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#1A4B8C] mb-2">Phone</h3>
                      <p className="text-gray-600">{officeDetails.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#1A4B8C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#1A4B8C] mb-2">Email</h3>
                      <p className="text-gray-600">{officeDetails.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.823456789012!2d101.9123456!3d2.6987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d33f1234567890%3A0x1234567890abcdef!2sNo.%20219%2C%20Jalan%20S2%20B10%2C%20Seremban%202%2C%2070300%20Seremban%2C%20Negeri%20Sembilan!5e0!3m2!1sen!2smy!4v1234567890123!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UBBIM Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;