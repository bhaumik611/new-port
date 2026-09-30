"use client";

import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Only enable custom cursor for fine precision pointer devices (desktop mouse)
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);
    document.body.classList.add("custom-cursor-active");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isClicking = false;
    let isVisible = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        if (cursorDotRef.current) cursorDotRef.current.style.opacity = "1";
        if (cursorRingRef.current) cursorRingRef.current.style.opacity = "1";
      }
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (cursorDotRef.current) cursorDotRef.current.style.opacity = "0";
      if (cursorRingRef.current) cursorRingRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (cursorDotRef.current) cursorDotRef.current.style.opacity = "1";
      if (cursorRingRef.current) cursorRingRef.current.style.opacity = "1";
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      isHovered = Boolean(
        target.closest(
          "a, button, input, textarea, select, [role='button'], .clickable, summary"
        )
      );
    };

    // Ultra-smooth 120 FPS render loop with lerp (linear interpolation)
    const render = () => {
      // Lerp for smooth trailing ring
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${
          isClicking ? 0.6 : isHovered ? 1.5 : 1
        })`;
      }

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${
          isClicking ? 0.8 : isHovered ? 1.6 : 1
        })`;
        cursorRingRef.current.style.borderColor = isHovered
          ? "rgba(160, 160, 160, 0.8)"
          : "rgba(160, 160, 160, 0.35)";
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    rafId = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* High-speed hardware-accelerated precision dot */}
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[99999] w-2 h-2 rounded-full bg-neutral-900 dark:bg-white transition-opacity duration-150 transform-gpu opacity-0"
        style={{ willChange: "transform" }}
      />

      {/* Silky trailing ring */}
      <div
        ref={cursorRingRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[99998] w-8 h-8 rounded-full border border-neutral-400/40 transition-[opacity,border-color] duration-150 transform-gpu opacity-0"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
