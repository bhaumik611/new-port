"use client";

import React from "react";

interface GifProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function Gif({ src, alt, caption, className }: GifProps) {
  return (
    <figure className={`my-8 ${className || ""}`}>
      <div className="overflow-hidden rounded-2xl hairline-border bg-neutral-100 dark:bg-neutral-900">
        {/* Unoptimized native img for full animated GIF playback */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-neutral-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

interface LoopVideoProps {
  src: string;
  poster?: string;
  caption?: string;
  className?: string;
}

export function LoopVideo({ src, poster, caption, className }: LoopVideoProps) {
  return (
    <figure className={`my-8 ${className || ""}`}>
      <div className="overflow-hidden rounded-2xl hairline-border bg-neutral-950">
        <video
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-neutral-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
