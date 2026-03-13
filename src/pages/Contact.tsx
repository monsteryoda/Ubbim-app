"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";

const Contact = () => {
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
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />
      
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
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-8">
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

            {/* Google Map */}
            <div>
              <Card className="border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="rounded-2xl overflow-hidden h-96">
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