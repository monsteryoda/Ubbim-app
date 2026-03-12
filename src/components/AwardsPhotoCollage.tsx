"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Star } from "lucide-react";

interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  span?: "1x1" | "2x1" | "1x2";
}

interface AwardsPhotoCollageProps {
  photos?: PhotoItem[];
}

const defaultPhotos: PhotoItem[] = [
  {
    id: "1",
    src: "/src/assets/award-ceremony-1.jpeg",
    alt: "UBBIM team receiving SME Environmental Award",
    caption: "SME Environmental, Social, and Governance Adoption Award 2025",
    span: "2x1"
  },
  {
    id: "2",
    src: "/src/assets/award-ceremony-2.jpeg",
    alt: "UBBIM team receiving SME ICT Digitalisation Award",
    caption: "SME ICT / Digitalisation Award 2025 - Platinum Business Awards"
  },
  {
    id: "3",
    src: "/src/assets/award-ceremony-3.jpeg",
    alt: "Executive receiving award on stage",
    caption: "Platinum Business Awards 2025"
  },
  {
    id: "4",
    src: "/src/assets/award-ceremony-4.jpeg",
    alt: "Executive holding award trophy",
    caption: "Platinum Business Awards 2025 - Executive Recognition"
  },
  {
    id: "5",
    src: "/src/assets/award-ceremony-5.jpeg",
    alt: "UBBIM team with awards at SME Malaysia event",
    caption: "SME Malaysia Platinum Business Awards 2025"
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    alt: "Team celebration",
    caption: "Celebrating our achievements"
  }
];

const AwardsPhotoCollage: React.FC<AwardsPhotoCollageProps> = ({ photos }) => {
  const displayPhotos = photos || defaultPhotos;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-10 h-10 text-[#4ADE80] mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Award Ceremony Moments
            </h2>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Capturing the pride and celebration of our achievements
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {displayPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-xl ${
                photo.span === "2x1" ? "md:col-span-2" : ""
              }`}
            >
              <Card className="border-none bg-gray-800/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="relative group">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Caption */}
                    {photo.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-medium">
                          {photo.caption}
                        </p>
                      </div>
                    )}

                    {/* Award Icon Overlay */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Award className="w-8 h-8 text-[#4ADE80] drop-shadow-lg" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-8 mt-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Star className="w-6 h-6 text-[#4ADE80]/30" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <Award className="w-6 h-6 text-[#4ADE80]/30" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <Trophy className="w-6 h-6 text-[#4ADE80]/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardsPhotoCollage;