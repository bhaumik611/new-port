"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, FileDown, Sparkles, ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const roles = [
  "AI/ML Engineer",
  "Telecom & 6G Researcher",
  "Startup Founder",
  "Patent Innovator",
  "Systems Builder",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden text-center">
      {/* Status Chip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-medium text-neutral-800 dark:text-neutral-200"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-900 dark:bg-white" />
        </span>
        <span>Open to Research & Engineering Opportunities</span>
      </motion.div>

      {/* Main Display Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 leading-[1.05]">
          Bhaumik <span className="font-serif-accent font-normal text-neutral-600 dark:text-neutral-400">Patel</span>
        </h1>
      </motion.div>

      {/* Rotating Subtitle */}
      <div className="h-10 sm:h-12 mt-4 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={roleIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-lg sm:text-2xl font-mono text-neutral-700 dark:text-neutral-300 font-medium tracking-tight"
          >
            {roles[roleIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* One-Line Intro */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal"
      >
        Bridging theoretical machine learning research, 6G telecom systems, and production software architectures with patent-backed innovation.
      </motion.p>

      {/* Action CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <MagneticButton href="#projects" variant="primary" size="lg">
          <span>View Selected Work</span>
          <ArrowRight className="w-4 h-4" />
        </MagneticButton>

        <MagneticButton href="/resume" variant="glass" size="lg">
          <FileDown className="w-4 h-4" />
          <span>View Resume</span>
        </MagneticButton>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-6 flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-600"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
