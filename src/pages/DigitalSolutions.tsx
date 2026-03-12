"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Lightbulb, Code, Smartphone, Globe, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

interface DigitalSolution {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  category: string;
}

const DigitalSolutions: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const solutions: DigitalSolution[] = [
    {
      id: "1",
      title: "Digital Permit to Work System (e-ptw)",
      description: "A comprehensive digital permit management system designed for incineration plants and industrial facilities. Streamline your safety protocols with automated workflows and real-time monitoring.",
      image: "/src/assets/projects/highlights-banner.png",
      features: [
        "Automated permit approval workflows",
        "Real-time safety monitoring",
        "Mobile-friendly interface",
        "Integration with existing systems",
        "Compliance tracking and reporting"
      ],
      category: "Safety Management"
    },
    {
      id: "2",
      title: "Project Management System for Shutdown Operation",
      description: "Specialized project management platform for complex shutdown operations. Coordinate multiple teams, track progress, and ensure safety compliance during critical maintenance periods.",
      image: "/src/assets/projects/highlights-2.png",
      features: [
        "Multi-team coordination",
        "Critical path tracking",
        "Resource allocation",
        "Safety checkpoint management",
        "Real-time progress dashboards"
      ],
      category: "Project Management"
    },
    {
      id: "3",
      title: "Aerial Analytics Services",
      description: "Advanced aerial data analytics for earthworks projects. Utilize drone technology and AI-powered analysis to optimize site planning and monitoring.",
      image: "/src/assets/projects/highlights-3.png",
      features: [
        "Drone-based site surveying",
        "3D terrain modeling",
        "Volume calculation accuracy",
        "Progress tracking",
        "Environmental impact assessment"
      ],
      category: "Analytics"
    },
    {
      id: "4",
      title: "3D Scanning and Facility Management",
      asDescription: "Comprehensive 3D scanning solution for large mechanical rooms. Create digital twins for better facility management and maintenance planning.",
      image: "/src/assets/projects/highlights-4.png",
      features: [
        "High-precision 3D scanning",
        "Digital twin creation",
        "Equipment tracking",
        "Maintenance scheduling",
        "Space optimization"
      ],
      category: "Facility Management"
    },
    {
      id: "5",
      title: "3D Process Animation Video",
      description: "Immersive 3D animation videos for waste-to-energy plants. Visualize complex processes for training, safety briefings, and stakeholder presentations.",
      image: "/src/assets/projects/highlights-5.png",
      features: [
        "Realistic process visualization",
        "Interactive 3D models",
        "Training material creation",
        "Safety demonstration",
        "Stakeholder communication"
      ],
      category: "Visualization"
    },
    {
      id: "6",
      title: "Building Contractors App (BEENA)",
      description: "Custom mobile application developed for the Association of Construction Project Managers. Connect contractors, share resources, and streamline project collaboration.",
      image: "/src/assets/projects/highlights-7.png",
      features: [
        "Member directory",
        "Resource sharing platform",
        "Project collaboration tools",
        "Event management",
        "Industry news and updates"
      ],
      category: "Mobile Application"
    },
    {
      id: "7",
      title: "Virtual Reality Remodelling",
      description: "Immersive VR experience for warehouse remodelling projects. Visualize design changes before implementation and enhance client decision-making.",
      image: "/src/assets/projects/highlights-9.png",
      features: [
        "Immersive VR walkthroughs",
        "Real-time design modifications",
        "Client presentation tool",
        "Error detection before construction",
        "Cost estimation integration"
      ],
      category: "Virtual Reality"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % solutions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const categoryIcons = {
    "Safety Management": Shield,
    "Project Management": Lightbulb,
    "Analytics": Code,
    "Facility Management": Smartphone,
    "Visualization": Globe,
    "Mobile Application": Zap,
    "Virtual Reality": Lightbulb
  };

  const currentSolution = solutions[currentIndex];
  const IconComponent = categoryIcons[currentSolution.category as keyof typeof categoryIcons] || Lightbulb;

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Header Section */}
      <section className="relative bg-[#1A4B8C] text-white py-24 lg:py-32 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              DIGITAL SOLUTIONS
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Innovative digital technologies transforming construction and facility management
            </p>
          </div>
        </div>
      </section>

      {/* Featured Solution */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Solution Card */}
              <Card className="border-none shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative aspect-[4/3] md:aspect-auto">
                      <img
                        src={currentSolution.image}
                        alt={currentSolution.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A4B8C]/80 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="bg-[#4ADE80] p-2 rounded-lg">
                            <IconComponent className="w-5 h-5 text-[#1A4B8C]" />
                          </div>
                          <span className="text-[#4ADE80] font-medium">{currentSolution.category}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {currentSolution.title}
                        </h2>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-12 bg-white">
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {currentSolution.description}
                      </p>
                      
                      <h3 className="text-lg font-semibold text-[#1A4B8C] mb-4">Key Features:</h3>
                      <ul className="space-y-3 mb-8">
                        {currentSolution.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="bg-[#4ADE80] p-1 rounded-full mt-0.5">
                              <div className="w-2 h-2 bg-[#1A4B8C] rounded-full" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button className="bg-[#1A4B8C] hover:bg-[#143a6e] text-white">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-[#1A4B8C] border-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-[#1A4B8C] border-2"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {solutions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-[#1A4B8C] w-8" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              All Digital Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our complete portfolio of digital innovations designed to enhance construction and facility management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const IconComponent = categoryIcons[solution.category as keyof typeof categoryIcons] || Lightbulb;
              return (
                <Card key={solution.id} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A4B8C]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button className="w-full bg-white text-[#1A4B8C] hover:bg-gray-100">
                          View Details
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="bg-[#4ADE80] p-1.5 rounded-lg">
                          <IconComponent className="w-4 h-4 text-[#1A4B8C]" />
                        </div>
                        <span className="text-sm text-gray-500">{solution.category}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#1A4B8C] mb-2 line-clamp-2">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {solution.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#1A4B8C]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Contact us to discuss how our digital solutions can benefit your projects and operations.
            </p>
            <Button className="bg-[#4ADE80] hover:bg-[#22c55e] text-[#1A4B8C] font-semibold px-8 py-6 text-lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#143a6e] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/ubbim-logo.png" 
                  alt="UBBIM Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                UBBIM delivers comprehensive construction solutions with a focus on quality, innovation, and client satisfaction.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/services/design-build" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Design & Build
                  </a>
                </li>
                <li>
                  <a href="/firefighting" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Firefighting Services
                  </a>
                </li>
                <li>
                  <a href="/services/structural-repair" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Structural Repair
                  </a>
                </li>
                <li>
                  <a href="/services/security-surveillance" className="text-gray-300 hover:text-[#4ADE80] transition-colors">
                    Security & Surveillance
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-[#4ADE80] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="text-gray-300">
                    No. 219, Jalan S2 B10,<br />
                    Seremban 2, 70300 Seremban,<br />
                    Negeri Sembilan
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span className="text-gray-300">+606-6016007</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="text-gray-300">admin@ubbim.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} UBBIM. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-[#4ADE80] text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-[#4ADE80] text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DigitalSolutions;