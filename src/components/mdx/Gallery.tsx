"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3;
  layout?: "grid" | "carousel";
}

export function Gallery({ images, columns = 2, layout = "grid" }: GalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (layout === "carousel") {
    return (
      <div className="my-8 relative overflow-hidden rounded-2xl hairline-border bg-neutral-950">
        <div className="relative aspect-video w-full">
          <Image
            src={images[activeIdx].src}
            alt={images[activeIdx].alt}
            fill
            className="object-cover transition-opacity duration-300"
          />
        </div>

        {/* Controls */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
          <button
            type="button"
            onClick={() =>
              setActiveIdx((prev) => (prev - 1 + images.length) % images.length)
            }
            className="p-2 rounded-full glass-pill pointer-events-auto hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setActiveIdx((prev) => (prev + 1) % images.length)}
            className="p-2 rounded-full glass-pill pointer-events-auto hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Caption & Indicators */}
        <div className="p-3 glass-panel border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
          <span>{images[activeIdx].caption || images[activeIdx].alt}</span>
          <span>
            {activeIdx + 1} / {images.length}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`my-8 grid gap-4 ${
        columns === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {images.map((img, i) => (
        <figure key={i} className="group overflow-hidden rounded-2xl hairline-border">
          <div className="relative aspect-4/3 w-full bg-neutral-900 overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {img.caption && (
            <figcaption className="p-2 text-center text-xs text-neutral-500 bg-neutral-100 dark:bg-neutral-900">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
