"use client";

import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - UBBIM";
    return () => {
      document.title = "UBBIM - Integrated Solutions for the Built Environment";
    };
  }, []);

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
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1A4B8C] text-white py-20 lg:py-28 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get in <span className="text-[#4ADE80]">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Feel free to contact us if you have any questions, feedback, or need assistance. Our team is here to help and will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B8C] mb-4">
              CONTACT US
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info Cards - Left Side */}
            <div className="space-y-6">
              {/* Address Card */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
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
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
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
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
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

            {/* Google Map - Right Side */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;