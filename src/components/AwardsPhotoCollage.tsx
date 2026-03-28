"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

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
    src: "/a-1.jpeg",
    alt: "UBBIM team receiving SME Environmental Award",
    caption: "SME Environmental, Social, and Governance Adoption Award 2025",
    span: "2x1"
  },
  {
    id: "2",
    src: "/a-2.jpeg",
    alt: "UBBIM team receiving SME ICT Digitalisation Award",
    caption: "SME ICT / Digitalisation Award 2025 - Platinum Business Awards"
  },
  {
    id: "3",
    src: "/a-3.jpeg",
    alt: "Executive receiving award on stage",
    caption: "Platinum Business Awards 2025"
  },
  {
    id: "4",
    src: "/a-4.jpeg",
    alt: "Executive holding award trophy",
    caption: "Platinum Business Awards 2025 - Executive Recognition"
  },
  {
    id: "5",
    src: "/a-5.jpeg",
    alt: "UBBIM team with awards at SME Malaysia event",
    caption: "SME Malaysia Platinum Business Awards 2025"
  },
  {
    id: "6",
    src: "/src/assets/award-ceremony-6.jpeg",
    alt: "UBBIM awards and certificates display",
    caption: "SME Awards Recognition - UBBIM Resources Sdn Bhd"
  }
];

const AwardsPhotoCollage: React.FC<AwardsPhotoCollageProps> = ({ photos }) => {
  const displayPhotos = photos || defaultPhotos;
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPhoto = (photo: PhotoItem, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayPhotos.length);
    setSelectedPhoto(displayPhotos[(currentIndex + 1) % displayPhotos.length]);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + displayPhotos.length) % displayPhotos.length);
    setSelectedPhoto(displayPhotos[(currentIndex - 1 + displayPhotos.length) % displayPhotos.length]);
  };

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
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center">
            <Camera className="w-10 h-10 text-[#4ADE80] mr-3" />
            Moments from the SME Awards Ceremony
          </h2>
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
              className={`relative overflow-hidden rounded-xl cursor-pointer ${
                photo.span === "2x1" ? "md:col-span-2" : ""
              }`}
              onClick={() => openPhoto(photo, index)}
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
                    
                    {/* Click to View Indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-8 h-8 text-[#4ADE80] drop-shadow-lg" />
                    </div>
                    
                    {/* Click Hint */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-xs font-medium bg-black/50 px-3 py-1 rounded-full">
                        Click to view full
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#4ADE80] transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#4ADE80] transition-colors p-2"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#4ADE80] transition-colors p-2"
              >
                <ChevronRight className="w-10 h-10" />
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                {currentIndex + 1} / {displayPhotos.length}
              </div>

              {/* Full Image */}
              <img
                key={selectedPhoto.id}
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AwardsPhotoCollage;