"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function BrandLogo({ size = 28, className, showText = false }: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div 
        className="relative flex items-center justify-center rounded-xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105 border border-neutral-200/50 dark:border-white/10"
        style={{ width: size, height: size }}
      >
        <Image
          src="/brand-icon.svg"
          alt="Bhaumik Patel Logo"
          width={size}
          height={size}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      {showText && (
        <span className="font-semibold text-sm tracking-tight text-neutral-950 dark:text-neutral-50">
          Bhaumik Patel
        </span>
      )}
    </div>
  );
}
