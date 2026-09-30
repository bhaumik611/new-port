"use client";

import React, { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  spotlight?: boolean;
  onClick?: () => void;
  as?: "div" | "article" | "section";
}

export function GlassCard({
  children,
  className,
  tilt = false,
  spotlight = true,
  onClick,
  as: Component = "div",
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;

    // Use requestAnimationFrame to prevent layout thrashing and avoid React re-renders
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      if (tilt) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rX = ((y - centerY) / centerY) * -4;
        const rY = ((x - centerX) / centerX) * 4;
        card.style.setProperty("--rotate-x", `${rX}deg`);
        card.style.setProperty("--rotate-y", `${rY}deg`);
      }
    });
  }, [tilt]);

  const handleMouseEnter = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--card-hover", "1");
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const card = cardRef.current;
    card.style.setProperty("--card-hover", "0");
    if (tilt) {
      card.style.setProperty("--rotate-x", "0deg");
      card.style.setProperty("--rotate-y", "0deg");
    }
  }, [tilt]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: tilt
          ? "perspective(800px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))"
          : undefined,
        transition: "transform 0.15s ease-out, border-color 0.2s ease, box-shadow 0.2s ease",
      }}
      className={cn(
        "glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8 transform-gpu will-change-transform",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Hardware-accelerated Spotlight cursor tracking overlay */}
      {spotlight && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-200"
          style={{
            opacity: "var(--card-hover, 0)",
            background: `radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--spotlight-color), transparent 80%)`,
          }}
        />
      )}

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
