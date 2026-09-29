"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function Figure({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
  priority = false,
}: FigureProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <figure className="my-8 group relative">
        <div
          onClick={() => setIsOpen(true)}
          className="relative overflow-hidden rounded-2xl hairline-border bg-neutral-100 dark:bg-neutral-900 cursor-zoom-in transition-all duration-300 group-hover:shadow-xl"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />
          <div className="absolute top-3 right-3 p-2 rounded-full glass-pill opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200" />
          </div>
        </div>
        {caption && (
          <figcaption className="mt-2.5 text-center text-xs text-neutral-500 italic">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/85 backdrop-blur-xl p-4 sm:p-8 cursor-zoom-out"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full glass-pill text-white hover:scale-110 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
              {caption && (
                <p className="mt-3 text-center text-sm text-neutral-300">
                  {caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
