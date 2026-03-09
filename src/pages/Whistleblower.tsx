"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  EyeOff, 
  FileText, 
  Phone, 
  Globe,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { showSuccess, showError } from "@/utils/toast";

const Whistleblower = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    reportType: "",
    description: "",
    location: "",
    date: "",
    anonymous: true,
    contactEmail: "",
  });

  const reportTypes = [
    "Financial Irregularities",
    "Harassment or Discrimination",
    "Safety Violations",
    "Environmental Violations",
    "Conflicts of Interest",
    "Corruption or Bribery",
    "Data Privacy Breach",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    showSuccess("Report submitted successfully. Your case number is #WB-2024-001.");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A4B8C] py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-10 h-10 text-[#4ADE80]" />
              <Badge className="bg-[#4ADE80] text-[#1A4B8C]">Secure & Confidential</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Whistleblower Channel
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Report concerns about unethical behavior, violations, or irregularities 
              safely and confidentially. We are committed to investigating all reports 
              fairly and protecting whistleblowers.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#1A4B8C]" />
              </div>
              <div>
                <h4 className="font-bold text-[#1A4B8C]">Encrypted</h4>
                <p className="text-sm text-gray-600">256-bit encryption protection</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center">
                <EyeOff className="w-6 h-6 text-[#1A4B8C]" />
              </div>
              <div>
                <h4 className="font-bold text-[#1A4B8C]">Anonymous</h4>
                <p className="text-sm text-gray-600">Your identity stays protected</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1A4B8C]/10 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#1A4B8C]" />
              </div>
              <div>
                <h4 className="font-bold text-[#1A4B8C]">Non-Retaliation</h4>
                <p className="text-sm text-gray-600">Zero tolerance for retaliation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {!submitted ? (
              <Card className="border-none shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-8">
                    <AlertCircle className="w-6 h-6 text-amber-500" />
                    <p className="text-sm text-gray-600">
                      Fields marked with * are required. You may choose to remain anonymous.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="reportType" className="text-[#1A4B8C] font-semibold">
                        Type of Report *
                      </Label>
                      <select
                        id="reportType"
                        required
                        className="w-full mt-2 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1A4B8C] focus:border-transparent"
                        value={formData.reportType}
                        onChange={(e) => setFormData({...formData, reportType: e.target.value})}
                      >
                        <option value="">Select a category...</option>
                        {reportTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-[#1A4B8C] font-semibold">
                        Description of the Incident *
                      </Label>
                      <Textarea
                        id="description"
                        required
                        placeholder="Please provide details about what happened, when, where, and who was involved..."
                        className="mt-2 min-h-[150px]"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="location" className="text-[#1A4B8C] font-semibold">
                          Location / Project
                        </Label>
                        <Input
                          id="location"
                          placeholder="Project name or office location"
                          className="mt-2"
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="date" className="text-[#1A4B8C] font-semibold">
                          Date of Incident
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          className="mt-2"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <div className="flex items-start gap-4">
                        <input
                          type="checkbox"
                          id="anonymous"
                          checked={formData.anonymous}
                          onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
                          className="mt-1 w-5 h-5 text-[#1A4B8C] rounded focus:ring-[#1A4B8C]"
                        />
                        <div>
                          <Label htmlFor="anonymous" className="text-[#1A4B8C] font-semibold">
                            Submit Anonymously
                          </Label>
                          <p className="text-sm text-gray-600 mt-1">
                            Check this to hide your identity. If unchecked, you may provide contact information below.
                          </p>
                        </div>
                      </div>
                    </div>

                    {!formData.anonymous && (
                      <div>
                        <Label htmlFor="contactEmail" className="text-[#1A4B8C] font-semibold">
                          Contact Email (Optional)
                        </Label>
                        <Input
                          id="contactEmail"
                          type="email"
                          placeholder="email@example.com"
                          className="mt-2"
                          value={formData.contactEmail}
                          onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                        />
                      </div>
                    )}

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-[#1A4B8C] hover:bg-[#153d73] py-6 text-lg font-semibold"
                      >
                        Submit Report Securely
                      </Button>
                      <p className="text-center text-sm text-gray-500 mt-4">
                        By submitting, you confirm the information provided is true to the best of your knowledge.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-none shadow-xl">
                <CardContent className="p-12 text-center">
                  <div className="w-20 h-20 bg-[#4ADE80]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-[#4ADE80]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A4B8C] mb-4">
                    Report Submitted Successfully
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your report. Your case number is <strong>#WB-2024-001</strong>.
                    Our ethics committee will review your submission within 5 business days.
                  </p>
                  <Button 
                    onClick={() => setSubmitted(false)} 
                    variant="outline"
                    className="border-[#1A4B8C] text-[#1A4B8C]"
                  >
                    Submit Another Report
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#1A4B8C] mb-4">Other Ways to Report</h3>
            <p className="text-gray-600">If you prefer, you can also contact us through these channels</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-md text-center">
              <CardContent className="p-8">
                <Phone className="w-8 h-8 mx-auto mb-4 text-[#1A4B8C]" />
                <h4 className="font-bold text-[#1A4B8C] mb-2">Hotline</h4>
                <p className="text-gray-600 text-sm">0800-123-4567</p>
                <p className="text-xs text-gray-500 mt-1">24/7 Confidential</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md text-center">
              <CardContent className="p-8">
                <FileText className="w-8 h-8 mx-auto mb-4 text-[#1A4B8C]" />
                <h4 className="font-bold text-[#1A4B8C] mb-2">Email</h4>
                <p className="text-gray-600 text-sm">etica@ubbim.com</p>
                <p className="text-xs text-gray-500 mt-1">Encrypted communication</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md text-center">
              <CardContent className="p-8">
                <Globe className="w-8 h-8 mx-auto mb-4 text-[#1A4B8C]" />
                <h4 className="font-bold text-[#1A4B8C] mb-2">External Ombudsman</h4>
                <p className="text-gray-600 text-sm">ombudsman-ubbim.org</p>
                <p className="text-xs text-gray-500 mt-1">Independent third-party</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whistleblower;