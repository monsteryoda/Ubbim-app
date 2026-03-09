"use client";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/sustainability-report", label: "Sustainability" },
    { path: "/awards", label: "Awards" },
    { path: "/whistleblower", label: "Whistleblower" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Ubbim Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-[#1A4B8C]">Ubbim</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-[#1A4B8C] text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#1A4B8C]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-[#1A4B8C]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img 
                      src="/logo.png" 
                      alt="Ubbim Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xl font-bold text-[#1A4B8C]">Ubbim</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(link.path)
                        ? "bg-[#1A4B8C] text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[#1A4B8C]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;