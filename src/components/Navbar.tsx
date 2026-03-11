"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Built Environment On Services", 
      href: "/services",
      dropdown: [
        { name: "Service 1", href: "/services/service-1" },
        { name: "Service 2", href: "/services/service-2" },
        { name: "Service 3", href: "/services/service-3" },
      ]
    },
    { 
      name: "Digital Solution", 
      href: "/digital",
      dropdown: [
        { name: "Solution 1", href: "/digital/solution-1" },
        { name: "Solution 2", href: "/digital/solution-2" },
        { name: "Solution 3", href: "/digital/solution-3" },
      ]
    },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#60A5FA] shadow-lg">
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
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(link.name)}
                        className="flex items-center space-x-1 text-white hover:text-[#4ADE80] transition-colors font-medium px-3 py-2 rounded-lg"
                      >
                        <span>{link.name}</span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {/* Dropdown Menu */}
                      {openDropdown === link.name && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50">
                          {link.dropdown.map((subLink) => (
                            <Link
                              key={subLink.name}
                              to={subLink.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-3 text-gray-700 hover:bg-[#1A4B8C]/10 hover:text-[#1A4B8C] transition-colors font-medium"
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-white hover:text-[#4ADE80] transition-colors font-medium px-3 py-2 rounded-lg"
                    >
                      {link.name}
                    </Link>
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
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setIsDrawerOpen(false)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-[#1A4B8C]/10 hover:text-[#1A4B8C] rounded-lg transition-colors font-medium"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <div className="ml-4 mt-1 space-y-1">
                        {link.dropdown.map((subLink) => (
                          <Link
                            key={subLink.name}
                            to={subLink.href}
                            onClick={() => setIsDrawerOpen(false)}
                            className="block px-4 py-2 text-gray-600 hover:bg-[#1A4B8C]/5 hover:text-[#1A4B8C] rounded-lg transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsDrawerOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:bg-[#1A4B8C]/10 hover:text-[#1A4B8C] rounded-lg transition-colors font-medium"
                    >
                      {link.name}
                    </Link>
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