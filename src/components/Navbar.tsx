"use client";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Built Environment Services", href: "/services/design-build" },
        { name: "Digital Solutions", href: "/services/digital-solutions" }
      ]
    },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#00EAFF] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/src/assets/ubbim-logo.png" 
                alt="UBBIM Logo" 
                className="h-[58px] w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 relative">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsServicesDropdownOpen(false)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center space-x-1 transition-colors font-medium ${
                      isActive(link.href) ? "text-[#4ADE80]" : "text-white hover:text-[#4ADE80]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && (
                    <div
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${
                        isServicesDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                    >
                      <div className="py-2">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`block px-4 py-3 text-gray-700 hover:bg-[#1A4B8C]/10 hover:text-[#1A4B8C] transition-colors font-medium ${
                              isActive(item.href) ? "bg-[#1A4B8C]/10 text-[#1A4B8C]" : ""
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isDrawerOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-gray-800 font-bold text-xl">UBBIM</span>
            </Link>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-600 hover:text-gray-900 p-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => setIsDrawerOpen(false)}
                    className={`block px-4 py-3 text-gray-700 hover:bg-[#1A4B8C]/10 hover:text-[#1A4B8C] rounded-lg transition-colors font-medium ${
                      isActive(link.href) ? "bg-[#1A4B8C]/10 text-[#1A4B8C]" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && link.dropdownItems && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsDrawerOpen(false)}
                          className={`block px-4 py-2 text-sm text-gray-600 hover:bg-[#1A4B8C]/10 hover:text-[#1A4B8C] rounded transition-colors ${
                            isActive(item.href) ? "bg-[#1A4B8C]/10 text-[#1A4B8C]" : ""
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t">
            <Button className="w-full bg-[#1A4B8C] hover:bg-[#143a6e]">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;