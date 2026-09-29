"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface CompareProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
}

export function Compare({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  alt = "Image Comparison",
}: CompareProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(clamped);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div className="my-8 space-y-2">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative overflow-hidden rounded-2xl hairline-border aspect-video cursor-ew-resize select-none bg-neutral-900"
      >
        {/* After Image (Full background) */}
        <Image
          src={afterSrc}
          alt={`${alt} ${afterLabel}`}
          fill
          className="object-cover"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative w-full h-full min-w-[600px]">
            <Image
              src={beforeSrc}
              alt={`${alt} ${beforeLabel}`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Divider bar */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white text-black shadow-lg flex items-center justify-center text-xs font-bold font-mono">
            ↔
          </div>
        </div>

        {/* Badges */}
        <span className="absolute bottom-3 left-3 text-[11px] font-mono px-2 py-0.5 rounded glass-pill text-white">
          {beforeLabel}
        </span>
        <span className="absolute bottom-3 right-3 text-[11px] font-mono px-2 py-0.5 rounded glass-pill text-white">
          {afterLabel}
        </span>
      </div>
      <p className="text-center text-xs text-neutral-500">
        Drag or hover to compare before and after
      </p>
    </div>
  );
}
