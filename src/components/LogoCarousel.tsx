"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Logo {
  name: string;
  url: string;
}

const LOGOS: Logo[] = [
  { name: "Google", url: "https://logo.clearbit.com/google.com" },
  { name: "Dropbox", url: "https://logo.clearbit.com/dropbox.com" },
  { name: "Slack", url: "https://logo.clearbit.com/slack.com" },
  { name: "Spotify", url: "https://logo.clearbit.com/spotify.com" },
  { name: "Airbnb", url: "https://logo.clearbit.com/airbnb.com" },
  { name: "Netflix", url: "https://logo.clearbit.com/netflix.com" },
  { name: "Uber", url: "https://logo.clearbit.com/uber.com" },
  { name: "Twitter", url: "https://logo.clearbit.com/twitter.com" },
];

const LogoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const visibleLogos = 5;
  const totalLogos = LOGOS.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (totalLogos - visibleLogos + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (totalLogos - visibleLogos + 1)) % (totalLogos - visibleLogos + 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-12 overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {LOGOS.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="w-full h-full object-contain grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
              aria-label="Previous logos"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
              aria-label="Next logos"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;