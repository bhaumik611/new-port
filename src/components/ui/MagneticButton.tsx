"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "secondary" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  target,
  rel,
  variant = "glass",
  size = "md",
  strength = 0.2,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const element = ref.current;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const middleX = e.clientX - (left + width / 2);
      const middleY = e.clientY - (top + height / 2);
      element.style.transform = `translate3d(${middleX * strength}px, ${middleY * strength}px, 0)`;
    });
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    ref.current.style.transform = "translate3d(0px, 0px, 0)";
  }, []);

  const baseStyles =
    "relative inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 outline-none select-none";

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-md hover:shadow-lg active:scale-95",
    secondary:
      "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 active:scale-95",
    glass:
      "glass-pill text-neutral-900 dark:text-neutral-100 hover:border-black/20 dark:hover:border-white/30 hover:bg-white/90 dark:hover:bg-neutral-800/90 active:scale-95",
    ghost:
      "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 active:scale-95",
  };

  const combinedClass = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.18s cubic-bezier(0.25, 1, 0.5, 1)",
        willChange: "transform",
      }}
      className="inline-block transform-gpu"
    >
      {href ? (
        <Link
          href={href}
          target={target}
          rel={rel}
          className={combinedClass}
          onClick={onClick}
        >
          {children}
        </Link>
      ) : (
        <button type="button" onClick={onClick} className={combinedClass}>
          {children}
        </button>
      )}
    </div>
  );
}
