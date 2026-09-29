"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [wavePhase, setWavePhase] = useState(0);
  const requestRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    // Check sessionStorage
    try {
      const shown = sessionStorage.getItem("bhaumik_preloader_seen");
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (shown === "true" || prefersReduced) {
        return;
      }
    } catch {
      // Fallback
    }

    setVisible(true);
    document.body.style.overflow = "hidden";

    const duration = 2800; // 2.8s total duration for silky fluid fill

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawProgress);
      setWavePhase((prev) => (prev + 0.05) % (Math.PI * 2));

      if (elapsed < duration) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setProgress(100);
        setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = "";
          try {
            sessionStorage.setItem("bhaumik_preloader_seen", "true");
          } catch {
            // ignore
          }
        }, 600);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  // Wave math for SVG path
  // SVG viewBox is 800 x 200
  const width = 800;
  const height = 200;
  // Fill level goes from height (bottom) to 0 (top)
  const currentWaterLevel = height - (progress / 100) * height;

  // Wave 1 path
  const amp1 = progress >= 100 ? 0 : 8;
  const freq1 = 0.015;
  let wave1D = `M 0 ${currentWaterLevel}`;
  for (let x = 0; x <= width; x += 10) {
    const y = currentWaterLevel + Math.sin(x * freq1 + wavePhase) * amp1;
    wave1D += ` L ${x} ${y}`;
  }
  wave1D += ` L ${width} ${height} L 0 ${height} Z`;

  // Wave 2 path (offset phase & speed)
  const amp2 = progress >= 100 ? 0 : 6;
  const freq2 = 0.02;
  let wave2D = `M 0 ${currentWaterLevel}`;
  for (let x = 0; x <= width; x += 10) {
    const y = currentWaterLevel + Math.sin(x * freq2 - wavePhase * 1.3) * amp2;
    wave2D += ` L ${x} ${y}`;
  }
  wave2D += ` L ${width} ${height} L 0 ${height} Z`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-black select-none"
        >
          {/* Ambient center backlight */}
          <div className="absolute w-[300px] h-[300px] bg-white/5 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative flex flex-col items-center justify-center px-4 w-full max-w-4xl">
            {/* Liquid Filling Text */}
            <div className="relative w-full max-w-[700px] aspect-[4/1] flex items-center justify-center">
              <svg
                viewBox="0 0 800 200"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Clip path from the text mask */}
                  <clipPath id="text-mask">
                    <text
                      x="50%"
                      y="65%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="font-black tracking-widest text-[115px] font-sans"
                    >
                      BHAUMIK
                    </text>
                  </clipPath>
                </defs>

                {/* Ghost / Outlined Base Text */}
                <text
                  x="50%"
                  y="65%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-black tracking-widest text-[115px] font-sans fill-transparent stroke-white/20 stroke-[1.5]"
                >
                  BHAUMIK
                </text>

                {/* Liquid Waves clipped inside the text */}
                <g clipPath="url(#text-mask)">
                  {/* Back liquid wave */}
                  <path d={wave2D} fill="rgba(255, 255, 255, 0.45)" />
                  {/* Front liquid wave */}
                  <path d={wave1D} fill="rgba(255, 255, 255, 0.95)" />
                </g>
              </svg>
            </div>

            {/* Percentage counter and label */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="flex items-baseline font-mono text-3xl sm:text-4xl tracking-tighter text-neutral-300 font-semibold tabular-nums">
                <span>{progress.toString().padStart(3, " ")}</span>
                <span className="text-sm font-normal text-neutral-500 ml-1.5">%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500">
                  Initializing Portfolio Architecture
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
