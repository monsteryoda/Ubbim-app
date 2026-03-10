"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const officeDetails = {
    address: "123 Business Street, Business District, 50000 Kuala Lumpur, Malaysia",
    phone: "+60 3-1234 5678",
    email: "info@ublim.com",
    socialLinks: [
      { icon: Facebook, href: "#", label: "Facebook" },
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
      { icon: Instagram, href: "#", label: "Instagram" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[#1A4B8C] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get in <span className="text-[#4ADE80]">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              We'd love to hear from you. Reach out to us for any inquiries or partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <Input 
                          type="text" 
                          placeholder="John"
                          className="border-gray-300 focus:border-[#1A4B8C] focus:ring-[#1A4B8C]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <Input 
                          type="text" 
                          placeholder="Doe"
                          className="border-gray-300 focus:border-[#1A4B8C] focus:ring-[#1A4B8C]"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com"
                        className="border-gray-300 focus:border-[#1A4B8C] focus:ring-[#1A4B8C]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="+60 12-345 6789"
                        className="border-gray-300 focus:border-[#1A4B8C] focus:ring-[#1A4B8C]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input 
                        type="text" 
                        placeholder="How can we help you?"
                        className="border-gray-300 focus:border-[#1A4B8C] focus:ring-[#1A4B8C]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell us more about your project or inquiry..."
                        rows={5}
                        className="border-gray-300 focus:border-[#1A4B8C] focus:ring-[#1A4B8C]"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-[#1A4B8C] hover:bg-[#153a6e] text-white py-6 text-lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-6">
                  Office Details
                </h2>
                <p className="text-gray-600 mb-8">
                  Visit us or reach out through any of the following channels.
                </p>
              </div>

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

              {/* Social Media */}
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-[#1A4B8C] mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {officeDetails.socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center hover:bg-[#1A4B8C] transition-colors duration-300"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-[#1A4B8C] hover:text-white transition-colors duration-300" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;