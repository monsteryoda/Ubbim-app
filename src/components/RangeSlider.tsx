"use client";

import React, { useState } from "react";

interface RangeSliderProps {
  min?: number;
  max?: number;
  defaultValue?: [number, number];
  onChange?: (values: [number, number]) => void;
  className?: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 100,
  defaultValue = [0, 100],
  onChange,
  className = "",
}) => {
  const [values, setValues] = useState<[number, number]>(defaultValue);

  const handleInputChange = (index: number, value: number) => {
    const newValues = [...values] as [number, number];
    newValues[index] = Math.min(max, Math.max(min, value));
    
    // Ensure min doesn't exceed max and vice versa
    if (newValues[0] > newValues[1]) {
      newValues[0] = newValues[1];
    }
    if (newValues[1] < newValues[0]) {
      newValues[1] = newValues[0];
    }
    
    setValues(newValues as [number, number]);
    onChange?.(newValues as [number, number]);
  };

  const handleSliderChange = (index: number, value: number) => {
    const newValues = [...values] as [number, number];
    newValues[index] = value;
    
    if (newValues[0] > newValues[1]) {
      newValues[0] = newValues[1];
    }
    if (newValues[1] < newValues[0]) {
      newValues[1] = newValues[0];
    }
    
    setValues(newValues as [number, number]);
    onChange?.(newValues as [number, number]);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={values[0]}
          onChange={(e) => handleInputChange(0, Number(e.target.value))}
          min={min}
          max={max}
          className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1A4B8C] focus:border-transparent"
        />
        <span className="text-gray-500">-</span>
        <input
          type="number"
          value={values[1]}
          onChange={(e) => handleInputChange(1, Number(e.target.value))}
          min={min}
          max={max}
          className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1A4B8C] focus:border-transparent"
        />
      </div>
      
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute h-full bg-[#1A4B8C] rounded-full"
          style={{
            left: `${((values[0] - min) / (max - min)) * 100}%`,
            right: `${100 - ((values[1] - min) / (max - min)) * 100}%`,
          }}
        />
        
        <input
          type="range"
          min={min}
          max={max}
          value={values[0]}
          onChange={(e) => handleSliderChange(0, Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: 10 }}
        />
        
        <input
          type="range"
          min={min}
          max={max}
          value={values[1]}
          onChange={(e) => handleSliderChange(1, Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: 5 }}
        />
        
        <div
          className="absolute h-6 w-6 bg-white border-2 border-[#1A4B8C] rounded-full shadow-md pointer-events-none"
          style={{
            left: `calc(${((values[0] - min) / (max - min)) * 100}% - 12px)`,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        
        <div
          className="absolute h-6 w-6 bg-white border-2 border-[#1A4B8C] rounded-full shadow-md pointer-events-none"
          style={{
            left: `calc(${((values[1] - min) / (max - min)) * 100}% - 12px)`,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;