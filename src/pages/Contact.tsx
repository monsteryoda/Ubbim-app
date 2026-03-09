"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building2,
  CheckCircle
} from "lucide-react";
import { showSuccess } from "@/utils/toast";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const offices = [
    {
      city: "Rio de Janeiro",
      address: "Av. Presidente Wilson, 231",
      district: "Centro",
      phone: "+55 21 3456-7890",
      email: "rio@ubbim.com",
      hours: "Mon-Fri: 8:00 - 18:00"
    },
    {
      city: "São Paulo",
      address: "Av. Paulista, 1000",
      district: "Bela Vista",
      phone: "+55 11 3456-7890",
      email: "sp@ubbim.com",
      hours: "Mon-Fri: 8:00 - 18:00"
    },
    {
      city: "Brasília",
      address: "SAUS, Quadra 01, Bloco N",
      district: "Asa Sul",
      phone: "+55 61 3456-7890",
      email: "bsb@ubbim.com",
      hours: "Mon-Fri: 8:00 - 18:00"
    }
  ];

  const subjects = [
    "Business Partnership",
    "Supplier Inquiry",
    "Career Opportunities",
    "Media & Press",
    "Investor Relations",
    "General Inquiry"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Message sent successfully! We'll respond within 24 hours.");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A4B8C] py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Get in touch with our team for partnerships, inquiries, or any questions. 
              We're here to help and ready to build the future together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#1A4B8C] mb-8">Send a Message</h2>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-[#1A4B8C] font-semibold">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        required
                        placeholder="John Doe"
                        className="mt-2"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#1A4B8C] font-semibold">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="mt-2"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-[#1A4B8C] font-semibold">
                      Company / Organization
                    </Label>
                    <Input
                      id="company"
                      placeholder="Company Name"
                      className="mt-2"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-[#1A4B8C] font-semibold">
                      Subject *
                    </Label>
                    <select
                      id="subject"
                      required
                      className="w-full mt-2 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A4B8C] focus:border-transparent"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option value="">Select a subject...</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#1A4B8C] font-semibold">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="How can we help you?"
                      className="mt-2 min-h-[150px]"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="bg-[#1A4B8C] hover:bg-[#153d73] px-8 py-6 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </Button>
                </form>
              ) : (
                <Card className="bg-[#4ADE80]/10 border-none">
                  <CardContent className="p-8 flex items-center gap-4">
                    <CheckCircle className="w-10 h-10 text-[#4ADE80]" />
                    <div>
                      <h3 className="text-xl font-bold text-[#1A4B8C]">Message Sent!</h3>
                      <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-[#1A4B8C] mb-8">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center shrink-0">
                          <Building2 className="w-6 h-6 text-[#1A4B8C]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#1A4B8C] mb-2">{office.city}</h3>
                          <div className="space-y-2 text-sm text-gray-600">
                            <p className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-[#4ADE80]" />
                              {office.address}, {office.district}
                            </p>
                            <p className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-[#4ADE80]" />
                              {office.phone}
                            </p>
                            <p className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-[#4ADE80]" />
                              {office.email}
                            </p>
                            <p className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-[#4ADE80]" />
                              {office.hours}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A4B8C] mb-4">National Presence</h2>
            <p className="text-gray-600">Operating across Brazil with international partnerships</p>
          </div>
          <div className="relative h-[400px] bg-[#1A4B8C] rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="text-center text-white">
              <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl font-semibold">Map Integration</p>
              <p className="text-gray-300">Interactive map showing all project locations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;