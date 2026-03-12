"use client";

import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, AlertCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#1A4B8C]/20 blur-3xl rounded-full" />
              <AlertCircle className="w-24 h-24 text-[#1A4B8C] relative z-10" />
            </div>
          </div>
          <h1 className="text-8xl md:text-9xl font-bold text-[#1A4B8C] mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oops! The page you're looking for seems to have wandered off. 
            Don't worry, we'll help you find your way back.
          </p>
        </div>

        {/* Search & Navigation */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1A4B8C] mb-4">
              Where would you like to go?
            </h3>
            <p className="text-gray-600 mb-6">
              Choose from our main sections or return to the homepage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { name: "Home", href: "/", icon: Home },
              { name: "Services", href: "/services", icon: Building2 },
              { name: "Projects", href: "/projects", icon: Building2 },
              { name: "Contact", href: "/contact", icon: Building2 },
            ].map((item, index) => (
              <Link key={index} to={item.href}>
                <Button 
                  variant="outline" 
                  className="w-full h-auto py-6 flex flex-col items-center gap-3 hover:bg-[#1A4B8C]/10 hover:border-[#1A4B8C] transition-all duration-300 group"
                >
                  <item.icon className="w-8 h-8 text-[#1A4B8C] group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-gray-700 group-hover:text-[#1A4B8C]">
                    {item.name}
                  </span>
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-[#1A4B8C] hover:bg-[#143a6e] text-white px-8 py-6 text-lg font-semibold">
                <Home className="w-5 h-5 mr-2" />
                Go to Homepage
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-[#1A4B8C] text-[#1A4B8C] hover:bg-[#1A4B8C]/10 px-8 py-6 text-lg font-semibold">
                <Building2 className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link to="/services">
            <Button variant="ghost" className="text-gray-600 hover:text-[#1A4B8C]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;