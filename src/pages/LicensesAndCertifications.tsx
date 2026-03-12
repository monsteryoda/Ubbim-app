"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, Shield, Leaf, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LicensesAndCertifications = () => {
  const certifications = [
    {
      id: "1",
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      description: "Provision of General Construction, Civil and Structural Engineering Services",
      image: "/src/assets/certifications/iso-9001-2015.png",
      icon: Shield,
      color: "blue"
    },
    {
      id: "2",
      title: "ISO 14001:2015",
      subtitle: "Environmental Management System",
      description: "Provision of General Construction, Civil and Structural Engineering Services",
      image: "/src/assets/certifications/iso-14001-2015.png",
      icon: Leaf,
      color: "green"
    },
    {
      id: "3",
      title: "ISO 45001:2018",
      subtitle: "Occupational Health and Safety",
      description: "Provision of General Construction, Civil and Structural Engineering Services",
      image: "/src/assets/certifications/iso-45001-2018.png",
      icon: Shield,
      color: "orange"
    },
    {
      id: "4",
      title: "ISO 14064-1:2018",
      subtitle: "Greenhouse Gases Part 1",
      description: "Organization Level for Quantification and Reporting Greenhouse Gas Emission and Removals",
      image: "/src/assets/certifications/iso-14064-1.png",
      icon: Leaf,
      color: "teal"
    },
    {
      id: "5",
      title: "CIDB G7 Grade",
      subtitle: "3 Star Rating",
      description: "Good management and technical capabilities, compliance to best practices and good project management",
      image: "/src/assets/certifications/cidb-g7.png",
      icon: Award,
      color: "amber"
    },
    {
      id: "6",
      title: "Malaysia Book of Records",
      subtitle: "First Construction Company Certified",
      description: "First construction company certified by ISO 14064-1:2018 Greenhouse Part 1",
      image: "/src/assets/certifications/malaysia-book.png",
      icon: Award,
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center space-x-2 text-[#1A4B8C] hover:text-[#4ADE80] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A4B8C] to-[#0d2a5c] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Award className="w-16 h-16 mx-auto text-[#4ADE80]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Commitment to Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Ubbim Resources Sdn Bhd adheres to the highest international standards in quality, 
              environmental management, and occupational health and safety. Our certifications reflect 
              our dedication to delivering exceptional construction and engineering services.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              Our Certifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognized by international bodies for our commitment to excellence and continuous improvement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {certifications.map((cert) => (
              <Card 
                key={cert.id} 
                className="group hover:shadow-2xl transition-all duration-300 border-none overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-${cert.color}-100 flex items-center justify-center`}>
                      <cert.icon className={`w-6 h-6 text-${cert.color}-600`} />
                    </div>
                    <CheckCircle className="w-5 h-5 text-[#4ADE80]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1A4B8C] mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {cert.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {cert.description}
                  </p>
                  
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
                Our Standards
              </h2>
              <p className="text-gray-600">
                We maintain the highest standards across all our operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Shield className="w-12 h-12 mx-auto mb-4 text-[#1A4B8C]" />
                <h3 className="text-lg font-semibold text-[#1A4B8C] mb-2">Quality Assurance</h3>
                <p className="text-gray-600 text-sm">
                  Rigorous quality control processes ensure every project meets the highest standards
                </p>
              </div>
              <div className="text-center p-6">
                <Leaf className="w-12 h-12 mx-auto mb-4 text-[#1A4B8C]" />
                <h3 className="text-lg font-semibold text-[#1A4B8C] mb-2">Environmental Responsibility</h3>
                <p className="text-gray-600 text-sm">
                  Sustainable practices and minimal environmental impact in all operations
                </p>
              </div>
              <div className="text-center p-6">
                <Award className="w-12 h-12 mx-auto mb-4 text-[#1A4B8C]" />
                <h3 className="text-lg font-semibold text-[#1A4B8C] mb-2">Safety First</h3>
                <p className="text-gray-600 text-sm">
                  Uncompromising commitment to worker safety and health on all project sites
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A4B8C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner with a Certified Leader
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join the many satisfied clients who trust Ubbim Resources for their construction and engineering needs
          </p>
          <Button 
            size="lg" 
            className="bg-[#4ADE80] text-[#1A4B8C] hover:bg-[#22c55e] font-semibold"
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LicensesAndCertifications;