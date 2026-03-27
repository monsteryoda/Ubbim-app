"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Logo {
  name: string;
  image: string;
}

interface LogoCarouselProps {
  logos: Logo[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % logos.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + logos.length) % logos.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-out ${
            isAnimating ? "opacity-50" : "opacity-100"
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {logos.map((logo, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="flex items-center justify-center">
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-[80px] object-contain bg-transparent"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/200x80?text=" + logo.name;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default LogoCarousel;