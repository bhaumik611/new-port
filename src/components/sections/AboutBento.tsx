"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Compass, Cpu, FileText, Award, Layers } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatCounter } from "@/components/ui/StatCounter";
import { TextReveal } from "@/components/ui/TextReveal";
import { marqueeSkills } from "@/content/skills-data";

export function AboutBento() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
          <span>About Me</span>
        </div>
        <TextReveal italicWord="Philosophy">
          Engineering with Curiosity and Scientific Rigour
        </TextReveal>
      </div>

      {/* Apple-style Glass Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Tile 1: Core Bio (Span 2 cols on md/lg) */}
        <GlassCard className="md:col-span-2 lg:col-span-2 flex flex-col justify-between p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Biography
              </span>
              <Cpu className="w-4 h-4 text-neutral-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 mb-3">
              Building at the intersection of AI theory and physical systems.
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I am an AI/ML engineer and researcher specializing in deep learning architectures, multimodal intelligence, and edge systems. My work spans foundational algorithm research, patent engineering at i-Hub Gujarat, and building scalable LLM infrastructure.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center gap-4 text-xs font-mono text-neutral-500">
            <span>Core: Machine Learning</span>
            <span>•</span>
            <span>Focus: Systems & AI Architecture</span>
          </div>
        </GlassCard>

        {/* Tile 2: Location */}
        <GlassCard className="md:col-span-1 lg:col-span-1 flex flex-col justify-between p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Location
              </span>
              <MapPin className="w-4 h-4 text-neutral-400" />
            </div>
            <h4 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              Gujarat, India
            </h4>
            <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
              Based in Gandhinagar / Ahmedabad. Active across academic research labs and startup incubators.
            </p>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
            <span>UTC +05:30 (IST)</span>
          </div>
        </GlassCard>

        {/* Tile 3: Education (NO CGPA anywhere!) */}
        <GlassCard className="md:col-span-1 lg:col-span-1 flex flex-col justify-between p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Education
              </span>
              <GraduationCap className="w-4 h-4 text-neutral-400" />
            </div>
            <h4 className="text-base font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
              B.Tech in Computer Engineering
            </h4>
            <p className="mt-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
              Pandit Deendayal Energy University (PDEU)
            </p>
            <p className="mt-2 text-xs text-neutral-500">
              2023 — 2027
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-200/60 dark:border-neutral-800/60 text-[11px] text-neutral-500">
            Coursework: Advanced Algorithms, Neural Networks, Computer Networks, Operating Systems
          </div>
        </GlassCard>

        {/* Tile 4: Current Focus */}
        <GlassCard className="md:col-span-2 lg:col-span-2 flex flex-col justify-between p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Current Focus
              </span>
              <Compass className="w-4 h-4 text-neutral-400" />
            </div>
            <h4 className="text-lg font-bold tracking-tight text-neutral-950 dark:text-neutral-50 mb-2">
              Deep Learning & High-Performance AI Systems
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                <span>Uncertainty-aware LLM meta-routing and cost-optimized RAG pipelines</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                <span>Patent evaluation & prior-art landscape drafting at i-Hub Gujarat</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                <span>High-speed networked intelligence & protocol performance optimization at IIT Gandhinagar</span>
              </li>
            </ul>
          </div>
        </GlassCard>

        {/* Tile 5: Stats Tile with 7 Patents */}
        <GlassCard className="md:col-span-2 lg:col-span-2 p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Key Metrics & Impact
            </span>
            <Award className="w-4 h-4 text-neutral-400" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-neutral-50">
                <StatCounter value={6} />
              </div>
              <div className="text-xs text-neutral-500 font-medium">Research Papers</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-neutral-50">
                <StatCounter value={7} />
              </div>
              <div className="text-xs text-neutral-500 font-medium">Patents Filed</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-neutral-50">
                <StatCounter value={6} suffix="+" />
              </div>
              <div className="text-xs text-neutral-500 font-medium">Key Projects</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-neutral-50">
                <StatCounter value={5} suffix="+" />
              </div>
              <div className="text-xs text-neutral-500 font-medium">Roles & Internships</div>
            </div>
          </div>
        </GlassCard>

        {/* Tile 6: Skills Continuous Marquee Banner */}
        <div className="md:col-span-3 lg:col-span-4 overflow-hidden rounded-3xl glass-panel p-4 hairline-border">
          <div className="relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex items-center gap-3 whitespace-nowrap py-1">
              {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 rounded-full text-xs font-mono font-medium glass-pill text-neutral-700 dark:text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
